//1st dice

//random number generator
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
//dice1.png - dice6.png
var randomImageSource = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
// set attribute and put the random image source
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

//2nd dice
//random number generator
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//dice1.png - dice6.png
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
// set attribute and put the random image source
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw! Refresh Me!";
}
