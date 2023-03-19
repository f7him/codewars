/*
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
*/

const OneSecond = 1000;
const OneMinute = 60000;
const OneHour = 3600000;

function past(h, m, s) {
  let num = [h, m, s];
  //console.log(num);
  let Hour = num[0] * OneHour;
  let Minutes = num[1] * OneMinute;
  let Seconds = num[2] * OneSecond;
  let Total = Hour + Minutes + Seconds;
  //console.log(Total);
  return Total;
}
