var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6; // From 1-6
randomNumber1 = Math.ceil(randomNumber1); // For whole numbers
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6; // From 1-6
randomNumber2 = Math.ceil(randomNumber2); // For whole numbers
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "<strong>🚩 Player 1 wins</strong>";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "<strong>🚩  Tie!  🚩</strong>";

} else {
  document.querySelector("h1").innerHTML = "<strong>🚩 Player 2 wins</strong>";
}
