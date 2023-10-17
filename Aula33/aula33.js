//Método querySelector e querySelector.all

const divTodas=[...document.getElementsByTagName("div")]
const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("c1")]
const cursosC2=[...document.getElementsByClassName("c2")]
const cursoEspecial=document.getElementById("c1")

const query_divTodas=[...document.querySelectorAll("div")]

const query_cursosTodos=[...document.querySelectorAll(".curso")]


console.log(query_cursosTodos)

// console.log(divTodas)
// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursoEspecial)

// cursosC1.map((el)=>{
//     el.classList.add("destaque")
// })