// Aula 101,102,103,104
let nome=new String('Rogério de Lima Santos')
let nome2=new String('Rogério')

console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(3))

console.log(nome.charCodeAt(0))

console.log(nome.concat(' de Lima')) // Adiciona um texto à string apenas no momento da chamada, não altera a string original
console.log(nome)

// nome=nome.concat(' de Lima') // Nesse caso, o nome está recebendo a adição da string 'de Lima' permanentemente.
// console.log(nome)

console.log(nome.indexOf("r")) // primeiro
console.log(nome.lastIndexOf("o"))

console.log(nome.localeCompare(nome2))

console.log(nome.replace("R","D"))
console.log(nome.replace("Rog","Dogs"))

console.log(nome.search("Rogério"))
console.log(nome.slice(2,4))

let sobrenome=nome.slice(7,22)
console.log(sobrenome)

let arrNome=nome.split(" ")
console.log(arrNome)

let parte1=nome.substring(0,7) // define a posição que iniciará e que encerrará as strings
console.log(parte1)

let parte2=nome.substr(4,11) // Apartir daquela posição, retorna uma quantidade x de números que você definiu, esse método foi descontinuado.
console.log(parte2)

console.log(nome.toUpperCase()) // deixa o nome em maíusculo
console.log(nome)

console.log(nome.toLocaleUpperCase()) // deixa o nome em maíusculo


//nome=nome.toUpperCase()
console.log(nome)

console.log(nome.toLowerCase())
console.log(nome.toLocaleLowerCase())

console.log(nome.valueOf())

let num=10

console.log(typeof(num.toString()))


console.log(nome.startsWith("R"))

console.log(nome.endsWith("s"))

console.log(nome.includes("x"))

console.log(nome.repeat(2))

console.log(nome.charCodeAt(0))
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))
console.log(nome.charCodeAt(3))
console.log(nome.charCodeAt(4))
console.log(nome.charCodeAt(5))
console.log(nome.charCodeAt(6))

console.log(String.fromCodePoint(82,111,103,233,114,105,111))

let nomeTs="Rogério"

console.log(`Nome: ${"Rogério"}`)