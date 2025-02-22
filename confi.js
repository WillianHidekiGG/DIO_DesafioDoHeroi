var pontuacao = 0;
var classificacoes = ["FERRO", "BRONZE", "PRATA", "OURO", "PLATINA", "ASCENDENTAL", "INMORTAL", "RADIANTE"]
var fundoPontuacao = ["url(img/interface/tabela1.png", "url(img/interface/tabela2.png"]
var vidaInimigo = 5;
var totalVidaInimigo = 5;
var vidaInimigoImg = "url(img/inimigos/vida_vaziaInimigo.png)"
var InimigoParado = ["url(img/inimigos/inimigo_ratoParado.gif)",
    "url(img/inimigos/inimigo_magoParado.gif)", "url(img/inimigos/inimigo_trollParado.gif)",
    "url(img/inimigos/inimigo_sombraParado.gif)", "url(img/inimigos/inimigo_lavaParado.gif)",
    "url(img/inimigos/inimigo_capaParado.gif)", "url(img/inimigos/chefao_Parado.gif)"
];

var InimigoAtacando = ["url(img/inimigos/inimigo_ratoAtacando.gif)",
    "url(img/inimigos/inimigo_magoAtacando.gif)", "url(img/inimigos/inimigo_trollAtacando.gif)",
    "url(img/inimigos/inimigo_sombraAtacando.gif)", "url(img/inimigos/inimigo_lavaAtacando.gif)",
    "url(img/inimigos/inimigo_capaAtacando.gif)", "url(img/inimigos/chefao_Atacando.gif)"
];

var inimigoNome = ["Rato Ladrão", "Mago Maligno", "troll", "Mecanoide do deserto", "Cavaleiro do inferno", "Ajudante da Morte", "Chefão Souman"]
var vidaImg = "url(img/super/vida_vazia.png)";
var Super = ["url(img/super/super_parado.gif)", "url(img/super/super_atacando.gif)"];
var fundo = ["url(img/cenario/cenarioFloresta.jpg)", "url(img/cenario/cenarioDeserto.jpg)", "url(img/cenario/cenarioLava.gif)", "url(img/cenario/cenarioMorte.jpg)", "url(img/cenario/cenarioChefão.jpg)", "url(img/cenario/game_over/cemiterio.gif)"];
var ataqueSuper = 1;
var vidaSuper = 10;
var vidaTotalSuper = 10;
var tempoAtaque = 1000;
var ataqueInimigo;
var danoInimigo = 1;
var dano = 0;

var mensagemFinal = ["parabéns, aventureiro! Sua coragem e determinação foram inspiradoras!",
    "você desbravou novos horizontes! Que venham mais aventuras!",
    "bravo! Sua jornada é um testemunho de perseverança e bravura!",
    "você provou que os limites existem para serem superados. Parabéns!",
    "incrível! Sua aventura é uma verdadeira lenda agora!",
    "parabéns! Cada passo seu foi uma vitória. Que venham mais desafios!",
    "você não apenas viajou, você viveu uma história inesquecível. Parabéns!",
    "sua coragem é contagiante! Mal posso esperar para ouvir suas histórias!",
    "parabéns! Você fez do mundo seu playground e isso é admirável!",
    "uma aventura como a sua merece uma grande comemoração. Você é incrível!",
    "parabéns por ter enfrentado o desconhecido com tanta garra e alegria!",
    "você mostrou que a verdadeira aventura está em viver plenamente. Bravo!",
    "que jornada espetacular! Parabéns por explorar e conquistar o desconhecido!",
    "parabéns, aventureiro! Sua ousadia é uma inspiração para todos nós!",
    "você fez história! Que suas próximas aventuras sejam ainda mais grandiosas!",
    "parabéns! Você provou que a verdadeira riqueza está nas experiências vividas!",
    "aventuras como a sua são raras. Parabéns por fazer delas uma realidade!",
    "bravo! Você desafiou os limites e saiu vitorioso. Que venha a próxima!",
    "parabéns por cada passo dado nessa jornada incrível! Você é um verdadeiro explorador!",
    "você conquistou não apenas destinos, mas também corações. Parabéns pela sua aventura!"]

