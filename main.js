
// variables //
var calculationArray = [];
var result = 0;
var operators = ['+', '*', '/', '-'];
var operator='', num1='', num2='';

// Number Functions //
var $numbers = document.querySelectorAll(".num");
for (i=0; i < $numbers.length; i++) {
  $numbers[i].addEventListener("click",pushNumber);
};
function pushNumber() {
  calculationArray.push(event.target.textContent);
  console.log(calculationArray);
}

// Operator Functions //
var $operator = document.querySelectorAll(".operator");
for (i=0; i < $operator.length; i++) {
  $operator[i].addEventListener("click",pushOperator);
};
function pushOperator() {
  calculationArray.push(event.target.textContent);
  console.log(calculationArray);
}

// Calculate Function -- combines the numbers //
document.querySelector(".calculate").addEventListener("click", calculate)
function calculation(item) {

  if(operators.indexOf(item) !== -1) {
    operator = item;
  } else if(operator.length === 1){
    num2 += item;
  } else{
    num1 += item;
  }
}
function calculate() {
  calculationArray.forEach(calculation);
  if(operator === '+') {
    result = Number(num1) + Number(num2);
  } else if (operator === '-') {
    result = Number(num1) - Number(num2);
  } else if (operator === '*') {
    result = Number(num1) * Number(num2);
  } else if (operator === '/') {
    result = Number(num1) / Number(num2);
  }
document.querySelector(".result_text").textContent = result
}

// clearAll Function -- resets the page//
document.querySelector("#allClear").addEventListener("click", clearAll)
function clearAll() {
  window.location.reload();
}
