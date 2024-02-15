import React from 'react';
import './Header.css';
import PersonIcon from '../assets/person.svg'
import MessageIcon from '../assets/message-circle.svg'

function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="/chat"><img src={MessageIcon} alt="채팅"/></a></li>
                    <li>추천</li>
                    <li><a href="/mypage"><img src={PersonIcon} alt="마이페이지"/></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
