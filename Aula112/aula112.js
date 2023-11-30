//aula112,113

const q1=document.getElementById("q1")
const q2=document.getElementById("q2")
const posx=document.getElementById("posx")
const posy=document.getElementById("posy")
const largura=document.getElementById("largura")
const altura=document.getElementById("altura")


q1.accessKey="b" // Para usar, precisa utilizar Alt + a tecla
q2.accessKey="n"

console.log("q1: "+ q1.accessKey)
console.log("q2: "+ q2.accessKey)

let DOMRect_q1=q1.getBoundingClientRect()
let DOMRect_q2=q2.getBoundingClientRect()

q1.addEventListener("click",(evt)=>{
    posx.innerHTML=`posx:${DOMRect_q1.x}`
    posy.innerHTML=`posy:${DOMRect_q1.y}`
    largura.innerHTML=`largura:${DOMRect_q1.width}`
    altura.innerHTML=`altura:${DOMRect_q1.height}`
})

q2.addEventListener("click",(evt)=>{
    posx.innerHTML=`posx:${DOMRect_q2.x}`
    posy.innerHTML=`posy:${DOMRect_q2.y}`
    largura.innerHTML=`largura:${DOMRect_q2.width}`
    altura.innerHTML=`altura:${DOMRect_q2.height}`
})
