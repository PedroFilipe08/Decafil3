function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'Decafil5' && password === '#Decafil2024@') {
        document.getElementById('login-page').style.display = 'none'; 
        document.getElementById('site-content').style.display = 'block';
    } else {
        errorMessage.textContent = 'Nome de usuário ou senha incorretos!';
    }
}
