var app = angular.module('SportaggApp',[]);

app.controller('MessageController', ['$scope', '$http', function($scope, $http) {
    $scope.messages = {lop:'lop'};

    $http.get('/api/messages/secured').success(function(data) {
        $scope.messages.secured = data.message || data.error;
        console.log($scope.messages);
    });

    $http.get('/api/messages').success(function(data) {
        $scope.messages.unsecured = data.message || data.error;
        console.log($scope.messages);
    });
}]);
