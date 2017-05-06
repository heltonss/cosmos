'use strict'

var semestreService = angular.module('semestreService', ['ngResource']);
var urlEndPoint = 'http://localhost:5000/';
var resourceSemestre

semestreService.factory('crudSemestre', ['$resource',
	function ($resource) {
		return $resource("", {}, {
			get: {
				method: 'GET',
				url: urlEndPoint + resourceSemestre +'/:id',
				cache: false,
				isArray: false
			},
			save: {
				method: 'POST',
				url: urlEndPoint + resourceSemestre,
				cache: false,
				isArray: false
			},
			update: {
				method: 'PUT',
				url: urlEndPoint + resourceSemestre + '/:id',
				cache: false,
				isArray: false
			},
			delete: {
				method: 'DELETE',
				url: urlEndPoint + resourceSemestre +'/:id',
				cache: false,
				isArray: false
			}
		})
	}
])

semestreService.factory('listarSemestre', ['$resource',
	function ($resource) {
		return $resource(urlEndPoint + 'semestre', {}, {
			get: {
				method: 'GET',
				cache: false,
				isArray: true
			}
		})
	}
])