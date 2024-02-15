import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import OnBoarding from './pages/OnBoarding';
import Register from './pages/Register';

function App() {
  const [user, setUser] = useState({ userName: ''});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<OnBoarding />} />
          <Route path="register" element={<Register />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;