const Livros = [
    
    {"card1":"A","card2":"B","junto":"AB","total":"ABCDEFGHIJKLAMNO1"},
    {"card1":"C","card2":"D","junto":"CD","total":"ABCDEFGHIJKLAMNO2"},
    {"card1":"E","card2":"F","junto":"EF","total":"ABCDEFGHIJKLAMNO3"},
    {"card1":"G","card2":"H","junto":"GH","total":"ABCDEFGHIJKLAMNO4"},
    {"card1":"I","card2":"J","junto":"IJ","total":"ABCDEFGHIJKLAMNO5"},
    {"card1":"K","card2":"L","junto":"KL","total":"ABCDEFGHIJKLAMNO6"},
    {"card1":"M","card2":"N","junto":"MN","total":"ABCDEFGHIJKLAMNO7"},
    {"card1":"O","card2":"P","junto":"OP","total":"ABCDEFGHIJKLAMNO8"},

];

const Famosos = [
    
    {"card1":"1","card2":"2","junto":"12","total":"ABCDEFGHIJKLAMNO1"},
    {"card1":"C","card2":"D","junto":"CD","total":"ABCDEFGHIJKLAMNO2"},
    {"card1":"E","card2":"F","junto":"EF","total":"ABCDEFGHIJKLAMNO3"},
    {"card1":"G","card2":"H","junto":"GH","total":"ABCDEFGHIJKLAMNO4"},
    {"card1":"I","card2":"J","junto":"IJ","total":"ABCDEFGHIJKLAMNO5"},
    {"card1":"K","card2":"L","junto":"KL","total":"ABCDEFGHIJKLAMNO6"},
    {"card1":"M","card2":"N","junto":"MN","total":"ABCDEFGHIJKLAMNO7"},
    {"card1":"O","card2":"P","junto":"OP","total":"ABCDEFGHIJKLAMNO8"},

];

