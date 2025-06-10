//alert(":3!!!");

var TEMP = document.getElementById("temp");
var CARD = TEMP.querySelector(".card");
var TARGET = document.getElementById("target");


class Game{
    constructor(players, deck){
        this.players = players;
        this.deck = deck;

        this.play();

    }

    play(){
        //step 1: shuffle
        this.deck.shuffle();

        //step 2: deal
        this.deck.deal(this.players[0]);

        alert("what's up gamers!");
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    draw(){

    }
}

class Deck{

    constructor(num){
        this.cardCount = num;
        this.cards = []
        this.make();
        this.shuffle();

    }

    make(){
    
        for(var i = 0; i < this.cardCount; i++){
            var card = new Card(i);
            this.cards.push(card);
        }

        return this.cards;
    }

    shuffle(){
        for(var i = 0; i < this.cards.length; i++){
            // gotta randomify
            var rnd = Math.floor(Math.random() * this.cards.length);

            // cards need to switch position randomly
            var card1 = this.cards[i];
            var card2 = this.cards[rnd];

            this.cards[rnd] = card1;
            this.cards[i] = card2;

        }
    }

    deal(player){
        alert("dealt to: " + player.name);
    }

}

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


var players = [

];

var marshaPJohnson = new Deck(52);

players[0] = new Player ("Eden");

var newGame = new Game(players, marshaPJohnson);

marshaPJohnson.cards[0].draw();
console.log(marshaPJohnson.cards);

var williamOfOrange = new Card(13);
williamOfOrange.draw();
