import audio from "./audio";

const display = document.getElementById('display');
const startAndStopButton = document.getElementById('startAndStop');
const resetButton = document.getElementById('reset'); // Element
const TextTimer = document.getElementById('StateTimer'); 
const Count = document.getElementById('stepCount');

const minutesForFocus = 10 / 60; //Минуты от которых идет отсчет таймера 
const minuteForShortBreak = 5 / 60; 
const minutesForLongBreak = 10 / 60;

let time = minutesForFocus * 60; // Для отсчета сколько осталось времени!
let isTimerStarted = false; // Содержит состояние таймера
let step = 1;



function tick() {
   time = time - 1 ;

   displayTime();

   if (time === 0) {
      time = (step % 2 ? (step === 4 ? minutesForLongBreak : minuteForShortBreak ) : minutesForFocus) * 60;
      step += 1
      audio.play();
   }

}


let interval; // интервал для обновления дисплея каждую секунду
function StartTimer() {
   interval = setInterval(tick, 1000);
   isTimerStarted = true;
   if (time === 0){
      time = minutesForFocus * 60;
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
   time = minutesForFocus * 60; //Сброс на исходное состояние
   displayTime();
   hideResetButton();
   StopTimer();
}

resetButton.addEventListener('click', onResetClick);


function displayTime() {
   let min = Math.floor(time / 60); // Вычесляю сколько осталось минут 
   let sec = time % 60;// Вычесляю сколько осталось секунд
   
   display.style.color = time === 0  ? 'gray' : ( step % 2 ?  'silver' :  'green')

   display.innerHTML =  ((min < 10) ?  "0" + min : min) + ':' + ((sec < 10) ? "0" + sec : sec);

   TextTimer.innerHTML = step % 2 ?  'Focus' : ( step === 4 ? 'Long' : 'Short' ) + ' Break';

   Count.innerHTML = Math.ceil(step / 2) + "/4"

   const progress = document.getElementById('progress');
   const classToDelete = Array.from(progress.classList).find( c => c.startsWith('progress-') );
   progress.classList.remove(classToDelete);   
   progress.classList.add('progress-' + Math.floor( time * 100 / (minutesForFocus * 60) ) )
}

function ChangeToStart (){
   startAndStopButton.innerHTML = "Start"
}

function ChangeToStop(){
   startAndStopButton.innerHTML = "Stop"
}

displayTime();

