//Aulas 141,142,143,144,145,146,147,148,149,150,151
import {Cxmsg} from "./cxmsg.js";

const callbackOK=()=>{}
    
const callbackNaoOK=()=>{
    const config={
        cor:"#800",
        tipo:"ok",
        textos:null
    }
        Cxmsg.exibirCaixa(config,"Erro","Login não efetuado! Usuário ou senha incorretos.")
}
const configlogin={
    cor:"#3fd0f3",
    img:"https://img.freepik.com/premium-vector/black-gold-logo-with-letter-r-it_853558-258.jpg?w=2000",
    endpoint:"https://testejs--rsantos232.repl.co"
}
Login.login(callbackOK,callbackNaoOK,configlogin);