import {Cxmsg} from "./cxmsg.js"
const config={
    cor:"#48f"
}
Cxmsg.config(config)

// const config={
//         titulo:"Teste",
//         texto:"Teste de caixa de mensagem feita baseada na aula 136 do curso de javascript do CFBCursos!",
//         cor:"#4dff82"
// }

const btnMostrarCxMsg=document.querySelector("#btnMostrarCxMsg")

btnMostrarCxMsg.addEventListener("click",()=>{
    Cxmsg.exibirCaixa("Teste","Caixa de Mensagem")
})