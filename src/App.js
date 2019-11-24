import React from 'react';
import Tomatosvg from './components/svg/Tomatosvg'
import Cancelsvg from './components/svg/Cancelsvg';
import StartButton from './components/buttons/StartButton/index';
import ViewTimer from './components/Timer/index';
import ViewTodoList from './components/ViewTodoList';
import { Container } from './components/svg/TomatoStyle';

function App() {
  return (
    <div>
    <Container>
    <Tomatosvg width={50} height={50}/>
    </Container>
    <ViewTimer/>
    <StartButton/>
    <button>
    <Cancelsvg width={24} height={24} style={{fill: '#02DCC0'}}/>
    </button>
    <ViewTodoList/>
    </div>
  );
}

export default App;
