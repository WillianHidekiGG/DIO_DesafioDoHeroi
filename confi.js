var pontuacao = 0;
var classificacoes = ["FERRO","BRONZE", "PRATA", "OURO", "PLATINA", "ASCENDENTAL", "INMORTAL", "RADIANTE"]
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
var vidaSuper= 10;
var vidaTotalSuper = 10;
var tempoAtaque = 1000;
var ataqueInimigo;
var danoInimigo = 1;
var dano = 0;
// let classificacaoFinal = classificacoesFinais();
var somFundo = document.createElement("musicaFundo");

function cenarioMuda(){
if(pontuacao <= 1000){
    
    document.getElementById("cenario").style.backgroundImage = fundo[0];
    document.getElementById("cenario").style.zIndex= "-1";
    document.getElementById("cenario").style.backgroundSize = "100vw 80vh"
    document.getElementById("cenario").style.backgroundRepeat = "no-repeat";
    
    }else if(pontuacao <= 2000){
    document.getElementById("cenario").style.backgroundImage = fundo[0];
    document.getElementById("cenario").style.zIndex= "-1";
    document.getElementById("cenario").style.backgroundSize = "100vw 80vh"
    document.getElementById("cenario").style.backgroundRepeat = "no-repeat";
       }else if (pontuacao <= 5000) {
        document.getElementById("cenario").style.backgroundImage = fundo[0];
        document.getElementById("cenario").style.zIndex= "-1";
        document.getElementById("cenario").style.backgroundSize = "100vw 80vh"
        document.getElementById("cenario").style.backgroundRepeat = "no-repeat";
       }else if (pontuacao <= 7000) {
        document.getElementById("cenario").style.backgroundImage = fundo[1];
        document.getElementById("cenario").style.zIndex= "-1";
        document.getElementById("cenario").style.backgroundSize = "100vw 80vh"
        document.getElementById("cenario").style.backgroundRepeat = "no-repeat";
       }else if(pontuacao <= 8000){
        document.getElementById("cenario").style.backgroundImage = fundo[2];
        document.getElementById("cenario").style.zIndex= "-1";
        document.getElementById("cenario").style.height = "110vh"
        document.getElementById("cenario").style.backgroundRepeat = "no-repeat"
        document.getElementById("cenario").style.backgroundSize = "100vw 80vh"
        document.getElementById("cenario").style.bottom = "-60px"
        }else if(pontuacao <= 9000){
            document.getElementById("cenario").style.backgroundImage = fundo[3];
            document.getElementById("cenario").style.backgroundSize = "100vw 80vh"
        }else if(pontuacao <= 10000){
            document.getElementById("cenario").style.backgroundImage = fundo[4];
            document.getElementById("cenario").style.backgroundSize = "100vw 100vh"
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
        document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[0];
        document.getElementById("pontuação").innerHTML ="EXPERIÊNCIA: " + pontuacao;
        document.getElementById("vidaSuper").innerHTML = "Vida: " + vidaSuper;
        document.getElementById("vidaSuper").style.margin = "243px 0 165px 409px";
        document.getElementById("vidaSuper").style.backgroundColor = "red";
        document.getElementById("vidaSuperImg").style.backgroundImage = vidaImg;
        document.getElementById("vidaSuperImg").style.zIndex= "-1";
        document.getElementById("vidaSuperImg").style.margin = "-200px 0 47px 360px";
        document.getElementById("super").style.backgroundImage = Super[0];
        document.getElementById("super").style.margin = "270px 0 5px 405px"
        document.getElementById("cenario").style.backgroundImage = cenarioMuda();
        atacarInimigo();
                window.addEventListener('keyup', function(e) {
                        var codigoTecla = e.which || e.keyCode || 0;
                        var recomecar = codigoTecla == 82;
                        if (recomecar){
                window.location.reload();
                                        };
                });

                window.addEventListener('keyup', function(e) {
                    var codigoTecla = e.which || e.keyCode || 0;
                    var space = codigoTecla == 32;
                    if (space){
                      atacar();
                      };
                  });
        
            }    
        
    }




window.addEventListener('keyup', function(e) {
    var codigoTecla = e.which || e.keyCode || 0;
    var terminarAventura = codigoTecla == 84;
    if (terminarAventura){
        fimAventura();
      };
  });



