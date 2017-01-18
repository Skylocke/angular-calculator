console.log('app.js was loaded.');

var app = angular.module("calculator", [])
.controller("calcController", ["$scope", function($scope) {
  $scope.readout = "0";

  $scope.grabNumber = function(number) {
    if($scope.readout === "0") {
      $scope.readout = number;
    } else {
      $scope.readout += number;
    }
  };

  $scope.grabOperation = function(operation) {
    if($scope.readout[$scope.readout.length-1] !== " ") {
      $scope.readout += (" " + operation + " ");
    }
  };

  $scope.grabEquals = function() {
    $scope.readout = eval($scope.readout).toString();
  }

  $scope.grabClear = function() {
    $scope.readout = "0";
  }

}]);
