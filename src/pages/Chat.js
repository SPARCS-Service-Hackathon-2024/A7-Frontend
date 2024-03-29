import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import chatProfile from '../assets/chatProfilePic.svg';
import FirstModal from '../components/FirstModal';
import SecondModal from '../components/SecondModal';
import ThirdModal from '../components/ThirdModal';
import FourthModal from '../components/FourthModal';
import FifthModal from '../components/FifthModal';
import SendButton from '../assets/send.svg';

import '../css/chat.css';
import ChatProfile from '../assets/message-circle.svg';
import {useNavigate} from "react-router-dom";


const StyledChat = styled.div`
  background-color: #F2E7F9;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  padding: 10px;
  padding-bottom: 50px;
  box-sizing: border-box;
  overflow-x: auto;
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
  margin-top: 10px;
  max-width: 70%;
  animation: ${slideIn} 0.5s ease-out;
  text-align: right;
  display: inline-block;
  opacity: 0;
  animation-fill-mode: forwards;
`;


const ChatBubble = styled.div`
  background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 13.5px;
  margin-top: 10px;
  max-width: 70%;
  display: inline-block;
  animation: ${slideIn} 0.5s ease-out;
  opacity: 0;
  font-size: 14px;
  animation-fill-mode: forwards;
`;

const ChatContainer = styled.div`
  overflow-x: auto;
  height: 100vh;
`;


