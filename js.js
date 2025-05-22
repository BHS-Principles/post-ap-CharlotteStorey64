//making buttons and cloning them plus some other stuff
var imgs = ["octopus.png","wolf.jpg", "america-4.png", "weevil.png","trainbaby.png"];

var btn = document.getElementById("btn");

var doThing = function(event){
    console.log(event);
    alert("Ouch! Don't click so hard :(")

}

for(var j = 0; j < imgs.length; j++){
    var pic = document.getElementById(imgs[j]);
    var newPic = pic.cloneNode(true);
    document.body.append(newPic);

    var newBtn = btn.cloneNode(true);
    document.body.append(newBtn);
    newBtn.addEventListener("click", doThing);
    

}