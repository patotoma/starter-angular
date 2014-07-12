'use strict';

describe('starter', function() {

  browser.get('/app/#/wrongsite.html');

  it('should load index page instead of wrongsite', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

});