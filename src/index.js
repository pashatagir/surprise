const btnEl = document.getElementById('btn-surprise');
const containerEl = document.getElementById('surprise');
const audioEl = document.getElementById('audio');

btnEl.addEventListener('click', () => {
  containerEl.classList.toggle('is-hidden');
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
