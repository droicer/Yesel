// Variables para el carrusel
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

// Función para cambiar la imagen
function moveSlide(n) {
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  const carouselImages = document.querySelector('.carousel-images');
  carouselImages.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Cambiar imagen automáticamente cada 2 segundos
setInterval(() => {
  moveSlide(1);
}, 4000);

// Modal
const openBtn = document.getElementById('openBtn');
const modalCard = document.getElementById('modalCard');
const closeBtn = document.getElementById('closeBtn');

// Mostrar la tarjeta modal con animación
openBtn.addEventListener('click', function() {
  modalCard.classList.add('show');
  reproducirAudio();
  actualizarContador(1);
});

// Cerrar la tarjeta modal con animación
closeBtn.addEventListener('click', function() {
  modalCard.classList.remove('show');
});



document.getElementById("listenBtn").addEventListener("click", function() {
  // URL de la canción de YouTube (enlace de incrustación)
  const songUrl = "https://www.boomplay.com/embed/185494954/MUSIC?colType=5&colID=99884883"; // Enlace de incrustación


  // Establece la URL en el iframe del modal de la canción
  document.getElementById("songIframe").src = songUrl;

  // Muestra el modal de la canción
  document.getElementById("songModal").classList.add("show");

  pausarAudio();

  
});

function pausarAudio() {
  document.getElementById('miAudio').pause();
}

function reproducirAudio() {
  document.getElementById('miAudio').play().catch(error => {
      console.log("Se necesita interacción del usuario para reproducir el audio.");
  });
}

document.getElementById("closeSongBtn").addEventListener("click", function() {
  // Oculta el modal de la canción
  document.getElementById("songModal").classList.remove("show");

  
  // Limpia el src del iframe para detener la canción
  document.getElementById("songIframe").src = "";

  reproducirAudio();
});



function actualizarContador(id) {
  fetch('https://westhamurban.com/Westham/count/index.php', {  // ← Aquí la URL de tu API
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `id=${id}`
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          console.log("Contador actualizado correctamente");
      } else {
          console.error("Error al actualizar:", data.message);
      }
  })
  .catch(error => console.error("Error en la solicitud:", error));
}
