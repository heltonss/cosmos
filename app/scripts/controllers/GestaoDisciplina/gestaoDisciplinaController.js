var gestaoDisciplinaControllers = angular.module('gestaoDisciplinaControllers', []);

gestaoDisciplinaControllers.controller('gestaoDisciplinaCtrl', ['$routeParams', 'crudSemestre', 'listarSemestre', 'gestaoDisciplina', 'crudDisciplinaAlerta', function gestaoDisciplinaCtrl($routeParams, crudSemestre, listarSemestre, gestaoDisciplina, crudDisciplinaAlerta) {
    var vm = this;
    var id = $routeParams.id;

    vm.inserirNota = inserirNota;
    vm.recuperarAluno = recuperarAluno;
    vm.inserirDisciplinaAlerta = inserirDisciplinaAlerta;
    vm.createDisciplinaAlerta = createDisciplinaAlerta;

    var disciplina = crudSemestre.get({ id: id },
        function success(res) {
            vm.disciplina = res;
            vm.mediaGeral = gestaoDisciplina.calcMedia(vm.disciplina.alunosMatriculados);
            vm.mediaFaltaProfessor = gestaoDisciplina.calcFrequenciaProfessor(vm.disciplina.qtdAulas, vm.disciplina.qtdFaltasProfessor);
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
        
        inserirDisciplinaAlerta(disciplina)
        window.location.reload()
    }

    function inserirDisciplinaAlerta(disciplina) {
        if (vm.mediaGeral < 7) {
            disciplina.mediaGeral = vm.mediaGeral;
            disciplina.alerta = "Notificado porque a média da sala " + vm.mediaGeral + " se encontra abaixo da média da instituição que é 7";
            createDisciplinaAlerta(disciplina)

        } else if (vm.mediaGeral > 8.5 && vm.mediaFaltaProfessor.calc2 < 50) {
            disciplina.mediaGeral = vm.mediaGeral;
            disciplina.alerta = "Notificado porque a média da sala " + vm.mediaGeral + " não condiz com a frequência do professor que é de " + vm.mediaFaltaProfessor.calc2 + "% das aulas destinadas a ele - " + vm.disciplina.qtdAulas + " aulas";
            createDisciplinaAlerta(disciplina)
        }
    }

    function createDisciplinaAlerta(disciplina) {
        crudDisciplinaAlerta.save(disciplina,
            function success() {
                console.log('Disciplina em alerta foi salva com sucesso')
            },
            function error(err) {
                console.log('error ', err)
            }
        )
    }

}])