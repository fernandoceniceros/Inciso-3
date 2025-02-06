// Inicializamos el índice de la imagen actual
let index = 0;

// Seleccionamos los elementos del carrusel
const images = document.querySelector('.carousel-images');
const totalImages = images.querySelectorAll('img').length;

// Función para avanzar la imagen
function nextImage() {
  index = (index + 1) % totalImages;
  updateCarousel();
}

// Función para retroceder la imagen
function prevImage() {
  index = (index - 1 + totalImages) % totalImages;
  updateCarousel();
}

// Función para actualizar la posición del carrusel
function updateCarousel() {
  images.style.transform = `translateX(-${index * 100}%)`;
}

// Cambio automático cada 30s
setInterval(nextImage, 30000);

// Control por botones
document.querySelector('.next-btn').addEventListener('click', nextImage);
document.querySelector('.prev-btn').addEventListener('click', prevImage);

// Control por teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
});

// Fernando Ceniceros  
// 05/02/25  
// Diseño Web 2