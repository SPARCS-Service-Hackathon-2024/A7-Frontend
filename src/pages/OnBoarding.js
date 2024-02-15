import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: #a883d8;
  padding-bottom: 20px;
`;

const LogoImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: auto;
`;

const Button = styled.button`
  margin-top: auto;
  background-color: #ffffff;
  width: 80%;
  height: 45px;
  color: #864ae1;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
    padding-bottom: 0;
    padding-bottom: env(safe-area-inset-bottom);
    
`;

const OnBoarding = () => {
  const navigator = useNavigate();

  const goSignUp = () => {
    navigator('/register');
  };

  return (
    <Container>
      <LogoImage src={logo} alt="로고" />
      <Button onClick={goSignUp}>살아봐유 시작하기</Button>
    </Container>
  );
};

export default OnBoarding;
