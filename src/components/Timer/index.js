import React, {Component} from 'react';
import Promodoro from '../Pomodoro';

// break is a boolean telling your application whether or not it should be displaying restMinutes
// start is a boolean that functions as oppsite of break. It tells the app to display restMinutes or not
// start is false because the timer will start as you load start button
// interval is going to refer the perid of time between the actions

export class ViewTimer extends Component {
  state = {
    restMinute: 5,
    workMinute: 25,
    seconds: 0,
    breakTime: false,
    start: false,
    interval: ''
  }

  timer = () => {
    this.setState({
      seconds: this.state.seconds === 0 ? 59 : this.state.seconds - 1
    })

    // if break is true setState Minutes
    // if previous returns -1 for restMinute reset break to false and resetMinutes to 5

    const {breakTime, seconds, restMinute, workMinute} = this.state
    
    if (breakTime){
      this.setState({restMinutes : seconds === '00' ?
      restMinute -1 : restMinute === 5 ? 4 :
      restMinute
      })
    }

    else if (workMinute === -1) {
      this.setState({restMinutes: 5, breakTime: true})
    }

    else {
      this.setState({workMinute : seconds === 0 ?
      workMinute -1 : workMinute === 25 ? 24 :
      workMinute
      })

      //push workMinutes back to 25 and break to true
      if (this.state.workMinute === -1){
        this.setState({workMinute: 25, breakTime: true})
      }
      else {
        this.setState({restMinute : this.state.seconds === 0})
      } 
    }
  }

  // 
  startTimer = () => {
    this.setState({interval: setInterval(this.timer, 1000), start: 
    !this.state.start})
  }

  // restTimer = () => {
  //   this.setState({interval: setInterval(this.timer, 10), breakTime:
  //   !this.state.breakTime})
  // }

  pauseTimer = () => {
    this.setState(prevState => {
      return {
      restMinute: prevState.restMinute,
      workMinute: prevState.workMinute,
      seconds: prevState.seconds,
      break: prevState.breakTime,
      start: false,
      interval: clearInterval(prevState.interval)
      }
    })
  }

  render() {
    const { restMinute, workMinute, seconds, start, breakTime} = this.state
    return(
        <Promodoro
          timer={this.timer} 
          workMinutes={workMinute}
          restMinutes={restMinute}
          seconds={seconds}
          start={start}
          breakTime={breakTime}
          startTimer={this.startTimer}
          pauseTimer={this.pauseTimer}
          restTimer={this.restTimer}
          />
    )
  }

  // setIntervel
  // clearIntervel

  // componentDidMount(){
  //   this.myIntervel = setInterval(() => {
  //     this.setState(prevState => ({
  //       count: prevState.count - 1
  //     }))
  //   }, 1000)
  // }

  // componentWillUnmount(){
  //   clearInterval(this.myIntervel)
  // }
  // this means that if this.state.second is '0' than show 59 if not show the current second-1

}

export default ViewTimer;