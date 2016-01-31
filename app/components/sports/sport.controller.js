angular.module('sportagg')
.controller('SportController',['$scope','$routeParams',function($scope, $routeParams){
  $scope.sportName=$routeParams.sportName;
}]);
