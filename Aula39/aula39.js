//Relação dos elementos no DOM parte 2
const caixa1=document.querySelector("#caixa1")

const btn_c=[...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].ChildNodes)

console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos")

console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "Não possui filhos")

console.log(caixa1.children[5].innerHTML="Teste")

// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)