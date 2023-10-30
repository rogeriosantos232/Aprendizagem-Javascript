const Pessoa={
    nome:"Rogério",
    getNome:function(){
        return this.nome
    },
    setNome:function(nome){
        this.nome=nome
    }
}
const p2=Pessoa
const p3=Pessoa

p2.nome="Rog"
p3["nome"]="Rogn"
Pessoa.setNome("rg")

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)