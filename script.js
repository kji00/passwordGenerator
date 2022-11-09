// Assignment code here

function generatePassword() {
  var pwdLength;

  while(true){
    pwdLength = prompt("Choose the length of your password. Number must be between 8 and 128.");
    pwdLength = parseInt(pwdLength);
    if (pwdLength >= 8 || pwdLength <= 128){
      break;
    } else {
      alert("Must choose a number between 8 and 128.")
      generatePassword();
    }
  }

  var lowerCase = confirm("Use lower case letters.")
  var upperCase = confirm("Use upper case letters.");
  var specialChar = confirm("User special characters");
  var numbers = confirm("Use numbers 0-9.");

  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var special = '!@#$%^&*()-:;_=+,./<>?{}|\\';
  var nums = '0123456789';

  console.log(pwdLength);

  if (!lowerCase && !upperCase && !specialChar && !numbers){
    alert('Must choose at least 1 character type to use.')
    generatePassword()
  }

  var randomChars = [];

  if (lowerCase){
    randomChars.concat(lower.split(''));
  }
  if (upperCase){
    randomChars = randomChars.concat(upper.split(''));
  }
  if (specialChar){
    randomChars = randomChars.concat(special.split(''));
  }
  if (numbers){
    randomChars = randomChars.concat(nums.split(''));
  }





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
