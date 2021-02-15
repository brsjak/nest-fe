import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

export const addNumbers = (numbersArray: any[]) => {
  return numbersArray.reduce(function (a, b) {
    return a + b;
  }, 0);
};

export const subtractNumbers = (numbersArray: any[]) => {
  return numbersArray.reduce(function (a, b) {
    return a - b;
  }, numbersArray[0]);
};

export const multiplyNumbers = (numbersArray: any[]) => {
  return numbersArray.reduce(function (a, b) {
    return a * b;
  }, 1);
};

export const returnFetchedData = () => {
  return [1, 2, 3, 4, 5];
};

export const Calculator = () => {
  const [numbers, setNumbers] = useState<AxiosResponse | null | void>(null);
  const [sum, setSum] = useState(null);
  const [sub, setSub] = useState(null);
  const [multiply, setMultiply] = useState(null);

  const getData = async () => {
    const response = await axios.get("http://localhost:3000");
    setNumbers(response.data);
  };

  const performActions = () => {
    if (Array.isArray(numbers)) {
      setSum(addNumbers(numbers));
      setSub(subtractNumbers(numbers));
      setMultiply(multiplyNumbers(numbers));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (numbers) {
      performActions();
    }
  }, [numbers]);

  return (
    <>
      <h2>Calculator</h2>
      <p>The sum result of the numbers in the array is {sum}</p>
      <p>The subtraction result of the numbers in the array is {sub}</p>
      <p>The multiplid result of the numbers in the array is {multiply}</p>
    </>
  );
};
