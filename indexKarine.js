document.addEventListener('DOMContentLoaded',()=>{

  // on cree la liste de mots
  const listeMots=["TOTO","TOTOMOTO","MAISON"];
  // console.log(listeMots.length);
  console.log(listeMots);
// on calcule le nombre de mots
  let longueurListe=listeMots.length;
  console.log(longueurListe);

// on tire au sort un mot


function jouer(){
// Definir un nombre au mot, et le tirer aleatoirement, puis découper ce mot
  let nbAlea=Math.floor(Math.random()*longueurListe);
  console.log(nbAlea);
  let motAtrouver = listeMots[nbAlea];
  console.log(motAtrouver.length);
  let motDecoupe=motAtrouver.split('');
  console.log(motDecoupe);

// Creer un tableau avec le mot, n'afficher que la premiere lettre
  const tableau=document.getElementById('tableau')
  const ligne=document.createElement('tr');
  motDecoupe.forEach((lettre, index)=>{
      const cellule=document.createElement('td');
          if (index===0){
          cellule.textContent=lettre;
          }
      ligne.appendChild(cellule);


  });
  tableau.appendChild(ligne);


for (let i=0; i<5;i++){
  const ligneVide=document.createElement('tr');
  motDecoupe.forEach(()=>{
      const celluleVide=document.createElement('td');
      ligneVide.appendChild(celluleVide);
  });
  tableau.appendChild(ligneVide);
  
}


// Attitrer les cases a l'ecran aux lettres de l'alphabet 
  const letters = document.getElementsByClassName("letter");

  for (let i=0; i < letters.length; i++){
      letters[i].addEventListener('click' , () => {
      console.log (letters[i].innerText);
    tr.innerText += letters[i].innerText;

      });
  };
};   

// creation action du bouton commencer
startButton.addEventListener('click', (jouer));

});
