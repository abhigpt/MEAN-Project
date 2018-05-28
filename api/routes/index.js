var express = require('express');
var router  = express.Router();
var hotelController = require('../controllers/hotels.controller.js');
console.log("the hotel controller is",hotelController);
router
  .route('/hotel')
  .get(hotelController.getHotel);

router
  .route('/hotel/:hotelId')
  .get(hotelController.getOneHotel);

router
  .route('/hotel/new')
  .post(hotelController.addOneHotel);

  module.exports = router;
