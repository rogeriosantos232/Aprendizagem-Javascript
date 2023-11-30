//Aula 117,118
//Uso obrigatório do ";"

// let i=null
// for(i=0;i<10;i++);
//     console.log(i)

// let i=null; i=10 // se não colocar o ";" depois da primeira definição da variável "i", o identificador não consegue validar e dá erro.

// let idade=21; // Se não colocar o ";", irá resultar em um erro.

// ["a","b","c"].forEach(l=> {
//     console.log(l)
// });

// let n1=[1,2]
// let n2=[3,4];
// [n1,n2].map(v=>console.log(v))

// let n=null;
// (n=10)
// console.log(n)

// let numeros=[10,20,30] // ; ou
// let [n1,n2,n3]=numeros
// console.log(n1)
// console.log(n2)
// console.log(n3)

let num={
    n1:10,
    n2:20,
    n3:30
}

let {n1,n2,n3}=num
console.log(n1)
console.log(n2)
console.log(n3)