const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http)

io.on('connection', (socket) => {
  socket.on('chat message', (message) => {
    io.emit('chat message', message)
  })
})

http.listen(3001, () => {
  console.log('listening on 3001')
})