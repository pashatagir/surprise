const btnEl = document.getElementById('btn-surprise');
const containerEl = document.getElementById('surprise');
const audioEl = document.getElementById('audio');

btnEl.addEventListener('click', () => {
  containerEl.classList.toggle('is-hidden');
  //   audioEl.setAttribute('autoplay', 'true');
});
