import React from 'react';
import * as S from './style';

const StartButton = props => {
  return (
  <S.StartButton onClick={props.start}>
    <S.StartText>Start Pomo</S.StartText>
  </S.StartButton>
  )}

export default StartButton;

