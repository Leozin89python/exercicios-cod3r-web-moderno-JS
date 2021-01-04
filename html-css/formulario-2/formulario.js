function cadastroProduto(){
    var produtoDescricao  = document.getElementById('produtoDescricao')
    var produtoQuantidade = document.getElementById('produtoQuantidade')

    var enviar = JSON.parse(localStorage.getItem('_Dados'))

    if(enviar == null){
        localStorage.setItem('_Dados',[])
        enviar = []
    }

    var registro = {
        descricao: produtoDescricao.value,
        quantidade: produtoQuantidade.value
    }

    enviar.push(registro)
    localStorage.setItem('_Dados',JSON.stringify(enviar))
}