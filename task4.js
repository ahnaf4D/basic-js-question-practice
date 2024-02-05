/**
 * inNaN() is a built in JavaScript Function that check the number is a illegal number.
 * After inNaN() found that the input number is illegal he return true otherwise he return false
 */

// Here is code from practice question 4
var a = isNaN(`11`); 
console.log(a); // It returns false becuase 11 is orginally a number
var b = isNaN(2-10);
console.log(b) // It also return false because after subtract 2-10 result will be -8. -8 is legal number for that output will be false after using isNaN();