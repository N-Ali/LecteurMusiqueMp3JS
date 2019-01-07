/** MVC - Model Page & Controller test Page
* Création de la classe Lecteur
* Utilisation d'Aurora js
* Utilisation bibliotheque Tableau
* Bouton Aleatoire actif
* Bouton Repeat Inactif
* Affichage Durée
* Fonction barre progressive
* Mise en place d'une partie du css directement dans ce fichier
* // TODO Lecture continue
* @author N-Ali
* @version 1.0.10
*/


/** Chargement du script dans le HTML
  * @function
  * @name scriptMe
 */
window.onload = function scriptMe(){

    var boutonMenu = myButtonMenu();
    var menuNav = myMenuNav();
    var categories = ["Playlist","Artiste"];
    var playlist = [];
    var i=1;
    var j = 1;
    var valCurseurSon = 100;
    var canvas;
    var ctx;

   //init();


    //création Playliste
    while( j <= 12){
      playlist.push("js/audio/Piste_"+j+".mp3");
      j++;
    }

    // Ciblage & Attribution d'evenement sur le bouton du menu
    var button = document.querySelector('.toogle_btn');
    var nav = document.querySelector('.nav');


    
    

    button.onclick = function(){
      nav.classList.toggle('nav_open');
    }

    //creation barre progression
    var progressBarIndicator = document.querySelector('#progress-bar div');
    var percent = 0
    var video = document.querySelector('audio');

    /** Aurora js - Lecteur
     *  Utilisation d'Aurora js
     *  @member asset verifie la premiere entrée pour initialisation
     *  @member player attribue le premier son au player qui sera
     *  Le player sera envoyé a la classe Lecteur
     *  @member myPlayer Lecteur
    **/

    // Initialisation
    var asset = AV.Asset.fromURL(playlist[0]);
    var player = AV.Player.fromURL(playlist[0]);
    var myPlayer = new Lecteur(0,0,0,0, player, playlist,0);
    var mySound = 50;

    // Création div du lecteur
    var player_div = document.createElement('div');
    player_div.className = "interface";
    document.body.appendChild(player_div);
    var myInterface = interface(player);

    player_div.appendChild(myInterface);


    /* Création bouton aleatoire */
    var shuffleB = createShuffle(myInterface);
    console.log(shuffleB.textContent);
    shuffleB.addEventListener('click', function(event){
        if(myPlayer.randomMode == 0){
            myPlayer.randomMode = 1;
            console.log("Mode aléatoire activé");
            shuffleB.src="Images/shuffleoff.png";
            
        } else if(myPlayer.randomMode == 1){
            myPlayer.randomMode = 0;
            console.log("Mode aléatoire désactivé");
            shuffleB.src="Images/shuffleon.png";
            
        }
    });


    /*Création du boutton précedent */
    var previousB = createPrevious(myInterface);
    previousB.addEventListener('click', function(event){
      myPlayer.previousMe(i);
      myPlayer.playMe();
      i--;
      if(i==0){
        i=1;
      }
    });


    /* Création boutton play / pause */
    var playB = createPlay(myInterface);
    playB.addEventListener('click', function(event){
        if(myPlayer.playMode == 0){
            myPlayer.playMode = 1;
            myPlayer.playMe();
            playB.src="Images/pause.png";
            stopB.src="Images/stop.png";
        }else if(myPlayer.playMode == 1){
            myPlayer.playMode = 0;
            myPlayer.playMe();
            playB.src="Images/play.png";
        }
        event.preventDefault();
    });

   

    /* Création du boutton Stop */
    var stopB = createStop(myInterface);
    stopB.addEventListener('click', function(event){
        myPlayer.stopMe();
        playB.src="Images/play.png";
        stopB.src="Images/stop2.png";
        myPlayer.playMode = 0;
    });

    /* Création boutton suivant */
    var suivantB = createNext(myInterface);
    suivantB.addEventListener('click', function(event){
        myPlayer.nextMe(i);
        myPlayer.playMe();

        i++;
        if(i==15){
          i=1;
        }
    });


    /* Création bouton repeat */
    var repeatB= createRepeat(myInterface);
    repeatB.addEventListener('click', function(event){
        if(myPlayer.repeatMode == 0){
            myPlayer.repeatMode = 1;
            console.log("Mode repeat activé");
            repeatB.src="Images/repeatoff.png";
        }else if(myPlayer.repeatMode == 1){
            myPlayer.repeatMode = 0;
            console.log("Mode repeat désactivé");
            repeatB.src="Images/repeaton.png";
        }
    });



   
}




/** function & class declaration
  * @function createPrevious {Interface}   -  Création bouton retour
  * @function createPlay {Interface}       -  Création bouton play
  * @function createStop {Interface}       -  Création bouton stop
  * @function createNext {Interface}       -  Création bouton suivant
  * @function createRepeat {Interface}     -  Créaion bouton repeat
  * @function createShuffle {Interface}    -  Création bouton shuffle
  * @function interface {Lecteur}          -  Création d'interface Lecteur
  * @class Lecteur {
      constructor(mode,select,repeat,random,player,tab) {...}...}
  **/




