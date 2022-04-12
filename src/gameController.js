import { domHandling } from './domHandling';
import { player1Board, player2Board } from './index';
import { findNextHit } from './hitLogic';


const gameController = (() => {

    let started = false;
    const startGame = () => {
        started = true;
    };

    let testNum = 1;
    const setTestNum = () => testNum++;
    const getTestNum = () => testNum;
    let gameOver = false;
    const markGameOver = () => gameOver = true;

    const nextMove = async (oldMove) => {

        if(!started) {
            domHandling.displayInfo("player", "your board");
            domHandling.displayInfo("computer", "computer's board");
            //document.getElementById("computer").innerText = "computer's board";
            document.getElementById("container1").classList.add("disabled");
            startGame();
        }
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
            await new Promise(r => setTimeout(r, 100));
            computerMove();
            //container2.classList.remove("disabled");
        }
        // else {
        //     container2.classList.remove("disabled");
        // }
    };

    const compMovesArray = [];
    const AddCompMove = (move) => compMovesArray.push(move);
    const getCompMoves = () => compMovesArray;

    let lastMove = 1;
    const setLastMove = (move) => lastMove = move;

    const computerMove = () => { 
        if (!gameOver) {
            let pos = Math.floor(Math.random() * 99) + 2;

            if(document.getElementById(lastMove).style.backgroundColor == "rgb(251, 86, 86)") {
                pos = findNextHit(lastMove, getCompMoves());
            }
            console.log(pos);
            // if(findNextHit() != 0) {

            // }
            if(true) {
                if(getCompMoves().includes(pos) !== true) {
                    for (const position of container1.querySelectorAll("button")) {
                        if (position.innerText == pos) {
                            position.click();
                            AddCompMove(pos);
                            setLastMove(pos);
                            //console.log(pos, findNextHit(pos));

                        }
                    };
                }
                else {
                    setLastMove(1);
                    computerMove();
                }
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
                        endGame("You win!");
                    }
                    else {
                        let shipsLeft = 7 - sunkCount;
                        domHandling.displayInfo("computer", "Sunk! Only " + shipsLeft + " more to go!");
                    }
                }
            });
            if (sunkCount == 0) {
                domHandling.displayInfo("player", "Good luck, battleship!");
            }
        }
    };

    const endGame = async (message) => { 
        markGameOver();
        domHandling.displayInfo("computer", message);
        await new Promise(r => setTimeout(r, 2000));
        domHandling.displayInfo("player", "play again?");
    };

    return {
        nextMove,
        computerMove,
        checkIfAllSunk,
    }
})();

export { gameController }
