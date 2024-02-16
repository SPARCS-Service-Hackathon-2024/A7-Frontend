import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - env(safe-area-inset-bottom));
  box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-end;
    
  background-color: #a883d8;
  padding-bottom: 20px;
    padding-bottom: calc(20px + env(safe-area-inset-bottom));
    overflow: hidden;
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
    bottom: 0;
    bottom: env(safe-area-inset-bottom);
    //bottom: env(safe-area-inset-bottom); /* 아이폰x 이상의 모델에서는 화면 하단에 위치 */
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
