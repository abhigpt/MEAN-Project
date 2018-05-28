var hotelController = {};
var hotelData = require('../data/hoteldata.json');
hotelController.getHotel = function(req,res){
  console.log("Inside getHotel ");
  res
    .status(200)
    .json(hotelData);
}
hotelController.getOneHotel = function(req,res){
  console.log("Inside getHotel by params ",req.params.hotelId);
  var hotelId = req.params.hotelId;
  var thisHotel = hotelData[hotelId];
  res
    .status(200)
    .json(thisHotel);
}
hotelController.addOneHotel = function(req,res){
  console.log("Inside addOneHotel by params ",req.body);
  res
    .status(200)
    .json(req.body);
}



module.exports = hotelController;
