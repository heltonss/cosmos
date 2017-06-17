var gestaoDisciplinaControllers = angular.module('gestaoDisciplinaControllers', []);

gestaoDisciplinaControllers.controller('gestaoDisciplinaCtrl', ['$routeParams', 'crudSemestre', 'listarSemestre', 'gestaoDisciplina', function gestaoDisciplinaCtrl($routeParams, crudSemestre, listarSemestre, gestaoDisciplina) {
    var vm = this;
    var id = $routeParams.id;

    vm.inserirNota = inserirNota;
    vm.recuperarAluno = recuperarAluno;

    var disciplina = crudSemestre.get({ id: id },
        function success(res) {
            vm.disciplina = res;
            vm.mediaGeral = gestaoDisciplina.calcMedia(vm.disciplina.alunosMatriculados);
        },
        function error(err) {
            console.log('error ', err)
        }
    )


    function recuperarAluno(id, nome) {
        vm.nome = nome;
        vm.id = id;
    }

    function inserirNota() {
        var size = disciplina.alunosMatriculados.length;
        for (i = 0; i < size; i++) {
            var notas = disciplina.alunosMatriculados[i].notas;
            if (vm.nome == disciplina.alunosMatriculados[i].nome) {
                notas.push(vm.nota)
            }
        }
        crudSemestre.update({ id: id }, disciplina,
            function success() {
                console.log('salvou')
            },
            function error(err) {
                console.log('error ', err)
            }
        )
        window.location.reload()
    }
}])