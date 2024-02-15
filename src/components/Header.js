import React from 'react';
import './Header.css';
import PersonIcon from '../assets/person.svg'
import MessageIcon from '../assets/message-circle.svg'

function Header() {
    return (
        <header className="header">
            <a href="/chat"><img src={MessageIcon} alt="채팅"/></a>
            <span>추천</span>
            <a href="/mypage"><img src={PersonIcon} alt="마이페이지"/></a>
        </header>
    );
}

export default Header;
