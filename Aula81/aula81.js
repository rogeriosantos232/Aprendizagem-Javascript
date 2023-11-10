const olhos =[...document.getElementsByClassName('olho')]

let posxMouse=0
let posyMouse=0

window.addEventListener('mousemove',(evt)=>{
    posxMouse=evt.clientX
    posyMouse=evt.clientY

    const rot=Math.atan2(evt.clientY,evt.clientX)*180/Math.PI

    olhos.map((el)=>{
        el.style.transform='rotate('+rot+'deg)'

    })
})