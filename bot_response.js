function botResponse(userMessage) {
    let botMessage = "";
    
    // Dicionário de respostas pré-definidas
    const responses = {
        "olá": "Olá! Como posso ajudar você hoje?",
        "ola": "Olá! Como posso ajudar você hoje?",
        "oi": "Oi! Como posso ajudar você hoje?",
        "ciência": "Ciência é o estudo do mundo natural por meio da observação e experimentação.",
        "ciencia": "Ciência é o estudo do mundo natural por meio da observação e experimentação.",
        "tecnologia": "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.",
        "moda": "A moda reflete as tendências culturais e expressa a identidade das pessoas. Ela vai além do vestuário, abrangendo estilos de vida e comportamento. O design de moda está em constante evolução, adaptando-se às demandas e gostos da sociedade moderna.",
        "esporte":"Os esportes incentivam a competição saudável, o trabalho em equipe e a superação pessoal. Das modalidades tradicionais às novas formas de esporte eletrônico, a prática esportiva continua a evoluir, promovendo saúde e entretenimento em todo o mundo.",
        "educação": "A educação é a chave para o desenvolvimento pessoal e social. Com o avanço da tecnologia, o aprendizado se tornou mais acessível e interativo, permitindo que mais pessoas tenham a oportunidade de expandir seus horizontes.",
        "educacão": "A educação é a chave para o desenvolvimento pessoal e social. Com o avanço da tecnologia, o aprendizado se tornou mais acessível e interativo, permitindo que mais pessoas tenham a oportunidade de expandir seus horizontes.",
        "educaçao": "A educação é a chave para o desenvolvimento pessoal e social. Com o avanço da tecnologia, o aprendizado se tornou mais acessível e interativo, permitindo que mais pessoas tenham a oportunidade de expandir seus horizontes.",
        "educacao": "A educação é a chave para o desenvolvimento pessoal e social. Com o avanço da tecnologia, o aprendizado se tornou mais acessível e interativo, permitindo que mais pessoas tenham a oportunidade de expandir seus horizontes.",
        "saúde": "A saúde é essencial para o bem-estar e qualidade de vida. Inovações em medicina e ciência da saúde continuam a transformar a forma como tratamos e prevenimos doenças, proporcionando maior longevidade e qualidade de vida para as pessoas.",
        "saude": "A saúde é essencial para o bem-estar e qualidade de vida. Inovações em medicina e ciência da saúde continuam a transformar a forma como tratamos e prevenimos doenças, proporcionando maior longevidade e qualidade de vida para as pessoas.",
        "música": "A música tem o poder de evocar emoções e conectar pessoas de diferentes culturas. De ritmos tradicionais a gêneros inovadores, a música continua a ser uma forma de arte vibrante e expressiva que ressoa em todo o mundo.",
        "musica": "A música tem o poder de evocar emoções e conectar pessoas de diferentes culturas. De ritmos tradicionais a gêneros inovadores, a música continua a ser uma forma de arte vibrante e expressiva que ressoa em todo o mundo.",
        "livro": "Os livros são uma excelente fonte de conhecimento e entretenimento. Eles podem nos transportar para mundos imaginários ou nos ensinar sobre a história, ciência, cultura e muito mais.",
        "filme": "Os filmes são uma forma poderosa de arte e entretenimento, capazes de contar histórias emocionantes e profundas, além de explorar diferentes aspectos da sociedade e da psicologia humana.",
        "arte": "A arte é uma forma de expressão humana que pode ser visual, sonora ou performática. Ela reflete as emoções, pensamentos e contextos culturais de diferentes períodos e lugares.",
        "história": "A história é o estudo do passado da humanidade, ajudando-nos a compreender as origens de nossa sociedade, cultura e civilização, além de nos ensinar valiosas lições para o futuro.",
        "historia": "A história é o estudo do passado da humanidade, ajudando-nos a compreender as origens de nossa sociedade, cultura e civilização, além de nos ensinar valiosas lições para o futuro.",
        "natureza": "A natureza é o conjunto de tudo o que existe no mundo natural, incluindo plantas, animais, montanhas, rios e o ar. Preservá-la é fundamental para a saúde do planeta e das futuras gerações.",
        "viajar": "Viajar é uma forma maravilhosa de explorar novos lugares, culturas e pessoas. Além de proporcionar aprendizado, as viagens também podem ser uma excelente forma de descanso e lazer.",
        "alimentação": "A alimentação saudável é crucial para manter o corpo funcionando adequadamente. Uma dieta equilibrada, rica em nutrientes, pode melhorar a qualidade de vida e a saúde geral.",
        "alimentaçao": "A alimentação saudável é crucial para manter o corpo funcionando adequadamente. Uma dieta equilibrada, rica em nutrientes, pode melhorar a qualidade de vida e a saúde geral.",
        "alimentacão": "A alimentação saudável é crucial para manter o corpo funcionando adequadamente. Uma dieta equilibrada, rica em nutrientes, pode melhorar a qualidade de vida e a saúde geral.",
        "alimentacao": "A alimentação saudável é crucial para manter o corpo funcionando adequadamente. Uma dieta equilibrada, rica em nutrientes, pode melhorar a qualidade de vida e a saúde geral.",
        "internet": "A internet transformou o mundo em um lugar mais conectado. Ela proporciona acesso a uma infinidade de informações, facilita a comunicação e tem um impacto profundo na forma como trabalhamos, aprendemos e interagimos.",
        "clima": "O clima refere-se ao padrão médio de condições atmosféricas de uma região ao longo do tempo. Mudanças climáticas podem afetar ecossistemas e sociedades de várias maneiras.",
        "astronomia": "A astronomia é a ciência que estuda o universo, os corpos celestes como estrelas, planetas e galáxias, e os fenômenos que ocorrem fora da atmosfera terrestre.",
        "filosofia": "A filosofia busca entender questões fundamentais sobre a existência, o conhecimento, a moralidade e o raciocínio. Filósofos têm explorado esses temas por milênios, oferecendo diversas perspectivas sobre a vida e o mundo.",
        "psicologia": "A psicologia é o estudo do comportamento e dos processos mentais. Ela explora como as pessoas pensam, sentem e agem em diferentes situações e contextos.",
        "religião": "A religião envolve crenças, práticas e sistemas de valores relacionados ao divino ou ao sobrenatural. Ela desempenha um papel importante na formação de culturas e na busca por significado na vida.",
        "religiao": "A religião envolve crenças, práticas e sistemas de valores relacionados ao divino ou ao sobrenatural. Ela desempenha um papel importante na formação de culturas e na busca por significado na vida.",
        "meditação": "A meditação é uma prática que envolve técnicas de relaxamento e foco mental, ajudando a reduzir o estresse, melhorar a saúde mental e promover o bem-estar geral.",
        "meditaçao": "A meditação é uma prática que envolve técnicas de relaxamento e foco mental, ajudando a reduzir o estresse, melhorar a saúde mental e promover o bem-estar geral.",
        "meditacão": "A meditação é uma prática que envolve técnicas de relaxamento e foco mental, ajudando a reduzir o estresse, melhorar a saúde mental e promover o bem-estar geral.",
        "meditacao": "A meditação é uma prática que envolve técnicas de relaxamento e foco mental, ajudando a reduzir o estresse, melhorar a saúde mental e promover o bem-estar geral.",
        "teatro": "O teatro é uma forma de arte cênica em que atores interpretam personagens para um público. Ele pode ser uma poderosa ferramenta de reflexão social e uma maneira de contar histórias emocionantes.",
        "imagem": "Aqui está o exemplo de imagem: <br> <img src='conversor/chatbot-conversor-files/bot_icon-chatbot_conversor-high-resolution-logo-transparent.png' alt='Exemplo de imagem' width='200px' />",
        "video": "Assista ao vídeo: <br> <br> <iframe width='560' height='315' src='https://www.youtube.com/embed/VIDEO_ID' frameborder='0' allowfullscreen></iframe>",
        "vídeo": "Assista ao vídeo: <br> <br> <iframe width='560' height='315' src='https://www.youtube.com/embed/VIDEO_ID' frameborder='0' allowfullscreen></iframe>",
        "sen/30": "O seno de 30º na tabela trigonométrica é: 1/2",
        "sen/45": "O seno de 45º na tabela trigonométrica é: raiz quadrada de 2/2",
        "sen/60": "O seno de 60º na tabela trigonométrica é: raiz quadrada de 3/2",
        "cos/30": "O cosseno de 30º na tabela trigonométrica é: raiz quadrada de 3/2",
        "cos/45": "O cosseno de 45º na tabela trigonométrica é: 1/2",
        "cos/60": "O cosseno de 60º na tabela trigonométrica é: 1/2",
        "tan/30": "A tangente de 30º na tabela trigonométrica é: raiz quadrada de 3/3",
        "tan/45": "A tangente de 45º na tabela trigonométrica é: 1",
        "tan/60": "A tangente de 60º na tabela trigonométrica é: raiz quadrada de 3",
        "conversor": "<img src='conversor/chatbot-conversor-files/bot_icon-chatbot_conversor-high-resolution-logo-transparent.png' alt='chat. conv.' width='50px'> <br>Chatbot Conversor <br> <a href='conversor/index.html' target='_blank'>Clique para abrir o Chatbot Conversor</a>.",
        "como você está": "Eu sou apenas um chatbot, mas estou aqui para ajudar você!",
        "como você esta": "Eu sou apenas um chatbot, mas estou aqui para ajudar você!",
        "como voce esta": "Eu sou apenas um chatbot, mas estou aqui para ajudar você!",
        "obrigado": "De nada! Estou aqui para ajudar.",
        "ajuda": "Confira mais detalhes sobre o Chatbot: <a href='help/index.html' target='_blank'>Clique Aqui</a>.",
        "qual é o seu nome?": `Sou seu assistente virtual. E o seu nome, como posso chamá-lo? <br><br><div id="send-username-alert">Digite o seu nome abaixo e clique em [Enviar nome].</div><div id="false-display"></div><div id="input-area-for-username"><input type="text" id="user-input-for-username" placeholder="Digite o seu nome e clique em [Enviar nome]..."><div id="send-button-for-username" onclick="sendUsername()">Enviar nome</div></div>`,
        "horário": `Agora são <b>${new Date().toLocaleTimeString('pt-BR')}.</b>`,
        "horario": `Agora são <b>${new Date().toLocaleTimeString('pt-BR')}.</b>`,
        "hora": `Agora são <b>${new Date().toLocaleTimeString('pt-BR')}.</b>`,
        "data": `Hoje é <b>${new Date().toLocaleDateString('pt-BR')}.</b>`,
        "dia": `Hoje é <b>${new Date().toLocaleDateString('pt-BR')}.</b>`,
        "quem criou você?": "Fui criado por desenvolvedores talentosos como você!",
        "tchau": "Até logo! Se precisar, é só me chamar.",
        "amor": "O amor é um sentimento incrível, não acha? 💕",
        "inteligência artificial": "Inteligência Artificial é a capacidade das máquinas de aprender e realizar tarefas de maneira inteligente."
    };

    // Verifica se a mensagem é uma operação matemática ou funções trigonométricas/logaritmo
    if (isMathExpression(userMessage)) {
        try {
            if (userMessage.toLowerCase().includes("raiz quadrada de") || userMessage.toLowerCase().includes("raiz de")) {
                const number = parseFloat(userMessage.replace(/[^0-9.]/g, '')); 
                const result = Math.sqrt(number);
                botMessage = `A raiz quadrada de ${number} é: <b>${result}</b>`;
            } else if (userMessage.toLowerCase().includes("sen")) {
                const number = parseFloat(userMessage.replace(/[^0-9.]/g, ''));
                const result = Math.sin(number * Math.PI / 180); // Converte para radianos
                botMessage = `O seno de ${number}° é: <b>${result.toFixed(4)}</b>`;
            } else if (userMessage.toLowerCase().includes("cos")) {
                const number = parseFloat(userMessage.replace(/[^0-9.]/g, ''));
                const result = Math.cos(number * Math.PI / 180); // Converte para radianos
                botMessage = `O cosseno de ${number}° é: <b>${result.toFixed(4)}</b>`;
            } else if (userMessage.toLowerCase().includes("tan")) {
                const number = parseFloat(userMessage.replace(/[^0-9.]/g, ''));
                const result = Math.tan(number * Math.PI / 180); // Converte para radianos
                botMessage = `A tangente de ${number}° é: <b>${result.toFixed(4)}</b>`;
            } else if (userMessage.toLowerCase().includes("log")) {
                const number = parseFloat(userMessage.replace(/[^0-9.]/g, ''));
                const result = Math.log10(number); // Logaritmo base 10
                botMessage = `O logaritmo de ${number} é: <b>${result.toFixed(4)}</b>`;
            } else if (userMessage.toLowerCase().includes("y")) {  // Verificação de potenciação
                const numbers = userMessage.match(/[0-9.]+/g); // Extrai os números
                const base = parseFloat(numbers[0]);
                const exponent = parseFloat(numbers[1]);
                const result = Math.pow(base, exponent); // Cálculo da potenciação
                botMessage = `${base} elevado a ${exponent} é: <b>${result}</b>`;
            } else if (userMessage.toLowerCase().includes("% de")) { // Porcentagem
                const numbers = userMessage.match(/(\d+)\s*%\s*de\s*(\d+)/);
                if (numbers) {
                    const percentage = parseFloat(numbers[1]);
                    const total = parseFloat(numbers[2]);
                    const result = (percentage / 100) * total;
                    botMessage = `${percentage}% de ${total} é: <b>${result}</b>`;
                } else {
                    botMessage = "Desculpe, não entendi o cálculo de porcentagem. Tente algo como '20% de 50'.";
                }
            } else if (userMessage.toLowerCase().includes("fatorial de")) { // Fatorial
                const number = parseInt(userMessage.replace(/[^0-9]/g, ''), 10);
                if (number < 0) {
                    botMessage = "Fatorial não existe para números negativos.";
                } else {
                    const result = factorial(number);
                    botMessage = `O fatorial de ${number} é: <b>${result}</b>`;
                }
            } else if (userMessage.toLowerCase().includes("pi")) { // Pi
                const result = Math.PI;
                botMessage = `O valor de pi é: <b>${result}</b>`;
            } else {
                const result = Function("return (" + userMessage + ")")();
                botMessage = `O resultado de ${userMessage} é: <b>${result}</b>`;
            }
        } catch (error) {
            botMessage = "Desculpe, não consegui calcular a expressão. Verifique se ela está correta.";
        }
    } else {
        for (let keyword in responses) {
            if (userMessage.toLowerCase().includes(keyword)) {
                botMessage = responses[keyword];
                break;
            }
        }

        if (!botMessage) {
            botMessage = "Desculpe, não entendi sua mensagem. Pode repetir?";
        }
    }

    return botMessage;
}

