import React from 'react';
import { useState, useCallback, useRef, useLayoutEffect } from 'react';
import HanTools from 'hangul-tools';
import './WordRelay.css';
import axios from 'axios';
import io from 'socket.io-client'


export default function WordRelay() {
    const socket = io.connect("http://localhost:4000")
    const startWords = ["우리말", "끝말잇기", "시간표"]
    const index = Math.floor(Math.random() * 3)
    const starting = startWords[index];
    let [prev, setPrev] = useState(`${starting}`);
    let [word, setWord] = useState(``);
    let [result, setResult] = useState('');
    let [testword, setTestword] = useState(``);
    let [judges, setJudges] = useState(false);
    async function checking() {
        try {
            const response = await axios.get(`http://localhost:3031/api?search=${word}`);
            console.log(response.data);
            setJudges(true);
        } catch (error) {
            console.error(error);
            setJudges(false);
            alert('웅 너 탈락이양 ^^');
            setWord('');
            window.location.replace("/mainPage")
        }
    }
    const submit = () => {
        if(word.length < 1){
            alert("단어를 입력하고 엔터키를 눌러주세요~!");
        }
        else if (word.length > 1 && HanTools.dueum(prev[prev.length - 1]) === word[0]) {
            checking();
            // if(judges == true){
            let okay = 'O';
            setPrev(word);
            setResult(okay);
            setWord('');
            socket.emit("room message", word);
            // }
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

    React.useEffect(() => {
        socket.on("room message", (data)=>{
            setPrev(data);
        })
    }, []);

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
                <input onChange={change} value={word} onKeyPress={onKeyPress} autoFocus className='wordbox' />
                <button onClick={submit} className='pressing'>입력!</button>
                <div>{result}</div>
            </div>
        </>
    )
}
