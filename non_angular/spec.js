// spec.js
describe('Protractor test of a non-angular website', function() {

  beforeEach(function() {
	browser.ignoreSynchronization = true;
    browser.get('http://google.com');
  });

  it('should have a history', function() {
    expect(browser.getTitle()).toEqual('Google');
  });
});