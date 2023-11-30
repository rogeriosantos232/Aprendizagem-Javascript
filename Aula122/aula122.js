//Fetch para API's Aula 122,123,124,125

const pTemp=document.querySelector("#pTemp")
const pNivel=document.querySelector("#pNivel")
const pPressao=document.querySelector("#pPressao")
const btnTexto=document.querySelector("#btnTexto")

const obterDados=()=>{
const endpoint="https://testejs--rsantos232.repl.co/"
let res=fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
    pTemp.innerHTML=`Temperatura: ${dados.temp}`

    pNivel.innerHTML=`Nível: ${dados.nivel}`

    pPressao.innerHTML=`Pressão: ${dados.pressao}`
})
}

let dados={
    nome:"Rogério",
    idade:"21",
    curso:"Javascript"
}

let cabecalho={
    method: "POST",
    body:JSON.stringify(dados)
}

const gravarDados=()=>{
    const endpoint="https://testejs--rsantos232.repl.co/"
    fetch(endpoint,cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}

btnTexto.addEventListener("click",()=>{
    gravarDados()
})