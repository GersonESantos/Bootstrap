document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Valores fixos para simular autenticação
    const validEmail = "teste@example.com";
    const validPassword = "123456";

    // Captura os valores inseridos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Verifica se email e senha estão corretos
    if (email === validEmail && password === validPassword) {
        message.style.color = "green";
        message.textContent = "Login bem-sucedido! Bem-vindo!";
    } else {
        message.style.color = "red";
        message.textContent = "Email ou senha incorretos. Tente novamente.";
    }
});