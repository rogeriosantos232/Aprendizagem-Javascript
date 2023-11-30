//Aula 107,108,109,110,111

const carro=document.getElementById('carro')
const btnParar=document.getElementById("btnParar")
const btnRodar=document.getElementById("btnRodar")

const init=()=>{
    carro.style.position="relative";
    carro.style.left="0px";
    carro.style.width="100px";
    carro.style.height="100px";
    tamCarro=parseInt(carro.style.width);
    tamMax=window.innerWidth - tamCarro;
}

let anima=null
let tamMax=null
let tamCarro=null
let dir=0

const mover=()=>{
        if(parseInt(carro.style.left) >= tamMax){
            dir=-1
           }
        else if(parseInt(carro.style.left) <= 0){
            dir=1
        }
        carro.style.left=parseInt(carro.style.left) + (10*dir) +"px"
        anima=setTimeout(mover,20)
    }

btnParar.addEventListener("click",()=>{
    clearTimeout(anima)
})

btnRodar.addEventListener("click",()=>{
    mover()
})

//window.onload=init

window.addEventListener("load",init())
window.addEventListener("resize",()=>{
    tamMax=window.innerWidth - parseInt(carro.style.width)
})

window.addEventListener("keydown",(evt)=>{
    if(evt.code==="ArrowUp"){
        carro.style.width=parseInt(carro.style.width)+10+"px"
        carro.style.height=parseInt(carro.style.height)+10+"px"
    }if(evt.code==="ArrowDown"){
        carro.style.width=parseInt(carro.style.width)-10+"px"
        carro.style.height=parseInt(carro.style.height)-10+"px"
    }
    tamCarro=parseInt(carro.style.width)
    tamMax=window.innerWidth - tamCarro
})
