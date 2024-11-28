const item = document.getElementById('input-item');
const botaoSalvarItem = document.getElementById('adicionar-item');

botaoSalvarItem.addEventListener('click', adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault();
    console.log('adicionar item');
}
