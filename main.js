function adduser()
{
var P1 = document.getElementById("player1_input").value
var P2 = document.getElementById("player2_input").value
localStorage.setItem("L1", P1);
localStorage.setItem("L2", P2);
window.location = "gamepage.html";
}