let pOne = prompt("Enter Player 1 Name");
let pTwo = prompt("Enter Player 2 Name");
let setScore = parseInt(prompt("Enter Max Score"));

let p1Score = 0;
let p2Score = 0;

let p1Name = document.querySelector("#p1Name");
let p2Name = document.querySelector("#p2Name");

p1Name.textContent = pOne;
p2Name.textContent = pTwo;

let p1Display = document.querySelector("#p1Score");
let p2Display = document.querySelector("#p2Score");
let maxDisplay = document.querySelector("#maxScore");

p1Display.textContent = p1Score;
p2Display.textContent = p2Score;
maxDisplay.textContent = setScore;

let p1Plus = document.querySelector("#p1Plus");
let p1Minus = document.querySelector("#p1Minus");
let p2Plus = document.querySelector("#p2Plus");
let p2Minus = document.querySelector("#p2Minus");
let reset = document.querySelector("#reset");

function updateButtonState() {
    p1Minus.disabled = (p1Score === 0);
    p2Minus.disabled = (p2Score === 0);
}

function resetScores() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    updateButtonState();
}

updateButtonState();

p1Plus.addEventListener("click", function () {
    if (p1Score < setScore) {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === setScore) {
            alert(pOne + " Wins!");
            resetScores();
        }
    }
    updateButtonState();
});

p1Minus.addEventListener("click", function () {
    if (p1Score > 0) {
        p1Score--;
        p1Display.textContent = p1Score;
    }
    updateButtonState();
});

p2Plus.addEventListener("click", function () {
    if (p2Score < setScore) {
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === setScore) {
            alert(pTwo + " Wins!");
            resetScores();
        }
    }
    updateButtonState();
});

p2Minus.addEventListener("click", function () {
    if (p2Score > 0) {
        p2Score--;
        p2Display.textContent = p2Score;
    }
    updateButtonState();
});

reset.addEventListener("click", function () {
    resetScores();
});
