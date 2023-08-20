// random dice 1
var randomNumber1 = Math.floor(Math.random()*6) + 1;

let randomDiceImage = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

// random dice 2
var randomNumber2 = Math.floor(Math.random()*6) + 1;

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

randomNumber1 >randomNumber2 ?
(document.querySelector("h1").innerHTML = "Player 1 Won") :
randomNumber2> randomNumber1?
(document.querySelector("h1").innerHTML = "Player 2 Won") :
(document.querySelector("h1").innerHTML = "Draw");