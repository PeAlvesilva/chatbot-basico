const chatBox2 = document.getElementById("chat-window-2");
const sendButton2 = document.getElementById("send-btn-2");
const userInput2 = document.getElementById("user-input-2");

// Função para conversão entre bases
function convertBase(userMessage) {
    const matches = userMessage.match(/(\w+)\s+de\s+(decimal|binário|binario|hexadecimal|octal)\s+para\s+(decimal|binário|binario|hexadecimal|octal)/i);
    if (!matches) {
        return "Desculpe, não consegui entender a conversão solicitada. Tente algo como: '10 de decimal para binário'.";
    }

    const number = matches[1];
    const fromBase = matches[2].toLowerCase();
    const toBase = matches[3].toLowerCase();

    // Define as bases
    const bases = {
        "decimal": 10,
        "binário": 2,
        "binario": 2,
        "hexadecimal": 16,
        "octal": 8
    };

    // Verifica se as bases fornecidas são válidas
    if (!(fromBase in bases)) {
        return `Base de origem '${fromBase}' inválida. Use: decimal, binário, hexadecimal ou octal.`;
    }

    if (!(toBase in bases)) {
        return `Base de destino '${toBase}' inválida. Use: decimal, binário, hexadecimal ou octal.`;
    }

    // Converte a entrada para decimal
    let decimalValue;
    try {
        decimalValue = parseInt(number, bases[fromBase]);
        if (isNaN(decimalValue)) {
            throw new Error();
        }
    } catch (e) {
        return `Não foi possível interpretar o número '${number}' na base ${fromBase}.`;
    }

    // Converte de decimal para a base desejada
    let convertedValue;
    try {
        convertedValue = decimalValue.toString(bases[toBase]);
    } catch (e) {
        return `Não foi possível converter para a base ${toBase}.`;
    }

    return `O número <b>${number}</b> na base <b>${fromBase}</b> é equivalente a <b>${convertedValue}</b> na base <b>${toBase}</b>.`;
}

// Adiciona mensagens ao chat
function addMessage2(message, className) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(className);
    messageElement.innerHTML = message; // Permite HTML
    chatBox2.appendChild(messageElement);
    chatBox2.scrollTop = chatBox2.scrollHeight; // Rola para o final
}

// Evento de clique para enviar mensagens
sendButton2.addEventListener("click", () => {
    const userMessage = userInput2.value.trim();
    if (userMessage) {
        addMessage2(userMessage, "user-message");
        const response = convertBase(userMessage);
        setTimeout(() => addMessage2(response, "bot-message"), 500);
        userInput2.value = "";
    }
});

// Evento de "Enter" para enviar mensagens
userInput2.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendButton2.click();
    }
});
