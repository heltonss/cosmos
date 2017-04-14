'use strict'

var colaboradorService = angular.module('colaboradorService', ['ngResource']);

colaboradorService.factory('crudColaborador', ['$resource',
    function ($resource) {
        var urlEndPoint = 'http://localhost:5000/'
        return $resource("", {}, {
            get: {
                method: 'GET', url: urlEndPoint + 'administrador/:id', cache: false, isArray: false
            },
            save: {
                method: 'POST', url: urlEndPoint + 'administrador', cache: false, isArray: false
            },
            update: {
                method: 'PUT', url: urlEndPoint + 'administrador/:id', cache: false, isArray: false
            },
            delete: {
                method: 'DELETE', url: urlEndPoint + 'administrador/:id', cache: false, isArray: false
            }
        })
    }
])

colaboradorService.factory('listaColaboradores', ['$resource',
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