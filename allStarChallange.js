/*
take the str param and store in an array DONE
loop in the array and search for how many times the letter param occurs within the array DONE
return the amount DONE
https://www.codewars.com/kata/5865918c6b569962950002a1 
*/

function strCount(str, letter) {
  let count = 0;
  const strArray = str.split("");
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === letter) count++;
  }
  return count;
}
