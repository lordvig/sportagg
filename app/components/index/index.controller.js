angular.module('sportagg', [])
.controller('AppController', ['$scope', function($scope) {
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}])
.directive('appIndex', function() {
  return {
    templateUrl: 'app/components/index/app.component.html'
  };
});
