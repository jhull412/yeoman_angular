'use strict';

describe('Service: rxFactory', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var rxFactory;
  beforeEach(inject(function (_rxFactory_) {
    rxFactory = _rxFactory_;
  }));

  it('should do something', function () {
    expect(!!rxFactory).toBe(true);
  });

});
