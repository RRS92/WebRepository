document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript carregado');

    const form = document.getElementById('form-servidor');
    if (form) {
        form.addEventListener('submit', function(event) {
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
            .then(response => response.json())
            .then(data => {
                alert('Servidor cadastrado com sucesso!');
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Erro ao cadastrar servidor:', error);
            });
        });
    } else {
        console.error('Formulário com ID "form-servidor" não encontrado.');
    }
});
