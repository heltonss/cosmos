'use strict'

var professorFormControllers = angular.module('professorFormControllers', []);

professorFormControllers.controller('professorFormCtrl', ['crudProfessor', '$routeParams',
    function professorFormCtrl(crudProfessor, $routeParams) {

        var vm = this;
        var sanitizer = new Sanitizer();

        vm.create = create;
        vm.update = update;

        function update() {

        }



        function create(professor) {
            var chips = $('.chips').material_chip('data');

            var prof = new Professor()
            prof.nome = sanitizer.sanitizer(professor.nome);
            prof.sobrenome = sanitizer.sanitizer(professor.sobrenome);
            prof.dataNascimento = sanitizer.sanitizer(professor.dataNascimento);
            prof.naturalidade = sanitizer.sanitizer(professor.naturalidade);
            prof.sexo = sanitizer.sanitizer(professor.sexo);
            prof.foto = sanitizer.sanitizer(professor.foto);
            prof.endereco = sanitizer.sanitizer(professor.endereco);
            prof.infoAcademica = sanitizer.sanitizer(professor.infoAcademica);
            prof.materias = prof.getMaterias(chips);
            prof.contato = sanitizer.sanitizer(professor.contato);


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