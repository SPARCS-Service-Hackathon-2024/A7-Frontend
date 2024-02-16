import React from 'react';
import './RegisterHeader.css';
import BackIcon from '../assets/chevron.svg'

function RegisterHeader() {
    return (
        <header className="header">
            <a href="/list"><img src={BackIcon} alt="뒤로가기"/></a>
            <span>신청하기</span>
            <div></div>
        </header>
    );
}

export default RegisterHeader;
