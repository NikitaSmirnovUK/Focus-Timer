const display = document.getElementById('display')
const startButton = document.getElementById('btn-start');

const stopButton = document.getElementById('btn-stop');

let i = 0;

let interval;

startButton.onclick = function() {
    interval = setInterval(() => {
        i = i+1
         document.getElementById('display').innerHTML = i;
    }, 1000)
}
    
    
stopButton.onclick = function() {
    clearInterval(interval)
}

 