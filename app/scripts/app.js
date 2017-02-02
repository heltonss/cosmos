'use strict';

var appCosmos = angular.module('appCosmos', [
    'ngRoute',
    'loginControllers'
]);

appCosmos.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/login.html',
            controller: 'loginCtrl'
        });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('!');
    }
])