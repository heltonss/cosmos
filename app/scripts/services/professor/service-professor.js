'use strict'

var professorService = angular.module('professorService', ['ngResource']);
var urlEndPoint = 'https://cosmosapi.herokuapp.com/'
var resourceProfessores = 'professores';

professorService.factory('crudProfessor', ['$resource',
    function ($resource) {
        return $resource("", {}, {
            get: {
                method: 'GET',
                url: urlEndPoint + resourceProfessores + '/:id',
                cache: true,
                isArray: false
            },
            save: {
                method: 'POST',
                url: urlEndPoint + resourceProfessores,
                cache: false,
                isArray: false
            },
            update: {
                method: 'PUT',
                url: urlEndPoint + resourceProfessores + '/:id',
                cache: false,
                isArray: false
            },
            delete: {
                method: 'DELETE',
                url: urlEndPoint + resourceProfessores + '/:id',
                cache: false,
                isArray: false
            }
        })
    }
])

professorService.factory('listarProfessores', ['$resource',
    function ($resource) {
        return $resource(urlEndPoint + resourceProfessores, {}, {
            get: {
                method: 'GET',
                cache: true,
                isArray: true
            }
        })
    }
])