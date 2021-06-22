// genrate botton
var generateBtn = document.querySelector("#generate");
var enter;
// charater's
var confirmNumber;
var confirmCharater;
var confirmUppercase;
var confirmLowercase;

// Pasword charaters allowed
number  = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alphabetical = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
space = [];

//



















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
