import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import chatProfile from '../assets/chatProfilePic.svg';
import FirstModal from '../components/FirstModal';
import SecondModal from '../components/SecondModal';
import ThirdModal from '../components/ThirdModal';
import FourthModal from '../components/FourthModal';
import FifthModal from '../components/FifthModal';


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

const MyChatBubble = styled.div`
  background-color: #6750A4;
  color: #FFFFFF;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
  max-width: 70%;
  animation: ${slideIn} 0.5s ease-out;
  opacity: 0;
  animation-fill-mode: forwards;
  margin-left: auto;
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


const Chat = () => {
  const [nickname, setNickname] = useState('');

  const [messages, setMessages] = useState([]);
  const [secondMessages, setSecondMessages] = useState([]);
  const [thirdMessages, setThirdMessages] = useState([]);
  const [fourthMessages, setFourthMessages] = useState([]);
  const [fifthMessages, setFifthMessages] = useState([]);
  const [finalMessages, setFinalMessages] = useState([]);

  const [index, setIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);
  const [thirdIndex, setThirdIndex] = useState(0);
  const [fourthIndex, setFourthIndex] = useState(0);
  const [fifthIndex, setFifthIndex] = useState(0);
  const [finalIndex, setFinalIndex] = useState(0);

  const [modalOpenFirst, setModalOpenFirst] = useState(false);
  const [modalOpenSecond, setModalOpenSecond] = useState(false);
  const [modalOpenThird, setModalOpenThird] = useState(false);
  const [modalOpenFourth, setModalOpenFourth] = useState(false);
  const [modalOpenFifth, setModalOpenFifth] = useState(false);
  const [modalOpenFinal, setModalOpenFinal] = useState(false);

  const [selectedNumPeople, setSelectedNumPeople] = useState('');
  const [selectedNumWeek, setSelectedNumWeek] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedNumChild, setSelectedNumChild] = useState('');

  // chat 끝난 후
  const [firstEffectFinished, setFirstEffectFinished] = useState(false);
  const [secondEffectFinished, setSecondEffectFinished] = useState(false);
  const [thirdEffectFinished, setThirdEffectFinished] = useState(false);
  const [fourthEffectFinished, setFourthEffectFinished] = useState(false);
  const [fifthEffectFinished, setFifthEffectFinished] = useState(false);
  const [finalEffectFinished, setFinalEffectFinished] = useState(false);


  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname);
    }
  }, []);

  const FirstChatMessages = [
    '살아봐유에 오신걸 환영해요!',
    `${nickname}님에게 딱 맞는 대전 집을 찾기 위해 몇 가지 질문에 대답해주세요!`,
    '몇명이 살 예정인가요?',
  ];

  const SecondChatMessages = [
    '그렇군요!',
    '그럼 대전에 얼마나 머무를 예정인가요?',
  ]

  const ThirdChatMessages = [
    '학생이신가요 아니면 직장인이신가요?',
  ]

  const FourthChatMessages = [
    '아 그러시군요!',
    '자차가 있으신가요?',
  ]

  const FifthChatMessages = [
    '마지막 질문입니다!',
    '아이와 함께 지낼 예정인가요?',
  ]

  const FinalChatMessages = [
    '마지막까지 성실하게 답변해주셔서 감사해요!',
    '혹시 저희가 알면 좋은 추가정보가 있을까요?',
    '예를 들어 휠체어를 이용한다던가, 근처에 병원이 있어야 한다던지요!',
    '만약 추가정보가 없다면 없다고 답변해주세요'
  ]

  const showModalFirst = () => {
    setModalOpenFirst(true);
  };

  const closeModalFirst = () => {
    setModalOpenFirst(false);
  };

  const handleSelectNumberOfPeople = (selection) => {
    setSelectedNumPeople(selection);
    closeModalFirst();
  };

  const handleSelectNumberOfWeek = (selection) => {
    setSelectedNumWeek(selection);
    closeModalSecond();
  };

  const handleSelectStatus = (selection) => {
    setSelectedStatus(selection);
    closeModalThird();
  };

  const handleSelectCar = (selection) => {
    setSelectedCar(selection);
    closeModalFourth();
  };

  const handleSelectNumberOfChild = (selection) => {
    setSelectedNumChild(selection);
    closeModalFifth();
  };

  const showModalSecond = () => {
    setModalOpenSecond(true);
  };

  const closeModalSecond = () => {
    setModalOpenSecond(false);
  };

  const showModalThird = () => {
    setModalOpenThird(true);
  };

  const closeModalThird = () => {
    setModalOpenThird(false);
  };

  const showModalFourth = () => {
    setModalOpenFourth(true);
  };

  const closeModalFourth = () => {
    setModalOpenFourth(false);
  };

  const showModalFifth = () => {
    setModalOpenFifth(true);
  };

  const closeModalFifth = () => {
    setModalOpenFifth(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index <= FirstChatMessages.length) {
        if (index === 3) {
          showModalFirst();
          clearInterval(intervalId);
          setFirstEffectFinished(true); // 첫 번째 useEffect 완료 상태를 true로 설정
        } else {
          setMessages(prevMessages => [...prevMessages, FirstChatMessages[index]]);
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [index]);

  useEffect(() => {
    if (!firstEffectFinished || !selectedNumPeople) return;

    const intervalId = setInterval(() => {
      if (secondIndex <= SecondChatMessages.length) {
        if (secondIndex === 2) {
          showModalSecond();
          clearInterval(intervalId);
          setSecondEffectFinished(true);
        } else {
          setSecondMessages(prevSecondMessages => [...prevSecondMessages, SecondChatMessages[secondIndex]]);
          setSecondIndex(prevSecondIndex => prevSecondIndex + 1);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondIndex, firstEffectFinished, selectedNumPeople]);

  // 3번째 대화
  useEffect(() => {
    if (!firstEffectFinished || !secondEffectFinished || !selectedNumPeople || !selectedNumWeek) 
      return;

    const intervalId = setInterval(() => {
      if (thirdIndex <= ThirdChatMessages.length) {
        if (thirdIndex === 1) {
          showModalThird();
          clearInterval(intervalId);
          setThirdEffectFinished(true);
        } else {
          setThirdMessages(prevThirdMessages => [...prevThirdMessages, ThirdChatMessages[thirdIndex]]);
          setThirdIndex(prevThirdIndex => prevThirdIndex + 1);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [thirdIndex, secondEffectFinished, selectedNumWeek]);

  // 4번째 대화
  useEffect(() => {
    if (!firstEffectFinished || !secondEffectFinished || !thirdEffectFinished || !selectedNumPeople || !selectedNumWeek || !selectedStatus) 
      return;

    const intervalId = setInterval(() => {
      if (fourthIndex <= FourthChatMessages.length) {
        if (fourthIndex === 2) {
          showModalFourth();
          clearInterval(intervalId);
          setFourthEffectFinished(true);
        } else {
          setFourthMessages(prevFourthMessages => [...prevFourthMessages, FourthChatMessages[fourthIndex]]);
          setFourthIndex(prevFourthIndex => prevFourthIndex + 1);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [fourthIndex, thirdEffectFinished, selectedStatus]);

  // 5번째 대화
  useEffect(() => {
    if (!firstEffectFinished || !secondEffectFinished || !thirdEffectFinished || !fourthEffectFinished
      || !selectedNumPeople || !selectedNumWeek || !selectedStatus || !selectedCar) 
      return;

    const intervalId = setInterval(() => {
      if (fifthIndex <= FifthChatMessages.length) {
        if (fifthIndex === 2) {
          showModalFifth();
          clearInterval(intervalId);
          setFifthEffectFinished(true);
        } else {
          setFifthMessages(prevFifthMessages => [...prevFifthMessages, FifthChatMessages[fifthIndex]]);
          setFifthIndex(prevFifthIndex => prevFifthIndex + 1);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [fifthIndex, fourthEffectFinished, selectedCar]);

  // 6번째 대화
  useEffect(() => {
    if (!firstEffectFinished || !secondEffectFinished || !thirdEffectFinished || !fourthEffectFinished || !fifthEffectFinished
      || !selectedNumPeople || !selectedNumWeek || !selectedStatus || !selectedNumChild) 
      return;

    const intervalId = setInterval(() => {
      if (finalIndex <= FinalChatMessages.length) {
        if (finalIndex === 2) {
          showModalFifth();
        } else {
          setFinalMessages(prevFinalMessages => [...prevFinalMessages, FinalChatMessages[finalIndex]]);
          setFinalIndex(prevFinalIndex => prevFinalIndex + 1);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [finalIndex, fifthEffectFinished, selectedNumChild]);


  return (
    <ChatContainer>
      <StyledChat>
        {messages.map((message, idx) => (
          <ChatBubble key={idx}>{message}</ChatBubble>
        ))}
        {selectedNumPeople && <MyChatBubble>{`${selectedNumPeople}이 살거야`}</MyChatBubble>}
        {modalOpenFirst && <FirstModal isOpen={modalOpenFirst} onRequestClose={closeModalFirst} onSelectNumberOfPeople={handleSelectNumberOfPeople} />}

        {secondMessages.map((message, idx) => (
          <ChatBubble key={idx}>{message}</ChatBubble>
        ))}
        {modalOpenSecond && <SecondModal isOpen={modalOpenSecond} onRequestClose={closeModalSecond} onSelectNumberOfWeek={handleSelectNumberOfWeek} />}
        {selectedNumWeek && <MyChatBubble>{`${selectedNumWeek} 지낼 예정이야`}</MyChatBubble>}
        
        {thirdMessages.map((message, idx) => (
          <ChatBubble key={idx}>{message}</ChatBubble>
        ))}
        
        {modalOpenThird && <ThirdModal isOpen={modalOpenThird} onRequestClose={closeModalThird} onSelectStatus={handleSelectStatus} />}
        {selectedStatus && <MyChatBubble>{`나는 ${selectedStatus}이야`}</MyChatBubble>}

        {fourthMessages.map((message, idx) => (
          <ChatBubble key={idx}>{message}</ChatBubble>
        ))}

        {modalOpenFourth && <FourthModal isOpen={modalOpenFourth} onRequestClose={closeModalFourth} onSelectCar={handleSelectCar} />}
        {selectedCar && <MyChatBubble>{`나는 ${selectedCar}`}</MyChatBubble>}

        {fifthMessages.map((message, idx) => (
          <ChatBubble key={idx}>{message}</ChatBubble>
        ))}

        {modalOpenFifth && <FifthModal isOpen={modalOpenFifth} onRequestClose={closeModalFifth} onSelectNumChild={handleSelectNumberOfChild} />}
        {selectedNumChild && <MyChatBubble>{`나는 ${selectedNumChild}`}</MyChatBubble>}

        {finalMessages.map((message, idx) => (
          <ChatBubble key={idx}>{message}</ChatBubble>
        ))}

      </StyledChat>
    </ChatContainer>
  );
}

export default Chat;
