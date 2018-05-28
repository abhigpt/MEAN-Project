var express = require('express');
var path    = require('path');
var app = express();
app.set('port',3005);
app.use(express.static(path.join(__dirname,'public')));
// app.get('/',function(req,res){
//   console.log("get url hit");
//   res
//     .status(200)
//     .sendFile(path.join(__dirname,'public','index.html'));
// });
var server = app.listen(app.get('port'),function(){
  var port = server.address().port;
  console.log("server running on port ",port);
});
console.log("me first");
