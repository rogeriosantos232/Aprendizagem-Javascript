//Método Adicionando Eventos com addEventListener

//const c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el=evt.target
        el.classList.toggle("destaque")
        console.log(el.innerHTML + " foi clicado")
    })
})