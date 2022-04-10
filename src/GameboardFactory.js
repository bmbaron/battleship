import { ShipFactory } from './ShipFactory';


function GameboardFactory (num) {
    const getNumber  = () => num;

    const ships = [];
    const getShips  = () => ships;

    const createShips = () => {
        let shipLengths = [5,4,3,2,2,1,1];
        let allPos = [];
        for (let i = 0; i < 7; i++) {
            let coordinates = [];
            let pos = Math.floor(Math.random() * 99) + 2;

            var placeHoriz = Math.random() < 0.5;
            if(placeHoriz) {
                let onesPlace = Math.floor(pos / 1 % 10);
                if (onesPlace > (10-shipLengths[i]) || (onesPlace == 0)) {
                    pos = pos - 5;
                }
                for (let j = 0; j < shipLengths[i]; j++) {
                    coordinates[j] = pos;
                    pos++;
                }
            }
            else {
                if ((pos + (10*(shipLengths[i]-1))) > 100) {
                    pos = pos - 50;
                }
                for (let j = 0; j < shipLengths[i]; j++) {
                    coordinates[j] = pos;
                    pos = pos + 10;
                }
            }
            let redo = false;
            
            for(let x = 0; x < coordinates.length; x++) {
                allPos.forEach((position) => {
                    if(coordinates[x] == position) {
                        redo = true;
                    }
                    else if(((coordinates[x]-1) == position) || ((coordinates[x]+1) == position)) {
                        redo = true;
                    }
                    else if(((coordinates[x]-10) == position) || ((coordinates[x]+10) == position)) {
                        redo = true;
                    }
                });
            }            
            if(redo) {
                i--;
                continue;
            }   
            for(let x = 0; x < coordinates.length; x++) {
                allPos.push(coordinates[x]);
            }

            allPos.push("");
            ships[i] = ShipFactory(shipLengths[i], coordinates, getNumber());

        }
        return ships;
    };

    const placeShips = (shipArray, number) => {
        shipArray.forEach((ship) => {
            const coords = ship.getCoords();
            for (const a of document.getElementById("container" + number).querySelectorAll("button")) {
                const num = Number(a.innerText);
                if (coords.indexOf(num) !== -1) {
                    if (a.style.backgroundColor != "orange" && a.style.backgroundColor != "red") {
                        a.style.backgroundColor = "grey";
                    }
                }
            }
        });
    };

    return {
        getNumber,
        getShips,
        createShips,
        placeShips
    }
}

export { GameboardFactory }