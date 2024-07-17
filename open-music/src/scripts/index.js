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
  });
});

function routine() {
  applyInputRangeStyle();
}

routine();

const selectedPriceElement = document.getElementById("selected-price");
const priceInput = document.getElementById("selectorPrice__input");
const albumsContainer = document.querySelector(".block__album");


priceInput.addEventListener("input", (event) => {
  const currentPrice = event.target.value;
  selectedPriceElement.textContent = currentPrice;
  filterAlbumsByPrice(currentPrice);
});

function filterAlbumsByPrice(maxPrice) {
  
  albumsContainer.innerHTML = "";

  
  const filteredAlbums = albumList.filter(album => parseFloat(album.price) <= maxPrice);

  filteredAlbums.forEach(album => {
    const albumElement = createAlbumElement(album);
    albumsContainer.appendChild(albumElement);
  });
}

function createAlbumElement(album) {
  const albumItem = document.createElement("div");
  albumItem.classList.add("album__item");

  albumItem.innerHTML = `
    <img src="${album.img}" alt="Foto do album ${album.band}">
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

  return albumItem;
}


filterAlbumsByPrice(priceInput.value);
