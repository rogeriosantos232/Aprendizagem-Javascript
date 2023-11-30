//Aula 98

// const s1=Symbol()
// const s2=Symbol()
// const s3=Symbol.for("Rogério")
// const s4=Symbol.for("Santos")

// console.log(s1)
// console.log(s2)

// console.log(s3==s4)

// console.log(typeof(s1))

// console.log(Symbol.keyFor(s3))
// console.log(Symbol.keyFor(s4))

// Aula 99

class Jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores=[new Jogador("j1"),new Jogador("j2"),new Jogador("j3"),new Jogador("j4")]

let s=[]


let s_jogadores=jogadores.filter((j)=>{
    return j.nome!="j1"
})

s=s_jogadores.map((j)=>{
    return j.id
})

console.log(s_jogadores)
console.log(s)