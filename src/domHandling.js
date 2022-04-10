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
                    pos[j].style.backgroundColor = "blue";
                    shipArray.forEach((ship) => {
                        const coords = ship.getCoords();
                        coords.forEach((position) => {
                            //console.log(position);
                            if (position == pos[j].innerText) {
                                pos[j].style.backgroundColor = "red";
                                pos[j].style.pointerEvents = "none";
                                ship.markHit(position);
                            }
                        });
                    });
                    gameController.nextMove(number);
                });
                container.appendChild(pos[j]);
            }
        }
        container.style.margin = "20px";
        mainContainer.appendChild(container);
    };

    const promptBox = document.createElement("div");

    const displayPrompt = (promptText) => {
        if (promptText !== undefined) {
            promptBox.textContent = promptText;
        }
        else {
            promptBox.textContent = "Player choose location to attack on opponent's board";
            promptBox.classList.add("prompt-box");
            document.body.appendChild(promptBox);
        }
    };

    
    return { 
        displayBoard, 
        displayPrompt
     }
})();

export { domHandling }