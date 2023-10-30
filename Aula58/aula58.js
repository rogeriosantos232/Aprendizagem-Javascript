//Objetos

class Carro{
    constructor(cnome,ctipo) {
        this.nome=cnome
        if(ctipo==1){
            this.tipo="Esportivo"
            this.velmax=300
        }
        else if(ctipo==2){
            this.tipo="Utilitário"
            this.velmax=100
        }
        else if(ctipo==3){
            this.tipo="Passeio"
            this.velmax=160
        }
        else if(ctipo==4){
            this.tipo="Militar"
            this.velmax=180
        }
    }

    getNome(){
        return this.nome
    }

    getTipo(){
        return this.tipo
    }

    getVMax(){
        return this.velmax
    }


    getInfo(){
        return [this.nome,this.tipo,this.velmax]
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V.max: ${this.velmax}`)
        console.log("----------")
    }
}

let c1=new Carro("Rapidão",1)
let c2=new Carro("Super Luxo",2)
let c3=new Carro("Bombadão",4)

// c1.info()
// c2.info()
// c3.info()

console.log(c1.getNome())
console.log(c1.getTipo())
console.log(c1.getVMax())
console.log(c1.getInfo())