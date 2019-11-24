import styled from 'styled-components';

export const StyleTime = styled.p`
  display: flex;
  justify-content: center;
  color: #02DCC0;
  font-weight: bold;
  font-size: 30px;

  @media only screen and (min-width: 960px){
    display: flex;
    justify-content: center;
    color: #02DCC0;
    font-weight: bold;
    font-size: 48px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: center;
`
export const StyleButton = styled.button`
  background: #02DCC0;
  color: ${props => props.start ? '#02DCC0' : '#FFFFFF'};
  background: #02DCC0;
  border-color: #02DCC0;
  border-radius: 5px;
  height: 60px;
  width: 200px;
`
export const StyleText = styled.p`
  display: center;
  font-weight: bold;
  font-size: 24px;
  margin: 16px;
  padding-left: auto;
  
`