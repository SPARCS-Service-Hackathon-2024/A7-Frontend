import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import OnBoarding from './pages/OnBoarding';
import Register from './pages/Register';
import Chat from './pages/Chat';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage'
import MyPage from './pages/MyPage';
import RegisterHome from './pages/RegisterHome.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<OnBoarding />} />
          <Route path="register" element={<Register />}/>
          <Route path="chat" element={<Chat />} />
          <Route path="list" element={<ListPage />} />
          <Route path="mypage" element={<MyPage/>} />
          <Route path="registerHome" element={<RegisterHome />} />
          <Route path="detail/:house_id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;