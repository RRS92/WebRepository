document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-servidor').addEventListener('submit', function(event) {
        event.preventDefault();

        const servidor = {
            siepe: document.getElementById('siepe').value,
            cargo: document.getElementById('cargo').value,
            nome: document.getElementById('nome').value,
            CPF: document.getElementById('cpf').value,
            RG: document.getElementById('rg').value,
            dataNascimento: document.getElementById('dataNascimento').value,
            telefone: document.getElementById('telefone').value,
            email: document.getElementById('email').value,
            
            estado: document.getElementById('estado').value,
            cidade: document.getElementById('cidade').value,
            cep: document.getElementById('cep').value,
            bairro: document.getElementById('bairro').value,
            rua: document.getElementById('rua').value,
            numero: document.getElementById('numero').value,
            complemento: document.getElementById('complemento').value,

            nomeBanco: document.getElementById('nomeBanco').value,
            numConta: document.getElementById('numConta').value,
            agencia: document.getElementById('agencia').value,
            operacao: document.getElementById('operacao').value
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