// Funções parametrizadas

/*
function soma(n1="",n2=""){
    console.log(n1+n2)
}

soma("Bruno")
soma(2022)
soma(5.2)
soma(10,5)
*/

const valorPadrao=""

function soma(n1=valorPadrao,n2=valorPadrao){
    let res
    res=n1+n2
    return res
}

let resultadoSoma=soma(10,2)
console.log(resultadoSoma)

let valor=0
console.log(valor)

function add(v=valorPadrao){
    return valor+v
}

//console.log(add(1))

valor=add(10)
console.log(valor)

valor=add(5)
console.log(valor)