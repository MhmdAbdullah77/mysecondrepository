let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.querySelector('#displayTime');
const strtBtn = document.querySelector('#strtBtn');
const pauseBtn = document.querySelector('#pauseBtn');
let resetBtn = document.querySelector('#resetBtn');
let timer = null;


strtBtn.addEventListener('click',function(){
    startWatch()

})

pauseBtn.addEventListener('click',function(){
    watchPause()
})

resetBtn.addEventListener('click',function(){
    watchReset();
})

function startWatch(){
    if(timer!== null){
        clearInterval(timer)
    }
   timer = setInterval(stopWatch,1000)
}

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0
        minutes++
        if(minutes == 60){
            minutes = 0
            hours++
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    displayTime.innerHTML = h +":"+ m +":"+s;
}

function watchPause(){
    clearInterval(timer)
}
function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = '00:00:00'
}