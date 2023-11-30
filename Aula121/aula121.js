const fTexto=document.querySelector("#fTexto")
const btnTexto=document.querySelector("#btnTexto")
const pTexto=document.querySelector("#pTexto")

btnTexto.addEventListener("click",(evt)=>{

})

let num=10
window.localStorage.setItem("numero",num)

alert(localStorage.getItem(window.localStorage.key(0)))

sessionStorage.setItem("nome","Rogério")