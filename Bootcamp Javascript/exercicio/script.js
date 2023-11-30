var nome=document.querySelector('.nome')
const botao=document.querySelector('.botao')

botao.addEventListener('click',(evento)=>{
    alert('Bem vindo' + ' ' + nome.value + '! ' + 'cadastro feito com sucesso!')
    nome.value=''
})