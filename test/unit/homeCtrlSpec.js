'use strict';

describe('homeCtrl', function() {

  beforeEach(module('starter'));

  it('should have query text equal home', inject(function($controller) {
    var scope = {},
        ctrl = $controller('homeCtrl', {$scope:scope});

    expect(scope.query).toBe('home');
  }));

});