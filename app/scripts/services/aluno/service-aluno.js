'use strict'

var alunoService = angular.module('alunoService', ['ngResource']);

alunoService.factory('crudAluno', ['$resource',
    function ($resource) {
        var urlEndPoint = 'http://localhost:5000/'
        return $resource("", {}, {
            get: {
                method: 'GET', url: urlEndPoint + 'aluno/:id', cache: false, isArray: false
            },
            save: {
                method: 'POST', url: urlEndPoint + 'aluno', cache: false, isArray: false
            },
            update: {
                method: 'PUT', url: urlEndPoint + 'aluno/:id', cache: false, isArray: false
            },
            delete: {
                method: 'DELETE', url: urlEndPoint + 'aluno/:id', cache: false, isArray: false
            }
        })
    }
])

alunoService.factory('listAlunos', ['$resource',
    function ($resource) {
        return $resource(urlEndPoint.toString(), {}, {
            get: {
                method: 'GET',
                cache: false,
                isArray: true
            }
        })
    }
])