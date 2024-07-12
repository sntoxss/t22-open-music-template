const genresButton = document.querySelectorAll(".genres__item");
const removeButtonClass = document.querySelector('.genres__select')

genresButton.forEach((button)=> {
  button.addEventListener('click',(e) => {
    e.preventDefault
    genresButton.forEach((btn) => {
      btn.classList.remove('genres__select')
    });
    button.classList.add('genres__select')
  });
});
