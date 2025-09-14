let lastIndex = 0;
const imagens = document.querySelectorAll('.carrossel .img');
const bullets = document.querySelectorAll('.bullet-single');
const total = imagens.length;

let intervalTime = 5000; // tempo entre trocas automáticas (5s)
let interval;

// Função para trocar imagem
function showImage(index) {
    imagens[lastIndex].style.opacity = 0;
    imagens[index].style.opacity = 1;

    bullets[lastIndex].classList.remove('active-bullet');
    bullets[index].classList.add('active-bullet');

    lastIndex = index;
}

// Função para iniciar/reiniciar o intervalo
function startInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
        let nextIndex = (lastIndex + 1) % total;
        showImage(nextIndex);
    }, intervalTime);
}

// Clique nos bullets
bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        showImage(index);
        startInterval(); // reinicia o timer
    });
});

// Inicializa o carrossel automático
startInterval();




window.onload = function () {
    window.scrollTo(0, 0);
}; // reseta a posição da página 




// Função para abrir o modal
function abrirModal(id) {
    // Pega o modal pelo id e muda o display para "flex" (visível)
    document.getElementById(id).style.display = 'flex';
    document.body.classList.add('no-scroll'); // bloqueia o scroll

    // desativa âncoras
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.dataset.disabled = "true"; // marca como desativada
    });
    // a - seleciona todos os elementos <a> (links/âncoras)
    // href → o atributo que estamos olhando
    // ^= → começa com
    // "#" → o valor que deve começar
}

// Função para fechar o modal   
function fecharModal(id) {
    // Pega o modal pelo id e muda o display para "none" (escondido)
    document.getElementById(id).style.display = 'none';
    document.body.classList.remove('no-scroll'); // libera o scroll

    // reativa âncoras
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.dataset.disabled = "false";
    });
}   

// intercepta os cliques
document.querySelectorAll('a[href^="#"]').forEach(link => { //puxa as informações do html
    link.addEventListener('click', function(event) {
        if (link.dataset.disabled === "true") { //verifica se o click é verdadeiro
        event.preventDefault(); //preventDefault bloqueia o evento
        }
    });
});
