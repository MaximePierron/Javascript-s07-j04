$(document).ready(function() {
    const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

//Une fonction qui ne retourne l'élèment x que si l'attribut year a une valeur entre 1969 exclu et 1980 exclu

function BornInTheSeventies(x) {
    return x.year > 1969 && x.year < 1980;
}

//On filtre entrepreneurs en utilisant la fonction

let BornInThe70s = entrepreneurs.filter(BornInTheSeventies);
console.log("Liste des 1% né-e-s dans les années 70 : ");
console.log(BornInThe70s);
let output = "<h5>Liste des 1% né-e-s dans les années 70 : </h5> <br>";
for (let i=0;i < BornInThe70s.length ; i++){
    output += BornInThe70s[i].first +" "+ BornInThe70s[i].last + "<br />"; 
}
$('#result1').html(output);

//On parcourt entrepreneurs et on push dans un array à chaque itération l'attribut first et last

let FirstLast = [];
for (let i=0; i < entrepreneurs.length ; i++){
    FirstLast[i]={ Prénom: entrepreneurs[i].first,Nom: entrepreneurs[i].last};
}
console.log("Voici les noms et prénoms des 1% :");
console.log(FirstLast);
output = "<h5>Voici les noms et prénoms des 1% :</h5> <br>";
for (let i=0;i < FirstLast.length ; i++){
    output += FirstLast[i].Prénom +" "+ FirstLast[i].Nom + "<br>"; 
}
$('#result2').html(output);

//On parcourt entrepreneurs et à chaque itération on ajoute un attrribut age que l'on affiche ensuite
let FirstLastAge = [];
for (let i=0; i < entrepreneurs.length ; i++){
    entrepreneurs[i].age = (2020 - entrepreneurs[i].year);
    FirstLastAge[i]={ Prénom: entrepreneurs[i].first,Nom: entrepreneurs[i].last, Age: entrepreneurs[i].age};
}
console.log("Voici les noms et prénoms des 1% et leur âge:");
console.log(FirstLastAge);
output = "<h5>Voici les noms et prénoms des 1% et leur âge:</h5> <br>";
for (let i=0;i < FirstLast.length ; i++){
    output += FirstLastAge[i].Prénom +" "+ FirstLastAge[i].Nom + " : " + FirstLastAge[i].Age + " ans" + "<br>"; 
}
$('#result3').html(output);

//On crée une fonction comapraison entre a et b, si on a <0 a passe devant b, >0 b passe devant a, =0 rien ne change

function compare(a, b) {
// On met tout en majuscule pour se libérer de la casse
const LastA = a.last.toUpperCase();
const LastB = b.last.toUpperCase();
  
let comparison = 0;
if (LastA > LastB) {
    comparison = 1;
} else if (LastA < LastB) {
    comparison = -1;
}
return comparison;
}

Sorted1Percent = entrepreneurs;
Sorted1Percent.sort(compare);
console.log("Voici les 1% rangés par ordre alphabétique :");
console.log(Sorted1Percent);
output = "<h5>Voici les 1% rangés par ordre alphabétique :</h5> <br>";
for (let i=0;i < Sorted1Percent.length ; i++){
    output += Sorted1Percent[i].last +" "+ Sorted1Percent[i].first + "<br>"; 
}
$('#result4').html(output);
})