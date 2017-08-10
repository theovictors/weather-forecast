/**
 * @ngdoc service
 * @name weatherforecast.service:demoService
 * @description Just a demo service
 */
angular.module("weatherforecast")
    .factory('demoService',[
        function(){
            var publicMembers = {},
                privateMembers = {};
            publicMembers.hello = function(){
                return "world";
            };

            return publicMembers;
    }]);