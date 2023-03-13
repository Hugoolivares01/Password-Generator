
var generateBtn = document.querySelector("#generate");
//  stores the generate id  into the var generateBtn

generateBtn.addEventListener("click", writePassword);
// when the generateBtn is click it needs to run the writePassword function

function writePassword() {

  var Answer = Questions(); 
  // depending on whether true or false is returned we can put the stored value into 
  // another function to give us an each output 

  if (Answer) {  
    // if the stored value is true then the below actions will run
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  }



}

var characterLength = 8;
// length of the password that will be generated 
var choice = []
// an array that can be used as a substitute for the other arrays 

var specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "(", ")",]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
// different options from which my password can be created




function generatePassword() {
  var password = "";
  for (let i = 0; i < characterLength; i++) {
    var x = Math.floor(Math.random() * choice.length)
    
  }
}

function Questions() {

  choice = [];
  // resets my choice to 0 so everytime it runs it doesnt keep add on top

  characterLength = parseInt(prompt("ranging from (8 - 128) how many characters do you want for your password?"));
  // It will attempt to turn what ever string you input into a number 

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("character length must be from (8-128). ");
    return false;
    // added to in the case that anything that isnt a number and within that range 
    // will give viewer an alert
  }

  if (confirm("Do you want any lowercase letters in your pasword? ")) {
    choice = choice.concat(lowercase);
    // if thats previous is true then it asks the next question but instead of a prompt 
    // its confirm as a yes and no instead of a response which is repeated for the later ones.
    // this one then ends by joining the lowercase array to the choice array

  }

  if (confirm("Do you want any uppercase letters in your pasword? ")) {
    choice = choice.concat(uppercase);
    // regardless of whether or not you chose to confirm the previous array 
    // this yes or no question will pop up 
    // this will add the upper case array to the choice array (which depending on your answer may or may not conatin the the lowercase array )
  }

  if (confirm("Do you want any special characters in your pasword? ")) {
    choice = choice.concat(specialchar);
    // regardless of whether or not you chose to confirm the previous array 
    // this yes or no question will pop up 
    // this will join the special character to the choice array
  }

  if (confirm("Do you want any numbers in your pasword? ")) {
    choice = choice.concat(numbers);
    // regardless of whether or not you chose to confirm the previous array 
    // this yes or no question will pop up 
    // this will join the numbers to the choice array and depending ont he previous answers will
    // create a final array with all you provided choices 
  }
  return true;
}
