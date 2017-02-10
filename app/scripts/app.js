'use strict'
var appCosmos = angular.module('appCosmos', [
    'ngRoute',
    'sessionControllers'
]);

appCosmos.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/user_sessions/login.html',
                controller: 'sessionCtrl'
            })
            .when('/secretaria', {
                templateUrl: 'partials/dashboard/menu.html'
            })
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('!');
    }
])