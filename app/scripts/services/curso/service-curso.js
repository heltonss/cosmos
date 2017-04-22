'use strict'

var cursoService = angular.module('cursoService', ['ngResource']);

var urlEndPoint = 'http://localhost:5000/'
cursoService.factory('crudCurso', ['$resource',
    function ($resource) {
        return $resource("", {}, {
            get: {
                method: 'GET', url: urlEndPoint + 'curso/:id', cache: false, isArray: false
            },
            save: {
                method: 'POST', url: urlEndPoint + 'curso', cache: false, isArray: false
            },
            update: {
                method: 'PUT', url: urlEndPoint + 'curso/:id', cache: false, isArray: false
            },
            delete: {
                method: 'DELETE', url: urlEndPoint + 'curso/:id', cache: false, isArray: false
            }
        })
    }
])

cursoService.factory('listCursosService', ['$resource',
    function ($resource) {
        return $resource(urlEndPoint + 'curso', {}, {
            get: {
                method: 'GET',
                cache: false,
                isArray: true
            }
        })
    }
])