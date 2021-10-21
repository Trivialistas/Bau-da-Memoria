// só conseguir selecionar duas cartas

// as cartas acertadas tem que ir para sidebar

// mudar as cartas por tema

// ver o total na sidebar e abrir novas informações



let fundo = false;
let quadrado = false;
let sidebarra = false;

const testeJson = [
    
    {"card1":"A","card2":"B","junto":"AB","total":"ABCDEFGHIJKLAMNO1"},
    {"card1":"C","card2":"D","junto":"CD","total":"ABCDEFGHIJKLAMNO2"},
    {"card1":"E","card2":"F","junto":"EF","total":"ABCDEFGHIJKLAMNO3"},
    {"card1":"G","card2":"H","junto":"GH","total":"ABCDEFGHIJKLAMNO4"},
    {"card1":"I","card2":"J","junto":"IJ","total":"ABCDEFGHIJKLAMNO5"},
    {"card1":"K","card2":"L","junto":"KL","total":"ABCDEFGHIJKLAMNO6"},
    {"card1":"M","card2":"N","junto":"MN","total":"ABCDEFGHIJKLAMNO7"},
    {"card1":"O","card2":"P","junto":"OP","total":"ABCDEFGHIJKLAMNO8"},

];

window.onload = makeInfo();
function makeInfo(){
    let vetorCartas = [];
    let x;
    for(x = 0; x < testeJson.length; x++){
        vetorCartas.push(testeJson[x].card1);
        vetorCartas.push(testeJson[x].card2);
    }

    vetorCartas.sort((a, b) => {return 0.5 - Math.random()});

    for(x = 0; x < vetorCartas.length; x++){
        document.getElementById(x.toString()).innerHTML = vetorCartas[x];
    }
}


function checkCard(x,y){ 
    let achou = 0;
    
    for(let a = 0; a < testeJson.length; a++){
        console.log(testeJson[a].card1, testeJson[a].card2, x, y)
        if(testeJson[a].card1 == x){
            if(testeJson[a].card2 == y){
                achou = 1;
                return 1;
            }
        }
        else if(testeJson[a].card2 == x){
            if(testeJson[a].card1 == y){
                achou = 1;
                return 1;
            }
        }
    }

    // for(let a = 0; a < testeJson.length; a++){
    //     if(testeJson[a].card2 == x){
    //         if(testeJson[a].card1 == y){
    //             achou = 1;
    //             return 1;
    //         }
    //     }
    // }

    if (achou == 0){
        return 0;
    }

}


function goSidebar(var1){
    console.log("ENTROU AQUI");
    for(let a = 1; a < testeJson.length+1; a++){
        console.log("passei aqui" + a);

        if(testeJson[a-1].card1 == var1){
            var conv = a*1000;
            console.log(conv);    
            var conv2 = a*100;
            console.log(conv2);
            document.getElementById(conv.toString()).style.display='flex';
            document.getElementById(conv2.toString()).innerHTML = testeJson[a].junto;
            break;
        }
        
    }

}





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
let cartasViradas = 0;
let cartas = [];
addEventListener("click", (e) => {
    if(cartasViradas > 1){
        let card1 = 0, card2 = 0;
        for(let x = 0; x < cartas.length; x++) {
            for(let i = 0; i < cartas[x].length; i++){
                if(cartas[x][i].className === "carta") {
                    var teste = cartas[x][i]
                    if(card1 == 0)
                        card1 = teste.lastElementChild.firstElementChild.innerHTML
                    else
                        card2 = teste.lastElementChild.firstElementChild.innerHTML
                }
            }
        }
        const certo = checkCard(card1,card2);
        for(let x = 0; x < cartas.length; x++) {
            for(let i = 0; i < cartas[x].length; i++){
                if(cartas[x][i].className === "carta") {
                    var teste = cartas[x][i]
                    if(certo)
                        console.log(teste.lastElementChild.style.backgroundColor = "green")
                    else
                        teste.classList.toggle("flip")
                }
            }
        }
        
        cartasViradas = 0;
    }
    const caminho = e.path
    for(let i = 0; i < caminho.length; i++) {
        if(caminho[i].className === "carta flip") {
            var caminhozinho = caminho[i]
            caminhozinho.classList.toggle("flip")
            cartas[cartasViradas] = caminho;
            cartasViradas++;
            return
        }
    }            
})
