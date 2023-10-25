//Template strings

const caixa=document.querySelector("#caixa")

const carros=["Polo","Golf","T-cross","HRV"]

// let ol=`<ol>`
// carros.map((el)=>{
//     ol+=`<li>${el}</li>`
// })
// ol+`</ol>`

let ol="<ol>"
carros.map((el)=>{
    ol+="<li>" +el+ "</li>"
})

// const curso="Javascript"
// const canal="Rogério"
//const frase="Este é o curso de " + curso + " do canal " + canal

// const frase=`Este é o curso de ${curso} do canal ${canal}`

caixa.innerHTML=ol