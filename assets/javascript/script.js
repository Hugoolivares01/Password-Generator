
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

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  return "wazz up"
}
