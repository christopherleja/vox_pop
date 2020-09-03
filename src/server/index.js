const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('chat message', (message) => {
    io.emit('chat message', message)
  })
})

http.listen(3001, () => {
  console.log('listening on 3001')
})