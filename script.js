function playSound(event){
    var audioName = "sounds/01 - JavaScript Drum Kit_sounds_" + this.dataset.name + ".wav";
    var audio = new Audio(audioName);
    audio.play();
}

var insDivs = document.getElementsByClassName("insBox");
for(var i = 0; i<insDivs.length ; i++){
    insDivs[i].addEventListener('click', playSound);
}