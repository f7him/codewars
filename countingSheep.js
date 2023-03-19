// https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(arrayOfSheep) {
  /*  let count = 0
    let result = arrayOfSheep.filter(sheep => )
  */

  let count = 0;
  for (let sheep of arrayOfSheep) {
    if (sheep === true) count++;
  }
  return count;
}
