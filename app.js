

//clockupdate
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = (hours % 12) || 12; 
  const timeString = `${formattedHours}:${minutes}:${seconds} ${period}`;
  const clockElement = document.getElementById('digital-clock');
  clockElement.textContent = timeString;
  clockElement.style.color = 'white';
}

setInterval(updateClock, 1000);
updateClock();

//fulscreen
const fullscreenIcon = document.getElementById('fullscreen-icon');

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
fullscreenIcon.addEventListener('click', toggleFullscreen);

//music button 
const musicIcon = document.getElementById('mute-icon');
const backgroundMusic = document.getElementById('background-music');

function toggleMute() {
  backgroundMusic.muted = !backgroundMusic.muted;
}
musicIcon.addEventListener('click', toggleMute);







  