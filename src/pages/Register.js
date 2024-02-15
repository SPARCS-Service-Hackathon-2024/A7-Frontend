import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Pretendard from '../fonts/fonts.css';

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-top: 102px;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-family: 'Pretendard', sans-serif;
  white-space: pre-wrap;
  word-break: break-word;
  text-align: left;
`;

const InputContainer = styled.div`
  padding: 0 16px 0 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #000;
  font-family: 'Pretendard', sans-serif;
  font-weight: 200;
  transition: border-color 0.3s;
  display: block;

  &:focus {
    outline: none;
    border-color: #864AE1;
  }
`;

const Message = styled.p`
  margin-top: 10px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 14px;
  display: block;
  text-align: left;
  margin-top: 16px;
`;

const Button = styled.button`
  background-color: #864AE1;
  width: 80%;
  height: 45px;
  color: #fff;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 16px;
  margin: 4vh auto;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: default;
  }
`;

const Register = () => {
  const navigator = useNavigate();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 로그인처리
    goChat();
  };

  const goChat = () => {
    navigator('/chat');
  };
  const isFormValid = nickname && password;

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>회원이신가요?{'\n'}닉네임과 비밀번호를 입력해주세요</Label>
          <Input
            id="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={handleNicknameChange}
            required
          />
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <Message>회원이 아니시라면 자동으로 회원가입을 진행합니다</Message>
        </InputContainer>
        <Button type="submit" disabled={!isFormValid}>로그인하기</Button>
      </Form>
    </Container>
  );
};

export default Register;
