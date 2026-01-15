const chatBox3 = document.getElementById("chat-window-3");
const sendButton3 = document.getElementById("send-btn-3");
const userInput3 = document.getElementById("user-input-3");

// Função para conversão automática de números
function convertNumber(userMessage3) {
    const matches = userMessage3.match(/(\w+)\s*(dec|bin|hex|oct)/i); // Captura número e base
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
    chatBox3.appendChild(messageElement);
    chatBox3.scrollTop = chatBox3.scrollHeight; // Rola para o final
}

// Evento de clique para enviar mensagens
sendButton3.addEventListener("click", () => {
    const userMessage3 = userInput3.value.trim();
    if (userMessage3) {
        addMessage1(userMessage3, "user-message3");
        const response = convertNumber(userMessage3);
        setTimeout(() => addMessage1(response, "bot-message3"), 500);
        userInput3.value = "";
    }
});

// Evento de "Enter" para enviar mensagens
userInput3.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendButton3.click();
    }
});
