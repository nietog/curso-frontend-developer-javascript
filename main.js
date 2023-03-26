const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamIcon = document.querySelector(".hamIcon"); 
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
hamIcon.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleAside)

function toggleDesktopMenu () {
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
}

function toggleAside () {
    aside.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}