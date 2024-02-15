import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import OnBoarding from './pages/OnBoarding';
import Register from './pages/Register';
import Chat from './pages/Chat';
import List from './pages/List';

function App() {
  const [user, setUser] = useState({ userName: ''});
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<OnBoarding />} />
          <Route path="register" element={<Register />}/>
          <Route path="chat" element={<Chat />} />
          <Route path="list" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;