import React from 'react';
import './Header.css';
import BackIcon from '../assets/chevron.svg'

function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="/list"><img src={BackIcon} alt="뒤로가기"/></a></li>
                    <li>마이페이지</li>
                    <li></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
