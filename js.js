var list = [
    "Emily",
    "not Emily",
    "maybe Emily"
];

var imgs = ["octopus.png","wolf.jpg", "america-4.png", "weevil.png"];

var btn = document.getElementById("btn");

for(var j = 0; j < imgs.length; j++){
    var pic = document.getElementById(imgs[j]);
    var newPic = pic.cloneNode(true);
    document.body.append(newPic);

    var newBtn = btn.cloneNode(true);
    document.body.append(newBtn);
    

}
/*
for(var i = 0; i < 3; i++){
    var newBtn = btn.cloneNode(true);
    document.body.append(newBtn);
    alert("HELL YEAH BROTHER!!!!!!!! " + list[i]);
}
*/