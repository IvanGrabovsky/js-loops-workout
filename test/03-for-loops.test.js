import { describe, it, expect } from "vitest";
import {
  rangeSum,
  evensInRange,
  oddsInRange,
  stepCounter,
  multiplicationTable,
  sumOfSquares,
  countLetterOccurrences,
  reverseStringFor,
  arithmeticProgression,
  geometricProgression,
  filterShortWords,
  findMaxIndex,
  findMinIndex,
  calculateAverage,
  countAboveThreshold,
  everyNthElement,
  pairwiseDifferences,
  runningTotal,
  alternateSignsSum,
  stringRepeatFor,
  countVowels,
  caesarCipherSimple,
  findFirstNegative,
  arrayIsSortedAsc,
  replaceNegativesWithZero,
  mergeTwoArraysAlternating,
  countPrimesUpTo,
  charFrequencyMap,
  chunkArrayFor,
  powerSeriesSum
} from "../src/03-for-loops.js";

describe("Модуль 3: Параметричний цикл for", () => {
  describe("3.1 rangeSum - Сума чисел від start до end", () => {
    it("тест 1: rangeSum(1, 5)", () => {
      expect(rangeSum(1, 5)).toEqual(15);
    });
    it("тест 2: rangeSum(3, 3)", () => {
      expect(rangeSum(3, 3)).toEqual(3);
    });
    it("тест 3: rangeSum(5, 2)", () => {
      expect(rangeSum(5, 2)).toEqual(0);
    });
  });

  describe("3.2 evensInRange - Парні числа в діапазоні", () => {
    it("тест 1: evensInRange(2, 8)", () => {
      expect(evensInRange(2, 8)).toEqual([2,4,6,8]);
    });
    it("тест 2: evensInRange(3, 7)", () => {
      expect(evensInRange(3, 7)).toEqual([4,6]);
    });
    it("тест 3: evensInRange(5, 5)", () => {
      expect(evensInRange(5, 5)).toEqual([]);
    });
  });

  describe("3.3 oddsInRange - Непарні числа в діапазоні", () => {
    it("тест 1: oddsInRange(1, 7)", () => {
      expect(oddsInRange(1, 7)).toEqual([1,3,5,7]);
    });
    it("тест 2: oddsInRange(-3, 1)", () => {
      expect(oddsInRange(-3, 1)).toEqual([-3,-1,1]);
    });
  });

  describe("3.4 stepCounter - Послідовність з кастомним кроком", () => {
    it("тест 1: stepCounter(0, 10, 2)", () => {
      expect(stepCounter(0, 10, 2)).toEqual([0,2,4,6,8,10]);
    });
    it("тест 2: stepCounter(5, 20, 5)", () => {
      expect(stepCounter(5, 20, 5)).toEqual([5,10,15,20]);
    });
    it("тест 3: stepCounter(1, 5, 0)", () => {
      expect(stepCounter(1, 5, 0)).toEqual([]);
    });
  });

  describe("3.5 multiplicationTable - Таблиця множення на число K", () => {
    it("тест 1: multiplicationTable(7, 4)", () => {
      expect(multiplicationTable(7, 4)).toEqual([7,14,21,28]);
    });
    it("тест 2: multiplicationTable(3, 1)", () => {
      expect(multiplicationTable(3, 1)).toEqual([3]);
    });
    it("тест 3: multiplicationTable(5, 0)", () => {
      expect(multiplicationTable(5, 0)).toEqual([]);
    });
  });

  describe("3.6 sumOfSquares - Сума квадратів від 1 до N", () => {
    it("тест 1: sumOfSquares(3)", () => {
      expect(sumOfSquares(3)).toEqual(14);
    });
    it("тест 2: sumOfSquares(4)", () => {
      expect(sumOfSquares(4)).toEqual(30);
    });
    it("тест 3: sumOfSquares(0)", () => {
      expect(sumOfSquares(0)).toEqual(0);
    });
  });

  describe("3.7 countLetterOccurrences - Підрахунок входжень літери", () => {
    it("тест 1: countLetterOccurrences(\"hello world\", \"l\")", () => {
      expect(countLetterOccurrences("hello world", "l")).toEqual(3);
    });
    it("тест 2: countLetterOccurrences(\"banana\", \"a\")", () => {
      expect(countLetterOccurrences("banana", "a")).toEqual(3);
    });
    it("тест 3: countLetterOccurrences(\"code\", \"x\")", () => {
      expect(countLetterOccurrences("code", "x")).toEqual(0);
    });
  });

  describe("3.8 reverseStringFor - Реверс рядка через цикл for", () => {
    it("тест 1: reverseStringFor(\"frontend\")", () => {
      expect(reverseStringFor("frontend")).toEqual("dnetnorf");
    });
    it("тест 2: reverseStringFor(\"loop\")", () => {
      expect(reverseStringFor("loop")).toEqual("pool");
    });
    it("тест 3: reverseStringFor(\"\")", () => {
      expect(reverseStringFor("")).toEqual("");
    });
  });

  describe("3.9 arithmeticProgression - Генератор арифметичної прогресії", () => {
    it("тест 1: arithmeticProgression(3, 4, 4)", () => {
      expect(arithmeticProgression(3, 4, 4)).toEqual([3,7,11,15]);
    });
    it("тест 2: arithmeticProgression(10, -2, 3)", () => {
      expect(arithmeticProgression(10, -2, 3)).toEqual([10,8,6]);
    });
  });

  describe("3.10 geometricProgression - Генератор геометричної прогресії", () => {
    it("тест 1: geometricProgression(2, 3, 4)", () => {
      expect(geometricProgression(2, 3, 4)).toEqual([2,6,18,54]);
    });
    it("тест 2: geometricProgression(5, 2, 3)", () => {
      expect(geometricProgression(5, 2, 3)).toEqual([5,10,20]);
    });
  });

  describe("3.11 filterShortWords - Фільтрація слів за мінімальною довжиною", () => {
    it("тест 1: filterShortWords([\"apple\", \"cat\", \"banana\", \"dog\"], 4)", () => {
      expect(filterShortWords(["apple", "cat", "banana", "dog"], 4)).toEqual(["apple","banana"]);
    });
    it("тест 2: filterShortWords([\"a\", \"bb\", \"ccc\"], 2)", () => {
      expect(filterShortWords(["a", "bb", "ccc"], 2)).toEqual(["bb","ccc"]);
    });
  });

  describe("3.12 findMaxIndex - Індекс максимального елемента масиву", () => {
    it("тест 1: findMaxIndex([3, 9, 2, 9, 5])", () => {
      expect(findMaxIndex([3, 9, 2, 9, 5])).toEqual(1);
    });
    it("тест 2: findMaxIndex([-5, -1, -8])", () => {
      expect(findMaxIndex([-5, -1, -8])).toEqual(1);
    });
    it("тест 3: findMaxIndex([])", () => {
      expect(findMaxIndex([])).toEqual(-1);
    });
  });

  describe("3.13 findMinIndex - Індекс мінімального елемента масиву", () => {
    it("тест 1: findMinIndex([10, 4, 15, 2])", () => {
      expect(findMinIndex([10, 4, 15, 2])).toEqual(3);
    });
    it("тест 2: findMinIndex([5, 5, 5])", () => {
      expect(findMinIndex([5, 5, 5])).toEqual(0);
    });
    it("тест 3: findMinIndex([])", () => {
      expect(findMinIndex([])).toEqual(-1);
    });
  });

  describe("3.14 calculateAverage - Середнє арифметичне масиву чисел", () => {
    it("тест 1: calculateAverage([2, 4, 6, 8])", () => {
      expect(calculateAverage([2, 4, 6, 8])).toEqual(5);
    });
    it("тест 2: calculateAverage([10])", () => {
      expect(calculateAverage([10])).toEqual(10);
    });
    it("тест 3: calculateAverage([])", () => {
      expect(calculateAverage([])).toEqual(0);
    });
  });

  describe("3.15 countAboveThreshold - Кількість елементів вище порогу", () => {
    it("тест 1: countAboveThreshold([10, 25, 5, 40, 18], 20)", () => {
      expect(countAboveThreshold([10, 25, 5, 40, 18], 20)).toEqual(2);
    });
    it("тест 2: countAboveThreshold([-5, -2, 0, 3], -1)", () => {
      expect(countAboveThreshold([-5, -2, 0, 3], -1)).toEqual(2);
    });
  });

  describe("3.16 everyNthElement - Вибірка кожного N-го елемента", () => {
    it("тест 1: everyNthElement([\"a\", \"b\", \"c\", \"d\", \"e\", \"f\"], 2)", () => {
      expect(everyNthElement(["a", "b", "c", "d", "e", "f"], 2)).toEqual(["b","d","f"]);
    });
    it("тест 2: everyNthElement([1, 2, 3, 4, 5], 3)", () => {
      expect(everyNthElement([1, 2, 3, 4, 5], 3)).toEqual([3]);
    });
  });

  describe("3.17 pairwiseDifferences - Різниця сусідніх елементів", () => {
    it("тест 1: pairwiseDifferences([1, 5, 2, 10])", () => {
      expect(pairwiseDifferences([1, 5, 2, 10])).toEqual([4,-3,8]);
    });
    it("тест 2: pairwiseDifferences([10, 20])", () => {
      expect(pairwiseDifferences([10, 20])).toEqual([10]);
    });
    it("тест 3: pairwiseDifferences([5])", () => {
      expect(pairwiseDifferences([5])).toEqual([]);
    });
  });

  describe("3.18 runningTotal - Накопичувальні суми (Prefix Sums)", () => {
    it("тест 1: runningTotal([1, 2, 3, 4])", () => {
      expect(runningTotal([1, 2, 3, 4])).toEqual([1,3,6,10]);
    });
    it("тест 2: runningTotal([5, -2, 4])", () => {
      expect(runningTotal([5, -2, 4])).toEqual([5,3,7]);
    });
    it("тест 3: runningTotal([])", () => {
      expect(runningTotal([])).toEqual([]);
    });
  });

  describe("3.19 alternateSignsSum - Знакоперемінна сума масиву", () => {
    it("тест 1: alternateSignsSum([10, 4, 3, 2])", () => {
      expect(alternateSignsSum([10, 4, 3, 2])).toEqual(7);
    });
    it("тест 2: alternateSignsSum([5])", () => {
      expect(alternateSignsSum([5])).toEqual(5);
    });
    it("тест 3: alternateSignsSum([])", () => {
      expect(alternateSignsSum([])).toEqual(0);
    });
  });

  describe("3.20 stringRepeatFor - Повторення рядка N разів через for", () => {
    it("тест 1: stringRepeatFor(\"abc\", 3)", () => {
      expect(stringRepeatFor("abc", 3)).toEqual("abcabcabc");
    });
    it("тест 2: stringRepeatFor(\"x\", 0)", () => {
      expect(stringRepeatFor("x", 0)).toEqual("");
    });
  });

  describe("3.21 countVowels - Підрахунок голосних літер", () => {
    it("тест 1: countVowels(\"Hello World\")", () => {
      expect(countVowels("Hello World")).toEqual(3);
    });
    it("тест 2: countVowels(\"Привіт світ\")", () => {
      expect(countVowels("Привіт світ")).toEqual(3);
    });
  });

  describe("3.22 caesarCipherSimple - Простий шифр Цезаря на +shift", () => {
    it("тест 1: caesarCipherSimple(\"abc\", 1)", () => {
      expect(caesarCipherSimple("abc", 1)).toEqual("bcd");
    });
    it("тест 2: caesarCipherSimple(\"xyz\", 2)", () => {
      expect(caesarCipherSimple("xyz", 2)).toEqual("zab");
    });
    it("тест 3: caesarCipherSimple(\"hello, world!\", 3)", () => {
      expect(caesarCipherSimple("hello, world!", 3)).toEqual("khoor, zruog!");
    });
  });

  describe("3.23 findFirstNegative - Індекс першого відʼємного числа", () => {
    it("тест 1: findFirstNegative([3, 5, -2, 8])", () => {
      expect(findFirstNegative([3, 5, -2, 8])).toEqual(2);
    });
    it("тест 2: findFirstNegative([1, 2, 3])", () => {
      expect(findFirstNegative([1, 2, 3])).toEqual(-1);
    });
  });

  describe("3.24 arrayIsSortedAsc - Перевірка відсортованості масиву", () => {
    it("тест 1: arrayIsSortedAsc([1, 2, 3, 5, 5])", () => {
      expect(arrayIsSortedAsc([1, 2, 3, 5, 5])).toEqual(true);
    });
    it("тест 2: arrayIsSortedAsc([1, 3, 2])", () => {
      expect(arrayIsSortedAsc([1, 3, 2])).toEqual(false);
    });
    it("тест 3: arrayIsSortedAsc([])", () => {
      expect(arrayIsSortedAsc([])).toEqual(true);
    });
  });

  describe("3.25 replaceNegativesWithZero - Заміна відʼємних елементів на нуль", () => {
    it("тест 1: replaceNegativesWithZero([1, -4, 7, -9, 0])", () => {
      expect(replaceNegativesWithZero([1, -4, 7, -9, 0])).toEqual([1,0,7,0,0]);
    });
    it("тест 2: replaceNegativesWithZero([-1, -2])", () => {
      expect(replaceNegativesWithZero([-1, -2])).toEqual([0,0]);
    });
  });

  describe("3.26 mergeTwoArraysAlternating - Почергове злиття двох масивів", () => {
    it("тест 1: mergeTwoArraysAlternating([1, 2, 3], [\"a\", \"b\", \"c\"])", () => {
      expect(mergeTwoArraysAlternating([1, 2, 3], ["a", "b", "c"])).toEqual([1,"a",2,"b",3,"c"]);
    });
    it("тест 2: mergeTwoArraysAlternating([1, 2], [\"x\", \"y\", \"z\"])", () => {
      expect(mergeTwoArraysAlternating([1, 2], ["x", "y", "z"])).toEqual([1,"x",2,"y","z"]);
    });
  });

  describe("3.27 countPrimesUpTo - Кількість простих чисел до N", () => {
    it("тест 1: countPrimesUpTo(10)", () => {
      expect(countPrimesUpTo(10)).toEqual(4);
    });
    it("тест 2: countPrimesUpTo(20)", () => {
      expect(countPrimesUpTo(20)).toEqual(8);
    });
    it("тест 3: countPrimesUpTo(1)", () => {
      expect(countPrimesUpTo(1)).toEqual(0);
    });
  });

  describe("3.28 charFrequencyMap - Частота символів у рядку", () => {
    it("тест 1: charFrequencyMap(\"apple\")", () => {
      expect(charFrequencyMap("apple")).toEqual({"a":1,"p":2,"l":1,"e":1});
    });
    it("тест 2: charFrequencyMap(\"\")", () => {
      expect(charFrequencyMap("")).toEqual({});
    });
  });

  describe("3.29 chunkArrayFor - Розбиття масиву на чанки", () => {
    it("тест 1: chunkArrayFor([1, 2, 3, 4, 5], 2)", () => {
      expect(chunkArrayFor([1, 2, 3, 4, 5], 2)).toEqual([[1,2],[3,4],[5]]);
    });
    it("тест 2: chunkArrayFor([1, 2, 3], 3)", () => {
      expect(chunkArrayFor([1, 2, 3], 3)).toEqual([[1,2,3]]);
    });
    it("тест 3: chunkArrayFor([], 2)", () => {
      expect(chunkArrayFor([], 2)).toEqual([]);
    });
  });

  describe("3.30 powerSeriesSum - Сума степеневого ряду 1 + x + ... + x^n", () => {
    it("тест 1: powerSeriesSum(2, 3)", () => {
      expect(powerSeriesSum(2, 3)).toEqual(15);
    });
    it("тест 2: powerSeriesSum(3, 2)", () => {
      expect(powerSeriesSum(3, 2)).toEqual(13);
    });
    it("тест 3: powerSeriesSum(5, 0)", () => {
      expect(powerSeriesSum(5, 0)).toEqual(1);
    });
  });

});
