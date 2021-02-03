// Assignment Code
let generateBtn = document.querySelector("#generate");
const lowercaseArray = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
const uppercaseArray = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
const numberArray = ['1','2','3','4','5','6','7','8','9','0'];
const symbolArray = ['!','@','#','$','%','^','&','*'];
let finalProduct = [];
let charSpace = [];

function pickFromArray(array) {
  let arrayLength = array.length;
  let selection = array[Math.floor(Math.random() * arrayLength)];
  return selection;
}

function generatePassword(length, number, upper, lower, symbol) {
  if (!number && !upper && !lower && !symbol) {
  // if (number == false && upper == false && lower == false && symbol == false ) {
    alert("You must select at least one of the criteria for the password to be generated.");
    return;
  }
  if (number) {
    charSpace.concat(numberArray);
    finalProduct.push(pickFromArray(numberArray));
  } if (lower) {
    charSpace.concat(lowercaseArray);
    finalProduct.push(pickFromArray(lowercaseArray));
  } if (upper) {
    charSpace.concat(uppercaseArray);
    finalProduct.push(pickFromArray(uppercaseArray));
  } if (symbol) {
    charSpace.concat(symbolArray);
    finalProduct.push(pickFromArray(symbolArray));
  } 
  
  while (finalProduct.length < length) {
    finalProduct.push(pickFromArray(charSpace));
  } 

  return(finalProduct);
}

function writePassword() {
  
  let length = Number(prompt("Enter a whole number between 8 and 128 for the length of your password."));
  if ((129 > length) && (length > 7)) {
    let number = confirm("Do you want to have numbers included?");
    let lower = confirm("Do you want to have lower case letters?");
    let upper = confirm("Do you want to have upper case letters?");
    let symbol = confirm("Do you want to have symbols?");
    var password = generatePassword(length, number, lower, upper, symbol);

    var passwordText = document.querySelector("#password");
    console.log(password);
    passwordText.value = password.join('');
    
  } else {
    alert( length + " is outside of the parameters, please try again with a whole number between 8 and 128.")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
