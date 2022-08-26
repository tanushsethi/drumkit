const map = {
    "1":"clap",
    "2":"hihat",
    "3":"kick",
    "4":"openhat",
    "5":"boom",
    "6":"ride",
    "7":"snare",
    "8":"tom",
    "9":"tink"
}

function mouseOver() {
    console.log(this);
    this.style.border = "3px solid yellow";
}

function mouseOut() {
    this.style.border = "0px solid yellow";
  }

function highlight(element) {
    element.style.transition = "all 0.2s ease-in-out";
    element.style.border = "3px solid yellow";

    setTimeout(function()
    {
        element.style.border = "0px solid yellow";
    }, 100);
}

function playSound(event){
    console.log(event.key);
    var audioName;
    if(event.type == "click"){
        audioName = "sounds/01 - JavaScript Drum Kit_sounds_" + this.dataset.name + ".wav";
    }else if(event.keyCode>= 49 && event.keyCode<= 57){
        var divI = document.getElementById("insBox"+event.key);
        highlight(divI);
        audioName = "sounds/01 - JavaScript Drum Kit_sounds_" + map[event.key] + ".wav"
    }else{
        return;
    }

    var audio = new Audio(audioName);
    audio.play();
}

var insDivs = document.getElementsByClassName("insBox");
for(var i = 0; i<insDivs.length ; i++){
    insDivs[i].addEventListener('click', playSound);
    insDivs[i].addEventListener("mouseover", mouseOver);
    insDivs[i].addEventListener("mouseout", mouseOut);
}

document.addEventListener("keydown",playSound);

