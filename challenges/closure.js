// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// The function "nestedFunction" is about to access the variable "internal" because that variable is defined in the functions parent fuction.
// Closure gives access to inner functions to reference points in memory that pertain to outerfunctions.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(num){
    sum = 0;
    for(let i = 0; i <= num; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sumation(4));