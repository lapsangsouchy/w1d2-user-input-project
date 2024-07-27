/* Part 1 - User Input Gymnastics */

/* Program #1 */
// undefined

/* Program #2 */
// PIKACHU

/* Program #3 */
// BoooooooSpoooooky
// undefined

/* Program #4 */
// string
// undefined

/* Program #5 */
// twothree

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 2 - What's Your Info? */
// The normal way
let userName = process.argv[2];
let userAge = process.argv[3];
let userGender = process.argv[4];
let userDob = process.argv[5];
let userPhone = process.argv[6];

console.log('Name', userName);
console.log('Age', userAge);
console.log('Gender', userGender);
console.log('DOB', userDob);
console.log('Phone No.', userPhone);

// The ~fancy~ way like the example
console.log('Name      ', userName);
console.log('Age       ', userAge);
console.log('Gender    ', userGender);
console.log('DOB       ', userDob);
console.log('Phone No. ', userPhone);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Extra Credit - Add'em Up!*/
let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);
let result = num1 + num2;

console.log('Calculating...');
console.log('');
console.log('Result:');
console.log(num1, '+', num2, '=', result);
