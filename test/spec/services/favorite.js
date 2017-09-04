'use strict';

describe('Service: favorite', function () {

  // load the service's module
  beforeEach(module('weatherForecastApp'));

  // instantiate service
  var favorite;
  beforeEach(inject(function (_favorite_) {
    favorite = _favorite_;
  }));

  it('should do something', function () {
    expect(!!favorite).toBe(true);
  });

});
