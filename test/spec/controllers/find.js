'use strict';

describe('Controller: FindCtrl', function () {

  // load the controller's module
  beforeEach(module('myAppApp'));

  var FindCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FindCtrl = $controller('FindCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FindCtrl.awesomeThings.length).toBe(3);
  });
});
