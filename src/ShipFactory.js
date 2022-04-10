import { domHandling } from './domHandling';

function ShipFactory (length, coords, num) {
    const ship = {
        shipLength: length,
        coordinates: coords,
        boardNumber: num,
        sunk: false,
    };

    const hitCoordinates = [...ship.coordinates];

    const getCoords = () => {
        return ship.coordinates;
    };

    const markSunk = () => {
        ship.sunk = true;
    };

    const markHit = (location) => {
        let removeIndex = hitCoordinates.indexOf(location);
        hitCoordinates.splice(removeIndex, 1);
        let x = getCoords();
        if(hitCoordinates.length == 0) {
            //alert("sunk");
            markSunk();
            domHandling.changeColor("sunk", getCoords(), ship.boardNumber);
        }
    };

    return {
        ship,
        getCoords,
        markHit
    }
}

export { ShipFactory }