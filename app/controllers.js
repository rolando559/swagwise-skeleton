(function(angular) {
    "use strict";
    //protect against errors

    var app = angular.module('Swagwise');//getting the module that already exists. Throw error if created twice

    app.controller('SwagController', function($scope, SwagService) {//here you are registering controller
        $scope.swagSearch = '';
        SwagService.swag()
            .then(function(response) {
                $scope.swag=response.data;//
            })
    });

})(window.angular);