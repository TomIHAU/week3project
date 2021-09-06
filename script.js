// Assignment Code
var passwordElement = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(',  '}', '{', ']', '[', '~', '-', '_', '.'];
var lowerCasedCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function generatePassword(){
  var options = [];
  var password = "";
  var passLength = prompt("How long would you like your password?", "enter length here");

   //checks if input is valid.
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
  }
  var wantsLowerC = confirm("Do you want to use lowercase letters in you password?");
  if(wantsLowerC){
    options.push(lowerCasedCharacters);
  }
  var wantsUpperC = confirm("Do you want to use uppercase letters in you password?");
  if(wantsUpperC){
    options.push(upperCasedCharacters);
  }
  var wantsNumbers = confirm("Do you want to use numbers in you password?");
  if(wantsNumbers){
    options.push(numericCharacters);
  }

  //loops user back to start if no characters selected
    if(!wantsSpecial &&
    !wantsLowerC &&
    !wantsUpperC &&
    !wantsNumbers){
      alert("You cannot have a password with no characters");
      var playAgain = confirm("Would you like to try again?");
      if (playAgain){
        generatePassword();
      } 
      return;
    
    }

  //loop to make password
  for(let i = 0; i < passLength; i++){
    var rng = Math.floor(Math.random()*options.length);
    var temp = options[rng][Math.floor(Math.random()*options[rng].length)];
    password += temp;
  }

  console.log('password',password);
  alert(password);
  return password;
}

function writePassword() {
  
  var password = generatePassword();
  if (password == undefined){
    debugger
  }
  passwordElement.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);