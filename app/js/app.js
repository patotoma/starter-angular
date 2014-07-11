'use strict';

angular.module('starter', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
          templateUrl: 'views/home.html',
          controller: 'homeCtrl'
      }).otherwise({
          redirectTo: '/'
      });
  }])
  .controller('homeCtrl', ['$scope', function($scope) {
    $scope.query = 'home';
  }]);