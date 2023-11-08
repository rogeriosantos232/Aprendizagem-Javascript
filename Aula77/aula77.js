//Aula 77 e 78

const data=new Date()
const dataDiv=document.getElementById('dataDiv')
const divRelogio=document.querySelector('.divRelogio')

let dia=data.getDate()
const diaM=dia<10?"0"+dia:dia
const dataString=diaM+'/'+data.getMonth()+'/'+data.getFullYear()
dataDiv.innerHTML=dataString

const relogio=()=>{
    const data=new Date()
    let hora=data.getHours()
    let minuto=data.getMinutes()
    let segundo=data.getSeconds()
    hora=hora<10?"0"+hora:hora
    minuto=minuto<10?"0"+minuto:minuto
    segundo=segundo<10?"0"+segundo:segundo
    const horaCompleta=hora+":"+minuto+":"+segundo
    console.log(hora)
    divRelogio.innerHTML=horaCompleta
}
const intervalo=setInterval(relogio,1000)

relogio()
// getDate() = Dia do mês
// getDay() = Dia da Semana(número)
// getFullYear() = Ano com 4 dígitos
// getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
// Date.now() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
// data.getTimezoneOffset() = Timezone da localidade
// data.setDate() = Define um dia do mês para a data
// data.setMonth() = Define um mês para a data
// data.setFullYear() = Define um ano para a data
// data.setHours() = Define horas
// data.setMinutes() = Define minutos
// data.setMilliseconds() = Define milisegundos
// data.toDateString() = Retorna somenet a data