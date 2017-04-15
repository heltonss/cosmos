'use strict'

var colaboradorFormControllers = angular.module('colaboradorFormControllers', []);


colaboradorFormControllers.controller('colaboradorFormCtrl', ['crudColaborador', '$routeParams',
    function colaboradorFormCtrl(crudColaborador, $routeParams) {
        var vm = this;

        vm.create = create;

        function create(colaboradorVm) {
            vm.colaborador = colaboradorVm;

            var createColaborador = JSON.stringify(vm.colaborador);
            crudColaborador.save(createColaborador,
                function success(res) {
                    console.log("colaborador salvo no banco")
                }),
                function error(resError) {
                    console.log("erro" + JSON.stringify(resError));
                }

        }

    }
])