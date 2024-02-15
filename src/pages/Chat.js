import React from 'react';
import styled from 'styled-components';

const StyledChat = styled.div`
  background-color: #EAE3FC;
  width: 100%;
  height: 100%;
`;

const ChatContainer = styled.div`
  height: 100vh; /* 100%의 뷰포트 높이 */
`;

const Chat = () => {
  return (
    <ChatContainer>
      <StyledChat />
    </ChatContainer>
  );
}

export default Chat;
