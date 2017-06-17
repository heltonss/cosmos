var elementsHtmlDirective = angular.module('elementsHtmlDirective', [])

elementsHtmlDirective.directive('buttonNotificacao', function (listarDisciplinaAlerta) {
    return {
        restrict: 'E',
        template: '<a class="white-text red"  data-ng-show="activeAlert" href="#!/painel-notificacao">Coordenador atenção<span data-badge-caption="duas disciplinas" class="new badge orange">{{qtdAlert}}</span></a>',
        link: function ($scope) {
            listarDisciplinaAlerta.get({},
                function success(res) {
                    $scope.activeAlert = (res.length > 0);
                    $scope.qtdAlert = res.length;
                }
            )
        }
    }
})