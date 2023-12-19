var pontuacao = 0;
var classificacoes = ["FERRO","BRONZE", "PRATA", "OURO", "PLATINA", "ASCENDENTAL", "INMORTAL", "RADIANTE"]
var vidaInimigo = 5;
var totalVidaInimigo = 5;
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

var Super = ["url(img/super/super_parado.gif)", "url(img/super/super_atacando.gif)"];

var fundo = ["url(img/cenario/cenarioFloresta.jpg)", "url(img/cenario/cenarioDeserto.jpg)", "url(img/cenario/cenarioLava.gif)", "url(img/cenario/cenarioMorte.jpg)", "url(img/cenario/cenarioChefão.jpg)"];
var ataqueSuper = 1;
var vidaSuper= 10;
var vidaTotalSuper = 10;
var tempoAtaque = 1000;
var ataqueInimigo;
var danoInimigo = 1;
var dano = 0;
var somFundo = document.createElement("musicaFundo");

function cenarioMuda(){
if(pontuacao <= 1000){
    
    document.getElementById("cenario").style.backgroundImage = fundo[0];
    document.getElementById("cenario").style.zIndex= "-1";
    document.getElementById("cenario").style.backgroundSize = "100vw 100vh"
    document.getElementById("cenario").style.backgroundRepeat = "no-repeat";
    
    }else if(pontuacao <= 2000){
    document.getElementById("cenario").style.backgroundImage = fundo[0];
    document.getElementById("cenario").style.zIndex= "-1";
    document.getElementById("cenario").style.backgroundSize = "100vw 100vh"
    document.getElementById("cenario").style.backgroundRepeat = "no-repeat";
       }else if (pontuacao <= 5000) {
        document.getElementById("cenario").style.backgroundImage = fundo[0];
        document.getElementById("cenario").style.zIndex= "-1";
        document.getElementById("cenario").style.backgroundSize = "100vw 100vh"
        document.getElementById("cenario").style.backgroundRepeat = "no-repeat";
       }else if (pontuacao <= 7000) {
        document.getElementById("cenario").style.backgroundImage = fundo[1];
        document.getElementById("cenario").style.zIndex= "-1";
        document.getElementById("cenario").style.backgroundSize = "100vw 100vh"
        document.getElementById("cenario").style.backgroundRepeat = "no-repeat";
       }else if(pontuacao <= 8000){
        document.getElementById("cenario").style.backgroundImage = fundo[2];
        document.getElementById("cenario").style.zIndex= "-1";
        document.getElementById("cenario").style.height = "110vh"
        document.getElementById("cenario").style.backgroundRepeat = "no-repeat"
        document.getElementById("cenario").style.backgroundSize = "100vw 100vh"
        document.getElementById("cenario").style.bottom = "-60px"
        }else if(pontuacao <= 9000){
            document.getElementById("cenario").style.backgroundImage = fundo[3];
        }else if(pontuacao <= 10000){
            document.getElementById("cenario").style.backgroundImage = fundo[4];
        }
   }

function confirmar(){
    var nomes = document.getElementById("nome").value;
    
        if(document.getElementById("nome").value == ""){
            alert("Informe um nome")
        }else{
        document.getElementById("conteiner1").style.display = "none";
        document.getElementById("conteiner2").style.display = "block";
        document.getElementById("nomeSuper").innerHTML = nomes;
        somFundo.setAttribute("autoplay", "autoplay");
        document.body.appendChild(somFundo);
        document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[0];
        document.getElementById("pontuação").innerHTML ="EXPERIÊNCIA: " + pontuacao;
        document.getElementById("vidaSuper").innerHTML = "Vida: " + vidaSuper;
        document.getElementById("super").style.backgroundImage = Super[0];
        document.getElementById("cenario").style.backgroundImage = cenarioMuda();
        atacarInimigo();
        }    
        
    }

