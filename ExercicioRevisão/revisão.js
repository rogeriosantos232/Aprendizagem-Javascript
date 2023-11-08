const tecla = [...document.querySelectorAll('.tecla')]
const mostrador = document.querySelector('#mostrador')
const tDel = document.querySelector('#tDel')
const teclaOp = [...document.querySelectorAll('.teclaOp')]
const teclaRes = document.querySelector(".res")
const tIgual = document.querySelector("#tIgual")
const tCopy = document.querySelector("#tCopy")

let sinal = false
let decimal = false

tecla.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false
        if (evt.target.innerHTML == ",") {
            if (!decimal) {
                decimal = true
                if (mostrador.innerHTML == "0") {
                    mostrador.innerHTML = "0,"
                } else { mostrador.innerHTML += evt.target.innerHTML }
            }
        } else {
            if (mostrador.innerHTML == "0") {
                mostrador.innerHTML = ""
            }
            mostrador.innerHTML += evt.target.innerHTML
        }
    })
})

tDel.addEventListener("click",(evt)=>{
    mostrador.innerHTML="0"
})

// teclaOp.map((el)=>{
//     el.addEventListener("click",(evt)=>{
//     if(!sinal){
//         sinal=true
//         if(mostrador.innerHTML=="0"){
//             mostrador.innerHTML=""
//         }
//         if(evt.target.innerHTML=="*"){
//             mostrador.innerHTML+="*"
//         }else{
//             mostrador.innerHTML+=el.innerHTML
//         }
//     }
//     })
// })

teclaOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (!sinal) {
            sinal = true
            if (mostrador.innerHTML == "0") {
                mostrador.innerHTML = ""
            }
            else {
                mostrador.innerHTML += el.innerHTML
            }
        }

    })
})

tDel.addEventListener("click", (evt) => {
    sinal = false
    decimal = false
    mostrador.innerHTML = "0"
})
tIgual.addEventListener("click", (evt) => {
    sinal = false
    decimal = false
    const aaa = eval(mostrador.innerHTML)
    mostrador.innerHTML = aaa
})

tCopy.addEventListener("click",(evt)=>{
    teste.select()
    teste.setSelectionRange(0,999999)//Mobile
    navigator.clipboard.writeText(mostrador.innerHTML)
})