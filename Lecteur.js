/** MVC - Model Page & Controller test Page
* 
*@author SOOKUN N-Ali
*Prototype du lecteur Mp3
*/


/** Chargement du script dans le HTML
  * @function
  * @name scriptMe
 */
window.onload = function script(){

    var BoutonMenu = BoutonDuMenu();
    var Categorie = ["Playlists","Artistes","Albums","Morceaux","Déconnexion"];
    
    
    
    var Bouton = document.querySelector('.toogle_btn');//Permet de cibler et d'attribuer un evenement sur un bouton
    
    var Jouerdiv = document.createElement('div');
    Jouerdiv.className = "Interface";
    document.body.appendChild(Jouerdiv);
    var MonInterface = Interface();
    
    
    Jouerdiv.appendChild(MonInterface);
    
    /** CREATION DES BOUTONS
     * Creation du bouton aleatoire
     * creation du bouton play
     * creation du bouton suivant
     * creation du bouton precedent
     **/
    
    /*Bouton Aleatoire*/
    var BoutonAleatoire = CreeBoutonAleatoire(MonInterface);
    
    console.log(BoutonAleatoire.textContent);
    BoutonAleatoire.addEventListener('click',function(){
                                     console.log("Tu as appuiyé\n");
                                     });



    var BoutonStop = CreeBoutonStop(MonInterface);
    BoutonStop.addEventListener('click',function(){
                            console.log("Tu as arrété\n");
                            });

}

/*Fonction qui crée le bouton aleatoire dans le menu */
function BoutonDuMenu(){
    var BoutonMenu = document.createElement('div');
    var Span = document.createElement('span');
    
    BoutonMenu.className="toogle_btn";
    BoutonMenu.appendChild(Span);
    
    document.body.appendChild(BoutonMenu);
    
    return BoutonMenu;
}




function CreeBoutonStop(MonInterface){
    
    var BoutonStop = document.createElement('img');
    BoutonStop.src = "stop.png";
    BoutonStop.id = "BoutonStop";
    if(window.matchMedia("(min-width: 500px)").matches){
        BoutonStop.height="100";
        BoutonStop.width="100";
    }else{
        BoutonStop.height="50";
        BoutonStop.width="50";
    }
    
    MonInterface.appendChild(BoutonStop);
    
    return BoutonStop;
}

/*Fonction qui crée le bouton dans l'interface */
function CreeBoutonAleatoire(MonInterface){
    
    var BoutonAle = document.createElement('img');
    BoutonAle.src =("shuffle.png");
    BoutonAle.id =("BoutonAleatoire");
    if(window.matchMedia("(min-width: 500px)").matches){
        BoutonAle.height="50";
        BoutonAle.width="50";
        BoutonAle.position ="50px";
    }else{
        BoutonAle.height="25";
        BoutonAle.width="25";
    }
    MonInterface.appendChild(BoutonAle);
    
    return BoutonAle;
}

    
    
function Interface(){
    var Formulaire = document.createElement('form');
    
    Formulaire.id = "formulaire_Interface";
    
    if(window.matchMedia("(min-width: 500px)").matches){
        Formulaire.style.position = "absolute";
        Formulaire.style.top = "50%";
        Formulaire.style.left = "50%";
        Formulaire.style.transform = "translate(-50%, -50%)";
        Formulaire.style.width = "500px";
        Formulaire.style.backgroundColor = "#378";
    }else{
        Formulaire.style.position = "absolute";
        Formulaire.style.top = "50%";
        Formulaire.style.left = "50%";
        Formulaire.style.transform = "translate(-50%, -50%)";
        Formulaire.style.width = "250px";
        Formulaire.style.backgroundColor = "#378";
        Formulaire.style.zIndex = "1";
    }
    
    
    
    document.body.appendChild(Formulaire);
    
    return Formulaire;
}

    

