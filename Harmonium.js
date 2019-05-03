function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;     //stop the function from running
    audio.currentTime = 0;      //rewind time to 0
    audio.play();
    key.classList.add('playing');
}

function transitionRemove(e) {
    if (e.propertyName !== 'transform') return;     //skip it if its not a transform
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', transitionRemove));

window.addEventListener("keydown", playSound);