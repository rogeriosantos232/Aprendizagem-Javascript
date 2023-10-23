const p_array=document.querySelector("#array")

const txtPesquisar=document.querySelector("#txtPesquisar")

const btnPesquisar=document.querySelector("#btnPesquisar")

const resultado=document.querySelector("#resultado")

const elementos_array=[10,5,8,2,9,15,20]

p_array.innerHTML="["+elementos_array+"]"


btnPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML="Valor não encontrado"
    const ret=elementos_array.find((el,i)=>{
        if(el==txtPesquisar.value){
            resultado.innerHTML="Valor pesquisado é " + el + " Na posição " + i
            return el
        }
    })
    console.log(ret)
})