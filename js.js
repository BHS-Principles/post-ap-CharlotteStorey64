//alert(":3!!!");

var TEMP = document.getElementById("temp");
var CARD = TEMP.querySelector(".card");
var TARGET = document.getElementById("target");

/*
for(var i= 0; i < 52; i++){
    var cardCopy = CARD.cloneNode(true);
    cardCopy.innerHTML = "silver:" + i;
    cardCopy.style.backgroundPositionX = -(i) + "00%";
    cardCopy.style.backgroundPositionY = Math.floor(i/13) + "00%";
    TARGET.append(cardCopy);

}
*/

class Card{
    // WHAT IT IS
    constructor(num){
        this.id = num;
        this.suit = Math.floor(num / 13);
        this.value = num % 13;
        this.pic = "mhttps://upload.wikimedia.org/wikipedia/commons/5/55/Atlasnye_playing_cards_deck.svg"
    }

    // WHAT IT DO
    draw(){
        var cardCopy = CARD.cloneNode(true);
        cardCopy.innerHTML = "silver:" + this.id;
        cardCopy.style.backgroundPositionX = -(this.id) + "00%";
        cardCopy.style.backgroundPositionY = Math.floor(this.id/13) + "00%";
        TARGET.append(cardCopy); 
    }
    
}

var makeDeck = function(howMany){
    var deck = [];

    for(var i = 0; i < howMany; i++){
        var card = new Card(i);
        deck.push(card);
    }

    return deck;
}


var shuffledDeck = function(deck){
    
    for(var i = 0; i < deck.length; i++){
        // gotta randomify
        var rnd = Math.floor(Math.random() * deck.length);

        // cards need to switch position randomly
        var card1 = deck[i];
        var card2 = deck[rnd];

        deck[rnd] = card1;
        deck[i] = card2;

    }

    return deck;
}

var DECK = makeDeck(52);
shuffledDeck(DECK);
console.log(DECK);
DECK[0].draw();