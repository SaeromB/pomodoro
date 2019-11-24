import React from 'react';
import * as S from './style';

const TodoForm = props => {
  return(
    <form>
      <S.StyleInput
        name = 'todo'
        type = 'text'
        placeholder = 'Add a new todo'
        onChange = {props.inputChangeHandler}
      />
      <S.TodoButtonContainer>
        <S.TodoButton onClick={props.addTask}>
          <S.TodoButtonText>
          Add Task
        </S.TodoButtonText>
        </S.TodoButton>
        <S.TodoButton onClick={props.removeItems}>
          <S.TodoButtonText>
            Completed
          </S.TodoButtonText>
        </S.TodoButton>
        <S.TodoButton>
          <S.TodoButtonText>
            Remove 
          </S.TodoButtonText>
        </S.TodoButton>
      </S.TodoButtonContainer>
    </form>

  )
}

export default TodoForm;