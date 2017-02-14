'use strict'
var appCosmos = angular.module('appCosmos', [
    'ngRoute',
    'sessionControllers',
    'colaboratorFormControllers'
]);

appCosmos.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/user_sessions/login.html',
                controller: 'sessionCtrl'
            })
            .when('/secretaria', {
                templateUrl: 'partials/dashboard/dashboard.html'
            })
            .when('/cadastro-colaborador', {
                templateUrl: 'partials/colaborator-form/colaborator-form.html',
                controller: 'colaboratorFormCtrl'
            })
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('!');
    }
])