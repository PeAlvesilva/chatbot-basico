function carregarHTML(id, arquivo) {
  fetch(arquivo)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => {
      console.error(`Erro ao carregar ${arquivo}`, err);
    });
}

carregarHTML("primeiro contato", "chatbot-basico-biblioteca/primeiro-contato.html");
carregarHTML("respostas predefinidas", "chatbot-basico-biblioteca/respostas-predefinidas.html");
carregarHTML("dia a dia", "chatbot-basico-biblioteca/dia-a-dia.html");
carregarHTML("exemplo de midia", "chatbot-basico-biblioteca/exemplo-midia.html");
carregarHTML("matematica basica", "chatbot-basico-biblioteca/matematica-basica.html");
carregarHTML("matematica avançada", "chatbot-basico-biblioteca/matematica-avançada.html");

carregarHTML("divisão com resto", "chatbot-numerico-biblioteca/divisao-com-resto.html");
carregarHTML("conversão de números", "chatbot-numerico-biblioteca/conversao-de-numeros.html");