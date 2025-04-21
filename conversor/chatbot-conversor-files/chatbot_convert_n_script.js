const chatBox1 = document.getElementById("chat-window-1");
const sendButton1 = document.getElementById("send-btn-1");
const userInput1 = document.getElementById("user-input-1");

// Função para conversão automática de números
function convertNumber(userMessage) {
    const matches = userMessage.match(/(\w+)\s*(dec|bin|hex|oct)/i); // Captura número e base
    if (!matches) {
        return "Formato inválido. Tente algo como '101 bin' ou '255 dec'.";
    }

    const number = matches[1]; // O número fornecido
    const base = matches[2].toLowerCase(); // A base do número

    // Mapear bases suportadas
    const bases = {
        "dec": 10,
        "bin": 2,
        "hex": 16,
        "oct": 8,
    };

    if (!(base in bases)) {
        return "Base inválida. Use 'dec' (decimal), 'bin' (binário), 'hex' (hexadecimal) ou 'oct' (octal).";
    }

    // Converter o número para decimal
    let decimalValue;
    try {
        decimalValue = parseInt(number, bases[base]);
        if (isNaN(decimalValue)) {
            throw new Error();
        }
    } catch {
        return `Não foi possível interpretar o número '${number}' na base ${base}.`;
    }

    // Retornar o número em todas as bases
    return `
        Número original: <b>${number}</b> (base ${base})<br>
        Decimal: <b>${decimalValue}</b><br>
        Binário: <b>${decimalValue.toString(2)}</b><br>
        Octal: <b>${decimalValue.toString(8)}</b><br>
        Hexadecimal: <b>${decimalValue.toString(16).toUpperCase()}</b>
    `;
}

// Adiciona mensagens ao chat
function addMessage1(message, className) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(className);
    messageElement.innerHTML = message; // Permite HTML
    chatBox1.appendChild(messageElement);
    chatBox1.scrollTop = chatBox1.scrollHeight; // Rola para o final
}

// Evento de clique para enviar mensagens
sendButton1.addEventListener("click", () => {
    const userMessage = userInput1.value.trim();
    if (userMessage) {
        addMessage1(userMessage, "user-message");
        const response = convertNumber(userMessage);
        setTimeout(() => addMessage1(response, "bot-message"), 500);
        userInput1.value = "";
    }
});

// Evento de "Enter" para enviar mensagens
userInput1.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendButton1.click();
    }
});
