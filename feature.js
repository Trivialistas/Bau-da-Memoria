let fundo = false;
let quadrado = false;
let sidebarra = false;

function sidebar(e,e1,e2) {
    var botao = document.getElementById("botaoInfo");
    var direita = document.getElementById("tabuleiro");
    if(sidebarra === false){
        sidebarra = true;
        document.getElementById(e).style.display = 'block';
        direita.style.marginRight = '24rem';
        botao.innerHTML="+ informações";
    }
    else if(sidebarra === true && quadrado === true){
        sidebarra = false;
        document.getElementById(e).style.display = 'none';
        direita.style.marginRight = '0rem';
        preto(e2);
        info(e1);
    }
    else if(sidebarra === true){
        sidebarra = false;
        document.getElementById(e).style.display = 'none';
        direita.style.marginRight = '0rem';
    }
    direita.style.transition = 'all 0.3s';
    botao.style.fontSize = '20px'
}

function info(e) {
    var botao = document.getElementById("botaoInfo");
    if(quadrado === false){
        quadrado = true;
        document.getElementById(e).style.display = 'flex';
        botao.innerHTML="- informações";
    }
    else if(quadrado === true){
        quadrado = false;
        document.getElementById(e).style.display = 'none';
        botao.innerHTML="+ informações";
    }
    botao.style.fontSize = '20px'
}

function preto(e) {
    if(fundo === false){
        fundo = true;
        document.getElementById(e).style.display = 'block'; 
    }
    else if(fundo === true){
        fundo = false;
        document.getElementById(e).style.display = 'none';
    }
}

// Virar a carta

addEventListener("click", (e) => {
    const card = document.getElementsByClassName(".carta")
    const caminho = e.path
    for(let i = 0; i < caminho.length; i++) {
        console.log(caminho[i].className)
        if(caminho[i].className === "carta flip") {
            var caminhozinho = caminho[i]
            break
        }
        else if(caminho[i].className === "carta") {
            var caminhozinho = caminho[i]
            break
        }
    }
    caminhozinho.classList.toggle("flip")
})
