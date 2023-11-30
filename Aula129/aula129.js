//Aula 129,130,131,132
const timer = document.querySelector("#timer")

const btnIniciar=document.querySelector("#btnIniciar")
const btnParar=document.querySelector("#btnParar")
const btnZerar=document.querySelector("#btnZerar")
const btnParcial=document.querySelector("#btnParcial")
const parciaisregistradas=document.querySelector("#parciaisregistradas")

let intervalo=null
let tmpIni = null

const contador=()=>{
    const tmpAtual=Date.now()
    let cont=tmpAtual-tmpIni
    let seg=Math.floor((tmpAtual-tmpIni)/1000)
    timer.innerHTML=converter(seg)
}

const converter=(seg)=>{
    const hora=Math.floor(seg/3600)
    const resto=seg%3600
    const minuto=Math.floor(resto/60)
    const segundo=Math.floor(resto%60)
    const form=(hora<10?"0"+hora:hora)+":"+(minuto<10?"0"+minuto:minuto)+":"+(segundo<10?"0"+segundo:segundo)

    return form
}



btnIniciar.addEventListener("click",(evt)=>{
    tmpIni=Date.now()
    intervalo=setInterval(contador,1000)
})

btnParcial.addEventListener("click",(evt)=>{
    let parcial="<div>"+timer.innerHTML+"</div>"
    parciaisregistradas.innerHTML+=parcial
})

btnParar.addEventListener("click",(evt)=>{
    clearInterval(intervalo)
})

btnZerar.addEventListener("click",(evt)=>{
    tmpIni=Date.now()
    timer.innerHTML="00:00:00"
    clearInterval(intervalo)
    parciaisregistradas.innerHTML=""
})