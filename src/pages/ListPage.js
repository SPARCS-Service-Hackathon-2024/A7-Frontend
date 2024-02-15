import React from 'react';
import Header from '../components/Header';
import HomeIcon from '../assets/home.svg';

const ListPage = () => {
    return (
        <>
            <Header />
            <img src={HomeIcon} alt="Home" style={{ width: 52 }} />
        </>
    );
}

export default ListPage;
