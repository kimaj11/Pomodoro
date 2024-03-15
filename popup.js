var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var work_min = document.getElementById('w_minutes');
var work_sec = document.getElementById('w_seconds');

var break_min = document.getElementById('b_minutes');
var break_sec = document.getElementById('b_seconds');

//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000);
    } else {
        alert('Timer is already running');
    }
})

reset.addEventListener('click', function(){
    work_min.innerText = 25;
    work_sec.innerText = 0;
    break_min.innerText = 5;
    break_sec.innerText = 0;

    document.getElementById('counter').innerText = 0;
    stopInterval();
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval();
    startTimer = undefined;
})

//start timer function
function timer() {

    //Work timer countdown
    if (work_sec.innerText != 0) {
        work_sec.innerText--;
    } else if (work_min.innerText != 0 && work_sec.innerText == 0) {
        work_sec.innerText = 59;
        work_min.innerText--;
    }

    //Break timer countdown
    if (work_min.innerText == 0 && work_sec.innerText == 0) {
        if (break_sec.innerText != 0) {
            break_sec.innerText--;
        } else if (break_min.innerText != 0 && break_sec.innerText == 0) {
            break_sec.innerText = 59;
            break_min.innerText--;
        }
    }

    //Increment cycle counter
    if (work_min.innerText == 0 && work_sec.innerText == 0 && break_min.innerText == 0 && break_sec.innerText == 0) {
        work_min.innerText = 25;
        work_sec.innerText = "00";
        break_min.innerText = 5;
        break_sec.innerText = "00" ;
        document.getElementById('counter').innerText++;
    }
}

//stop timer function
function stopInterval() {
    clearInterval(startTimer);
}