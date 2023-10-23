//Reduce

const p_array=document.querySelector("#array")
const btnReduzir=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado")

const elementos_array=[1,2,3,4,5,6]
let aux=[]
let anterior=[]
let atual=[]

p_array.innerHTML="["+elementos_array+"]"


btnReduzir.addEventListener("click",(evt)=>{
    resultado.innerHTML=elementos_array.reduce((ant,atu,pos)=>{
        anterior.push(ant)
        atual.push(atu)
        return atu+ant

    })
    resultado.innerHTML+="<br/>"+anterior+"<br/>"+atual
})