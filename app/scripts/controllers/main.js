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
  .controller('MainCtrl', function ($scope, cities, forecast, favorite) {

    let vm = this;
    vm.cbFavorite = false;
    vm.states = cities.states;

    favorite.get()
      .then(function(fav) {
        vm.favoriteCity = fav.city;
        vm.favoriteState = fav.state;
        getWeather(fav.state, fav.city);
        
        loadFavorite();
      });

    vm.getDayOfWeek = function(dayOfWeek) {
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

    vm.search = function(state, city) {
      getWeather(state, city);
    };

    vm.getAverage = function(x, y) {
      return (parseInt(x) + parseInt(y)) / 2;
    };

    vm.setFavorite = function(state, city) {
      if(vm.cbFavorite) {
        favorite.set(state, city);
      } else {
        favorite.remove();
      }
    };

    let getWeather = function(state, city) {
      forecast.getWeather(state, city)
        .then(function(result) {
          vm.weathers = result.forecast;
          vm.weatherInfo = result.forecast;
          chartConfig();
          recommendation();
        });
    };

    let recommendation = function() {
      vm.recommend = false;
      vm.weatherInfo.some(function(pr) {
        if (pr.day === "Sun") {
          if ((pr.text === "Sunny" && (pr.high > 25))) {
            vm.recommend = true;
          }
          return true;
        }
      });
    };

    let loadFavorite = function() {
      //Load the favorite city from service
      favorite.get()
        .then(function(fav) {
          vm.states.some(function(st) {
            if (st.name.indexOf(fav.state) > -1) {
              vm.state = st;
              return true;
            }
          });
          vm.state.cities.some(function(ct) {
            if(ct.indexOf(vm.favoriteCity) > -1) {
              vm.city = ct;
              vm.cbFavorite = true;
              return true;
            }
          });
        });
    };

    let chartConfig = function() {
      let labels = [];
      let min = [];
      let max = [];
      vm.series = ['Maximum', 'Minimum'];
      vm.weatherInfo.forEach(function(pr) {
        labels.push(pr.date); //Show days name as labels
        min.push(pr.low);
        max.push(pr.high);
      });
      vm.labels = labels;
      vm.data = [max, min];
    };

  });
