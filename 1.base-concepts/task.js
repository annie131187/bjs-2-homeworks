"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let number = b**2 - 4 * a * c;
  if (number === 0) {
    arr.push(-b / (2 * a));    
  } else if (number > 0) {
    arr.push((-b + Math.sqrt(number) )/(2*a));
    arr.push((-b - Math.sqrt(number) )/(2*a));
  }
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage() {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
