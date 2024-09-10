document.addEventListener('DOMContentLoaded',()=>{
    // on cree la liste de mots
    const listeMots=["toto","totomoto","maison"];
    console.log(listeMots.length);
    console.log(listeMots);
// on calcule le nombre de mots
    let longueurListe=listeMots.length;
    console.log(longueurListe);
    // on tire au sort un mot

    let nbAlea=Math.floor(Math.random()*longueurListe)+1;
    console.log(nbAlea);
    let motAtrouver = listeMots[nbAlea];
    console.log(motAtrouver.toString());


})