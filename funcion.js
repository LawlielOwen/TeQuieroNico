

document.addEventListener('click', function () {
  const letter = document.querySelector('.letter');
  if (letter.classList.contains('open')) {
    letter.classList.remove('open');
  }
});

function Audios() {
  const audio = document.getElementById('audio');
  audio.play();
}
