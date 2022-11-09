// Assignment code here

function generatePassword() {
  var pwdLength = window.prompt("Choose the length of your password. Number must be between 8 and 128.");
  alert("You entered " + pwdLength);
  var lowerCase = window.prompt("Choose Y or N to include lowercase letters");
  alert("You entered " + lowerCase + " for lower case letters.");
  var upperCase = window.prompt("Choose Y or N to include uppercase letters");
  alert("You entered " + upperCase + " for upper case letters.");
  var specialChar = window.prompt("Choose Y or N to include special characters");
  alert("You entered " + specialChar + " for special characters.");
  var numbers = window.prompt("Choose Y or N to include numbers (0-9)");
  alert("You entered " + numbers + " for numbers.");

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
