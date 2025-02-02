// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it equal to the string Dane. 
// Then we use a conditional statement to check if the name variable is equal to the string Mary.  
// Since the string in the if statement do NOT equal our variable, the statement evaluates to false and
// we run the else block of code so we console.log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create 2 variables. The first variable is secrect and that is left undefined.
// The second variable is code and that is set equal 123. 
// We are now going to check our two variables against 2 conditions.  The first condition checks if the code variable is 
// equal to 123. Since the code variable is equal to 123, the secrect variable is set to the string 'super' and
// the code variable is mutiplied by 2.  So our secret varibale is now 'super' and our code variable is 246.
// The second conditon we must check is if our code variable is greater than 250.  Since our code variable is
// 246, 246 is not greater than 250 so our secrect variable will remain at 'super. 
// So then we console.log our seceret variable which is 'super'.
//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We have 3 variables describing a student. The first variable is a boolean that is true establishing this 
// person is a student. The second variable sets the age of the student at 34. And the third variable indicates
// what zip code this student is in.  Now we logic operators to check some conditions.  The first condition
// is asking if the isStudent variable is true AND the zip varibale is greater than 80000.  Since both statements
// must evaluate to true and the zip is LESS than 80000, we move on to the next condition. The next condition
// checks if isStudent is false OR the age is LESS than 30. Since neither of these statements evaluate to 
// true, we move on to the next condition. This condition only checks if the isStudent variable is true and 
// since isStudent evaluates to true we console.log 'Welcome to Prime!'
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
//FIX - Changing colorTwo to purple is missing.  colorTwo = 'purple' should be in the if statement
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
// FIX - the wrong logic operator is used in the if statement. It is checking if the temp is greater than 39 
// or the time is greater than or equal to 4.  It should be && to check if both statements are true. 
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
// FIX The if statement should NOT include = the way it is written.  The current statement will console.log 
// 'no entry' because minAge is equal to age. The correct way to write it would be if(minAge < age).
*/

