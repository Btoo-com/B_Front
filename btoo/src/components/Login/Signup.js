import './login.css';
import react from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const [grade, setGrade] = useState();
    const [cla, setCla] = useState();
    const [name, setName] = useState();
    const [pwd, setPwd] = useState();
    const nav = useNavigate();
    const onsubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('password', pwd);
        form.append('nickname', name);
        form.append('grade', grade);
        form.append('ban', cla);
        form.append('score', 0);
        axios.post('http://localhost:3031/signup', form)
        .then((res) => {
            console.log(res);
            if (res.data){
                alert("회원가입 성공!!!");
                nav('/mainpage')
            } 
            else alert("회원가입 실패!!!");
        })
        .catch((e) => {
            console.error(e);
        })
    }
    return (
        <div className='loginpg'>
            <h1>회원가입</h1>
            <form onSubmit={onsubmit}>
                <label>학년 ex - 1학년</label>
                <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)}></input><br/>
                <label>반</label>
                <input type="text" value={cla} onChange={(e) => setCla(e.target.value)}/><br/>
                <label>닉네임</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="닉네임을 입력해주세요"></input><br/>
                <label>비밀번호</label>
                <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="비밀번호 입력해주세요"></input><br/>
                <button type='submit'><text>가입하기</text></button>
            </form>
        </div>
    );
}