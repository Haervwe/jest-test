function capitalize(string) {
  return string;
}

function reverseString(string) {
  return string;
}

const calculator = (() => {
  function add(a, b) {
    return a + b;
  }
  function subs(a, b) {
    return a - b;
  }
  function divide(a, b) {
    return a / b;
  }
  function multiply(a, b) {
    return a * b;
  }
  return {
    add,
    subs,
    divide,
    multiply,
  };
})();

function caesarCipher(string) {
  return string;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };
