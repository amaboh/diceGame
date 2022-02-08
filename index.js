let player1Data = 0;
let player2Data = 0;
let player1Turn = true;


const message = document.getElementById("message")
const player1Score = document.getElementById("player1Score")
const player2Score = document.getElementById("player2Score")

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")

const rollBtn = document.getElementById("rollDice")
const resetBtn = document.getElementById("resetDice")

rollBtn.addEventListener("click", function() {
    const diceNum = Math.floor(Math.random() * 6) +1
    console.log(diceNum)
    player1Score.textContent = diceNum
})