/*fonction pour controler le son*/
function controle(){
  var sonbar = document.createElement("input");
    sonbar.type = "range";
    sonbar.id ="controler";
    sonbar.value="100";
    document.body.appendChild(sonbar);

}
/*fonction pour initialiser le canvas */
function init(){
    canvas = document.createElement('canvas');
    canvas.height = 200;
    canvas.width = 200;
    canvas.top="50%";
     canvas.style.transform = "translate(250%, -70%)";
    canvas.style.border ="2px solid #B22222";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
}

/*fonction qui créer le précédent */
function createPrevious(myInterface){
    
    var precedentB = document.createElement('img');
    precedentB.src="images/previous.png";
    precedentB.id="previous_button";

    if(window.matchMedia("(min-width: 500px)").matches){
      precedentB.height="100";
      precedentB.width="100";
      precedentB.style.border = "solid";
    }else{
      precedentB.height="50";
      precedentB.width="50";
       precedentB.style.border = "solid";
    }

    myInterface.appendChild(precedentB);

    return precedentB;
}

/*fonction qui créer le play*/
function createPlay(myInterface){
    var playB = document.createElement('img');
    playB.src="images/play.png";
    playB.id="start_button";



    if(window.matchMedia("(min-width: 500px)").matches){
      playB.height="100";
      playB.width="100";
      playB.style.border = "solid";
    }else{
      playB.height="50";
      playB.width="50";
      playB.style.border = "solid";
    }

    myInterface.appendChild(playB);

    return playB;
}

/*fonction qui créer le stop */
function createStop(myInterface){
    var stopB = document.createElement('img');
    stopB.src="images/stop.png";
    stopB.id="stop_button";

    if(window.matchMedia("(min-width: 500px)").matches){
      stopB.height="100";
      stopB.width="100";
      stopB.style.border = "solid";
    }else{
      stopB.height="50";
      stopB.width="50";
       stopB.style.border = "solid";
    }

    myInterface.appendChild(stopB);

    return stopB;
}

/*fonction qui créer le suivant */
function createNext(myInterface){
    var suivantB = document.createElement('img');
    suivantB.src="images/next.png";
    suivantB.id="previous_button";
    

    if(window.matchMedia("(min-width: 500px)").matches){
      suivantB.height="100";
      suivantB.width="100";
      suivantB.style.border = "solid";
    }else{
      suivantB.height="50";
      suivantB.width="50";
       suivantB.style.border = "solid";
    }

    myInterface.appendChild(suivantB);


    return suivantB;
}



/*fonction qui créer le repeat */
function createRepeat(myInterface){
    var repeatB= document.createElement('img');
    repeatB.src="images/repeaton.png";
    repeatB.id="repeat_button";

    if(window.matchMedia("(min-width: 250px)").matches){
      repeatB.height="50";
      repeatB.width="50";
       repeatB.style.border = "solid";
    }else{
      repeatB.height="10";
      repeatB.width="15";
       repeatB.style.border = "solid";
    }

    myInterface.appendChild(repeatB);

    return repeatB;
}

/*fonction qui créer l'aléatoire */
function createShuffle(myInterface){
    var shuffleB = document.createElement('img');
    shuffleB.src="images/shuffleon.png";
    shuffleB.id="shuffle_button";

    if(window.matchMedia("(min-width: 500px)").matches){
      shuffleB.height="50";
      shuffleB.width="50";
      shuffleB.style.border = "solid";
    }else{
      shuffleB.height="25";
      shuffleB.width="25";
      shuffleB.style.border = "solid";
    }
    myInterface.appendChild(shuffleB);

    return shuffleB;
}


/*fonction qui créer l'interface */
function interface(Player){
  var formulaire = document.createElement('form');

  formulaire.id = "formulaire_Interface";

  if(window.matchMedia("(min-width: 500px)").matches){
    formulaire.style.position = "absolute";
    formulaire.style.top = "80%";
    formulaire.style.left = "50%";
    formulaire.style.transform = "translate(-50%, -50%)";
    formulaire.style.width = "800px";
    formulaire.style.backgroundColor = "#222";
  }else{
    formulaire.style.position = "absolute";
    formulaire.style.top = "80%";
    formulaire.style.left = "50%";
    formulaire.style.transform = "translate(-50%, -50%)";
    formulaire.style.width = "850px";
    formulaire.style.backgroundColor = "#222";
    formulaire.style.zIndex = "1";
  }



  document.body.appendChild(formulaire);

  return formulaire;
}


function myButtonMenu(){
  var boutonMenu = document.createElement('div');
  var mySpan = document.createElement('span');

  boutonMenu.className="toogle_btn";
  boutonMenu.appendChild(mySpan);

  document.body.appendChild(boutonMenu);

  return boutonMenu;
}

function myMenuNav(){
  var menuNav = document.createElement('div');
  var categories = ["Playlist ", "Artiste"];
  var tabElem = [];
  var i = 0;

  // Création des éléments
  for(i=0; i<categories.length; i++){
    var item = document.createElement('a');
    item.href="#";
    item.textContent=categories[i];
    item.className=categories[i];
    tabElem.push(item);
    }
  
  tabElem[0].style.width = "300px";
  menuNav.className = "menu nav";
  document.body.appendChild(menuNav);
  return menuNav;
}





