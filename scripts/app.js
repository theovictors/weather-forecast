'use strict';

/**
 * @ngdoc overview
 * @name weatherForecastApp
 * @description
 * # weatherForecastApp
 *
 * Main module of the application.
 */
angular
  .module('weatherForecastApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
