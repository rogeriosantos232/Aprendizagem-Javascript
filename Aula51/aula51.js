//ITERADORES

const valores=[10,9,8,7,6,5,4,3]
const it_valores=valores[Symbol.iterator]()

const texto="Youtube"
const it_texto=texto[Symbol.iterator]()

console.log(valores)
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())

console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())

//Arrays
//String
//Map
//Set