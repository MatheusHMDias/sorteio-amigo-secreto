let listaAmigos = [];

function adicionarAmigo() {
    nome = document.querySelector('input').value;
    
    if (nome == '') {
        return alert('Por favor, insira um nome.');
    } else {
        listaAmigos.push(nome);
    }
    limparCampo()
    exibirListaDeAmigos();
}

function limparCampo() {
    campoNome = document.querySelector('input');
    campoNome.value = '';
}

function exibirListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    // Loop para iterar sobre o array e criar elementos <li> para cada amigo
    for (let i = 0; i < listaAmigos.length; i++) {
        let elementoLista = document.createElement('li'); // O método createElement() cria um elemento <li>
        elementoLista.innerHTML = listaAmigos[i];
        lista.appendChild(elementoLista); // O método appendChild adiciona o elemento <li> ao final do elemento selecionado na linha 21 (lista)
    }
}

    