const Chat = () => {
  const [nickname, setNickname] = useState('');
  const [isLoading, setIsLoading] = useState(false);


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

  // chat.css 끝난 후
  const [firstEffectFinished, setFirstEffectFinished] = useState(false);
  const [secondEffectFinished, setSecondEffectFinished] = useState(false);
  const [thirdEffectFinished, setThirdEffectFinished] = useState(false);
  const [fourthEffectFinished, setFourthEffectFinished] = useState(false);
  const [fifthEffectFinished, setFifthEffectFinished] = useState(false);
  const [finalEffectFinished, setFinalEffectFinished] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(inputValue);
  //   setInputValue(''); // 입력 후 입력창 초기화
  // };

  const transformData = (data) => {
    return {
      person_count: data.numPeople,
      period: data.numWeek,
      identity: data.status,
      car: data.car === "있다" ? "자차" : "대중교통",
      child: data.numChild === "그렇다" ? "아이 있음" : "아이 없음",
      significant: data.additionalInfo
    };
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


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

  const navigator = useNavigate();

  const handleSendClick = async () => {


    console.log("전송 버튼 클릭됨!");

    // 상태에서 데이터를 가져옵니다.
    const collectedData = {
      numPeople: selectedNumPeople,
      numWeek: selectedNumWeek,
      status: selectedStatus,
      car: selectedCar,
      numChild: selectedNumChild,
      additionalInfo: inputValue // 사용자가 입력한 추가 정보
    };

    // 데이터를 변환합니다.
    const transformedData = transformData(collectedData);

    console.log(transformedData); // 변환된 데이터를 확인합니다.
    setIsLoading(true);

    try {

      const url = 'https://sarabwayu.com/api/chat';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(transformedData)
      });

      const responseData = await response.json();

      setIsLoading(false);

      if (response.ok) {
        console.log(responseData.data);


        navigator('/list');
        } else {
        // 서버에서 오류 응답을 받은 경우의 처리를 여기에 작성합니다.
        console.error('서버 오류');
      }
    } catch (error) {
      // 네트워크 오류 처리를 여기에 작성합니다.
      console.error('전송 실패:', error);
    }
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
  const [isWaitingForInput, setIsWaitingForInput] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (!firstEffectFinished || !secondEffectFinished || !thirdEffectFinished || !fourthEffectFinished || !fifthEffectFinished
      || !selectedNumPeople || !selectedNumWeek || !selectedStatus || !selectedNumChild || isWaitingForInput)
      return;

    const intervalId = setInterval(() => {
      if (finalIndex <= FinalChatMessages.length) {
        if (finalIndex === 4) {
          clearInterval(intervalId);
          setIsWaitingForInput(true);
          setFinalEffectFinished(true);
        } else {
          setFinalMessages(prevFinalMessages => [...prevFinalMessages, FinalChatMessages[finalIndex]]);
          setFinalIndex(prevFinalIndex => prevFinalIndex + 1);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [finalIndex, fifthEffectFinished, selectedNumChild, isWaitingForInput]);


return (
    <ChatContainer>
      <StyledChat>

        <div className="chatbox">
          {messages.map((message, idx) => (
              <div key={idx} className="message-container">
                {idx === 0 ? (
                    <img className="chat-profile" src={chatProfile} alt="Profile"/>
                ) : (
                    <div className="transparent-div"></div>
                )}
                <ChatBubble>{message}</ChatBubble>
              </div>
          ))}
        </div>

        <div className="my-chat-container">
          {selectedNumPeople && <MyChatBubble>{`${selectedNumPeople}이 살거야`}</MyChatBubble>}
        </div>
        {modalOpenFirst && <FirstModal isOpen={modalOpenFirst} onRequestClose={closeModalFirst}
                                       onSelectNumberOfPeople={handleSelectNumberOfPeople}/>}

        <div className="chatbox">
          {secondMessages.map((message, idx) => (
              <div key={idx} className="message-container">
                {idx === 0 ? (
                    <img className="chat-profile" src={chatProfile} alt="Profile"/>
                ) : (
                    <div className="transparent-div"></div>
                )}
                <ChatBubble>{message}</ChatBubble>
              </div>
          ))}
        </div>

        {modalOpenSecond && <SecondModal isOpen={modalOpenSecond} onRequestClose={closeModalSecond}
                                         onSelectNumberOfWeek={handleSelectNumberOfWeek}/>}
        <div className="my-chat-container">
          {selectedNumWeek && <MyChatBubble>{`${selectedNumWeek}일 지낼 예정이야`}</MyChatBubble>}
        </div>

        <div className="chatbox">
          {thirdMessages.map((message, idx) => (
              <div key={idx} className="message-container">
                {idx === 0 ? (
                    <img className="chat-profile" src={chatProfile} alt="Profile"/>
                ) : (
                    <div className="transparent-div"></div>
                )}
                <ChatBubble>{message}</ChatBubble>
              </div>
          ))}
        </div>

        {modalOpenThird &&
            <ThirdModal isOpen={modalOpenThird} onRequestClose={closeModalThird}
                        onSelectStatus={handleSelectStatus}/>}

        <div className="my-chat-container">
          {selectedStatus && <MyChatBubble>{`나는 ${selectedStatus}이야`}</MyChatBubble>}
        </div>

        <div className="chatbox">
          {fourthMessages.map((message, idx) => (
              <div key={idx} className="message-container">
                {idx === 0 ? (
                    <img className="chat-profile" src={chatProfile} alt="Profile"/>
                ) : (
                    <div className="transparent-div"></div>
                )}
                <ChatBubble>{message}</ChatBubble>
              </div>
          ))}
        </div>

        {modalOpenFourth &&
            <FourthModal isOpen={modalOpenFourth} onRequestClose={closeModalFourth} onSelectCar={handleSelectCar}/>}
        <div className="my-chat-container">
          {selectedCar === '있다' ? <MyChatBubble>나는 주로 운전해서 다녀</MyChatBubble> : selectedCar === '없다' ?
              <MyChatBubble>나는 주로 대중교통을 이용해</MyChatBubble> : null}
        </div>

        <div className="chatbox">
          {fifthMessages.map((message, idx) => (
              <div key={idx} className="message-container">
                {idx === 0 ? (
                    <img className="chat-profile" src={chatProfile} alt="Profile"/>
                ) : (
                    <div className="transparent-div"></div>
                )}
                <ChatBubble>{message}</ChatBubble>
              </div>
          ))}
        </div>

        {modalOpenFifth && <FifthModal isOpen={modalOpenFifth} onRequestClose={closeModalFifth}
                                       onSelectNumChild={handleSelectNumberOfChild}/>}
        <div className="my-chat-container">
        {selectedNumChild === '그렇다' ? <MyChatBubble>응, 아이가 있어</MyChatBubble> : selectedNumChild === '아니다' ?
            <MyChatBubble>아니, 아이가 없어</MyChatBubble> : null}
        </div>

        <div className="chatbox">
          {finalMessages.map((message, idx) => (
              <div key={idx} className="message-container">
                {idx === 0 ? (
                    <img className="chat-profile" src={chatProfile} alt="Profile"/>
                ) : (
                    <div className="transparent-div"></div>
                )}
                <ChatBubble>{message}</ChatBubble>
              </div>
          ))}
        </div>
        {isLoading && <div className="loading-spinner"></div>}
        {finalEffectFinished &&
          <div className="padding-2"></div>
        }
        {finalEffectFinished &&
            <div className="my-input-container">
              <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="text-input"
                  placeholder="여기에 입력하세요..."
              />
              <img src={SendButton} className="send-button" onClick={handleSendClick} alt="전송"/>
            </div>
        }

      </StyledChat>
    </ChatContainer>
);
}

export default Chat;
