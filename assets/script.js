// Assignment Code
var generateBtn = document.querySelector("#generate");

// password criteria
var passwordArray = [];
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = lowerCase.split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArray = upperCase.split("");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = "!@#$%^&*()";
var specialCharactersArray = specialCharacters.split("");

// prompts for password questions

var numberCharacters = prompt(
  "how many characters do you want? It must be between 8 and 128 characters."
);

while (numberCharacters < 8 || numberCharacters > 128) {
  numberCharacters = prompt(
    "Please enter a number in range 8-128.\nThe password must be between 8 and 128 characters."
  );
}

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

  var finalPassword = [];

  for (var i = 0; i < numberCharacters; i++) {
    finalPassword.push(
      passwordArray[Math.floor(Math.random() * passwordArray.length)]
    );
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    finalPassword[i] = guaranteedCharacters[i];
    console.log(typeof finalPassword, guaranteedCharacters[i]);
  }

  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
