// Operador Spread

//let n1=[10,20,30]
//let n2=[11,22,33,44,55]
//let n3=[...n1,...n2]

//console.log("N1: " + n1);
//console.log("N2: " + n2);
//console.log("N3: " + n3);
//console.log("Tipo de N3: " + typeof(n3));

//const jogador1={nome:"Rogério",energia:100,vidas:3,magia:99}
//const jogador2={nome:"Rodrigo",energia:100,vidas:5,vel:78}
//const jogador3={...jogador1,...jogador2}

//console.log(jogador3)

/*
const soma=(v1,v2,v3,v4) => {
    return v1+v2+v3+v4
};
    let valores=[1,5,6,10];

    console.log(soma(...valores));
*/

const objs1=document.getElementsByTagName("div") //HTMLCollection
const objs2=[...document.getElementsByTagName("div")] // Array com Spread

objs2.forEach(element => {
    element.innerHTML ="curso"
});

console.log(objs1)
console.log(objs2)