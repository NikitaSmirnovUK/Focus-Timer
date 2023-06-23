const display = document.getElementById('display');
const startAndStopButton = document.getElementById('startAndStop');
const resetButton = document.getElementById('reset'); // Element

const minutesToPass = 0.05; //Минуты от которых идет отсчет таймера

let time = minutesToPass * 60; // Для отсчета сколько осталось времени!
let interval; // интервал для обновления дисплея каждую секунду
let isTimerStarted = false; // Содержит состояние таймера

function tick() {
   time = time - 1 ;

   if (time === 0) {
      StopTimer();
   }

   displayTime();
}

function StartTimer() {
   interval = setInterval(tick, 1000);
   isTimerStarted = true;
   if (time === 0){
      time = minutesToPass * 60;
   }
   ChangeToStop();
   showResetButton();
}

startAndStopButton.addEventListener('click', StartAndStop) // обратчик собитый 

function StartAndStop (){
   if (!isTimerStarted){ // если таймер не запущен
      StartTimer(); 
   }else if (isTimerStarted){ // если таймер запущен
      StopTimer(); 
   }
}


const StopTimer = () => {
   clearInterval(interval);// отсановливает таймер 
   ChangeToStart();
   isTimerStarted = false;
}


function hideResetButton() {
   resetButton.classList.add("hidden");
}

function showResetButton() {
   resetButton.classList.remove("hidden");
}


const onResetClick = () => {
   time = minutesToPass * 60; //Сброс на исходное состояние
   displayTime();
   hideResetButton();
   StopTimer();
}

resetButton.addEventListener('click', onResetClick);


function displayTime() {
   let min = Math.floor(time / 60); // Вычесляю сколько осталось минут 
   let sec = time % 60;// Вычесляю сколько осталось секунд
   
   display.style.color = time === 0  ? 'silver' : 'rgb(37 99 235)';
   display.innerHTML =  ((min < 10) ?  "0" + min : min) + ':' + ((sec < 10) ? "0" + sec : sec);
}

function ChangeToStart (){
   startAndStopButton.innerHTML = "Start"
}

function ChangeToStop(){
   startAndStopButton.innerHTML = "Stop"
}

displayTime();