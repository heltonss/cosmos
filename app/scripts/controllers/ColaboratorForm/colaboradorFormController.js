'use strict'

var colaboradorFormControllers = angular.module('colaboradorFormControllers', []);


colaboradorFormControllers.controller('colaboradorFormCtrl', ['$scope', 'crudColaborador', '$routeParams',
    function colaboradorFormCtrl($scope, crudColaborador, $routeParams) {
        var vm = this;

        vm.create = create;



        function create(colaborador) {
            vm.colaborador = colaborador;

            var createColaborador = JSON.stringify(vm.colaborador, null, " ");
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