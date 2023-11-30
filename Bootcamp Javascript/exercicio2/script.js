const vitorias = document.querySelector('.vitorias')
let mostradorVitorias = document.querySelector('#mostradorVitorias')

const mostrador = document.querySelector('.mostrador')

const botao = document.querySelector('#botao')

const elos = [...document.querySelectorAll('.elos')]

let ferro = document.querySelector('#ferro').innerHTML
let bronze = document.querySelector('#bronze').innerHTML
let prata = document.querySelector('#prata').innerHTML
let ouro = document.querySelector('#ouro').innerHTML
let diamante = document.querySelector('#diamante').innerHTML
let lendario = document.querySelector('#lendario').innerHTML
let imortal = document.querySelector('#imortal').innerHTML



elos.map((el) => {
    el.addEventListener('click', (evt) => {
        mostradorVitorias.innerHTML = evt.target.innerHTML
    })
})

const ranques=()=>{
    if (mostradorVitorias.innerHTML <= 19) {
        mostrador.innerHTML = 'Ferro'
    }
    else if (mostradorVitorias.innerHTML <= 21) {
        mostrador.innerHTML = 'Bronze'
    }
    else if (mostradorVitorias.innerHTML <= 79) {
        mostrador.innerHTML = 'Prata'
    }
    else if (mostradorVitorias.innerHTML <= 89) {
        mostrador.innerHTML = 'Ouro'
    }
    else if (mostradorVitorias.innerHTML <= 99) {
        mostrador.innerHTML = 'Diamante'
    }
    else if (mostradorVitorias.innerHTML <= 100) {
        mostrador.innerHTML = 'Lendário'
    }
    else if (mostradorVitorias.innerHTML > 100) {
        mostrador.innerHTML = 'Imortal'
    } else {
        mostrador.innerHTML
    }
}

botao.addEventListener('click', (evt) => {
    ranques()
})