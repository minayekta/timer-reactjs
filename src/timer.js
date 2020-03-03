import React from 'react'
import './App.css';


export default class Timer extends React.Component {
    constructor(){
    super();
    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer=this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    const handle = '';
    this.state = {
        timer: 0
    }

    }


    tick(){
        this.setState({
            timer: this.state.timer + 1
        });
    }
    
    startTimer(){
        this.handle = setInterval(this.tick , 1000);

    }

    stopTimer(){
        clearInterval(this.handle);
    }

    resetTimer(){
        this.setState({
            timer: 0
        });
    }

    
    

render(){
    return(
        <div>
           <p> this is a timer :{this.state.timer} </p>
           <button onClick={this.startTimer}>start timer</button> 
           <button onClick={this.stopTimer}> stop timer</button> 
           <button onClick={this.resetTimer}> reset timer</button> 

        </div>
    );

     }
     
}
