const display = document.getElementById('display');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset'); // Element
const stopButton = document.getElementById('stop');

const minutesToPass = 45; //Минуты от которых идет отсчет таймера

let time = minutesToPass * 60; // Для отсчета сколько осталось времени!
let interval; // интервал для обновления дисплея каждую секунду


function onStartClick() {
   interval = setInterval(() => {
      time = time - 1 // для отсчета времени обратно
      displayTime();
   }, 1000);
}

startButton.addEventListener('click', onStartClick); // обратчик собитый 


const onStopClick = () => {
   clearInterval(interval);// отсановливает таймер 
}

stopButton.addEventListener('click', onStopClick); // обратчик собитый 


const onResetClick = () => {
   clearInterval(interval);
   time = minutesToPass * 60; //Сброс на исходное состояние
   displayTime()
}

resetButton.addEventListener('click', onResetClick);


function displayTime() {
   let min = Math.floor(time / 60); // Вычесляю сколько осталось минут 
   let sec = time % 60;// Вычесляю сколько осталось секунд

   if (min < 10)
      min = "0" + min; //  

   if (sec < 10)
      sec = "0" + sec;

   display.innerHTML = min + ':' + sec;
}

