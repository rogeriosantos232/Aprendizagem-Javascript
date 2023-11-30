const btnImprimir=document.querySelector('#btnImprimir')

btnImprimir.addEventListener('click',(evt)=>{
    const conteudo= document.querySelector('#tabela').innerHTML;

    let estilo='<style>';
    estilo+='table {width: 100%;font: 25px Calibri;}';
    estilo+='table, th, td{border: solid 1px #DDD;border-collapse: collapse;padding: 2px 3px;text-align: center;}';
    estilo+='padding: 4px 8px;text-align:center;}'
    estilo+='</style>';

    const win= window.open('','', 'height=700,widht=700');

    win.document.write('<html><head>');
    win.document.write('<title>Aula 89</title>');
    win.document.write(estilo);
    win.document.write('</head><body>');
    win.document.write(conteudo);
    win.document.write('</body></html>');


    win.print()
    win.close()
})