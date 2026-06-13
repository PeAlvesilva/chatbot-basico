const chatBox = document.getElementById("chat-window");
const sendButton = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');

 
        // Função para adicionar mensagens ao chat
        function addMessage(message, className, isBot = false) {
            const messageWrapper = document.createElement('div');
            messageWrapper.className = className;

            const messageContent = document.createElement('div');
            messageContent.className = 'message-content';
            if (isBot) {
                messageContent.innerHTML = message; // Permite HTML para links e imagens
            } else {
                messageContent.textContent = message;
            }

            messageWrapper.appendChild(messageContent);
            chatBox.appendChild(messageWrapper);

            // Rolagem automática para o final
            chatBox.scrollTop = chatBox.scrollHeight;
        }



      function digiteAjuda(value) {
      document.getElementById('user-input').value = value;
    }