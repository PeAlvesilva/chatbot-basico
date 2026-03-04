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

carregarHTML("notification", "elements_/notification.html");