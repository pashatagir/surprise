const btnEl = document.getElementById('btn-surprise');
const containerEl = document.getElementById('surprise');
const audioEl = document.getElementById('audio');

console.log(audioEl.attributes);

btnEl.addEventListener('click', onClick);

function onClick(params) {
  containerEl.classList.toggle('is-hidden');
}
