var seconds=0;
var mins=0;
var hours=0;
var timer;
var sec = document.getElementById('sec');
var min = document.getElementById('min');
var hour = document.getElementById('hour');
var startBtn  = document.getElementById('startBtn'); 
function startTimer(){
    startBtn.disabled = true 
    timer = setInterval(function(){
          seconds++
          sec.innerHTML = seconds;
          if(seconds/60 == 1){
              mins++
              seconds = 0;
          } 
          else if (mins/60 == 1){
              hours++
              mins = 0;
              seconds = 0;
               
          }
          sec.innerHTML = seconds;
          min.innerHTML = mins;
          hour.innerHTML = hours;
        
        },10)
    
}


function pauseTimer(){
    startBtn.disabled = false
    clearInterval(timer)
}


function resetTimer(){
    clearInterval(timer);
    seconds = 0;
    mins = 0;
    hours = 0;
    sec.innerHTML = seconds
    min.innerHTML = mins
    hour.innerHTML = hours
    startBtn.disabled = false
}