import { describe, it, expect } from "vitest";
import {
  countUp,
  countDown,
  sumUpTo,
  factorialWhile,
  countDigits,
  sumDigits,
  reverseNumber,
  isPowerOfTwo,
  gcdWhile,
  lcmWhile,
  collatzSteps,
  binaryRepresentation,
  countDivisors,
  isPrimeWhile,
  findSmallestDivisor,
  multiplyByAddition,
  integerDivision,
  moduloWhile,
  sumEvenWhile,
  geometricProgressionCount,
  savingsAccumulator,
  palindromeNumber,
  nthFibonacciWhile,
  shrinkToSingleDigit,
  waterTankFill
} from "../src/01-while-basics.js";

describe("Модуль 1: Цикл while та поняття ітерації", () => {
  describe("1.1 countUp - Лічильник від 1 до N", () => {
    it("тест 1: countUp(5)", () => {
      expect(countUp(5)).toEqual([1,2,3,4,5]);
    });
    it("тест 2: countUp(1)", () => {
      expect(countUp(1)).toEqual([1]);
    });
    it("тест 3: countUp(0)", () => {
      expect(countUp(0)).toEqual([]);
    });
  });

  describe("1.2 countDown - Зворотний відлік від N до 1", () => {
    it("тест 1: countDown(4)", () => {
      expect(countDown(4)).toEqual([4,3,2,1]);
    });
    it("тест 2: countDown(0)", () => {
      expect(countDown(0)).toEqual([]);
    });
  });

  describe("1.3 sumUpTo - Сума чисел від 1 до N", () => {
    it("тест 1: sumUpTo(5)", () => {
      expect(sumUpTo(5)).toEqual(15);
    });
    it("тест 2: sumUpTo(10)", () => {
      expect(sumUpTo(10)).toEqual(55);
    });
    it("тест 3: sumUpTo(0)", () => {
      expect(sumUpTo(0)).toEqual(0);
    });
  });

  describe("1.4 factorialWhile - Факторіал числа через while", () => {
    it("тест 1: factorialWhile(5)", () => {
      expect(factorialWhile(5)).toEqual(120);
    });
    it("тест 2: factorialWhile(0)", () => {
      expect(factorialWhile(0)).toEqual(1);
    });
    it("тест 3: factorialWhile(-2)", () => {
      expect(factorialWhile(-2)).toEqual(null);
    });
  });

  describe("1.5 countDigits - Кількість цифр у числі", () => {
    it("тест 1: countDigits(12345)", () => {
      expect(countDigits(12345)).toEqual(5);
    });
    it("тест 2: countDigits(-987)", () => {
      expect(countDigits(-987)).toEqual(3);
    });
    it("тест 3: countDigits(0)", () => {
      expect(countDigits(0)).toEqual(1);
    });
  });

  describe("1.6 sumDigits - Сума цифр числа", () => {
    it("тест 1: sumDigits(123)", () => {
      expect(sumDigits(123)).toEqual(6);
    });
    it("тест 2: sumDigits(505)", () => {
      expect(sumDigits(505)).toEqual(10);
    });
    it("тест 3: sumDigits(-49)", () => {
      expect(sumDigits(-49)).toEqual(13);
    });
  });

  describe("1.7 reverseNumber - Розворот цифр числа", () => {
    it("тест 1: reverseNumber(1234)", () => {
      expect(reverseNumber(1234)).toEqual(4321);
    });
    it("тест 2: reverseNumber(-89)", () => {
      expect(reverseNumber(-89)).toEqual(-98);
    });
    it("тест 3: reverseNumber(7)", () => {
      expect(reverseNumber(7)).toEqual(7);
    });
  });

  describe("1.8 isPowerOfTwo - Чи є число степенем двійки", () => {
    it("тест 1: isPowerOfTwo(16)", () => {
      expect(isPowerOfTwo(16)).toEqual(true);
    });
    it("тест 2: isPowerOfTwo(18)", () => {
      expect(isPowerOfTwo(18)).toEqual(false);
    });
    it("тест 3: isPowerOfTwo(1)", () => {
      expect(isPowerOfTwo(1)).toEqual(true);
    });
  });

  describe("1.9 gcdWhile - НСД (Алгоритм Евкліда через while)", () => {
    it("тест 1: gcdWhile(48, 18)", () => {
      expect(gcdWhile(48, 18)).toEqual(6);
    });
    it("тест 2: gcdWhile(101, 10)", () => {
      expect(gcdWhile(101, 10)).toEqual(1);
    });
    it("тест 3: gcdWhile(20, 0)", () => {
      expect(gcdWhile(20, 0)).toEqual(20);
    });
  });

  describe("1.10 lcmWhile - Найменше спільне кратне (НСК)", () => {
    it("тест 1: lcmWhile(4, 6)", () => {
      expect(lcmWhile(4, 6)).toEqual(12);
    });
    it("тест 2: lcmWhile(5, 7)", () => {
      expect(lcmWhile(5, 7)).toEqual(35);
    });
    it("тест 3: lcmWhile(0, 8)", () => {
      expect(lcmWhile(0, 8)).toEqual(0);
    });
  });

  describe("1.11 collatzSteps - Кроки гіпотези Коллатца (3n + 1)", () => {
    it("тест 1: collatzSteps(6)", () => {
      expect(collatzSteps(6)).toEqual(8);
    });
    it("тест 2: collatzSteps(1)", () => {
      expect(collatzSteps(1)).toEqual(0);
    });
    it("тест 3: collatzSteps(19)", () => {
      expect(collatzSteps(19)).toEqual(20);
    });
  });

  describe("1.12 binaryRepresentation - Переведення в двійковий рядок через while", () => {
    it("тест 1: binaryRepresentation(10)", () => {
      expect(binaryRepresentation(10)).toEqual("1010");
    });
    it("тест 2: binaryRepresentation(7)", () => {
      expect(binaryRepresentation(7)).toEqual("111");
    });
    it("тест 3: binaryRepresentation(0)", () => {
      expect(binaryRepresentation(0)).toEqual("0");
    });
  });

  describe("1.13 countDivisors - Кількість дільників числа", () => {
    it("тест 1: countDivisors(12)", () => {
      expect(countDivisors(12)).toEqual(6);
    });
    it("тест 2: countDivisors(7)", () => {
      expect(countDivisors(7)).toEqual(2);
    });
    it("тест 3: countDivisors(1)", () => {
      expect(countDivisors(1)).toEqual(1);
    });
  });

  describe("1.14 isPrimeWhile - Перевірка простоти числа через while", () => {
    it("тест 1: isPrimeWhile(17)", () => {
      expect(isPrimeWhile(17)).toEqual(true);
    });
    it("тест 2: isPrimeWhile(18)", () => {
      expect(isPrimeWhile(18)).toEqual(false);
    });
    it("тест 3: isPrimeWhile(1)", () => {
      expect(isPrimeWhile(1)).toEqual(false);
    });
  });

  describe("1.15 findSmallestDivisor - Найменший дільник більший за 1", () => {
    it("тест 1: findSmallestDivisor(15)", () => {
      expect(findSmallestDivisor(15)).toEqual(3);
    });
    it("тест 2: findSmallestDivisor(49)", () => {
      expect(findSmallestDivisor(49)).toEqual(7);
    });
    it("тест 3: findSmallestDivisor(11)", () => {
      expect(findSmallestDivisor(11)).toEqual(11);
    });
  });

  describe("1.16 multiplyByAddition - Множення повторним додаванням", () => {
    it("тест 1: multiplyByAddition(6, 4)", () => {
      expect(multiplyByAddition(6, 4)).toEqual(24);
    });
    it("тест 2: multiplyByAddition(5, 0)", () => {
      expect(multiplyByAddition(5, 0)).toEqual(0);
    });
    it("тест 3: multiplyByAddition(0, 10)", () => {
      expect(multiplyByAddition(0, 10)).toEqual(0);
    });
  });

  describe("1.17 integerDivision - Цілочисельне ділення через віднімання", () => {
    it("тест 1: integerDivision(14, 3)", () => {
      expect(integerDivision(14, 3)).toEqual(4);
    });
    it("тест 2: integerDivision(20, 5)", () => {
      expect(integerDivision(20, 5)).toEqual(4);
    });
    it("тест 3: integerDivision(5, 0)", () => {
      expect(integerDivision(5, 0)).toEqual(null);
    });
  });

  describe("1.18 moduloWhile - Залишок від ділення через віднімання", () => {
    it("тест 1: moduloWhile(17, 5)", () => {
      expect(moduloWhile(17, 5)).toEqual(2);
    });
    it("тест 2: moduloWhile(20, 4)", () => {
      expect(moduloWhile(20, 4)).toEqual(0);
    });
    it("тест 3: moduloWhile(10, 0)", () => {
      expect(moduloWhile(10, 0)).toEqual(null);
    });
  });

  describe("1.19 sumEvenWhile - Сума парних чисел у діапазоні", () => {
    it("тест 1: sumEvenWhile(1, 6)", () => {
      expect(sumEvenWhile(1, 6)).toEqual(12);
    });
    it("тест 2: sumEvenWhile(4, 4)", () => {
      expect(sumEvenWhile(4, 4)).toEqual(4);
    });
    it("тест 3: sumEvenWhile(5, 2)", () => {
      expect(sumEvenWhile(5, 2)).toEqual(0);
    });
  });

  describe("1.20 geometricProgressionCount - Кількість членів геометричної прогресії", () => {
    it("тест 1: geometricProgressionCount(2, 2, 32)", () => {
      expect(geometricProgressionCount(2, 2, 32)).toEqual(5);
    });
    it("тест 2: geometricProgressionCount(3, 3, 30)", () => {
      expect(geometricProgressionCount(3, 3, 30)).toEqual(3);
    });
    it("тест 3: geometricProgressionCount(50, 2, 40)", () => {
      expect(geometricProgressionCount(50, 2, 40)).toEqual(0);
    });
  });

  describe("1.21 savingsAccumulator - Місяці для накопичення депозиту", () => {
    it("тест 1: savingsAccumulator(1000, 200, 0.01, 2000)", () => {
      expect(savingsAccumulator(1000, 200, 0.01, 2000)).toEqual(5);
    });
    it("тест 2: savingsAccumulator(5000, 100, 0.02, 5000)", () => {
      expect(savingsAccumulator(5000, 100, 0.02, 5000)).toEqual(0);
    });
  });

  describe("1.22 palindromeNumber - Число-паліндром арифметично", () => {
    it("тест 1: palindromeNumber(121)", () => {
      expect(palindromeNumber(121)).toEqual(true);
    });
    it("тест 2: palindromeNumber(-121)", () => {
      expect(palindromeNumber(-121)).toEqual(false);
    });
    it("тест 3: palindromeNumber(12321)", () => {
      expect(palindromeNumber(12321)).toEqual(true);
    });
  });

  describe("1.23 nthFibonacciWhile - N-те число Фібоначчі через while", () => {
    it("тест 1: nthFibonacciWhile(6)", () => {
      expect(nthFibonacciWhile(6)).toEqual(8);
    });
    it("тест 2: nthFibonacciWhile(0)", () => {
      expect(nthFibonacciWhile(0)).toEqual(0);
    });
    it("тест 3: nthFibonacciWhile(1)", () => {
      expect(nthFibonacciWhile(1)).toEqual(1);
    });
  });

  describe("1.24 shrinkToSingleDigit - Цифровий корінь числа", () => {
    it("тест 1: shrinkToSingleDigit(9875)", () => {
      expect(shrinkToSingleDigit(9875)).toEqual(2);
    });
    it("тест 2: shrinkToSingleDigit(38)", () => {
      expect(shrinkToSingleDigit(38)).toEqual(2);
    });
    it("тест 3: shrinkToSingleDigit(5)", () => {
      expect(shrinkToSingleDigit(5)).toEqual(5);
    });
  });

  describe("1.25 waterTankFill - Симуляція наповнення резервуара водою", () => {
    it("тест 1: waterTankFill(100, 30, 10)", () => {
      expect(waterTankFill(100, 30, 10)).toEqual(5);
    });
    it("тест 2: waterTankFill(50, 10, 10)", () => {
      expect(waterTankFill(50, 10, 10)).toEqual(null);
    });
    it("тест 3: waterTankFill(0, 5, 2)", () => {
      expect(waterTankFill(0, 5, 2)).toEqual(0);
    });
  });

});
