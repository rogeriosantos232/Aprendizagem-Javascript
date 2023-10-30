//Objetos

function Pessoa(pnome,pidade){

        this.nome=pnome,
        this.idade=pidade,
    
    this.getNome=function(){
        return this.nome
    }

    this.getIdade=function(){
        return this.idade
    }

    this.setNome=function(nome){
        this.nome=nome
    }
    
    this.setIdade=function(idade){
        this.idade=idade
    }

    this.info=function(){
        console.log(`Nome..: ${this.nome}`)
        console.log(`Idade.: ${this.idade}`)
    }
}
let pessoas=[]

const btn_adicionar=document.querySelector("#btn_adicionar")

const res=document.querySelector(".res")

btn_adicionar.addEventListener("click",(evt)=>{
    const nome=document.querySelector("#f_nome")
    const idade=document.querySelector("#f_idade")
    const p=new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value=""
    idade.value=""
    nome.focus()
    addPessoa()
})


const addPessoa=()=>{
    res.innerHTML=""
    pessoas.map((el)=>{
        const div=document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML=`Nome:${el.getNome()}<br>Idade:${el.getIdade()}`
        res.appendChild(div)
    })
}