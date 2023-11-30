const btnAlert=document.querySelector('#btnAlert')
const btnConfirm=document.querySelector('#btnConfirm')
const btnPrompt=document.querySelector('#btnPrompt')

btnAlert.addEventListener('click',(evt)=>{
    const aa=alert('Hello, World!')
    console.log(aa)
})

btnConfirm.addEventListener('click',(evt)=>{
    const ret=confirm('Ativar as notificações?')
    if(ret){
        alert('Agradecemos pela ativação')
        console.log('Botão OK')
    }else{
        alert('Certo!')
        console.log('Botão Cancelar')
    }
    console.log(ret)
})

btnPrompt.addEventListener('click',(evt)=>{
    const pt=prompt('Digite seu nome')
    console.log(pt)
})