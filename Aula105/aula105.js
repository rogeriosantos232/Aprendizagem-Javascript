//Aula 105,106

let nome=new String("Rooogériooo de Lima Santooos 2002")
console.log(nome)

let email="rogerinhogameplays321@rogerio.com"

let numeros= "1, 10, 100, 1000"

console.log(nome.search(/lima/i))

console.log(nome.match(/o/g))

console.log(nome.match(/O/g))

console.log(nome.match(/O/ig))

console.log(nome.replace(/o/ig,"e"))

console.log(nome.match(/[a-m|0-9]/ig))


//Metacaracteres
console.log(nome.match(/\d/ig)) // Números
console.log(nome.match(/\s/ig)) // Espaços
console.log(nome.match(/\b/ig)) // Caractéres


//Quantificadores
console.log(nome.match(/o+/ig))
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))