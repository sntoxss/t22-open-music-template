document.addEventListener("DOMContentLoaded", () => {
  const buttonNight = document.getElementById("buttonNight");
  const buttonImg = buttonNight.querySelector("img");

  const isDarkMode = localStorage.getItem('dark-mode');

  if (isDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    buttonImg.src = "./src/assets/icons/sun-icon.svg";
  }

  buttonNight.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains('dark-mode')) {
      buttonImg.src = "./src/assets/icons/sun-icon.svg"; 
    } else {
      buttonImg.src = "./src/assets/icons/moon-icon.svg"; 
    }

    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
  });
});
