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

// Submit do formulário
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('floatingInput').value.trim();
    const password = document.getElementById('floatingPassword').value.trim();
    const messageDiv = document.getElementById('message');

    if (!email || !password) {
        messageDiv.className = 'mt-3 text-danger text-center';
        messageDiv.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Simulação de login com fetch
    fetch(`http://localhost:3000/login?email=${encodeURIComponent(email)}`)
        .then(response => {
            if (!response.ok) throw new Error(`Status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            if (!data || data.length === 0) {
                messageDiv.className = 'mt-3 text-danger text-center';
                messageDiv.textContent = 'Email não encontrado.';
                return;
            }

            const user = data[0];
            if (user.passwrd !== password) {
                messageDiv.className = 'mt-3 text-danger text-center';
                messageDiv.textContent = 'Senha incorreta.';
                return;
            }

            messageDiv.className = 'mt-3 text-success text-center';
            messageDiv.textContent = `Bem-vindo(a), ${user.username}!`;
            setTimeout(() => {
                window.location.href = 'dashboard.html'; // Redireciona após login
            }, 1000);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            messageDiv.className = 'mt-3 text-danger text-center';
            messageDiv.textContent = 'Erro ao conectar ao servidor.';
        });
});