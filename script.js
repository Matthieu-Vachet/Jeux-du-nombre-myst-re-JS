// Récupération des éléments du DOM
const userInput = document.getElementById("userInput");
const BtnTester = document.getElementById("submitBtn");
const tentatives = document.getElementById("attempts");
const btnReset = document.getElementById("resetBtn");
const difficulté = document.getElementById("difficulty");
const status = document.getElementById("status");
const historique = document.getElementById("historyList");
const feedback = document.getElementById("feedback");

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
  return Math.floor(Math.random() * nbr) + 1;
}

let nombreSecret = nombreRandom(parseInt(difficulté.value)); // Variable pour stocker le nombre secret en fonction de la difficulté choisie
console.log("🎮 Nombre secret initial:", nombreSecret);

// Variable de Tentative
let compteurTentative = 0; // Compteur de tentatives pour suivre le nombre d'essais de l'utilisateur;

/**
 * @function resetGame
 * @description Réinitialise le jeu en générant un nouveau nombre secret et en réinitialisant les variables.
 */

function resetGame() {
  gameOver = false;
  resetInput();
  disabledBtnInput(false);
  compteurTentative = 0; // Réinitialise le compteur de tentatives
  tentatives.textContent = compteurTentative; // Met à jour l'affichage du compteur de tentatives
  statusMessage(`En cours...`, "stat-value status-playing"); // Réinitialise le statut du jeu
  historique.innerHTML = ""; // Réinitialise l'historique des essais
  nombreSecret = nombreRandom(parseInt(difficulté.value)); // Génère un nouveau nombre secret en fonction de la difficulté actuelle
  feedback.textContent = ""; // Affiche un message de feedback pour indiquer que le jeu a été réinitialisé
  console.log("🎮 Jeu réinitialisé. Nouveau nombre secret:", nombreSecret);
}

let maxTentatives = 9; // Limite de tentatives (mode facile par défaut = 10 essais max)

// Choix de la difficulté
difficulté.addEventListener("change", function () {
  const selectedDifficulty = this.value;
  if (selectedDifficulty === "50") {
    resetGame();
    maxTentatives = 10 - 1;
  } else if (selectedDifficulty === "100") {
    resetGame();
    maxTentatives = 7 - 1;
  } else if (selectedDifficulty === "500") {
    resetGame();
    maxTentatives = 5 - 1;
  }
  console.log(
    "🎮 Nouveau nombre:",
    nombreSecret,
    "Max tentatives:",
    maxTentatives + 1,
  );
});

// Vérification de la saisie utilisateur
userInput.addEventListener("input", function () {
  const value = this.value;
  if (
    value === "" ||
    isNaN(value) ||
    value < 1 ||
    value > parseInt(difficulté.value)
  ) {
    feedbackMessage(
      `⚠️ Veuillez entrer un nombre valide entre 1 et ${difficulté.value}`,
      "feedback-message error",
    );
    resetInput();
  }
  console.log("🎮 Nombre utilisateur:", userInput.value);
});

/**
 * @function updateHistoriqueStatus
 * @description Met à jour l'historique des essais avec le message correspondant à chaque tentative.
 * Crée un nouvel élément de liste (li) pour chaque essai et l'ajoute à la liste d'historique.
 * Affiche le numéro de tentative, la valeur saisie par l'utilisateur et le message de statut (trop petit, trop grand
 * ou gagné).
 *
 * @param {string} message - Le message de statut à afficher pour l'essai actuel (ex: "Trop petit", "Trop grand", "Gagné").
 */

function updateHistoriqueStatus(message) {
  const li = document.createElement("li");
  li.textContent = `Essai ${compteurTentative}: ${userInput.value} (${message})`;
  historique.appendChild(li);
}

// Fonction de validation du nombre saisi
BtnTester.addEventListener("click", handleGuess);

let gameOver = false;

/**
 * @function handleGuess
 * @description Gère la validation de la saisie de l'utilisateur lorsqu'il clique sur le bouton de test.
 * Vérifie si la valeur saisie est un nombre valide et dans la plage autorisée en fonction de la difficulté choisie.
 * Si la saisie est invalide, affiche une alerte et réinitialise le champ de saisie.
 * Si la saisie est valide, incrémente le compteur de tentatives, met à jour l'affichage du nombre de tentatives,
 * et appelle la fonction checkResult pour vérifier si l'utilisateur a trouvé le nombre secret ou s'il doit continuer à deviner.
 */
