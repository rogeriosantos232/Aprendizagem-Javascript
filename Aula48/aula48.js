const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[30,22,27,16,40,26,20]

p_array.innerHTML="["+elementos_array+"]"


btnVerificar.addEventListener("click",(evt)=>{
    const ret=elementos_array.every((el,i)=>{
        if(el<18){
            resultado.innerHTML="Array não conforme na posição " +i
        }
        return el>=18
    })
    if(ret){
    resultado.innerHTML="OK"
}
})