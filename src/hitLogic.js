let oldHit = 0;
let olderHit = 0;
let trend = "";

function huntShip (old, direction) {
    trend = "";
    switch (direction) {
        case "right": return old + 1;
        case "left": return old - 1;
        case "down": return old + 10;
        case "up": return old - 10;
        default: break;
    }
}

export function findNextHit (previousHit, allMoves) {
    if (oldHit != 0) {
        olderHit = oldHit;
        oldHit = previousHit;
        if(oldHit - olderHit == 1 && oldHit <= 99) {
            trend = "right";
        }
        if(oldHit - olderHit == -1 && oldHit >= 1) {
            trend = "left";
        }
        if(oldHit - olderHit == 10 && oldHit <= 90) {
            trend = "down";
        }
        if(oldHit - olderHit == -10 && oldHit >= 11) {
            trend = "up";
        }
        if (trend != "") {
            huntShip(oldHit, olderHit, trend);
        }
    }
    else {
        oldHit = previousHit;
    }

    if (previousHit != 100 && previousHit !== 1) {
        let right = previousHit + 1;
        let left = previousHit - 1;
        let down = previousHit + 10;
        let up = previousHit - 10;

        if (!allMoves.includes(right)) return right;
        else if (!allMoves.includes(down)) return down;
        else if (!allMoves.includes(left)) return left;
        else if (!allMoves.includes(up)) return up;
        else return Math.floor(Math.random() * 99) + 2;
    }
}