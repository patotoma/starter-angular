'use strict';

describe('homeCtrl', function() {

  var scope;

  beforeEach(module('starter'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('homeCtrl' , {
      $scope:scope
    });
  }));

  describe('scope variable query', function() {
    
    it('should have initial value equal "home"', function() {
      expect(scope.query).toBe('home');
    });

    it('should change value to "another"', function() {
      scope.query = 'another';
      expect(scope.query).toBe('another');
    });

  });

});