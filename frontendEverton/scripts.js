document.querySelector('form').addEventListener('submit', function(event) {
    const senha = document.querySelector('#senha').value;
    const confirmarSenha = document.querySelector('#confirmarSenha').value;

    if (senha !== confirmarSenha) {
        event.preventDefault();
        alert('As senhas não coincidem!');
    }
});

function showSection(type) {
    document.getElementById('aluno-info').style.display = type === 'aluno' ? 'block' : 'none';
    document.getElementById('servidor-info').style.display = type === 'servidor' ? 'block' : 'none';
}