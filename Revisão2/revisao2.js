const divRelogio=document.querySelector('.divRelogio')

const relogio=()=>{
    const data=new Date()
    let hora=data.getHours()
    let minuto=data.getMinutes()
    let segundo=data.getSeconds()
    let milisegundo=data.getMilliseconds()

    hora=hora<10?'0'+hora:hora
    minuto=minuto<10?'0'+minuto:minuto
    segundo=segundo<10?'0'+segundo:segundo
    milisegundo=milisegundo<10?'0'+milisegundo:milisegundo

    const horarioCompleto=hora+':'+minuto+':'+segundo+':'+milisegundo

    divRelogio.innerHTML=horarioCompleto
}
const intervalo=setInterval(relogio,1)
relogio()