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
    return $http.get(util.authURL('/api/sports/grounds/'+sportName)).then(function(res){
      if(res.data.success){
        return res.data.data;
      } else {
        throw res.data.error;
      }
    });
  };
  return sportService;
}]);
