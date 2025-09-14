const parametros = new URLSearchParams(window.location.search); //puxa os dados da url atual do site, id e cor, para direcionar ao produto correto
const id = parametros.get("id")
const cor = parametros.get("cor")

const produtos ={
    "5100": {
        nome: `Bota Masculina com 
                Laterais em Elástico`, 

        imagens:{
            preta: [
                "imagens/5100/Preta/5100-preta-img1-1p.jpg",
                "imagens/5100/Preta/5100-preta-img2-2p.jpg",
                "imagens/5100/Preta/5100-preta-img3-s.jpg",
                "imagens/5100/Preta/5100-preta-img4-2p.jpg"
            ],
            cafe: [
                "imagens/5100/Café/5100-cafe-img1-1p.jpg",
                "imagens/5100/Café/5100-cafe-img2-2p.jpg",
                "imagens/5100/Café/5100-cafe-img3-s.jpg",
                "imagens/5100/Café/5100-cafe-img4-2p.jpg"
            ],
        },

        descricao: `A Botina Masculina em Couro de Carneiro D’Luttyano foi desenvolvida para homens que buscam elegância, conforto e durabilidade em um só calçado. O couro de carneiro garante resistência, elasticidade e maciez, trazendo sofisticação e luxo ao seu visual \n
            Seu design conta com elásticos laterais, que facilitam o calce e proporcionam maior praticidade no dia a dia. Já o solado em couro colado e costurado oferece durabilidade superior, enquanto o salto em borracha antiderrapante garante segurança e estabilidade ao caminhar \n
            Características Técnicas:
            Ref: 5100\n
            Cabedal (Parte externa do produto): Couro de Carneiro \n
            Forro: Couro\n
            Solado: Couro colado e costurado\n
            Salto: Borracha antiderrapante\n
            Fechamento: Elástico nas laterais\n
            Palmilha: Espumada forrada em couro\n
            Produzida em Franca/SP, capital do calçado, essa botina é um verdadeiro símbolo de tradição e qualidade. \n
          
            `
    },

    "5500": {
        nome: `Bota Masculina com
                Fechamento em Zíper Interno
                `, 

        imagens:{
            preta: [
                "imagens/5500/Preta/5500-preta-img1-1p.jpg",
                "imagens/5500/Preta/5500-preta-img2-2p.jpg",
                "imagens/5500/Preta/5500-preta-img3-s.jpg",
                "imagens/5500/Preta/5500-preta-img4-2p.jpg"
            ],
            cafe: [
                "imagens/5500/Café/5500-cafe-img1-1p.jpg",
                "imagens/5500/Café/5500-cafe-img2-2p.jpg",
                "imagens/5500/Café/5500-cafe-img3-s.jpg",
                "imagens/5500/Café/5500-cafe-img4-2p.jpg"
            ],
        },

        descricao: `A Botina Masculina em Couro de Carneiro D’Luttyano une elegância, praticidade e resistência em um só modelo. Com zíper lateral interno, o calce é rápido e fácil, ideal tanto para o trabalho quanto para os momentos de lazer.\n
                    O couro de carneiro legítimo garante maciez, elasticidade e durabilidade, além de transmitir um toque de sofisticação e luxo ao visual. O solado em couro colado e costurado oferece maior resistência, enquanto o salto em madeira com base antiderrapante garante segurança ao caminhar.
                    Características Técnicas:
                    Ref: 5500\n
                    Cabedal: Couro de carneiro legítimo\n
                    Forro: Couro\n
                    Solado: Couro colado e costurado\n
                    Salto: Madeira com base antiderrapante\n
                    Fechamento: Zíper lateral interno\n
                    Palmilha: Espumada forrada em couro\n
                    Produzida em Franca/SP, capital nacional do calçado, essa botina é sinônimo de qualidade e tradição.
                  
                    `

    },
    "5600": {
        nome: `Bota Masculina com 
        Fechamento em Zíper Interno e Externo`, 

        imagens:{
            preta: [
                "imagens/5600/Preta/5600-preta-img1-1p.jpg",
                "imagens/5600/Preta/5600-preta-img2-2p.jpg",
                "imagens/5600/Preta/5600-preta-img3-s.jpg",
                "imagens/5600/Preta/5600-preta-img4-2p.jpg"
            ],
            cafe: [
                "imagens/5600/Café/5600-cafe-img1-1p.jpg",
                "imagens/5600/Café/5600-cafe-img2-2p.jpg",
                "imagens/5600/Café/5600-cafe-img3-s.jpg",
                "imagens/5600/Café/5600-cafe-img4-2p.jpg"
            ],
        },

        descricao: `A Botina Masculina em Couro de Carneiro com Zíper Lateral D’Luttyano combina sofisticação, conforto e praticidade em um único calçado. Com zíper em ambos os lados, ela garante facilidade ao calçar e é perfeita tanto para o trabalho quanto para os momentos de lazer.\n
                O couro de carneiro oferece resistência, elasticidade e maciez superiores, transmitindo luxo e elegância ao visual. Já o solado em PU proporciona leveza, conforto e absorção de impacto, ideal para quem busca estilo sem abrir mão do bem-estar\n
                Características Técnicas:
                Ref:5600\n
                Cabedal: Couro de Carneiro\n
                Forro: Couro\n
                Solado: PU (leve e macio)\n
                Fechamento: Zíper em ambos os lados\n
                Palmilha: Espumada forrada em couro\n
                Produzida em Franca/SP, capital do calçado, essa botina é um verdadeiro símbolo de tradição e qualidade.

        `

    },
    "6000": {
        nome: `Bota Masculina
        Cano Médio com 
        Fechamento em Zíper Interno`, 

        imagens:{
            preta: [
                "imagens/6000/Preta/6000-preta-img1-1p.jpg",
                "imagens/6000/Preta/6000-preta-img2-2p.jpg",
                "imagens/6000/Preta/6000-preta-img3-s.jpg",
                "imagens/6000/Preta/6000-preta-img4-2p.jpg"
            ],
            cafe: [
                "imagens/6000/Café/6000-cafe-img1-1p.jpg",
                "imagens/6000/Café/6000-cafe-img2-2p.jpg",
                "imagens/6000/Café/6000-cafe-img3-2p.jpg"
            ],
        },

        descricao: `A Bota Social Masculina em Couro de Carneiro D’Luttyano une sofisticação, conforto e resistência em um só modelo. O couro legítimo de carneiro garante maciez e durabilidade, enquanto o forro em couro mantém os pés secos e arejados ao longo do dia.\n
            Com zíper lateral interno, o calce é prático e rápido, sem abrir mão da elegância. Já o solado em couro com salto de madeira e borracha antiderrapante proporciona segurança, respirabilidade e acabamento refinado.\n
            Características Técnicas:
            Ref: 6000\n
            Fechamento: Zíper lateral interno\n
            Cabedal: Couro legítimo de carneiro\n
            Forro: Couro\n
            Solado: Couro\n
            Salto: Madeira com borracha antiderrapante (2,5 cm)\n
            Palmilha: Espumada forrada em couro\n
            Produzida em Franca/SP, a capital nacional do calçado, essa bota é perfeita para quem busca estilo e tradição em cada detalhe.`

    }
}

const imagensGaleria = document.getElementById("img-miniaturas-galeria")
const imgPrincipal = document.getElementById("img-principal-galeria");

if (produtos[id]){
    document.getElementById("nome-produto").textContent = produtos[id].nome;
    document.getElementById("descricao").textContent = produtos[id].descricao;

    produtos[id].imagens[cor].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.addEventListener("click", () => {
            imgPrincipal.src = src;
        });
        imagensGaleria.appendChild(img);
    });
    imgPrincipal.src = produtos[id].imagens[cor][0];
}

function trocarCor(cor) {

    imagensGaleria.innerHTML = ""; // limpa miniaturas antigas

    produtos[id].imagens[cor].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.addEventListener("click", () => {
            imgPrincipal.src = src;
        });
        imagensGaleria.appendChild(img);
    });
    imgPrincipal.src = produtos[id].imagens[cor][0]; // primeira imagem como principal
}