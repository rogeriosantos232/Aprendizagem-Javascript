//Operador THIS
function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    this.dadosAnonimos=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },10)
    }
}

const al1=new aluno("Bruno",100)
al1.dadosAnonimos()