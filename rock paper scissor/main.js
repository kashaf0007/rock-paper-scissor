//if else statement using rock paper scissor game
var player1 = "rock";
var player2 = "paper";
if (player1 === player2) {
    console.log("match is tie!");
}
else if ((player1 === "rock" && player2 === "paper") ||
    (player1 === "paper" && player2 === "scissor") ||
    (player1 === "scissor" && player2 === "rock")) {
    console.log("player1 won the match");
}
else {
    console.log("player2 won the match yesterday");
}
