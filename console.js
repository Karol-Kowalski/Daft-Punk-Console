function playSound(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!key) return;

  const audio = document.getElementById('sound');
  audio.src = `sounds/sounds_${key.getAttribute('data-url')}.wav`;

  audio.currentTime = 0;
  audio.play();
};

window.addEventListener('keydown', playSound);