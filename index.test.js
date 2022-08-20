const test = require("./index");

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
  expect(test.capitalize("")).toBe("");
});