var mensagemAleatoria = mensagemFinal[Math.floor(Math.random() * mensagemFinal.length)];

// let classificacaoFinal = classificacoesFinais();
var somFundo = document.createElement("musicaFundo");

function cenarioMuda() {
    if (pontuacao <= 1000) {

        document.getElementById("cenario").style.backgroundImage = fundo[0];
        document.getElementById("cenario").style.zIndex = "-1";
        document.getElementById("cenario").style.backgroundSize = "100vw 80vh"
        document.getElementById("cenario").style.backgroundRepeat = "no-repeat";

    } else if (pontuacao <= 2000) {
        document.getElementById("cenario").style.backgroundImage = fundo[0];
        document.getElementById("cenario").style.zIndex = "-1";
        document.getElementById("cenario").style.backgroundSize = "100vw 80vh"
        document.getElementById("cenario").style.backgroundRepeat = "no-repeat";
    } else if (pontuacao <= 5000) {
        document.getElementById("cenario").style.backgroundImage = fundo[0];
        document.getElementById("cenario").style.zIndex = "-1";
        document.getElementById("cenario").style.backgroundSize = "100vw 80vh"
        document.getElementById("cenario").style.backgroundRepeat = "no-repeat";
    } else if (pontuacao <= 7000) {
        document.getElementById("cenario").style.backgroundImage = fundo[1];
        document.getElementById("cenario").style.zIndex = "-1";
        document.getElementById("cenario").style.backgroundSize = "100vw 80vh"
        document.getElementById("cenario").style.backgroundRepeat = "no-repeat";
    } else if (pontuacao <= 8000) {
        document.getElementById("cenario").style.backgroundImage = fundo[2];
        document.getElementById("cenario").style.zIndex = "-1";
        document.getElementById("cenario").style.height = "110vh"
        document.getElementById("cenario").style.backgroundRepeat = "no-repeat"
        document.getElementById("cenario").style.backgroundSize = "100vw 100vh"
        document.getElementById("cenario").style.bottom = "0px"
    } else if (pontuacao <= 9000) {
        document.getElementById("cenario").style.backgroundImage = fundo[3];
        document.getElementById("cenario").style.backgroundSize = "100vw 100vh"
    } else if (pontuacao <= 10000) {
        document.getElementById("cenario").style.backgroundImage = fundo[4];
        document.getElementById("cenario").style.backgroundSize = "100vw 100vh"
    }
}

function confirmar() {
    var nomes = document.getElementById("nome").value;

    if (document.getElementById("nome").value == "") {
        alert("Informe um nome")
    } else {
        document.getElementById("conteiner1").style.display = "none";
        document.getElementById("conteiner2").style.display = "block";
        document.getElementById("nomeSuper").innerHTML = nomes;
        document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[0];
        document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
        document.getElementById("fundoPontuacao").style.backgroundImage = fundoPontuacao[0];
        document.getElementById("nomeSuper").style.margin = "15% 0 -10.5% 26%";
        document.getElementById("vidaSuper").innerHTML = "Vida: " + vidaSuper;
        document.getElementById("vidaSuper").style.margin = "22.2% 0 -7% 26%";
        document.getElementById("vidaSuper").style.backgroundColor = "red";
        document.getElementById("vidaSuperImg").style.backgroundImage = vidaImg;
        document.getElementById("vidaSuperImg").style.zIndex = "-1";
        document.getElementById("vidaSuperImg").style.margin = "5% 0 -11.6% 25%"; /* primeiro freme da vida quando clica em concluir no nome */
        document.getElementById("super").style.backgroundImage = Super[0];
        document.getElementById("super").style.margin = "24% 0 1% 30%"
        document.getElementById("cenario").style.backgroundImage = cenarioMuda();
        atacarInimigo();
        window.addEventListener('keyup', function (e) {
            var codigoTecla = e.which || e.keyCode || 0;
            var recomecar = codigoTecla == 82;
            if (recomecar) {
                window.location.reload();
            };
        });

        window.addEventListener('keyup', function (e) {
            var codigoTecla = e.which || e.keyCode || 0;
            var space = codigoTecla == 32;
            if (space) {
                atacar();
            };
        });

    }

}




