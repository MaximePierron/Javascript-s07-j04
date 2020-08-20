$(document).ready(function() {

    let seum = 0;

    function AcneBot(question){
        if (question.substr(question.length - 1) === "?"){
            return "Ouais, Ouais ...";
        } else if (question === question.toUpperCase()){
            return "Pwa, calme-toi...";
        } else if (question.toLowerCase().includes("fortnite")){
            return "on s'fait une partie soum-soum ?";
        } else if (question === ""){
            return "t'es en PLS ?";
        } else if (question.toLowerCase.includes("j'en ai marre")){
            seum = 1;
            return "Vazy j'me pète la tchave, tu m'as saoulé !";            
        } else {
            return "balek.";
        }
    }

    let question;
    let reponse;

    while (seum!== 1){
    question = prompt("Qu'est-ce tu veux? Je te préviens si tu me dis - J'en ai marre - je me tire !");
    reponse = AcneBot(question);
    console.log(reponse);
    $('#result').text(reponse);
    }

})