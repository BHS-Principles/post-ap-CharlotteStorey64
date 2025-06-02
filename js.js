//making buttons and cloning them plus some other stuff
var FRAMES = [
    {},
    {},
    {}

];

var HTML = document.querySelector(".card");

var doSomething = function(event, data){
    console.log(event);
    console.log(data);
    alert("FRame me up before you go go");
};

for(var count = 0; count < 52; count++ )
{
    var d = FRAMES[count];
    var copy = HTML.cloneNode(true);
    copy.style.backgroundPositionX = count%13 + "00%";
    copy.style.backgroundPositionY = -count%4 + "00%";
    /*
    d.suit = Math.floor(count/13);
    d.number = count % 13;
    */

    copy.addEventListener("click", (e)=>{ doSomething(e,d) } );

    document.body.append(copy);

}
alert("?????");

var imgs = ["octopus.png","wolf.jpg", "america-4.png", "weevil.png","trainbaby.png"];


var btn = document.getElementById("btn");

for(var j = 0; j < imgs.length; j++){
    var pic = document.getElementById(imgs[j]);
    var newPic = pic.cloneNode(true);
    document.body.append(newPic);

    var newBtn = btn.cloneNode(true);
    document.body.append(newBtn);
    newBtn.addEventListener("click", doThing);
    

}