const EventosMarcantes = [
    
    {"card1":"1º guerra mundial","card2":"A ______ é popularmente conhecida como A Grande guerra, iniciou-se em 1914 ","junto":"A 1º guerra é popularmente conhecida como A Grande guerra, iniciou-se em 1914 ","total":"A Primeira Guerra Mundial, que durou de 1914 a 1918, foi considerada por muitos de seus contemporâneos como a mais terrível das guerras. Por este motivo, tornou-se conhecida durante muito tempo como “A Grande Guerra”. Se destacou pelo confronto entre a Triplice Aliança (Alemanha, Áustria-Hungria e Italia) contra Triplice Entente (Inglaterra, França e Rússia)."},
    {"card1":"2º guerra mundial","card2":"A ______ teve seu inicio oficial em 1939, a alemanhã teve grande destaque nesse conflito ","junto":"A 2º guerra teve seu inicio oficial em 1939, a alemanhã teve grande destaque nesse conflito ","total":"A Segunda Guerra Mundial estendeu-se de 1939 até 1945 e teve como estopim a invasão da Polônia pelos alemães em 1º de setembro de 1939. Os grupos que se enfrentaram na guerra foram os Aliados (Reino Unido, França, União Soviética e Estados Unidos) e o Eixo (Alemanha, Itália e Japão). Eventos mais famosos da segunda guerra: O Holocausto, o Massacre de Babi Yar e o lançamento das bombas atômicas sobre Hiroshima e Nagasaki."},
    {"card1":"ditadura brasileira","card2":"A _____ teve inicio em 1964 e durou 21 anos, um periodo bem marcante para o Brasil","junto":"A ditadura brasileira teve inicio em 1964 e durou 21 anos, um periodo bem marcante para o Brasil","total":"A ditadura militar no Brasil durou 21 anos (1964 e 1985), teve 5 mandatos militares e instituiu 16 atos institucionais( mecanismos legais que se sobrepunham à constituição). Nesse período houve restrição à liberdade, repressão aos opositores do regime e censura. Foi iniciada por um golpe civil-militar realizado em 1964, contra o então presidente João Goulart. Os militares passaram a impor um regime autoritário que era sustentado por tais atos institucionais."},
    {"card1":"republica do brasil","card2":"A _______ foi proclamada em 1889 a partir do golpe de Marechal Deodoro","junto":"A proclamação da republica foi proclamada em 1889 a partir do golpe de Marechal Deodoro","total":"A Proclamação da República Brasileira aconteceu no dia 15 de novembro de 1889. Resultado de um levante político-militar que deu inicio à República Federativa Presidencialista. Fica marcada a figura de Marechal Deodoro da Fonseca como responsável pela efetiva proclamação e como primeiro Presidente da República brasileira em um governo provisório (1889-1891)."},
    {"card1":"descobrimento Brasil","card2":"O _______ tem sua data atribuida a 1500, por Pedro Alvares Cabral ","junto":"O descobrimento do Brasil tem sua data atribuida a 1500, por Pedro Alvares Cabral ","total":"O dia 22 de abril de 1500 marcou oficialmente a chegada dos portugueses ao território brasileiro, esse evento é muito conhecido como “descobrimento do Brasil”. A chegada dos portugueses aqui foi um dos momentos mais marcantes das grandes navegações, realizadas por eles durante todo o século XV. A partir desse acontecimento, a presença portuguesa no território foi constante, embora diminuta no início. A partir da década de 1530, medidas colonizatórias foram implantadas."},
    {"card1":"independencia Brasil","card2":"A _______ teve sua data oficial em 1822, por D.Pedro II ","junto":"A independencia do Brasil teve sua data oficial em 1822, por D.Pedro II ","total":"A independência do Brasil aconteceu em 1822, tendo como grande marco o grito da independência que foi realizado por Pedro de Alcântara (D. Pedro I durante o Primeiro Reinado), às margens do Rio Ipiranga, no dia 7 de setembro de 1822. Com a independência do Brasil declarada, o país transformou-se em uma monarquia com a coroação de D. Pedro I."},
    {"card1":"banco do brasil","card2":"O _______ foi implementado em 1808 por D. João VI","junto":"O banco do Brasil foi implementado em 1808 por D. João VI","total":"Em 12 de outubro de 1808, D. João VI fundou o Banco do Brasil com o objetivo de financiar a criação de indústrias manufatureiras no país. A ideia era que a importação de matérias primas e a exportação de produtos industrializados (sob isenção de impostos) ajudaria a movimentar o comércio brasileiro. O banco iniciou suas atividades no ano seguinte, na rua Direita, Rio de Janeiro, com o capital de 1200 contos de réis em forma de ações. Além das vendas dos produtos monopolizados pela Coroa Portuguesa, como pau-brasil, marfim, urzela e diamantes, o banco também realizava depósitos, descontos e emissões para os acionistas com grande quantidade de capital."},
    {"card1":"Napoleão","card2":"_____ se tornou imperador em 1804 na França e causou grandes guerras na europa","junto":"Napoleão se tornou imperador em 1804 na França e causou grandes guerras na europa","total":"Napoleão Bonaparte (1769-1821) foi imperador da França entre 1804 e 1814 com o título de Napoleão I. Líder político, ditador e comandante do Exercito Francês, conquistou uma grande extensão territorial para a França.Como imperador da França, Napoleão implantou uma ditadura sem disfarce, voltada para o atendimento e defesa dos interesses da burguesia. Em pouco tempo, seu exército conquistou a Itália, os Países Baixos, a Polônia e vários principados da Alemanha. Em 1812, com mais de 600 mil homens, Napoleão invade a Rússia, mas encontra Moscou incendiada. Sem a base de apoio, enfrenta um inverno rigoroso e a resistência do povo. Vencido, retira-se"},

];

