# passwordGenerator

Create password generator with certain criterias. The criterias are listed below:

User should pick from 8-128 character length password. The user should then be asked if they want to use lower case, upper case, special charactesr or numbers in the new password. Any password length chosen that is less than 8 or greater than 128 will be rejected and asked again. If no option of lower case, upper case, special character or number is chosen, the question will be asked again and password will not be generated. Minimum requirement to run program: password length and confirm 1 choice lower, upper, special or number.




The conditions as follows:

When I need a new secure password:

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page