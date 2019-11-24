import styled from 'styled-components';

export const StyleInput = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}))`
  display: center;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #DDDDDD;
  margin: 1rem 2rem 1em;
  height: 40px;
  width: 300px;

  ::placeholder {
    color: #000000;
  }

  @media only screen and (min-width: 960px){
    display: center;
    height: 60px;
    width: 1000px;
  }
  
`
export const TodoButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const TodoButton = styled.button`
  height: 30px;
  width: 110px;
  background: #02DCC0;
  border-radius: 20px;
  margin-top: 10px;
`

export const TodoButtonText = styled.span`
  font-size: 12px;
  color: #FFFFFF;
`
export const TodoFormContaniner = styled.div`
  display: flex;
  justify-content: center;
`
