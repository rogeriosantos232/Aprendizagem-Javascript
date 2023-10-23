//Some
const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[14,15,16,17,18]

p_array.innerHTML="["+elementos_array+"]"


btnVerificar.addEventListener("click",(evt)=>{
    const ret=elementos_array.some((el,i)=>{
        if(el<18){
            resultado.innerHTML="Array não conforme na posição " +i
        }               
        return el>=18
    })
    if(ret){
    resultado.innerHTML="OK"
}
})