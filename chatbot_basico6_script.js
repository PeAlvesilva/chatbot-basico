const chatBox = document.getElementById("chat-window");
const sendButton = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const inputareaforUN = document.getElementById('input-area-for-username');
const userinputforUN = document.getElementById('user-input-for-username'); 
const sendbuttonforUN = document.getElementById('send-button-for-username');
const sendusernameAlert = document.getElementById("send-username-alert");
const falseDisplay = document.getElementById("false-display");

 
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


        // função para facilitar o envio do nome do usuário ao chat:

        function addmessageforUN(content, sender) {
            const messageElement1 = document.createElement('div');
            messageElement1.classList.add('message', sender);
            messageElement1.textContent = content;
            document.getElementById('chat-window').appendChild(messageElement1);
            document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
          }

          // função para adicionar o nome do usuário:

          function sendUsername() {
            const userinputforUN = document.getElementById('user-input-for-username');
            const sendbuttonforUN = document.getElementById('send-button-for-username');
            const nome = userinputforUN.value.trim();
      
            if (nome) {
              // Desabilita a caixa de texto e o botão
              userinputforUN.disabled = true;
              sendbuttonforUN.disabled = true;
              sendbuttonforUN.textContent = 'Nome enviado';
      
              // Adiciona a mensagem do usuário ao chat
              addmessageforUN(nome, 'user');
      
              botResponseforUN(nome)
            }
          }

      function setWidth() {
        if (sendusernameAlert && falseDisplay) {
          if (window.innerWidth > 600) {
            sendusernameAlert.style.display = 'none';
            falseDisplay.style.display = 'block';
          } else {
            sendusernameAlert.style.display = 'block';
            falseDisplay.style.display = 'none';
          }
        }
      }

      window.addEventListener('resize', setWidth);
      setWidth();