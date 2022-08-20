function capitalize(string) {
  if (typeof string !== "string" || string === "") {
    return "error";
  }
  string = string.toLowerCase();
  let stringArray = string.split(" ");
  stringArray.forEach((string, i) => {
    let splitedstring = string.split("");
    splitedstring[0] = splitedstring[0].toUpperCase();
    console.log(splitedstring);
    stringArray[i] = splitedstring.join("");
  });
  console.log(stringArray);
  string = stringArray.join(" ");
  return string;
}

function reverseString(string) {
  if (typeof string !== "string" || string === "") {
    return "error";
  }
  let stringArray = string.split("");
  let reversedStringArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    reversedStringArray.unshift(stringArray[i]);
  }
  let result = reversedStringArray.join("");
  return result;
}

const calculator = (() => {
  function check(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return false;
    }
    return true;
  }
  function add(a, b) {
    if (check(a, b)) {
      return a + b;
    }
    return "error";
  }
  function subs(a, b) {
    if (check(a, b)) {
      return a - b;
    }
    return "error";
  }
  function divide(a, b) {
    if (check(a, b) && b != 0) {
      return a / b;
    }
    return "error";
  }
  function multiply(a, b) {
    if (check(a, b)) {
      return a * b;
    }
    return "error";
  }
  return {
    add,
    subs,
    divide,
    multiply,
  };
})();

function caesarCipher(string) {
  if (typeof string !== "string") {
    return "error";
  }
  let stringArray = string.split("");
  stringArray.forEach((leter, i) => {
    leter = leter.charCodeAt();
    leter = leter + 3;
    leter = String.fromCharCode(leter);
    console.log(stringArray, leter);
    stringArray[i] = leter;
  });
  string = stringArray.join("");
  return string;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };
