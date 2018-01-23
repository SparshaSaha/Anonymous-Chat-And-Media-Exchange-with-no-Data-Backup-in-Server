var User=require("./Models/User");
var socketio = require('socket.io');
var http = require('http');

module.exports= function(mongo){
console.log("here");
const port=process.env.PORT || 8080;

onlinemap=new Map();
revonlinemap=new Map();

var server = http.createServer(function(req, res) {
}).listen(port, function() {
    console.log('Listening at: http://localhost:'+port);
});

socketio.listen(server).on('connection', function (socket) {

  socket.on('register',function(mail){
    User.find({email:mail},function(err,resp){
      if(err){

      }
      else {
          if(resp.length==0)
          socket.emit('register_reply',"not an user");
          else {
            socket.emit('register_reply',"registered");
          }
      }
    });
  });


});

}
