const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const toggleBtn = document.getElementById('toggleBtn');

    toggleBtn.addEventListener('click', function() {
        // Alternar a visibilidade do menu
        sidebar.classList.toggle('hidden');
        content.classList.toggle('shifted');
        
    });