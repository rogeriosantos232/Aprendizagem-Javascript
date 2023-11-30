//Exercicio classes, Aula 82,83,84,85,86

const palco = document.querySelector('.palco')
const numObjetos = document.querySelector('#numObjetos')
const txtQtd = document.querySelector('#txtQtd')
const btnAdd = document.querySelector('#btnAdd')
const btnRemover = document.querySelector('#btnRemover')

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBola = 0
const bola1 = document.querySelector('#bola1')
const bola2 = document.querySelector('#bola2')
let larguraBola1 = bola1.offsetWidth
let alturaBola1 = bola1.offsetHeight

class Bola {
    constructor(arrayBolas, palco) {
        this.tam = Math.floor(Math.random() * 15) + 10

        this.r = Math.floor(Math.random() * 255)

        this.g = Math.floor(Math.random() * 255)

        this.b = Math.floor(Math.random() * 255)

        this.px = Math.floor(Math.random() * (larguraPalco - this.tam))

        this.py = Math.floor(Math.random() * (alturaPalco - this.tam))

        this.pxB = Math.floor(Math.random() * (larguraBola1 - this.tam))

        this.pyB = Math.floor(Math.random() * (alturaBola1 - this.tam))


        this.velx = Math.floor(Math.random() * 5) + 1

        this.vely = Math.floor(Math.random() * 5) + 1

        this.dirx = (Math.random() * 10) > 5 ? 1 : -1

        this.diry = (Math.random() * 10) > 5 ? 1 : -1

        this.palco = palco

        this.arrayBolas = arrayBolas

        this.id = Date.now() + '_' + Math.floor(Math.random() * 10000000000)

        this.desenhar()

        this.controle = setInterval(this.controlar, 10)

        this.relac = document.getElementById(this.id)

        numBola++

        numObjetos.innerHTML = numBola
    }

    minhaPos = () => {
        return this.arrayBolas.indexOf(this)
    }

    remover = () => { // OK
        clearInterval(this.controle)
        bolas = bolas.filter((el) => {
            if (el.id != this.id) {
                return el
            }
        })
        this.relac.remove()
        numBola--
        numObjetos.innerHTML = numBola
    }

    desenhar = () => { // OK
        const div = document.createElement('div')
        div.setAttribute('id', this.id)
        div.setAttribute('class', 'bola')
        div.setAttribute('style', `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        this.palco.appendChild(div)
    }

    colisaoBordas = () => {
        if (this.px + this.tam >= larguraPalco) {
            this.dirx = -1
        } else if (this.px <= 0) {
            this.dirx = 1
        }
        if (this.py + this.tam >= alturaPalco) {
            this.diry = -1
        } else if (this.py <= 0) {
            this.diry = 1
        }
    }
    controlar = () => {
        this.colisaoBordas()
        this.px += this.dirx * this.velx
        this.py += this.diry * this.vely
        this.relac.setAttribute('style', `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},,${this.b})`)

        if ((this.px > larguraPalco) || (this.py > alturaPalco)) {
            this.remover()
        }
    }
}

window.addEventListener('resize', () => {
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
    // OK
})

btnAdd.addEventListener('click', (evt) => {
    const qtd = txtQtd.value
    for (let i = 0; i < qtd; i++) {
        bolas.push(new Bola(bolas, palco))
    }
})

btnRemover.addEventListener('click', (evt) => {
    bolas.map((el) => {
        el.remover()
    })
})