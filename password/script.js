// Assignment Code
function writePassword() 
var passwordText = document.querySelector("#password");

passwordText.addEventListener('keydown', function (event) {

  var key = event.key();
  var alphabetNumbers = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
    ''
  );
  if (alphabetNumbers.includes(key)) {
    for (var i = 0; i < passwordText.length; i++) {
      passwordText[i].textContent += event.key;
    }
  }
});


// Write password to the #password input;
  

// pass

// // Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);





// var passwordText = document.querySelector("#password");
// function writePassword() {
//   var password = generatePassword();
// }