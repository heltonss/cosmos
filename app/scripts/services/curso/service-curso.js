'use strict'

var cursoService = angular.module('cursoService', ['ngResource']);
var urlEndPoint = 'http://localhost:5000/'
var resourceCursos = 'cursos'
cursoService.factory('crudCurso', ['$resource',
    function ($resource) {
        return $resource("", {}, {
            get: {
                method: 'GET',
                url: urlEndPoint + resourceCursos + '/:id',
                cache: false,
                isArray: false
            },
            save: {
                method: 'POST',
                url: urlEndPoint + resourceCursos,
                cache: false,
                isArray: false
            },
            update: {
                method: 'PUT',
                url: urlEndPoint + resourceCursos + '/:id',
                cache: false,
                isArray: false
            },
            delete: {
                method: 'DELETE',
                url: urlEndPoint + resourceCursos + '/:id',
                cache: false,
                isArray: false
            }
        })
    }
])

cursoService.factory('listCursosService', ['$resource',
    function ($resource) {
        return $resource(urlEndPoint + resourceCursos, {}, {
            get: {
                method: 'GET',
                cache: false,
                isArray: true
            }
        })
    }
])