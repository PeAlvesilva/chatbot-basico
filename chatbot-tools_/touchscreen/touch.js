function touchSendbtn() {
  sendButton.addEventListener("touchstart", () => {
    sendButton.style.backgroundColor = "#0056b3"; // Cor de fundo ao clicar
  });

  sendButton.addEventListener("touchend", () => {
    sendButton.style.backgroundColor = "#007bff"; // Restaura a cor original
  });
}

function touchSidebarbtn() {
  sidebarBtn.addEventListener("touchstart", () => {
    sidebarBtn.style.backgroundColor = "#c7c7c7"; // Cor de fundo ao clicar
  });

  sidebarBtn.addEventListener("touchend", () => {
    sidebarBtn.style.backgroundColor = "#333"; // Restaura a cor original
  });
}

function touchAjudaBtn() {
  ajudaButton.addEventListener("touchstart", () => {
    ajudaButton.style.backgroundColor = "#ff4141"; // Cor de fundo ao clicar
  });

  ajudaButton.addEventListener("touchend", () => {
    ajudaButton.style.backgroundColor = "#333"; // Restaura a cor original
  });
}

function touchInstallBtn() {
  installAppBtn.addEventListener("touchstart", () => {
    installAppBtn.style.backgroundColor = "#0a66b1"; // Cor de fundo ao clicar
  });

  installAppBtn.addEventListener("touchend", () => {
    installAppBtn.style.backgroundColor = "#2196f3"; // Restaura a cor original
  });
}

function touchNovidadesBtn() {
  novidadesBtn.addEventListener("touchstart", () => {
    novidadesBtn.style.backgroundColor = "#33fff5"; // Cor de fundo ao clicar
  });

    novidadesBtn.addEventListener("touchend", () => {
      novidadesBtn.style.backgroundColor = "#333"; // Restaura a cor original
      novidadesBtn.style.color = "#ffffff"; // Muda a cor do texto para melhor contraste
    });
}

function touchCalculateBtn() {
  calculateBtn.addEventListener("touchstart", () => {
    calculateBtn.style.backgroundColor = "#28a745"; // Cor de fundo ao clicar
  });

    calculateBtn.addEventListener("touchend", () => {
      calculateBtn.style.backgroundColor = "#00ff8c"; // Restaura a cor original
    });
}

function touchConvertBtn() {
  convertBtn.addEventListener("touchstart", () => {
    convertBtn.style.backgroundColor = "#28a745"; // Cor de fundo ao clicar
  });

    convertBtn.addEventListener("touchend", () => {
      convertBtn.style.backgroundColor = "#00ff8c"; // Restaura a cor original
    });
}
