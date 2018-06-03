angular.module('meanhotel').factory('hotelDataFactory',hotelDataFactory);
function hotelDataFactory($http){
  return {
    hotelList: hotelList,
    hotelDisplay: hotelDisplay
  };
  function hotelList(){
    return $http.get('hotel').then(complete).catch(failed);
  }
  function hotelDisplay(id){
    return $http.get('hotel/' + id).then(complete).catch(failed);
  }
  function complete(response){
    return response;
  }
  function failed(error){
    console.log(error.statusText);
  }
}
