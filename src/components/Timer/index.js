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
    break: false,
    start: false,
    interval: ''
  }

  render() {
    const { restMinute, workMinute, seconds, start} = this.state
    return(
        <Promodoro
          timer={this.timer}
          workMinutes={workMinute}
          restMinutes={restMinute}
          seconds={seconds}
          start={start}
          break={this.state.break}
          startTimer={this.startTimer}
          pauseTimer={this.pauseTimer}
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

  timer = () => {
    this.setState({
      seconds: this.state.seconds === 0 ? 59 : this.state.seconds - 1
    })

    // if break is true setState Minutes
    // if previous returns -1 for restMinute reset break to false and resetMinutes to 5


    if (this.state.break){
      this.setState({restMinutes: this.state.seconds === 0 ?
      this.state.restMinute -1 : this.state.restMinute === 5 ? 4 :
      this.state.restMinute
      })
    }
    if (this.state.restMinute === -1) {
      this.setState({restMinutes: 5, break: false})
    }
    else {
      this.setState({workMinute: this.state.seconds === 0 ?
      this.state.workMinute -1 : this.state.workMinute === 25 ? 24 :
      this.state.workMinute
      })
      //push workMinutes back to 25 and break to true
      if (this.state.workMinute === -1){
        this.setState({workMinute: 25, break: true})
      }
    }
  }

  // 
  startTimer = () => {
    this.setState({interval: setInterval(this.timer, 1000), start: 
    !this.state.start})
  }

  pauseTimer = () => {
    this.setState(prevState => {
      return {
      restMinute: prevState.restMinute,
      workMinute: prevState.workMinute,
      seconds: prevState.seconds,
      break: prevState.break,
      start: false,
      interval: clearInterval(prevState.interval)
      }
    })
  }

}

export default ViewTimer;