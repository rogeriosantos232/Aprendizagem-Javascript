//Objetos

const nome=document.querySelector("#iNome")
const sobrenome=document.querySelector("#iSobreNome")
const idade=document.querySelector("#iIdade")

class Pessoa{
    constructor(pnome) {
        this.nome=pnome
    }
}

let p1=new Pessoa("Rogério")
let p2=new Pessoa("Jax")
let p3=new Pessoa("Riven")

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)