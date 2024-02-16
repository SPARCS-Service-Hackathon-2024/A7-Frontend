import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import HeartIcon from '../assets/favorite_on.svg'; // "좋아요" 상태를 나타내는 아이콘
import HeartOffIcon from '../assets/favorite_off.svg'; // "좋아요 해제" 상태를 나타내는 아이콘
import threeDIcon from '../assets/3d.svg';
import '../css/ListPage.css';
import HomeIcon from '../assets/home.svg';
import { ReactComponent as LocationIcon } from '../assets/map-pin.svg';
import {like, list, rec_list} from '../services/list';
import { useNavigate } from 'react-router-dom';


const HomeImage = styled.img`
    width: 52px;
    margin-top: 16px;
    padding: 0 16px;
`;


const NicknameText = styled.h1`
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    font-size: 19px;
    padding: 0 16px;
    white-space: pre-line;
    text-align: left;
    height: 56px;
    margin-top: 12px;
`;

const ListPage = () => {
    const navigate = useNavigate();

    const [nickname, setNickname] = useState('');
    const [items, setItems] = useState([]); // API로부터 받아온 데이터를 저장할 상태
    const [items2, setItems2] = useState([]); // API로부터 받아온 데이터를 저장할 상태

    const handleLikeClick = async (itemId, isLiked) => {
        try {
            // API 호출을 통해 좋아요 상태 변경
            // 예시: await like(itemId, !isLiked);
            // 실제 구현에서는 이 부분을 실제 API 호출로 대체해야 합니다.
            await like(itemId);

            // 상태 업데이트
            const updatedItems = items.map(item => {
                if (item.house_id === itemId) {
                    return { ...item, is_like: !isLiked };
                }
                return item;
            });

            setItems(updatedItems);
        } catch (error) {
            console.error("좋아요 상태 변경 실패", error);
        }
    };

    useEffect(() => {
        const storedNickname = localStorage.getItem('nickname');
        if (storedNickname) {
            setNickname(storedNickname);
        }

        const fetchData = async () => {
            const result = await rec_list(1); // list 함수는 API 호출을 담당하는 함수라고 가정
            setItems(result.data); // API로부터 받아온 데이터로 items 상태 업데이트
            const result2 = await list(2); // list 함수는 API 호출을 담당하는 함수라고 가정
            setItems2(result2.data); // API로부터 받아온 데이터로 items 상태 업데이트
        };

        fetchData();
    }, []);

    const handleItemClick = (houseId) => {
        navigate(`/detail/${houseId}`); // 상세 페이지로 이동합니다.
    };

    return (
        <>
            <Header />
            <div className="contents">
                <div className="contents-header">
                    <HomeImage src={HomeIcon} alt="Home"/>
                    <NicknameText>{nickname} 님에게{'\n'}가장 적합한 집을 골라왔어요.</NicknameText>
                </div>
                <div className="contents-body">
                    {items.map((item, index) => (
                        <div key={index} className="item">
                            <div className="content-space">
                                <img className="content-image" src={item.image_url} onClick={() => handleItemClick(item.house_id)}/>
                                <div className="content-body">
                                    <div className="content-info">
                                        <span className="span-title" onClick={() => handleItemClick(item.house_id)}>{item.aptName}</span>
                                        <span className="span-content" onClick={() => handleItemClick(item.house_id)}><LocationIcon
                                            className="location-icon"/>{item.exposureAddress}</span>
                                    </div>
                                    <img
                                        src={item.is_like ? HeartIcon : HeartOffIcon}
                                        alt={item.is_like ? "Liked" : "Not Liked"}
                                        className="heart-icon"
                                        onClick={() => handleLikeClick(item.house_id, item.is_like)}
                                    />
                                </div>
                            </div>
                            <div className="content-padding"></div>
                        </div>
                    ))}
                </div>
                <div className="content-padding"></div>
                <div className="contents-header">
                    <img className="logo-image" src={threeDIcon}/>
                    <NicknameText>다른 집도 둘러볼까요?</NicknameText>
                </div>
                <div className="content-loading">
                    {items2.map((item, index) => (
                        <div key={index} className="item">
                            <div className="content-space">
                                <img className="content-image2" src={item.image_url} onClick={() => handleItemClick(item.house_id)}/>
                                <div className="content-body">
                                    <div key={index} className="item" onClick={() => handleItemClick(item.house_id)}>
                                        <div className="content-info">
                                            <span className="span-title">{item.aptName}</span>
                                            <span className="span-content"><LocationIcon
                                                className="location-icon"/>{item.exposureAddress}</span>
                                        </div>
                                    </div>
                                    <img
                                        src={item.is_like ? HeartIcon : HeartOffIcon}
                                        alt={item.is_like ? "Liked" : "Not Liked"}
                                        className="heart-icon"
                                        onClick={() => handleLikeClick(item.house_id, item.is_like)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ListPage;
