angular.module('meanhotel').controller('HotelsController',HotelsController);
function HotelsController($http,$scope,hotelDataFactory){
  $scope.title = 'MEAN HOTEL APP'
  hotelDataFactory.hotelList().then(function(response){
    //console.log("the response is ",response);
    $scope.hotelData = response.data;
  });
}
