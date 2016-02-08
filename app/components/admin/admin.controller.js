var sportaggApp = angular.module('sportagg');

sportaggApp.controller('AdminController', ['$scope', '$http', function($scope, $http) {
  $scope.ground = {};
  $scope.addGround = function(){
    console.log($scope.ground)
    $http.post(util.authURL('/api/sports/grounds/create'),$scope.ground).then(function(data){
      console.log(data)
      if(data.data.success)
        alert('Successfully added ground '+data.data.ground.groundName);
      else
        alert('Could not add ground');
      $scope.ground={};
    });
  };
}]);
