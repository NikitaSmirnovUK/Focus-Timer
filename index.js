const display = document.getElementById('display');
const startAndStopButton = document.getElementById('startAndStop');
const resetButton = document.getElementById('reset'); // Element


const minutesToPass = 45; //Минуты от которых идет отсчет таймера

let time = minutesToPass * 60; // Для отсчета сколько осталось времени!
let interval; // интервал для обновления дисплея каждую секунду
let isTimerStarted = false; // Содержит состояние таймера

function StartTimer() {
   interval = setInterval(() => {
      time = time - 1 // для отсчета времени обратно
      displayTime();
   }, 1000);
}

startAndStopButton.addEventListener('click', StartAndStop) // обратчик собитый 

function StartAndStop (){
   if (!isTimerStarted){ // если таймер не запущен
      StartTimer(); 
      
      isTimerStarted = true;
      startAndStopButton.innerHTML = "Stop"
   }else if (isTimerStarted){ // если таймер запущен
         StopTimer(); 
         startAndStopButton.innerHTML = "Start"
         isTimerStarted = false;
   }
}


const StopTimer = () => {
   clearInterval(interval);// отсановливает таймер 
}



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

