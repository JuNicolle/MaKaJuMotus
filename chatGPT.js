document.addEventListener("DOMContentLoaded", () => {
  const listeMots = ["TOTO", "TOTOMOTO", "MAISON"];
  let longueurListe = listeMots.length;

  function jouer() {
    let nbAlea = Math.floor(Math.random() * longueurListe);
    let motAtrouver = listeMots[nbAlea];
    let motDecoupe = motAtrouver.split("");

    const tableau = document.getElementById("tableau");
    const clavier = document.getElementById("keybord");

    function creerTableau() {
      const ligne1 = document.createElement("tr");
      ligne1.id = "ligne-1";

      motDecoupe.forEach((lettre, index) => {
        const cellule = document.createElement("td");
        cellule.textContent = index === 0 ? lettre : "-";
        ligne1.appendChild(cellule);
      });

      tableau.appendChild(ligne1);

      for (let i = 0; i < 5; i++) {
        const ligneVide = document.createElement("tr");
        ligneVide.setAttribute("id", "ligne-" + (i + 1));

        motDecoupe.forEach(() => {
          const celluleVide = document.createElement("td");
          ligneVide.appendChild(celluleVide);
        });
        tableau.appendChild(ligneVide);
      }
    }

    // Fonction pour gérer le clic sur une touche virtuelle
    function ajouterLettreDansTableau(lettre) {
      const lignes = tableau.getElementsByTagName("tr");

      for (let i = 0; i < lignes.length; i++) {
        const cellules = lignes[i].getElementsByTagName("td");
        for (let j = 0; j < cellules.length; j++) {
          if (cellules[j].textContent === "-") {
            cellules[j].textContent = lettre;
            return;
          }
        }
      }
    }

    // Fonction pour effacer la dernière lettre
    function supprimerLaDerniereLettre() {
      const lignes = tableau.getElementsByTagName("tr");

      for (let i = lignes.length - 1; i >= 0; i--) {
        const cellules = lignes[i].getElementsByTagName("td");
        for (let j = cellules.length - 1; j >= 0; j--) {
          if (cellules[j].textContent !== "-" && cellules[j].textContent !== "") {
            cellules[j].textContent = "-";
            return;
          }
        }
      }
    }

    // Fonction pour vérifier la réponse
    function entrerReponse() {
      const lignes = tableau.getElementsByTagName("tr");
      let tentative = "";

      // Construire la réponse de l'utilisateur à partir de la première ligne du tableau
      for (let i = 0; i < lignes[0].children.length; i++) {
        tentative += lignes[0].children[i].textContent;
      }

      const tentativeLettres = tentative.split("");

      // Feedback visuel pour chaque lettre
      tentativeLettres.forEach((lettre, index) => {
        const cellule = lignes[0].children[index];

        if (lettre === motDecoupe[index]) {
          cellule.style.backgroundColor = "green";
        } else if (motDecoupe.includes(lettre)) {
          cellule.style.backgroundColor = "yellow";
        } else {
          cellule.style.backgroundColor = "gray";
        }
      });

      if (tentative === motAtrouver) {
        alert("Bravo ! Vous avez trouvé le mot.");
      } else {
        alert("Essai incorrect. Réessayez !");
      }
    }

    clavier.addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        if (event.target === deleteButton) {
          supprimerLaDerniereLettre();
        } else if (event.target === enterButton) {
          entrerReponse();
        } else {
          const lettre = event.target.getAttribute("data-lettre");
          ajouterLettreDansTableau(lettre);
        }
      }
    });

    creerTableau();
  }

  const startButton = document.getElementById("startButton");
  startButton.addEventListener("click", jouer);
});