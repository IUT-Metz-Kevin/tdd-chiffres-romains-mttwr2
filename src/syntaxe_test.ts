import { it, expect, test } from "vitest";
import {}

function isDivisible({
  number,
  by,
}: {
  number: number;
  by: number[];
}): boolean {
  for (let byNumber of by) {
    if (number % byNumber !== 0) return false;
  }

  return true;
}

function FizzBuzz(number: number) {
  let result = "";

  if (isDivisible({ number, by: [3] })) result += "Fizz";
  if (isDivisible({ number, by: [5] })) result += "Buzz";
  if (result === "") result = number.toString();

  return result;
}

// Exercice du FizzBuzz
//
// Ecrire une fonction, qui prend en paramètre un nombre
//      Si le nombre est un multiple de 3 => "Fizz"
//      Si le nombre est un multiple de 5 => "Buzz"
//      Si le nombre est un multiple de 3 & 5 => "FizzBuzz"
//      Sinon => le nombre

it("Should return a number when it's not divisible by 3 or 5", function () {
  expect(FizzBuzz(7)).toBe("7");
  expect(FizzBuzz(1)).toBe("1");
});

it("Should return 'Fizz' when it's divisible by 3", function () {
  expect(FizzBuzz(6)).toBe("Fizz");
  expect(FizzBuzz(9)).toBe("Fizz");
});

it("Should return 'Buzz' when it's divisible by 5", function () {
  expect(FizzBuzz(10)).toBe("Buzz");
  expect(FizzBuzz(20)).toBe("Buzz");
});

it("Should return 'FizzBuzz' when it's divisible by 3 and 5", function () {
  expect(FizzBuzz(15)).toBe("FizzBuzz");
});
