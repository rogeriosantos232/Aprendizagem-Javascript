// Diferença de Var, Let e Const
"use strict";

function teste(){
    let nome="Bruno"
    if(true){
        console.log("dentro do IF do teste: " + nome)
    }
    console.log("dentro de teste: " + nome)
};

teste()

const curso="JavaScript"
console.log(curso)

curso="HTML"
console.log(curso)