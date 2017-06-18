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
    'dashCursoControllers',
    'cursoControllers',
    'listarAlunosControllers',
    'gestaoDisciplinaControllers',
    'disciplinaAlertaControllers',
    'colaboradorService',
    'alunoService',
    'professorService',
    'cursoService',
    'semestreService',
    'disciplinaService',
    'disciplinaAlertaService',
    'mediaAlunoFilter',
    'elementsHtmlDirective'
]);

appCosmos.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
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
                controller: 'cursoCtrl'
            })
            .when('/dashboard-curso/:id', {
                templateUrl: 'partials/dashboard-curso/dashboard-curso.html',
                controller: 'dashCursoCtrl'
            })
            .when('/cadastro-semestre-letivo/:id', {
                templateUrl: 'partials/dashboard-Curso/form-semestre-letivo/form-semestre-letivo.html',
                controller: 'dashCursoCtrl'
            })
            .when('/listar-alunos', {
                templateUrl: 'partials/Listar-alunos/listar-alunos.html',
                controller: 'listarAlunosCtrl'
            })
            .when('/disciplina/:id', {
                templateUrl: 'partials/dashboard-curso/disciplina/disciplina.html',
                controller: 'gestaoDisciplinaCtrl'
            })
            .when('/painel-notificacao', {
                templateUrl: 'partials/painel-notificacao/painel-notificacao.html',
                controller: 'disciplinaAlertaCtrl'
            })
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // }).hashPrefix('!');
        $locationProvider.html5Mode(false);
    }
]).run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        var username = sessionStorage.getItem('username');
        var password = sessionStorage.getItem('password');
        if (username !== 'user' && password !== '@xpto123') {
            $location.path('/')
        }
    })
}) 
