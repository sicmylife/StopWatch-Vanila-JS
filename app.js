const seconds = document.getElementById('seconds');
const miliseconds = document.getElementById('miliseconds');
const start =document.getElementById('start-watch');
const stopW = document.getElementById('stop-watch');
const reset = document.getElementById('clear-watch');
let mili = 0
let sec =0
let interval;

start.onclick = () => {
    clearInterval(interval)
    interval = setInterval(startTimer,10)
}

stopW.onclick = () => {

 clearInterval(interval)
}

reset.onclick = () => {

   seconds.innerHTML='00'
   miliseconds.innerHTML='00'
   sec = 0
   mili = 0
}









function startTimer() {

    mili++
  
    if (mili <= 9) {   
    miliseconds.innerHTML= '0' + mili
    } 

    if(mili>9){
        miliseconds.innerHTML= mili 
    }

    if (mili>99){
        mili = 0
        sec++
        seconds.innerHTML= sec
        miliseconds.innerHTML= '0' + mili

    }
    console.log(mili);
}






