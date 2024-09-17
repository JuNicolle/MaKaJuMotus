Fonction pour gérer le clic sur une touche virtuelle
let celluleIndex = 0; // Index global pour garder la trace de la cellule actuelle

function ajouterLettreDansTableau(lettre) {
const lignes = tableau.getElementsByTagName("tr");
const ligneActuelle = lignes[ligneIndex].getElementsByTagName("td");

// Vérifie si l'index est dans les limites de la ligne actuelle
if (celluleIndex < ligneActuelle.length) {
// Ajoute la lettre à la cellule courante
if (ligneActuelle[celluleIndex].textContent === "-") {
ligneActuelle[celluleIndex].textContent = lettre;
celluleIndex++; // Passe à la cellule suivante après avoir ajouté la lettre
}
}
}




// CELLE LA FONCTIONNE

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