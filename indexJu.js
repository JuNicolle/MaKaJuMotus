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
           ligne1.id = 'ligne-1';
          
           motDecoupe.forEach((lettre, index) => {
            const cellule = document.createElement("td");
            cellule.textContent = index === 0 ? lettre : '-';
            ligne1.appendChild(cellule);
            });
          
            tableau.appendChild(ligne1);

             // Création de 5 lignes vides
              for (let i = 0; i < 5; i++) {
              const ligneVide = document.createElement("tr");
              ligneVide.setAttribute('id', 'ligne-' + (i + 1));

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
        if (cellules[j].textContent === '-') {
          cellules[j].textContent = lettre;
          return; // On arrête dès qu'on a ajouté la lettre
        }
      }
    }
  }

// Ajout des événements de clic sur chaque touche virtuelle
clavier.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    const lettre = event.target.getAttribute("data-lettre");
    ajouterLettreDansTableau(lettre);
  }
});

// Création initiale du tableau
creerTableau();






    // const tableau = document.getElementById("tableau");
    // const ligne1 = document.createElement("tr");
    // ligne1.id='ligne-1';
    // motDecoupe.forEach((lettre, index) => {
    //   const cellule = document.createElement("td");
    //   if (index === 0) {
    //     cellule.textContent = lettre;
    //     }
    //   else if (index === 1,2,3,4,6,7,8,9){
    //     cellule.textContent='-'
    //     }
    //   ligne1.appendChild(cellule);
    // });
    // tableau.appendChild(ligne1);

    // for (let i = 0; i < 5; i++) {
    //   const ligneVide = document.createElement("tr");
    // // Les tr prennent des ID qui s'incrementent auto 
    //   ligneVide.setAttribute('id','ligne-'+(i+1));

    //   motDecoupe.forEach(() => {
    //     const celluleVide = document.createElement("td");
    //     ligneVide.appendChild(celluleVide);
    //   });
    //   tableau.appendChild(ligneVide);
    // };

    // Attitrer les cases a l'ecran aux lettres de l'alphabet
    const letters = document.getElementsByClassName("letter");

    for (let i = 0; i < letters.length; i++) {
      letters[i].addEventListener("click", () => {
        console.log(letters[i].innerText);
      });
    };
  };

  // creation action du bouton commencer
  startButton.addEventListener("click", jouer);
});
