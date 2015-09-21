'use strict';

describe('Filter: default', function () {

  // load the filter's module
  beforeEach(module('myAppApp'));

  // initialize a new instance of the filter before each test
  var default;
  beforeEach(inject(function ($filter) {
    default = $filter('default');
  }));

  it('should return the input prefixed with "default filter:"', function () {
    var text = 'angularjs';
    expect(default(text)).toBe('default filter: ' + text);
  });

});
