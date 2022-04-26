// const timer = document.querySelector('#duration');
// let duration = parseInt(timer.value);

// timer.addEventListener('change',()=>{
//     if(parseInt(timer.value)>0){
//         duration = parseInt(timer.value);
//     }
//     else{
//         alert('timer shuld be a number larger then 0');
//         timer.value = duration;
//     }
// })
class Timer{
    constructor(durationInput,startButton,pauseButton){
        this.durationInput = durationInput;
        this.startButton  = startButton;
        this.pauseButton= pauseButton;

        this.startButton.addEventListener('ckick',this.start);
    } 

    start(){
        console.log('test');
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput,startButton,pauseButton);
