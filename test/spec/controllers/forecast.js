'use strict';

describe('Controller: ForecastCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherForecastApp'));

  var ForecastCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForecastCtrl = $controller('ForecastCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ForecastCtrl.awesomeThings.length).toBe(3);
  });
});
