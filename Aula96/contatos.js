import {contatos} from "./bancoContatos.js";

let contato={
    getTodosContato:function(){
        return contatos
    },
    getContato:function(i_contato){
        return contatos[i_contato]
    },
    AddContato:function(novoContato,destinoDOM){
        const contato={
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }
        contatos.push(contato)

        destinoDOM.innerHTML=""

        contatos.map((c)=>{
            const div=document.createElement("div")
            div.setAttribute("class","contato")
    
            const pNome=document.createElement("p")
            pNome.innerHTML=c.nome
    
            const pTelefone=document.createElement("p")
            pTelefone.innerHTML=c.telefone
    
            const pEmail=document.createElement("p")
            pEmail.innerHTML=c.email
    
            div.appendChild(pNome)
            div.appendChild(pTelefone)
            div.appendChild(pEmail)
            destinoDOM.appendChild(div)
        })

        
    }
}

export default contato