function handleGuess() {
  const userValue = Number(userInput.value);
  feedback.textContent = "";

  if (isNaN(userValue)) {
    feedbackMessage(
      `⚠️ Veuillez entrer un nombre valide entre 1 et ${difficulté.value}`,
      "feedback-message error",
    );
    resetInput();
    return;
  }
  compteurTentative++;
  console.log(
    "🎮 Tentative n°",
    compteurTentative,
    " - Valeur saisie:",
    userValue,
  );
  tentatives.textContent = compteurTentative;

  if (compteurTentative > maxTentatives) {
    lose();
    return;
  }

  checkResult(userValue);
}

/**
 * @function checkResult
 * @description Vérifie si la valeur saisie par l'utilisateur correspond au nombre secret.
 * Affiche un message de victoire si l'utilisateur trouve le nombre secret, ou indique si la valeur est trop petite ou trop grande.
 * Met à jour le statut du jeu et l'historique des essais en fonction du résultat de chaque tentative.
 * @param {number} value - La valeur saisie par l'utilisateur à comparer avec le nombre secret.
 */
function checkResult(value) {
  if (value === nombreSecret) {
    win();
  } else if (value < nombreSecret) {
    feedbackMessage(
      "Trop petit ! Essayez à nouveau.",
      "feedback-message too-low",
    );
    updateHistoriqueStatus("Trop petit");
    resetInput();
  } else {
    feedbackMessage(
      "Trop grand ! Essayez à nouveau.",
      "feedback-message too-high",
    );
    updateHistoriqueStatus("Trop grand");
    resetInput();
  }
}

/**
 * @function win
 * @description Affiche le message de victoire lorsque l'utilisateur trouve le nombre secret.
 * Met à jour le statut du jeu, ajoute un message de félicitations dans la section de feedback,
 * et désactive le bouton de test et le champ de saisie pour empêcher de nouvelles tentatives après la victoire.
 */
function win() {
  statusMessage(`Gagné!`, "stat-value status-won");
  updateHistoriqueStatus("Gagné");
  feedbackMessage(
    `Félicitations! Vous avez trouvé le nombre secret en ${compteurTentative} tentatives.`,
    "feedback-message correct",
  );
  disabledBtnInput(true);
}

/**
 * @function lose
 * @description Affiche le message de défaite lorsque l'utilisateur atteint le nombre maximum de tentatives sans trouver le nombre secret.
 * Met à jour le statut du jeu, ajoute un message de consolation dans la section de feedback,
 * et désactive le bouton de test et le champ de saisie pour empêcher de nouvelles tentatives après la défaite.
 * Affiche également le nombre secret pour informer l'utilisateur de la réponse correcte.
 */
function lose() {
  gameOver = true;
  statusMessage(`Perdu :(`, "stat-value status-lost");
  updateHistoriqueStatus(`Perdu`);
  feedbackMessage(
    `Dommage vous avez utilisé vos ${maxTentatives + 1} tentatives! Le nombre secret était ${nombreSecret}`,
  );
  disabledBtnInput(true);
}

/**
 * @function resetInput
 * @description Réinitialise le champ de saisie de l'utilisateur en le vidant et en lui redonnant le focus.
 * Permet à l'utilisateur de saisir une nouvelle valeur après chaque tentative, que ce soit après une erreur ou une victoire.
 */
function resetInput() {
  userInput.value = "";
  userInput.focus();
}

/**
 * @function disabledBtnInput
 * @description Active ou désactive le bouton de test et le champ de saisie en fonction du paramètre boolean.
 * Permet de contrôler l'interactivité du jeu en désactivant les éléments d'entrée lorsque le jeu est terminé (gagné ou perdu) et en les réactivant lors de la réinitialisation du jeu.
 * @param {boolean} bl - Si true, désactive le bouton de test et le champ de saisie; si false, les active.
 */
function disabledBtnInput(bl) {
  BtnTester.disabled = bl;
  userInput.disabled = bl;
}

// Bouton de réinitialisation du jeu
btnReset.addEventListener("click", resetGame);

/**
 * @function feedbackMessage
 * @description Affiche un message de feedback dans la section dédiée.
 * @param {string} message - Le message à afficher.
 * @param {string} style - La classe CSS à appliquer pour styliser le message.
 */
function feedbackMessage(message, style) {
  feedback.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = message;
  p.className = style;
  feedback.appendChild(p);
}

/**
 * @function statusMessage
 * @description Met à jour le message de statut du jeu avec le texte et le style spécifiés.
 * Modifie le contenu textuel de l'élément de statut et applique la classe CSS correspondante pour refléter le résultat de chaque tentative (gagné, trop petit, trop grand).
 * @param {string} message - Le message de statut à afficher (ex: "Gagné!", "En cours...").
 * @param {string} style - La classe CSS à appliquer pour styliser le message de statut (ex: "status-won", "status-playing").
 */
function statusMessage(message, style) {
  status.textContent = message;
  status.className = style;
}
