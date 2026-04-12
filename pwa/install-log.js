let deferredPrompt;
  
    window.addEventListener('beforeinstallprompt', (e) => {
      // Impede o prompt automático
      e.preventDefault();
      // Salva o evento para usar depois
      deferredPrompt = e;
  
      // Mostra o botão de instalar
      const installBtn = document.getElementById('installAppBtn');
      installBtn.style.display = 'block';
  
      installBtn.addEventListener('click', async () => {
        installBtn.classList.add('fade-out'); // Adiciona classe para animação de fade-out
        setTimeout(() => {
          installBtn.style.display = 'none'; // Garante que o botão fique oculto após a animação
        }, 300); // Tempo da animação de fade-out
        deferredPrompt.prompt(); // Mostra o prompt de instalação
  
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          console.log('Usuário aceitou instalar');
        } else {
          console.log('Usuário recusou instalar');
        }
        deferredPrompt = null; // Limpa a referência
      });
    });