var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.ceil(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.ceil(randomNumber2);


// console.log("You got: " + randomNumber1 );

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML= "<strong>Player 1 wins</strong>";
}
else
{
  document.querySelector("h1").innerHTML= "<strong>Player 2 wins</strong>";
}


document.querySelector("img1").setAttribute("src","images/dice1.png");
