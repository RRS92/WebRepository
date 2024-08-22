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

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o evento ao botão para buscar servidores
    document.getElementById('btn-fetch-servidores').addEventListener('click', function() {
        fetchServidores();
    });

    // Função para buscar e exibir os servidores
    function fetchServidores() {
        fetch('http://localhost:8080/servidor')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar servidores: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Servidores:', data);
                displayServidores(data);
            })
            .catch(error => {
                console.error('Erro ao buscar servidores:', error);
            });
    }

    // Função para exibir servidores na página
    function displayServidores(servidores) {
        const servidorList = document.getElementById('servidor-list');
        servidorList.innerHTML = '';

        servidores.forEach(servidor => {
            const listItem = document.createElement('li');
            listItem.textContent = `Nome: ${servidor.nome}, SIAPE: ${servidor.siape}, CPF: ${servidor.CPF}, RG: ${servidor.RG}, Idade: ${servidor.idade}, Email: ${servidor.email}, Cargo: ${servidor.cargo}`;
            servidorList.appendChild(listItem);
        });
    }
});

