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

bracketWrapperRec(10);

function bracketWrapperRec(n) {
  if (n === 0) {
    return;
  }
  console.log(`(`);
  bracketWrapperRec(n - 1);
  console.log(`)`);
}

// 3. ** Реализовать функцию аналог flat для массивов. (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

// сделаю чуть позже

const arr1 = [1, 2, , 4, 5]; //Метод flat удаляет пустые слоты из массива
const arr2 = [1, 2, [3, 4, [5, 6]]];
const arr3 = [1, 2, [3, 4, [5, 6]]];
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]; //arr4.flat(Infinity); =>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

flat(arr2);

function flat(arr, depth = 1) {
  const realDepthValue = depthValue(arr); // не знаю зачем я нахожу глубину массива, может это и не пригодится в итоге
  console.log("realdepthValue :>> ", realdepthValue);
  // рекурсия ушла в бесконечность.  concat передает не занечение вложенного массива, а сам массив, впринципе он так и должен делать
  function depthValue(arr) {
    debugger;
    if (arr.filter(argument => Array.isArray(argument)).lengh === 0) {
      return 0;
    }
    return (
      1 + depthValue([].concat(arr.filter(argument => Array.isArray(argument))))
    );
  }
}
