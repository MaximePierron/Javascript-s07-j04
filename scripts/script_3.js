$(document).ready(function() {
function pyramide(floors)
{
    let pyroutput = "";
    
    for (let i = 1; i <= floors; i++){
        console.log((" ").repeat(floors-i) + ("#").repeat(i));
        pyroutput += (" ").repeat(floors-i) + ("#").repeat(i) + "\n";
    }
    return pyroutput;
}
    
    let floors = 0;
	while(floors <= 0) {
	  floors = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));
	}

    let output = pyramide(floors);
    let html = "";
    for(let i=0; i <= floors; i++){
        html = output.replaceAll("\n","<br>");
    }
    console.log(html);
	$('#result').html(html);
})