import { gameController } from './gameController';

const domHandling = (() => {

    const displayBoard = (number, shipArray) => {

        let mainContainer = document.getElementById("main-container");
        let container = document.createElement("div");
        container.classList.add("container");
        container.id = "container" + number;

        let leftContainer = document.createElement("div");
        leftContainer.classList.add("left-container");
        leftContainer.id = "left-container";
        let rightContainer = document.createElement("div");
        rightContainer.classList.add("right-container");
        rightContainer.id = "right-container";

        let boardContainer = document.createElement("div");
        boardContainer.classList.add("board-container");
        boardContainer.id = "board-container";
        let pos = [];

        let playerLabel = document.createElement("div");
        playerLabel.classList.add("player-label");
        if (number == 1) {
            boardContainer.classList.add("disabled");
            playerLabel.innerText = "your board (click to shuffle)";
            playerLabel.id = "player";
            playerLabel.onclick = (e => {
                window.location.reload();
            });
            leftContainer.appendChild(playerLabel);
            leftContainer.appendChild(boardContainer);
            container.appendChild(leftContainer);
        }
        else {
            playerLabel.innerText = "computer's board (attack any position)";
            playerLabel.id = "computer";
            playerLabel.classList.add("disabled");
            rightContainer.appendChild(playerLabel);
            rightContainer.appendChild(boardContainer);
            container.appendChild(rightContainer);
        }


        for (let i = 1; i <= 100; i = i+10) {
            for (let j = i; j <= i+9; j++) {
                pos[j] = document.createElement("button");
                pos[j].classList.add("btn", "btn-outline-primary", "rounded-0");
                pos[j].innerText = j;
                if (number == 1) { pos[j].id = j };
                pos[j].onclick = (e => {
                    changeColor("miss", pos[j]);//pos[j].style.backgroundColor = "blue";
                    shipArray.forEach((ship) => {
                        let coords = ship.getCoords();
                        coords.forEach((position) => {
                            //console.log(position);
                            if (position == pos[j].innerText) {
                                changeColor("hit", pos[j]);                                
                                ship.markHit(position);
                                gameController.checkIfAllSunk(number);
                            }
                        });
                    });
                    gameController.nextMove(number);
                });
                boardContainer.appendChild(pos[j]);
            }
        }
        mainContainer.appendChild(container);
    };

    const playerDisplay = () => document.getElementById("player");
    const computerDisplay =() => document.getElementById("computer");
    const displayInfo = async (displayDiv, message) => {
        (displayDiv == "player") ? playerDisplay().innerText = message : computerDisplay().innerText = message;
        if (message === "play again?") {
            document.getElementById("board-container").classList.remove("disabled");
            document.getElementById("container1").classList.remove("disabled");
            Array.from(document.getElementsByClassName("board-container")).forEach(container => {
                container.classList.add("disabled");
            });
            playerDisplay().classList.remove("disabled");
            await new Promise(r => setTimeout(r, 1000));
            playerDisplay().classList.add("play-again");
            await new Promise(r => setTimeout(r, 1000));
            playerDisplay().classList.remove("play-again");
        }
    };

    const changeColor = (event, element, board) => {
        if (event == "miss") {
            element.style.backgroundColor = "#00bfff";
            element.style.pointerEvents = "none";
        }
        if (event == "hit") {
            element.style.backgroundColor = "#fb5656";
            element.style.color = "white";
            element.style.pointerEvents = "none";
        }
        if (event == "sunk") {
            for (const a of document.getElementById("container" + board).querySelectorAll("button")) {
                element.forEach((pos) => {
                    if (a.innerText == pos) {
                        a.style.backgroundColor = "#878787";
                        a.style.color = "white";
                    }
                });
            }
        }
    };

    return { 
        displayBoard, 
        displayInfo,
        changeColor
    }
})();

export { domHandling }