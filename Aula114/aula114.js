//Desestruturação de dados
//Aula 114,115,116,117

// let numeros=[10,20,30,40]

// let a=10;
// let b=20;

// let[a,b,c,d]=numeros
// let[a=0,b=0,c=0,d=0]=[10,10]

// [a,b]=[b,a]

// let numeros = () => {
//     return [10, 20, 30, 40]
// }

let numeros=[10,20,30,40,50,60,70,80,90];

let [a, b, c,...d] = numeros;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let obj={nome:"Rogério",idade:"21"};
let{nome,idade}=obj;

console.log(nome);
console.log(idade);

const cores=()=>{
    return ["Vermelho","Verde","Branco","Azul"]
};

let[c1,c2,,c3]=cores();

console.log(c1);
console.log(c2);
console.log(c3);

let texto="Curso de javascript";
let[t1,t2,t3]=texto.split(" ");
console.log(t1,t2,t3);
