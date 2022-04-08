import { gameboardFactory } from './GameboardFactory';



test("try to destroy a ship", () => {
    let gb = gameboardFactory();
    const ships = gb.createShips();
    let lengthOfHitShip = 0;
    for (let i = 0; i < 5; i++)
    {
        console.log(ships[0].markHit(ships[0].getCoords()[i]));
    }
    expect (lengthOfHitShip).toEqual(0);
});

test("check the sizes of the ships", () => {
    
    let gb = gameboardFactory();
    const ships = gb.createShips();
    expect (ships[5].getCoords().length).toEqual(1);

});

test("make board", () => {

    let gb = gameboardFactory();
    gb.fillBoard();
    console.log(gb.getBoard());
    gb.displayBoard();


});



// var Ship = function () {
//     this.createEmployee = function (type) {
//         var employee;

//         if (type === "fulltime") {
//             employee = new FullTime();
//         } else if (type === "parttime") {
//             employee = new PartTime();
//         } else if (type === "temporary") {
//             employee = new Temporary();
//         } else if (type === "contractor") {
//             employee = new Contractor();
//         }

//         employee.type = type;

//         employee.say = function () {
//             console.log(this.type + ": rate " + this.hourly + "/hour");
//         }

//         return employee;
//     }
// }

// var FullTime = function () {
//     this.hourly = "$12";
// };

// var PartTime = function () {
//     this.hourly = "$11";
// };

// var Temporary = function () {
//     this.hourly = "$10";
// };

// var Contractor = function () {
//     this.hourly = "$15";
// };

// function run() {

//     var employees = [];
//     var factory = new Factory();

//     employees.push(factory.createEmployee("fulltime"));
//     employees.push(factory.createEmployee("parttime"));
//     employees.push(factory.createEmployee("temporary"));
//     employees.push(factory.createEmployee("contractor"));

//     for (var i = 0, len = employees.length; i < len; i++) {
//         employees[i].say();
//     }
// }