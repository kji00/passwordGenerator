// Assignment code here

function generatePassword() {
  var pwdLength;

  //Logic to make sure user is inputing a number between 8-128 to meet password requirement
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

  //returns a true or false value depending on if the user click on ok or cancel
  var lowerCase = confirm("Use lower case letters.")
  var upperCase = confirm("Use upper case letters.");
  var specialChar = confirm("Use special characters");
  var numbers = confirm("Use numbers, 0-9.");

  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var special = '!@#$%^&*()-:;_=+,./<>?{}|\\';
  var nums = '0123456789';

  //forces user to start over if the minimum requirement of choosing one set of characters is not chosen
  if (!lowerCase && !upperCase && !specialChar && !numbers){
    alert('Must choose at least 1 character type to use.')
    generatePassword()
  }

  var randomChars = [];

  // depending on the users confirmation on which set of characters to use. If multiple choices are confirmed those characters will be added to an array for the random generator to choose from
  if (lowerCase){
    randomChars = randomChars.concat(lower.split(''));
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

  var password = '';

  //random password generator will take the password length as the limiting size. To choose the characters randomly to use math.floor and random is used and it's multiplied by the length of the randomChars array
  for (var i = 0; i <= pwdLength; i++){
    password += randomChars[Math.floor(Math.random() * randomChars.length)];
  }

  return password

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
