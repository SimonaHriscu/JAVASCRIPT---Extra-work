// Destructuring
// Instructions
console.log("-----> Exercise 1")
// 1. Array Destructuring
// Declare the variables fruit, vegetable, food. Assign the following values to the variables respectively: "banana", 
//"cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). Use array destructuring 
//assignment to complete this task.
let fruit, vegetable, food ;
[fruit, vegetable, ...food] = ["banana","cucumber", "bread", "cakes", "pizza"]
console.log(fruit)
console.log(vegetable)
console.log(food)

console.log("-----> Exercise 2")
// 2.Object Destructuring
// Create an object which contains key pair values of names and the respective halloween costume e.g. fran: "witch". 
//Assign each key pair value to corresponding variable. Print out the object values.

const halloweenPers = {
    fran: "witch",
    ioana:"barbie",
    john: "viking"
}
const{fran,ioana,john} = halloweenPers;
console.log(fran);
console.log(ioana);
console.log(john);

console.log("-----> Exercise 3")
// 3. Parameters: Object Destructuring
// Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// Then, create a function to display all of the band/musician's data.
// Example
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest 
//hit is "Us"`.

const favoriteBand = {
    name: "Regina Spektor",
    origin: "American-Russian",
    genre: "indie-pop",
    greatestHit: "Us",
    printOut(){
        console.log(`${this.name} is a ${this.origin} singer/songwriter and pianist. The musician sings ${this.genre} and their greatest hit is ${this.greatestHit}`)
    }
}
favoriteBand.printOut();