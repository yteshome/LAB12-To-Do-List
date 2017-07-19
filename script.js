var app = angular.module('todo', []);

app.controller('todoCtrl', function ($scope) {
  $scope.todoArray = [];

$scope.addNew = function (entry) {
$scope.todoArray.push(entry);

};

});
