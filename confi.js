var pontuacao = 0;
var classificacoes = ["FERRO","BRONZE", "PRATA", "OURO", "PLATINA", "ASCENDENTAL", "INMORTAL", "RADIANTE"]
var vidaVilao = 5;

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
    }
  
}


function atacar(){
    document.getElementById("vidaVilao").innerHTML = vidaVilao;
    vidaVilao--;
    if (vidaVilao == -1){
        document.getElementById("inimigo").style.display = "none";
        document.getElementById("vidaVilao").innerHTML = "";
        pontuacao = pontuacao+1000;
        document.getElementById("pontuação").innerHTML ="EXPERIÊNCIA: " + pontuacao;
        vidaVilao = +10;
    }else if(vidaVilao === vidaVilao){
        document.getElementById("inimigo").style.display = "block";
    }
    if(pontuacao <= 1000){
        document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[0];
        document.getElementById("pontuação").innerHTML ="EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 2000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[1];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 5000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[2];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 7000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[3];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 8000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[4];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 9000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[5];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao <= 10000){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[6];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else if(pontuacao >= 10001){
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[7];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }else{
               document.getElementById("classificacaoPontos").innerHTML = "A DIFICULDADE DA SUA AVENTURA É: "  + classificacoes[0];
               document.getElementById("pontuação").innerHTML = "EXPERIÊNCIA: " + pontuacao;
           }
}


function fimAventura(){
    var nomes = document.getElementById("nome").value;
    document.getElementById("conteiner2").style.display = "none";
    document.getElementById("container6").style.display = "block";
    document.getElementById("parabens").innerHTML = "PARABÉNS PELA SUA AVENTURA " + nomes +" !";
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
