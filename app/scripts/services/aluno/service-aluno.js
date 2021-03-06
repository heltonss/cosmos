'use strict'

var alunoService = angular.module('alunoService', ['ngResource']);
var urlEndPoint = 'https://cosmosapi.herokuapp.com/'
var resourceAlunos = 'alunos';

alunoService.factory('crudAluno', ['$resource',
    function ($resource) {
        return $resource("", {}, {
            get: {
                method: 'GET',
                url: urlEndPoint + resourceAlunos + '/:id',
                cache: false,
                isArray: false
            },
            save: {
                method: 'POST',
                url: urlEndPoint + resourceAlunos,
                cache: false,
                isArray: false
            },
            update: {
                method: 'PUT',
                url: urlEndPoint + resourceAlunos + '/:id',
                cache: false,
                isArray: false
            },
            delete: {
                method: 'DELETE',
                url: urlEndPoint + resourceAlunos + '/:id',
                cache: false,
                isArray: false
            }
        })
    }
])

alunoService.factory('listarAlunosService', ['$resource',
    function ($resource) {
        return $resource(urlEndPoint + resourceAlunos, {}, {
            get: {
                method: 'GET',
                cache: false,
                isArray: true
            }
        })
    }
])