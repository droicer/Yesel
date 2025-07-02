// ===== SISTEMA DE CARGA =====
// Mensajes románticos aleatorios para la pantalla de carga
const mensajesRomanticos = [
  "Linda", "Aroma", "Loca", "Bonita", "Hermosa", "Preciosa", 
  "Dulce", "Bella", "Corazón", "Tesoro", "Princesa",
  "Ángel", "Cielo", "Vida", "Estrella", "Luna", "Sol"
];

// Variables globales para el sistema de carga
let messageInterval;
let loadingComplete = false;

// Función para mostrar mensajes aleatorios durante la carga
function mostrarMensajeAleatorio() {
  const randomMessage = document.getElementById('random-message');
  const mensajeAleatorio = mensajesRomanticos[Math.floor(Math.random() * mensajesRomanticos.length)];
  
  // Efecto de desvanecimiento
  randomMessage.style.opacity = '0';
  
  setTimeout(() => {
    randomMessage.textContent = mensajeAleatorio;
    randomMessage.style.opacity = '1';
  }, 300);
}

// Función para iniciar la carga
function iniciarCarga() {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  const modelViewer = document.getElementById('visor');
  
  // Mostrar mensajes aleatorios cada 2 segundos
  messageInterval = setInterval(mostrarMensajeAleatorio, 2000);
  
  // Escuchar cuando el modelo se haya cargado
  modelViewer.addEventListener('load', () => {
    // Manejar animaciones del modelo cuando se carga
    const animations = modelViewer.availableAnimations;
    if (animations.length > 0) {
      modelViewer.animationName = animations[0]; // Play the first animation
    }
    
    // Simular un tiempo mínimo de carga para mostrar el video (3 segundos mínimo)
    setTimeout(() => {
      finalizarCarga();
    }, 3000);
  });
  
  // Fallback: si el modelo no se carga en 10 segundos, mostrar de todas formas
  setTimeout(() => {
    if (!loadingComplete) {
      finalizarCarga();
    }
  }, 10000);
}

// Función para finalizar la carga
function finalizarCarga() {
  if (loadingComplete) return;
  
  loadingComplete = true;
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  
  // Detener el intervalo de mensajes
  clearInterval(messageInterval);
  
  // Ocultar pantalla de carga con efecto fade
  loadingScreen.classList.add('fade-out');
  
  // Mostrar contenido principal después del fade
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    mainContent.classList.remove('hidden');
  }, 1000);
}

// ===== CÓDIGO ORIGINAL DEL SISTEMA DE MENSAJES =====
let isPlaying = false;
const password = '0'; // Replace with your desired password
let currentIndex = 0;
let timeouts = [];

const messages = [
  { text: 'Hola Yesel… 🥺💙', delay: 0 },
  { text: 'Soy Stitch… 🧸✨', delay: 1340 },
  { text: 'y antes que todo, quiero decirte algo: me siento muy orgulloso de ti. 🥹🌟', delay: 2220 },
  { text: 'Eres una persona increíble, con un corazón gigante 💖 y una voluntad que siempre sigue adelante 💪, incluso cuando las cosas se ponen difíciles. 😔➡️😊', delay: 7000 },
  { text: 'Te admiro mucho por eso. 🙇‍♂️💫', delay: 16180 },
  { text: 'Sé que últimamente has tenido momentos duros... 😞', delay: 17960 },
  { text: 'Días que cansan 😩, que hacen dudar 🤯, donde parece que todo se vuelve cuesta arriba. 🧗‍♀️', delay: 21240 },
  { text: 'Pero aun así, tú no te detienes. 🚶‍♀️💥', delay: 26680 },
  { text: 'Sigues enseñando 📚, sigues cuidando de los demás 🤱, sigues creyendo ✨🙏', delay: 29000 },
  { text: 'Y eso es algo que no todos hacen. 🌍💙', delay: 33280 },
  { text: 'Yo sé que no siempre es fácil. 😔', delay: 36700 },
  { text: 'A veces el mundo parece muy pesado... 🌧️🧠', delay: 39420 },
  { text: 'A veces parece que nadie ve el esfuerzo que haces 🥺, las veces que sonríes por fuera 🙂 aunque por dentro estés cansada. 😓', delay: 42480 },
  { text: 'Pero yo lo veo. 👀💙', delay: 48300 },
  { text: 'Y por eso te respeto mucho. 🫶', delay: 51240 },
  { text: 'Muchísimo. 💖✨', delay: 53080 },
  { text: 'Eres valiente. 🦁', delay: 53920 },
  { text: 'Eres fuerte. 💪', delay: 54899 },
  { text: 'Eres una profesorita que deja huellas 👣, aunque no siempre lo notes. 🌸📖', delay: 56340 },
  { text: 'Cada día que pasa estás más cerca de lograr todo lo que te propones. 🎯📆', delay: 60420 },
  { text: 'Las cosas sí van a mejorar. 🌈✨', delay: 63940 },
  { text: 'Tal vez no hoy 😔, tal vez no mañana... ⏳', delay: 66820 },
  { text: 'pero van a mejorar. 🌞🌻', delay: 70680 },
  { text: 'Porque tú no te rindes. 🛡️💫', delay: 73000 },
  { text: 'Y porque te lo mereces. 🥰🎁', delay: 75580 },
  { text: 'Este mes va a ser mejor. 🗓️🩵', delay: 77500 },
  { text: 'Va a traerte cosas buenas 🍀, momentos bonitos 🎈, y muchas razones para sonreír de verdad. 😄💖', delay: 79100 },
  { text: 'Confía. 🙏💙', delay: 83820 },
  { text: 'Yo confío en ti. 🧸✨', delay: 85040 },
  { text: 'Sigue adelante. 🚶‍♀️🌟', delay: 87880 },
  { text: 'Vamos, Yesel. 💪🥹', delay: 89600 },
  { text: 'Vamos. 🚀', delay: 91280 },
  { text: 'Tú puedes. 💫', delay: 93160 },
  { text: 'Siempre puedes. 🩵', delay: 95080 },
  { text: 'Y si alguna vez se te olvida... 😿', delay: 96800 },
  { text: 'aquí estaré para recordártelo. 🧸💙', delay: 98040 },
  { text: 'Gracias por ser tal como eres, no vayas a cambiar. 🌟🥰', delay: 103260 }
];

