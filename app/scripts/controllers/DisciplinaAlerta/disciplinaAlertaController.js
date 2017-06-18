var disciplinaAlertaControllers = angular.module('disciplinaAlertaControllers', []);

disciplinaAlertaControllers.controller('disciplinaAlertaCtrl', ['listarDisciplinaAlerta', 'gestaoDisciplina',
    function disciplinaAlertaCtrl(listarDisciplinaAlerta, gestaoDisciplina) {
        vm = this;

        listarDisciplinaAlerta.get({},
            function success(res) {
                vm.disciplinaAlerta = res;
            },
            function error(err) {
                console.log('error ', err)
            }
        )
    }
]);