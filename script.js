let hamburgerMenu = document.querySelector(".hamburger-menu");
let aside = document.querySelector("aside");

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    aside.classList.toggle('show');
});