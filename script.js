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

function playSound(event){
    console.log(event.key);
    var audioName;
    if(event.type == "click"){
        audioName = "sounds/01 - JavaScript Drum Kit_sounds_" + this.dataset.name + ".wav";
    }else if(event.keyCode>= 49 && event.keyCode<= 57){
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
}

document.addEventListener("keydown",playSound);