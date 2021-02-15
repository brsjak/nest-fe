import {
  addNumbers,
  multiplyNumbers,
  returnFetchedData,
  subtractNumbers,
} from "./Calculator";

const testData = [1, 2, 3, 4, 5];

test("The fetched data matches the expected data", () => {
  expect(returnFetchedData()).toStrictEqual(testData);
});

test("properly adds the elements of the array", () => {
  expect(addNumbers(testData)).toBe(15);
});

test("properly subtracts the elements of the array", () => {
  expect(subtractNumbers(testData)).toBe(-14);
});

test("properly multiplies the elements of the array", () => {
  expect(multiplyNumbers(testData)).toBe(120);
});
