let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.

const takeOrder = (topping) => {
    console.log('Order: ' + topping);
  }
  takeOrder('pizza');

//Another way to call a function
const multiplyByThirteen = (inputNumber) => {
    console.log(inputNumber * 13);
  };
  
  multiplyByThirteen(9);
  // Output: 117

//  One parameter, one statement = automatically
//  "returns" the value of the statement
const multiplyByTen = anotherInputNumber => anotherInputNumber * 10;
console.log(multiplyByTen(5));
//Output 50