import { describe, it, expect } from "vitest";
import {
  findFirstDivisible,
  skipDivisibleByThree,
  findFirstNegativeIndexBreak,
  sumUntilNegative,
  filterNonNumericContinue,
  safeWhileCounter,
  searchUserInRecords,
  sumOddOnlyContinue,
  findTargetSumIndex,
  skipForbiddenWords,
  firstMultipleOfBoth,
  processBatchWithLimit,
  infiniteLoopBreaker,
  skipEveryThirdNumber,
  stopOnZeroMarker,
  filterSpamComments,
  findPrimeBreakEarly,
  accumulatePointsWithCap,
  skipWeekendDays,
  findFirstDuplicateAdjacent,
  parseCsvRowValues,
  safeNewtonSqrt,
  packetLossRetry,
  skipNullAndUndefined,
  findSecretCode
} from "../src/04-break-continue.js";

describe("Модуль 4: Оператори break, continue та захист від вічних циклів", () => {
  describe("4.1 findFirstDivisible - Перше кратне з раннім виходом (break)", () => {
    it("тест 1: findFirstDivisible(14, 5)", () => {
      expect(findFirstDivisible(14, 5)).toEqual(15);
    });
    it("тест 2: findFirstDivisible(20, 4)", () => {
      expect(findFirstDivisible(20, 4)).toEqual(20);
    });
    it("тест 3: findFirstDivisible(10, 0)", () => {
      expect(findFirstDivisible(10, 0)).toEqual(null);
    });
  });

  describe("4.2 skipDivisibleByThree - Сума чисел з пропуском кратних 3 (continue)", () => {
    it("тест 1: skipDivisibleByThree(6)", () => {
      expect(skipDivisibleByThree(6)).toEqual(12);
    });
    it("тест 2: skipDivisibleByThree(3)", () => {
      expect(skipDivisibleByThree(3)).toEqual(3);
    });
  });

  describe("4.3 findFirstNegativeIndexBreak - Пошук першого відʼємного з break", () => {
    it("тест 1: findFirstNegativeIndexBreak([4, 8, -5, 2, -1])", () => {
      expect(findFirstNegativeIndexBreak([4, 8, -5, 2, -1])).toEqual(2);
    });
    it("тест 2: findFirstNegativeIndexBreak([1, 2, 3])", () => {
      expect(findFirstNegativeIndexBreak([1, 2, 3])).toEqual(-1);
    });
  });

  describe("4.4 sumUntilNegative - Підсумовування до першого відʼємного числа", () => {
    it("тест 1: sumUntilNegative([5, 10, -2, 20])", () => {
      expect(sumUntilNegative([5, 10, -2, 20])).toEqual(15);
    });
    it("тест 2: sumUntilNegative([-1, 10])", () => {
      expect(sumUntilNegative([-1, 10])).toEqual(0);
    });
    it("тест 3: sumUntilNegative([1, 2, 3])", () => {
      expect(sumUntilNegative([1, 2, 3])).toEqual(6);
    });
  });

  describe("4.5 filterNonNumericContinue - Сума тільки числових значень (continue)", () => {
    it("тест 1: filterNonNumericContinue([10, \"text\", 20, null, 5, NaN])", () => {
      expect(filterNonNumericContinue([10, "text", 20, null, 5, NaN])).toEqual(35);
    });
    it("тест 2: filterNonNumericContinue([\"a\", \"b\"])", () => {
      expect(filterNonNumericContinue(["a", "b"])).toEqual(0);
    });
  });

  describe("4.6 safeWhileCounter - Запобіжник від зациклення (Watchdog Counter)", () => {
    it("тест 1: safeWhileCounter((() => { let c = 0; return () => ++c < 3; })(), 10)", () => {
      expect(safeWhileCounter((() => { let c = 0; return () => ++c < 3; })(), 10)).toEqual({"iterations":2,"timedOut":false});
    });
    it("тест 2: safeWhileCounter(() => true, 5)", () => {
      expect(safeWhileCounter(() => true, 5)).toEqual({"iterations":5,"timedOut":true});
    });
  });

  describe("4.7 searchUserInRecords - Пошук користувача за id з негайним break", () => {
    it("тест 1: searchUserInRecords([{ id: 1, name: \"Anna\" }, { id: 2, name: \"Bohdan\" }], 2)", () => {
      expect(searchUserInRecords([{ id: 1, name: "Anna" }, { id: 2, name: "Bohdan" }], 2)).toEqual({"id":2,"name":"Bohdan"});
    });
    it("тест 2: searchUserInRecords([{ id: 1 }], 99)", () => {
      expect(searchUserInRecords([{ id: 1 }], 99)).toEqual(null);
    });
  });

  describe("4.8 sumOddOnlyContinue - Сума лише непарних чисел через continue", () => {
    it("тест 1: sumOddOnlyContinue(5)", () => {
      expect(sumOddOnlyContinue(5)).toEqual(9);
    });
    it("тест 2: sumOddOnlyContinue(6)", () => {
      expect(sumOddOnlyContinue(6)).toEqual(9);
    });
  });

  describe("4.9 findTargetSumIndex - Індекс перевищення ліміту суми", () => {
    it("тест 1: findTargetSumIndex([10, 20, 30, 40], 55)", () => {
      expect(findTargetSumIndex([10, 20, 30, 40], 55)).toEqual(2);
    });
    it("тест 2: findTargetSumIndex([1, 2, 3], 100)", () => {
      expect(findTargetSumIndex([1, 2, 3], 100)).toEqual(-1);
    });
  });

  describe("4.10 skipForbiddenWords - Складання тексту з фільтром слів (continue)", () => {
    it("тест 1: skipForbiddenWords([\"Hello\", \"bad\", \"wonderful\", \"world\"], [\"bad\"])", () => {
      expect(skipForbiddenWords(["Hello", "bad", "wonderful", "world"], ["bad"])).toEqual("Hello wonderful world");
    });
    it("тест 2: skipForbiddenWords([\"test\", \"code\"], [\"test\", \"code\"])", () => {
      expect(skipForbiddenWords(["test", "code"], ["test", "code"])).toEqual("");
    });
  });

  describe("4.11 firstMultipleOfBoth - Перше спільне кратне через вічний цикл з break", () => {
    it("тест 1: firstMultipleOfBoth(4, 6)", () => {
      expect(firstMultipleOfBoth(4, 6)).toEqual(12);
    });
    it("тест 2: firstMultipleOfBoth(3, 5)", () => {
      expect(firstMultipleOfBoth(3, 5)).toEqual(15);
    });
  });

  describe("4.12 processBatchWithLimit - Обробка платежів до вичерпання ліміту", () => {
    it("тест 1: processBatchWithLimit([100, 250, 300, 50], 400)", () => {
      expect(processBatchWithLimit([100, 250, 300, 50], 400)).toEqual({"count":2,"total":350});
    });
    it("тест 2: processBatchWithLimit([500], 200)", () => {
      expect(processBatchWithLimit([500], 200)).toEqual({"count":0,"total":0});
    });
  });

  describe("4.13 infiniteLoopBreaker - Аварійний обрив циклу за лічильником кроків", () => {
    it("тест 1: infiniteLoopBreaker(10)", () => {
      expect(infiniteLoopBreaker(10)).toEqual(10);
    });
    it("тест 2: infiniteLoopBreaker(1)", () => {
      expect(infiniteLoopBreaker(1)).toEqual(1);
    });
  });

  describe("4.14 skipEveryThirdNumber - Пропуск кожного третього числа (continue)", () => {
    it("тест 1: skipEveryThirdNumber(8)", () => {
      expect(skipEveryThirdNumber(8)).toEqual([1,2,4,5,7,8]);
    });
    it("тест 2: skipEveryThirdNumber(3)", () => {
      expect(skipEveryThirdNumber(3)).toEqual([1,2]);
    });
  });

  describe("4.15 stopOnZeroMarker - Збір даних до стоп-маркера 0", () => {
    it("тест 1: stopOnZeroMarker([4, 8, 15, 0, 16, 23])", () => {
      expect(stopOnZeroMarker([4, 8, 15, 0, 16, 23])).toEqual([4,8,15]);
    });
    it("тест 2: stopOnZeroMarker([0, 1, 2])", () => {
      expect(stopOnZeroMarker([0, 1, 2])).toEqual([]);
    });
  });

  describe("4.16 filterSpamComments - Модерація коментарів через continue", () => {
    it("тест 1: filterSpamComments([\"Nice post\", \"Buy crypto now!\", \"Great guide\"], \"crypto\")", () => {
      expect(filterSpamComments(["Nice post", "Buy crypto now!", "Great guide"], "crypto")).toEqual(["Nice post","Great guide"]);
    });
    it("тест 2: filterSpamComments([\"All fine\"], \"spam\")", () => {
      expect(filterSpamComments(["All fine"], "spam")).toEqual(["All fine"]);
    });
  });

  describe("4.17 findPrimeBreakEarly - Перевірка простоти з раннім виходом (break)", () => {
    it("тест 1: findPrimeBreakEarly(29)", () => {
      expect(findPrimeBreakEarly(29)).toEqual(true);
    });
    it("тест 2: findPrimeBreakEarly(35)", () => {
      expect(findPrimeBreakEarly(35)).toEqual(false);
    });
    it("тест 3: findPrimeBreakEarly(1)", () => {
      expect(findPrimeBreakEarly(1)).toEqual(false);
    });
  });

  describe("4.18 accumulatePointsWithCap - Нарахування балів з обмеженням стелі (Cap)", () => {
    it("тест 1: accumulatePointsWithCap([10, 20, 30, 40], 50)", () => {
      expect(accumulatePointsWithCap([10, 20, 30, 40], 50)).toEqual(50);
    });
    it("тест 2: accumulatePointsWithCap([10, 15], 50)", () => {
      expect(accumulatePointsWithCap([10, 15], 50)).toEqual(25);
    });
  });

  describe("4.19 skipWeekendDays - Облік робочих днів (пропуск 6 і 7 через continue)", () => {
    it("тест 1: skipWeekendDays([{ day: 1, hours: 8 }, { day: 6, hours: 4 }, { day: 3, hours: 7 }])", () => {
      expect(skipWeekendDays([{ day: 1, hours: 8 }, { day: 6, hours: 4 }, { day: 3, hours: 7 }])).toEqual(15);
    });
    it("тест 2: skipWeekendDays([{ day: 7, hours: 5 }])", () => {
      expect(skipWeekendDays([{ day: 7, hours: 5 }])).toEqual(0);
    });
  });

  describe("4.20 findFirstDuplicateAdjacent - Пошук першої пари однакових сусідів", () => {
    it("тест 1: findFirstDuplicateAdjacent([1, 2, 2, 3, 4])", () => {
      expect(findFirstDuplicateAdjacent([1, 2, 2, 3, 4])).toEqual(2);
    });
    it("тест 2: findFirstDuplicateAdjacent([\"a\", \"b\", \"c\", \"c\"])", () => {
      expect(findFirstDuplicateAdjacent(["a", "b", "c", "c"])).toEqual("c");
    });
    it("тест 3: findFirstDuplicateAdjacent([1, 2, 3])", () => {
      expect(findFirstDuplicateAdjacent([1, 2, 3])).toEqual(null);
    });
  });

  describe("4.21 parseCsvRowValues - Парсинг CSV значень з лімітом колонок (break)", () => {
    it("тест 1: parseCsvRowValues(\"id, name, email, role, date\", 3)", () => {
      expect(parseCsvRowValues("id, name, email, role, date", 3)).toEqual(["id","name","email"]);
    });
    it("тест 2: parseCsvRowValues(\"a, b\", 5)", () => {
      expect(parseCsvRowValues("a, b", 5)).toEqual(["a","b"]);
    });
  });

  describe("4.22 safeNewtonSqrt - Квадратний корінь методом Ньютона з лімітом ітерацій", () => {
    it("тест 1: safeNewtonSqrt(25, 20, 0.0001)", () => {
      expect(safeNewtonSqrt(25, 20, 0.0001)).toEqual(5);
    });
    it("тест 2: safeNewtonSqrt(2, 20, 0.0001)", () => {
      expect(safeNewtonSqrt(2, 20, 0.0001)).toEqual(1.414);
    });
    it("тест 3: safeNewtonSqrt(-4, 10, 0.01)", () => {
      expect(safeNewtonSqrt(-4, 10, 0.01)).toEqual(null);
    });
  });

  describe("4.23 packetLossRetry - Повторні спроби передачі пакетів з break", () => {
    it("тест 1: packetLossRetry([\"DROP\", \"DROP\", \"SUCCESS\", \"DROP\"])", () => {
      expect(packetLossRetry(["DROP", "DROP", "SUCCESS", "DROP"])).toEqual({"delivered":true,"attempts":3});
    });
    it("тест 2: packetLossRetry([\"DROP\", \"DROP\"])", () => {
      expect(packetLossRetry(["DROP", "DROP"])).toEqual({"delivered":false,"attempts":2});
    });
  });

  describe("4.24 skipNullAndUndefined - Фільтрація null та undefined через continue", () => {
    it("тест 1: skipNullAndUndefined([1, null, 2, undefined, 0, false, \"\"])", () => {
      expect(skipNullAndUndefined([1, null, 2, undefined, 0, false, ""])).toEqual([1,2,0,false,""]);
    });
    it("тест 2: skipNullAndUndefined([null, undefined])", () => {
      expect(skipNullAndUndefined([null, undefined])).toEqual([]);
    });
  });

  describe("4.25 findSecretCode - Пошук секретного токена з префіксом (break)", () => {
    it("тест 1: findSecretCode([\"tok_abc\", \"SEC_999\", \"tok_xyz\"], \"SEC_\")", () => {
      expect(findSecretCode(["tok_abc", "SEC_999", "tok_xyz"], "SEC_")).toEqual("SEC_999");
    });
    it("тест 2: findSecretCode([\"a\", \"b\"], \"x_\")", () => {
      expect(findSecretCode(["a", "b"], "x_")).toEqual(null);
    });
  });

});
