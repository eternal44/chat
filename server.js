var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
});

server.listen(3000, function() {
  console.log('listening on port 3000');
});
