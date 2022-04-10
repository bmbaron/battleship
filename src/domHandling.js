import { gameController } from './gameController';

const domHandling = (() => {

    const displayBoard = (number, shipArray) => {

        let mainContainer = document.getElementById("main-container");
        let container = document.createElement("div");
        container.classList.add("container");
        container.id = "container" + number;
        let width = "200";
        let height = "200";
        let pos = [];

        for (let i = 1; i <= 100; i = i+10) {
            for (let j = i; j <= i+9; j++) {
                pos[j] = document.createElement("button");
                pos[j].className = "button";
                pos[j].style.height = height/5 + "px";
                pos[j].style.width = width/5 + "px";
                pos[j].innerText = j;
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
                container.appendChild(pos[j]);
            }
        }
        mainContainer.appendChild(container);
    };

    const promptBox = document.createElement("div");

    const displayPrompt = (promptText) => {
        if (promptText !== undefined) {
            promptBox.innerHTML = promptText;
        }
        else {
            promptBox.textContent = "Start game by attacking a position on the computer's board. There are 7 ships!";
            promptBox.classList.add("prompt-box");
            document.body.appendChild(promptBox);
        }
    };

    const changeColor = (event, element, board) => {
        if (event == "miss") {
            element.style.backgroundColor = "lightblue";
            element.style.pointerEvents = "none";
        }
        if (event == "hit") {
            element.style.backgroundColor = "orange";
            element.style.pointerEvents = "none";
        }
        if (event == "sunk") {
            for (const a of document.getElementById("container" + board).querySelectorAll("button")) {
                element.forEach((pos) => {
                    if (a.innerText == pos) {
                        a.style.backgroundColor = "red";
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