const timer = document.querySelector('#duration');
let duration = parseInt(timer.value);

timer.addEventListener('change',()=>{
    if(parseInt(timer.value)>0){
        duration = parseInt(timer.value);
    }
    else{
        alert('timer shuld be a number larger then 0');
        timer.value = duration;
    }
})