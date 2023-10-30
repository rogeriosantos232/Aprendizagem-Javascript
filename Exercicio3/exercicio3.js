//Aulas 63 e 64
const f_tipoMilitar = document.querySelector("#f_tipoMilitar")

const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_municao=document.querySelector("#f_municao")
const f_blindagem=document.querySelector("#f_blindagem")
const carros=document.querySelector("#carros")
const btn_addCarro=document.querySelector("#btn_addCarro")
const f_nome=document.querySelector('#f_nome')
const f_portas=document.querySelector('#f_portas')

let a_carros=[]

const removerCarro=(quem)=>{
    a_carros=a_carros.filter((el)=>{
        return el.nome!=quem
    })
}

f_tipoMilitar.addEventListener("click",(evt)=>{ f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_municao.removeAttribute("disabled")
    f_blindagem.removeAttribute("disabled")
})

f_tipoNormal.addEventListener("click",(evt)=>{  f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_municao.setAttribute("disabled","disabled")
    f_blindagem.setAttribute("disabled","disabled")
})

const gerenciarCarros=()=>{
    carros.innerHTML=""
    a_carros.map((c)=>{
        const div=document.createElement("div")
        const btn=document.createElement("button")
        btn.innerHTML="remover"
        btn.addEventListener("click",(evt)=>{
            const quemRemover=evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            console.log(a_carros)
            gerenciarCarros()
        })

        div.setAttribute("class","carro")
        div.setAttribute("data-nome",c.nome)
        div.innerHTML=`Nome: ${c.nome}</br>`
        div.innerHTML+=`Portas: ${c.portas}</br>`
        div.innerHTML+=`Blindagem: ${c.blindagem}</br>`
        div.innerHTML+=`Munição: ${c.municao}</br>`
        div.appendChild(btn)
        carros.appendChild(div)
    })
    
}

btn_addCarro.addEventListener("click",()=>{
    if(f_tipoNormal.checked){
        const c=new Carro(f_nome.value,f_portas.value)
        a_carros.push(c)
    }
    else if(f_tipoMilitar.checked){
        const m=new Militar(f_nome.value,f_portas.value,f_municao.value)
        a_carros.push(m)
        
        

    }
    gerenciarCarros()
})



class Carro { //classe pai
    constructor(nome, portas) { // É chamado quando a classe é instanciada, se tiver classe, tem que ter um constructor
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = ""
        this.cor = ""
    }
    ligar = function () {
        this.ligado = true
    }
    desligar = function () {
        this.ligado = false
    }
    setCor = function (cor) {
        this.cor = cor
    }
    setVel = function (vel) {
        this.vel = vel
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar = function () {

        if (this.municao > 0) {
            this.municao--
        }
    }
}

const c1 = new Carro("Normal", 4)
c1.ligar()
c1.setCor("Preto")

const c2 = new Militar("Militar", 1, 100, 200)
c2.ligar()
c2.setVel("350Km/Hr")
c2.setCor("Camuflado")
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c1.velocidade}`)
console.log(`Cor: ${c1.cor}`)
console.log("---------------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log("---------------------")