const toggleHudBtn3 = document.getElementById('toggleHudBtn3');
const hudText3 = document.getElementById('hudText3');
const hudBox3 = document.getElementById('hudBox3');
const hudContent3 = document.getElementById('hudContent3');

toggleHudBtn3.addEventListener('click', function () {
    if (hudText3.style.display === 'none') {
        hudText3.style.display = 'block';
        hudContent3.style.display = 'block';

        // Verifica a largura da janela para ajustar largura e altura
        if (window.innerWidth > 600) {
            hudBox3.style.width = '625px'; // Expande para o tamanho original em telas maiores
            hudBox3.style.height = '450px'; // Altura expandida para telas maiores
        } else {
            hudBox3.style.width = '350px'; // Ajusta largura para telas menores
            hudBox3.style.height = '550px'; // Altura expandida para telas menores
        }

        toggleHudBtn3.textContent = 'Ocultar';
    } else {
        hudText3.style.display = 'none';
        hudContent3.style.display = 'none';

        // Verifica a largura da janela para ajustar largura e altura
        if (window.innerWidth > 600) {
            hudBox3.style.width = '400px'; // Volta ao tamanho inicial em telas maiores
            hudBox3.style.height = '70px'; // Volta à altura inicial em telas maiores
        } else {
            hudBox3.style.width = '350px'; // Volta ao tamanho inicial para telas menores
            hudBox3.style.height = '70px'; // Volta à altura inicial para telas menores
        }

        toggleHudBtn3.textContent = 'Mostrar';
    }
});
