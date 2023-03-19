// Sum Numbers
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c
function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return (sumArray = numbers.reduce((acc, val) => acc + val));
  }
}
