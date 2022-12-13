import "./login.css";
import react from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const id = "202110302@bssm.hs.kr";
    const pw = "12345678910";
    const nav = useNavigate();
    const [writeid, setWriteid] = useState("");
    const [writepw, setWritepw] = useState("");
    const onChangeid = (e) => {
        setWriteid(e.target.value);
    }
    const onChangepw = (e) => {
        setWritepw(e.target.value);
    }
    function printing() {
        if(writeid == id && writepw == pw){
            alert("로그인 성공 하셨습니다!");
            nav('/wordRelay');
        }
        else {
            alert('로그인 실패! 아이디/비밀번호를 확인해 주세요.');
        }
    }
    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            printing();
        }
    }
    return (
        <div className="loginpg">
            <p className="logm">로그인</p>
            <input type="text" className="logintext" placeholder="아이디를 입력해주세용" onChange={onChangeid}/>
            <input type="password" className="passwordtext" placeholder="비밀번호를 입력해주세용" onChange={onChangepw}/>
            <div className="letlog" onClick={printing} onKeyPress={onKeyPress}>
                <p id="letgo">Login!</p>
            </div>
            <div className="letsign">
                <p id="letsignup">Signup!</p>
            </div>
        </div>
    );
}
