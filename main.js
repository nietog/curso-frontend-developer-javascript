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

const productList = [];
productList.push({
    name: "Bike",
    price: "120,00",
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computer",
    price: "300,00",
    image:"https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: "Monitor",
    price: "110,00",
    image:"https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: "Headphones",
    price: "80,00",
    image:"https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});


function renderProducts (arr) {
    for (const product of arr) {
        const container = document.querySelector(".cards-container");
    
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const image = document.createElement("img");
        image.src = product.image;
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$"+ product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        const figure = document.createElement("figure");
    
        const addImage = document.createElement("img");
        addImage.src = "./icons/bt_add_to_cart.svg"
    
        figure.appendChild(addImage);
        productDiv.append(productPrice, productName);
        productInfo.append(productDiv, figure);
        productCard.append(image, productInfo);
        container.appendChild( productCard);
    }
}

renderProducts(productList);


