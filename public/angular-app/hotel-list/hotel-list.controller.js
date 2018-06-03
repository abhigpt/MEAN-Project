angular.module('meanhotel').controller('HotelsController',HotelsController);
function HotelsController($http,$scope){
  $scope.title = 'MEAN HOTEL APP'
  $http.get('hotel').then(function(response){
    console.log("the response is ",response);
    $scope.hotelData = response.data;
  });
}
