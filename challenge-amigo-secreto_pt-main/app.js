let listaDeAmigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    
    if (nome == '') {
        return alert('Por favor, insira um nome.');
    } else if (listaDeAmigos.includes(nome)) {
        return alert('Este nome já foi adicionado.');
    } else {
        listaDeAmigos.push(nome);
    }
    limparCampo()
    exibirListaDeAmigos();
}

function limparCampo() {
    let campoNome = document.querySelector('input');
    campoNome.value = '';
}

function exibirListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    // Loop para iterar sobre o array e criar elementos <li> para cada amigo
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let elementoLista = document.createElement('li'); // O método createElement() cria um elemento <li>
        elementoLista.innerHTML = listaDeAmigos[i];
        lista.appendChild(elementoLista); // O método appendChild adiciona o elemento <li> ao final do elemento selecionado na linha 21 (lista)
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        return alert('Nenhum amigo encontrado.')
    }

    let numeroAleatorio = parseInt(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[numeroAleatorio];

    let resultadoSorteio = document.getElementById('resultado');
    resultadoSorteio.innerHTML = '';

    let elementoResultado = document.createElement('li');
    elementoResultado.innerHTML = amigoSorteado;
    resultadoSorteio.appendChild(elementoResultado);
    
}

    
