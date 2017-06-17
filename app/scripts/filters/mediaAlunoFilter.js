var mediaAlunoFilter = angular.module('mediaAlunoFilter', []);

mediaAlunoFilter.filter('mediaNotas', function () {
    return function (notas) {
        var qtdNotas = notas.length;
        if(qtdNotas){

        var sumNotas = notas.reduce(function (total, num) {
            return total + num;
        });
        return media = Math.round(sumNotas / qtdNotas).toFixed(2);
        }else{
            return total = ''
        }
    }
})
