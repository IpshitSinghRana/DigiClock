let intervalId; // Declare the interval ID globally
let isPaused = false; // Flag to track pause/resume state

function startTimer() {
    const hours = parseInt(document.getElementById('hours').value);
    const minutes = parseInt(document.getElementById('minutes').value);

    if (isNaN(hours) || isNaN(minutes)) {
        alert('Please enter valid numbers for hours and minutes.');
        return;
    }

    let totalSeconds = hours * 3600 + minutes * 60;

    clearInterval(intervalId); // Clear any existing interval
    updateDisplay(totalSeconds); // Initial display

    intervalId = setInterval(() => {
        if (!isPaused) {
            totalSeconds--;
            updateDisplay(totalSeconds);
            if (totalSeconds <= 0) {
                clearInterval(intervalId);
                document.querySelector('.box').textContent = 'Time is up!';
            }
        }
    }, 1000);
}

function startBreak() {
    const breakMinutes = 10; // Set break duration (10 minutes)
    let totalSeconds = breakMinutes * 60;

    clearInterval(intervalId); // Clear any existing interval
    updateDisplay(totalSeconds); // Initial display

    intervalId = setInterval(() => {
        if (!isPaused) {
            totalSeconds--;
            updateDisplay(totalSeconds);
            if (totalSeconds <= 0) {
                clearInterval(intervalId);
                document.querySelector('.box').textContent = 'Break time is over!';
            }
        }
    }, 1000);
}


function updateDisplay(totalSeconds) {
    const remainingHours = Math.floor(totalSeconds / 3600);
    const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;
    document.querySelector('.box').textContent = ` ${remainingHours} : ${remainingMinutes} : ${remainingSeconds}`;
}

function Pause() {
    isPaused = !isPaused; // Toggle the pause state
    const pauseButton = document.querySelector('.b2');
    pauseButton.textContent = isPaused ? 'Resume' : 'Pause';
}

function Reset() {
    clearInterval(intervalId); // Clear the interval
    document.querySelector('.box').textContent = ''; // Clear the display
    isPaused = false; // Reset pause state
}





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



