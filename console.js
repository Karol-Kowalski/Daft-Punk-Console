function playSound(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!key) return;

};

window.addEventListener('keydown', playSound);