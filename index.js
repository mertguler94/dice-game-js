// Create a random number between 1-6 for Player 1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;

// Create a random number between 1-6 for Player 2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;

// Change dice images according to random numbers
document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<i class='fa-solid fa-flag' style='color: red'></i> Player 1 Wins!"
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! <i class='fa-solid fa-flag' style='color: red'></i>"
}

else {
    document.querySelector("h1").innerHTML = "Draw!"
}