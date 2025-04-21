const toggleHudBtn1 = document.getElementById('toggleHudBtn1');
const hudText1 = document.getElementById('hudText1');
const hudBox1 = document.getElementById('hudBox1');
const hudContent1= document.getElementById('hudContent1');

toggleHudBtn1.addEventListener('click', function () {
    if (hudText1.style.display === 'none') {
        hudText1.style.display = 'block';
        hudContent1.style.display = 'block';

        // Verifica a largura da janela para ajustar largura e altura
        if (window.innerWidth > 600) {
            hudBox1.style.width = '625px'; // Expande para o tamanho original em telas maiores
            hudBox1.style.height = '3200px'; // Altura expandida para telas maiores
        } else {
            hudBox1.style.width = '350px'; // Ajusta largura para telas menores
            hudBox1.style.height = '3170px'; // Altura expandida para telas menores
        }

        toggleHudBtn1.textContent = 'Ocultar';
    } else {
        hudText1.style.display = 'none';
        hudContent1.style.display = 'none';

        // Verifica a largura da janela para ajustar largura e altura
        if (window.innerWidth > 600) {
            hudBox1.style.width = '400px'; // Volta ao tamanho inicial em telas maiores
            hudBox1.style.height = '70px'; // Volta à altura inicial em telas maiores
        } else {
            hudBox1.style.width = '350px'; // Volta ao tamanho inicial para telas menores
            hudBox1.style.height = '70px'; // Volta à altura inicial para telas menores
        }

        toggleHudBtn1.textContent = 'Mostrar';
    }
});
