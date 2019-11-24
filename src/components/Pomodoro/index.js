import React from 'react';
import * as S from './style';

// need props to keep track of break, start, restMinutes, workMinutes

const Pomodoro = props => {
  return(
    <div>
      {/* if the number is below 10 a 0 will display in front of seconds count*/}
      <S.StyleTime>
      {props.break ? props.restMinute : props.workMinutes} : {props.seconds < 10 ? `0${props.seconds}` : `${props.seconds}`}
      </S.StyleTime>
      <button onClick={props.start ? props.pauseTimer : props.startTimer}>{props.start ? 'Pause' : 'Start'}</button>
    </div>
  )  
}

export default Pomodoro;