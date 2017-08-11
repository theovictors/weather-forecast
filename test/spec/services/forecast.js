'use strict';

describe('Service: forecast', function () {

  // load the service's module
  beforeEach(module('weatherForecastApp'));

  // instantiate service
  var forecast;
  beforeEach(inject(function (_forecast_) {
    forecast = _forecast_;
  }));

  it('should do something', function () {
    expect(!!forecast).toBe(true);
  });

});
