
const app = require('express')()
const server = require('http').createServer(app)
const cors = require('cors')
const io = require('socket.io')(server,{
    cors : {
        origin :"*",
        credentials :true
    }
});


io.on('connection', socket=>{
    socket.on('message',({name, message}) => {
        io.emit('message',({name, message}))
    })

    socket.on('room message', (msg)=>{
        io.emit('room message', msg);
    })

    socket.on('firstplayer', (fname) =>{
        io.emit('firstplayer', fname);
    })

    socket.on('secondplayer', (sname) =>{
        io.emit('secondplayer', sname);
    })
    socket.on('bools', (booling) =>{
        io.emit('secondplayer', booling);
    })
})

server.listen(4000, function(){
    console.log('listening on port 4000');
})
