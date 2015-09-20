'use strict';

describe('Controller: FooddetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('myAppApp'));

  var FooddetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FooddetailsCtrl = $controller('FooddetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FooddetailsCtrl.awesomeThings.length).toBe(3);
  });
});
