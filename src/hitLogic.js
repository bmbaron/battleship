let oldHit = 0;
let olderHit = 0;

// let lastMove = ["", [], 1];
// const setLastMove = (move) => lastMove[0] = move;
// const setNextOptions = (options) => lastMove[1] = options;
// const incrementOptionCounter = () => lastMove[2]++;
// const resetOptionsCounter = () => lastMove[2] = 1;
// const getLastMove = () => lastMove;

export function findNextHit (previousHit, allMoves) {
    olderHit = oldHit;
    oldHit = previousHit;

    console.log(oldHit, olderHit);

    if (Math.abs(oldHit - olderHit) == 1) {
        if(oldHit > olderHit && oldHit+1 <= 100) {
            return oldHit + 1;
        }
        else if (oldHit-1 > 0){
            return oldHit - 1;
        }
    }
    if (Math.abs(oldHit - olderHit) == 10) {
        if(oldHit > olderHit && oldHit+10 <= 100) {
            return oldHit + 10;
        }
        else if (oldHit-10 > 0){
            return oldHit - 10;
        }
    }
    else {
        if(!allMoves.includes(oldHit+1) && oldHit+1 <= 100) {
            return oldHit + 1;
        }
        else if(!allMoves.includes(oldHit+10) && oldHit+10 <= 100) {
            return oldHit + 10;
        }
        else if(!allMoves.includes(oldHit-1) && oldHit-1 > 0) {
            return oldHit - 1;
        }
        else if(!allMoves.includes(oldHit-10) && oldHit-10 > 0) {
            return oldHit - 10;
        }
        return 1;
    }
    // //console.log(getLastMove()[0]);
    // if(getLastMove()[0] !== "" && getLastMove()[0].style.backgroundColor === "rgb(251, 86, 86)") {
    //     let lastMove = getLastMove()[0];
    //     let lastHit = parseInt(lastMove.innerText, 10);
    //     let options = [lastHit + 1, lastHit - 10, lastHit - 1, lastHit + 10];
    //     setNextOptions(options);
    //     //console.log(getLastMove()[1]);
    //     options.every(option => {
    //         if(getCompMoves().includes(option) !== true && getLastMove()[2] != 5) {
    //             for (const position of container1.querySelectorAll("button")) {
    //                 if (parseInt(position.innerText, 10) == option) {
    //                     position.click();
    //                     AddCompMove(option);
    //                     //setLastMove(position);
    //                     console.log("trying this option: " + option);
    //                     incrementOptionCounter();
    //                     return false;
    //                 }
    //             };
    //         } 
    //         else if (getLastMove()[2] == 5){
    //             console.log("no more options " + option);
    //             setLastMove("");
    //             setNextOptions("");
    //             resetOptionsCounter();
    //             return true;
    //         }
    //         return true;
    //     });
    // }

}            
            
            