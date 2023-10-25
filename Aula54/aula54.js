//Coleção MAP : clear = limpar a coleção, delete = remover um elemento, entries = entradas da coleção, forEach = loop para percorrer os elementos da coleção, get = obter um elemento, has = verifica se existe algum elemento na coleção, keys = obtem as chaves da coleção, set = permite definir um elemento dentro da coleção(adicionar), size = quantidade de conjuntos na coleção, values = obtem os valores na coleção

const caixa=document.querySelector("#caixa")

let mapa=new Map()

mapa.set('curso','JavaScript')
mapa.set(10,'RGC')
mapa.set(1,100)
mapa.set('canal','Rgzinn')

mapa.delete(1)

let pes=1
let res=""
if(mapa.has(pes)){
    res="A chave existe na coleção = " + mapa.get(pes) 
    // Também dá para utilizar com caixa.innerHTMl="A chave existe na coleção = " + mapa.get
}
else{
    res="A chave não está na coleção" //Também dá para utilizar com caixa.innerHTMl="A chave existe na coleção = " + mapa.get
}
res+="<br/> O tamanho da coleção é " + mapa.size
caixa.innerHTML=res

mapa.forEach((el)=>{
    console.log(el)
})