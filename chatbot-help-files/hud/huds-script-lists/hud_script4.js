const toggleHudBtn4 = document.getElementById('toggleHudBtn4');
const hudText4 = document.getElementById('hudText4');
const hudBox4 = document.getElementById('hudBox4');
const hudContent4 = document.getElementById('hudContent4');

toggleHudBtn4.addEventListener('click', function () {
    if (hudText4.style.display === 'none') {
        hudText4.style.display = 'block';
        hudContent4.style.display = 'block';

        // Verifica a largura da janela para ajustar largura e altura
        if (window.innerWidth > 600) {
            hudBox4.style.width = '625px'; // Expande para o tamanho original em telas maiores
            hudBox4.style.height = '12550px'; // Altura expandida para telas maiores
        } else {
            hudBox4.style.width = '350px'; // Ajusta largura para telas menores
            hudBox4.style.height = '13850px'; // Altura expandida para telas menores
        }

        toggleHudBtn4.textContent = 'Ocultar';
    } else {
        hudText4.style.display = 'none';
        hudContent4.style.display = 'none';

        // Verifica a largura da janela para ajustar largura e altura
        if (window.innerWidth > 600) {
            hudBox4.style.width = '400px'; // Volta ao tamanho inicial em telas maiores
            hudBox4.style.height = '70px'; // Volta à altura inicial em telas maiores
        } else {
            hudBox4.style.width = '350px'; // Volta ao tamanho inicial para telas menores
            hudBox4.style.height = '70px'; // Volta à altura inicial para telas menores
        }

        toggleHudBtn4.textContent = 'Mostrar';
    }
});
