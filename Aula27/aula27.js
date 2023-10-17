// Funções geradoras (Pilar da programação assícrona)

/*
function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc=cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/

/*function* perguntas(){
    const nome= yield 'Qual seu nome?'
    const esporte= yield 'Qual seu esporte favorito?'
    return "Seu nome é " +  nome + ', seu esporte favorito é ' + esporte
}

const itp=perguntas()

console.log(itp.next().value)
console.log(itp.next('Rogério').value)
console.log(itp.next('LOL').value)
*/

/*
function* contator() {
    let i = 0
    while (true) {
        yield i++
    }
}
const itc = contator()
for (let i = 0; i < 10; i++) {
    console.log(itc.next().value)
}
console.log(itc.next().value)
*/

function* contator(){
    let i=0
    while(true){
        yield i++
        if(i>10)
        break
    }
}

const itc = contator()
for(let c of itc){
    console.log(c)
}