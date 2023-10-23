//Array

const caixa=document.querySelector("#caixa")

let cores=["Azul","Verde","Vermelho",["claro","escuro","médio"]]
let cursos = ["HTML","CSS","JavaScript",cores]

// cursos[2]="C#"

// cursos.push("C++")//Coloca no final
// cursos.unshift("Python")//Coloca no início
// cursos.pop()//Tira do final
// cursos.shift()//Tira do início


console.log(cursos[3][3][2])

cursos.map((el)=>{
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})