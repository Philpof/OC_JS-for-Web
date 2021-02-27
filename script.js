////////// Partie : Modifiez le DOM //////////

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


////////// Partie : Écoutez des événements //////////

const myParent = document.getElementById("parent");
const countParent = document.getElementById("parent-count");
const myChild = document.getElementById("child");
const countChild = document.getElementById("child-count");

myParent.addEventListener('click', function() { // addEventListener() : prend ('evenement écouté', la fonction à faire ou callback)
    countParent.textContent ++;
});

myChild.addEventListener('click', function(event) {
    event.stopPropagation(); // stopPropagation() : empèche l'évènement de remonter au "parent"
    event.preventDefault(); // preventDefault() : empèche le comportement par défaut de s'effectuer, par exemple le lien <a> est bloqué
    countChild.textContent ++;
});


////////// Partie : Récupérez des données utilisateur avec les événements //////////

const myName = document.getElementById('name');
const gender = document.getElementById('gender');
const result = document.getElementById('result');
const resName = document.getElementById('res-name');
const resGender = document.getElementById('res-gender');
const mouseX = document.getElementById('mouse-x');
const mouseY = document.getElementById('mouse-y');

myName.addEventListener('change', function(event) {
    resName.textContent = event.target.value;
});

gender.addEventListener('change', function(event) {
    resGender.textContent = event.target.value;
});

result.addEventListener('mousemove', function(event) {
    mouseX.textContent = event.offsetX; // Coordonnée X de la souris dans l'élément
    mouseY.textContent = event.offsetY; // Coordonnée Y de la souris dans l'élément
});


////////// Partie : Récupérez des données d'un service web //////////

const ask1 = document.getElementById("ask-weather1");
const ask2 = document.getElementById("ask-weather2");
const resultWeb = document.getElementById("weather-result");

function askWeather(ville) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://www.prevision-meteo.ch/services/json/${ville}`); // les `` permet de faire de l'interpolation et de mettre le parametre dans la string
    request.send();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            response = JSON.parse(this.responseText);
            resultWeb.textContent = response.current_condition.condition;
        }
    };
};

ask1.addEventListener('click', function () {
    askWeather("paris");
});

ask2.addEventListener('click', function () {
    askWeather("marseille");
});


////////// Partie : Validez les données saisies par vos utilisateurs //////////

const code = document.getElementById('code');
const codeVal = document.getElementById('code-validation');
const submitBtn = document.getElementById('submit-btn');

code.addEventListener('input', function(e) {
    let value = e.target.value;
    if (/^CODE-/.test(value)) {
        codeVal.textContent = "Code valide";
        submitBtn.removeAttribute('disabled');
    } else {
        codeVal.textContent = "Code invalide";
        submitBtn.setAttribute('disabled', true);
    }
})


////////// Partie : Sauvegardez des données sur le service web //////////

const value = document.getElementById('value');
const resultPOST = document.getElementById('resultPOST');
const form = document.getElementById('form');

function sendPOST(value) {
    let request = new XMLHttpRequest();
    request.open("POST", "http://mockbin.com/request"); // Requête en POST
    request.setRequestHeader("Content-Type", "application/json"); // le Header
    request.send(JSON.stringify(value)); // Transforme le paramètre en JSON
    request.onreadystatechange = function() { // Récupére la réponse
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            response = JSON.parse(this.responseText);
            resultPOST.textContent = response.postData.text;
        }
    };
}

form.addEventListener('submit', function(e) {
    e.stopPropagation();
    e.preventDefault();
    sendPOST(value.value); // Prend la valeur de value et l'envoi en argument
})


////////// Tests perso //////////

const btnMulti = document.getElementById("btn");

btnMulti.addEventListener('mouseover', function() {
    btnMulti.style.backgroundColor = "yellow";
    btnMulti.style.color = "black";
    btnMulti.style.fontWeight = "bold";
    btnMulti.style.fontSize = "large";
});