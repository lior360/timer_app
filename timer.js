class Timer{
    constructor(durationInput, startButton, pauseButton,callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart= callbacks.onStart;
            this.onTick=callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    } 

    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval =setInterval(this.tick,50);
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
            this.timeRemaining = timeRemaining-0.05;
            if (this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
        else{
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }
    }//tick

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value=time.toFixed(2);
    }
    
}
 
