import React ,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const OnBoarding = () => {
  const navigator=useNavigate();
  const goSignUp=()=>{
    navigator('/register');
  }

  return (
    <div>
      <Button onClick={goSignUp} title="살아봐유 시작하기" />
    </div>
  )
};

export default OnBoarding;
