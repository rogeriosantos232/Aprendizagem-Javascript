//Aulas 141,142,143,144,145,146,147,148,149
import {Login} from "./login.js";
import {Cxmsg} from "./cxmsg.js";

const callbackOK=()=>{
    
    }
    
const callbackNaoOK=()=>{
    const config={
        cor:"#800",
        tipo:"ok",
        textos:null
    }
        Cxmsg.exibirCaixa(config,"Erro","Login não efetuado! Usuário ou senha incorretos.")
}

Login.login(callbackOK,callbackNaoOK);