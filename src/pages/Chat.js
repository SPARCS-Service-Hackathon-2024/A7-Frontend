import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import chatProfile from '../assets/chatProfilePic.svg';
import FirstModal from '../components/FirstModal';

const StyledChat = styled.div`
  background-color: #EAE3FC;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
  font-family: 'Pretendard', sans-serif;
`;

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ChatBubble = styled.div`
  background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
  max-width: 70%;
  animation: ${slideIn} 0.5s ease-out;
  opacity: 0;
  animation-fill-mode: forwards;
`;

const ChatContainer = styled.div`
  height: 100vh;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px',
  },
};


const Chat = () => {
  const [nickname, setNickname] = useState('');
  const [messages, setMessages] = useState([]);
  const [index, setIndex] = useState(0);
  const [modalOpenFirst, setModalOpenFirst] = useState(false);
  const [modalOpenSecond, setModalOpenSecond] = useState(false);

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, []);

  const chatMessages = [
    '살아봐유에 오신걸 환영해요!',
    `${nickname}님에게 딱 맞는 대전 집을 찾기 위해 몇 가지 질문에 대답해주세요!`,
    '몇명이 살 예정인가요?',
    '그렇군요!',
    '그럼 대전에 얼마나 머무를 예정인가요?',
    '학생이신가요 아니면 직장인이신가요?',
    '아 그러시군요!',
    '자차가 있으신가요?',
    '마지막 질문입니다!',
    '아이와 함께 지낼 예정인가요?',
    '마지막까지 성실하게 답변해주셔서 감사해요!',
    '혹시 저희가 알면 좋은 추가정보가 있을까요?',
    '예를 들어 휠체어를 이용한다던가, 근처에 병원이 있어야 한다던지요!',
    '만약 추가정보가 없다면 없다고 답변해주세요'
  ];

  const showModalFirst = () => {
    setModalOpenFirst(true);
  };

  const closeModalFirst = () => {
    setModalOpenFirst(false);

    setIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < chatMessages.length) {
        setMessages((prevMessages) => [...prevMessages, chatMessages[nextIndex]]);
      }
      return nextIndex;
    });
  };

  const showModalSecond = () => {
    setModalOpenSecond(true);
  };

  const closeModalSecond = () => {
    setModalOpenSecond(false);

    setIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < chatMessages.length) {
        setMessages((prevMessages) => [...prevMessages, chatMessages[nextIndex]]);
      }
      return nextIndex;
    });
  };
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < chatMessages.length) {
        if (chatMessages[index] === '그렇군요!') {
          showModalFirst();
          clearInterval(intervalId);
        } 
        
        else if(chatMessages[index] === '그럼 대전에 얼마나 머무를 예정인가요?'){
          showModalSecond();
          clearInterval(intervalId);
        }

        else if(chatMessages[index] === '학생이신가요 아니면 직장인이신가요?'){
          showModalSecond();
          clearInterval(intervalId);
        }
        else {
          setMessages(prevMessages => [...prevMessages, chatMessages[index]]);
          setIndex(prevIndex => prevIndex + 1);
        }
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [index, chatMessages]);

  return (
    <ChatContainer>
      <StyledChat>
        {messages.map((message, idx) => (
          <ChatBubble key={idx}>{message}</ChatBubble>
        ))}

        {modalOpenFirst && <FirstModal isOpen={modalOpenFirst} onRequestClose={closeModalFirst} />}

      </StyledChat>
    </ChatContainer>
  );
}

export default Chat;
