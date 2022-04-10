import "./styles.css";
import { GameboardFactory } from './GameboardFactory';
import { domHandling } from './domHandling';

const player1Board = GameboardFactory(1);
const ships1 = player1Board.createShips();
domHandling.displayBoard(1, ships1);
player1Board.placeShips(ships1, 1);

const player2Board = GameboardFactory(2);
const ships2 = player2Board.createShips();
domHandling.displayBoard(2, ships2);
domHandling.displayPrompt();

document.getElementById("container1").classList.add("disabled");
console.log(ships2[0].getCoords());
console.log(ships2[1].getCoords());
console.log(ships2[2].getCoords());
console.log(ships2[3].getCoords());
console.log(ships2[4].getCoords());
console.log(ships2[5].getCoords());
console.log(ships2[6].getCoords());

export { player1Board, player2Board }