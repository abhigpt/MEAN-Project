angular.module('meanhotel').controller('HotelController',HotelController);
function HotelController($http,$scope,$routeParams){
  $http.get('hotel/' + $routeParams.id).then(function(response){
    console.log("the id is---- ",$routeParams.id);
    $scope.hotel = response.data;
  });
}
