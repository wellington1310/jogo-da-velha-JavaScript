document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    });

})


function handleClick(event) {
 

    let square = event.target
    let position = parseInt(square.id);


    if (handleMove(position)) {

        setTimeout(() => {
            let gameOver = document.querySelector("#gameOver");
            let h2 = document.querySelectorAll("h2")[0];
            gameOver.style.display = "flex";
            win = (playerTime == 0) ? 1 : 2;
            h2.innerHTML = `O ganhador foi o jogador ${win} `;
            symbolWin = (symbols[playerTime] == "x") ? "x" : "o";
            h2.id = symbolWin;
        }, 20);
    }



    updateSquare(position)


}


function updateSquare(position) {

    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class=${symbol}></div>`


}




let restart = document.querySelector("#restart");

restart.addEventListener("click", () => {
    let squares = document.querySelectorAll(".square");
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;

    squares.forEach((square) => {

        square.innerHTML = "";

    });

})

let again = document.querySelector("#again");

again.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;
    let game_over = document.querySelector("#gameOver")
    game_over.style.display = "none";
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {

        square.innerHTML = "";

    });



})