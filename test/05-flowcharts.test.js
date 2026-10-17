import { describe, it, expect } from "vitest";
import {
  flowchartPreconditionLoop,
  flowchartPostconditionLoop,
  flowchartCounterHexagon,
  flowchartLoopWithBranch,
  flowchartBreakBranch,
  flowchartContinueBranch,
  flowchartEuclidGcd,
  flowchartLinearSearch,
  flowchartSumAccumulator,
  flowchartFactorial,
  flowchartPrimeCheck,
  flowchartArrayMax,
  flowchartBinarySearchTrace,
  flowchartCountMatches,
  flowchartDigitReversal,
  flowchartMinPositive,
  flowchartRunningAverage,
  flowchartNestedGridTrace,
  flowchartStringCompress,
  flowchartWatchdogSafeLoop
} from "../src/05-flowcharts.js";

describe("Модуль 5: Позначення циклів у блок-схемах", () => {
  describe("5.1 flowchartPreconditionLoop - Моделювання блок-схеми циклу з передумовою", () => {
    it("тест 1: flowchartPreconditionLoop(3)", () => {
      expect(flowchartPreconditionLoop(3)).toEqual([0,1,2]);
    });
    it("тест 2: flowchartPreconditionLoop(0)", () => {
      expect(flowchartPreconditionLoop(0)).toEqual([]);
    });
    it("тест 3: flowchartPreconditionLoop(1)", () => {
      expect(flowchartPreconditionLoop(1)).toEqual([0]);
    });
  });

  describe("5.2 flowchartPostconditionLoop - Моделювання блок-схеми циклу з післяумовою", () => {
    it("тест 1: flowchartPostconditionLoop(3)", () => {
      expect(flowchartPostconditionLoop(3)).toEqual({"iterationsCount":3,"finalValue":3});
    });
    it("тест 2: flowchartPostconditionLoop(-1)", () => {
      expect(flowchartPostconditionLoop(-1)).toEqual({"iterationsCount":1,"finalValue":1});
    });
    it("тест 3: flowchartPostconditionLoop(0)", () => {
      expect(flowchartPostconditionLoop(0)).toEqual({"iterationsCount":1,"finalValue":1});
    });
  });

  describe("5.3 flowchartCounterHexagon - Блок підготовки циклу (шестикутник)", () => {
    it("тест 1: flowchartCounterHexagon(1, 10, 3)", () => {
      expect(flowchartCounterHexagon(1, 10, 3)).toEqual([1,4,7,10]);
    });
    it("тест 2: flowchartCounterHexagon(5, 5, 1)", () => {
      expect(flowchartCounterHexagon(5, 5, 1)).toEqual([5]);
    });
    it("тест 3: flowchartCounterHexagon(10, 2, 2)", () => {
      expect(flowchartCounterHexagon(10, 2, 2)).toEqual([]);
    });
  });

  describe("5.4 flowchartLoopWithBranch - Розгалуження всередині циклу на блок-схемі", () => {
    it("тест 1: flowchartLoopWithBranch([1, 2, 3, 4, 5])", () => {
      expect(flowchartLoopWithBranch([1, 2, 3, 4, 5])).toEqual({"sumEven":6,"sumOdd":9});
    });
    it("тест 2: flowchartLoopWithBranch([])", () => {
      expect(flowchartLoopWithBranch([])).toEqual({"sumEven":0,"sumOdd":0});
    });
    it("тест 3: flowchartLoopWithBranch([2, 4, 6])", () => {
      expect(flowchartLoopWithBranch([2, 4, 6])).toEqual({"sumEven":12,"sumOdd":0});
    });
  });

  describe("5.5 flowchartBreakBranch - Гілка дострокового виходу (break) у блок-схемі", () => {
    it("тест 1: flowchartBreakBranch([\"apple\", \"banana\", \"kiwi\"], \"banana\")", () => {
      expect(flowchartBreakBranch(["apple", "banana", "kiwi"], "banana")).toEqual(1);
    });
    it("тест 2: flowchartBreakBranch([10, 20, 30], 40)", () => {
      expect(flowchartBreakBranch([10, 20, 30], 40)).toEqual(-1);
    });
    it("тест 3: flowchartBreakBranch([5, 5, 5], 5)", () => {
      expect(flowchartBreakBranch([5, 5, 5], 5)).toEqual(0);
    });
  });

  describe("5.6 flowchartContinueBranch - Гілка пропуску (continue) у блок-схемі", () => {
    it("тест 1: flowchartContinueBranch([10, -5, 20, -1, 5])", () => {
      expect(flowchartContinueBranch([10, -5, 20, -1, 5])).toEqual(35);
    });
    it("тест 2: flowchartContinueBranch([-2, -4])", () => {
      expect(flowchartContinueBranch([-2, -4])).toEqual(0);
    });
    it("тест 3: flowchartContinueBranch([1, 2, 3])", () => {
      expect(flowchartContinueBranch([1, 2, 3])).toEqual(6);
    });
  });

  describe("5.7 flowchartEuclidGcd - Алгоритм Евкліда за блок-схемою", () => {
    it("тест 1: flowchartEuclidGcd(48, 18)", () => {
      expect(flowchartEuclidGcd(48, 18)).toEqual(6);
    });
    it("тест 2: flowchartEuclidGcd(100, 25)", () => {
      expect(flowchartEuclidGcd(100, 25)).toEqual(25);
    });
    it("тест 3: flowchartEuclidGcd(13, 7)", () => {
      expect(flowchartEuclidGcd(13, 7)).toEqual(1);
    });
  });

  describe("5.8 flowchartLinearSearch - Лінійний пошук за схемою алгоритму", () => {
    it("тест 1: flowchartLinearSearch([10, 20, 30, 40], 30)", () => {
      expect(flowchartLinearSearch([10, 20, 30, 40], 30)).toEqual({"found":true,"index":2,"steps":3});
    });
    it("тест 2: flowchartLinearSearch([10, 20], 99)", () => {
      expect(flowchartLinearSearch([10, 20], 99)).toEqual({"found":false,"index":-1,"steps":2});
    });
    it("тест 3: flowchartLinearSearch([], 5)", () => {
      expect(flowchartLinearSearch([], 5)).toEqual({"found":false,"index":-1,"steps":0});
    });
  });

  describe("5.9 flowchartSumAccumulator - Блок-схема накопичувача суми", () => {
    it("тест 1: flowchartSumAccumulator(4)", () => {
      expect(flowchartSumAccumulator(4)).toEqual(10);
    });
    it("тест 2: flowchartSumAccumulator(1)", () => {
      expect(flowchartSumAccumulator(1)).toEqual(1);
    });
    it("тест 3: flowchartSumAccumulator(0)", () => {
      expect(flowchartSumAccumulator(0)).toEqual(0);
    });
  });

  describe("5.10 flowchartFactorial - Блок-схема обчислення факторіалу", () => {
    it("тест 1: flowchartFactorial(5)", () => {
      expect(flowchartFactorial(5)).toEqual(120);
    });
    it("тест 2: flowchartFactorial(0)", () => {
      expect(flowchartFactorial(0)).toEqual(1);
    });
    it("тест 3: flowchartFactorial(3)", () => {
      expect(flowchartFactorial(3)).toEqual(6);
    });
  });

  describe("5.11 flowchartPrimeCheck - Блок-схема перевірки простого числа", () => {
    it("тест 1: flowchartPrimeCheck(17)", () => {
      expect(flowchartPrimeCheck(17)).toEqual(true);
    });
    it("тест 2: flowchartPrimeCheck(18)", () => {
      expect(flowchartPrimeCheck(18)).toEqual(false);
    });
    it("тест 3: flowchartPrimeCheck(1)", () => {
      expect(flowchartPrimeCheck(1)).toEqual(false);
    });
    it("тест 4: flowchartPrimeCheck(2)", () => {
      expect(flowchartPrimeCheck(2)).toEqual(true);
    });
  });

  describe("5.12 flowchartArrayMax - Блок-схема пошуку максимуму в масиві", () => {
    it("тест 1: flowchartArrayMax([3, 7, 2, 9, 4])", () => {
      expect(flowchartArrayMax([3, 7, 2, 9, 4])).toEqual(9);
    });
    it("тест 2: flowchartArrayMax([-10, -5, -20])", () => {
      expect(flowchartArrayMax([-10, -5, -20])).toEqual(-5);
    });
    it("тест 3: flowchartArrayMax([])", () => {
      expect(flowchartArrayMax([])).toEqual(null);
    });
  });

  describe("5.13 flowchartBinarySearchTrace - Блок-схема бінарного пошуку з журналом", () => {
    it("тест 1: flowchartBinarySearchTrace([10, 20, 30, 40, 50, 60, 70], 40)", () => {
      expect(flowchartBinarySearchTrace([10, 20, 30, 40, 50, 60, 70], 40)).toEqual({"found":true,"trace":[3]});
    });
    it("тест 2: flowchartBinarySearchTrace([10, 20, 30, 40, 50, 60, 70], 60)", () => {
      expect(flowchartBinarySearchTrace([10, 20, 30, 40, 50, 60, 70], 60)).toEqual({"found":true,"trace":[3,5]});
    });
    it("тест 3: flowchartBinarySearchTrace([1, 2, 3], 99)", () => {
      expect(flowchartBinarySearchTrace([1, 2, 3], 99)).toEqual({"found":false,"trace":[1,2]});
    });
  });

  describe("5.14 flowchartCountMatches - Блок-схема лічильника відповідностей", () => {
    it("тест 1: flowchartCountMatches([5, 12, 8, 20, 3], 10)", () => {
      expect(flowchartCountMatches([5, 12, 8, 20, 3], 10)).toEqual(2);
    });
    it("тест 2: flowchartCountMatches([1, 2, 3], 10)", () => {
      expect(flowchartCountMatches([1, 2, 3], 10)).toEqual(0);
    });
    it("тест 3: flowchartCountMatches([15, 25], 5)", () => {
      expect(flowchartCountMatches([15, 25], 5)).toEqual(2);
    });
  });

  describe("5.15 flowchartDigitReversal - Блок-схема реверсу числа через розряди", () => {
    it("тест 1: flowchartDigitReversal(1234)", () => {
      expect(flowchartDigitReversal(1234)).toEqual(4321);
    });
    it("тест 2: flowchartDigitReversal(9050)", () => {
      expect(flowchartDigitReversal(9050)).toEqual(509);
    });
    it("тест 3: flowchartDigitReversal(7)", () => {
      expect(flowchartDigitReversal(7)).toEqual(7);
    });
  });

  describe("5.16 flowchartMinPositive - Блок-схема пошуку мінімального додатного числа", () => {
    it("тест 1: flowchartMinPositive([-5, 12, 3, -1, 7])", () => {
      expect(flowchartMinPositive([-5, 12, 3, -1, 7])).toEqual(3);
    });
    it("тест 2: flowchartMinPositive([-1, -10])", () => {
      expect(flowchartMinPositive([-1, -10])).toEqual(null);
    });
    it("тест 3: flowchartMinPositive([4, 1, 9])", () => {
      expect(flowchartMinPositive([4, 1, 9])).toEqual(1);
    });
  });

  describe("5.17 flowchartRunningAverage - Блок-схема обчислення змінного середнього", () => {
    it("тест 1: flowchartRunningAverage([10, 20, 30])", () => {
      expect(flowchartRunningAverage([10, 20, 30])).toEqual([10,15,20]);
    });
    it("тест 2: flowchartRunningAverage([5, 10, 15, 20])", () => {
      expect(flowchartRunningAverage([5, 10, 15, 20])).toEqual([5,7.5,10,12.5]);
    });
    it("тест 3: flowchartRunningAverage([])", () => {
      expect(flowchartRunningAverage([])).toEqual([]);
    });
  });

  describe("5.18 flowchartNestedGridTrace - Блок-схема двох вкладених шестикутників", () => {
    it("тест 1: flowchartNestedGridTrace(2, 2)", () => {
      expect(flowchartNestedGridTrace(2, 2)).toEqual(["0:0","0:1","1:0","1:1"]);
    });
    it("тест 2: flowchartNestedGridTrace(1, 3)", () => {
      expect(flowchartNestedGridTrace(1, 3)).toEqual(["0:0","0:1","0:2"]);
    });
    it("тест 3: flowchartNestedGridTrace(0, 2)", () => {
      expect(flowchartNestedGridTrace(0, 2)).toEqual([]);
    });
  });

  describe("5.19 flowchartStringCompress - Блок-схема Run-Length стиснення рядка", () => {
    it("тест 1: flowchartStringCompress(\"aaabbc\")", () => {
      expect(flowchartStringCompress("aaabbc")).toEqual("a3b2c1");
    });
    it("тест 2: flowchartStringCompress(\"abcd\")", () => {
      expect(flowchartStringCompress("abcd")).toEqual("a1b1c1d1");
    });
    it("тест 3: flowchartStringCompress(\"\")", () => {
      expect(flowchartStringCompress("")).toEqual("");
    });
  });

  describe("5.20 flowchartWatchdogSafeLoop - Блок-схема циклу із запобіжником Watchdog", () => {
    it("тест 1: flowchartWatchdogSafeLoop(4, 10)", () => {
      expect(flowchartWatchdogSafeLoop(4, 10)).toEqual({"safeExit":true,"value":1,"ticks":2});
    });
    it("тест 2: flowchartWatchdogSafeLoop(27, 5)", () => {
      expect(flowchartWatchdogSafeLoop(27, 5)).toEqual({"safeExit":false,"value":31,"ticks":5});
    });
    it("тест 3: flowchartWatchdogSafeLoop(1, 10)", () => {
      expect(flowchartWatchdogSafeLoop(1, 10)).toEqual({"safeExit":true,"value":1,"ticks":0});
    });
  });

});
