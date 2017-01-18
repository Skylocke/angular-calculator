console.log('app.js was loaded.');

var app = angular.module("calculator", [])
.controller("calcController", ["$scope", function($scope) {
  $scope.readout = "0";
  var evalString = "";

  $scope.calcButton = function(char) {
    var lastChar = evalString[evalString.length-1];
    if($scope.readout === "0") {
      $scope.readout = char;
      evalString += char;
    } else if(/[+-/*]/.test(char)) {
      $scope.evaluate();
      evalString += char;
    } else {
      if(/[+-/*]/.test(lastChar)) {
        $scope.readout = char.toString();
      } else {
        $scope.readout += char.toString();
      }
      evalString += char.toString();
    }
  }

  $scope.evaluate = function() {
    $scope.readout = eval(evalString);
  }

  $scope.clearAll = function() {
    $scope.readout = "0";
    var evalString = "";
  }

}]);
