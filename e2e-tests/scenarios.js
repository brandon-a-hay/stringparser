'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /stringParser when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/stringParser");
  });


  describe('stringParser', function() {

    beforeEach(function() {
      browser.get('index.html#/stringParser');
    });


    it('should render stringParser when user navigates to /stringParser', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('frontEnd', function() {

    beforeEach(function() {
      browser.get('index.html#/frontEnd');
    });


    it('should render frontEnd when user navigates to /frontEnd', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
