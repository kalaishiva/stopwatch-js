let days = document.querySelector(".dayDivValue");
let hours = document.querySelector(".hourDivValue");
let mins = document.querySelector(".minDivValue");
let sec = document.querySelector(".secDivValue");


let secVal = 50;
let minVal = 59;
let hourVal = 23;
let dayVal = 0;

let timer;

function start() {
    // secVal = parseInt(sec.innerText);

    timer = setInterval(count, 1000);

}

// let seconds;

function count() {

    secVal = secVal + 1;

    if (secVal == 60) {
        secVal = 0;
        minVal = minVal + 1;

    }

    if (minVal == 60) {

        minVal = 0;
        hourVal = hourVal + 1;

    }

    if (hourVal == 24) {

        hourVal = 0;
        dayVal = dayVal + 1;

    }

    sec.innerText = secVal;
    mins.innerText = minVal;
    hours.innerText = hourVal;
    days.innerText = dayVal;

}

function stop() {
    clearInterval(timer);
}