window.addEventListener('keyup', function (e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var terminarAventura = codigoTecla == 84;
    if (terminarAventura) {
        fimAventura();
    };
});



function inimigosParados() {
    if (pontuacao <= 1000) {
        setTimeout(() => {
            document.getElementById("inimigo").style.backgroundImage = InimigoParado[0];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[0];
            document.getElementById("vidaInimigo").style.margin = "8.7% 0 9.9% 43%"
            document.getElementById("vidaInimigoImg").style.margin = "9.5% 0 -20.7% 40%"
            document.getElementById("inimigo").style.width = "150px"
            document.getElementById("inimigo").style.height = "110px"
            document.getElementById("inimigo").style.margin = "15% 0 0 58%"
        }, tempoAtaque);
    } else if (pontuacao <= 2000) {
        document.getElementById("inimigo").style.backgroundImage = InimigoParado[1];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[1];
        document.getElementById("nomeInimigo").style.margin = "8.5% 0 -9.9% 43%";
        document.getElementById("inimigo").style.width = "150px"
        document.getElementById("inimigo").style.height = "110px"
        document.getElementById("inimigo").style.margin = "-117px 0 3px 800px"
    } else if (pontuacao <= 5000) {
        document.getElementById("inimigo").style.backgroundImage = InimigoParado[2];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[2];
        document.getElementById("nomeInimigo").style.margin = "-50px 0 2px 800px";
        document.getElementById("vidaInimigo").style.margin = "40px 0 -110px 800px"
        document.getElementById("inimigo").style.margin = "-110px 0 1px 598px"
    } else if (pontuacao <= 7000) {
        document.getElementById("inimigo").style.backgroundImage = InimigoParado[3];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[3];
        document.getElementById("inimigo").style.width = "330px"
        document.getElementById("inimigo").style.height = "280px"
        document.getElementById("vidaInimigo").style.margin = "-165px 0 -10px 800px"
        document.getElementById("inimigo").style.margin = "-260px 0 2px 650px"
    } else if (pontuacao <= 8000) {
        document.getElementById("inimigo").style.backgroundImage = InimigoParado[4];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[4];
        document.getElementById("inimigo").style.width = "265px"
        document.getElementById("inimigo").style.height = "200px"
        document.getElementById("inimigo").style.transform = "none"
        document.getElementById("vidaInimigo").style.margin = "-185px 0 -10px 800px"
        document.getElementById("inimigo").style.margin = "-200px 0 50px 650px"
    } else if (pontuacao <= 9000) {
        document.getElementById("inimigo").style.backgroundImage = InimigoParado[5];
        document.getElementById("inimigo").style.height = "250px"
        document.getElementById("inimigo").style.width = "225px"
        document.getElementById("vidaInimigo").style.margin = "-100px 0 10px 800px"
        document.getElementById("inimigo").style.margin = "-240px 0 20px 800px"
    } else if (pontuacao <= 10000) {
        document.getElementById("inimigo").style.backgroundImage = InimigoParado[6];
        document.getElementById("nomeInimigo").style.display = "none";
        document.getElementById("inimigo").style.height = "240px"
        document.getElementById("inimigo").style.width = "450px"
        document.getElementById("inimigo").style.scale = "1"
        ddocument.getElementById("vidaInimigo").style.margin = "-185px 0 10px 800px"
        document.getElementById("inimigo").style.margin = "-365px 0 -15px 650px"
        document.getElementById("nomeInimigo").style.backgroundColor = "none";
        document.getElementById("nomeInimigo").style.display = "none";
    }


}

