// UI
const display = document.querySelector('.display');
const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const resetbtn = document.querySelector('.reset');

// let milliseconds = 0,
//         seconds = 0,
//         minutes = 0,
//         hours = 0;

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let interval;
// console.log(milliseconds);

// Event Listener
startbtn.addEventListener('click',starttimer);
pausebtn.addEventListener('click',pausetimer);
resetbtn.addEventListener('click',resettimer);

// Start Timer
function starttimer(){
    // console.log('start timer');
    if(interval !== null){
        clearInterval(interval);
    }
    interval = setInterval(displaytimer,10);
}

// Pause Timer
function pausetimer(){
    // console.log('pause timer');
    clearInterval(interval);
}

// Reset Timer
function resettimer(){
    // console.log('reset timer');
    clearInterval(interval);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    display.innerText = "00 : 00 : 00 : 000";
    
}

function displaytimer(){
    // console.log('hay i working');

    milliseconds += 10;
    // console.log(milliseconds);

    if(milliseconds === 1000){
        milliseconds = 0;
        // console.log(milliseconds);

        // seconds += 1;
        seconds++;
        //console.log(seconds);

        if(seconds === 60){
            seconds = 0;
            // console.log(seconds);

            minutes++;

            if(minutes === 60){
                minutes = 0;
                
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0"+hours: hours;
    let m = minutes < 10 ? "0"+minutes: minutes;
    let s = seconds < 10 ? "0"+seconds: seconds;
    let mi = milliseconds < 10 ? "00"+milliseconds : milliseconds < 100 ? "0"+milliseconds : milliseconds;

    display.innerText = `${h} : ${m} : ${s} : ${mi}`;


}