const Paises = [
    
    {"card1":"Brasil","card2":"_______ é o maior país falante de língua portuguesa no mundo.","junto":"Brasil é o maior país falante de língua portuguesa no mundo.","total":"O Brasil é o maior país da América do Sul, sendo o quinto maior país do mundo. Sua capital é Brasília.É o único país falante de língua portuguesa na América Latina. Possui muitas influências multiculturais e etnicamente diversas, devido ao forte movimento de imigrações que ocorreram em direção ao território nacional ao longo da história.É banhado pelo Oceano Atlântico,e faz fronteira com todos os países sulamericanos, com exceção do Chile e Equador. Sua bandeira tem predominância das cores verde, azul, amarelo e branca, com o dito 'Ordem e Progesso' escrita na mesma."},
    {"card1":"Estados Unidos","card2":"_______ é o país mais influente do mundo.","junto":"Estados Unidos é o país mais influente do mundo.","total":"Os Estados Unidos da América é país mais influente do mundo. Sua capital é Washington D.C. e seu idioma oficial é o inglês. Sua moeda oficial é o dólar america, e conta com uma população de 326.766.748 pessoas, de acordo com o IBGE. É responsável pela indústria de filmes mais famosa do mundo, além de diversas influências musicais, com ritmos e músicas. Sua bandeira conta com listras vermelhas e brancas, e um retângulo azul com 50 estrelas brancas, representando cada um de seus estados."},
    {"card1":"China","card2":"______ possui 10 diferentes idiomas, sendo o Mandarim o principal.","junto":"China possui 10 diferentes idiomas, sendo o Mandarim o principal.","total":"A China é o maior páis do mundo em população, com aproximadamente 1.439.323.776 habitantes, e é terceiro maior em área territorial. Possui 10 diferentes idiomas, sendo o Mandarim o principal deles.Sua capital é Pequim. Possui áreas em seu território que englobam a cordilheira do Himalaia e o deserto de Gobhi. Sua bandeira é totalmente vermelha, com 5 estrelas amarelas (1 grande e 4 pequenas)."},
    {"card1":"Alemanha","card2":"_______ é conhecida pela forte fama de participação em guerras.","junto":"Alemanha é conhecida pela forte fama de participação em guerras.","total":"A Alemanha é um país da Europa, cujo idioma é o alemão. Sua capital é Berlim, e possui outras cidades famosas como Munique, Colônia e Leipzig. Sua moeda oficial é o Euro, e é conhecida pela sua festa chamada 'Oktoberfest', que faz com que a população festeje acompanhada de cerveja e comidas típicas. Infelizmente, criou uma fama negativa por ter participado de duas das maiores guerras que o ser-humano já passou em sua história. Sua bandeira é composta por 3 faixas, das cores preto, vermelho e amarelo, nessa ordem."},
    {"card1":"Portugal","card2":"_______ foi o país responsável por descobrir o Brasil.","junto":"Portugal foi o país responsável por descobrir o Brasil.","total":"Portugal é um país europeu falante de língua portuguesa. Sua capital é Lisboa, e sua moeda oficial é o Euro. Foi responsável por descobrir o Brasil, o qual possui bastante ligação até os dias atuais (muitos emigrantes saíram de Portugal e foram para o Brasil ao longo da história). A bandeira de Portugal é composta por duas partes: verde e vermelha, além de um símbolo que homenageia os navegadores e o mundo que os mesmo descobriram entre os séculos 15 e 16."},
    {"card1":"Espanha","card2":"_______ é o país famoso pela dança Flamenca e a Tourada.","junto":"Espanha é o país famoso pela dança Flamenca e a Tourada.","total":"A Espanha é um país falante em maioria de espanhol que localiza-se na Europa. Além de espanhol, conta com outros idiomas como basco, catalão e galego. Sua moeda oficial é o Euro, e conta com um turismo bem centrado às paisagens que encontram-se em seu território, como a famosa praia de Ibiza. Sua bandeira possui duas baixas vermelhas nos extremos, e uma amarela no centro, onde localiza-se o brasão da Espanha."},
    {"card1":"Inglaterra","card2":"_______ é o principal país componente da região do Reino Unido.","junto":"Inglaterra é o principal país componente da região do Reino Unido.","total":"A Inglaterra é o principal país do Reino Unido, ao lado de nações como País de Gales, Irlanda do Norte e Escócia. Seu idioma oficial é o inglês, e sua moeda oficial é a libra esterlina. Conta com diversos pontos turísticos, como o grande relógio Big Ben, e o Palácio de Buckingham, lar de sua rainha. Sua bandeira é branca, com uma cruz vermelha no centro."},
    {"card1":"França","card2":"_______ é o país que mais colonizou nações africanas na história.","junto":"França é o país que mais colonizou nações africanas na história.","total":"A França é um país europeu cujo idioma é o francês e sua moeda oficial é o Euro. Lar da famosa Torre Eiffel e do Museu do Louvre, onde encontra-se a famosa pintura 'Mona Lisa', sua capital é Paris. Ao longo da história, percebe-se que a França foi a nação com mais países africanos colonizados. Sua bandeira é composta por 3 faixas verticais, das cores azul, branca e vermelha."},

];

