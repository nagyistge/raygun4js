var webdriverio = require('webdriverio');

describe("Basic Raygun4JS V1 API tests", function() {

  // Setup

  beforeEach(function() {
    browser.url('http://localhost:4567/fixtures/v1/basic.html');
  });

  // Tests

  it('has global Raygun object present', function () {
    var result = browser.execute(function () {
      return typeof Raygun === 'object';
    });

    expect(result.value).toBe(true);
  });

  it('has CR sending function', function () {
    var result = browser.execute(function () {
      return typeof Raygun.send === 'function';
    });

    expect(result.value).toBe(true);
  });

  it('has Pulse trackEvent function', function () {
    var result = browser.execute(function () {
      return typeof Raygun.trackEvent === 'function';
    });

    expect(result.value).toBe(true);
  });
});