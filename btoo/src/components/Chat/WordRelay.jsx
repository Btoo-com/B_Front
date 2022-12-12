import React from 'react';
import { useState, useCallback, useRef, useLayoutEffect } from 'react';
import HanTools from 'hangul-tools';
import './WordRelay.css';
import axios from 'axios';
export default function WordRelay() {
    const startWords = ["우리말", "끝말잇기", "최병준"]
    const index = Math.floor(Math.random() * 3)
    const starting = startWords[index];
    let [prev, setPrev] = useState(`${starting}`);
    let [word, setWord] = useState(``);
    let [result, setResult] = useState('');
    let [testword, setTestword] = useState(``);
    let [judges, setJudges] = useState(false);
    let time = 10;
    let point = 0;
    const apiKey = "09C49B8826EFD7FDF76B8BD1B1A86E44"
    const timeCheck = () => {
        if (time === 0) {
            alert(`시간이 종료되었습니다 게임에서 탈락됩니다`)
        } else {
            time -= 1
        }
    }
    async function checking() {
        try {
            const response = await axios.get(`http://13.125.156.215:3031/api?search=${word}`);
            console.log(response.data);
            setJudges(true);
        } catch (error) {
            console.error(error);
            console.log('니 좆된듯  ');
            alert('웅 너 탈락이양 ^^');
            setWord('');
            window.location.replace("/WordRelay")
        }
    }
    const submit = () => {
        if (word.length > 1 && HanTools.dueum(prev[prev.length - 1]) === word[0]) {
            checking();
            if(judges == true){
            let okay = 'O';
            setPrev(word);
            setResult(okay);
            setWord('');
            }
        }
        else {
            alert('틀렸습니다 게임에서 탈락됩니다!');
            setWord('');
            window.location.replace("/WordRelay")
        }
    };
    const change = (e) => {
        const { value } = e.target;
        setWord(value);
    }
    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            submit();
        }
    }
    return (
        <>
            <div className='wordrelaybg'>
                <div className='prev'>
                    <div className='ug'></div>
                    <div className='prevb'>
                        <p className='pword'>이전 단어</p>
                        <p className='prevword'>{prev}</p>
                    </div>
                </div>
                <input onChange={change} value={word} onKeyPress={onKeyPress} autoFocus />
                <button onClick={submit}>입력!</button>
                <div>{result}</div>
            </div>
        </>
    )
}
