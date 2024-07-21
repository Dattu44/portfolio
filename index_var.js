//performing push and pop funtions on an empty array
let array = [];
array.push(1);
array.push(2);
array.push(3);
array.pop();
console.log(array);

//using shift and unshift functions on array
let array1 = ["a", "b", "c"];
array1.shift();
array1.unshift("z");
console.log(array1);

//using slice function
let array3 = [1, 2, 3, 4, 5];
let newArray = array3.slice(1, 4); 
console.log(newArray);

//using splice function
let colors = ["red", "green", "blue", "yellow"];
colors.splice(2, 1, "purple", "orange");
console.log(colors);

//

let bike = {
    make: "KTM",
    model: "250",
    year: 2022
};
console.log(bike);

delete bike.year;

console.log(bike)

//
// Create an object representing a person
let person = {
    name: "Jnanadath",
    age: 20,
    address: {
        street: "bapu nagar",
        city: "Hyderabad",
        zipcode: "500013"
    }
};
console.log(person);
console.log(person.address.city);




