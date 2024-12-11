// const names: string[] = [];
// names.push("Dylan");
// names.push("jack");
// console.log(names);


// READONLY

// const names: readonly string[] = ["Dylan"];
// console.log(names);
// // names.push("Jack");

// inference

const numbers =[1,2,3];
numbers.push(4);
console.log(numbers);

let head: number = numbers[0];
console.log(head);