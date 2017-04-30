'use strict'

var professorService = angular.module('professorService', ['ngResource']);
var resource = 'professor';

professorService.factory('crudProfessor', ['$resource',
    function ($resource) {
        var urlEndPoint = 'http://localhost:5000/'
        return $resource("", {}, {
            get: {
                method: 'GET', url: urlEndPoint + resource + '/:id', cache: false, isArray: false
            },
            save: {
                method: 'POST', url: urlEndPoint + resource, cache: false, isArray: false
            },
            update: {
                method: 'PUT', url: urlEndPoint + resource + '/:id', cache: false, isArray: false
            },
            delete: {
                method: 'DELETE', url: urlEndPoint + resource + '/:id', cache: false, isArray: false
            }
        })
    }
])

professorService.factory('listarProfessores', ['$resource',
    function ($resource) {
        return $resource(urlEndPoint + resource, {}, {
            get: {
                method: 'GET',
                cache: false,
                isArray: true
            }
        })
    }
])