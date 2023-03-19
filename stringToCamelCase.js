// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  if (str === "") {
    return str;
  }

  let selectChar = "";

  if (str.includes("_")) {
    selectChar = "_";
  } else if (str.includes("-")) {
    selectChar = "-";
  }

  let strArray = str.split("");

  for (let i = 0; i < strArray.length; i++) {
    if (selectChar === strArray[i]) {
      strArray[i] = "";
      strArray[i + 1] = strArray[i + 1].toUpperCase();
    } else if ("-" === strArray[i]) {
      strArray[i] = "";
      strArray[i + 1] = strArray[i + 1].toUpperCase();
    } else if ("_" === strArray[i]) {
      strArray[i] = "";
      strArray[i + 1] = strArray[i + 1].toUpperCase();
    }
  }

  return strArray.join("");
}
