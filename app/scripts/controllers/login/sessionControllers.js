'use strict';

let sessionControllers = angular.module('sessionControllers', []);

sessionControllers.controller('sessionCtrl', ['$location',
    function sessionCtrl($location) {
        let vm = this;
        vm.sessionValidate = sessionValidate;

        function sessionValidate(user) {
            console.log("teste " + user)
            vm.login = user.login;
            vm.pass = user.password;

            if (vm.login == "helton" && vm.pass == "123456") {
                $location.path('/secretaria');
            }
        }

    }
]);