var list = [
    "Emily",
    "not Emily",
    "maybe Emily"
];

var imgs = ["america-4.png","octopus.png","weevil.png","wolf.jpg"];

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