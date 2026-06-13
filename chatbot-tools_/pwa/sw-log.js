if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./pwa/sw.js')
          .then(reg => console.log('Service Worker registrado:', reg.scope))
          .catch(err => console.error('Erro ao registrar o Service Worker:', err));
      });
    }

    document.getElementById('botao').addEventListener('click', () => {
      alert('Você clicou no botão!');
    });