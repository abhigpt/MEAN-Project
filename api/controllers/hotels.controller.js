var hotelController = {};
var hotelData = require('../data/hoteldata.json');
hotelController.getHotel = function(req,res){
  console.log("Inside getHotel ");
  res
    .status(200)
    .json(hotelData);
}



module.exports = hotelController;
