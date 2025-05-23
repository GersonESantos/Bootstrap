// Mostrar/esconder senha
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('floatingPassword');

togglePassword.addEventListener('mousedown', () => {
    passwordInput.type = 'text';
    togglePassword.textContent = '👁️‍🗨️';
});

togglePassword.addEventListener('mouseup', () => {
    passwordInput.type = 'password';
    togglePassword.textContent = '👁️';
});

togglePassword.addEventListener('mouseleave', () => {
    passwordInput.type = 'password';
    togglePassword.textContent = '👁️';
});

// Usuários simulados (como se fosse o backend local)
const usuarios = [
    {
        email: "admin@example.com",
        passwrd: "123456",
        username: "Administrador"
    },
    {
        email: "joao@teste.com",
        passwrd: "senha123",
        username: "João Silva"
    }
];

// Submit do formulário
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('floatingInput').value.trim();
    const password = document.getElementById('floatingPassword').value.trim();
    const messageDiv = document.getElementById('message');

    // Limpa mensagem anterior
    messageDiv.textContent = "";

    if (!email || !password) {
        messageDiv.className = 'mt-3 text-danger text-center';
        messageDiv.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Simula busca por usuário
    const usuarioEncontrado = usuarios.find(u => u.email === email);

    if (!usuarioEncontrado) {
        messageDiv.className = 'mt-3 text-danger text-center';
        messageDiv.textContent = 'Email não encontrado.';
        return;
    }

    if (usuarioEncontrado.passwrd !== password) {
        messageDiv.className = 'mt-3 text-danger text-center';
        messageDiv.textContent = 'Senha incorreta.';
        return;
    }

    // Login bem-sucedido
    messageDiv.className = 'mt-3 text-success text-center';
    messageDiv.textContent = `Bem-vindo(a), ${usuarioEncontrado.username}!`;

    // Redireciona após 1.5 segundos (simulação)
    setTimeout(() => {
        window.location.href = 'dashboard.html'; // Página após login
    }, 1500);
});