// Função para calcular fatorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Função para verificar se a mensagem é uma expressão matemática ou funções trigonométricas/logaritmo
function isMathExpression(message) {
    return /^[0-9+\-*/().\s]+$/.test(message) || 
           /raiz quadrada de [0-9.]+/.test(message) || 
           /raiz de [0-9.]+/.test(message) || 
           /sen [0-9.]+/.test(message.toLowerCase()) || 
           /cos [0-9.]+/.test(message.toLowerCase()) ||
           /tan [0-9.]+/.test(message.toLowerCase()) ||
           /log [0-9.]+/.test(message.toLowerCase()) ||
           /[0-9.]+\s*y\s*[0-9.]+/.test(message.toLowerCase()) ||
           /[0-9.]+\s*%\s*de\s*[0-9.]+/.test(message.toLowerCase()) || // Verificação de porcentagem
           /fatorial de [0-9.]+/.test(message.toLowerCase()) || // Verificação de fatorial
           /pi/.test(message.toLowerCase()); // Verificação de pi
}


function botResponseforUN(nome) {
    const user = document.getElementById('user');

    if (user === userinputforUN) {  
            var botMessage1 = document.createElement("div");
            botMessage1.classList.add("bot-message1");
            botMessage1.textContent = `É um grande prazer em te conhecer, ${nome}!`;
            chatBox.appendChild(botMessage1);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

    return botMessage1;
}