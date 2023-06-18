const display = document.getElementById('display');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset'); // Element
const stopButton = document.getElementById('stop');

let i = 66;
let interval;


function onStartClick() {


   interval = setInterval(() => {
      i = i + 1

      let min = Math.floor(i / 60);
      let sec = i % 60;

      if (min < 10) {
         min = "0" + min;
      } if (sec < 10) {
         sec = "0" + sec;
      }





      display.innerHTML = min + ':' + sec;
   }, 1000);


}

startButton.addEventListener('click', onStartClick);


const onStopClick = () => {
   clearInterval(interval);
}

stopButton.addEventListener('click', onStopClick);


const onResetClick = () => {
   clearInterval(interval);
   i = 0;
   display.innerHTML = i;
}


resetButton.addEventListener('click', onResetClick);

// Function declaration
// function a() {}

// Function expression
// const a = function() {};
// const b = () => {}









// const input = document.getElementById('input');
// const blockTime = document.querySelectorAll('.time');
// let interval;

// blockTime.innerHTML= 0;
// input.value = 0;

// document.getElementById('start').addEventListener('click', () => {
//     if (input.value < 0){
//         input.value = 0;
//         blockTime.innerHTML = 0;
//     }

//     blockTime.innerHTML = input.value;


//         clearInterval(interval);
//     interval = setInterval(subtractTime, 1000);
// })

// document.getElementById('stop').addEventListener('click', () =>{
//     clearInterval(interval);
// });


// document.getElementById('reset').addEventListener('click', () => {
//     input.value = 0;
//     blockTime.innerHTML = 0;
// });

// function subtractTime(){
//     if (blockTime.innerHTML > 0){
//         blockTime.innerHTML--;
//         input.value--;
//     }
// }

