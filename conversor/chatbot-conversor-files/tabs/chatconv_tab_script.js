function handleTab(tabId) {
    const chatBox = document.getElementById(`chat-window-${tabId}`);
    const sendButton = document.getElementById(`send-btn-${tabId}`);
    const userInput = document.getElementById(`user-input-${tabId}`);

    sendButton.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, "user-message", chatBox);
            const response = botResponse(userMessage);
            setTimeout(() => addMessage(response, "bot-message", chatBox), 500);
            userInput.value = "";
        }
    });

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendButton.click();
        }
    });
}

// Função para alternar as abas
function openTab(evt, tabName) {
    const tabContent = document.querySelectorAll(".tab-content");
    const tabLinks = document.querySelectorAll(".tablinks");

    // Esconder todas as abas
    tabContent.forEach(tab => tab.style.display = "none");

    // Remover a classe 'active' dos botões
    tabLinks.forEach(link => link.classList.remove("active"));

    // Mostrar a aba selecionada
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");

    // Configurar o comportamento do chat na aba selecionada
    const tabId = tabName === "Aba1" ? 1 : 2;
    handleTab(tabId);
}

// Abrir a aba padrão
document.getElementById("defaultOpen").click();
