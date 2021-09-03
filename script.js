// Assignment Code
var generateBtn = document.querySelector("#generate");
var options = [];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(',  '}', '{', ']', '[', '~', '-', '_', '.',];
var lowerCasedCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

//want to return it our of function its in
/*function playAgain() {
  alert("incorrect input, you must put in a number between 8 and 128.")
    var playAgain = confirm("Would you like to try again?")
    if (playAgain){
      generatePassword();
    } 
    return;
}*/

function generatePassword(){

  var passLength = prompt("How long would you like your password?", "enter length here");
   //checks requested password parameters are good.
  if (isNaN(passLength)){
    alert("incorrect input, you must put in a number between 8 and 128.")
    var playAgain = confirm("Would you like to try again?")
    if (playAgain){
      generatePassword();
    } 
    return;
  } else {
    passLength = parseInt(passLength);
    if (passLength < 8 || passLength > 128){
      alert("incorrect input, you must put in a number between 8 and 128.")
      var playAgain = confirm("Would you like to try again?")
      if (playAgain){
        generatePassword();
      } 
      return;
    }
  }

  /*if (!(8 <= passLength <=  128) ||
    !isNaN(passLength) ){
      alert("incorrect input, you must put in a number between 8 and 128.")
      var playAgain = confirm("Would you like to try again?")
      if (playAgain){
        generatePassword();
      } 
    return;
  }*/
   

  var wantsSpecial = confirm("Do you want to use special characters in you password?")
  

  var wantsLowerC = confirm("Do you want to use lowercase letters in you password?")
  

  var wantsUpperC = confirm("Do you want to use uppercase letters in you password?")
  
  var wantsNumbers = confirm("Do you want to use numbers in you password?")
  
  for(let i = 0; i < passLength; i++){

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

