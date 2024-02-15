import React, { useState } from 'react';
import styled from 'styled-components';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import RegisterHeader from '../components/RegisterHeader';

import CalendarIcon from '../assets/Today.svg';
import Calendar from '../components/Calendar';


const FullPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

const RegisterHome = () => {
    const [value, onChange] = useState(new Date());

    return (
        <FullPageContainer>
            <RegisterHeader />
            <Calendar />
        </FullPageContainer>
    );
}

export default RegisterHome;
