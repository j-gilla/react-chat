const express = require('express');
const socket = require('socket.io');

const app = express();

server = app.listen(8080, function(){
    console.log("Server is running from port 8080")
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id)

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECIEVE_MESSAGE', data);
    });
});
