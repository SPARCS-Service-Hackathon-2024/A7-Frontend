import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';

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
    goChat();

    try {
      const response = await fetch('http://sarabwayu.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname, password }),
      });

      if (response.ok) {
        goChat();
      } else {
        console.error('회원가입 실패:', response.statusText);
      }
    } catch (error) {
      console.error('네트워크 오류:', error);
    }
  };

  const goChat = () => {
    navigator('/chat');
  };

  return (
    <div>
      <label htmlFor="nickname">회원이신가요? 닉네임과 비밀번호를 입력해주세요</label>
      <input
        id="nickname"
        type="text"
        placeholder="닉네임을 입력해주세요"
        value={nickname}
        onChange={handleNicknameChange}
        style={{ width: '100%' }}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={handlePasswordChange}
        style={{ width: '100%' }}
      />
      <Button type="submit" title="로그인하기" onClick={handleSubmit} />
    </div>
  );
  
};

export default Register;
