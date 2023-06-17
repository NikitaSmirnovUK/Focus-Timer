// const display = document.getElementById('display')
// const startButton = document.getElementById('btn-start');

// const stopButton = document.getElementById('btn-stop');

// let i = 0;

//  let interval;

// startButton.onclick = function() {
//     interval = setInterval(() => {
//         i = i+1
//          document.getElementById('display').innerHTML = i;
//     }, 1000)
// }
    
    
// stopButton.onclick = function() {
//     clearInterval(interval)
// }

 // addEventListener


//  Добавить кнопку Reset и сделать что бы она работала.
//  Передлать свойство onclick на addEventListener.




const input = document.getElementById('input');
const blockTime = document.querySelectorAll('.time');
let interval;

blockTime.innerHTML= 0;
input.value = 0;

document.getElementById('start').addEventListener('click', () => {
    if (input.value < 0){
        input.value = 0;
        blockTime.innerHTML = 0;
    }
    
    blockTime.innerHTML = input.value;


        clearInterval(interval);
    interval = setInterval(subtractTime, 1000);
})

document.getElementById('stop').addEventListener('click', () =>{
    clearInterval(interval);
});


document.getElementById('reset').addEventListener('click', () => {
    input.value = 0;
    blockTime.innerHTML = 0;
});

function subtractTime(){
    if (blockTime.innerHTML > 0){
        blockTime.innerHTML--;
        input.value--;
    }
}