function inimigosParados(){
        if(pontuacao <= 1000){
        setTimeout(() => {
            document.getElementById("inimigo").style.backgroundImage = InimigoParado[0];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[0];
            document.getElementById("inimigo").style.marginLeft = "790px"
            document.getElementById("inimigo").style.width = "150px"
            document.getElementById("inimigo").style.height = "110px"
            document.getElementById("inimigo").style.marginTop = "-113px"
        }, tempoAtaque);
        }else if(pontuacao <= 2000){
                document.getElementById("inimigo").style.backgroundImage = InimigoParado[1];
                document.getElementById("nomeInimigo").innerHTML = inimigoNome[1];
                document.getElementById("inimigo").style.width = "150px"
                document.getElementById("inimigo").style.marginLeft = "790px";
                document.getElementById("inimigo").style.marginTop = "-113px"
           }else if (pontuacao <= 5000) {
            document.getElementById("inimigo").style.backgroundImage = InimigoParado[2];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[2];
            document.getElementById("inimigo").style.marginLeft = "600px"
            document.getElementById("inimigo").style.marginTop = "-113px"
           }else if (pontuacao <= 7000) {
            document.getElementById("inimigo").style.backgroundImage = InimigoParado[3];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[3];
            document.getElementById("inimigo").style.width = "330px"
            document.getElementById("inimigo").style.height = "280px"
            document.getElementById("inimigo").style.marginTop = "-260px"
            document.getElementById("inimigo").style.marginLeft = "630px"
           }else if(pontuacao <= 8000){
                document.getElementById("inimigo").style.backgroundImage = InimigoParado[4];
                document.getElementById("nomeInimigo").innerHTML = inimigoNome[4];
                document.getElementById("inimigo").style.width = "265px"
                document.getElementById("inimigo").style.height = "200px"
                document.getElementById("inimigo").style.marginTop = "-200px"
                document.getElementById("inimigo").style.transform = "none"
                document.getElementById("inimigo").style.marginLeft = "700px"
            }else if(pontuacao <= 9000){
                document.getElementById("inimigo").style.backgroundImage = InimigoParado[5];
                document.getElementById("inimigo").style.height = "250px"
                document.getElementById("inimigo").style.width = "225px"
                document.getElementById("inimigo").style.marginLeft = "750px"
            }else if(pontuacao <= 10000){
                document.getElementById("inimigo").style.backgroundImage = InimigoParado[6];
                document.getElementById("inimigo").style.height = "240px"
                document.getElementById("inimigo").style.width = "450px"
                document.getElementById("inimigo").style.scale = "1"
                document.getElementById("inimigo").style.marginLeft = "600px"
                document.getElementById("inimigo").style.marginTop = "-255px"
            }


}

function inimigosAtacando(){
    if(pontuacao <= 1000){
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[0];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[0];
        document.getElementById("nomeInimigo").style.marginLeft = "285px"
        document.getElementById("inimigo").style.width = "350px"
        document.getElementById("inimigo").style.height = "130px"
        document.getElementById("inimigo").style.marginLeft = "650px"
        document.getElementById("inimigo").style.marginTop = "-135px"
       }else if(pontuacao <= 2000){
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[1];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[1];
        document.getElementById("inimigo").style.width = "150px"
        document.getElementById("inimigo").style.height = "110px"
        document.getElementById("inimigo").style.marginLeft = "790px"
        document.getElementById("inimigo").style.marginTop = "-113px"
       }else if(pontuacao <= 5000){
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[2];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[2];
        document.getElementById("nomeInimigo").style.marginLeft = "330px"
        document.getElementById("vidaInimigo").style.marginTop = "200px"
        document.getElementById("inimigo").style.marginLeft = "600px"
        document.getElementById("inimigo").style.height = "150px"
        document.getElementById("inimigo").style.marginTop = "-150px"
        }else if(pontuacao <= 7000){
            document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[3];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[3];
            document.getElementById("nomeInimigo").style.marginLeft = "270px"
            document.getElementById("vidaInimigo").style.marginTop = "100px"
            document.getElementById("inimigo").style.width = "330px"
            document.getElementById("inimigo").style.height = "280px"
            document.getElementById("inimigo").style.marginTop = "-275px"
            document.getElementById("inimigo").style.marginLeft = "680px"
            document.getElementById("inimigo").style.scale = "1"
        }else if(pontuacao <= 8000){
            document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[4];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[4];
            document.getElementById("inimigo").style.width = "315px"
            document.getElementById("inimigo").style.transform = "none"
            document.getElementById("inimigo").style.marginTop = "-260px"
            document.getElementById("inimigo").style.marginLeft = "700px"
        }else if(pontuacao <= 9000){
            document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[5];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[5];
            document.getElementById("inimigo").style.height = "250px"
            document.getElementById("inimigo").style.width = "255px"
            document.getElementById("inimigo").style.marginLeft = "700px"
        }else if(pontuacao <= 10000){
            document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[6];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[6];
            document.getElementById("vidaInimigo").style.marginTop = "50px"
            document.getElementById("inimigo").style.height = "390px"
            document.getElementById("inimigo").style.width = "450px"
            document.getElementById("inimigo").style.marginTop = "-400px"
        }else{
            //fimAventura();
            
       }
    

    }

