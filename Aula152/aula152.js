//Aula 152,153,154,155

const configdgv = {
    endpoint: "produtos.json",
    idDestino:"dgvDados",
}
const dgv = (configdgv) => {
    const dgvDados=document.getElementById(configdgv.idDestino)
    dgvDados.innerHTML="";
    fetch(configdgv.endpoint)
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                const dgvLinha=document.createElement("div");
                dgvLinha.setAttribute("class","dgvLinha");

                const c1=document.createElement("div");
                c1.setAttribute("class","c1");
                c1.innerHTML=el.id;
                dgvLinha.appendChild(c1);
                
                const c2=document.createElement("div");
                c2.setAttribute("class","c2");
                c2.innerHTML=el.produto;
                dgvLinha.appendChild(c2);

                const c3=document.createElement("div");
                c3.setAttribute("class","c3");
                c3.innerHTML=el.marca;
                dgvLinha.appendChild(c3);

                const c4=document.createElement("div");
                c4.setAttribute("class","c4");
                c4.innerHTML=el.modelo;
                dgvLinha.appendChild(c4);

                const c5=document.createElement("div");
                c5.setAttribute("class","c5");
                dgvLinha.appendChild(c5);

                const imgVisualizar=document.createElement("img");
                imgVisualizar.setAttribute("class","dgvIcon");
                imgVisualizar.setAttribute("src","icons/visualizar.svg");
                c5.appendChild(imgVisualizar)

                const imgEditar=document.createElement("img");
                imgEditar.setAttribute("class","dgvIcon");
                imgEditar.setAttribute("src","icons/editar.svg");
                c5.appendChild(imgEditar)

                const imgDelete=document.createElement("img");
                imgDelete.setAttribute("class","dgvIcon");
                imgDelete.setAttribute("src","icons/deletar.svg");
                c5.appendChild(imgDelete)

                dgvDados.appendChild(dgvLinha)
            })
        })
}

dgv(configdgv);

/* <div class="dgvLinha">
    <div class="c1">01</div>
    <div class="c2">Processador</div>
    <div class="c3">Intel</div>
    <div class="c4">i7</div>
    <div class="c5">D E V</div>
</div> */