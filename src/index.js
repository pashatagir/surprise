const btnEl = document.getElementById('btn-surprise');
const audioEl = document.getElementById('audio');
const rosesEl = document.getElementById('roses');

btnEl.addEventListener('click', () => {
  rosesEl.classList.toggle('is-hidden');
  audioEl.classList.toggle('is-hidden');
});

btnEl.addEventListener('click', handlePlayButton, false);
playAudio();

async function playAudio() {
  try {
    await audioEl.play();
    btnEl.classList.add('playing');
  } catch (err) {
    btnEl.classList.remove('playing');
  }
}

function handlePlayButton() {
  if (audioEl.paused) {
    playAudio();
  } else {
    audioEl.pause();
    audioEl.currentTime = 0;
    btnEl.classList.remove('playing');
  }
}
