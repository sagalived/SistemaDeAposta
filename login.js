function login(event) {
    event.preventDefault(); // Impede que o formulário seja enviado
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Simulação de login bem-sucedido (substitua pela lógica real de login)
    if (username === "admin" && password === "123") {
      alert("Login bem-sucedido! Redirecionando para a tela de jogos...");
      // Adicione aqui o código para redirecionar para a tela de jogos
      window.location.href = "jogos.html";
    } else {
      alert("Usuário ou senha incorretos. Tente novamente!");
    }
  }
  