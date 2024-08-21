document.getElementById('form-servidor').addEventListener('submit', function(event) {
    event.preventDefault();

    const servidor = {
        nome: document.getElementById('nome').value,
        siape: document.getElementById('siape').value,
        cpf: document.getElementById('cpf').value,
        rg: document.getElementById('rg').value,
        idade: document.getElementById('idade').value,
        email: document.getElementById('email').value,
        cargo: document.getElementById('cargo').value
    };

    fetch('http://localhost:8080/servidor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(servidor)
    })
    .then(response => {
        if (response.ok) {
            alert('Servidor cadastrado com sucesso!');
        } else {
            throw new Error('Erro ao cadastrar servidor.');
        }
    })
    .catch(error => {
        console.error('Erro ao cadastrar servidor:', error);
    });
});
