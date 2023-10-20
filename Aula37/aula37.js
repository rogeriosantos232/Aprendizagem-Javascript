//Stop Propagation

const caixa1=document.querySelector("#caixa1")

const btn_c1=document.querySelector("#c1")

const curso=[...document.querySelectorAll(".curso")]

caixa1.addEventListener("click",(evt)=>{
    console.log("clicou")
})

btn_c1.addEventListener("click",(evento)=>{
    evento.stopPropagation()
})

curso.map((el)=>{
    el.addEventListener("click",(evento)=>{
        evento.stopPropagation()
    })
})