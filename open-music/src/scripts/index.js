import { applyInputRangeStyle } from "./inputRange.js";
import { fetchMusics } from "./api.js";

const genresButton = document.querySelectorAll(".genres__item");

genresButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    genresButton.forEach((btn) => {
      btn.classList.remove("genres__select");
    });
    button.classList.add("genres__select");
  });
});

function routine() {
  applyInputRangeStyle();
}

routine();

const selectedPriceElement = document.getElementById("selected-price");
const priceInput = document.getElementById("selectorPrice__input");
const albumsContainer = document.querySelector(".block__album");

function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

async function loadAlbums() {
  const albums = await fetchMusics();
  if (albums) {
    return albums;
  }
  return [];
}

async function updateAlbumsDisplay(price) {
  albumsContainer.innerHTML = ""; 

  const albumList = await loadAlbums();
  const filteredAlbums = albumList.filter(album => parseFloat(album.price) <= price);

  filteredAlbums.forEach(album => {
    const albumElement = document.createElement("div");
    albumElement.classList.add("album__item");

    albumElement.innerHTML = `
      <img src="${album.img}" alt="Foto do album ${album.title}">
      <div class="titleAlbum">
        <h2>${album.title}</h2>
      </div>
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

    albumsContainer.appendChild(albumElement);
  });
}

const debouncedUpdate = debounce((event) => {
  const currentPrice = event.target.value;
  selectedPriceElement.textContent = currentPrice;
  updateAlbumsDisplay(parseFloat(currentPrice));
}, 300);

priceInput.addEventListener("input", debouncedUpdate);

updateAlbumsDisplay(parseFloat(priceInput.value));