var img = document.createElement('div');
img.classList.add('goblin');

var emptyPlace = document.querySelectorAll('.emptyCell');

function randomizer(){
    var randomNumber = Math.round(Math.random() * 15);
    return randomNumber;
}

function movingGoblin(){
    var targetPlace = emptyPlace[randomizer()];
    targetPlace.appendChild(img);
    targetPlace.classList.remove('emptyCell');
}

var time = setInterval(function() {movingGoblin()}, 2000);