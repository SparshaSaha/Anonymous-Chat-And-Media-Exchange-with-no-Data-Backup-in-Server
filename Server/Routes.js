var User=require("./Models/User");
var socketio = require('socket.io');

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
  
});

}
