document.addEventListener('DOMContentLoaded', () => {
    const formClientes = document.getElementById('cad_clientes_form');

    formClientes.addEventListener('submit', async (e) => {
        e.preventDefault();

        const cadClientesForm = {
            razaoCliente: formClientes.razaoCliente.value,
            cnpjCliente: formClientes.cnpjCliente.value,
            inscricaoCliente: formClientes.inscricaoCliente.value,
            nomeFantasiaCliente: formClientes.nomeFantasiaCliente.value,
            cepCliente: formClientes.cepCliente.value,
            estadoCliente: formClientes.estadoCliente.value,
            cidadeCliente: formClientes.cidadeCliente.value,
            bairroCliente: formClientes.bairroCliente.value,
            numeroCliente: formClientes.numeroCliente.value,
            contato1Cliente: formClientes.contato1Cliente.value,
            contato2Cliente: formClientes.contato2Cliente.value,
            emailCliente: formClientes.emailCliente.value,
            observacaoCliente: formClientes.observacaoCliente.value
        };
        try {
            const response = await fetch('/clientes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cadClientesForm)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Cliente cadastrado com sucesso:', result);
            } else {
                console.error('Erro ao cadastrar cliente:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao conectar com o servidor:', error);
        }
    });
});