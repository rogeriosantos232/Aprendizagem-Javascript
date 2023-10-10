//Loops Definidos | Loops Indefinidos

// Loop Definido -> For = Usar quando souber a quantidade de vezes que precisa iterar o bloco de comandos

// Loop Indefinido -> While, Do While = Usar quando não souber a quantidade de vezes que precisa iterar o bloco de comandos

// For(Inicialização;Condição;Controle) pode ser incremento ou decremento

console.log("Início do programa")

for(let i=0; i < 10; i++){
    if(i%2==0){
        console.log(i + " é par")
    }
    else{
        console.log(i + " é impar")
    }
}

console.log("Fim do programa")