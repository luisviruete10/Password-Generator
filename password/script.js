// Our password character length
var characterLength = 128;
var choiceArr = [];
// All the characters we can chose from
var specialCharArr = ["!", "@", "#", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "|", "?", "/", ",", ";", ".", "<", ">", ".", ":"];
var lowerCaseArr = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ];


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input;
function writePassword() {
  var correctPrompts = getPrompts();
var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword ;
  }
  passwordText.value = "No Good";
  
}

// I would generatePassword based on the prompts
function generatePassword(){
var password = " ";
for(var i = 0; i < characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * choiceArr.length);
  password = password + choiceArr[randomIndex];
    }
    return password;

}


function getPrompts(){

  choiceArr = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8-128 charactwers"));

  // isNaN lets use characters that are not numbers as numbers
  if(isNaN(characterLength)|| characterLength < 8 || characterLength > 128){

    // if they chose lower than 8 or more than 128 this messege below will appear
    alert("Character length has to a number, 8 -128 digits. Please try again.");
    return false;
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;

}