const Futebol = [
    
    {"card1":"Pelé","card2": "_______ é conhecido como o Rei do Futebol.","junto":"Pelé é conhecido como o Rei do Futebol.", "total": "Edson Arantes do Nascimento, o Pelé, é um ex-esportista brasileiro, considerado o maior jogador da história do futebol, personalidade mundial do esporte e popularmente chamado de Rei do Futebol. É o maior artilheiro do mundo, com 1281 gols, e foi o jogador mais jovem a vencer uma Copa do Mundo."},
    {"card1":"Maradona","card2":"_______ foi um dos maiores jogadores argentinos.","junto":"Maradona foi um dos maiores jogadores argentinos.","total":"Diego Armando Maradona Franco foi um treinador e futebolista argentino que atuava como meia-atacante. Considerado um dos maiores futebolistas de todos os tempos, liderou a conquista da Copa do Mundo de 1986. Também conhecido como 'La Mano de Dios' por um polêmico gol de mão que teria feito em uma Copa do Mundo."},
    {"card1":"Garrincha","card2":"_______ era conhecido como 'Anjo das pernas tortas'.","junto":"Garrincha era conhecido como 'Anjo das pernas tortas","total":"Mané Garrincha ou simplesmente Garrincha foi um futebolista brasileiro que se notabilizou por seus dribles desconcertantes, sendo considerado por muitos o mais célebre ponta-direita e o melhor driblador da história do futebol. Mundialmente reconhecido como uma figura lendária no esporte, ele é extremamente popular entre os amantes do futebol no Brasil, onde os fãs mais antigos o consideram melhor até do que Pelé."},
    {"card1":"Ronaldinho","card2":"_______ é conhecido como o mago dos dribles.","junto":"Ronaldinho é conhecido como o mago dos dribles.","total":"Ronaldinho Gaúcho ou simplesmente Ronaldinho é um ex-futebolista brasileiro que atuava como meia-atacante. Uma de suas marcas registradas é o aspecto dentuço, seus dribles fantásticos e usar uma faixa na cabeça após adotar os cabelos longos. Extremamente habilidoso e muito preciso em seus chutes e passes, é considerado por muitos especialistas como o futebolista mais talentoso de sua geração. Popularizou a cobrança de falta por debaixo da barreira."},
    {"card1":"Corinthians","card2":"_______ é o time conhecido como 'Timão'.","junto":"Corinthians é o time conhecido como 'Timão'.","total":"O Sport Club Corinthians Paulista (mais conhecido como Corinthians, e pelos apelidos de 'Timão' e 'Coringão') é um clube multiesportivo brasileiro da cidade de São Paulo, capital do estado homônimo. Foi fundado como uma equipe de futebol no dia 1 de setembro de 1910 por um grupo de operários do bairro Bom Retiro. Seu nome foi inspirado no Corinthian FC de Londres, que excursionava pelo Brasil, sendo chamado pela imprensa brasileira da época de Corinthian's team."},
    {"card1":"Palmeiras","card2":"_______ é o time conhecido como 'Porco'.","junto":"Palmeiras é o time conhecido como 'Porco","total":"A Sociedade Esportiva Palmeiras, conhecida popularmente como Palmeiras, é um clube poliesportivo brasileiro da cidade de São Paulo, capital do estado homônimo. Foi fundado em 26 de agosto de 1914 e suas cores, presentes no escudo e bandeira oficial, são o verde e branco. O vermelho, presente desde sua fundação em 1914, foi excluído durante a Segunda Guerra Mundial, por pressão do governo nacional, na mesma reunião que formalizou a mudança de nome de Palestra Itália para Palmeiras."},
    {"card1":"São Paulo","card2":"_______ é o time conhecido como 'Soberano'.","junto":"São Paulo é o time conhecido como 'Soberano'.","total":"São Paulo Futebol Clube (conhecido apenas por São Paulo e cujo acrônimo é SPFC) é uma associação esportiva brasileira da cidade de São Paulo, capital do estado homônimo. Foi fundado em 25 de janeiro de 1930, tendo interrompido suas atividades em maio de 1935, e as retomado em dezembro do mesmo ano."},
    {"card1":"Santos","card2":"_______ é o time conhecido como 'Peixe'.","junto":"Santos é o time conhecido como 'Peixe'.","total":"Santos Futebol Clube é um clube poliesportivo brasileiro da cidade de Santos, São Paulo. Foi fundado em 14 de abril de 1912, suas cores iniciais seriam o branco, azul e dourado, mas um ano após a sua fundação, ficou decidido que as cores do clube passariam a ser branco e preto. Manda as suas partidas no Estádio Urbano Caldeira, mais conhecido como Vila Belmiro. Teve como principal jogador o Pelé, considerado o Rei do Futebol."},

];

