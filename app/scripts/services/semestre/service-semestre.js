'use strict'

var semestreService = angular.module('semestreService', ['ngResource']);
var urlEndPoint = 'http://localhost:5000/';
var resourceSemestre = 'semestres'

semestreService.factory('crudSemestre', ['$resource',
	function ($resource) {
		return $resource("", {}, {
			get: {
				method: 'GET',
				url: urlEndPoint + resourceSemestre +'/:id',
				cache: true,
				isArray: false
			},
			save: {
				method: 'POST',
				url: urlEndPoint + resourceSemestre,
				cache: true,
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
		return $resource(urlEndPoint + resourceSemestre, {}, {
			get: {
				method: 'GET',
				cache: false,
				isArray: true
			}
		})
	}
])