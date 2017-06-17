'use strict'

var disciplinaAlertaService = angular.module('disciplinaAlertaService', ['ngResource']);
var urlEndPoint = 'http://localhost:5000/';
var resourceDisciplinaAlerta = 'disciplina-alerta'

disciplinaAlertaService.factory('crudDisciplinaAlerta', ['$resource',
	function ($resource) {
		return $resource("", {}, {
			get: {
				method: 'GET',
				url: urlEndPoint + resourceDisciplinaAlerta +'/:id',
				cache: true,
				isArray: false
			},
			save: {
				method: 'POST',
				url: urlEndPoint + resourceDisciplinaAlerta,
				cache: false,
				isArray: false
			},
			update: {
				method: 'PUT',
				url: urlEndPoint + resourceDisciplinaAlerta + '/:id',
				cache: false,
				isArray: false
			},
			delete: {
				method: 'DELETE',
				url: urlEndPoint + resourceDisciplinaAlerta +'/:id',
				cache: false,
				isArray: false
			}
		})
	}
])

disciplinaAlertaService.factory('listarDisciplinaAlerta', ['$resource',
	function ($resource) {
		return $resource(urlEndPoint + resourceDisciplinaAlerta, {}, {
			get: {
				method: 'GET',
				cache: true,
				isArray: true
			}
		})
	}
])