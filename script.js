// Assignment Code
var generateBtn = document.querySelector("#generate");
var options = [numericCharacters, upperCasedCharacters];
var optionsLength = [];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(',  '}', '{', ']', '[', '~', '-', '_', '.',];
var lowerCasedCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCasedCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//want to return it our of function its in
/*function playAgain() {
  alert("incorrect input, you must put in a number between 8 and 128.");
    var again = confirm("Would you like to try again?");
    if (again){
      generatePassword();
    } 
    return;
}*/

function generatePassword(){

  var passLength = prompt("How long would you like your password?", "enter length here");

   //checks requested password parameters are good.
  if (isNaN(passLength)){
    alert("incorrect input, you must put in a number between 8 and 128.");
    var playAgain = confirm("Would you like to try again?");
    if (playAgain){
      generatePassword();
    } 
    return;
  } else {
    passLength = parseInt(passLength);
    if (passLength < 8 || passLength > 128){
      alert("incorrect input, you must put in a number between 8 and 128.");
      var playAgain = confirm("Would you like to try again?");
      if (playAgain){
        generatePassword();
      } 
      return;
    }
  }
  //asks user for password character parameters.
  var wantsSpecial = confirm("Do you want to use special characters in you password?");
  if(wantsSpecial){
    options.push(specialCharacters);
    optionsLength.push(specialCharacters.length);
  }
  var wantsLowerC = confirm("Do you want to use lowercase letters in you password?");
  if(wantsLowerC){
    options.push(lowerCasedCharacters);
    optionsLength.push(lowerCasedCharacters.length);
  }
  var wantsUpperC = confirm("Do you want to use uppercase letters in you password?");
  if(wantsUpperC){
    options.push(upperCasedCharacters);
    optionsLength.push(upperCasedCharacters.length);
  }
  var wantsNumbers = confirm("Do you want to use numbers in you password?");
  if(wantsNumbers){
    options.push(numericCharacters);
    optionsLength.push(numericCharacters.length);
  }
  //loop to make password
  for(let i = 0; i < passLength; i++){
    var rng = Math.floor(Math.random()*options.length)
    
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

