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
                headers: { 'Content-Type': 'application/json' 
                },
                body: JSON.stringify(cadClientesForm)
            });

            const result = await response.json();

            if (response.ok) {
                // Exibe o modal de sucesso
                document.getElementById("modal-sucesso").style.display = "flex";

                document.getElementById("cad_clientes_form").reset();
            } else {
                document.getElementById("modal-erro").style.display = "flex";
                /*console.error('Erro ao cadastrar cliente:', response.statusText);*/
            }
        } catch (error) {
            console.error('Erro ao conectar com o servidor:', error);
        }
    });
});


document.querySelector("#busca_clientes").addEventListener("click", async (event) => {
    event.preventDefault();

    const cnpjCliente = document.querySelector("#cnpjPesquisaCliente").value;

    if (!cnpjCliente) {
        alert("Por favor, insira o CNPJ ou CPF!");
        return;
    }

    try {
        const response = await fetch("/clientes/buscar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cnpjCliente }),
        });

        if (response.ok) {
            const rows = await response.json();
            const tableBody = document.querySelector("#clientes-results");
            tableBody.innerHTML = "";  // Limpa a tabela antes de adicionar os novos resultados

            rows.forEach((cliente) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${cliente.razao_cliente}</td>
                    <td>${cliente.cnpj_cpf_cliente}</td>
                    <td>${cliente.inscricao_cliente}</td>
                    <td>${cliente.nomeFantasia_cliente}</td>
                    <td>${cliente.cep_cliente}</td>
                    <td>${cliente.estado_cliente}</td>
                    <td>${cliente.cidade_cliente}</td>
                    <td>${cliente.bairro_cliente}</td>
                    <td>${cliente.numero_cliente}</td>
                    <td>${cliente.contato1_cliente}</td>
                    <td>${cliente.contato2_cliente}</td>
                    <td>${cliente.email_cliente}</td>
                    <td>${cliente.obs_cliente}</td>
                `;
                tableBody.appendChild(row);
            });
        } else {
            const error = await response.text();
            alert(error);
        }
    } catch (error) {
        console.error("Erro ao buscar cliente:", error);
        alert("Erro ao buscar cliente");
    }
});

// Fecha o modal quando o botão "OK" for clicado
document.getElementById("fechar-modal").addEventListener("click", function () {
    document.getElementById("modal-sucesso").style.display = "none";
});

// Fecha o modal quando o botão "OK" for clicado
document.getElementById("fechar-modal-erro").addEventListener("click", function () {
    document.getElementById("modal-erro").style.display = "none";
});

document.getElementById("back-btn").addEventListener("click", function () {
    window.location.href = "/login"; // Substitua "/home" pela rota da sua página principal
});