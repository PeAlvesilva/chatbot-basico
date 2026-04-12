const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const sidebarBtn = document.getElementById('sidebarBtn');
const ajudaButton = document.getElementById('help-btn');
const installAppBtn = document.getElementById('installAppBtn');
const novidadesBtn = document.querySelector('.novidades-btn');
const calculateBtn = document.getElementById('send-btn-2');
const convertBtn = document.getElementById('send-btn-3');

    sidebarBtn.addEventListener('click', function() {
        // Alternar a visibilidade do menu
        
        sidebar.classList.toggle('hidden');
        content.classList.toggle('shifted');

        touchSidebarbtn(); // Chama a função para aplicar os efeitos de toque ao botão da barra lateral
    });