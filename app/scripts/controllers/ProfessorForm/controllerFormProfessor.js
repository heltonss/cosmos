'use strict'

var professorFormControllers = angular.module('professorFormControllers', []);

professorFormControllers.controller('professorFormCtrl', ['crudProfessor', '$routeParams',
    function professorFormCtrl(crudProfessor, $routeParams) {

        var vm = this;

        vm.create = create;
        vm.update = update;

        function update() {

        }



        function create(professor) {
            var chips = $('.chips').material_chip('data');

            var prof = new Professor()
            prof.nome = professor.nome;
            prof.sobrenome = professor.sobrenome;
            prof.dataNascimento = professor.dataNascimento;
            prof.naturalidade = professor.naturalidade;
            prof.sexo = professor.sexo;
            prof.foto = professor.foto;
            prof.endereco = professor.endereco;
            prof.infoAcademica = professor.infoAcademica;
            prof.materias = prof.getMaterias(chips);
            prof.contato = professor.contato;


            var createProfessor = JSON.stringify(prof, null, " ")

            crudProfessor.save(createProfessor,
                function success(res) {
                    console.log("Professor salvo no banco de dados")
                },
                function error(resError) {
                    console.log("error" + JSON.stringify(resError))
                }
            )
        }
    }
])