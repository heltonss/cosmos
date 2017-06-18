'use strict'

var disciplinaService = angular.module('disciplinaService', [])

disciplinaService.service('gestaoDisciplina', function () {
    this.calcMedia = function (arrAlunos) {
        var size = arrAlunos.length;
        var mediaGeral = [];
        for (var i = 0; i < size; i++) {
            var aluno = arrAlunos[i];
            var notas = aluno.notas;

            if (notas.length < 1) {
                return '';
            }

            var qtdNotas = notas.length;
            var somarNotasAluno = notas.reduce(function (total, num) {
                return total + num;
            });
            var media = somarNotasAluno / qtdNotas;
            mediaGeral.push(media);
        }
        var qtdAlunos = mediaGeral.length;
        var somarNotasAlunos = mediaGeral.reduce(function (total, num) {
            return total + num;
        });
        return (somarNotasAlunos / qtdAlunos).toFixed(2);
    }

    this.calcFrequenciaProfessor = function (qtdAulas, qtdFaltas) {
        return {
         calc1: Math.round((qtdFaltas / qtdAulas) * 100),
         calc2: 100 - Math.round((qtdFaltas / qtdAulas) * 100),
        }  
    }
})