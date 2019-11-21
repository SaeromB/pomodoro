import React, {Component} from 'react';
import SessionLength from '../SessionLength';

class SessionTimer extends Component {
  state = {
    isSession: true,
    timerSecond: 0
  }
  render(){
    const {timerSecond, isSession} = this.state
    return(
      <section>
        <section>
          {/* if the current timer is sessionlength then display session if not display break  */}
          <h2>{isSession === true ? 'Session' : 'Break'}</h2>
          <span>{this.props.timerMinute}</span>
          <span>:</span>
          {/* if the timerSecond is 0 display 00
              if the timerSecond is less then 10 than display 0 + current timerSecond 
              if not just display timerSecond
           */}
          <span>{timerSecond === 0
             ? '00': timerSecond < 10
             ? '0' + timerSecond : timerSecond
            }
          </span>
        </section>
        <button>play</button>
        <button>stop</button>
        <button>refresh</button>
      </section>
    )
  }
}

export default SessionTimer;