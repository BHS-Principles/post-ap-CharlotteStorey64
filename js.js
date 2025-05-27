//making buttons and cloning them plus some other stuff
var imgs = ["octopus.png","wolf.jpg", "america-4.png", "weevil.png","trainbaby.png"];

var frames = [
{cat:"cat"},
{anotherCat:"mewo"}

];

var btn = document.getElementById("btn");
var HTML = document.getElementById("myFrame");

var doThing = function(event, data){
    console.log(event);
    console.log(data);
    alert("Ouch! Don't click so hard :(");

}

for(var j = 0; j < imgs.length; j++){
    var pic = document.getElementById(imgs[j]);
    var newPic = pic.cloneNode(true);
    document.body.append(newPic);

    var newBtn = btn.cloneNode(true);
    document.body.append(newBtn);
    newBtn.addEventListener("click", doThing);
    

}

for(var count = 0; count < frames.length; count++){
    var d = frames[count];
    var copy = HTML.cloneNode(true);
    copy.addEventListener("click", (e)=>{doThing(e,d)});

    document.body.append(copy);
}