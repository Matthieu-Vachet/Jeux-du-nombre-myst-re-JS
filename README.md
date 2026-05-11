# 🎮 Jeu du Nombre Mystère

> Un jeu interactif captivant pour deviner un nombre secret avec trois niveaux de difficulté progressifs!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🎯 À propos

**Jeu du Nombre Mystère** est une application web interactive et ludique où vous devez deviner un nombre secret généré aléatoirement. Le jeu vous guide avec des indices (trop haut, trop bas) et suit le nombre de tentatives utilisées.

Parfait pour apprendre les concepts de JavaScript comme la manipulation du DOM, les événements, la génération de nombres aléatoires et la gestion d'état.

---

## ✨ Caractéristiques

- 🎲 **Nombre aléatoire** : Génération sécurisée de nombres secrets
- 🎚️ **3 niveaux de difficulté** : Facile (1-50), Moyen (1-100), Difficile (1-500)
- 📊 **Suivi des tentatives** : Compteur en temps réel des essais effectués
- 💬 **Feedback immédiat** : Indices clairs pour guider votre recherche
- 📝 **Historique des essais** : Visualisez tous vos nombres testés
- 🔄 **Bouton Reset** : Recommencez une partie à tout moment
- 🎨 **Interface élégante** : Design moderne et responsive
- ⌨️ **Contrôles intuitifs** : Clavier et souris supportés

---

## 🚀 Démarrage Rapide

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune installation requise!

### Installation

1. **Clonez le repository**
   ```bash
   git clone https://github.com/votre-username/Jeux-du-nombre-myst-re-JS.git
   cd Jeux-du-nombre-myst-re-JS
   ```

2. **Ouvrez le jeu**
   - Double-cliquez sur `index.html`
   - Ou ouvrez-le dans votre éditeur avec Live Server

---

## 📖 Comment Jouer

1. **Choisissez votre difficulté** : Sélectionnez un niveau dans le menu déroulant
2. **Entrez un nombre** : Tapez votre estimation dans le champ de saisie
3. **Cliquez "Tester"** : Soumettez votre réponse
4. **Lisez les indices** : 
   - ✅ **Trouvé!** - Vous avez deviné le nombre!
   - ⬇️ **C'est plus petit** - Le nombre secret est inférieur
   - ⬆️ **C'est plus grand** - Le nombre secret est supérieur
5. **Continuez** : Utilisez les indices pour affiner vos recherches
6. **Recommencez** : Cliquez "Nouvelle partie" pour un nouveau défi

---

## 🛠️ Stack Technique

| Technologie | Utilité |
|-------------|---------|
| **HTML5** | Structure et éléments interactifs |
| **CSS3** | Styling, animations et responsivité |
| **JavaScript (Vanilla)** | Logique du jeu et manipulation du DOM |

---

## 📁 Structure du Projet

```
Jeux-du-nombre-myst-re-JS/
├── index.html          # Page principale du jeu
├── script.js           # Logique JavaScript du jeu
├── style.css           # Styles et animations
├── algo.algo           # Algorithme (documentation)
└── README.md           # Ce fichier
```

---

## 🎓 Concepts JavaScript Utilisés

- ✅ Manipulation du DOM (`getElementById`, `innerHTML`, etc.)
- ✅ Gestion des événements (`addEventListener`, `click`, `change`)
- ✅ Génération de nombres aléatoires (`Math.random()`, `Math.floor()`)
- ✅ Gestion d'état des variables
- ✅ Fonctions et JSDoc
- ✅ Conditions et boucles
- ✅ Stockage et affichage de l'historique

---

## 🎨 Aperçu du Jeu

Le jeu dispose d'une interface claire avec:
- Un titre accrocheur 🎮
- Un menu de sélection de difficulté
- Un champ de saisie avec bouton "Tester"
- Un message de retour visuel
- Un affichage des statistiques (tentatives)
- Un historique des essais
- Un statut du jeu (En cours, Gagné, Perdu)

---

## 🐛 Dépannage

**Le jeu ne se lance pas ?**
- Vérifiez que vous avez `index.html`, `script.js` et `style.css` dans le même dossier
- Assurez-vous que la console du navigateur n'affiche pas d'erreurs (F12)

**Les styles ne s'appliquent pas ?**
- Vérifiez le chemin relatif de `style.css` dans `index.html`

---

## 🤝 Contribution

Les contributions sont bienvenues! N'hésitez pas à:
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 💡 Améliorations Futures

- [ ] Mode multijoueur
- [ ] Leaderboard avec localStorage
- [ ] Thèmes sombres/clairs
- [ ] Son et animations supplémentaires
- [ ] Mode chrono (limite de temps)
- [ ] Statistiques détaillées (meilleur score, temps moyen, etc.)

---

## 📧 Contact & Support

Avez-vous des questions ou des suggestions? 
- Ouvrez une [issue](../../issues)
- Contactez-moi via GitHub

---

**Amusez-vous bien! 🎮✨**
