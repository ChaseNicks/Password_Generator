// Assignment Code
var generateBtn = document.querySelector("#generate");
// Characters
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Password characters allowed
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
alphabetical = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

var choices;
var toUpper = function (x) {
    return x.toUpperCase();
};

alphaUpper = alphabetical.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    pass = generatePassword();
    document.getElementById("password").placeholder = pass;
})

// Alert box function that goes through password setup / generation criteria
function generatePassword() {
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Password character lengeth must fall between 8 and 128"));

    } else {
        confirmNumber = confirm("Would you like your password to contain numbers? Cancel for 'no' and ok for 'yes'");
        confirmCharacter = confirm("Would you like your password to contain characters? Cancel for 'no' and ok for 'yes'");
        confirmUppercase = confirm("Would you like your password to contain Uppercase letters? Cancel for 'no' and ok for 'yes'");
        confirmLowercase = confirm("Would you like your password to contain Lowercase letters? Cancel for 'no' and ok for 'yes'");
    };

    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("Please follow criteria");

    }
  
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alphabetical, alphaUpper);
    }


    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alphaUpper);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alphabetical);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alphabetical, alphaUpper);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alphabetical, alphaUpper);
    }


    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alphabetical);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alphaUpper);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alphabetical.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alphabetical.concat(alphaUpper);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alphaUpper);
    }


    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alphabetical;
    }


    else if (confirmUppercase) {
        choices = space.concat(alphaUpper);
    };

    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    var pass = password.join("");
    UserInput(pass);
    return pass;
}

function UserInput(pass) {
  document.getElementById("password").textContent = pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);