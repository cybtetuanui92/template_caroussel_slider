///////////////////////////////////
/////////////////////////////////////
PSEUDOCODE

ALGORITHME carouselAlgo

VARIABLE
    let btnPrev;
    let btnNext;
    let imgSlideActive;
    let imgSlidePrev;
    let imgSlideNext;

    let count = 0;
//////
DEBUT  
//////
    Quand j'affiche le site carousel, l'image active doit être affichée (FAIT OK)
    Quand je clique sur le bouton précédent, l'image active change en celle de l'image précédente
////1
       SI bouton précédent CLICK AU COMPTEUR, ALORS
            image active REMOVE (image actuelle à supprimer/remplacer/switcher)
            image active AJOUTER (image première du tableau carousel)

    Et si j'appuie de nouveau, l'image active change de nouveau mais change en celle de l'image dernière (la suivante)
////2
        SI bouton précédent CLICK +++ AU COMPTEUR, ALORS
            image active REMOVE (image actuelle à supprimer/remplacer/switcher)
            image active AJOUTER (image dernière du tableau carousel) 

    Quand je clique sur le bouton suivant, l'image active change en celle de l'image suivante
////3
        SI bouton suivant CLICK AU COMPTEUR, ALORS
            image active REMOVE (image actuelle à supprimer/remplacer/switcher)
            image active AJOUTER (image dernière du tableau carousel "ici trois photos") 

    Et si j'appuie de nouveau, l'image active change de nouveau mais change en celle de l'image première (la précédente) 
 ////4
        SI bouton suivant CLICK +++ AU COMPTEUR, ALORS
            image active REMOVE (image actuelle à supprimer/remplacer/switcher)
            image active AJOUTER (image première du tableau carousel) 

    AIDE:
    DEUX fonctions sont créées : une pour le click bouton précédent(1,2) et une autre click bouton suivant (3,4)

/////
FIN
/////