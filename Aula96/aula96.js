//Aula 96 e 97
import c from "./contatos.js"
const listaContatos=document.getElementById("listaContatos")

const btnGravar=document.getElementById("btnGravar")

btnGravar.addEventListener("click",(evt)=>{
    const contato={
        nome:document.getElementById("f_nome").value,
        telefone:document.getElementById("f_telefone").value,
        email:document.getElementById("f_email").value
    }
    c.AddContato(contato,listaContatos)
    console.log(c.getTodosContato())
})