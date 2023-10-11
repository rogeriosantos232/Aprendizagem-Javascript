//Continue e Break

let n=0
let max=1000
let pares=0

/*while(n<max){
    console.log("Contagem de n: " + n)
    n++
    if(n>500){

    }
}
console.log("Fim do Programa")
*/

for(let i=n;i<max;i++){
    console.log("Contagem de i: " + i)
    if(i%2!=0){
        continue
    }
    pares++
}
console.log("Quantidade de pares: " + pares)
console.log("Fim do programa")