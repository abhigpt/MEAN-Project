var express = require('express');
var router  = express.Router();
var hotelController = require('../controllers/hotels.controller.js');
console.log("the hotel controller is",hotelController);
router
  .route('/hotel')
  .get(hotelController.getHotel);

  module.exports = router;
