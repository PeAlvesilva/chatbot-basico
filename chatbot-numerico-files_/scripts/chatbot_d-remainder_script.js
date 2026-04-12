const sendButton2 = document.getElementById("send-btn-2");

function calculate() {
    var numerator = document.getElementById("numerator").value;
    var denominator = document.getElementById("denominator").value;
    var chatBox = document.getElementById("chat-window-2");

    // Exibe a mensagem do usuário
    var userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = "Dividir " + numerator + " por " + denominator;
    chatBox.appendChild(userMessage);
 
    // Função que cria a resposta do bot com atraso 
    setTimeout(function () {
        if (numerator && denominator && denominator != 0) {
            var result = Math.floor(numerator / denominator);
            var remainder = numerator % denominator;

            // Exibe a resposta do bot
            var botMessage = document.createElement("div");
            botMessage.classList.add("bot-message2");
            botMessage.innerHTML = `Resultado: <strong>${result}</strong>, Resto da divisão: <strong>${remainder}</strong>`;
            
            chatBox.appendChild(botMessage);
        } else if (denominator == 0) {
            // Caso o divisor seja zero
            var botMessage = document.createElement("div");
            botMessage.classList.add("bot-message2");
            botMessage.innerHTML = "<strong>Erro: Não é possível dividir por zero!</strong>";
            chatBox.appendChild(botMessage);
        } else {
            var botMessage = document.createElement("div");
            botMessage.classList.add("bot-message2");
            botMessage.textContent = "Por favor, insira números válidos!";
            chatBox.appendChild(botMessage);
        }

        // Rola a janela de chat para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    // Limpa os campos de entrada
    document.getElementById("numerator").value = '';
    document.getElementById("denominator").value = '';
}

// Evento de "Enter" para enviar mensagens
numerator.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendButton2.click();
    }
});

denominator.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendButton2.click();
    }
}); 

// Evento de clique para o botão de enviar

sendButton2.addEventListener("click", () => {
    calculate();
    touchCalculateBtn();
});