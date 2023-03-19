//https://www.codewars.com/kata/568d0dd208ee69389d000016

const DayRate = 40;

function rentalCarCost(d) {
  let cost;
  if (d >= 3 && d < 7) {
    cost = d * DayRate - 20;
  } else if (d >= 7) {
    cost = d * DayRate - 50;
  } else {
    cost = d * DayRate;
  }
  return cost;
}
