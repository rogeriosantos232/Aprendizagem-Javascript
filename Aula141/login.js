class Login {
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static estilocss = null;
    static callbackOK= null;
    static callbackNaoOK= null;
    static config={
    cor:null,//048
    img:null,
    endpoint:null//"https://testejs--rsantos232.repl.co/";
    }
    
    static config = {
        cor: "#048",
        img: "https://img.freepik.com/premium-vector/black-gold-logo-with-letter-r-it_853558-258.jpg?w=2000"
    }


    static login = (callbackOK,callbackNaoOK,config = null) => {
        if (config != null) {
            this.config = config;
        }
        this.callbackOK=()=>{callbackOK()};
        this.callbackNaoOK=()=>{callbackNaoOK()};
        this.estilocss =
            ".fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0,0,0,0.75);box-sizing: border-box}" +
            ".baseLogin{display: flex;justify-content: center;align-items: center;width: 100%;box-sizing: inherit}" +
            ".elementosLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;background-color:#a8a4a4;border-radius: 7px 0px 0px 7px;padding: 6px;border: 1px solid black;box-sizing: inherit;}" +
            ".elementosLogin input{display: flex;border: 1px solid black;margin: auto;box-sizing: inherit;height: 25px;}" +
            ".logoLogin{display: flex;justify-content: center;align-items: center;background-color: #000000;border-radius: 50px;box-sizing:inherit;}" +
            ".logoLogin img{width: 115px;height: 131px;border-radius: 0px 50% 50% 0px;box-sizing: inherit;}" +
            ".botoesLogin{display: flex;justify-content: space-around;align-items: center;width: 100%;padding: 3px;box-sizing: inherit;}" +
            `.botoesLogin button{cursor: pointer;background-color:#${this.config.cor};color: #fff;padding: 4px;border-radius: 3px;border:1px solid black;width: 70px;box-sizing: inherit;}`

        const linkEstilo = document.createElement("style");
        linkEstilo.setAttribute("id", "estiloLogin");
        linkEstilo.setAttribute("rel", "stylesheet");
        linkEstilo.setAttribute("type", "text/css");
        linkEstilo.innerHTML = this.estilocss;
        document.head.appendChild(linkEstilo);

        const fundoLogin = document.createElement("div");
        fundoLogin.setAttribute("id", "fundoLogin");
        fundoLogin.setAttribute("class", "fundoLogin");
        document.body.prepend(fundoLogin);

        const baseLogin = document.createElement("div");
        baseLogin.setAttribute("id", "baseLogin");
        baseLogin.setAttribute("class", "baseLogin");
        fundoLogin.appendChild(baseLogin);

        const elementosLogin = document.createElement("div");
        elementosLogin.setAttribute("id", "elementosLogin");
        elementosLogin.setAttribute("class", "elementosLogin");
        baseLogin.appendChild(elementosLogin);

        const campoLoginUsername = document.createElement("div");
        campoLoginUsername.setAttribute("style", " font-family: 'Courier New', Courier, monospace;font-weight: bolder;");
        campoLoginUsername.setAttribute("id", "campoLoginUsername");
        campoLoginUsername.setAttribute("class", "campoLoginn");
        elementosLogin.appendChild(campoLoginUsername);

        const labelUsername = document.createElement("label");
        labelUsername.innerHTML = "Usuário:"
        campoLoginUsername.appendChild(labelUsername);

        const inputUsername = document.createElement("input");
        inputUsername.setAttribute("id", "inputUsername");
        inputUsername.setAttribute("type", "text")
        inputUsername.setAttribute("name", "f_username")
        campoLoginUsername.appendChild(inputUsername);


        const campoLoginSenha = document.createElement("div");
        campoLoginSenha.setAttribute("style", " font-family: 'Courier New', Courier, monospace;font-weight: bolder;");
        campoLoginSenha.setAttribute("id", "campoLoginSenha");
        campoLoginSenha.setAttribute("class", "campoLoginSenha");
        elementosLogin.appendChild(campoLoginSenha);

        const labelSenha = document.createElement("label");
        labelSenha.innerHTML = "Senha:"
        campoLoginSenha.appendChild(labelSenha);

        const inputSenha = document.createElement("input");
        inputSenha.setAttribute("id", "inputSenha");
        inputSenha.setAttribute("type", "password")
        inputSenha.setAttribute("name", "f_inputSenha")
        campoLoginSenha.appendChild(inputSenha);

        const botoesLogin = document.createElement("div")
        botoesLogin.setAttribute("id", "botoesLogin")
        botoesLogin.setAttribute("class", "botoesLogin")
        elementosLogin.appendChild(botoesLogin)

        const btnLogin = document.createElement("button")
        btnLogin.setAttribute("id", "btnLogin")
        btnLogin.innerHTML = "Login"
        btnLogin.addEventListener("click", (evt) => {
            this.verificaLogin()
        });
        botoesLogin.appendChild(btnLogin)

        const btnCancelar = document.createElement("button")
        btnCancelar.setAttribute("id", "btnCancelar")
        btnCancelar.addEventListener("click", (evt) => {
            this.fechar();
        })
        btnCancelar.innerHTML = "Cancelar"
        botoesLogin.appendChild(btnCancelar)

        const logoLogin = document.createElement("div")
        logoLogin.setAttribute("id", "logoLogin")
        logoLogin.setAttribute("class", "logoLogin")
        baseLogin.appendChild(logoLogin)

        const imgLogoLogin = document.createElement("img")
        imgLogoLogin.setAttribute("src", "https://img.freepik.com/premium-vector/black-gold-logo-with-letter-r-it_853558-258.jpg?w=2000")
        imgLogoLogin.setAttribute("title", "logo.png")
        logoLogin.appendChild(imgLogoLogin)


    }
    static verificaLogin = () => {
        const mat = document.getElementById("inputUsername").value;
        const pas = document.getElementById("inputSenha").value;

        const endpoint = `${this.config.endpoint}/?matricula=${mat}&senha=${pas}`;
        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                if (res) {
                    sessionStorage.setItem("logado","true");
                    sessionStorage.setItem("matlogado",mat);
                    sessionStorage.setItem("nomelogado",res.nome);
                    sessionStorage.setItem("acessologado",res.acesso);
                    this.callbackOK();
                    this.fechar();
                } else {
                    sessionStorage.setItem("logado","false");
                    sessionStorage.setItem("matlogado","");
                    sessionStorage.setItem("nomelogado","");
                    sessionStorage.setItem("acessologado","");
                    this.callbackNaoOK();
                }
            })
}

    static fechar = () => {
    const fundoLogin = document.querySelector("#fundoLogin");
    fundoLogin.remove();
    const estiloLogin = document.querySelector("#estiloLogin");
    estiloLogin.remove();
}
}
//export { Login };