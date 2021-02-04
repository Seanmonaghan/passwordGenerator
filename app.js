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

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}


function generatePassword(length, number, lower, upper, symbol) {
  if (!number && !upper && !lower && !symbol) {
    alert("You must select at least one of the criteria for the password to be generated.");
    return;
  }
  if (number) {
    charSpace = [...charSpace, ...numberArray];
    finalProduct.push(pickFromArray(numberArray));
  } if (lower) {
    charSpace = [...charSpace, ...lowercaseArray];
    finalProduct.push(pickFromArray(lowercaseArray));
  } if (upper) {
    charSpace = [...charSpace, ...uppercaseArray];
    finalProduct.push(pickFromArray(uppercaseArray));
  } if (symbol) {
    charSpace = [...charSpace, ...symbolArray];
    finalProduct.push(pickFromArray(symbolArray));
  } 
  
  while (finalProduct.length < length) {
    finalProduct.push(pickFromArray(charSpace));
  } 
  
  console.log(finalProduct);
  //randomize Final Product before returning

  shuffleArray(finalProduct);
  
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
