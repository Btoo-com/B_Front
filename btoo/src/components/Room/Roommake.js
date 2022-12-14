import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function MakingRoom() {
    const [roomname, setRoomname] = useState('');
    const [hostid, setHostid] = useState(1);
    const [rname, setRname] = useState('');
    const [rid, setRid] = useState('');
    const nav = useNavigate();
    const makeroom = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('room_name', roomname);
        form.append('host_id', hostid)
        axios.post('http://localhost:3031/makeroom', form)
            .then((res) => {
                console.log(res.data);
                console.log(res.data.room_name);
                setRname(res.data.room_name);
                setRid(res.data.room_id);
                if (res.data) {
                alert("방 만들기 성공!!!");
                nav('/mainpage');
                }
                else alert("만들기 실패!!!");
            })
            .catch((e) => {
                console.error(e);
            })
    }
    return (
        <div className='mih'>
            <div className='roombg'>
                <div className='listt'>
                <h1 className='listitle'>방만들기</h1>
                </div>
                <form onSubmit={makeroom}>
                    <div className='mkrn'>
                    <label >방 이름</label>
                    <input type="text" className="inputing" value={roomname} onChange={(e) => setRoomname(e.target.value)} placeholder="방 이름을 입력해주세요" />
                    <button onClick={makeroom} className="mkbutton">만들기!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
