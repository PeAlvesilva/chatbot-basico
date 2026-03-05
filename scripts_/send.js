sendButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    const notification = document.getElementById('notification');

    if (userMessage) {
        addMessage(userMessage, "user-message"); // Mensagem do usuário
        const response = botResponse(userMessage);
        setTimeout(() => addMessage(response, "bot-message", true), 500); // Mensagem do bot
        userInput.value = ""; // Limpa o campo de entrada
        notification.style.display = 'none';
    } 
});

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendButton.click();
    }
});