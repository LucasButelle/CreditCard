let inputCardNumber = document.getElementById('numerocarte');
let inputCardOwner = document.getElementById('titulaire');
let inputCardExpiration = document.getElementById('expirationdate');
let inputCardCrypto = document.getElementById('crypto');

/** NUMÉRO DE LA CARTE */
// Je crée une fonction qui agit  a chaque pression d'une touche sur l'input du "Numéro de carte"
inputCardNumber.onkeyup = inputCardNumber.onkeypress  = function(){
    let liveCardNumber = document.getElementById('numero');

    // Je lui dit de remplacer le texte existant de la carte par la valeur que je rentre dans l'input "Numéro de la carte"
    liveCardNumber.innerHTML = this.value;
    // SI la valeur de l'input "Numéro de la carte" est vide 
        // ALORS je remplace le texte de la carte par la valeur de base qui est "•••• •••• •••• ••••"
    if(inputCardNumber.value === ""){
        liveCardNumber.innerHTML = "• • • • &nbsp; • • • • &nbsp; • • • • &nbsp; • • • •";
    }
}
// Je crée une fonction avec une action/event "keypress" qui va agir sur l'input "Numéro de la carte"
inputCardNumber.addEventListener('keypress',function (e) {
    // SI la taille cette valeur (inputCardNNumber) est égale à 4 ou à 9 ou à 14
        // ALORS cette valeur est égale à cette même valeur + un espace (Cela permet d'avoir un espace tout les 4 chiffres)
    if (this.value.length === 4 || this.value.length === 9 || this.value.length === 14) {
        this.value = this.value += ' ';
    }
});

/** TITULAIRE DE LA CARTE */
inputCardOwner.onkeyup = inputCardOwner.onkeypress  = function(){
    let liveCardOwner = document.getElementById('name');

    liveCardOwner.innerHTML = this.value;
    if(inputCardOwner.value === ""){
        liveCardOwner.innerHTML = "First Name";
    }
}

/** EXPIRATION DE LA CARTE */
inputCardExpiration.onkeyup = inputCardExpiration.onkeypress  = function(){
    let liveCardExpiration = document.getElementById('expiration');

    liveCardExpiration.innerHTML = this.value;
    if(inputCardExpiration.value === ""){
        liveCardExpiration.innerHTML = "MM / YY";
    }
}
inputCardExpiration.addEventListener('keypress',function () {
    if (this.value.length === 2) {
        this.value = this.value += '/';
}
});

/** CRYPTOGRAMME DE LA CARTE */
inputCardCrypto.onkeyup = inputCardCrypto.onkeypress  = function(){
    let liveCardCrypto = document.getElementById('cryptogramme');

    liveCardCrypto.innerHTML = this.value;
    if(inputCardCrypto.value === ""){
        liveCardCrypto.innerHTML = "123";
    }
}

/** ANIMATION 'FLIP' DE LA CARTE */
let flip = document.getElementById('flip');

inputCardCrypto.onfocus = () => {
    flip.style.transform = "rotateY(180deg)";
}
inputCardCrypto.onblur = () => {
    flip.style.transform = "rotateY(0deg)";
}