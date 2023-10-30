class Carro{ //classe pai
    constructor(nome,portas){ // É chamado quando a classe é instanciada, se tiver classe, tem que ter um constructor
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=""
        this.cor=""
        this.placa=""
        this.marcaPneu=""
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
    setPlaca=function(placa){
        this.placa=placa
    }
    setMarcaPneu=function(marcaPneu){
        this.marcaPneu=marcaPneu
    }
}




const c1=new Carro("Normal",4)

c1.ligar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor="Preto"}`)
console.log(`Placa: ${c1.placa="304F-230"}`)
console.log(`Marca Pneu: ${c1.marcaPneu="s"}`)
console.log("--------------------------")



class Esportivo extends Carro{
    constructor(nome,portas,estofado,estilo,ace){
        super(nome,portas)
        this.estofado=estofado
        this.estilo=estilo
        this.ace=ace
    }
    acelerar=function(){
        if(this.ace>=200){
            this.vel++
        }
    }
} // extends define que essa classe é uma herança

const c2=new Esportivo("Luxuoso",2,"couro","esporte",300)

c2.ligar()

c2.vel=200
c2.cor="Azul Marinho"
c2.placa="F450-230D"
c2.marcaPneu="A#"

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Placa: ${c2.placa}`)
console.log(`Marca Pneu: ${c2.marcaPneu}`)
console.log(`Estofado: ${c2.estofado}`)
console.log(`Estilo: ${c2.estilo}`)
console.log(`Aceleração Máxima: ${c2.ace}`)
console.log("--------------------------")