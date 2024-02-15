import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import HomeIcon from '../assets/home.svg';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const HomeImage = styled.img`
    width: 52px;
    margin-right: 10px;
`;

const NicknameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const NicknameText = styled.h1`
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    font-size: 19px;
    white-space: pre-line;
    text-align: left;
    margin: 0;
`;

const ListPage = () => {
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        const storedNickname = localStorage.getItem('nickname');
        if (storedNickname) {
            setNickname(storedNickname);
        }
    }, []);

    return (
        <>
            <Header />
            <Container>
                <HomeImage src={HomeIcon} alt="Home" />
            </Container>
            <NicknameContainer>
                <NicknameText>{nickname}님에게{'\n'}가장 적합한 집을 골라왔어요.</NicknameText>
            </NicknameContainer>
        </>
    );
}

export default ListPage;
