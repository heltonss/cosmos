'use strict';

var sessionControllers = angular.module('sessionControllers', []);

sessionControllers.controller('sessionCtrl', ['$location',
    function sessionCtrl($location) {
        var vm = this;

        vm.sessionValidate = sessionValidate;
        function sessionValidate(user) {
            if (user.login === "user" && user.password == '@xpto123') {
                sessionStorage.setItem('username', user.login);
                sessionStorage.setItem('password', user.password);
                $location.path('/dashboard');
                console.log('login errado');
            }
        }
    }
]);