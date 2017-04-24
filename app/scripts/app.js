'use strict'
var appCosmos = angular.module('appCosmos', [
    'ngRoute',
    'sessionControllers',
    'colaboradorFormControllers',
    'alunoFormControllers',
    'professorFormControllers',
    'diretorFormControllers',
    'coordenadorFormControllers',
    'semestreFormControllers',
    'cursoControllers',
    'colaboradorService',
    'alunoService',
    'professorService',
    'cursoService',
    'semestreService'
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
            .when('/cadastro-diretor', {
                templateUrl: 'partials/diretor-form/diretor-form.html',
                controller: 'diretorFormCtrl'
            })
            .when('/cadastro-coordenador', {
                templateUrl: 'partials/coordenador-form/coordenador-form.html',
                controller: 'coordenadorFormCtrl'
            })
            .when('/cadastro-professor', {
                templateUrl: 'partials/professor-form/professor-form.html',
                controller: 'professorFormCtrl'
            })
            .when('/cadastro-aluno', {
                templateUrl: 'partials/aluno-form/aluno-form.html',
                controller: 'alunoFormCtrl'
            })
            .when('/cadastro-semestre', {
                templateUrl: 'partials/semestre-form/semestre-form.html',
                controller: 'semestreFormCtrl'
            })
            .when('/cursos', {
                templateUrl: 'partials/dash-cursos/cursos.html',
                // controller: 'cursosCtrl'
            })
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // }).hashPrefix('!');
        $locationProvider.html5Mode(false);
    }
])