// Funções lâmbidas

//const soma= function(v1,v2) {return v1+v2}

const soma=(v1,v2)=>{
    let res=v1+v2
    return res
} // Para uma operação mais complexa, é preciso utilizar as "{}" e utilizar o "return"
console.log(soma(10,2));

const nome=n=>n // Se for apenas uma operação simples, não precisa utilizar as "{}"
console.log(nome("Bruno"));

const add=n=>n+12
console.log(add(10));