function inimigosParados(){
        if(pontuacao <= 1000){
        setTimeout(() => {
            document.getElementById("inimigo").style.backgroundImage = InimigoParado[0];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[0];
            document.getElementById("vidaInimigo").style.margin = "-40px 0 -315px 775px"
            document.getElementById("vidaInimigoImg").style.margin = "278px 0 -230px 765px"
            document.getElementById("inimigo").style.width = "150px"
            document.getElementById("inimigo").style.height = "110px"
            document.getElementById("inimigo").style.margin = "-117px 0 3px 800px"
        }, tempoAtaque);
        }else if(pontuacao <= 2000){
                document.getElementById("inimigo").style.backgroundImage = InimigoParado[1];
                document.getElementById("nomeInimigo").innerHTML = inimigoNome[1];
                document.getElementById("nomeInimigo").style.margin = "-50px 0 2px 800px";
                document.getElementById("inimigo").style.width = "150px"
                document.getElementById("inimigo").style.height = "110px"
                document.getElementById("inimigo").style.margin = "-117px 0 3px 800px"
           }else if (pontuacao <= 5000) {
            document.getElementById("inimigo").style.backgroundImage = InimigoParado[2];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[2];
            document.getElementById("nomeInimigo").style.margin = "-50px 0 2px 800px";
            document.getElementById("vidaInimigo").style.margin = "40px 0 -110px 800px"
            document.getElementById("inimigo").style.margin = "-110px 0 1px 598px"
           }else if (pontuacao <= 7000) {
            document.getElementById("inimigo").style.backgroundImage = InimigoParado[3];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[3];
            document.getElementById("inimigo").style.width = "330px"
            document.getElementById("inimigo").style.height = "280px"
            document.getElementById("vidaInimigo").style.margin = "-165px 0 -10px 800px"
            document.getElementById("inimigo").style.margin = "-260px 0 2px 650px"
           }else if(pontuacao <= 8000){
                document.getElementById("inimigo").style.backgroundImage = InimigoParado[4];
                document.getElementById("nomeInimigo").innerHTML = inimigoNome[4];
                document.getElementById("inimigo").style.width = "265px"
                document.getElementById("inimigo").style.height = "200px"
                document.getElementById("inimigo").style.transform = "none"
                document.getElementById("vidaInimigo").style.margin = "-185px 0 -10px 800px"
                document.getElementById("inimigo").style.margin = "-200px 0 50px 650px"
            }else if(pontuacao <= 9000){
                document.getElementById("inimigo").style.backgroundImage = InimigoParado[5];
                document.getElementById("inimigo").style.height = "250px"
                document.getElementById("inimigo").style.width = "225px"
                document.getElementById("vidaInimigo").style.margin = "-100px 0 10px 800px"
                document.getElementById("inimigo").style.margin = "-240px 0 20px 800px"
            }else if(pontuacao <= 10000){
                document.getElementById("inimigo").style.backgroundImage = InimigoParado[6];
                document.getElementById("inimigo").style.height = "240px"
                document.getElementById("inimigo").style.width = "450px"
                document.getElementById("inimigo").style.scale = "1"
                ddocument.getElementById("vidaInimigo").style.margin = "-185px 0 10px 800px"
                document.getElementById("inimigo").style.margin = "-365px 0 -15px 650px"
            }


}

