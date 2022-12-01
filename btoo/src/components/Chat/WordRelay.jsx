import React from 'react';
import { useState, useCallback, useRef, useLayoutEffect } from 'react';
import HanTools from 'hangul-tools';
export default function WordRelay() {
    const startWords = ["우리말", "끝말잇기", "최병준"]
    const index = Math.floor(Math.random() * 3)
    const starting = startWords[index];
    let [prev, setPrev] = useState(`${starting}`);
    let [word, setWord] = useState(``);
    let [result, setResult] = useState('');
    let time = 10;
    let point = 0;
    const apiKey = "09C49B8826EFD7FDF76B8BD1B1A86E44"
    const timeCheck= () => {
        if(time === 0) {
            alert(`시간이 종료되었습니다 게임에서 탈락됩니다`)
        } else {
            time -= 1
        }
    }
    const submit = () =>  {
        if(word.length > 1 && HanTools.dueum(prev[prev.length -1]) === word[0]){
            let okay = 'O';
            setPrev(word);
            setResult(okay);
            setWord('');
        } 
        else {
            alert('틀렸습니다 게임에서 탈락됩니다!');
            setWord('');
            window.location.replace("/WordRelay")
        }
    };
    const change = (e) => {
        const {value} = e.target;
        setWord(value);
    }
    const onKeyPress = (e) => {
        if(e.key == 'Enter'){
            submit();
        }
    }
        return (
            <>
                <div>{prev}</div>
                    <input onChange={change} value={word} onKeyPress={onKeyPress} autoFocus/>
                    <button onClick={submit}>입력!</button>
                <div>{result}</div>
            </>
        )
}
