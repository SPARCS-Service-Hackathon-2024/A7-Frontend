import React from 'react';
import './RegisterHeader.css';
import PersonIcon from '../assets/person.svg'
import BackIcon from '../assets/chevron.svg'

function RegisterHeader() {
    return (
        <header className="header">
            <a href="/list"><img src={BackIcon} alt="뒤로가기"/></a>
            <span>신청하기</span>
            <a href="/mypage"><img src={PersonIcon} alt="마이페이지"/></a>
        </header>
    );
}

export default RegisterHeader;
