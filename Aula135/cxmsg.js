class Cxmsg {
    static cor = "#888"
    static destino = null
    static divmsg = null

    static config=(config)=>{
        this.cor=config.cor
    }
        static exibirCaixa=(titulo,texto)=>{
        this.destino = document.body
        this.titulo=titulo
        this.texto=texto
        this.divmsg = document.createElement("div")
        const estiloDivMsg =
            "display: flex;" +
            "justify-content: center;" +
            "align-items: center;"+
            "position: absolute;"+
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0,0,0,0.7);"
            this.divmsg.setAttribute("id","divmsg")
            this.divmsg.setAttribute("style",estiloDivMsg)
            this.destino.prepend(this.divmsg)

            const estiloAreaCxmsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: flex-start;"+
            "flex-direction: column;"+
            "width: 300px;"
            const areaCxmsg=document.createElement("div")
            areaCxmsg.setAttribute("style",estiloAreaCxmsg)
            this.divmsg.appendChild(areaCxmsg)

            const estiloTituloCxmsg=
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: "+this.cor+";"+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px"
            const tituloCxmsg=document.createElement("div")
            tituloCxmsg.setAttribute("style",estiloTituloCxmsg)
            tituloCxmsg.innerHTML=this.titulo
            areaCxmsg.appendChild(tituloCxmsg)

            const estiloCorpoCxmsg=
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #eee;"+
            "color: #000;"+
            "padding: 30px 5px;"
            const corpoCxmsg=document.createElement("div")
            corpoCxmsg.setAttribute("style",estiloCorpoCxmsg)
            corpoCxmsg.innerHTML=this.texto
            areaCxmsg.appendChild(corpoCxmsg)
        
            const estiloRodapeCxmsg=
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #ccc;"+
            "color: #000;"+
            "padding: 5px;"+
            "border-radius: 0px 0px 5px 5px;"

            const rodapeCxmsg=document.createElement("div")
            rodapeCxmsg.setAttribute("style",estiloRodapeCxmsg)
            areaCxmsg.appendChild(rodapeCxmsg)


            const estiloBotaoCxmsg=
            "background-color:"+this.cor+";"+
            "color: #fff;"+
            "padding: 10px 50px;"+
            "border-radius: 5px;"+
            "cursor: pointer;"+
            "text-transform:uppercase;"
            const btnOk=document.createElement("button")
            btnOk.setAttribute("style",estiloBotaoCxmsg)
            btnOk.innerHTML="OK"
            btnOk.addEventListener("click",(evt)=>{
                this.removerCaixa()
            })
            rodapeCxmsg.appendChild(btnOk)

    }
    static removerCaixa = () => {
        this.divmsg.remove()
    }
}
export { Cxmsg };