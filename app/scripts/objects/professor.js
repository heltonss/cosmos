'use strict'

function Professor(
    nome,
    sobrenome,
    dataNascimento,
    naturalidade,
    sexo,
    foto,
    endereco,
    infoAcademica,
    materias,
    contato
) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataNascimento = dataNascimento;
    this.naturalidade = naturalidade;
    this.sexo = sexo;
    this.foto = foto;
    this.endereco = endereco;
    this.infoAcademica = infoAcademica;
    this.materias = materias;
    this.contato = contato;

    this.getMaterias = function(data) {
        var chips = []
        for (var i = 0; i < data.length; i++) {
            chips[i] = data[i].tag;
        }
        this.chips = chips;
    }
}