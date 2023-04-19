// let player = "X";

// const changePlayer = () => {
//     return player === "X" ? "O" : "X";
// }

// const checkWin = () => {

// }

// let fulltable = document.getElementsByClassName("maintable");
// Array.from(fulltable).forEach(item => {
//     let data = item.querySelector(".tabledata");
//     console.log(fulltable);
//     item.addEventListener("click", ()=> {
//         if(data.innerText === "") {
//             data.innerText = player;
//             player = changePlayer();
//             checkWin();
//             document.getElementsByClassName("turn")[0].innerText = "Turn for " + player;
//         }
//     })
// })

const cells = document.querySelectorAll("td");
const winner = document.getElementById("winner");
const message = document.getElementById("turn");
let currentPlayer = "X";
let gameOver = false;

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (!gameOver && cell.textContent === "") {
            cell.textContent = currentPlayer;
            checkWin();
            switchPlayer();
        }
    })
})

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    message.textContent = `Current player : ${currentPlayer}`;
}

function checkWin() {
    const winningPossible = [
        [0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
    ];

    winningPossible.forEach(win => {
        const [a, b, c] = win;
        if (cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer) {
            gameOver = true;
            winner.textContent = `Player ${currentPlayer} winner!`;
            hightlight(a,b,c);
        }
    });

    if (!gameOver && Array.from(cells).every(cell => cell.textContent !== "")) {
        gameOver = true;
        winner.textContent = "Tie";
    };
};  

function hightlight(a,b,c) {
    cells[a].style.backgroundColor = "yellow";
    cells[b].style.backgroundColor = "yellow";
    cells[c].style.backgroundColor = "yellow"; 
}