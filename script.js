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
    stopBtn.style.backgroundColor = "red";
}

function stop(){
    timer = false;
    var startBtn = document.getElementById("start");
    startBtn.innerHTML = "START";
    startBtn.onclick = start;
    startBtn.style.backgroundColor = "#8ab4f8";
}

function reset() {
  timer = false;
  var startBtn = document.getElementById("start");
    startBtn.innerHTML = "START";
    startBtn.onclick = start;
    startBtn.style.backgroundColor = "#8ab4f8";


  hour = 0;
  min = 0;
  sec = 0;
  count = 0;

  document.getElementById("count").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";
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

    var countString = count;
    var secString = sec;
    var minString = min;
    var hourString = hour;

    if(count < 10){
      countString = "0" + countString;
    }
    if(sec < 10){
      secString = "0" + secString;
    }
    if(min < 10){
      minString = "0" + minString;
    }
    if(hour < 10){
      hourString = "0" + hourString;
    }


    document.getElementById("count").innerHTML = countString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("hour").innerHTML = hourString;

    setTimeout("stopWatch()", 10);
  }
}