function inimigosAtacando() {
    if (pontuacao <= 1000) {
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[0];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[0];
        document.getElementById("nomeInimigo").style.margin = "9.2% 0 -9% 58%";
        document.getElementById("vidaInimigo").style.margin = "9% 0 -10.4% 58%"
        document.getElementById("vidaInimigoImg").style.margin = "8.5% 0 -21.2% 55%"
        document.getElementById("inimigo").style.width = "350px"
        document.getElementById("inimigo").style.height = "130px"
        document.getElementById("inimigo").style.margin = "-7.5% 1.9% 0 50%"
    } else if (pontuacao <= 2000) {
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[1];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[1];
        document.getElementById("inimigo").style.width = "150px"
        document.getElementById("inimigo").style.height = "100px"
        document.getElementById("vidaInimigo").style.margin = "8% 0 -10.4% 58%"
        document.getElementById("vidaInimigoImg").style.margin = "8.5% 0 -21.2% 55%"
        document.getElementById("inimigo").style.margin = "-6% 1.5% -0.2% 50%"
    } else if (pontuacao <= 5000) {
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[2];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[2];
        document.getElementById("nomeInimigo").style.margin = "9.2% 0 -9% 58%";
        document.getElementById("vidaInimigo").style.margin = "7.8% 0 -10.4% 58%"
        document.getElementById("vidaInimigoImg").style.margin = "8.5% 0 -20.4% 55%";
        document.getElementById("inimigo").style.height = "150px"
        document.getElementById("inimigo").style.margin = "-9% 1.5% -0.2% 50%"
    } else if (pontuacao <= 7000) {
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[3];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[3];
        document.getElementById("inimigo").style.width = "330px"
        document.getElementById("inimigo").style.height = "280px"
        document.getElementById("nomeInimigo").style.margin = "-14.5% 0 -15% 58%"
        document.getElementById("vidaInimigo").style.margin = "-13.5% 0 -10.4% 58%"
        document.getElementById("vidaInimigoImg").style.margin = "8.5% 0 -10.4% 55%"
        document.getElementById("inimigo").style.margin = "-16% 1.5% 0.5% 50%"
        document.getElementById("inimigo").style.scale = "1"
    } else if (pontuacao <= 8000) {
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[4];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[4];
        document.getElementById("nomeInimigo").style.margin = "-14.5% 0 -15% 58%"
        document.getElementById("vidaInimigo").style.margin = "-14.5% 0 -10.4% 58%"
        document.getElementById("vidaInimigoImg").style.margin = "8.5% 0 -11.4% 55%"
        document.getElementById("inimigo").style.width = "315px"
        document.getElementById("inimigo").style.transform = "none"
        document.getElementById("inimigo").style.margin = "-13.5% 1.5% -0.5% 50%"
    } else if (pontuacao <= 9000) {
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[5];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[5];
        document.getElementById("inimigo").style.height = "250px"
        document.getElementById("inimigo").style.width = "255px"
        document.getElementById("nomeInimigo").style.margin = "-14.5% 0 -15% 58%"
        document.getElementById("vidaInimigo").style.margin = "-14.5% 0 -10.4% 58%"
        document.getElementById("vidaInimigoImg").style.margin = "8.5% 0 -8.4% 55%"
        document.getElementById("inimigo").style.margin = "-13.5% 1.5% -0.5% 50%"
    } else if (pontuacao <= 10000) {
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[6];
        document.getElementById("vidaInimigo").innerHTML = inimigoNome[6];
        document.getElementById("vidaInimigo").style.width = "100vw"
        document.getElementById("vidaInimigo").style.height = "3vw"
        document.getElementById("vidaInimigo").style.margin = "52.5% 0 -48% 0%"
        document.getElementById("vidaInimigoImg").style.display = "none"
        document.getElementById("inimigo").style.height = "390px"
        document.getElementById("inimigo").style.width = "100vw"
        document.getElementById("inimigo").style.margin = "-12.5% 0 4.5% 50%"
    } else {
        //fimAventura();

    }


}

