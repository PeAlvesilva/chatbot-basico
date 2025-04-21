sendButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, "user-message"); // Mensagem do usuário
        const response = botResponse(userMessage);
        setTimeout(() => addMessage(response, "bot-message", true), 500); // Mensagem do bot
        userInput.value = ""; // Limpa o campo de entrada
    } 
});

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendButton.click();
    }
});