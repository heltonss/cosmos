'use strict'

function Suporte() {
    
    this.getMaterias = function (data) {
        var chips = []
        for (var i = 0; i < data.length; i++) {
            chips[i] = data[i].tag;
        }
        return this.chips = chips;
    }
}