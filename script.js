var hour = 0; //for hours initially assigned 0.
var min = 0; //for minutes initially assigned 0.
var sec = 0; //for seconds initially assigned 0.
var count = 0; //for mili seconds initially assigned 0.

var timer = false; // this is for the stop and reset button.

function start() {
    timer = true;
    stopWatch();
    var stopBtn = document.getElementById("start");
    console.log(stopBtn);
    stopBtn.innerHTML = "STOP";
    stopBtn.onclick = stop;
}

function stop(){
    timer = false;
    var startBtn = document.getElementById("start");
    startBtn.innerHTML = "START";
    startBtn.onclick = start;
}

function reset() {
  timer = false;

  hour = 0;
  min = 0;
  sec = 0;
  count = 0;

  document.getElementById("count").innerHTML = count;
  document.getElementById("sec").innerHTML = sec;
  document.getElementById("min").innerHTML = min;
  document.getElementById("hour").innerHTML = hour;
}

function stopWatch() {
  if (timer === true) {
    count = count + 1;

    if (count === 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec === 60) {
      min = min + 1;
      count = 0;
      sec = 0;
    }
    if (min === 60) {
      hour = hour + 1;
      min = 0;
      sec = 0;
      count = 0;
    }

    document.getElementById("count").innerHTML = count;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("min").innerHTML = min;
    document.getElementById("hour").innerHTML = hour;

    setTimeout("stopWatch()", 10);
  }
}