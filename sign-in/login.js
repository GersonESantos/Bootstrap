const themeButton = document.getElementById('themeButton');

// Função para atualizar o ícone do botão
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeButton.innerHTML = '🌙'; // Lua para dark
    } else {
        themeButton.innerHTML = '☀️'; // Sol para light ou auto (quando claro)
    }
}

// Função para alternar o tema
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const theme = item.getAttribute('data-theme');
        if (theme === 'auto') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
            updateThemeIcon(prefersDark ? 'dark' : 'light');
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme);
            updateThemeIcon(theme);
        }
    });
});

// Verifica o tema do sistema ao carregar (para "Auto" ou inicial)
const currentTheme = document.documentElement.getAttribute('data-bs-theme');
if (currentTheme === 'auto') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
    updateThemeIcon(prefersDark ? 'dark' : 'light');
} else {
    updateThemeIcon(currentTheme);
}