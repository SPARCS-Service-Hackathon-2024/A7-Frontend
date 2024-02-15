import React from 'react';
import styled from 'styled-components';
import Pretendard from '../fonts/fonts.css';

const StyledButton = styled.div`
  background-color: #864AE1;
  color: #FFFFFF;
  width: 80%;
  height: 45px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4vh auto;
  cursor: pointer;
  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 14px;
`;

const Button = (props) => {
  const { title, onClick } = props;
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

export default Button;