/** @class */
class Lecteur {

	/* Initialise les spécifictés du lecteur
	 * @constructor
	 * 	@param {number} mode   - play, pause, stop
	 * 	@param {number} select - previous, next
	 * 	@param {number} repeat - no repeat, repeat, repeat all
	 * 	@param {number} random - no random, random
   * @param  {Obj}    Aurora js Player
	 */

	constructor (mode, select, repeat, random, player, tab){
		/** @member */
		this.mode = mode;
		this.select = select;
		this.repeat = repeat;
		this.random = random;
    this.player = player;
    this.playlist = tab;
    this.cuTime = 0; 
    this.i=0;

    player.preload();
	}


  /** SETTERS **/

	/** Edit mode var value
	 * @function
	 */
	set playMode(value){
		this.mode = value;
    alert("La valeur a ete changee");
	}

	/** Edit select var value
	 * @function
	 */
	set selectMode(value){
		this.select = value;
		console.log("Selection changée !");
	}

	/** Edit mode var value
	 * @function
	 */
	set repeatMode(value){
		this.repeat = value;
		alert("Mode de lecture changé !");
	}

	/** Edit mode var value
	 * @function
	 */
	set randomMode(value){
		this.random = value;
		alert("Mode de lecture changé !");
	}

	/** Edit mode var value
	 * @function
	 */
	set addMode(value){
		this.add = value;
		console.log("Mode de lecture changé !");
	}

	/** GETTERS **/

    /** Access to the mode var
     * @function
     */
    get playMode(){
		console.log(this.mode);
		return this.mode;
	}

	/** Access to the select var
     * @function
     */
    get selectMode(){
		console.log(this.select);
		return this.select;
	}

	/** Access to the mode var
     * @function
     */
    get repeatMode(){
		console.log(this.repeat);
		return this.repeat;
	}

	/** Access to the mode var
     * @function
     */
    get randomMode(){
		console.log(this.random);
		return this.random;
	}

	/** Access to the mode var
     * @function
     */
    get addMode(){
		console.log(this.add);
		return this.add;
	}

  /** METHODE */
  playMe(){
      if(this.mode==0){
        this.player.pause();
        alert("Mode de lecture changé : pause");
      }else if(this.mode==1){
          this.player.play();
        alert("Mode de lecture changé : play");
      }
  }

  nextMe(value){

    console.log("-----------------------------------");

    if(this.random == 0){ // Mode lecture Normal

      if(value == 9){ // Si value == a la derniere pistes
        this.i = 1;
      }else{
        this.i++;
      }

      this.player.stop();
      var asset = AV.Asset.fromURL(this.playlist[this.i]);
      this.player = AV.Player.fromURL(this.playlist[this.i]);
      this.player.preload();
      console.log("Piste : "+this.i);

    }else if(this.random == 1){ // Mode lecture aléatoire

      var rand = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

      this.player.stop();
      var asset = AV.Asset.fromURL(this.playlist[rand]);
      this.player = AV.Player.fromURL(this.playlist[rand]);
      this.player.preload();
      console.log("Piste : "+rand);

      value = rand;
    }

    /* Information Tracks */

    asset.get('duration', function(duration){
        var ms = asset.duration,
        min = Math.floor((ms/1000/60) << 0),
        sec = Math.floor((ms/1000) % 60);

        alert("Durée : "+ min + ':' + sec);
    });

    asset.get('metadata', function(metadata){
        console.log("Encodé avec : " + asset.metadata.encodedWith);
    });

    asset.get('currentTime', function (currentTime){
        //this.cuTime = asset.currentTime;
        //console.log(this.cutTime);
        console.log(asset.currentTime);
    });
  }

  previousMe(value){
    // TODO  Tableau pour titre deja passer et revenir sur le dernier element ajouté si previous

    console.log("-----------------------------------");

    if(this.random == 0){ // Mode lecture Normal
      if(value == 1){
        this.i = 1;
      }else{
        this.i--;
      }

      this.player.stop();
      var asset = AV.Asset.fromURL(this.playlist[this.i]);
      this.player = AV.Player.fromURL(this.playlist[this.i]);
      this.player.preload();
      console.log("Piste : "+this.i);

    }else if(this.random == 1){ // Mode lecture aléatoire

      var rand = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

      this.player.stop();
      var asset = AV.Asset.fromURL(this.playlist[rand]);
      this.player = AV.Player.fromURL(this.playlist[rand]);
      this.player.preload();
      console.log("Piste : "+rand);

      value = rand;
    }

    /* Information Tracks */
    asset.get('duration', function(duration){
        var ms = asset.duration,
        min = Math.floor((ms/1000/60) << 0),
        sec = Math.floor((ms/1000) % 60);

        
        alert("Durée : "+ min + ':' + sec);
    });
}

  stopMe(){
    this.player.stop();
    var asset = AV.Asset.fromURL(this.playlist[0]);
    this.player = AV.Player.fromURL(this.playlist[0]);
    this.player.preload();
  }

};


