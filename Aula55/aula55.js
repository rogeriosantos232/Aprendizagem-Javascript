//Coleção SET = usado quando não poder ter entradas duplicadas no array

const caixa=document.querySelector("#caixa")

let musicas=new Set(["musica 1","musica bao","musica10"])

musicas.add("musica muito legal")
musicas.add("musica1")
musicas.add("musica1")
musicas.add("musica10")

musicas.delete("musica1")
musicas.delete("musica 1")

// console.log(musicas)

// musicas.forEach((el)=>{
//     caixa.innerHTML+=el +"<br/>"
// })

for(let m of musicas){
    caixa.innerHTML+=m +"<br/>"
}