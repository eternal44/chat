var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');

app.use(express.static(path.join(__dirname, './client')));
app.use('/dependencies', express.static(__dirname + '/node_modules/'));

io.on('connection', function(socket){
  console.log('A user connected');

  socket.on('disconnect', function(exit){
    io.emit('A user has left', exit);
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');;
})

server.listen(3000, function() {
  console.log('listening on port 3000');
});
