var sportaggApp = angular.module('sportagg', ['ngRoute']);

sportaggApp.controller('AppController', ['$scope','AuthService', function($scope,AuthService) {
  $scope.creds = {
    username: 'vignesh',
    password: 'pass'
  };
  $scope.test = "TEST";
  $scope.loggedIn = false;
  $scope.login_message=null;
  $scope.dbg = function(){
    console.log($scope.creds);
    console.log($scope.info);
    console.log($scope.loggedIn);
  }
  // $scope.dbg();
  $scope.login = function(){
    AuthService.login($scope.creds).then(function(info){
      if(info) {
        $scope.info=info.data;
        $scope.loggedIn=true;
        $('#login-modal').modal('hide');
        $scope.login_message=null;
      } else {
        $scope.login_message="Invalid login credentials";
        // console.log('cant login')
      }
      // $scope.dbg();
    });
  };
  $scope.signup = function(){
    AuthService.signup($scope.creds).then(function(info){
      if(info) {
        $scope.info=info.data;
        $scope.loggedIn=true;
        $('#signup-modal').modal('hide');
        $scope.login_message=null;
      } else {
        $scope.login_message="Invalid signin credentials";
        // console.log('cant login')
      }
      // $scope.dbg();
    });
  };
  $scope.switchSignUp = function(){
    $('#login-modal').modal('hide');
    $('#signup-modal').modal('show');
  };
  $scope.switchLogin = function(){
    $('#signup-modal').modal('hide');
    $('#login-modal').modal('show');
  };
  $scope.logout = function(){
    AuthService.logout($scope.creds);
    $scope.info=null;
    $scope.loggedIn=false;
    // $scope.dbg();
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
      when('/sports/:sportName', {
        templateUrl: 'app/components/sports/sport.component.html',
        controller: 'SportController'
      }).
      when('/',{
        templateUrl: 'app/components/index/app.component.html'
      }).
      otherwise({
        redirectTo:'/'
      });
  }]);
