const prompt = require('prompt');

const calculateUserInput = function (error, promptInput) {
  calculate(promptInput);
}

function validNum(input) {
  input.num1 = Number(input.num1);
  input.num2 = Number(input.num2);

  if(isNaN(input.num1 && input.num2)) {
    console.log("Error: invalid number");
    return false;
  } else {
    return true;
  }
}

function determineOperation(input) {
  let operation = input.operation;
  switch (operation) {
    case "add": case"+":
      console.log("\n***ADDING***");
      return input.num1 + input.num2;
    case "subtract": case "-":
      console.log("\n***SUBTRACTING***");
      return input.num1 - input.num2;
    case "divide": case "/":
      console.log("\n***DIVIDING***");
      if (input.num2 === 0) return "Undefined";
      return input.num1 / input.num2;
    case "multiply": case "*":
      console.log("\n***MULTIPLYING***");
      return input.num1 * input.num2;
    default: 
      console.log('Error: invalid operation');
      return false;
  }
}

function calculate(input) {
  if (validNum(input)) {
    let value = determineOperation(input);
    if (value) {
      console.log(`Great! Your operation equals: ${value}`);
    } else {
      console.log('\nPlease reenter input...');
      prompt.get(['num1', 'num2', 'operation'], calculateUserInput);
    }
  } else {
    console.log('\nPlease reenter input...');
    prompt.get(['num1', 'num2', 'operation'], calculateUserInput);
  }
}

prompt.start();
prompt.get(['num1', 'num2', 'operation'], calculateUserInput);
