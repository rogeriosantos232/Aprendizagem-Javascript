//Aula75 e 76 // Assunto = 'Promise'

const numero = document.getElementById('numero')
const btnPromessa=document.getElementById('btnPromessa')


btnPromessa.addEventListener('click',((evt)=>{
    promessa()
   .then((retorno)=>{
       numero.innerHTML =retorno
       numero.classList.add('ok')
       numero.classList.remove('erro')
   })
   .catch((retorno)=>{
       numero.innerHTML =retorno
       numero.classList.add('erro')
       numero.classList.remove('ok')
   })
   numero.innerHTML = 'Processando...'
}))

const promessa=()=>{
    let p= new Promise((ok, naoOk) => {
        let resultado = true
        let tempo = 3000
    
        setTimeout(() => {
            if (resultado) {
                ok('Deu tudo certo')
            } else {
                naoOk('Deu tudo errado')
            }
        },tempo)
    })
    return p
}
numero.innerHTML = 'Esperando Ação'

//Aula 75
// let prom = new Promise((ok, naoOk) => {
//     let resultado = true
//     let tempo = 3000

//     setTimeout(() => {
//         if (resultado) {
//             ok('Deu tudo certo')
//         } else {
//             naoOk('Deu tudo errado')
//         }
//     },tempo)
// })

// prom.then((retorno)=>{
//     numero.innerHTML =retorno
//     numero.classList.add('ok')
//     numero.classList.remove('erro')
// })
// prom.catch((retorno)=>{
//     numero.innerHTML =retorno
//     numero.classList.add('erro')
//     numero.classList.remove('ok')
// })


//const numero = document.getElementById('numero')
// let resultado = false
// let tempo = 3000

// setTimeout(() => {
//    resultado=true
// },tempo)
// }) if (resultado) {
//     numero.innerHTML = 'Deu tudo certo'
//     numero.classList.add('ok')
//     numero.classList.remove('erro')
// } else {
//     numero.innerHTML = 'Deu tudo errado'
//     numero.classList.add('erro')
//     numero.classList.remove('ok')
// }
