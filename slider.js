// DECLARATION DES VARIABLES

let btnPrev = document.getElementById("prev");
let btnNext = document.getElementById("next");
let images = document.querySelectorAll('.img_slide');
let nbSlide = images.length;
let i = 0;


// DECLARATION DE LA FONCTION 1
function prevSlide () {
    // console.log("Le bouton a été cliqué!")
   
    // Quand j'affiche le site carousel, l'image active doit être affichée (FAIT OK)
    // Quand je clique sur le bouton précédent, l'image active change en celle de l'image précédente
 
    // SI bouton précédent CLICK AU COMPTEUR, ALORS
    //  image active REMOVE (image actuelle à supprimer/remplacer/switcher)
    images[i].classList.remove("active");
    // console.log(images[i]);
    // console.log(i);
    
    // COUNTER
    if(i > 0) {
        i--;
    } else {
        i = nbSlide - 1;
    }
    
    //  image active AJOUTER (image première du tableau carousel)
    images[i].classList.add("active");
    // console.log(images[i]);
    // console.log(i);
}





// DECLARATION DE LA FONCTION 2
function nextSlide () {
    // console.log("Le bouton a été cliqué!")

    // Quand je clique sur le bouton suivant, l'image active change en celle de l'image suivante

    // SI bouton suivant CLICK AU COMPTEUR, ALORS
    //  image active REMOVE (image actuelle à supprimer/remplacer/switcher)
    images[i].classList.remove("active");
    // console.log(images[i]);
    // console.log(i);

    // COUNTER
    if(i < nbSlide - 1) {
        i++;
    } else {
        i = 0;
    }
    //  image active AJOUTER (image dernière du tableau carousel "ici trois photos") 
    images[i].classList.add("active");
    // console.log(images[i]);
    // console.log(i);
}

// DECLARATION FONCTION TOUCHES FLECHÉES
document.addEventListener('keydown', function(event) {
    console.log('Code de la touche pressée : ' + event.code);
    if(event.code == "ArrowLeft"){
        // On appelle la fonction "slidePrecedente"
        prevSlide();
    // Sinon si la touche "→" (39) est pressée
    } else if(event.code == "ArrowRight"){
        // On appelle la fonction "slideSuivante"
        nextSlide();
    }
    // Vous pouvez également imprimer d'autres propriétés de l'objet event si nécessaire
    console.log('Key : ' + event.key);
  });

// DÉCLARATION DES ecouteurs d'évenement
btnPrev.addEventListener("click", prevSlide)
btnNext.addEventListener("click", nextSlide)