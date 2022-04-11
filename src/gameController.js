import { domHandling } from './domHandling';
import { player1Board } from './index.js';
import { player2Board } from './index.js';

const gameController = (() => {

    const compMovesArray = [];
    const AddCompMove = (move) => compMovesArray.push(move);
    const getCompMoves = () => compMovesArray;

    let testNum = 1;
    const setTestNum = () => testNum++;
    const getTestNum = () => testNum;
    let gameOver = false;
    const markGameOver = () => gameOver = true;



    const nextMove = async (oldMove) => {
        const container2 = document.getElementById("container2");

        if (oldMove == 1) {
            let pos = getTestNum();
            for (const position of container2.querySelectorAll("button")) {
                if (position.innerText == pos && pos < 99) {
                    position.click();
                }
            };
            setTestNum();
        }

        if (oldMove == 2) {
            //domHandling.displayPrompt("Computer's move");
            //container2.classList.add("disabled");
            await new Promise(r => setTimeout(r, 50));
            computerMove();
            //container2.classList.remove("disabled");
        }
        // else {
        //     container2.classList.remove("disabled");
        // }
    };

    const computerMove = () => { 
        if (!gameOver) {
            let pos = Math.floor(Math.random() * 99) + 2;
            if(getCompMoves().includes(pos) !== true) {
                for (const position of container1.querySelectorAll("button")) {
                    if (position.innerText == pos) {
                        position.click();
                        AddCompMove(pos);
                    }
                };
            }
            else {
                computerMove();
            }
        }
    };

    const checkIfAllSunk = (board) => { 
        
        const ships1 = player1Board.getShips();
        const ships2 = player2Board.getShips();
        let sunkCount = 0;

        if (board == 1) {
            ships1.forEach((ship) => {
                if (ship.ship.sunk) {
                    sunkCount++;
                    if (sunkCount == 7) {
                        endGame("Computer wins!");
                        player2Board.placeShips(ships2, 2);
                    }
                }
            });
        }
        else {
            ships2.forEach((ship) => {
                if (ship.ship.sunk) {
                    sunkCount++;
                    if (sunkCount == 7) {
                        endGame("Player wins!");
                    }
                    else {
                        let shipsLeft = 7 - sunkCount;
                        domHandling.displayPrompt("Sunk! Only " + shipsLeft + " more to go!");
                    }
                }
            });
            if (sunkCount == 0) {
                domHandling.displayPrompt("Good luck, battleship!");
            }
        }
    };

    const endGame = (message) => { 
        markGameOver();
        document.getElementById("main-container").style.pointerEvents = "none";
        domHandling.displayPrompt(message);
    };

    return {
        nextMove,
        computerMove,
        checkIfAllSunk
    }
})();

export { gameController }
