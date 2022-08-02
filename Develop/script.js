// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordArray = [];
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = lowerCase.split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArray = upperCase.split("");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = "!@#$%^&*()";
var specialCharactersArray = specialCharacters.split("");

var numberCharacters = prompt(
  "how many characters do you want? It must be between 8 and 128 characters."
);

var confirmLowerCase = confirm(
  "Do you want lowercase letters in your password?"
);

var confirmUpperCase = confirm(
  "Do you want uppercase letters in your password"
);

var confirmNumbers = confirm("Do you want numbers in your password?");

var confirmSpecialCharacters = confirm(
  "Do you want special characters in your password?"
);

function generatePassword() {
  passwordArray = [];
  var guaranteedCharacters = [];
  if (confirmLowerCase) {
    passwordArray = passwordArray.concat(lowerCaseArray);
    guaranteedCharacters.push(
      lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)]
    );
  }
  if (confirmUpperCase) {
    passwordArray = passwordArray.concat(upperCaseArray);
    guaranteedCharacters.push(
      upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)]
    );
  }
  if (confirmNumbers) {
    passwordArray = passwordArray.concat(numbers);
    guaranteedCharacters.push(
      numbers[Math.floor(Math.random() * numbers.length)]
    );
  }
  if (confirmSpecialCharacters) {
    passwordArray = passwordArray.concat(specialCharactersArray);
    guaranteedCharacters.push(
      specialCharactersArray[
        Math.floor(Math.random() * specialCharactersArray.length)
      ]
    );
  }

  var password = [];

  for (var i = 0; i < numberCharacters; i++) {
    password += passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }
  for (var i = 0; i < password.length; i++) {
    password[i] = password[i];
    console.log(password[i]);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
