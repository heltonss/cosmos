'use strict'

var dashCursoControllers = angular.module('dashCursoControllers', []);

dashCursoControllers.controller('dashCursoCtrl', ['$routeParams', 'crudCurso', 'listarProfessores', 'listarAlunos', 'crudSemestre',
    function dashCursoCtrl($routeParams, crudCurso, listarProfessores, listarAlunos, crudSemestre) {
        var vm = this;

        var id = $routeParams.id;
        vm.createSemestre = createSemestre;
        // vm.addListaAlunos = addListaAlunos;
        vm.addAluno = addAluno;
        vm.removeAluno = removeAluno;
        vm.addDisciplina = addDisciplina;
        vm.removeDisciplina = removeDisciplina;
        var matriculados = []

        crudCurso.get({ id: id },
            function success(res) {
                vm.curso = res;
            },
            function error(err) {
                console.log('error: ', JSON.stringify(err))
            }

        )

        listarProfessores.get({},
            function success(res) {
                vm.professores = res;
            },
            function error(err) {
                console.log('error', JSON.stringify(err))
            }
        )

        listarAlunos.get({},
            function success(res) {
                vm.alunos = res
            },
            function error(err) {
                console.log('error', JSON.stringify(err))
            }
        )

        function createSemestre(semestre) {
            var sem = new Semestre();
            sem.ano = semestre.ano;
            sem.curso = vm.curso.nome;
            sem.semestre = semestre.semestre.semestre;
            sem.disciplina = vm.disciplina;
            sem.professor = semestre.professor.nome
            sem.alunosMatriculados = matriculados

            var createSemestre = JSON.stringify(sem, null, " ")
            console.log(createSemestre)

            crudSemestre.save(createSemestre,
                function success(res) {
                    console.log('semestre salvo')
                },
                function error(err) {
                    console.log('error', err)
                }
            )


        }

        function addAluno(aluno) {
            return matriculados.push({
                nome: aluno,
                notas: []
            })
        }


        function removeAluno(aluno) {
            return matriculados = matriculados.filter(function (elem) {
                return elem.nome !== aluno
           
         
            })
        }

        function addDisciplina() {
            var inputs = document.getElementsByTagName('input');
            var size = inputs.length;
            for (var i = 0; i < size; i++) {
                if (inputs[i].type == 'checkbox' && inputs[i].checked) {
                    vm.disciplina = inputs[i].value
                }

            }

        }

        function removeDisciplina() {
            var inputs = document.getElementsByTagName('input');
            var size = inputs.length;
            for (var i = 0; i < size; i++) {
                if (inputs[i].type == 'checkbox' && !inputs[i].checked) {
                    vm.disciplina = '';
                }

            }
        }

    }
])