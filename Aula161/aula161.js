const cabecalho=document.querySelector("#cabecalho")
const menu=document.querySelector("#menu")
const btnHome=document.querySelector("#btnHome")
const btnNovo=document.querySelector("#btnNovo")
const btnPesquisar=document.querySelector("#btnPesquisar")
const btnGestao=document.querySelector("#btnGestao")
const btnSobre=document.querySelector("#btnSobre")
const principal=document.querySelector("#principal")

btnHome.addEventListener("click",(evt)=>{
    selecionarAba(evt.target,"./home.html");
})
btnNovo.addEventListener("click",(evt)=>{
    selecionarAba(evt.target,"./novo.html");
})
btnPesquisar.addEventListener("click",(evt)=>{
    selecionarAba(evt.target,"./pesquisar.html");
})
btnGestao.addEventListener("click",(evt)=>{
    selecionarAba(evt.target,"./gestao.html");
})
btnSobre.addEventListener("click",(evt)=>{
    selecionarAba(evt.target,"./sobre.html");
})

const selecionarAba=(el,url)=>{
    const abas=[...document.querySelectorAll(".aba")]
    abas.forEach(e=>{
        e.classList.remove("abaSelecionada")
    });
    el.classList.add("abaSelecionada")
    window.open(url,"ifPrincipal")
}