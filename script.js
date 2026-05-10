/*
🧩 3. Fonctionnalités (MVP = version minimale)
👉 MVP = ce que tu DOIS faire en premier

Fonctionnalités obligatoires :
entrer un nombre
valider la saisie
comparer avec le nombre secret
afficher un message :
trop grand
trop petit
gagné

🚀 4. Fonctionnalités bonus (à faire APRÈS)

compteur de tentatives
bouton reset
empêcher les valeurs invalides
message d’erreur (champ vide)
historique des essais
difficulté (1-50 / 1-100 / 1-500)

🧠 6. Logique métier (IMPORTANT)
👉 Tu dois réfléchir comme ça :

Initialisation :
générer un nombre aléatoire
initialiser les variables (tentatives…)
Interaction utilisateur :
récupérer la valeur entrée
vérifier si valide
comparer avec le nombre secret
Résultat :
afficher message adapté
incrémenter les tentatives

🔄 7. Cycle de fonctionnement
👉 Flow utilisateur :

L’utilisateur arrive sur la page
Il entre un nombre
Il clique sur "tester"
Le système répond
Il recommence jusqu’à gagner

⚠️ 8. Cas à gérer (comme un pro)
👉 Très important (souvent oublié)

champ vide
valeur non numérique
nombre hors limite (ex: 200)
clic sans saisie
rejouer après victoire

🧪 9. Tests à prévoir
👉 Tu dois tester :

nombre correct
nombre trop petit
nombre trop grand
input vide
input invalide
*/





/**
 * @function nombreRandom
 * @description Génère un nombre entier aléatoire entre 0 (inclus) et nbr (exclus).
 * Utilise Math.random() pour générer une valeur pseudo-aléatoire et Math.floor() pour obtenir un entier.
 * Attention : cette fonction n'est pas cryptographiquement sécurisée et ne doit pas être utilisée pour des enjeux de sécurité.
 * 
 * @param {number} nbr - La limite supérieure exclusive du nombre aléatoire.
 *                       Doit être un entier positif supérieur à 0.
 *                       Ex: 100 génère un nombre entre 0 et 99
 * 
 * @returns {number} Un nombre entier aléatoire compris entre 0 et nbr - 1
 * @example
 * // Génère un nombre entre 0 et 99
 * const random = nombreRandom(100);
 * console.log(random); // affiche: 42
 */

function nombreRandom(nbr) {
  return Math.floor(Math.random() * nbr + 1)
}

// Varibale de dificulté 
  // let nombreRandom50 = nombreRandom(50);
  // let nombreRandom100 = nombreRandom(100);
  // let nombreRandom500= nombreRandom(500);

// Variable de Tentative
let compteurTentative = 0;

// Tableau d'historique
let tableauHistorique = [];

// Récupération des éléments du DOM (SANS .value)
const userInput = document.getElementById('userInput');
const BtnTester = document.getElementById('submitBtn');
const tentatives = document.getElementById('attempts');
const btnReset = document.getElementById('resetBtn');
const difficulté = document.getElementById('difficulty');
const statut = document.getElementById('status')

let nombreSecret = nombreRandom(50); // Variable pour stocker le nombre secret en fonction de la difficulté choisie
console.log("🎮 Nombre secret initial:", nombreSecret);

// Choix de la difficulté
difficulté.addEventListener('change', function() {
  const selectedDifficulty = this.value;
  if (selectedDifficulty === "50") {
    nombreSecret = nombreRandom(50)
  } else if (selectedDifficulty === "100") {
    nombreSecret = nombreRandom(100)
  } else if (selectedDifficulty === "500") {
    nombreSecret = nombreRandom(500)
  }
  console.log("🎮 Nouveau nombre secret:", nombreSecret, "Difficulté:", selectedDifficulty);
})

// Vérification de la saisie utilisateur
userInput.addEventListener('input', function() {
  const value = this.value
  if (value === '' || isNaN(value) || value < 1 || value > parseInt(difficulté.value)) {
    this.classList.add('invalid');
    BtnTester.disabled = true;
    alert("⚠️ Veuillez entrer un nombre valide entre 1 et " + difficulté.value);
    userInput.value = ''; // Réinitialise le champ de saisie
  } else {
    this.classList.remove('invalid');
    BtnTester.disabled = false;
  }
  console.log("🎮 Nombre utilisateur:", userInput.value);
})

// Fonction de validation du nombre saisi
BtnTester.addEventListener('click', function() {
  const userGuess = parseInt(userInput.value);
  compteurTentative++;
  tentatives.textContent = "Tentatives: " + compteurTentative;

  if (userGuess < nombreSecret) {
    statut.textContent = "Trop petit :("
    tableauHistorique.push(userGuess + " (trop petit)");
  } else if (userGuess > nombreSecret) {
    statut.textContent = "Trop grand !"
    tableauHistorique.push(userGuess + " (trop grand)");
  } else {
    statut.textContent = `Gagné en ${compteurTentative} tentatives !`
    tableauHistorique.push(userGuess + " (gagné)");
    BtnTester.disabled = true; // Désactive le bouton après victoire
  }
  console.log("🎮 Historique des essais:", tableauHistorique);
})
