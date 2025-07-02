let isPlaying = false;
const password = '0'; // Replace with your desired password
let currentIndex = 0;
let timeouts = [];

const messages = [
  { text: 'Hola Yesel…', delay: 0 },
  { text: 'Soy Stitch…', delay: 1340 },
  { text: 'y antes que todo, quiero decirte algo: me siento muy orgulloso de ti.', delay: 2220 },
  { text: 'Eres una persona increíble, con un corazón gigante y una voluntad que siempre sigue adelante, incluso cuando las cosas se ponen difíciles.', delay: 7000 },
  { text: 'Te admiro mucho por eso.', delay: 16180 },
  { text: 'Sé que últimamente has tenido momentos duros.', delay: 17960 },
  { text: 'Días que cansan, que hacen dudar, donde parece que todo se vuelve cuesta arriba.', delay: 21240 },
  { text: 'Pero aun así, tú no te detienes.', delay: 26680 },
  { text: 'Sigues enseñando, sigues cuidando de los demás, sigues creyendo.', delay: 29000 },
  { text: 'Y eso es algo que no todos hacen.', delay: 33280 },
  { text: 'Yo sé que no siempre es fácil.', delay: 36700 },
  { text: 'A veces el mundo parece muy pesado.', delay: 39420 },
  { text: 'A veces parece que nadie ve el esfuerzo que haces, las veces que sonríes por fuera aunque por dentro estés cansada.', delay: 42480 },
  { text: 'Pero yo lo veo.', delay: 50300 },
  { text: 'Y por eso te respeto mucho.', delay: 52240 },
  { text: 'Muchísimo.', delay: 55080 },
  { text: 'Eres valiente.', delay: 56720 },
  { text: 'Eres fuerte.', delay: 58599 },
  { text: 'Eres una profesorita que deja huellas, aunque no siempre lo notes.', delay: 60340 },
  { text: 'Cada día que pasa estás más cerca de lograr todo lo que te propones.', delay: 65420 },
  { text: 'Las cosas sí van a mejorar.', delay: 69940 },
  { text: 'Tal vez no hoy, tal vez no mañana...', delay: 72820 },
  { text: 'pero van a mejorar.', delay: 76680 },
  { text: 'Porque tú no te rindes.', delay: 78800 },
  { text: 'Y porque te lo mereces.', delay: 81080 },
  { text: 'Este mes va a ser mejor.', delay: 83500 },
  { text: 'Va a traerte cosas buenas, momentos bonitos, y muchas razones para sonreír de verdad.', delay: 86100 },
  { text: 'Confía.', delay: 91820 },
  { text: 'Yo confío en ti.', delay: 94040 },
  { text: 'Sigue adelante.', delay: 96880 },
  { text: 'Vamos, Yesel.', delay: 98600 },
  { text: 'Vamos.', delay: 100880 },
  { text: 'Tú puedes.', delay: 102160 },
  { text: 'Siempre puedes.', delay: 104280 },
  { text: 'Y si alguna vez se te olvida...', delay: 106200 },
  { text: 'aquí estaré para recordártelo.', delay: 108440 },
  { text: 'Porque creo en ti con todo mi corazón', delay: 111260 }
];


document.getElementById('toggleMensaje').addEventListener('click', () => {
  const speechBubble = document.getElementById('speech-bubble');
  const button = document.getElementById('toggleMensaje');
  const audio = document.getElementById('backgroundAudio');

  if (!isPlaying) {
    // Prompt for password
    const input = prompt('Ingresa la contraseña:');
    if (input !== password && input !== null) {
      alert('Contraseña incorrecta. Intenta de nuevo.');
      return;
    } else if (input === null) {
      return; // User cancelled prompt
    }

    // Start audio and unmute
    audio.muted = false;
    audio.play().catch(err => console.log('Audio playback failed:', err));

    // Start message sequence
    isPlaying = true;
    button.textContent = 'Detener Mensajes';
    currentIndex = 0;
    showNextMessage(speechBubble);
  } else {
    // Stop and reset
    timeouts.forEach(clearTimeout);
    timeouts = [];
    speechBubble.classList.remove('visible');
    speechBubble.textContent = '';
    audio.pause();
    audio.currentTime = 0;
    audio.muted = true;
    isPlaying = false;
    currentIndex = 0;
    button.textContent = 'Iniciar Mensajes';
  }
});

function showNextMessage(speechBubble) {
  if (currentIndex >= messages.length) {
    document.getElementById('toggleMensaje').textContent = 'Reiniciar Mensajes';
    return;
  }

  // Fade out current message
  speechBubble.classList.remove('visible');

  setTimeout(() => {
    // Update content and fade in
    speechBubble.textContent = messages[currentIndex].text;
    speechBubble.classList.add('visible');

    // Schedule next message
    currentIndex++;
    if (currentIndex < messages.length) {
      const nextDelay = messages[currentIndex].delay - messages[currentIndex - 1].delay;
      const timeout = setTimeout(() => showNextMessage(speechBubble), nextDelay);
      timeouts.push(timeout);
    } else {
      document.getElementById('toggleMensaje').textContent = 'Reiniciar Mensajes';
    }
  }, 500); // Wait for fade-out before showing next
}

// Handle animations for model-viewer
const modelViewer = document.getElementById('visor');
modelViewer.addEventListener('load', () => {
  const animations = modelViewer.availableAnimations;
  if (animations.length > 0) {
    modelViewer.animationName = animations[0]; // Play the first animation
  }
});