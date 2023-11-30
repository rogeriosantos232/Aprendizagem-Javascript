const fNome=document.querySelector("#fNome")
const fNota=document.querySelector("#fNota")
const fMsg=document.querySelector("#fMsg")

document.querySelector("#btnValidar").addEventListener("click",(evt)=>{
    let estadoValidacao=fNota.validity
    
    if(estadoValidacao.valueMissing){
        fNota.setCustomValidity("Campo Obrigatório")
        fMsg=fNota.validationMessage
    }
    else if(estadoValidacao.rangeOverflow){
        fNota.setCustomValidity("Insira uma nota de 0 a 10!")
    }
    else if(estadoValidacao.rangeUnderflow){
        fNota.setCustomValidity("Insira uma nota de 0 a 10")
    }
    fNota.reportValidity()
    evt.preventDefault()
})