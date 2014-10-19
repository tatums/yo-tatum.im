'use strict';

/**
 * @ngdoc function
 * @name yoTatumimApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTatumimApp
 */
angular.module('yoTatumimApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.toggleMenu = function(){
      console.log('yo');
    };
  });
