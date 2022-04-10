function ShipFactory (length, coords) {
    const ship = {
        shipLength: length,
        coordinates: coords,
        sunk: false,
    };

    const getCoords = () => {
        return ship.coordinates;
    };

    const markHit = (location) => {
        let removeIndex = ship.coordinates.indexOf(location);
        ship.coordinates.splice(removeIndex, 1);
        console.log("hit");
        if(ship.coordinates.length == 0) {
            alert("sunk");
        }
    };

    return {
        ship,
        getCoords,
        markHit
    }
}

export { ShipFactory }