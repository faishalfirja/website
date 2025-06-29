var milli_seconds = 0,
  seconds = 0,
  minutes = 0;
var h1 = document.getElementById("time"),
  start = document.getElementById("button-start"),
  stop = document.getElementById("button-stop"),
  clear = document.getElementById("button-reset");

var t;

function count() {
  milli_seconds += 1;

  if (milli_seconds >= 100) {
    milli_seconds = 0;
    seconds += 1;
  }

  if (seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }

  h1.textContent =
    (minutes > 9 ? minutes : "0" + minutes) +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds) +
    ":" +
    (milli_seconds > 9 ? milli_seconds : "0" + milli_seconds);

  timer();
}

function timer() {
  t = setTimeout(count, 10);
}

start.onclick = timer;

stop.onclick = function () {
  clearTimeout(t);
};

clear.onclick = function () {
  clearTimeout(t);
  h1.textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  milli_seconds = 0;
};
