const test = require("./index");

//capitalize testing

it("capitalize short string all lowerCase", () => {
  expect(test.capitalize("asd")).toBe("Asd");
});

it("capitalize short string all UpperCase", () => {
  expect(test.capitalize("ASD")).toBe("Asd");
});

it("capitalize short string mixed", () => {
  expect(test.capitalize("asDF")).toBe("Asdf");
});
it("capitalize long string and spaces all lowerCase", () => {
  expect(test.capitalize("juancarlos pelegrini")).toBe("Juancarlos Pelegrini");
});

it("capitalize long string all UpperCase", () => {
  expect(test.capitalize("JUANCARLOS PELEGRINI")).toBe("Juancarlos Pelegrini");
});

it("capitalize long string mixed", () => {
  expect(test.capitalize("jUaNCARlos PeleGRINI")).toBe("Juancarlos Pelegrini");
});

it("capitalize empty string", () => {
  expect(test.capitalize("")).toBe("error");
});

it("capitalize not a string", () => {
  expect(test.capitalize({ a: 1, b: 2 })).toBe("error");
});

//reverse string testing

it("reverseString short string all lowerCase", () => {
  expect(test.reverseString("asd")).toBe("dsa");
});

it("reverseString short string all UpperCase", () => {
  expect(test.reverseString("ASD")).toBe("DSA");
});

it("reverseString short string mixed", () => {
  expect(test.reverseString("asDF")).toBe("FDsa");
});

it("reverseString long string and spaces all lowerCase", () => {
  expect(test.reverseString("juancarlos pelegrini")).toBe(
    "inirgelep solracnauj"
  );
});

it("reverseString long string all UpperCase", () => {
  expect(test.reverseString("JUANCARLOS PELEGRINI")).toBe(
    "INIRGELEP SOLRACNAUJ"
  );
});

it("reverseString long string mixed", () => {
  expect(test.reverseString("jUaNCARlos PeleGRINI")).toBe(
    "INIRGeleP solRACNaUj"
  );
});

it("reverseString empty string", () => {
  expect(test.reverseString("")).toBe("error");
});

it("reverseString not a string", () => {
  expect(test.reverseString({ a: 1, b: 2 })).toBe("error");
});

//calculator testing add

it("calculator add not numbers 1", () => {
  expect(test.calculator.add("a", 2)).toBe("error");
});

it("calculator add not numbers 2", () => {
  expect(test.calculator.add(2, "b")).toBe("error");
});

it("calculator add two postive integers 1", () => {
  expect(test.calculator.add(5, 2)).toBe(7);
});

it("calculator add two negative integers 2", () => {
  expect(test.calculator.add(-5, -2)).toBe(-7);
});

it("calculator add postive and negative integers", () => {
  expect(test.calculator.add(5, -2)).toBe(3);
});

it("calculator add negative and postive integers", () => {
  expect(test.calculator.add(-5, 2)).toBe(-3);
});

it("calculator add floats", () => {
  expect(test.calculator.add(5.2, 2.1)).toBeCloseTo(7.3);
});

//calculator testing subs

it("calculator subs not numbers 1", () => {
  expect(test.calculator.subs("a", 2)).toBe("error");
});

it("calculator subs not numbers 2 ", () => {
  expect(test.calculator.subs(2, "a")).toBe("error");
});

it("calculator subs two postive integers", () => {
  expect(test.calculator.subs(5, 2)).toBe(3);
});

it("calculator subs two negative integers", () => {
  expect(test.calculator.subs(-5, -2)).toBe(-3);
});

it("calculator subs postive and negative integers", () => {
  expect(test.calculator.subs(5, -2)).toBe(7);
});

it("calculator subs negative and postive integers", () => {
  expect(test.calculator.subs(-5, 2)).toBe(-7);
});

it("calculator subs floats", () => {
  expect(test.calculator.subs(5.2, 2.1)).toBeCloseTo(3.1);
});

//calculator testing divide

it("calculator divide dividend is 0", () => {
  expect(test.calculator.divide(4, 0)).toBe("error");
});

it("calculator divide divisor is 0", () => {
  expect(test.calculator.divide(0, 4)).toBeCloseTo(0);
});

it("calculator divide not numbers", () => {
  expect(test.calculator.divide("a", 2)).toBe("error");
});

it("calculator divide not numbers", () => {
  expect(test.calculator.divide(2, "a")).toBe("error");
});

it("calculator divide two postive integers", () => {
  expect(test.calculator.divide(6, 2)).toBe(3);
});

it("calculator divide two negative integers", () => {
  expect(test.calculator.divide(-6, -2)).toBe(3);
});

it("calculator divide postive and negative integers", () => {
  expect(test.calculator.divide(6, -2)).toBe(-3);
});

it("calculator divide negative and postive integers", () => {
  expect(test.calculator.divide(-6, 2)).toBe(-3);
});

it("calculator divide floats", () => {
  expect(test.calculator.divide(6.6, 2)).toBeCloseTo(3.3);
});

//calculator testing multiply

it("calculator multiply by 0", () => {
  expect(test.calculator.multiply(4, 0)).toBeCloseTo(0);
});

it("calculator multiply not numbers 1", () => {
  expect(test.calculator.multiply("a", 2)).toBe("error");
});

it("calculator multiply not numbers 2", () => {
  expect(test.calculator.multiply(2, "a")).toBe("error");
});

it("calculator multiply two postive integers", () => {
  expect(test.calculator.multiply(6, 2)).toBe(12);
});

it("calculator multiply two negative integers", () => {
  expect(test.calculator.multiply(-6, -2)).toBe(12);
});

it("calculator multiply postive and negative integers", () => {
  expect(test.calculator.multiply(6, -2)).toBe(-12);
});

it("calculator multiply negative and postive integers", () => {
  expect(test.calculator.multiply(-6, 2)).toBe(-12);
});

it("calculator multiply floats", () => {
  expect(test.calculator.multiply(6.6, 2.1)).toBeCloseTo(13.86);
});

//caesar cipher tests

it("caesarCipher short", () => {
  expect(test.caesarCipher("asd")).toBe("dvg");
});

it("caesarCipher long string mixed", () => {
  expect(test.caesarCipher("jUaNCARlos PeleGRINI")).toBe(
    "mXdQFDUorv#ShohJULQL"
  );
});

it("caesarCipher empty string", () => {
  expect(test.caesarCipher("")).toBe("");
});

it("caesarCipher not a string", () => {
  expect(test.caesarCipher({ a: 1, b: 2 })).toBe("error");
});
