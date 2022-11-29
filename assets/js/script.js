// select element by class
var timerEl = document.querySelector('.timeh3');
var timerCountEl = document.getElementById('main')

var secondsLeft = 10;


function setTime() {
    var TimerInterval = setInterval(function() {

        secondsLeft--;
        timerEl.textContent = secondsLeft + "timer";
    

        if(secondsLeft === 0) {
            clearInterval(TimerInterval);
            sendMessage();
        }

    }, 1000); 

  
}
function sendMessage() {
    timerEl.textContent =" ";
}
setTime();