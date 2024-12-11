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

enum CardinalDirections {
    North = 1,
    East,
    South,
    West
}
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);


// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = "south",
    BadRequest = 400
}
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Accepted);