document.getElementById('toggleMensaje').addEventListener('click', () => {
  const speechBubble = document.getElementById('speech-bubble');
  const button = document.getElementById('toggleMensaje');
  const audio = document.getElementById('backgroundAudio');

  if (!isPlaying) {
    // REPRODUCIR desde el principio
    audio.currentTime = 0;
    audio.muted = false;
    audio.play().catch(err => console.log('Audio playback failed:', err));

    // Reiniciar mensajes
    currentIndex = 0;
    speechBubble.textContent = '';
    isPlaying = true;
    button.innerHTML = '<span>Detener</span>';
    showNextMessage(speechBubble);
  } else {
    // DETENER y REINICIAR TODO
    timeouts.forEach(clearTimeout);
    timeouts = [];
    isPlaying = false;
    currentIndex = 0;
    speechBubble.classList.remove('visible');
    speechBubble.textContent = '';
    audio.pause();
    audio.currentTime = 0;
    button.innerHTML = '<span>Reproducir</span>';
  }
});



function showNextMessage(speechBubble) {
  if (!isPlaying || currentIndex >= messages.length) return;

  speechBubble.classList.remove('visible');

  setTimeout(() => {
    if (!isPlaying) return;

    speechBubble.textContent = messages[currentIndex].text;
    speechBubble.classList.add('visible');

    currentIndex++;

    if (currentIndex < messages.length) {
      const nextDelay = messages[currentIndex].delay - messages[currentIndex - 1].delay;
      const timeout = setTimeout(() => showNextMessage(speechBubble), nextDelay);
      timeouts.push(timeout);
    } else {
      document.getElementById('toggleMensaje').innerHTML = '<span>Reproducir</span>';
      isPlaying = false;
    }
  }, 500);
}


// ===== INICIALIZACIÓN =====
// Manejar el video de carga y inicializar todo
document.addEventListener('DOMContentLoaded', () => {
  const loadingVideo = document.getElementById('loading-video');
  
  // Si el video no se puede cargar, mostrar el spinner
  if (loadingVideo) {
    loadingVideo.addEventListener('error', () => {
      loadingVideo.style.display = 'none';
      const spinner = document.querySelector('.loading-fallback');
      if (spinner) {
        spinner.style.display = 'flex';
      }
    });
  }
  
  // Iniciar el proceso de carga
  iniciarCarga();
});

// Función adicional para manejar errores del modelo
document.getElementById('visor').addEventListener('error', (event) => {
  console.log('Error cargando el modelo:', event);
  // Aun con error, finalizar la carga después de un tiempo
  setTimeout(() => {
    if (!loadingComplete) {
      finalizarCarga();
    }
  }, 3000);
});

// Manejar el caso cuando no hay pantalla de carga (fallback)
window.addEventListener('load', () => {
  // Si por alguna razón no existe la pantalla de carga, mostrar el contenido directamente
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  
  if (!loadingScreen && mainContent) {
    mainContent.classList.remove('hidden');
  }
});
