angular.module('sportagg')
.controller('SportController',['$scope','$routeParams', 'SportService', function($scope, $routeParams, SportService){
  $scope.sportName=$routeParams.sportName;
  $scope.loadGrounds = function(){
    SportService.getGrounds($scope.sportName).then(function(data){
      $scope.grounds=data;
    });
    // $scope.grounds=SportService.getGrounds($scope.sportName);
  };
  $scope.loadGrounds();
}])
.factory('SportService',['$http',function($http){
  var sportService = {};
  sportService.getGrounds = function(sportName){
    return $http.get('/api/sports/grounds/'+sportName).then(function(res){
      return res.data;
    });
  };
  return sportService;
}]);
