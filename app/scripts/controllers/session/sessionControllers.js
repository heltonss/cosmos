'use strict';

var sessionControllers = angular.module('sessionControllers', []);

sessionControllers.controller('sessionCtrl', ['$location',
    function sessionCtrl($location) {
        var vm = this;
        vm.sessionValidate = sessionValidate;
    

        function sessionValidate() {
            // vm.login = user.login;
            // vm.pass = user.password;

            if ("helton" == "helton" && "123456" == "123456") {
                $location.path('/secretaria');
            }
        }

    }
]);