import { gameController } from './gameController';

const domHandling = (() => {
    
    let started = false;
    const startGame = () => {
        started = true;
    };

    const displayBoard = (number, shipArray) => {

        let mainContainer = document.getElementById("main-container");
        let container = document.createElement("div");
        container.classList.add("container");
        container.id = "container" + number;

        let leftContainer = document.createElement("div");
        leftContainer.classList.add("left-container");
        let rightContainer = document.createElement("div");
        rightContainer.classList.add("right-container");

        let boardContainer = document.createElement("div");
        boardContainer.classList.add("board-container");
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
        }
        else {
            playerLabel.innerText = "computer's board (attack any position)";
            playerLabel.id = "computer";
            playerLabel.classList.add("disabled");
            rightContainer.appendChild(playerLabel);
            rightContainer.appendChild(boardContainer);
        }


        for (let i = 1; i <= 100; i = i+10) {
            for (let j = i; j <= i+9; j++) {
                pos[j] = document.createElement("button");
                pos[j].classList.add("btn", "btn-outline-primary");
                pos[j].innerText = j;
                pos[j].onclick = (e => {
                    if(!started) {
                        document.getElementById("player").innerText = "your board";
                        document.getElementById("computer").innerText = "computer's board";
                        document.getElementById("container1").classList.add("disabled");
                        startGame();
                    }
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
        container.appendChild(leftContainer);
        container.appendChild(rightContainer);
        mainContainer.appendChild(container);
    };

    //const promptBox = document.createElement("div");

    const displayPrompt = (promptText) => {
        // if (promptText !== undefined) {
        //     promptBox.innerHTML = promptText;
        // }
        // else {
        //     promptBox.textContent = "Start game by attacking a position on the computer's board. There are 7 ships!";
        //     promptBox.classList.add("prompt-box");
        //     document.body.appendChild(promptBox);
        // }
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
                        a.style.backgroundColor = "#660000";
                        a.style.color = "white";
                    }
                });
            }
        }
    };

    return { 
        displayBoard, 
        displayPrompt,
        changeColor
    }
})();

export { domHandling }