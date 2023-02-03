var a =Math.floor(Math.random() * 6) + 1;
var forPlayer1 = ("dice" +a+ ".png");
document.querySelectorAll("img")[0].setAttribute("src", forPlayer1);
// for player2
var b=Math.floor(Math.random() * 6) + 1;
var forPlayer2 =("dice" +b+ ".png");
document.querySelectorAll("img")[1].setAttribute("src", forPlayer2);

if (a > b) { document.querySelector(".win").innerHTML= "Player 1 wins";
    
} 
else if (b>a){document.querySelector(".win").innerHTML= "Player 2 wins";

}
else {
document.querySelector(".win").innerHTML= "Draw";
}