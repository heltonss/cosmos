'use strict'

var listarAlunosControllers = angular.module('listarAlunosControllers', [])

listarAlunosControllers.controller('listarAlunosCtrl', ['crudAluno', 'listarAlunosService',
  function listarAlunosCtrl (crudAluno, listarAlunosService) {
    var vm = this;

    listarAlunosService.get({},
      function success(res) {
        vm.listarAlunos = res;
        console.log(res)
      },
      function error (err) {
        console.log('error', JSON.stringify(err));
      }
    )
  }
])
