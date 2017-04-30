var cursoControllers = angular.module('cursoControllers', [])

cursoControllers.controller('cursoCtrl', ['crudCurso', '$routeParams','listCursosService',
    function cursoCtrl(crudcurso, $routeParams, listCursosService) {
        var vm = this;

        listCursosService.get({},
            function success(res) {
                vm.listarCursos = res;
            },
            function error(err) {
                console.log('erro: ', JSON.stringify(res))
            }
        )
    }
])