import { applyInputRangeStyle } from "./inputRange.js";
import { albumList } from "./albumDatabase.js";

const genresButton = document.querySelectorAll(".genres__item");
genresButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    genresButton.forEach((btn) => {
      btn.classList.remove("genres__select");
    });
    button.classList.add("genres__select");
    const genre = button.querySelector('p').innerText;
    renderAlbums(genre);
  });
});

function renderAlbums(genre) {
  const albumContainer = document.querySelector(".block__album");
  albumContainer.innerHTML = '';

  const filteredAlbums = genre === "Todos" ? albumList : albumList.filter(album => album.genre === genre);

  filteredAlbums.forEach(album => {
    const albumItem = document.createElement('div');
    albumItem.className = 'album__item';
    
    albumItem.innerHTML = `
      <img src="${album.img}" alt="Foto do álbum ${album.title}">
      <div class="titleAlbum"><h2>${album.title}</h2></div>
      <div class="album-banda">
        <p>${album.band}</p>
        <p>${album.genre}</p>
      </div>
      <div class="album-price">
        <div>
          <p>R$ ${album.price}</p>
          <button>Comprar</button>
        </div>
      </div>
    `;
    
    albumContainer.appendChild(albumItem);
  });
}

function routine() {
  applyInputRangeStyle();
  renderAlbums("Todos");
}

routine();
