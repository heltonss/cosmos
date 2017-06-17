'use strict'

function Semestre(
    ano,
    curso,
    semestre,
    disciplina,
    professor,
    qtdAulas,
    qtdFaltas,
    alunosMatriculados
) {
    this.ano = ano;
    this.curso = curso;
    this.semestre = semestre;
    this.disciplina = disciplina;
    this.professor = professor;
    this.qtdAulas = qtdAulas;
    this.qtdFaltas = qtdFaltas;
    this.alunosMatriculados = alunosMatriculados;
}