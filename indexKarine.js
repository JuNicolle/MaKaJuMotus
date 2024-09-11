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
        // on va chercher un mot au hasars
     let nbAlea=Math.floor(Math.random()*longueurListe);
     console.log(nbAlea);
    //  on veut la longueur du mot aleatoire
     let motAtrouver = listeMots[nbAlea];
      console.log(motAtrouver.length);
    //   on veut que le mot soit decoupe en lettres
      let motDecoupe=motAtrouver.split('');
      console.log(motDecoupe);

      const tableau=document.getElementById('tableau')
      const ligne=document.createElement('tr');
        motDecoupe.forEach((lettre, index)=>{
        let cellule=document.createElement('td');
        if (index===0){
            cellule.textContent=lettre;
        };
        ligne.appendChild(cellule);
        });
        tableau.appendChild(ligne);

        // on demande à ce que quand on clique sur une lettre, la lettre soit affichee en console
        const letters = document.getElementsByClassName("letter");
        // let cellule=document.createElement('td');



// on veut que la console affiche la lettre du clavier associee
      for (let i=0; i < letters.length; i++){
        letters[i].addEventListener('click' , () => {
        console.log (letters[i].innerText);  
        let contenuCellule=document.getElementById(cellule);
        contenuCellule = letters[i].innerHtml;         
        });
    };
};

// creation action du bouton commencer - qaund on clique, on active la fonction jouer
startButton.addEventListener('click', (jouer));


// let td1 = document.getElementById('td');
// td1.insertAdjacentHTML("afterend", '<tr id="d">two</div>');


});