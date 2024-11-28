const item = document.getElementById('input-item');
const botaoSalvarItem = document.getElementById('adicionar-item');
const listaDeCompras = document.getElementById('lista-de-compras');

botaoSalvarItem.addEventListener('click', adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault();
   
    const itemDaLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('lista-item-container');

    const containerNomeDoItem = document.createElement('div');
    const nomeDoItem = document.createElement('p');
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement('div');
    const botoaRemover = document.createElement('button');
    botoaRemover.classList.add('item-lista-button');
    const botoaEditar = document.createElement('button');
    botoaEditar.classList.add('item-lista-button');

    const imagemRemover = document.createElement('img');
    imagemRemover.src = 'img/delete.svg';
    imagemRemover.alt = 'Remover';

    const imagemEditar = document.createElement('img');
    imagemEditar.src = 'img/edit.svg';
    imagemEditar.alt = 'Editar';

    botoaRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botoaRemover);
    botoaEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botoaEditar);
    

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);
}