'use strict'
var appCosmos = angular.module('appCosmos', [
    'ngRoute',
    'sessionControllers',
    'colaboradorFormControllers',
    'alunoFormControllers',
    'professorFormControllers'
]);

appCosmos.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/user_sessions/login.html',
                controller: 'sessionCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'partials/dashboard/dashboard.html'
            })
            .when('/cadastro-colaborador', {
                templateUrl: 'partials/colaborator-form/colaborator-form.html',
                controller: 'colaboradorFormCtrl'
            })
            .when('/cadastro-professor', {
                templateUrl: 'partials/professor-form/professor-form.html',
                controller: 'professorFormCtrl'
            })
            .when('/cadastro-aluno', {
                templateUrl: 'partials/aluno-form/aluno-form.html',
                controller: 'alunoFormCtrl'
            })
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // }).hashPrefix('!');
        $locationProvider.html5Mode(false);
    }
])