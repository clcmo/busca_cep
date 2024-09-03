document.getElementById('cepForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cep = document.getElementById('cep').value;

    if (cep.length !== 8) {
        alert('O CEP deve conter 8 dígitos.');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado.');
                return;
            }
            document.getElementById('logradouro').textContent = data.logradouro;
            document.getElementById('bairro').textContent = data.bairro;
            document.getElementById('localidade').textContent = data.localidade;
            document.getElementById('uf').textContent = data.uf;
        })
        .catch(error => {
            alert('Erro ao buscar o CEP.');
            console.error('Erro:', error);
        });
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('cep').value = '';
    document.getElementById('logradouro').textContent = '';
    document.getElementById('bairro').textContent = '';
    document.getElementById('localidade').textContent = '';
    document.getElementById('uf').textContent = '';
});