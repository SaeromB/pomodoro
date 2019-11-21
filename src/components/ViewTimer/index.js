import React, {Component} from 'react';
import BreakInterval from '../BreakInterval/index';
import SessionLength from '../SessionLength';
import SessionTimer from '../SessionTimer';

export class ViewTimer extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    timerMinute: 25,
    timerSecond: 25,
    count: 25,
    restMinute: 5,
    workMinute: 25,
    seconds: 0 ,
  }
  render() {
    const { breakLength, sessionLength, timerMinute, timerSecond, count} = this.state
    return(
      <main>
        <BreakInterval breakintervel={breakLength}/>
        <SessionLength sessionLength={sessionLength}/>
        <SessionTimer timerMinute={timerMinute} timerSecond={timerSecond}/>
        <h1>{count}</h1>
      </main>
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

  componentWillUnmount(){
    clearInterval(this.myIntervel)
  }


}

export default ViewTimer;

