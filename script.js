const newParagraph1 = document.createElement("p"); // createElement : permet de créer un nouvel élément du type spécifié entre parenthèse ("p", "div", "section", ...)
const newParagraph2 = document.createElement("p");

let main = document.getElementById("main"); // getElementByid : sélectionne l'élément par son id unique

main.appendChild(newParagraph1); // appenChild : permet d'ajouter un élément à la liste des enfants du parent depuis lequel la fonction est appelée
main.appendChild(newParagraph2); // "main" est donc le parent et newParagraph1 et 2, les enfants

newParagraph1.innerHTML = "Mon <strong>grand</strong> contenu"; // innerHTLM : demande du texte représentant un contenu HTML
newParagraph2.textContent = "Cela est du texte brute et les balise, par exemple <div> ou <strong> apparaissent !"; // textContent : demande du texte qui ne sera pas interprété comme étant du HTML

newParagraph1.classList.add("important"); // classList : fournit aussi une série de fonctions permettant de modifier cette liste de classes :
// add, remove, contains, replace, ..
// ici "important" est le nom d'une classe cf. le "style.css"

newParagraph1.setAttribute("id", "coucou"); //setAttribute : créé un nouvelle attribut, ici "id", et donne sa valeur, ici "coucou"
// Il existe aussi "getAttribute" et "removeAttribute"

newParagraph2.style.color = "green"; // style : permet d'agir sur le style en modifiant la coleur par exemple
