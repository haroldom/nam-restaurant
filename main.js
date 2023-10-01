const galleryMenu = document.querySelector(".swiper-wrapper");

const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const menuContainer = document.querySelector(".nav-menu-container");
const body = document.querySelector("body");
const menuLinks = document.getElementsByClassName("menu-link");
// const imagesContainer = document.querySelector(".menu-images-container")
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function () {
        menuContainer.classList.remove("show");
        body.style.overflowY = "auto"; 
    });
}

openButton.addEventListener("click", () => {
    menuContainer.classList.add("show");
    body.style.overflowY = "hidden";
});
closeButton.addEventListener("click", () => {
    menuContainer.classList.remove("show");
    body.style.overflowY = "auto";
});

// // archivo.js
fetch("gallery-menu.json")
    .then((response) => response.json())
    .then((data) => {
        data.items.forEach((item) => {
            // Creamos un div para cada elemento
            const itemDiv = document.createElement("div");

            // Creamos la imagen y establecemos la fuente de la imagen
            const img = document.createElement("img");
            img.src = item.url;

            // Creamos un párrafo para mostrar el nombre
            const nameParagraph = document.createElement("p");
            nameParagraph.textContent = item.name;

            // Agregamos la imagen y el párrafo al div del elemento
            itemDiv.appendChild(img);
            itemDiv.appendChild(nameParagraph);
            itemDiv.classList.add('swiper-slide')
            // Agregamos el div del elemento al contenedor principal
            galleryMenu.appendChild(itemDiv);
        });
    })
    .catch((error) => console.error("Error al cargar el JSON: " + error));

// let isDragging = false;

// const dragStart = ()=>{
//     isDragging = true;
// }
// const dragging = (e)=>{
//     if(!isDragging) return;
//     imagesContainer.scrollLeft = e.pageX;
// }
// const dragStop = ()=>{
//     isDragging = false;
// }

// imagesContainer.addEventListener('mousedown', dragStart);
// imagesContainer.addEventListener("mousemove", dragging);
// imagesContainer.addEventListener("mouseup", dragStop);