document.addEventListener("DOMContentLoaded", () => {
    // Liste de mots
    const listeMots = ["TOTO", "TOTOMOTO", "MAISON"];
    console.log(listeMots);
  
    // Nombre de mots
    let longueurListe = listeMots.length;
  
    function jouer() {
      // Tirer un mot aléatoirement de la liste
      let nbAlea = Math.floor(Math.random() * longueurListe);
      let motAtrouver = listeMots[nbAlea];
      let motDecoupe = motAtrouver.split("");
  
      // Récupération des éléments du DOM
      const tableau = document.getElementById("tableau");
      const clavier = document.getElementById("keybord");
      const enterButton = document.getElementById("enterButton"); // Récupération du bouton "enter"
      let currentRow = 1; // Gérer la ligne actuelle du tableau pour la saisie
  
      function creerTableau() {
        const ligne1 = document.createElement("tr");
        ligne1.id = "ligne-1";
  
        // Création de la première ligne avec les lettres et les tirets
        motDecoupe.forEach((lettre, index) => {
          const cellule = document.createElement("td");
          cellule.textContent = index === 0 ? lettre : "-"; // Afficher la première lettre
          ligne1.appendChild(cellule);
        });
  
        tableau.appendChild(ligne1);
  
        // Création de 5 lignes vides pour les tentatives suivantes
        for (let i = 0; i < 5; i++) {
          const ligneVide = document.createElement("tr");
          ligneVide.setAttribute("id", "ligne-" + (i + 1));
  
          motDecoupe.forEach(() => {
            const celluleVide = document.createElement("td");
            celluleVide.textContent = "-"; // Toutes les cellules commencent par des tirets
            ligneVide.appendChild(celluleVide);
          });
          tableau.appendChild(ligneVide);
        }
      }
  
      // Fonction pour ajouter des lettres dans le tableau
      function ajouterLettreDansTableau(lettre) {
        const ligneActuelle = document.getElementById(`ligne-${currentRow}`);
        const cellules = ligneActuelle.getElementsByTagName("td");
  
        for (let j = 0; j < cellules.length; j++) {
          if (cellules[j].textContent === "-") {
            cellules[j].textContent = lettre;
            return; // Ajouter la lettre et arrêter
          }
        }
      }
  
      // Fonction pour valider le mot saisi
      function validerMot() {
        const ligneActuelle = document.getElementById(`ligne-${currentRow}`);
        const cellules = ligneActuelle.getElementsByTagName("td");
        let motSaisi = "";
  
        // Récupérer le mot saisi par l'utilisateur
        for (let j = 0; j < cellules.length; j++) {
          motSaisi += cellules[j].textContent;
        }
  
        // Comparer chaque lettre du mot saisi
        motSaisi.split("").forEach((lettre, index) => {
          const bouton = document.querySelector(`button[data-lettre="${lettre}"]`);
  
          if (lettre === motDecoupe[index]) {
            cellules[index].style.backgroundColor = "white"; // Lettre correcte à la bonne position
            cellules[index].style.color = "black"; // Texte noir sur fond blanc
          } else if (motDecoupe.includes(lettre)) {
            cellules[index].style.backgroundColor = "yellow"; // Lettre correcte mais mauvaise position
            bouton.style.backgroundColor = "yellow"; // Colorer la touche du clavier
          } else {
            cellules[index].style.backgroundColor = "red"; // Lettre incorrecte
            bouton.style.backgroundColor = "red"; // Colorer la touche du clavier
          }
        });
  
        currentRow++; // Passer à la ligne suivante pour la prochaine tentative
      }
  
      // Gérer les clics sur le clavier virtuel
      clavier.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
          const lettre = event.target.getAttribute("data-lettre");
          ajouterLettreDansTableau(lettre);
        }
      });
  
      // Gérer le clic sur le bouton "enter" pour valider le mot saisi
      enterButton.addEventListener("click", function () {
        validerMot();
      });
  
      // Création initiale du tableau
      creerTableau();
    }
  
    // Démarrer le jeu au clic sur le bouton "start"
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", jouer);
  });