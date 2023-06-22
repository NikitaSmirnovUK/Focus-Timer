const display = document.getElementById('display');
const startAndStopButton = document.getElementById('startAndStop');
const resetButton = document.getElementById('reset'); // Element


const minutesToPass = 0.1; //Минуты от которых идет отсчет таймера

let time = minutesToPass * 60; // Для отсчета сколько осталось времени!
let interval; // интервал для обновления дисплея каждую секунду
let isTimerStarted = false; // Содержит состояние таймера

function StartTimer() {
   interval = setInterval(() => {
      time = time - 1 // для отсчета времени обратно
      displayTime();
   }, 1000);

   isTimerStarted = true;
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
  
   if (min < 10)
      min = "0" + min; //  

   if (sec < 10)
      sec = "0" + sec;
   
   // if (time <= 0){
   //   time = Number.toString('00:00')
   //   clearInterval(interval)
   // }
     
      if (time <= 0){
         clearInterval(interval)
         hideResetButton()
         ChangeToStart ()
         onResetClick()

      }



   display.innerHTML = min + ':' + sec;
}

function ChangeToStart (){
   startAndStopButton.innerHTML = "Start"
}

function ChangeToStop(){
   startAndStopButton.innerHTML = "Stop"
}
displayTime();