let fundo = false;
let quadrado = false;
let sidebarra = false;

var oficial = [];

document.querySelector('select').addEventListener('change', function(e){
    localStorage.setItem("key", e.target.value);
    var lastname = localStorage.getItem("key");
    window.location.reload(true);
});

window.onload = makeInfo();
function makeInfo(){
    var lastname = localStorage.getItem("key");
    let vetorCartas = [];
    let x;
    if(lastname == "Filmes"){
        oficial = Filmes;
        document.getElementById("Filmes").selected = true;
    }
    else if(lastname == "Futebol"){
        oficial = Futebol;
        document.getElementById("Futebol").selected = true;
    }
    else if(lastname == "EventosMarcantes"){
        oficial = EventosMarcantes;
        document.getElementById("EventosMarcantes").selected = true;
    }
    else if(lastname == "Paises"){
        console.log("object")
        oficial = Paises;
        document.getElementById("Paises").selected = true;
    }

    for(x = 0; x < oficial.length; x++){
        vetorCartas.push(oficial[x].card1);
        vetorCartas.push(oficial[x].card2);
    }

    vetorCartas.sort((a, b) => {return 0.5 - Math.random()});

    for(x = 0; x < vetorCartas.length; x++){
        document.getElementById(x.toString()).innerHTML = vetorCartas[x];
    }
    localStorage.removeItem("key")
}

function checkCard(x,y){ 
        for(let a = 0; a < oficial.length; a++){
        if(oficial[a].card1 == x){
            if(oficial[a].card2 == y){
                return 1;
            }
        }
        
        else if(oficial[a].card2 == x){
            if(oficial[a].card1 == y){
                return 1;
            }
        }
    }
    return 0;
}

function goSidebar(carta){
    for(let a = 1; a < oficial.length+1; a++){
        if(oficial[a-1].card1 == carta || oficial[a-1].card2 == carta){
            var cartaAcertada = a*1000; 
            var informacao = a*100;
            document.getElementById(cartaAcertada.toString()).style.display='flex';
            document.getElementById(informacao.toString()).innerHTML = oficial[a-1].junto;
            break;
        }
    }
}

function mostraTotal(id){
    document.getElementById('texto').innerHTML = oficial[(parseInt(id)/100)-1].total;
}

function sidebar(e,e1,e2) {
    var texto = document.querySelectorAll(".textoInfo");
    console.log(texto)
    var direita = document.getElementById("tabuleiro");
    if(sidebarra === false){
        sidebarra = true;
        document.getElementById(e).style.display = 'block';
        direita.style.marginRight = '24rem';
        texto.forEach(element => {
            element.innerHTML = "+ informações";
        });
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
    texto.forEach(element => {
        element.style.fontSize = '20px'
    });
}

function info(menu, botao) {
    var mais = document.querySelectorAll(".textoInfo");
    var texto = document.getElementById(botao);
    var simbolo;
    if(quadrado === false){
        simbolo = "-"
        quadrado = true;
        document.getElementById(menu).style.display = 'flex'; 
    }
    else if(quadrado === true){
        simbolo = "+"
        quadrado = false;
        document.getElementById(menu).style.display = 'none';
    }
    if(botao != null){
        mais.forEach(element => {
            element.innerHTML = "+ informações";
        });
        texto.innerHTML= simbolo +" informações";
        texto.style.fontSize = '20px'
    }
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
                    var carta = cartas[x][i]
                    if(card1 == 0)
                        card1 = carta.lastElementChild.firstElementChild.innerHTML
                    else
                        card2 = carta.lastElementChild.firstElementChild.innerHTML
                }
            }
        }
        const certo = checkCard(card1,card2);
        for(let x = 0; x < cartas.length; x++) {
            for(let i = 0; i < cartas[x].length; i++){
                if(cartas[x][i].className === "carta") {
                    var carta = cartas[x][i]
                    if(certo){
                        carta.lastElementChild.style.backgroundColor = "#16c441";
                        goSidebar(card1);
                    }
                    else{   
                        carta.classList.toggle("flip")
                    }
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