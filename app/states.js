(function(angular) {
    var app = angular.module('Swagwise');
            "use strict";
    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/homes.html'
            })
            .state('swag', {
                url: '/swag',
                controller: 'SwagController',//register controller on entire template
                templateUrl: 'views/swag.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html'
            })
            .state('cart', {
            url: '/cart',
            templateUrl: 'views/cart.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
        })
            .state('signup', {
                url: '/signup',
                templateUrl: 'views/signup.html'
            })


    });
})(window.angular);