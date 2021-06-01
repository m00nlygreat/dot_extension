import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  -webkit-appearance: none;
`;

const StyledInput = styled.input`
  border: 1px solid gray;
`

const Button = () => {
  return(
   <StyledButton>hi</StyledButton>
  )
}

const Input = () => {
  return(
   <StyledInput/>
  )
}


export { Button, Input };