angular.module('sportagg')
.controller('SportController',['$scope','$routeParams',function($scope, $routeParams){
  $scope.sportName=$routeParams.sportName;
  $scope.grounds=[
    {
      name: "ABCD grounds",
      location: "Nungambakkam"
    },
    {
      name: "Linguswamy Stadium",
      location: "Meenambakkam"
    },
    {
      name: "YMCA grounds",
      location: "Kilpauk"
    }
  ]
}]);