function inimigosAtacando(){
    if(pontuacao <= 1000){
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[0];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[0];
        document.getElementById("nomeInimigo").style.margin = "-30px 0 185px 785px"
        document.getElementById("vidaInimigo").style.margin = "-40px 0 -315px 775px"
        document.getElementById("vidaInimigoImg").style.margin = "278px 0 -230px 765px"
        document.getElementById("inimigo").style.width = "350px"
        document.getElementById("inimigo").style.height = "130px"
        document.getElementById("inimigo").style.margin = "-137px 0 3px 650px"
       }else if(pontuacao <= 2000){
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[1];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[1];
        document.getElementById("inimigo").style.width = "150px"
        document.getElementById("inimigo").style.height = "100px"
        document.getElementById("vidaInimigo").style.margin = "-40px 0 -222px 775px"
        document.getElementById("vidaInimigoImg").style.margin = "185px 0 -235px 765px"
        document.getElementById("inimigo").style.margin = "-105px 0 1px 790px"
       }else if(pontuacao <= 5000){
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[2];
        document.getElementById("nomeInimigo").innerHTML = inimigoNome[2];
        document.getElementById("nomeInimigo").style.margin = "-15px 0 42px 800px"
        document.getElementById("vidaInimigo").style.margin = "70px 0 -240px 775px"
        document.getElementById("vidaInimigoImg").style.margin = "203px 0 -250px 765px"
        document.getElementById("inimigo").style.height = "150px"
        document.getElementById("inimigo").style.margin = "-150px 0 2px 598px"
        }else if(pontuacao <= 7000){
            document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[3];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[3];
            document.getElementById("inimigo").style.width = "330px"
            document.getElementById("inimigo").style.height = "280px"
            document.getElementById("nomeInimigo").style.margin = "-130px 0 80px 800px"
            document.getElementById("vidaInimigo").style.margin = "30px 0 -160px 800px"
            document.getElementById("inimigo").style.margin = "-260px 0 -2px 650px"
            document.getElementById("inimigo").style.scale = "1"
        }else if(pontuacao <= 8000){
            document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[4];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[4];
            document.getElementById("vidaInimigo").style.margin = "80px 0 -180px 800px"
            document.getElementById("inimigo").style.width = "315px"
            document.getElementById("inimigo").style.transform = "none"
            document.getElementById("inimigo").style.margin = "-240px 0 -13px 650px"
        }else if(pontuacao <= 9000){
            document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[5];
            document.getElementById("nomeInimigo").innerHTML = inimigoNome[5];
            document.getElementById("inimigo").style.height = "250px"
            document.getElementById("inimigo").style.width = "255px"
            document.getElementById("vidaInimigo").style.margin = "300px 0 -130px 800px"
            document.getElementById("inimigo").style.margin = "-250px 0 -5px 650px"
        }else if(pontuacao <= 10000){
            document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[6];
            document.getElementById("nomeInimigo").style.display = "none";
            document.getElementById("nomeSuper").style.margin = "40px 0 0px 405px";
            document.getElementById("vidaInimigo").innerHTML = inimigoNome[6];   
            document.getElementById("vidaInimigo").style.width = "100vw"
            document.getElementById("vidaInimigo").style.height = "3vw"
            document.getElementById("vidaInimigo").style.margin = "380px 0 -505px 0px"
            document.getElementById("inimigo").style.height = "390px"
            document.getElementById("inimigo").style.width = "100vw"
            document.getElementById("inimigo").style.margin = "-355px 0 20px 650px"
        }else{
            //fimAventura();
            
       }
    

    }

    function vidaSuperPosicao(){
        if(pontuacao <= 1000){
            document.getElementById("vidaSuper").style.margin = "-170px 0 118px 405px"
            document.getElementById("vidaSuperImg").style.margin = "-155px 0 0px 360px";
           }else if(pontuacao <= 2000){
            document.getElementById("vidaSuper").style.margin = "-170px 0 115px 405px"
            document.getElementById("vidaSuperImg").style.margin = "-155px 0 0px 360px";
           }else if(pontuacao <= 5000){
            document.getElementById("vidaSuper").style.margin = "-40px 0 -43px 405px"
            document.getElementById("vidaSuperImg").style.margin = "5px 0 -101px 360px";
            }else if(pontuacao <= 7000){
                document.getElementById("vidaSuper").style.margin = "100px 0 -135px 405px"
                document.getElementById("vidaSuperImg").style.margin = "-155px 0 0px 360px";
            }else if(pontuacao <= 8000){
                document.getElementById("vidaSuper").style.margin = "100px 0 -190px 405px"
                document.getElementById("vidaSuperImg").style.margin = "-155px 0 0px 360px";
            }else if(pontuacao <= 9000){
                document.getElementById("vidaSuper").style.margin = "120px 0 -430px 405px"
                document.getElementById("vidaSuperImg").style.margin = "-155px 0 0px 360px";
            }else if(pontuacao <= 10000){
                document.getElementById("vidaSuper").style.margin = "20px 0 -120px 405px"
                document.getElementById("vidaSuperImg").style.margin = "-155px 0 0px 360px";
            }
    }


