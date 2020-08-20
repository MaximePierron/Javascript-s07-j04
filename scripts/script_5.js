$(document).ready(function() {
const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


//On part du principe que si un livre a été loué au moins une fois c'est qu'il a été lu
let Read = true;

for (let i=0; i < books.length; i++){
    if (books[i].rented === 0){
        Read = false;
        break;
    }
}

if (Read) {
    console.log("Tous les livres ont été lu au moins une fois.");
    $('#result1').text("Tous les livres ont été lu au moins une fois.");
} else {
    console.log("Au moins un livre n'a pas été lu.");
    $('#result1').text("Tous les livres ont été lu au moins une fois.");
}

/*La méthode reduce() applique une fonction qui est un « accumulateur »
et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce
MostRented est au départ max le premier éléments de books et nook est le deuxième. Si max a été plus loué que book la valeur de
MostRented est max et vice-versa. Ensuite on a un callback et l'accumulateur avance avec en tête le résultat d'avant book d'avant devient max et book devient
le troisième élément du tableau et ainsi de suite jusqu'à la fin.*/

/*Arrow functions – also called “fat arrow” functions, from CoffeeScript (a transcompiled language) — are a more concise syntax for writing function expressions.
They utilize a new token, =>, that looks like a fat arrow. Arrow functions are anonymous and change the way this binds in functions.
Arrow functions make our code more concise, and simplify function scoping and the this keyword. 
They are one-line mini functions which work much like Lambdas in other languages like C# or Python. 
By using arrow functions, we avoid having to type the function keyword, return keyword (it’s implicit in arrow functions), and curly brackets.
https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/*/

let MostRented = books.reduce((max, book) => max.rented > book.rented ? max : book);
console.log(`Le livre le plus emprunté est ${MostRented.title} et son est id : ${MostRented.id}. Il a été emprunté ${MostRented.rented} fois`);
$('#result2').text(`Le livre le plus emprunté est ${MostRented.title} et son est id : ${MostRented.id}. Il a été emprunté ${MostRented.rented} fois`);

let LessRented = books.reduce((min, book) => min.rented < book.rented ? min : book);
console.log(`Le livre le moins emprunté est ${LessRented.title} et son est id : ${LessRented.id}. Il a été emprunté ${LessRented.rented} fois`);
$('#result3').text(`Le livre le moins emprunté est ${LessRented.title} et son est id : ${LessRented.id}. Il a été emprunté ${LessRented.rented} fois`);

function IdFinder(IdNumber) {
    for (let i=0; i < books.length; i++){
        if (books[i].id === IdNumber){
            return books[i];
        }
    }
}

let IdNumber = Number(prompt("Quel livre veux-tu trouver ? Recherche par id (exemple 873495)"));
console.log(`Le livre dont l'id est ${IdNumber} est intitulé ${IdFinder(IdNumber).title}.`);
$('#result4').text(`Le livre dont l'id est ${IdNumber} est intitulé ${IdFinder(IdNumber).title}.`);


/*Splice retourne un tableau contenant les éléments supprimés. Si un seul élément est supprimé, un tableau contenant un unique élément est retourné.
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice*/

function BookRemover(IdNumberToRemove) {
    for (let i=0; i < books.length; i++){
        if (books[i].id === IdNumberToRemove){
            BookRemoved = books.splice(i,1);
        }
        return BookRemoved;
    }
}

let IdNumberToRemove = Number(prompt("Quel livre veux-tu retirer ? Recherche par id (exemple 133712)"));
let BookToRemove = BookRemover(IdNumberToRemove);
console.log(`Le livre dont l'id est ${IdNumberToRemove} et intitulé ${BookToRemove[0].title} a été retiré de la BDD.`);
$('#result5').text(`Le livre dont l'id est ${IdNumberToRemove} et intitulé ${BookToRemove[0].title} a été retiré de la BDD.`);

function compare(a, b) {
    // On met tout en majuscule pour se libérer de la casse
    const TitleA = a.title.toUpperCase();
    const TitleB = b.title.toUpperCase();
      
    let comparison = 0;
    if (TitleA > TitleB) {
        comparison = 1;
    } else if (TitleA < TitleB) {
        comparison = -1;
    }
    return comparison;
}
    
SortedBooks = books;
SortedBooks.sort(compare);

console.log("Voici les livres rangés par ordre alphabétique :");
console.log(SortedBooks);
let output = "<h5>Voici les livres rangés par ordre alphabétique :</h5> <br>"
for (let i=0;i < SortedBooks.length ; i++){
    output += "Titre: " + SortedBooks[i].title +" "+ "Id: " + SortedBooks[i].id + " " + "Loué " + SortedBooks[i].rented + " fois" + "<br>"; 
}
$('#result6').html(output)

})
