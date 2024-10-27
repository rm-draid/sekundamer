let seconds = 0;
let interval = null;

function formatTime(sec) {
  const hrs = Math.floor(sec / 3600);
  const mins = Math.floor((sec % 3600) / 60);
  const secs = sec % 60;

  return (
    (hrs < 10 ? "0" : "") +
    hrs +
    ":" +
    (mins < 10 ? "0" : "") +
    mins +
    ":" +
    (secs < 10 ? "0" : "") +
    secs
  );
}

function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    seconds++;
    document.getElementById("display").textContent = formatTime(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  document.getElementById("display").textContent = "00:00:00";
}
