import React from 'react';
import Tomatosvg from './components/svg/Tomatosvg'
import Cancelsvg from './components/svg/Cancelsvg';
import StartButton from './components/buttons/StartButton/index';
import ViewTimer from './components/Timer/index';
import ViewTodoList from './components/ViewTodoList';

function App() {
  return (
    <div className="App">
    <Tomatosvg width={50} height={50}/>
    <StartButton/>
    <button>
    <Cancelsvg width={24} height={24} style={{fill: '#02DCC0'}}/>
    </button>
    <ViewTimer/>
    <ViewTodoList/>
    </div>
  );
}

export default App;
