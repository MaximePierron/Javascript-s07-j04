$(document).ready(function() {

        const seq1 = "CCGUCGUUGCGCUACAGC";
        const seq2 = "CCUCGCCGGUACUUCUCG";
    
    
        //On va séparer les séquences en groupe de 3 lettres
        //RegEx pour la découpe

        /*Par défaut, . (Le point) correspond à n'importe quel caractère excepté un caractère de saut de ligne.
        Ainsi, /.n/ correspond à 'un' et 'en' dans "Un baobab nain en cours de croissance" mais pas à 'nain'.
        Si le marqueur s (dotAll) est utilisé, le point correspondra également aux caractères de saut de ligne.*/

        /*{n,m} Lorsque n et m sont des entiers positifs, cela correspond à au moins n occurences de l'expression précédente et à au plus m occurrences.
        Lorsque m n'est pas utilisé, la valeur par défaut correspondante sera l'infini.
        Ainsi, /a{1,3}/ ne correspond à rien dans "Mozill", au 'a' de "Mozilla", au deux premiers 'a' de "Mozillaa" et au trois premiers 'a' de "Mozillaaaaa".
        Pour ce dernier exemple, on doit noter que le correspondance ne se fait que sur "aaa" bien qu'il y ait plus de 'a' dans la chaîne de caractères.*/

        //La méthode match() permet d'obtenir le tableau des correspondances entre la chaîne courante et une expression rationnelle.

        function TranslateRNAToProteinName(sequence){
            let ArRNA = sequence.match(/.{1,3}/g);
            console.log(ArRNA);
            for(let i = 0; i < ArRNA.length ; i ++ ){
                ArRNA[i] = MatchRNAWithName(ArRNA[i]);
            }
            return ArRNA.join("-");
        }

        //Avec Switch-case on va transformer ces groupes de lettre en nom de protéines
        function MatchRNAWithName(RNA){
            switch (RNA){
            case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC" :
                return "Sérine";
            case "CCU": case "CCC": case "CCA": case "CCG" :
                return "Proline";
            case "UUA": case "UUG": case "CUU": case "CUC": case "CUA": case "CUG" :
                return "Leucine";
            case "UUU": case "UUC" :
                return "Phénylalanine";
            case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG" :
                return "Arginine";
            case "UAU": case "UAC" :
                return "Tyrosine";
            default:
                console.log("Code ARN inconnu");
                break;
            }
        }
    
        //traduction de la sequence 1 :
        let result = TranslateRNAToProteinName(seq1);
        console.log(`La traduction de la séquence 1 ${seq1} est :`)
        console.log(result);
        $('#title1').text(`La traduction de la séquence 1 ${seq1} est :`);
        $('#result1').text(result);
    
        //traduction de la sequence 2 :
        result = TranslateRNAToProteinName(seq2);
        console.log(`La traduction de la séquence 2 ${seq2} est :`)
        console.log(result);
        $('#title2').text(`La traduction de la séquence 2 ${seq2} est :`);
        $('#result2').text(result);

})