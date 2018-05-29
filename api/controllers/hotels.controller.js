var hotelController = {};
var hotelData = require('../data/hoteldata.json');
var dbconn    = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectID
hotelController.getHotel = function(req,res){
  var db = dbconn.get();
  db.collection('hotels').find().toArray(function(err,result){
    if(err){
      console.log("EEEEEEEE");
    }
    else{
      console.log("the result is ",result);
      res
        .status(200)
        .json(result);
    }
  });
}
hotelController.getOneHotel = function(req,res){
  console.log("Inside getHotel by params ",req.params.hotelId);
  var hotelId = req.params.hotelId;
  var db = dbconn.get();
  db.collection('hotels').findOne({_id : ObjectId(hotelId)},function(err,result){
    if(err){
      console.log("EE");
    }
    else{
      console.log("the result is ",result);
      res
        .status(200)
        .json(result);
    }
  });

}
hotelController.addOneHotel = function(req,res){
  console.log("Inside addOneHotel by params ",req.body);
  res
    .status(200)
    .json(req.body);
}



module.exports = hotelController;
