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
        return ship.coordinates.length;
    };

    return {
        ship,
        getCoords,
        markHit
    }
}

export { ShipFactory }