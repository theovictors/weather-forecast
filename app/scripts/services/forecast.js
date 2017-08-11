/*jshint -W117 */
'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.forecast
 * @description
 * # forecast
 * Service in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .service('forecast', function ($q) {

    this.getWeather = function getWeather(state, city) {
      var deferred = $q.defer();

      $.simpleWeather({
        location: city + ', ' + state,
        woeid: '',
        unit: 'c',
        success: function(weather) {
          console.log(weather);
          console.log(weather.forecast);
          deferred.resolve(weather);
        },
        error: function(error) {
          deferred.error(error);
        }
      });

      return deferred.promise;
    };
});
