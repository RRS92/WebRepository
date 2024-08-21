document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-servidor').addEventListener('submit', function(event) {
        event.preventDefault();

        const servidor = {
            nome: document.getElementById('nome').value,
            siape: document.getElementById('siape').value,
            CPF: document.getElementById('cpf').value,  // Atualizado para maiúsculas
            RG: document.getElementById('rg').value,   // Atualizado para maiúsculas
            idade: parseInt(document.getElementById('idade').value, 10),  // Assegure-se de que é um número
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
            if (!response.ok) {
                throw new Error('Erro ao cadastrar servidor: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            alert('Servidor cadastrado com sucesso!');
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Erro ao cadastrar servidor:', error);
        });
    });
});

