/*Quando o usuário preenche os campos e clica no botão "Entrar":
O evento de envio do formulário (submit) é capturado pelo scriptLogin.js*/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    // Impede o envio padrão do formulário (refresh da página)
    e.preventDefault();
    form.addEventListener('submit', async (e) => {
      // Captura os dados do formulário
      const loginForm = {
        login: form.login.value,
        senha: form.senha.value
      };

      try {
        // Envia os dados para o servidor
        const response = await fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginForm), // Converte os dados em JSON
        });

      } catch (error) {
        // Lida com erros inesperados
        console.error('Erro ao tentar fazer login:', error);
        const feedback = document.getElementById('feedback');
        feedback.textContent = 'Erro no servidor. Tente novamente mais tarde.';
        feedback.style.color = 'red';
      }
    });
  });


  