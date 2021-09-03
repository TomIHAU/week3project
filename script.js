// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(',  '}', '{', ']', '[', '~', '-', '_', '.',];
var lowerCasedCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
function generatePassword(){

  var passLength = prompt("How long would you like your password?", "enter length here");

    //checks requested password parameters are good.
  if (8 > passLength &&
    passLength > 128 &&
    !isNaN(passLength) ){
      alert("incorrect input, you must put in a number between 8 and 128.")
      return;
  }


  
}







// Write password to the #password input
function writePassword() {

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

