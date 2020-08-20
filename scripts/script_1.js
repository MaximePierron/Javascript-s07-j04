$(document).ready(function() {
let name = "";

while(!name) {
    name = prompt("Comment tu t'appelles ?");
}

let output = `Bonjour, ${name}`
console.log(output);
document.getElementById("demo").textContent += output;
})