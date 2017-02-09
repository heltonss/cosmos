'use strict';

var sessionControllers = angular.module('sessionControllers', []);

sessionControllers.controller('sessionCtrl', ['$location',
    function sessionCtrl($location) {
        var vm = this;
        vm.sessionValidate = sessionValidate;

        function sessionValidate(user) {
            vm.login = user.login;
            vm.pass = user.password;

            if (vm.login == "helton" && vm.pass == "123456") {
                $location.path('/secretaria');
            }
        }

    }
]);