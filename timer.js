class Timer{
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    } 

    start = () => {
        this.tick();
        this.interval =setInterval(this.tick,1000);
    }

    pause = ()=>{
        clearInterval(this.interval);
    }

    tick = ()=>{
        console.log('tick')
    }

    
}
 //get all inputs from the body
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
//create new timer obj
const timer = new Timer(durationInput,startButton,pauseButton);
