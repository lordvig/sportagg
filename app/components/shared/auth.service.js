angular.module('sportagg').factory('AuthService',['$http',function($http){
  var auth = {};
  auth.info = {};
  auth.login = function(creds){
    return $http.post('/api/auth/authenticate',creds).then(function(data){
      if(data.data.success){
        auth.loggedIn = true;
        sessionStorage.setItem('jwt',data.data.token);
        return auth.getInfo();
      } else {
        auth.loggedIn = false;
        sessionStorage.removeItem('jwt');
        return null;
      }
    });
  };
  auth.getInfo = function(creds){
    if(!auth.loggedIn) return {};
    return $http.get('/api/users/me?token='+sessionStorage.getItem('jwt'),creds).then(function(data){
      if(!data.error){
        auth.info=data;
        return data;
      } else {
        return {};
      }
    });
  };
  auth.logout = function(){
    auth.loggedIn = false;
    sessionStorage.removeItem('jwt');
  };
  return auth;
}]);
