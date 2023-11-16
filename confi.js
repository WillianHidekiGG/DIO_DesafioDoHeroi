function confirmar(){
    var nomes = document.getElementById("nome").value;
    document.getElementById("conteiner1").style.display = "none";
    document.getElementById("conteiner2").style.display = "block";
    document.getElementById("nomeSuper").innerHTML = nomes;
}

var pontuacao = 1;
const classifica = document.getElementById("classificacaoPontos").innerHTML = "NIVEL DO SEU HERÓI É: "
var classificacoes = ["ferro","bronze", "prata", "ouro", "platina", "Ascendente", "Imortal", "Radiante"]

// if(pontuacao <= 250){
//     document.getElementById("classificacaoPontos").innerHTML = classifica + classificacoes[0];
// }else if(pontuacao <= 500){
//     document.getElementById("classificacaoPontos").innerHTML = classifica + classificacoes[1];
// }

//function classificacaoPontos(){

//}

