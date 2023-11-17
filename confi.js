var pontuacao = 10;

var classificacoes = ["FERRO","BRONZE", "PRATA", "OURO", "PLATINA", "ASCENDENTAL", "INMORTAL", "RADIANTE"]


function confirmar(){
    var nomes = document.getElementById("nome").value;

    if(document.getElementById("nome").value == ""){
        alert("Informe um nome")
    }else{
    document.getElementById("conteiner1").style.display = "none";
    document.getElementById("conteiner2").style.display = "block";
    document.getElementById("nomeSuper").innerHTML = nomes;
    }
   
    if(pontuacao <= 1000){
     document.getElementById("classificacaoPontos").innerHTML = "NIVEL DO SEU HERÓI É: "  + classificacoes[0];
     document.getElementById("pontuação").innerHTML ="SCORE: " + pontuacao;
        }else if(pontuacao <= 2000){
            document.getElementById("classificacaoPontos").innerHTML = "NIVEL DO SEU HERÓI É: "  + classificacoes[1];
            document.getElementById("pontuação").innerHTML = "SCORE: " + pontuacao;
        }else if(pontuacao <= 5000){
            document.getElementById("classificacaoPontos").innerHTML = "NIVEL DO SEU HERÓI É: "  + classificacoes[2];
            document.getElementById("pontuação").innerHTML = "SCORE: " + pontuacao;
        }else if(pontuacao <= 7000){
            document.getElementById("classificacaoPontos").innerHTML = "NIVEL DO SEU HERÓI É: "  + classificacoes[3];
            document.getElementById("pontuação").innerHTML = "SCORE: " + pontuacao;
        }else if(pontuacao <= 8000){
            document.getElementById("classificacaoPontos").innerHTML = "NIVEL DO SEU HERÓI É: "  + classificacoes[4];
            document.getElementById("pontuação").innerHTML = "SCORE: " + pontuacao;
        }else if(pontuacao <= 9000){
            document.getElementById("classificacaoPontos").innerHTML = "NIVEL DO SEU HERÓI É: "  + classificacoes[5];
            document.getElementById("pontuação").innerHTML = "SCORE: " + pontuacao;
        }else if(pontuacao <= 10000){
            document.getElementById("classificacaoPontos").innerHTML = "NIVEL DO SEU HERÓI É: "  + classificacoes[6];
            document.getElementById("pontuação").innerHTML = "SCORE: " + pontuacao;
        }else if(pontuacao >= 10001){
            document.getElementById("classificacaoPontos").innerHTML = "NIVEL DO SEU HERÓI É: "  + classificacoes[7];
            document.getElementById("pontuação").innerHTML = "SCORE: " + pontuacao;
        }else{
            document.getElementById("classificacaoPontos").innerHTML = "NIVEL DO SEU HERÓI É: "  + classificacoes[0];
            document.getElementById("pontuação").innerHTML = "SCORE: " + pontuacao;
        }
}



