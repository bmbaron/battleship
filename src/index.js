import "./styles.css";
import { GameboardFactory } from './GameboardFactory';
import { domHandling } from './domHandling';
import { gameController } from './gameController';


const player1Board = GameboardFactory("player 1");
const ships1 = player1Board.createShips();
domHandling.displayBoard(1, ships1);
player1Board.placeShips(ships1, 1);

const player2Board = GameboardFactory("player 2");
const ships2 = player2Board.createShips();
domHandling.displayBoard(2, ships2);
//player2Board.placeShips(ships2, 2);
domHandling.displayPrompt();

//gameController.setShips(ships1, ships2);
document.getElementById("container1").classList.add("disabled");


//gameController.runDisplay(ships, ships2);