const toggleHudBtn2 = document.getElementById('toggleHudBtn2');
const hudText2 = document.getElementById('hudText2');
const hudBox2 = document.getElementById('hudBox2');
const hudContent2 = document.getElementById('hudContent2');

toggleHudBtn2.addEventListener('click', function () {
    if (hudText2.style.display === 'none') {
        hudText2.style.display = 'block';
        hudContent2.style.display = 'block';

        // Verifica a largura da janela para ajustar largura e altura
        if (window.innerWidth > 600) {
            hudBox2.style.width = '625px'; // Expande para o tamanho original em telas maiores
            hudBox2.style.height = '750px'; // Altura expandida para telas maiores
        } else {
            hudBox2.style.width = '350px'; // Ajusta largura para telas menores
            hudBox2.style.height = '850px'; // Altura expandida para telas menores
        }

        toggleHudBtn2.textContent = 'Ocultar';
    } else {
        hudText2.style.display = 'none';
        hudContent2.style.display = 'none';

        // Verifica a largura da janela para ajustar largura e altura
        if (window.innerWidth > 600) {
            hudBox2.style.width = '400px'; // Volta ao tamanho inicial em telas maiores
            hudBox2.style.height = '70px'; // Volta à altura inicial em telas maiores
        } else {
            hudBox2.style.width = '350px'; // Volta ao tamanho inicial para telas menores
            hudBox2.style.height = '70px'; // Volta à altura inicial para telas menores
        }

        toggleHudBtn2.textContent = 'Mostrar';
    }
});