function vidaSuperPosicao() {
    if (pontuacao <= 1000) {
        document.getElementById("vidaSuper").style.margin = "10% 0 -10.9% 26%"/* freme da vida depois do primeiro golpe */
        document.getElementById("vidaSuperImg").style.margin = "9% 0 -11.1% 25%";
    } else if (pontuacao <= 2000) {
        document.getElementById("vidaSuper").style.margin = "10% 0 -10.9% 26%"
        document.getElementById("vidaSuperImg").style.margin = "9% 0 -10.1% 25%";
    } else if (pontuacao <= 5000) {
        document.getElementById("vidaSuper").style.margin = "10% 0 -10.9% 26%"
        document.getElementById("vidaSuperImg").style.margin = "9% 0 -10.1% 25%";
    } else if (pontuacao <= 7000) {
        document.getElementById("vidaSuper").style.margin = "28.5% 0 -19.9% 26%"
        document.getElementById("vidaSuperImg").style.margin = "18.1% 0 -10.1% 23%";
    } else if (pontuacao <= 8000) {
        document.getElementById("vidaSuper").style.margin = "28.5% 0 -19.9% 26%"
        document.getElementById("vidaSuperImg").style.margin = "18.1% 0 -10.1% 23%";
    } else if (pontuacao <= 9000) {
        document.getElementById("vidaSuper").style.margin = "29% 0 -19.9% 26%";
        document.getElementById("vidaSuperImg").style.margin = "18.1% 0 -10.1% 23%";
    } else if (pontuacao <= 10000) {
        document.getElementById("vidaSuper").style.margin = "39.8% 0 -19.9% 26%";
        document.getElementById("vidaSuperImg").style.margin = "18.1% 0 -33.1% 23%";
        document.getElementById("nomeSuper").style.margin = "8.8% 0 -24.9% 26%";
    }
}


function tempoAtaqueInimigo() {
    document.getElementById("super").style.margin = "24.5% 0 0.6% 30%" /* apareção do heroi parado */
    ataqueInimigo = setInterval(function tempoAtaqueInimigo() {
        vidaSuper = vidaSuper - danoInimigo;
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[0]
        document.getElementById("vidaSuper").innerHTML = "Vida: " + vidaSuper;
        document.getElementById("vidaSuper").style.margin = "-5% 0 -10.7% 30%"
        if (document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[0]) {
            document.getElementById("inimigo").style.width = "350px"
            document.getElementById("inimigo").style.marginLeft = "650px"
        }
        inimigosAtacando();
        morteSuper();
        if (document.getElementById("inimigo").style.display = "none") {
            document.getElementById("inimigo").style.display = "block";
            vidaSuperPosicao();
            document.getElementById("super").style.margin = "28.5% 0 1% 30%"
            cenarioMuda();
            morteSuper();
        } else if (vidaInimigo === -1 && document.getElementById("inimigo").style.display == "none") {
            pararAtaque();
        }
    }, tempoAtaque);
}

function pararAtaque() {
    clearInterval(ataqueInimigo);
}

function morteSuper() {
    if (vidaSuper <= 0) {
        gameOver();
        inimigosParados();
        document.getElementById("vidaSuper").innerHTML = "Vida: 0";
        pararAtaque();
    }
}

function atacarInimigo() {
    document.getElementById("inimigo").style.backgroundImage = InimigoParado[0];
    document.getElementById("nomeInimigo").innerHTML = inimigoNome[0];
    document.getElementById("nomeInimigo").style.margin = "9.3% 0 -20.9% 58%";/* nome do inimigo no inicio */
    document.getElementById("vidaInimigo").style.margin = "8.5% 0 -25.9% 80%";/* vida do inimigo no inicio */
    document.getElementById("vidaInimigoImg").style.backgroundImage = vidaInimigoImg;
    document.getElementById("vidaInimigoImg").style.zIndex = "-1";
    document.getElementById("vidaInimigoImg").style.margin = "24.8% 0 -18% 55%"
    document.getElementById("inimigo").style.height = "110px"
    document.getElementById("inimigo").style.margin = "-5.5% 0 0.1% 58%"
    tempoAtaqueInimigo();

}

