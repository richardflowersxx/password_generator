// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passLength = +prompt('Please enter a numerical password length that is between 8 and 128 characters long')
  if (passValidation(passLength)){
    return userIncludedInput(passLength)
  } else {
    return 'Try again'
  };

}

// if the user makes errors it will ask the user try again. if no errors it returns true
var passValidation = (userInput) => {
  if (userInput === null) {
    alert('You pressed cancel. Please try again')
    return false;
  } else if (userInput < 8 || userInput > 128) {
    alert('Please try again. Your password must be between 8 and 128 numerical characters long')
    return false;
  } else if (isNaN(userInput)) {
    alert('Please enter a valid number input')
    return false;
  }
  return true;

}


const randomFunction = {
  isLow: getLower,
  isUp: getUpper,
  isNum: getNumber,
  isSpec: getSymbol

};
// function made to make the random characters
function getLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
    
  }
  
  function getUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 65);
  }
  
  function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
  }
  
  function getSymbol() {
      const symbols = '!@#$%^&*(){}[]=<>/,.';
      return symbols[Math.floor(Math.random() * symbols.length)];
  }




// function that returns the final password
function userIncludedInput(passLength) {
  var isLow = confirm("Would you like to include lower case letters?");
  var isUp = confirm('Would you like to include upper case letters?');
  var isNum = confirm('Would you like to include numbers?');
  var isSpec = confirm('Would you like to include special characters?');
  // console.log(isLow,isUp,isNum,isSpec)
  let generatedPassword = ''

  const typesCount = isLow + isUp + isNum + isSpec;

  const typesArr = [{isLow},{isUp},{isNum},{isSpec}].filter
  (
    item => Object.values(item)[0]
    );
  if (typesCount === 0) {
    alert('You must select at least one option')
    return 'Try again';
  }
  for (let i = 0;i < passLength; i += typesCount){
    typesArr.forEach(type => {
      const functionName = Object.keys(type)[0];
      
      
      generatedPassword += randomFunction[functionName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, passLength);

  return finalPassword;
}

