
pMedia=document.getElementById('pMedia')
bMedia=document.getElementById('bMedia')

    bMedia.addEventListener('click',(evt)=>{
    let n1=document.getElementById('nota1').value
    let n2=document.getElementById('nota2').value
    let n3=document.getElementById('nota3').value
    let media = (Number(n1) + Number(n2) + Number(n3)) / 3
    
      if(nota1.value>10 || nota2.value>10 || nota3.value>10){
         alert("Erro! Digite uma nota de 0 a 10")
      }else{ 
         if(media>=6){
          pMedia.innerHTML=media
          alert('Aprovado')
       }else{
          pMedia.innerHTML=media
          alert('Reprovado')
       }}
})