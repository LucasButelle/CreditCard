let inputCardNumber = document.getElementById('numerocarte');
let inputCardOwner = document.getElementById('titulaire');
let inputCardExpiration = document.getElementById('expirationdate');
let inputCardCrypto = document.getElementById('crypto');

/** NUMÉRO DE LA CARTE */
// Je crée une fonction avec une action/event "oninput" qui va agir sur l'input "Numéro de la carte"
inputCardNumber.oninput = () => {
    let cardNumber = inputCardNumber.value;

    let cardNumberReplaced = cardNumber.replace(/[^\d]/g, "");
    cardNumberReplaced = cardNumberReplaced.substring(0, 16);
    
    let cardNumberSections = cardNumberReplaced.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
        cardNumberReplaced = cardNumberSections.join(' ');	
    }

    if (cardNumber !== cardNumberReplaced) {
        inputCardNumber.value = cardNumberReplaced;
    }

    let liveCardNumber = document.getElementById('numero');

    // Je lui dit de remplacer le texte existant de la carte par la valeur que je rentre dans l'input "Numéro de la carte"
    liveCardNumber.innerHTML = inputCardNumber.value;
    // SI la valeur de l'input "Numéro de la carte" est vide 
        // ALORS je remplace le texte de la carte par la valeur de base qui est "•••• •••• •••• ••••"
    if(inputCardNumber.value === "") {
        liveCardNumber.innerHTML = "• • • • &nbsp; • • • • &nbsp; • • • • &nbsp; • • • •";
    }
};

/** TITULAIRE DE LA CARTE */
inputCardOwner.oninput = () => {
    let cardOwner = inputCardOwner.value;
    let cardOwnerReplaced = cardOwner
        .replace(/[^A-Za-zÀ-ÿ\s',.-]+$/g, "")
        .substring(0, 30);

    if (cardOwner !== cardOwnerReplaced) {
        inputCardOwner.value = cardOwnerReplaced;
    }
    delete(cardOwner);

    let liveCardOwner = document.getElementById('name');

    liveCardOwner.innerHTML = inputCardOwner.value.toUpperCase();

    if (inputCardOwner.value === "") {
        liveCardOwner.innerHTML = "FULL NAME";
    }
};

/** EXPIRATION DE LA CARTE */
inputCardExpiration.oninput = () => {
    let cardExpiration = inputCardExpiration.value;
    
    let cardExpirationReplaced = cardExpiration
        .replace(/\D/g, "")
        .replace(/^(0[1-9]|1[0-2])\/([0-9]{3})$/mg, "")
        .substring(0, 5);

    let cardExpirationSections = cardExpirationReplaced.match(/\d{1,2}/g);
    if (cardExpirationSections !== null) {
        cardExpirationReplaced = cardExpirationSections.join('/');	
    }

    if (cardExpiration !== cardExpirationReplaced) {
        inputCardExpiration.value = cardExpirationReplaced;
    }
    delete(cardExpiration);
    
    let liveCardExpiration = document.getElementById('expiration');

    liveCardExpiration.innerHTML = inputCardExpiration.value;

    if(inputCardExpiration.value === ""){
        liveCardExpiration.innerHTML = "MM / YY";
    }
};

/** CRYPTOGRAMME DE LA CARTE */
inputCardCrypto.oninput = () => {
    let cardCrypto = inputCardCrypto.value;

    let cardCryptoReplaced = cardCrypto
        .replace(/[^0-9]/g, '')
        .substring(0, 3);

    if (cardCrypto !== cardCryptoReplaced) {
        inputCardCrypto.value = cardCryptoReplaced;
    }
    delete(cardCrypto);

    let liveCardCrypto = document.getElementById('cryptogramme');

    liveCardCrypto.innerHTML = inputCardCrypto.value;
    if(inputCardCrypto.value === ""){
        liveCardCrypto.innerHTML = "• • •";
    }
};

/** ANIMATION 'FLIP' DE LA CARTE */
let flip = document.getElementById('flip');

// Au focus de l'input du Crypto (quand on est dans l'input du Crypto), on ajoute à l'ID 'flip' un transform rotate pour effectuer l'animation
inputCardCrypto.onfocus = () => {
    flip.style.transform = "rotateY(180deg)";
}
// Au blur de l'input du Crypto (quand on sort de l'input du Crypto), on remplace le transform rotate pour revenir sur le devant de la carte
inputCardCrypto.onblur = () => {
    flip.style.transform = "rotateY(0deg)";
}