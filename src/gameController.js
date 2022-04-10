import { domHandling } from './domHandling';

const gameController = ((ships1, ships2) => {

    //const ships1 = ships1;
    //const ships2 = ships2;

    const nextMove = async (oldMove) => {
        const container2 = document.getElementById("container2");

        if (oldMove == 2) {
            domHandling.displayPrompt("Opponent's move");
            await new Promise(r => setTimeout(r, 2000));
            container2.classList.add("disabled");
            computerMove();
        }
        else {
            domHandling.displayPrompt("Player's move");
            container2.classList.remove("disabled");
        }
    };

    const computerMove = () => { 
        let pos = Math.floor(Math.random() * 99) + 2;

        for (const position of container1.querySelectorAll("button")) {
            if (position.innerText == pos) {
                position.click();
            }
        };
    };


    return {
        nextMove,
        computerMove
    }
})();

export { gameController }
