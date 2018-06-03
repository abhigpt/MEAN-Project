(function() {
  'use strict';

  angular
    .module('meanhotel')
    .controller('hotelController', hotelCtrl);
  hotelCtrl.$inject = [
    '$scope'
  ];

  function hotelCtrl(
    $scope
  ) {
    console.log("inside hotel controller-------");
  }
})();
