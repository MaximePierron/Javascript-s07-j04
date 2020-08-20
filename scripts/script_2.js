$(document).ready(function() {
function facto(num)
{
    let result=1;
    for (let i = 2; i <= num; i++)
        result *= i;
    return result;
}


let number = Number(prompt("De quel nombre veux-tu calculer le factoriel ?"));
let output = "";
if (number === 0){
    output = `Le résultat est: 1`;
    console.log(output);
    document.getElementById("result").textContent += output;
} else if (number <0) {
    output = `Factoriel ne fontionne qu'avec des entiers positifs.`;
    console.log(output);
    document.getElementById("result").textContent += output;
} else if (Number.isInteger(number)){
    output = `Le résultat est: ${facto(number)}`;
    console.log(output);
    document.getElementById("result").textContent += output;
} else {
    coutput = `Factoriel ne fontionne qu'avec des entiers positifs.`;
    console.log(output);
    document.getElementById("result").textContent += output;
}
})