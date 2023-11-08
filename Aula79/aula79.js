//Aula 77 e 78

const dataDiv=document.getElementById('dataDiv')
const divRelogio=document.querySelector('.divRelogio')
const btnAtivar=document.querySelector('.btnAtivar')
const btnParar=document.querySelector('.btnParar')
const tmpAlarme=document.querySelector('.tmpAlarme')
const horaAlarme=document.querySelector('.horaAlarme')
const timer=document.querySelector('.timer')

const somAlarme=new Audio('alarme.mpeg')
somAlarme.loop=2
let tsAtual=null
let tsAlarme=null
let alarmeAtivado=false
let alarmeTocando=false

btnAtivar.addEventListener("click",()=>{
    tsAtual=Date.now()
    tsAlarme=tsAtual+(tmpAlarme.value*60000)
    alarmeAtivado=true
    const dtAlarme=new Date(tsAlarme)
    let hora = dtAlarme.getHours()
    let minuto = dtAlarme.getMinutes()
    let segundo = dtAlarme.getSeconds()

    hora=hora<10?'0'+hora:hora
    minuto=minuto<10?'0'+minuto:minuto
    segundo=segundo<10?'0'+segundo:segundo

    horaAlarme.innerHTML='Hora do Alarme: '+hora+':'+minuto+':'+segundo
})

btnParar.addEventListener('click',(evt)=>{
    alarmeAtivado=false
    alarmeTocando=false
    horaAlarme.innerHTML="Hora do Alarme:"
    tmpAlarme.value=0
    timer.classList.remove('alarme')
    somAlarme.pause();
    somAlarme.currentTime=0;
})

const calendario=()=>{
const data=new Date()

let dia=data.getDate()
let mes=data.getMonth()
let ano=data.getFullYear()
dia=dia<10?'0'+dia:dia
mes=mes<10?'0'+mes:mes
ano=ano<10?'0'+ano:ano
const dataCompleta=dia+'/'+mes+'/'+ano

dataDiv.innerHTML=dataCompleta
}

const relogio=()=>{
    const data=new Date()
    let hora=data.getHours()
    let minuto=data.getMinutes()
    let segundo=data.getSeconds()
    hora=hora<10?"0"+hora:hora
    minuto=minuto<10?"0"+minuto:minuto
    segundo=segundo<10?"0"+segundo:segundo
    const horaCompleta=hora+":"+minuto+":"+segundo
    divRelogio.innerHTML=horaCompleta
    if(alarmeAtivado && !alarmeTocando){
        if(data.getTime()>=tsAlarme){
            alarme_tocando=true
            somAlarme.play()
            timer.classList.add('alarme')
        }
    }
}

const intervalo=setInterval(relogio,1000)

relogio()
calendario()

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