function tempoAtaqueInimigo(){
    ataqueInimigo = setInterval(function tempoAtaqueInimigo(){
        vidaSuper = vidaSuper - danoInimigo;
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[0]
        document.getElementById("vidaSuper").innerHTML = "Vida: " + vidaSuper;
     if(document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[0]){
            document.getElementById("inimigo").style.width = "350px"
            document.getElementById("inimigo").style.marginLeft = "650px"
        } 
    inimigosAtacando();
    morteSuper();
    if(document.getElementById("inimigo").style.display = "none"){
        document.getElementById("inimigo").style.display = "block";
        cenarioMuda();
        morteSuper();
    }else if (vidaInimigo === -1 && document.getElementById("inimigo").style.display == "none"){
        pararAtaque();
       }
        },tempoAtaque);
}

function pararAtaque(){
            clearInterval(ataqueInimigo);      
}

function morteSuper(){
    if( vidaSuper <= 0){
       //fimAventura();
        inimigosParados();
        document.getElementById("vidaSuper").innerHTML = "Vida: 0";
        pararAtaque();
   }
}

function atacarInimigo(){
    document.getElementById("inimigo").style.backgroundImage = InimigoParado[0];
    document.getElementById("inimigo").style.height = "110px"
    tempoAtaqueInimigo();

}

function matarInimigo(){
    document.getElementById("inimigo").style.display = "none";
    document.getElementById("vidaInimigo").innerHTML = "";
    pontuacao = pontuacao+10000;
    totalVidaInimigo = totalVidaInimigo+10;
    vidaInimigo = totalVidaInimigo;
    document.getElementById("pontuação").innerHTML ="EXPERIÊNCIA: " + pontuacao;
    vidaTotalSuper = vidaSuper + 20;
    vidaSuper = vidaTotalSuper;      
    document.getElementById("super").style.backgroundImage = Super[0];
}

function atacar(){
    document.getElementById("vidaSuper").innerHTML = "Vida: " + vidaSuper;
    document.getElementById("vidaInimigo").innerHTML = vidaInimigo;
    vidaInimigo = vidaInimigo - ataqueSuper;
    document.getElementById("super").style.backgroundImage = Super[1];
    if ( vidaInimigo <= -1){
        matarInimigo();
        
    }

    if(pontuacao <= 1000){
        document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[0];
        document.getElementById("pontuação").innerHTML ="EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 2000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[1];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               ataqueSuper = 2;
           }else if(pontuacao <= 5000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[2];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               danoInimigo = 2;
           }else if(pontuacao <= 7000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[3];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               ataqueSuper = 3;
           }else if(pontuacao <= 8000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[4];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               danoInimigo = 5;
           }else if(pontuacao <= 9000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[5];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               ataqueSuper = 4;
           }else if(pontuacao <= 10000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[7];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               danoInimigo = 6;
           }else if(pontuacao >= 10001){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[7];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               ataqueSuper = 10;
           }else{
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[6];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }       
}

function fimAventura(){
    var nomes = document.getElementById("nome").value;
    document.getElementById("conteiner2").style.display = "none";
    document.getElementById("conteiner6").style.display = "block";
    document.getElementById("parabens").innerHTML = "PARABENS !";
    document.getElementById("texto").innerHTML = "PELA SUA AVENTURA " + nomes; 
    document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[0];
    document.getElementById("pontosFinais").innerHTML ="EXPERIÊNCIA: " + pontuacao;
    if(pontuacao <= 1000){
        document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[0];
        document.getElementById("pontosFinais").innerHTML ="EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 2000){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[1];
               document.getElementById("pontosFinais").innerHTML = "SCORE: " + pontuacao;
           }else if(pontuacao <= 5000){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[2];
               document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 7000){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[3];
               document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 8000){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[4];
               document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 9000){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[5];
               document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 10000){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[6];
               document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao >= 10001){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[7];
               document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else{
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[0];
               document.getElementById("pontosFinais").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }
          
}

function recarregarAPagina(){
    window.location.reload();
} 
