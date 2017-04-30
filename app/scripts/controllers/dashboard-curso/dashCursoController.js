'use strict'

var dashCursoControllers = angular.module('dashCursoControllers', []);

dashCursoControllers.controller('dashCursoCtrl', ['$routeParams', 'crudCurso', 'listarProfessores',
    function dashCursoCtrl($routeParams, crudCurso, listarProfessores) {
        var vm = this;

        var id = $routeParams.id;

        crudCurso.get({ id: id },
            function success(res) {
                vm.curso = res;
            },
            function error(err) {
                console.log('error: ', JSON.stringify(err))
            }

        )

        listarProfessores.get({},
            function success(res) {
                vm.professores = res;
            },
            function error(err) {
                console.log('error', JSON.stringify(err))
            }
        )
    }
])