function matarInimigo() {
    document.getElementById("inimigo").style.display = "none";
    document.getElementById("vidaInimigo").innerHTML = "";
    pontuacao = pontuacao + 1000;
    totalVidaInimigo = totalVidaInimigo + 10;
    vidaInimigo = totalVidaInimigo;
    document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    vidaTotalSuper = vidaSuper + 20;
    vidaSuper = vidaTotalSuper;
    document.getElementById("super").style.backgroundImage = Super[0];
    document.getElementById("super").style.margin = "16.5% 0 0.9% 21.5%"
}

function pontuacaoDificuldade() {
    var pontuacaoDificuldadeFinal = classificacoes.at();
    if (pontuacao <= 1000) {
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(0);
        document.getElementById("pontosFinaisGameOver").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao <= 2000) {
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(1);
        document.getElementById("pontosFinaisGameOver").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao <= 5000) {
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(2);
        document.getElementById("pontosFinaisGameOver").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao <= 7000) {
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(3);
        document.getElementById("pontosFinaisGameOver").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao <= 8000) {
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(4);
        document.getElementById("pontosFinaisGameOver").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao <= 9000) {
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(5);
        document.getElementById("pontosFinaisGameOver").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao <= 10000) {
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(7);
        document.getElementById("pontosFinaisGameOver").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao >= 10001) {
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(7);
        document.getElementById("pontosFinaisGameOver").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    }

}



function barraVidaInimigo() {
    document.getElementById("vidaInimigo").style.backgroundColor = "red";
    var vidaTotal = parseInt(document.getElementById("vidaInimigo").style.width) || 150;
    var vida = vidaInimigo;

    if (vidaInimigo > 0 && pontuacao < 9999) {
        document.getElementById("vidaInimigo").style.width = `${vidaTotal -= 10}px`; // Diminui 10 de vida ao pressionar a tecla espaço
        if (vida == 1) {
            document.getElementById("vidaInimigo").style.width = `${vidaTotal = 0}px`; // Garante que a vida do inimigo não fique negativa
        }
        if (vida <= -1 && vidaTotal <= -1) {
            document.getElementById("vidaInimigo").style.width = `${vidaTotal = 0}px`;
        }

    } else if (pontuacao > 9999) {
        var vidaTotalChefao = parseInt(document.getElementById("vidaInimigo").style.width) || 1200;
        if (vidaInimigo > 0 && pontuacao > 9999) {
            vidaTotalChefao = document.getElementById("vidaInimigo").style.width = `${vidaTotalChefao -= 100}px`;
        }
    }


}

