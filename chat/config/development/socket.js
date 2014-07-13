exports.socket = function $inject($io, $log) {
  return function() {
    $io.on('connection', function(socket){
      $log.info('a user connected');
      socket.on('disconnect', function(){
        $log.info('user disconnected');
      });

      socket.on('chat message', function(msg){
        $io.emit('chat message', msg);
      });
    });
  }
};