function tempoAtaqueInimigo(){
    document.getElementById("super").style.margin = "270px 0 3px 405px"
    ataqueInimigo = setInterval(function tempoAtaqueInimigo(){
        vidaSuper = vidaSuper - danoInimigo;
        document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[0]
        document.getElementById("vidaSuper").innerHTML = "Vida: " + vidaSuper;
        document.getElementById("vidaSuper").style.margin = "-170px 0 120px 405px"
     if(document.getElementById("inimigo").style.backgroundImage = InimigoAtacando[0]){
            document.getElementById("inimigo").style.width = "350px"
            document.getElementById("inimigo").style.marginLeft = "650px"
        } 
    inimigosAtacando();
    morteSuper();
    if(document.getElementById("inimigo").style.display = "none"){
        document.getElementById("inimigo").style.display = "block";
        vidaSuperPosicao();
        document.getElementById("super").style.margin = "360px 0 0px 405px"
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
        gameOver();
        inimigosParados();
        document.getElementById("vidaSuper").innerHTML = "Vida: 0";
        pararAtaque();
   }
}

function atacarInimigo(){
    document.getElementById("inimigo").style.backgroundImage = InimigoParado[0];
    document.getElementById("nomeInimigo").innerHTML = inimigoNome[0];
    document.getElementById("vidaInimigo").style.margin = "-85px 0 -315px 775px"
    document.getElementById("vidaInimigoImg").style.backgroundImage = vidaInimigoImg;
    document.getElementById("vidaInimigoImg").style.zIndex= "-1";
    document.getElementById("vidaInimigoImg").style.margin = "278px 0 -146px 765px"
    document.getElementById("vidaInimigo").style.backgroundColor = "red";
    document.getElementById("nomeInimigo").style.margin = "-30px 0 -230px 785px"
    document.getElementById("inimigo").style.height = "110px"
    document.getElementById("inimigo").style.margin = "-115px 0 3px 800px"
    tempoAtaqueInimigo();

}

function matarInimigo(){
    document.getElementById("inimigo").style.display = "none";
    document.getElementById("vidaInimigo").innerHTML = "";
    pontuacao = pontuacao+1000;
    totalVidaInimigo = totalVidaInimigo+10;
    vidaInimigo = totalVidaInimigo;
    document.getElementById("pontuação").innerHTML ="EXPERIÊNCIA: " + pontuacao;
    vidaTotalSuper = vidaSuper + 20;
    vidaSuper = vidaTotalSuper;      
    document.getElementById("super").style.backgroundImage = Super[0];
    document.getElementById("super").style.margin = "270px 0 5px 405px"
}

function pontuacaoDificuldade(){
    var pontuacaoDificuldadeFinal = classificacoes.at();
    if(pontuacao <= 1000){
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(0);
        document.getElementById("pontosFinaisGameOver").innerHTML ="EXPERIÊNCIA: " + pontuacao;        
    }else if(pontuacao <= 2000){
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(1);
        document.getElementById("pontosFinaisGameOver").innerHTML ="EXPERIÊNCIA: " + pontuacao;
    }else if(pontuacao <= 5000){
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(2);
        document.getElementById("pontosFinaisGameOver").innerHTML ="EXPERIÊNCIA: " + pontuacao;
    }else if(pontuacao <= 7000){
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(3);
        document.getElementById("pontosFinaisGameOver").innerHTML ="EXPERIÊNCIA: " + pontuacao;
    }else if(pontuacao <= 8000){
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(4);
        document.getElementById("pontosFinaisGameOver").innerHTML ="EXPERIÊNCIA: " + pontuacao;
    }else if(pontuacao <= 9000){
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(5);
        document.getElementById("pontosFinaisGameOver").innerHTML ="EXPERIÊNCIA: " + pontuacao;
    }else if(pontuacao <= 10000){
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(7);
        document.getElementById("pontosFinaisGameOver").innerHTML ="EXPERIÊNCIA: " + pontuacao;
    }else if(pontuacao >= 10001){
        document.getElementById("classificacaoFinalGameOver").innerHTML = "A DIFICULDADE DA SUA AVENTURA FOI: " + classificacoes.at(7);
        document.getElementById("pontosFinaisGameOver").innerHTML ="EXPERIÊNCIA: " + pontuacao;
    }               

}

function atacar(){
    document.getElementById("vidaSuper").innerHTML = "Vida: " + vidaSuper;
    document.getElementById("vidaInimigo").innerHTML = vidaInimigo;
    vidaInimigo = vidaInimigo - ataqueSuper;
    document.getElementById("vidaInimigo").style.margin = "-180px 0 139px 800px"
    document.getElementById("super").style.backgroundImage = Super[1];
    document.getElementById("super").style.margin = "90px 0 3px 405px"
    
    if ( vidaInimigo <= -1){
        matarInimigo();
        
    }

    if(pontuacao <= 1000){
        document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[0];
        document.getElementById("pontuação").innerHTML ="EXPERIÊNCIA: " + pontuacao;
        document.getElementById("vidaInimigo").style.margin = "-40px 0 85px 775px"
        document.getElementById("vidaInimigoImg").style.margin = "-122px 0 128px 765px"
           }else if(pontuacao <= 2000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[1];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               document.getElementById("vidaInimigo").style.margin = "-40px 0 85px 775px"
               document.getElementById("vidaInimigoImg").style.margin = "-122px 0 128px 765px"
               ataqueSuper = 2;
           }else if(pontuacao <= 5000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[2];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               danoInimigo = 2;
               document.getElementById("vidaSuper").style.margin = "-40px 0 150px 405px"
               document.getElementById("vidaInimigo").style.margin = "-30px 0 120px 773px"
               document.getElementById("vidaInimigoImg").style.margin = "-157px 0 100px 765px"
               
           }else if(pontuacao <= 7000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[3];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               document.getElementById("vidaInimigo").style.margin = "30px 0 -160px 800px"
               document.getElementById("inimigo").style.margin = "-261px 0 -2px 650px"
               document.getElementById("super").style.margin = "358px 0 3px 405px"
               ataqueSuper = 3;
           }else if(pontuacao <= 8000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[4];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               danoInimigo = 5;
               document.getElementById("vidaInimigo").style.margin = "80px 0 177px 800px"
               document.getElementById("inimigo").style.marginBottom = "-16px"
           }else if(pontuacao <= 9000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[5];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               ataqueSuper = 4;
               document.getElementById("inimigo").style.margin = "-240px 0 -5px 650px"
               document.getElementById("vidaInimigo").style.margin = "300px 0 218px 800px"
           }else if(pontuacao <= 10000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[7];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               danoInimigo = 6;
               document.getElementById("inimigo").style.margin = "380px 0px -235px 0px"
               document.getElementById("vidaInimigo").style.margin = "380px 0px -235px 0px"
           }else if(pontuacao >= 10001){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[7];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               ataqueSuper = 10;
               document.getElementById("vidaInimigo").style.margin = "365px 0 -405px 0px"
           }else{
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[6];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }       
}

function classificacoesFinais(){
        if(pontuacao <= 1000){
            document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[0];
            document.getElementById("pontosFinais").innerHTML ="EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 2000){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[1];
               document.getElementById("pontosFinais").innerHTML ="EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 5000){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[2];
               document.getElementById("pontosFinais").innerHTML ="EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 7000){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[3];
               document.getElementById("pontosFinais").innerHTML ="EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 8000){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[4];
               document.getElementById("pontosFinais").innerHTML ="EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 9000){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[5];
               document.getElementById("pontosFinais").innerHTML ="EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 10000){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[6];
               document.getElementById("pontosFinais").innerHTML ="EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao >= 10001){
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[7];
               document.getElementById("pontosFinais").innerHTML ="EXPERIÊNCIA: " + pontuacao;
           }else{
               document.getElementById("classificacaoFinal").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[0];
               document.getElementById("pontosFinais").innerHTML ="EXPERIÊNCIA: " + pontuacao;
           }
        
}
 function gameOver(){
    var nomes = document.getElementById("nome").value;
    document.getElementById("conteiner2").style.display = "none";
    document.getElementById("conteiner7").style.display = "block";
    document.getElementById("cenarioGameOver").style.backgroundImage = fundo[5];
    document.getElementById("cenarioGameOver").style.zIndex= "-2";
    document.getElementById("cenarioGameOver").style.backgroundSize = "100vw 100vh"
    document.getElementById("cenarioGameOver").style.backgroundRepeat = "no-repeat";
    document.getElementById("gameOver").innerHTML = "GAME OVER";
    document.getElementById("lapide").style.backgroundSize = "128vw 90vh"
    document.getElementById("rip").innerHTML = "R.I.P"; 
    document.getElementById("nomeGameOver").innerHTML = nomes; 
    pontuacaoDificuldade();
}

function fimAventura(){
    var nomes = document.getElementById("nome").value;
    document.getElementById("conteiner2").style.display = "none";
    document.getElementById("conteiner6").style.display = "block";
    document.getElementById("parabens").innerHTML = "PARABENS !";
    document.getElementById("texto").innerHTML = "PELA SUA AVENTURA " + nomes; 
    classificacoesFinais();
          
}

function recarregarAPagina(){
    window.location.reload();
} 
