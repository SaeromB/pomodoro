import React from 'react';
import * as S from './style';

const Todo = (props) => {
	return(
		<div
      key={props.todo.id}
      onClick={ e => {
        props.toggleComplete(props.todo.id)}}
    >
			<S.TaskText>{props.todo.task}</S.TaskText>
		</div>
	)
}

export default Todo;