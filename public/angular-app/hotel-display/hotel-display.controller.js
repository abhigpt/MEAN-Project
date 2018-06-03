angular.module('meanhotel').controller('HotelController',HotelController);
function HotelController($http,$scope,$routeParams,hotelDataFactory){
  hotelDataFactory.hotelDisplay($routeParams.id).then(function(response){
    console.log("the id is---- ",$routeParams.id);
    $scope.hotel = response.data;
  });
}
