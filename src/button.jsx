import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  -webkit-appearance: none;
`;

const StyledInput = styled.input`
  border: 1px solid gray;
  width: 100%;
`

const Button = (props) => {
  return(
   <StyledButton>{props.label}</StyledButton>
  )
}

const Input = () => {
  return(
   <StyledInput/>
  )
}


export { Button, Input };