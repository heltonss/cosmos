var semestreFormControllers = angular.module('semestreFormControllers', [])

semestreFormControllers.controller('semestreFormCtrl', ['$routeParams', 'listCursosService', 'crudCurso', 'crudSemestre',
    function semestreFormCtrl($routeParams, listCursosService, crudCurso, crudSemestre) {
        vm = this;
        vm.update = update;

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

        function update(semestre) {
            var sem = new Semestre();

            var chips1 = $('.primeiro').material_chip('data');
            var chips2 = $('.segundo').material_chip('data');
            var chips3 = $('.terceiro').material_chip('data');
            var chips4 = $('.quarto').material_chip('data');
            var chips5 = $('.quinto').material_chip('data');
            var chips6 = $('.sexto').material_chip('data');

            sem.curso = semestre.curso.nome;
         
            var id = semestre.curso._id;
          
            var obj = {}
            obj.nome = sem.curso;
            obj.semestres = {};

            obj.semestres.primeiro = {}
            obj.semestres.primeiro.materias = suporte.getMaterias(chips1);

            obj.semestres.segundo = {}
            obj.semestres.segundo.materias = suporte.getMaterias(chips2);

            obj.semestres.terceiro = {}
            obj.semestres.terceiro.materias = suporte.getMaterias(chips3);
            
            obj.semestres.quarto = {}
            obj.semestres.quarto.materias = suporte.getMaterias(chips4);

            obj.semestres.quinto = {}
            obj.semestres.quinto.materias = suporte.getMaterias(chips5);

            obj.semestres.sexto = {}
            obj.semestres.sexto.materias = suporte.getMaterias(chips6);

            var createSemestre = JSON.stringify(obj, null, " ");
            console.log(createSemestre, sem.ordinario)

            crudCurso.update({ id: id }, createSemestre,
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