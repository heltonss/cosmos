'use strict'

var professorService = angular.module('professorService', ['ngResource']);

professorService.factory('crudProfessor', ['$resource',
    function ($resource) {
        var urlEndPoint = 'http://localhost:5000/'
        return $resource("", {}, {
            get: {
                method: 'GET', url: urlEndPoint + 'professor/:id', cache: false, isArray: false
            },
            save: {
                method: 'POST', url: urlEndPoint + 'professor', cache: false, isArray: false
            },
            update: {
                method: 'PUT', url: urlEndPoint + 'professor/:id', cache: false, isArray: false
            },
            delete: {
                method: 'DELETE', url: urlEndPoint + 'professor/:id', cache: false, isArray: false
            }
        })
    }
])

professorService.factory('listaProfessores', ['$resource',
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