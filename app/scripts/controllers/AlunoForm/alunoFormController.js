'use strict'
var alunoFormControllers = angular.module('alunoFormControllers', [])

alunoFormControllers.controller('alunoFormCtrl', ['crudAluno', '$routeParams',
    function alunoFormCtrl(crudAluno, $routeParams) {
        
        var vm = this;
        var sanitizer = new Sanitizer();

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
            var estudante = new Aluno();

            estudante.nome = sanitizer.sanitizer(aluno.nome);
            estudante.sobrenome = sanitizer.sanitizer(aluno.sobrenome);;
            estudante.dataNascimento = sanitizer.sanitizer(aluno.dataNascimento);
            estudante.naturalidade = sanitizer.sanitizer(aluno.naturalidade);
            estudante.sexo = sanitizer.sanitizer(aluno.sexo);
            estudante.foto = aluno.foto;
            estudante.nota = aluno.nota;
            estudante.matricula = sanitizer.sanitizer(aluno.matricula);
            estudante.endereco = sanitizer.sanitizer(aluno.endereco);
            estudante.contato = sanitizer.sanitizer(aluno.contato);

            var createAluno = JSON.stringify(estudante, null, " ");

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