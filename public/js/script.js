document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const usersTableBody = document.querySelector('#usersTable tbody');

    // Função para buscar usuários e preencher a tabela
    async function fetchUsers() {
        try {
            const response = await fetch('/users');
            const users = await response.json();
            usersTableBody.innerHTML = ''; // Limpar a tabela

            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nome}</td>
                    <td>${user.email}</td>
                `;
                usersTableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
    }

    // Função para criar um novo usuário
    async function createUser(userData) {
        try {
            const response = await fetch('/users/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            const result = await response.json();
            if (response.ok) {
                alert('Usuário criado com sucesso!');
                form.reset(); // Limpar o formulário
                fetchUsers(); // Atualizar a tabela
            } else {
                alert('Erro ao criar usuário: ' + result.message);
            }
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
        }
    }

    // Evento de envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userData = {
            nome: form.nome.value,
            email: form.email.value,
            senha: form.senha.value
        };
        createUser(userData);
    });

    // Buscar e exibir os usuários ao carregar a página
    fetchUsers();
});
