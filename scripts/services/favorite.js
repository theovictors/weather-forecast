'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.favorite
 * @description
 * # favorite
 * Service in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .service('favorite', function ($q) {

    let defaultFavorite = {state: "Santa Catarina", city: "Blumenau"};
    let favorite = angular.fromJson(localStorage.getItem('favorite')) || defaultFavorite;

    let get = function() {
      let deferred = $q.defer();
      deferred.resolve(favorite);
      return deferred.promise;
    };

    let set = function(state, city) {
      let fav = {'state': state, 'city': city};
      localStorage.setItem('favorite', angular.toJson(fav));
      favorite = fav;
    };

    let remove = function() {
      localStorage.removeItem('favorite');
      favorite = null;
    };
    
    return {
      get: get,
      set: set,
      remove: remove
    };
  });
