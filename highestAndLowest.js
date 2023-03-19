/*
1) take the numbers in from numbers param and map them into an array.  DONE
2) sort the array in order. DONE
3) pick the first and last index of array and return them as a string separated by space. DONE
https://www.codewars.com/kata/554b4ac871d6813a03000035 
*/

function compareNumbers(a, b) {
  return a - b;
}

function highAndLow(numbers) {
  let strArray = numbers.split(" ");
  strArray.sort(compareNumbers);
  let firstIndex = strArray[0];
  let lastIndex = strArray[strArray.length - 1];
  let j = lastIndex + " " + firstIndex;
  return j;
}
