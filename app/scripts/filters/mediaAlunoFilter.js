var mediaAlunoFilter = angular.module('mediaAlunoFilter', []);

mediaAlunoFilter.filter('mediaNotas', function () {
    return function (notas) {
        var qtdNotas = notas.length;
        var sumNotas = notas.reduce(function (total, num) {
            return total + num;
        });
        return media = sumNotas / qtdNotas;
    }
})
