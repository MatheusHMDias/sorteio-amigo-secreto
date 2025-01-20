let listaAmigos = [];

function adicionarAmigo() {
    nome = document.querySelector('input').value;
    
    if (nome == '') {
        return alert('Por favor, insira um nome.');
    } else {
        listaAmigos.push(nome);
    }
    limparCampo()
    console.log(listaAmigos);
}

function limparCampo() {
    campoNome = document.querySelector('input');
    campoNome.value = '';
}
