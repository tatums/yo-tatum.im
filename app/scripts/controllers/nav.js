'use strict';

/**
 * @ngdoc function
 * @name yoTatumimApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTatumimApp
 */
angular.module('yoTatumimApp')
  .controller('NavCtrl', function ($scope, $window) {

    $scope.updateWidth = function() {
      $scope.width = $window.innerWidth;
    }

    $scope.updateHeight = function() {
      $scope.height = $window.innerHeight;
    }
    $scope.updateWidth();
    $scope.updateHeight();


    $window.onresize = function () {
      $scope.updateWidth();
      $scope.updateHeight();
      $scope.$apply();
    }

//860 width
    $scope.toggleMenu = function(){

    };
    $scope.visibleNav = function(){
      $scope.visible
    };
  });
