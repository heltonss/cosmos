'use strict'

var semestreService = angular.module('semestreService', ['ngResource']);

semestreService.factory('crudSemestre', ['$resource',
    function ($resource) {
        var urlEndPoint = 'http://localhost:5000/'
        return $resource("", {}, {
            get: {
                method: 'GET', url: urlEndPoint + 'semestre/:id', cache: false, isArray: false
            },
            save: {
                method: 'POST', url: urlEndPoint + 'semestre', cache: false, isArray: false
            },
            update: {
                method: 'PUT', url: urlEndPoint + 'semestre/:id', cache: false, isArray: false
            },
            delete: {
                method: 'DELETE', url: urlEndPoint + 'semestre/:id', cache: false, isArray: false
            }
        })
    }
])

semestreService.factory('listSemestre', ['$resource',
    function ($resource) {
        return $resource(urlEndPoint +'semestre', {}, {
            get: {
                method: 'GET',
                cache: false,
                isArray: true
            }
        })
    }
])