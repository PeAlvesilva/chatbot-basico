const toggleHudBtn0 = document.getElementById('toggleHudBtn0');
const hudText0 = document.getElementById('hudText0');
const hudBox0 = document.getElementById('hudBox0');
const hudContent0= document.getElementById('hudContent0');

toggleHudBtn0.addEventListener('click', function () {
    if (hudText0.style.display === 'none') {
        hudText0.style.display = 'block';
        hudContent0.style.display = 'block';

        // Verifica a largura da janela para ajustar largura e altura
        if (window.innerWidth > 600) {
            hudBox0.style.width = '625px'; // Expande para o tamanho original em telas maiores
            hudBox0.style.height = '3200px'; // Altura expandida para telas maiores
        } else {
            hudBox0.style.width = '350px'; // Ajusta largura para telas menores
            hudBox0.style.height = '3170px'; // Altura expandida para telas menores
        }

        toggleHudBtn0.textContent = 'Ocultar';
    } else {
        hudText0.style.display = 'none';
        hudContent0.style.display = 'none';

        // Verifica a largura da janela para ajustar largura e altura
        if (window.innerWidth > 600) {
            hudBox0.style.width = '400px'; // Volta ao tamanho inicial em telas maiores
            hudBox0.style.height = '70px'; // Volta à altura inicial em telas maiores
        } else {
            hudBox0.style.width = '350px'; // Volta ao tamanho inicial para telas menores
            hudBox0.style.height = '70px'; // Volta à altura inicial para telas menores
        }

        toggleHudBtn0.textContent = 'Mostrar';
    }
});
