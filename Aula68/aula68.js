class Carro extends carroPadrao{
    constructor(tipo, estagioTurbo) {
        this.turbo = new Turbo(estagioTurbo)
        if (tipo == 1) {
            this.velMax = 230
            this.nome = "normal"
        }
        else if (tipo == 2) {
            this.velMax = 300
            this.nome = "esportivo"
        }
        else if (tipo == 3) {
            this.velMax = 340
            this.nome = "super esportivo"
        }
        this.velMax += this.turbo.pot
    }
    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade: ${this.velMax}`)
        console.log(`Potência: ${this.turbo.pot}`)
        console.log("-------------------")
    }
}

class Turbo {
    constructor(e) {
        if (e == 0) {
            this.pot = 0
        }
        else if (e == 1) {
            this.pot = 50
        }
        else if (e == 2) {
            this.turbo = 100
        }
        else if (e == 3) {
            this.pot = 150
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
    super(4, estagioTurbo)
    this.tipoInfo=0
    this.velMax=300
    this.nome="Carro Especial"
}
info(){
    if(this.tipoInfo==1){
        super.info
    }   else{
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade: ${this.velMax}`)
        console.log(`Potência: ${this.turbo.pot}`)
        console.log("-------------------")}
}
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c4 = new CarroEspecial(3)

c1.info()
c2.info()
c4.info()