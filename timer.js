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
        this.startButton.disabled = false;
        this.durationInput.disabled = false;
    }

    tick = ()=>{
        this.durationInput.disabled = true;
        this.startButton.disabled = true;
        const timeRemaining = this.timeRemaining;
        if (timeRemaining>0){
            this.timeRemaining = timeRemaining-1;
        }
        else{
            this.pause();
        }
    }//tick

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value=time;
    }
    
}
 //get all inputs from the body
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
//create new timer obj
const timer = new Timer(durationInput,startButton,pauseButton);
