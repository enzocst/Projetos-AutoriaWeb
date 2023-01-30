var totalpreco = 0, totalprodutos = 0, totalprodutosnao = 0;
function cadastrarproduto() {
    var nomeproduto = "";
    var precoproduto = 0;
    nomeproduto = document.getElementById("produto").value;
    precoproduto = document.getElementById("preco").value;
    if (nomeproduto == "") {
        window.alert("Nome do produto está invalido");
        document.getElementById("produto").value = "";
        totalprodutosnao = totalprodutosnao + 1;
        naoatendemreq.innerHTML = String(totalprodutosnao);
    }
    else if (precoproduto == "" || precoproduto <= 0) {
        window.alert("Digite um valor valido para o preço");
        document.getElementById("preco").value = "";
        totalprodutosnao = totalprodutosnao + 1;
        naoatendemreq.innerHTML = String(totalprodutosnao);
    }
    else {
        totalprodutos = totalprodutos + 1;
        totalpreco = totalpreco + parseFloat(precoproduto);
        resultado.innerHTML = String(totalpreco);
        atendemreq.innerHTML = String(totalprodutos);
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
        document.getElementById('produto').focus();
    }
}