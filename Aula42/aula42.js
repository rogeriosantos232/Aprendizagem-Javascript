const idades=[15,16,17,18,19,20,21,22]

const maior=idades.filter((valor)=>{
    if(valor >=18)
    return valor
})

const menor=idades.filter((valor)=>{
    if(valor < 18)
    return valor
})

console.log(idades)
console.log(maior)
console.log(menor)

