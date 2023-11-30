//Aula 90 e 91
const objetos=document.querySelector('.objetos')

let comp={
    cpu:'Amd Ryzen 5',
    ram:'8gb',
    gpu:'rx 6600',
    ssd:'712gb',
    info:function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`GPU: ${this.gpu}`)
        console.log(`SSD: ${this.ssd}`)
    }
}
comp['monitor']='22pol'
comp.placaVideo='rtx'

delete(comp.ssd)

const c1=Object.assign({},comp)
c1.info()
const o1={obj1:'1'}
const o2={obj2:'2'}
const o3={obj3:'3'}
const o4=Object.assign(o1,o2,o3)
console.log(o4)

console.log(comp)
const comps=[{
    cpu:'Amd Ryzen 7',
    ram:'16gb',
    gpu:'rx 7700',
    ssd:'632gb',
    info:function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`GPU: ${this.gpu}`)
        console.log(`SSD: ${this.ssd}`)
    }
},
{
    cpu:'i5',
    ram:'12gb',
    gpu:'gtx 610',
    ssd:'120gb',
    info:function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`GPU: ${this.gpu}`)
        console.log(`SSD: ${this.ssd}`)
    }
},
{
    cpu:'i3',
    ram:'8gb',
    gpu:'1050',
    ssd:'1000gb',
    info:function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`GPU: ${this.gpu}`)
        console.log(`SSD: ${this.ssd}`)
    }
}]

comps.map((el)=>{
    console.log(el)
    const div=document.createElement('div')
    div.innerHTML=el.cpu+'<br/>'+el.ram+'<br/>'+el.gpu+'<br/>'+el.ssd
    div.setAttribute('class','comps')
    objetos.appendChild(div)
})
comps()
objetos.innerHTML=JSON.stringify(comps)