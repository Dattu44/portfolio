function greet(){
    console.log("Hello, World!")
}
greet()

//function with parameters
function addNumbers(a, b){
    console.log("sum",a+b)
}
addNumbers(5, 20)

//function with Return Statements
function multiply(x, y){
    return x*y
}
let result=multiply(10, 20)
console.log("multiply",result)

//Combining Functions
function calculateRectangleArea(length, width){
    return multiply(length, width)
    
}
let area=calculateRectangleArea(10, 30)
console.log("area",area)

