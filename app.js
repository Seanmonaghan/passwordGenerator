// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowercaseArray = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
const uppercaseArray = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
const numberArray = ['1','2','3','4','5','6','7','8','9','0']
const symbolArray = ['!','@','#','$','%','^','&','*']


// Write password to the #password input

function pickFromArray(array) {
  let arrayLength = array.length;
  let selection = array[Math.floor(Math.random() * arrayLength)];
  return selection;
}




function generatePassword(length, number, upper, lower, symbol) {
  // (number = True) (upper = True) (lower = True) (symbol = True)
  if (number && upper && lower && symbol) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(numberArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(uppercaseArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(lowercaseArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(symbolArray));
      i++;
    }
    return(finalProduct);

  } else if (number) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(numberArray));
      i++;
    }
    return(finalProduct);

  } else if (upper) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(uppercaseArray));
      i++;
    } 
    return(finalProduct);
  } else if (lower) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(lowercaseArray));
      i++;
    }
    return(finalProduct);
    
  } else if (symbol) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(symbolArray));
      i++;
    }
    return(finalProduct);
    
  } else if (numbers && upper) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(numberArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(uppercaseArray));
      i++;
    }
    return(finalProduct);

  } else if (numbers && lower) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(numberArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(lowercaseArray));
      i++;
    }
    return(finalProduct);
    
  } else if (numbers && symbol) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(numberArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(symbolArray));
      i++;
    }
    return(finalProduct);
    
  } else if (upper && lower) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(uppercaseArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(lowercaseArray));
      i++;
    }
    return(finalProduct);
    
  } else if (upper && symbol) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(uppercaseArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(symbolArray));
      i++;
    }
    return(finalProduct);
    
  } else if (lower && symbol) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(lowercaseArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(symbolArray));
      i++;
    }
    return(finalProduct);
    
  } else if (number && upper && lower) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(numberArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(uppercaseArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(lowercaseArray));
      i++;
    }
    return(finalProduct);
    
  } else if (number && upper && symbol) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(numberArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(uppercaseArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(symbolArray));
      i++;
    }
    return(finalProduct);
    
  } else if (number && lower && symbol) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(numberArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(lowercaseArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(symbolArray));
      i++;
    }
    return(finalProduct);
    
  } else if (upper && lower && symbol) {
    var finalProduct = [];
    
    for (i = 0; i < length;) {
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(uppercaseArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(lowercaseArray));
      i++;
      if (i > length - 1) {break;}
      finalProduct.push(pickFromArray(symbolArray));
      i++;
    }
    return(finalProduct);
    
  } else {
    alert("You must select at least one of the criteria for the password to be generated.");
  } 
}
function writePassword() {
  
  let length = Number(prompt("Enter a whole number between 8 and 128 for the length of your password."));
  if ((129 > length) && (length > 7)) {
    let number = confirm("Do you want to have numbers included?");
    let lower = confirm("Do you want to have lower case letters?");
    let upper = confirm("Do you want to have upper case letters?");
    let numeric = confirm("Do you want to have symbols?");
    var password = generatePassword(length, number, lower, upper, numeric);

    var passwordText = document.querySelector("#password");
    console.log(password);
    passwordText.value = password.join('');
    
  } else {
    alert( length + " is outside of the parameters, please try again with a whole number between 8 and 128.")
  }
  
  

}








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
