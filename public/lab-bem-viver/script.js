// Cria uma mensagem de boas-vindas const 
welcomeMessage = "Bem-vindo ao nosso site!";

// Exibe a mensagem no console do navegador 
console.log(welcomeMessage);

alert(welcomeMessage);

// Exemplo de como exibir a mensagem em um elemento HTML com a id "welcome-text" // Para usar este exemplo, você precisa ter um elemento no seu HTML com a id "welcome-text", // como <h1 id="welcome-text"></h1> const welcomeElement = document.getElementById("welcome-text"); if (welcomeElement) { welcomeElement.textContent = welcomeMessage; }