import "./login.css";
import react from 'react';
import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const nav = useNavigate();
  const [ide, setIde] = useState('');
  const [pw, setPw] = useState('');
  const [errMsg, setErrMsg] = useState('');
  function gosignup() {
    nav('/signup')
  }
  const onKeyPress = (e) => {
    if(e.key == 'Enter'){
      printing();
    }
  }
  function printing() {
    nav('/wordRelay');
  }
    return (
        <div className="loginpg">
            <p className="logm">Btoo.com</p>
            <form>
            <input type="text" className="logintext" placeholder="닉네임을 입력해주세용" onChange={(e)=> setIde(e.target.value)}/>
            <input type="password" className="passwordtext" placeholder="비밀번호를 입력해주세용" onChange={(e) => setPw(e.target.value)}/>
            <div className="letlog" onClick={printing} onKeyPress={onKeyPress}>
                <p id="letgo">Login!</p>
            </div>
            </form>
            <div className="letsign" onClick={gosignup}>
                <p id="letsignup">Signup!</p>
            </div>
        </div>
    );
}
