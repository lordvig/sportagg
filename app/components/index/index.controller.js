var sportaggApp = angular.module('sportagg', ['ngRoute']);

sportaggApp.controller('AppController', ['$scope','AuthService', function($scope,AuthService) {
  $scope.creds = {
    username: 'vignesh',
    password: 'pass'
  };
  $scope.test = "TEST";
  $scope.loggedIn = false;
  $scope.dbg = function(){
    console.log($scope.creds);
    console.log($scope.info);
    console.log($scope.loggedIn);
  }
  $scope.dbg();
  $scope.login = function(){
    AuthService.login($scope.creds).then(function(info){
      if(info) {
        $scope.info=info;
        $scope.loggedIn=true;
      }
      $scope.dbg();
    });
  };
  $scope.logout = function(){
    AuthService.logout($scope.creds);
    $scope.info=null;
    $scope.loggedIn=false;
    $scope.dbg();
  };
}])
.directive('appIndex', function() {
  return {
    templateUrl: 'app/components/index/app.component.html'
  };
});

sportaggApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/grounds', {
        templateUrl: 'app/components/grounds/ground.component.html'
      }).
      when('/',{
        templateUrl: 'app/components/index/app.component.html'
      }).
      otherwise({
        redirectTo:'/'
      });
  }]);
