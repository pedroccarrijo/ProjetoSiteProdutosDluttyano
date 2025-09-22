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

  const body = document.body;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    let percent = scroll / maxScroll; // 0 no topo, 1 no final
    let colorValue = Math.floor(255 - (percent * 255)); // 255 → 0
    body.style.background = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  });
