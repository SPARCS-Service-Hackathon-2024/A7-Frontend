import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  height: 100vh;
`;


const OnBoarding = () => {
  const navigator=useNavigate();
  const goSignUp=()=>{
    navigator('/register');
  }

  return (
    <Container>
      <Button onClick={goSignUp} title="살아봐유 시작하기" />
    </Container>
  )
};

export default OnBoarding;
