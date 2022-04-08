import { GameboardFactory } from './GameboardFactory';
import { domHandling } from './domHandling';

// const player1Board = GameboardFactory("player 1");
// player1Board.createShips().then((ships) => {
//     player1Board.placeShips(ships);
// });
// player1Board.displayBoard();

// const player2Board = GameboardFactory("player 2");
// player2Board.createShips().then((ships2) => {
//     player2Board.placeShips(ships2);
// });
// player2Board.displayBoard();

// if(Object.is(player1Board, player2Board)) {
//     alert("same");
// }

const player1Board = GameboardFactory("player 1");
const ships = player1Board.createShips();
domHandling.displayBoard(1);
player1Board.placeShips(ships, 1);

const player2Board = GameboardFactory("player 2");
const ships2 = player2Board.createShips();
domHandling.displayBoard(2);
player1Board.placeShips(ships2, 2);

// const player2Board = GameboardFactory("player 2");
// const ships2 = player2Board.createShips();
// player2Board.displayBoard();
// player2Board.placeShips(ships2);

// const player2Board = GameboardFactory("player 2");
// player2Board.createShips().then((ships2) => {
//     player2Board.placeShips(ships2);
// });
// player2Board.displayBoard();

