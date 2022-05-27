function removeTransition (e) {
  if(e.propertyName !== 'transform') return;
  
  this.classList.remove('playing');
};

function playSound(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!key) return;
  key.classList.add('playing')

  const audio = document.getElementById('sound');
  audio.src = `sounds/sounds_${key.getAttribute('data-url')}.wav`;

  audio.currentTime = 0; //restart play sound on every key click
  audio.play();
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);