function atacar() {
    document.getElementById("vidaSuper").innerHTML = "Vida: " + vidaSuper;
    document.getElementById("vidaInimigo").innerHTML = vidaInimigo;
    vidaInimigo = vidaInimigo - ataqueSuper;
    barraVidaInimigo();
    document.getElementById("vidaInimigo").style.margin = "-180px 0 139px 820px"
    document.getElementById("super").style.backgroundImage = Super[1];
    document.getElementById("super").style.margin = "16.4% 0 1% 28%" /* Freme do heroi batendo a partir do segundo golpe */

    if (vidaInimigo <= -1) {
        matarInimigo();

    }

    if (pontuacao <= 1000) {
        document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[0];
        document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
        document.getElementById("vidaInimigo").style.margin = "9% 0 -9.2% 58%"
        document.getElementById("vidaInimigoImg").style.margin = "7.3% 0 -9.1% 55%"
    } else if (pontuacao <= 2000) {
        document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[1];
        document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
        document.getElementById("vidaInimigo").style.margin = "8% 0 -10.9% 58%"
        document.getElementById("vidaInimigoImg").style.margin = "9% 0 -9.1% 55%"
        ataqueSuper = 2;
    } else if (pontuacao <= 5000) {
        document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[2];
        document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
        danoInimigo = 2;
        document.getElementById("vidaSuper").style.margin = "10% 0 -10.9% 26%"
        document.getElementById("vidaSuperImg").style.margin = "9% 0 -9.9% 25%"
        document.getElementById("vidaInimigo").style.margin = "7.6% 0 -10.9% 58%"
        document.getElementById("vidaInimigoImg").style.margin = "9% 0 -8.3% 55%"

    } else if (pontuacao <= 7000) {
        document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[3];
        document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
        document.getElementById("vidaInimigo").style.margin = "-13.5% 0 -10.9% 58%"
        document.getElementById("vidaInimigoImg").style.margin = "9% 0 -8.3% 55%"
        document.getElementById("inimigo").style.margin = "-8% 0 0.5% 50%"
        document.getElementById("super").style.margin = "26% 0 -14.5% 30%"
        ataqueSuper = 3;
    } else if (pontuacao <= 8000) {
        document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[4];
        document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
        danoInimigo = 4;
        document.getElementById("vidaInimigo").style.margin = "-14.5% 0 -10.9% 58%"
        document.getElementById("vidaInimigoImg").style.margin = "9% 0 5% 55%"
        document.getElementById("inimigo").style.margin = "-11.5% 0 -1.5.% 50%"
    } else if (pontuacao <= 9000) {
        document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[5];
        document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
        document.getElementById("fundoPontuacao").style.backgroundImage = fundoPontuacao[1];
        document.getElementById("fundoPontuacao").style.margin = "-4% 0% 0 22%";
        ataqueSuper = 4;
        document.getElementById("vidaInimigo").style.margin = "-14.5% 0 -10.9% 58%"
        document.getElementById("vidaInimigoImg").style.margin = "9% 0 20% 55%"
        document.getElementById("inimigo").style.margin = "-11.5% 0 0.5.% 50%"
    } else if (pontuacao <= 10000) {
        document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[7];
        document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
        danoInimigo = 10;
        document.getElementById("vidaInimigo").style.margin = "52.5% 0 -35% 0%"
        document.getElementById("inimigo").style.margin = "-12.5% 0 3.5% 50%"
        document.getElementById("vidaInimigo").innerHTML = inimigoNome[6]
    } else {
        fimAventura()
    }
}

function classificacoesFinais() {
    if (pontuacao <= 1000) {
        document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[0];
        document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao <= 2000) {
        document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[1];
        document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao <= 5000) {
        document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[2];
        document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao <= 7000) {
        document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[3];
        document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao <= 8000) {
        document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[4];
        document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao <= 9000) {
        document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[5];
        document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao <= 10000) {
        document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[6];
        document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else if (pontuacao >= 10001) {
        document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[7];
        document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    } else {
        document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: " + classificacoes[0];
        document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
    }

}
function gameOver() {
    var nomes = document.getElementById("nome").value;
    document.getElementById("conteiner2").style.display = "none";
    document.getElementById("conteiner7").style.display = "block";
    document.getElementById("cenarioGameOver").style.backgroundImage = fundo[5];
    document.getElementById("cenarioGameOver").style.zIndex = "-2";
    document.getElementById("cenarioGameOver").style.backgroundSize = "100vw 100vh"
    document.getElementById("cenarioGameOver").style.backgroundRepeat = "no-repeat";
    document.getElementById("gameOver").innerHTML = "GAME OVER";
    document.getElementById("lapide").style.backgroundSize = "128vw 90vh"
    document.getElementById("rip").innerHTML = "R.I.P";
    document.getElementById("nomeGameOver").innerHTML = nomes;
    pontuacaoDificuldade();
}

function fimAventura() {
    var nomes = document.getElementById("nome").value;
    document.getElementById("conteiner2").style.display = "none";
    document.getElementById("conteiner7").style.display = "none";
    document.getElementById("conteiner6").style.display = "block";
    document.getElementById("parabens").innerHTML = "PARABENS !";
    document.getElementById("texto").innerHTML = nomes + ", " + mensagemAleatoria;
    document.getElementById("recarregar").style.margin = "125px 0 210px 550px"
    classificacoesFinais();
}

function recarregarAPagina() {
    window.location.reload();
} 
