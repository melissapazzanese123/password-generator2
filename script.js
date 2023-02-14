// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


//This function will give the person all the prompts needed for them to choose from as to what characteres they 
// Function to prompt user for password options

function getPasswordOptions() {
//variable to store password length from user input
let length = parseInt(
  prompt ("How many characteres would you like to have in your password?")
  )
  
  if(isNaN(length) === true){
  alert("Password length must be provided as number");
  return;
}
if(length < 10) {
  alert("Password length must contain at least 10 characteres");
  return;
}

if(length > 64) {
  alert("password length must contain a maximum of 65 characteres")
  return;
}

let hasSpecialCharacters = confirm ( "Click ok to confirm you want special characters") 

let hasNumbericCharacters = confirm ("Click ok to confirm including numeric characters")

let hasLowerCasedCharacters = confirm ("Click ok to confirm including lowercase characters ")

let hasUpperCasedCharacters = confirm ("Click ok to confirm including uppercase characters ")


if (hasLowerCasedCharacters === false &&
  hasUpperCasedCharacters === false &&
  hasSpecialCharacters=== false && 
  asNumbericCharacters === false) {
    alert ("Must selcet at least one character type")
    return;
  }

let passwordOptions = {
  length: length, 
  hasSpecialCharacters: hasSpecialCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  numericCharacters: hasNumbericCharacters,
}

return (passwordOptions);
}
// Function for getting a random element from an array
// this function will go through all sorts of random combinations of numbers in the variables above 

function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomIndex]

  return randomElement
}
// Function to generate password with user input
// This function will choose a comibnation of all the ones it went through on the step above - a final combination of numbers

function generatePassword() {
  let options = getPasswordOptions(); 
  console.log(options);

  let result = []

  let possibleCharacter = []

  let guaranteedCharacter = []

  if(options.hasSpecialCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters))

  }

  if(options.hasLowerCasedCharacters) {
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
    guaranteedCharacter.push(getRandom(lowerCasedCharacters))

  }

  if(options.hasUpperCasedCharacters) {
    possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
    guaranteedCharacter.push(getRandom(upperCasedCharacters))

  }

  if(options.hasNumericCharacters) {
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    guaranteedCharacter.push(getRandom(numericCharacters))
  }

for(let index = 0; index < options.length; index++){
  var generated = getRandom(possibleCharacter);
  console.log(generated);

  result.push(generated);
}

console.log(result);

return result.join("")
}

// Get references to the #generate element 
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// this fubction will tell the computer to write down the choosen combo of numbers 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);