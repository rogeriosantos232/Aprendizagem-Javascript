

const data=new Date()
const divRelogio=document.querySelector('.divRelogio')

const relogio=()=>{
    const data=new Date()
    
    let hora = data.getHours()

    let minuto = data.getMinutes()

    let segundo = data.getSeconds()

    

    hora=hora<10?"0"+hora:hora

    minuto=minuto<10?"0"+minuto:minuto

    segundo=segundo<10?"0"+segundo:segundo

    const horarioCompleto=hora+":"+minuto+":"+segundo
    
    divRelogio.innerHTML=horarioCompleto
    
}
const Intervalo=setInterval(relogio,1000)
relogio()