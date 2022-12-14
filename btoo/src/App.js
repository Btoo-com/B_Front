import './components/Header/Header.css';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Mainpages from './components/Room/Main';
import MakingRoom from './components/Room/Roommake';
import Gameroom from './components/Room/Gameroom';
import Gameroom2 from './components/Room/Gameroom2';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WordRelay from './components/Chat/WordRelay';
import './App.css'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/WordRelay' element={<WordRelay/>}></Route>
          <Route path='/mainpage' element={<Mainpages/>}></Route>
          <Route path='/makeroom' element={<MakingRoom/>}></Route>
          <Route path='/gameroom' element={<Gameroom/>}></Route>
          <Route path='/gameroom.' element={<Gameroom2/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
