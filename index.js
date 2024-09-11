document.addEventListener('DOMContentLoaded',()=>{
    
    // on cree la liste de mots
    const listeMots=["TOTO","TOTOMOTO","MAISON"];
    // console.log(listeMots.length);
    console.log(listeMots);
// on calcule le nombre de mots
    let longueurListe=listeMots.length;
    console.log(longueurListe);
    // on tire au sort un mot

    let nbAlea=Math.floor(Math.random()*longueurListe);
    console.log(nbAlea);
    let motAtrouver = listeMots[nbAlea];
    console.log(motAtrouver.length);
    let motDecoupe=motAtrouver.split('');
    console.log(motDecoupe);
    
    const tableau=document.getElementById('tableau')
    const ligne=document.createElement('tr');
    motDecoupe.forEach(lettre=>{
        const cellule=document.createElement('td');
        cellule.textContent=lettre;
        ligne.appendChild(cellule);
    

    });
    tableau.appendChild(ligne);


})

