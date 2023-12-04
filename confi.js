var pontuacao = 0;
var classificacoes = ["FERRO","BRONZE", "PRATA", "OURO", "PLATINA", "ASCENDENTAL", "INMORTAL", "RADIANTE"]
var vidaInimigo = 5;
var totalVidaInimigo = 5;
var Inimigo = ["url(img/inimigo_parado.gif)", "url(img/inimigo_atacando.gif)"];
var Super = ["url(img/super_parado.gif)", "url(img/super_atacando.gif)"];
var ataqueSuper = 1;
var vidaSuper= 10;
var vidaTotalSuper = 10;
var tempoAtaque =1000;
var ataqueInimigo;
var danoInimigo = 1;
var dano = 0;

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
    document.getElementById("super").style.backgroundImage = Super[0];
    document.getElementById("inimigo").style.backgroundImage = Inimigo[0];
    atacarInimigo();
    }    
    
}

function tempoAtaqueInimigo(){
    ataqueInimigo = setInterval(function tempoAtaqueInimigo(){
    vidaSuper = vidaSuper - danoInimigo;
    document.getElementById("vidaSuper").innerHTML = "Vida: " + vidaSuper;
    document.getElementById("inimigo").style.backgroundImage = Inimigo[1];
    morteSuper();
    if(document.getElementById("inimigo").style.display = "none"){
        document.getElementById("inimigo").style.display = "block";
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
        document.getElementById("inimigo").style.backgroundImage = Inimigo[0];
        document.getElementById("vidaSuper").innerHTML = "Vida: 0";
        pararAtaque();
   }
}

function atacarInimigo(){
    tempoAtaqueInimigo();

}


    // var ataqueInimigo = setInterval(function tempoAtaqueInimigo(){
    //     vidaSuper--;
    //     document.getElementById("vidaSuper").innerHTML = "Vida: " + vidaSuper;
    //     document.getElementById("inimigo").style.backgroundImage = Inimigo[1];
    //     if(vidaSuper === 0 || vidaSuper === -1){
    //         //  fimAventura();
    //          pararAtaque();
    //          document.getElementById("inimigo").style.backgroundImage = Inimigo[0];
    //     }
    //     },1000)


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
               danoInimigo = 3;
           }else if(pontuacao <= 7000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[3];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               ataqueSuper = 3;
               danoInimigo = 5;
           }else if(pontuacao <= 8000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[4];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 9000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[5];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               ataqueSuper = 4;
           }else if(pontuacao <= 10000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[6];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               danoInimigo = 0;
           }else if(pontuacao >= 10001){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[7];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
               ataqueSuper = 10;
           }else{
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[0];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }       
}

// var superInativo = setInterval (function(){
// if(document.onclick == null && document.getElementById("super").style.backgroundImage == Super[1]){
//     document.getElementById("super").style.backgroundImage = Super[0]
// }
// },3000)

function fimAventura(){
    var nomes = document.getElementById("nome").value;
    document.getElementById("conteiner2").style.display = "none";
    document.getElementById("container6").style.display = "block";
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
