"use strict"

//creates random number from 1-6 for each player
let player1 = parseInt((Math.random()*6));
let player2 = parseInt((Math.random()*6))

const button = document.getElementById("test");
const image = ["images/dice1.png",'images/dice2.png','images/dice3.png','images/dice4.png',"images/dice5.png","images/dice6.png"];

//when button is pressed reset dice
document.getElementById("test").addEventListener("click", () => {
    player1 = parseInt((Math.random()*6));
    player2 = parseInt((Math.random()*6));

    document.querySelectorAll("img")[0].src = image[player1];
    document.querySelectorAll("img")[1].src = image[player2];

    if(player1 > player2) 
    {
        //player1 wins
        document.querySelector("footer").innerHTML = "<h1>Player 1 wins</h1>";
    }
    else
    {
        document.querySelector("footer").innerHTML = "<h1>Player 2 wins</h1>";
    }
});
