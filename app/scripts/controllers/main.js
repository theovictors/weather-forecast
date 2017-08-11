/*jshint -W069 */
'use strict';

/**
 * @ngdoc function
 * @name weatherForecastApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherForecastApp
 */
angular.module('weatherForecastApp')
  .controller('MainCtrl', function ($scope, cities, forecast) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.states = cities.states;

    $scope.getDayOfWeek = function(dayOfWeek) {
      var weekday = new Array(7);
      weekday["Mon"]="Monday";
      weekday["Tue"]="Tuesday";
      weekday["Wed"]="Wednesday";
      weekday["Thu"]="Thursday";
      weekday["Fri"]="Friday";
      weekday["Sat"]="Saturday";
      weekday["Sun"]="Sunday";
      
      return weekday[dayOfWeek];
    };

    $scope.search = function(state, city) {
      forecast.getWeather(state, city)
        .then(function(result) {
          $scope.weathers = result.forecast;
        });
    };

    $scope.getAverage = function(x, y) {
      return (parseInt(x) + parseInt(y)) / 2;
    };


  });
