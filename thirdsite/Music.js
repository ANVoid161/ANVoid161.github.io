var audio = new Audio(src="Clockwork.mp3")
audio.loop = true;
audio.volume = 0.1;

function toggleAudio() {
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause();
  }
}