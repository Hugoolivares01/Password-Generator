
var generateBtn = document.querySelector("#generate");
//  stores the generate id  into the var generateBtn
function writePassword() {
  var password = generatePassword();
  // whatever the  Generatepassword function creates it will store it in the var password which will be used in 
  // line 15

  var passwordText = document.querySelector("#password");
  // this targets the password id and stores it in the var passwordText


  passwordText.value = password;
  // this then targets the value of the passwordText in this case "your secure password" and replaces it with whatever the 
  // var password is equal too

}
var characterLength = 8;
var choiceArr = []
var specialchararr = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "(", ")",]
var lowercasearr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]


generateBtn.addEventListener("click", writePassword);

function generatePassword() {

}
function getPrompts() {
  characterLength = parseInt(prompt( "ranging from (8 - 128) how many characters do you want for your password?"));
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("character length must be from (8-128). ");
    return false;
  }
  if (confirm("Do you want any lowercase letters in your pasword? "))
  // choiceArr = choiceArr.concat(lowercasearr);

  return password;
}
