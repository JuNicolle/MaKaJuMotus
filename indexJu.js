document.addEventListener("DOMContentLoaded", () => {
  // on cree la liste de mots
  const listeMots = ["TOTO", "TOTOMOTO", "MAISON"];
  // console.log(listeMots.length);
  console.log(listeMots);
  // on calcule le nombre de mots
  let longueurListe = listeMots.length;
  console.log(longueurListe);

  // on tire au sort un mot

  function jouer() {
    // Definir un nombre au mot, et le tirer aleatoirement, puis découper ce mot
    let nbAlea = Math.floor(Math.random() * longueurListe);
    console.log(nbAlea);
    let motAtrouver = listeMots[nbAlea];
    console.log(motAtrouver.length);
    let motDecoupe = motAtrouver.split("");
    console.log(motDecoupe);
  
       // Attitrer les cases a l'ecran aux lettres de l'alphabet
 const letters = document.getElementsByClassName("letter");

  for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener("click", () => {
      console.log(letters[i].innerText);
    });
 };
    
   // Création du tableau et des lignes nommées avec un ID 
    const tableau = document.getElementById("tableau");
    const clavier = document.getElementById("keybord");

    function creerTableau() {
      const ligne1 = document.createElement("tr");
      ligne1.id = "ligne-1";

      //Faire spawn le mot découpé dans le tableau, ligne 1

      motDecoupe.forEach((lettre, index) => {
        const cellule = document.createElement("td");
        cellule.textContent = index === 0 ? lettre : "-";
        ligne1.appendChild(cellule);
      });

      tableau.appendChild(ligne1);

      // Création de 5 lignes vides
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
            return; // On arrête dès qu'on a ajouté la lettre
          };
        };
      };
    };

  // Fonction pour effacer la dernière lettre
  function supprimerLaDerniereLettre() {
    const lignes = tableau.getElementsByTagName("tr");

    for (let i = lignes.length - 1; i >= 0; i--) {
      const cellules = lignes[i].getElementsByTagName("td");
      for (let j = cellules.length - 1; j >= 0; j--) {
        if (cellules[j].textContent !== "-" && cellules[j].textContent !== "") {
          cellules[j].textContent = cellules[j].textContent.slice(0, -1);
          return;
        };
      };
    };
  };

  // Fonction pour vérifier la réponse
  function entrerReponse() {
    const lignes = tableau.getElementsByTagName("tr");
    let tentative = "";
  
  // Construire la réponse de l'utilisateur à partir de la première ligne du tableau
  for (let i = 0; i < lignes[0].children.length; i++) {
    tentative += lignes[0].children[i].textContent;
  }
  
  const tentativeLettres = tentative.split("");
  
  // Affichage visuel pour chaque lettre tapée dans le tableau 
  tentativeLettres.forEach((lettre, index) => {
    const cellule = lignes[0].children[index];

    if (lettre === motDecoupe[index]) {
      cellule.style.backgroundColor = "green";
    } else if (motDecoupe.includes(lettre)) {
      cellule.style.backgroundColor = "orange";
    } else {
      cellule.style.backgroundColor = "gray";
    };
  });
  
  if (tentative === motAtrouver) {
    alert("Bravo ! Vous avez trouvé le mot.");
  } else {
    alert("Essai incorrect. Réessayez !");
  };
};

  // Ajout des événements de clic sur chaque touche virtuelle
    const deleteButton = document.getElementById("deleteButton");
    const enterButton = document.getElementById("enterButton");

    console.log(deleteButton);

    // Ajout des événements de clic sur chaque touche virtuelle
    clavier.addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        if (event.target === deleteButton) {
          supprimerLaDerniereLettre();
          console.log(deleteButton.textContent);
        } 
        else if (event.target === enterButton) {
          entrerReponse();
          console.log(enterButton.textContent);
        } else {
          const lettre = event.target.getAttribute("data-lettre");
          ajouterLettreDansTableau(lettre);
        };
      };
    });

    creerTableau();
  }
   
  const startButton = document.getElementById("startButton");
  startButton.addEventListener("click", jouer);
});

 // Attitrer les cases a l'ecran aux lettres de l'alphabet
//  const letters = document.getElementsByClassName("letter");

//  for (let i = 0; i < letters.length; i++) {
//    letters[i].addEventListener("click", () => {
//      console.log(letters[i].innerText);
//    });
//  }
// }


    // Creer un tableau avec le mot, n'afficher que la premiere lettre
    // Si l'index est 0 : affiche la lettre 0 (premiere lettre)
    // Si l'index est autre : affiche les lettres correspondantes

  