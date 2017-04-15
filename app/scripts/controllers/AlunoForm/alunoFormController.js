'use strict'
var alunoFormControllers = angular.module('alunoFormControllers', [])

alunoFormControllers.controller('alunoFormCtrl', ['crudAluno', '$routeParams',
    function alunoFormCtrl(crudAluno, $routeParams) {
        var vm = this;

        vm.exclude = exclude;
        vm.update = update;
        vm.create = create;


        function exclude(aluno) {
            var id = id;
            crudAluno.delete({ id: id },
                function success(res) {
                    location.reload();
                },
                function error(resError) {
                    console.log("exclusão deu errado" + JSON.stringify(resError))
                }
            )

        }

        function update(aluno) {
            var id = $routeParams.id;

            var updateAluno = JSON.stringify(aluno);
            crudAluno.update(updateAluno,
                function success(res) {
                    console.log("Atualização ocorreu corretamente.")
                },
                function error(resError) {
                    console.log("Atualização Falhou")
                }
            )
        }

        function create(aluno) {
            var aluno = new Aluno(
                aluno.nome,
                aluno.sobrenome,
                aluno.dataNascimento,
                aluno.naturalidade,
                aluno.sexo,
                aluno.foto,
                aluno.nota,
                aluno.matricula,
                aluno.endereco,
                aluno.contato
            );

            var createAluno = JSON.stringify(aluno, null, " ");

            crudAluno.save(createAluno,
                function success(res) {
                    console.log("colaborador salvo no banco")
                },
                function error(resError) {
                    console.log("erro" + JSON.stringify(resError));
                }
            )
        }

    }
])