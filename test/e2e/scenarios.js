'use strict';

describe('starter app', function() {

  describe("angular routing", function() {
    
    it('should load index page instead of wrongsite.html', function() {
      browser.get('/app/#/wrongsite.html');
      expect(browser.getLocationAbsUrl()).toMatch("/");
    });
  
  });

  describe('home view heading text', function() {
    
    it('should have text equal "Wellcome home!"', function() {
      var elem = element(by.binding('query'));
      expect(elem.getText()).toEqual('Wellcome home!');
    });

  })

});