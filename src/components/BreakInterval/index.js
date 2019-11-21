import React from 'react';

function BreakInterval(props){
  function decreaseCounter() {
    if(props.breakInterval === 1){
      return;
    }
  }

  function increaseCounter() {
    if(props.breakInterval === 60){
      return;
    }
  }
  return(
    <section>
      <button onClick={decreaseCounter}>Down</button>
      <p>{props.BreakInterval}</p>
      <button onClick={increaseCounter}>up</button>
    </section>
  )   
}

export default BreakInterval;