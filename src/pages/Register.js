import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Pretendard from '../fonts/fonts.css';
import { login } from '../services/login';

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
  font-size: 14px;
  border: none;
  border-radius: 16px;
  margin: 4vh auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background-color: #ccc;
    cursor: default;
  }
`;

const Register = () => {
  const navigator = useNavigate();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigator('/list');
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await login(nickname, password);
      
      if (response.success) {
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('nickname', nickname);
        goChat();
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  const goChat = () => {
    navigator('/list');
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
