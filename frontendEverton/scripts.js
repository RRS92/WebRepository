document.querySelector('form').addEventListener('submit', function(event) {
    const senha = document.querySelector('#senha').value;
    const confirmarSenha = document.querySelector('#confirmarSenha').value;

    if (senha !== confirmarSenha) {
        event.preventDefault();
        alert('As senhas não coincidem!');
    }
});
