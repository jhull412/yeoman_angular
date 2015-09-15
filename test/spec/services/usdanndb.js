'use strict';

describe('Service: usdaNndb', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var usdaNndb;
  beforeEach(inject(function (_usdaNndb_) {
    usdaNndb = _usdaNndb_;
  }));

  it('should do something', function () {
    expect(!!usdaNndb).toBe(true);
  });

});
