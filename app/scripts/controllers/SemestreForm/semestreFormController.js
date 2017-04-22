var semestreFormControllers = angular.module('semestreFormControllers', [])

semestreFormControllers.controller('semestreFormCtrl', ['$routeParams', 'listCursosService', 'crudCurso', 'crudSemestre',
    function semestreFormCtrl($routeParams, listCursosService, crudCurso, crudSemestre) {
        vm = this;
        vm.create = create;

        var sanitizer = new Sanitizer()
        var suporte = new Suporte();

        listCursosService.get({},
            function success(res) {
                vm.listarCursos = res;
            },
            function error(error) {
                console.log("error " + JSON.stringify(res));
            }
        )

        function create(semestre) {
            var chips = $('.chips').material_chip('data');
            var sem = new Semestre();

            sem.curso = semestre.curso;
            sem.ordinario = semestre.ordinario;
            sem.materias = suporte.getMaterias(chips);

            var obj = {}
            obj.curso = sem.curso;
            obj.semestres = {};
            obj.semestres[sem.ordinario] = {}
            obj.semestres[sem.ordinario].materias = sem.materias;

            var createSemestre = JSON.stringify(obj, null, " ");
            console.log(createSemestre)
            crudSemestre.save(createSemestre,
                function success(res) {
                    console.log('semestre foi salvo com exito')
                },
                function error(error) {
                    console.log("error ", JSON.stringify(error));
                }
            )


        }

    }
])