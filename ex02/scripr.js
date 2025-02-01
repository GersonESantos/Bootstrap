// script.js

// Adiciona um evento de clique ao link "Contato"
document.getElementById('linkContato').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    const contatoSection = document.getElementById('contato');
    if (contatoSection.style.display === 'none' || contatoSection.style.display === '') {
        contatoSection.style.display = 'block'; // Mostra a seção
    } else {
        contatoSection.style.display = 'none'; // Oculta a seção
    }
});