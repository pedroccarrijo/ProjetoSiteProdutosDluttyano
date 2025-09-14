const parametros = new URLSearchParams(window.location.search); //puxa os dados da url atual do site, id e cor, para direcionar ao produto correto
const id = parametros.get("id")
const cor = parametros.get("cor")

const produtos ={
    "5100": {
        nome: "Bota Masculina Ref 5100 \n Laterais em Elástico", 

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

        descricao: "Laterais em Elástico"
    },

    "5500": {
        nome: "Bota Masculina Ref 5500", 

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

        descricao: "Fechamento em Um Zíper  (Interno)"

    },
    "5600": {
        nome: "Bota Masculina Ref 5500", 

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

        descricao: "Fechamento em Um Zíper  (Interno)"

    },
    "6000": {
        nome: "Bota Masculina Ref 5500", 

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

        descricao: "Fechamento em Um Zíper  (Interno)"

    }
}



    if (produtos[id]){
        document.getElementById("nome-produto").textContent = produtos[id].nome;
        document.getElementById("descricao").textContent = produtos[id].descricao;
        document.getElementById("img-principal-galeria").src = produtos[id].imagens[cor][0]

        const imagensGaleria = document.getElementById("img-miniaturas-galeria")

        produtos[id].imagens[cor].forEach(src => {
            const img = document.createElement("img");
            img.src = src;

            img.addEventListener("click", () => {
                document.getElementById("img-principal-galeria").src = src;
            });

            imagensGaleria.appendChild(img);
        });
    }
