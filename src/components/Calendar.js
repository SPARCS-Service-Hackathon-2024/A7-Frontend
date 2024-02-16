import { DateRange } from 'react-date-range';
import { Component } from 'react';
import styled from 'styled-components';
import CalendarIcon from '../assets/Today.svg';

const Container = styled.div`
    width: 100%
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center;
`;

const CalendarImage = styled.img`
    width: 52px;
    height: auto;
    padding-bottom: 16px;
`;

const Label = styled.label`
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    padding-bottom: 12px;
`;

const CalendarLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 16px;
    padding-left: 27px;
`;

const Button = styled.button`
    background-color: #864AE1;
    width: 80%;
    height: 45px;
    color: #fff;
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    font-size: 14px;
    border: none;
    border-radius: 16px;
    margin: 4vh auto;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DateContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
`;

const DateBox = styled.div`
    background-color: #f0f0f0;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
`;

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        };
    };

    onRangeChange = (ranges) => {
        this.setState({
            startDate: ranges['selection'].startDate,
            endDate: ranges['selection'].endDate,
            key: ranges['selection'].key,
        });
    }

    render() {
        const formatDate = (date) => date.toLocaleDateString();
        return (
            <Container>
                <DateRange
                    editableDateInputs={true}
                    onChange={this.onRangeChange}
                    moveRangeOnFirstSelection={false}
                    ranges={[this.state]}
                />
                <div style={{ marginTop: '20px' }}>
                    <CalendarLabelContainer>
                        <CalendarImage src={CalendarIcon} />
                        <Label>선택하신 날짜를 확인해주세요</Label>
                        <DateContainer>
                            <DateBox>{formatDate(this.state.startDate)}</DateBox>
                            <span>~</span>
                            <DateBox>{formatDate(this.state.endDate)}</DateBox>
                        </DateContainer>
                    </CalendarLabelContainer>

                    <Button>
                        원하는 날짜로 예약하기
                    </Button>
                </div>
            </Container>
        )
    }
}
export default Calendar;
