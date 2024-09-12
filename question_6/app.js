let achillesPosition = 0;
let tortoisePosition = 200;
let isRunning = true;
let achillesSpeedFactor = 0.1; // Initial speed for Achilles
let tortoiseSpeed = 1; // Initial speed for the tortoise
let interval = 10;

function animate() {
  const achilles = document.getElementById('achilles');
  const tortoise = document.getElementById('tortoise');

  if (isRunning) {
    let distance = tortoisePosition - achillesPosition;
    
    achillesPosition += distance * achillesSpeedFactor;
    tortoisePosition += tortoiseSpeed;

    achilles.style.left = `${achillesPosition}px`;
    tortoise.style.left = `${tortoisePosition}px`;

    if (distance > 1) {
      setTimeout(animate, interval);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start');
  const pauseButton = document.getElementById('pause');
  const resetButton = document.getElementById('reset');
  const achillesSpeedSlider = document.getElementById('achillesSpeed');
  const tortoiseSpeedSlider = document.getElementById('tortoiseSpeed');

  startButton.addEventListener('click', () => {
    isRunning = true;
    animate();
  });

  pauseButton.addEventListener('click', () => {
    isRunning = false;
  });

  resetButton.addEventListener('click', () => {
    isRunning = false;
    achillesPosition = 0;
    tortoisePosition = 200;
    document.getElementById('achilles').style.left = '0px';
    document.getElementById('tortoise').style.left = '200px';
  });

  achillesSpeedSlider.addEventListener('input', (e) => {
    achillesSpeedFactor = parseFloat(e.target.value);
  });

  tortoiseSpeedSlider.addEventListener('input', (e) => {
    tortoiseSpeed = parseFloat(e.target.value);
  });
});
