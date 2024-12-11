// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.
// enums will initialize the first value to 0 and add 1 to each additional value
// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
// };              
// let currentDirection = CardinalDirections.North;  
// console.log(currentDirection);
// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes["Accepted"] = "south";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Accepted);
