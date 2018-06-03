require('./api/data/dbconnection.js').open();
var express = require('express');
var path    = require('path');
var app = express();
var routes = require('./api/routes');
var bodyParser = require('body-parser');
app.set('port',3005);
app.use(express.static(path.join(__dirname,'public')));
app.use('/node_modules',express.static(__dirname + '/node_modules'));
app.use(bodyParser.urlencoded({extended : false}));
// app.get('/',function(req,res){
//   console.log("get url hit");
//   res
//     .status(200)
//     .sendFile(path.join(__dirname,'public','index.html'));
// });
app.use('/',routes);
var server = app.listen(app.get('port'),function(){
  var port = server.address().port;
  console.log("server running on port ",port);
});
console.log("me first");
