import react from 'react';
import axios from 'axios';
import './Room.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Mainpages() {
    const nav = useNavigate();
    const [lists, setLists] = useState([]);
    function making() {
        nav('/makeroom')
    }
    useEffect(() => {
        (async () => {
            try {
                axios.get('http://localhost:3031/getrooms')
                .then((res) => {
                    setLists(res.data);
                    // let lengths = (res.data).length;
                    // for(let i = 0; i < lengths; i++) {
                    //     setLists([...lists, res.data[i]]);
                    // }
                    // let list = <ul>
                    //     {lists.map((value, index) => <li key={index}> {value}</li>)}
                    // </ul>
                })
            } catch (error) {
                console.log('error');
            }
        })();
    }, [])
    function goroom() {
        nav('/gameroom');
    }
    function goroom2() {
        nav('/gameroom.')
    }
    return (
        <div className='mih'>
            <button onClick={making} className="makr"><text>방만들기</text></button>
            <div className='roombg'>
                <div className='listt'>
                    <h1 className='listitle'>방 리스트</h1>
                </div>
                <div className='wow'>
                {lists.map((e) => (
                    <div className='gameroom'>
                        <p className='roomid' onClick={goroom}>{e.room_id}번방</p>
                        <p className='roomname' onClick={goroom2}>{e.room_name}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}