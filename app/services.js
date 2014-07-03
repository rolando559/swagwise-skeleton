(function(angular){
    "use strict";
    var app = angular.module('Swagwise');
    app.factory('SwagService', function($http){
        return{

            swag: function() {
            return $http.get('assets/json/swag.json');
            }

        };

    });//take a name as a first parameter and function as second
})(window.angular);