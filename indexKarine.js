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

    // Creer un tableau avec le mot, n'afficher que la premiere lettre
    // Si l'index est 0 : affiche la lettre 0 (premiere lettre)
    // Si l'index est autre : affiche les lettres correspondantes

    // TEST CODE
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
          }
        }
      }
    }
    

    // ajout fonction supprimer lettre - cette fonction marche
    function supprimerLaDerniereLettre(j) {
      const lignes = tableau.getElementsByTagName("tr");
  
    for (let i = 0; i < lignes.length; i++) {
      const cellules = lignes[i].getElementsByTagName("td");
      for (let j = 1; j < cellules.length; j++) {
        if (cellules[j].textContent === "-" && cellules[j]!="") {
          console.log("je veux effacer");
          cellules[j-1].textContent = "-";
          return; // On arrête dès qu'on a supprimé la lettre


        
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
  
  // Affichage visuel pour chaque lettre tapée dans le tableau 
  tentativeLettres.forEach((lettre, index) => {
    const cellule = lignes[0].children[index];
    console.log(cellule)
    if (lettre === motDecoupe[index]) {
      cellule.className = ("class","red");
    } else if (motDecoupe.includes(lettre)) {
      cellule.className = ("yellow");
    } else {
      cellule.className = ("grey");
    };
    });
    changerLigne();
    console.log("Appel de nouvelle ligne");
      
};




// function changerLigne(){
//   const tableau = document.getElementById("tableau");
//   const lignes = tableau.getElementsByTagName("tr");
//   let ligneSuivante=lignes[0];

//   for (let i = 0; i < 5; i++) {
//   ligneSuivante=lignes[i];

//   }

// }

  


    // Ajout des événements de clic sur chaque touche virtuelle
    const deleteButton = document.getElementById("deleteButton");
    const enterButton = document.getElementById("enterButton");

    console.log(deleteButton);

    // Ajout des événements de clic sur chaque touche virtuelle
    clavier.addEventListener("click", function (event) {
      const lettre = event.target.getAttribute("data-lettre");

      if (event.target.tagName === "BUTTON") {
        if (event.target === deleteButton) {
          console.log("milou");
          // ok s'affiche bien
          supprimerLaDerniereLettre();
          console.log(deleteButton.textContent);
        } 
        else if (event.target === enterButton) {
          console.log("tata");
          entrerReponse();
          console.log(enterButton.textContent);
        } else {
          ajouterLettreDansTableau(lettre);
        }
      }
    });

    // Création initiale du tableau
    creerTableau();


    // Attitrer les cases a l'ecran aux lettres de l'alphabet
    const letters = document.getElementsByClassName("letter");

    for (let i = 0; i < letters.length; i++) {
      letters[i].addEventListener("click", () => {
        console.log(letters[i].innerText);
      });
    }
  }

  // creation action du bouton commencer
  startButton.addEventListener("click", jouer);
});