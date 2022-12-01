import './components/Header/Header.css';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WordRelay from './components/Chat/WordRelay';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/WordRelay' element={<WordRelay/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
