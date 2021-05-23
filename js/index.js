"use strict";
// 1. Реализовать возведение в целую степень. (pow(base, exponent) => base**exponent, где base любое число, exponent - натуральное (1, 2, 3) или * целое число(-2, -1, 0, 1, 2)).

// function pow(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   }
//   return base * pow(base, exponent - 1);
// }

// const result = pow(3, 3);
// console.log(result);

// или

// function pow(base, exponent) {
//   return exponent === 0 ? 1 : base * pow(base, exponent - 1);
// }

// const result = pow(3, 3);
// console.log(result);

function pow(base, exponent) {
  if (exponent < 0) {
    return 1 / positiveExponentPow(base, Math.abs(exponent));
  }
  return positiveExponentPow(base, exponent);
  function positiveExponentPow(base, exponent) {
    return exponent === 0 ? 1 : base * pow(base, exponent - 1);
  }
}

const result = pow(3, -3);
console.log(result);

// 2. Реализовать вывод в консоль скобок (// bracketWrapper3(3); // => сразу в консоль)

bracketWrapper(10);

function bracketWrapper(n) {
  console.log("brackerWrapperRec(n) :>> ", bracketWrapperRec(n));

  function bracketWrapperRec(n) {
    return n === 1 ? "()" : `(${bracketWrapperRec(n - 1)})`;
  }
}

// 3. ** Реализовать функцию аналог flat для массивов. (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

// сделаю чуть позже
