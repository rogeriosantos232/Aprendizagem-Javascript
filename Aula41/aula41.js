const caixa1=document.querySelector("#caixa1")

const btn_c=[...document.querySelectorAll(".curso")]

const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL","React Native"]

cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el
    const iconeRemover=document.createElement("img")
    iconeRemover.setAttribute("src","https://cdn-icons-png.flaticon.com/512/54/54324.png")
    iconeRemover.setAttribute("class","iconeRemover")
    iconeRemover.addEventListener("click",(evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })
    novoElemento.appendChild(iconeRemover)
    caixa1.appendChild(novoElemento)
})