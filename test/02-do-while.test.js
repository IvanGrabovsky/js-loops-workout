import { describe, it, expect } from "vitest";
import {
  doWhileAtLeastOnce,
  collectInputUntilZero,
  diceRollSimulation,
  pinCodeAttempts,
  exponentialGrowthThreshold,
  retryNetworkOperation,
  batteryDrainSimulation,
  atmMenuNavigation,
  stringAccumulateLength,
  stepByStepApproximation,
  coffeeMachineBrew,
  randomWalkSim,
  auctionBidStep,
  paginateDataDoWhile,
  coolingSystemCycle,
  elevatorMove,
  gameBossHitPoints,
  trainSpeedBraking,
  creditRepaymentMonths,
  downloadBufferChunks,
  cardDeckDraw,
  printerQueueProcess,
  countdownDoWhile,
  passwordGeneratorLength,
  assemblyLineInspector
} from "../src/02-do-while.js";

describe("Модуль 2: Цикл do...while (гарантоване перше виконання)", () => {
  describe("2.1 doWhileAtLeastOnce - Гарантоване виконання мінімум один раз", () => {
    it("тест 1: doWhileAtLeastOnce(10)", () => {
      expect(doWhileAtLeastOnce(10)).toEqual(11);
    });
    it("тест 2: doWhileAtLeastOnce(0)", () => {
      expect(doWhileAtLeastOnce(0)).toEqual(1);
    });
    it("тест 3: doWhileAtLeastOnce(-3)", () => {
      expect(doWhileAtLeastOnce(-3)).toEqual(0);
    });
  });

  describe("2.2 collectInputUntilZero - Збір елементів масиву до нуля", () => {
    it("тест 1: collectInputUntilZero([5, 8, 2, 0, 9])", () => {
      expect(collectInputUntilZero([5, 8, 2, 0, 9])).toEqual([5,8,2]);
    });
    it("тест 2: collectInputUntilZero([0, 10, 20])", () => {
      expect(collectInputUntilZero([0, 10, 20])).toEqual([]);
    });
    it("тест 3: collectInputUntilZero([1, 2, 3])", () => {
      expect(collectInputUntilZero([1, 2, 3])).toEqual([1,2,3]);
    });
  });

  describe("2.3 diceRollSimulation - Симуляція кидків кубика до 6", () => {
    it("тест 1: diceRollSimulation([2, 4, 1, 6, 3])", () => {
      expect(diceRollSimulation([2, 4, 1, 6, 3])).toEqual(4);
    });
    it("тест 2: diceRollSimulation([6, 1, 2])", () => {
      expect(diceRollSimulation([6, 1, 2])).toEqual(1);
    });
    it("тест 3: diceRollSimulation([3, 5])", () => {
      expect(diceRollSimulation([3, 5])).toEqual(2);
    });
  });

  describe("2.4 pinCodeAttempts - Перевірка PIN-коду з лімітом 3 спроб", () => {
    it("тест 1: pinCodeAttempts([\"1111\", \"2222\", \"1234\"], \"1234\")", () => {
      expect(pinCodeAttempts(["1111", "2222", "1234"], "1234")).toEqual({"unlocked":true,"attemptsUsed":3});
    });
    it("тест 2: pinCodeAttempts([\"1234\", \"0000\"], \"1234\")", () => {
      expect(pinCodeAttempts(["1234", "0000"], "1234")).toEqual({"unlocked":true,"attemptsUsed":1});
    });
    it("тест 3: pinCodeAttempts([\"9999\", \"8888\", \"7777\", \"1234\"], \"1234\")", () => {
      expect(pinCodeAttempts(["9999", "8888", "7777", "1234"], "1234")).toEqual({"unlocked":false,"attemptsUsed":3});
    });
  });

  describe("2.5 exponentialGrowthThreshold - Експоненційне зростання популяції", () => {
    it("тест 1: exponentialGrowthThreshold(10, 2, 50)", () => {
      expect(exponentialGrowthThreshold(10, 2, 50)).toEqual(3);
    });
    it("тест 2: exponentialGrowthThreshold(100, 2, 50)", () => {
      expect(exponentialGrowthThreshold(100, 2, 50)).toEqual(1);
    });
    it("тест 3: exponentialGrowthThreshold(5, 3, 40)", () => {
      expect(exponentialGrowthThreshold(5, 3, 40)).toEqual(2);
    });
  });

  describe("2.6 retryNetworkOperation - Повторні спроби мережевого запиту (Retry)", () => {
    it("тест 1: retryNetworkOperation([500, 502, 200], 3)", () => {
      expect(retryNetworkOperation([500, 502, 200], 3)).toEqual({"success":true,"retriesDone":3});
    });
    it("тест 2: retryNetworkOperation([200], 3)", () => {
      expect(retryNetworkOperation([200], 3)).toEqual({"success":true,"retriesDone":1});
    });
    it("тест 3: retryNetworkOperation([503, 503, 503, 200], 3)", () => {
      expect(retryNetworkOperation([503, 503, 503, 200], 3)).toEqual({"success":false,"retriesDone":3});
    });
  });

  describe("2.7 batteryDrainSimulation - Симуляція розряду акумулятора", () => {
    it("тест 1: batteryDrainSimulation(25, 10)", () => {
      expect(batteryDrainSimulation(25, 10)).toEqual([15,5,0]);
    });
    it("тест 2: batteryDrainSimulation(5, 10)", () => {
      expect(batteryDrainSimulation(5, 10)).toEqual([0]);
    });
  });

  describe("2.8 atmMenuNavigation - Обробка дій меню банкомата", () => {
    it("тест 1: atmMenuNavigation([\"BALANCE\", \"WITHDRAW\", \"EXIT\", \"PRINT\"])", () => {
      expect(atmMenuNavigation(["BALANCE", "WITHDRAW", "EXIT", "PRINT"])).toEqual(2);
    });
    it("тест 2: atmMenuNavigation([\"EXIT\"])", () => {
      expect(atmMenuNavigation(["EXIT"])).toEqual(0);
    });
  });

  describe("2.9 stringAccumulateLength - Нарощування рядка суфіксом до ліміту довжини", () => {
    it("тест 1: stringAccumulateLength(\"hi\", \"!\", 5)", () => {
      expect(stringAccumulateLength("hi", "!", 5)).toEqual("hi!!!");
    });
    it("тест 2: stringAccumulateLength(\"longtext\", \"*\", 5)", () => {
      expect(stringAccumulateLength("longtext", "*", 5)).toEqual("longtext*");
    });
  });

  describe("2.10 stepByStepApproximation - Покрокове наближення до цільового значення", () => {
    it("тест 1: stepByStepApproximation(0, 10, 4)", () => {
      expect(stepByStepApproximation(0, 10, 4)).toEqual(10);
    });
    it("тест 2: stepByStepApproximation(15, 5, 5)", () => {
      expect(stepByStepApproximation(15, 5, 5)).toEqual(5);
    });
  });

  describe("2.11 coffeeMachineBrew - Дозування води кавомашиною", () => {
    it("тест 1: coffeeMachineBrew(180, 50)", () => {
      expect(coffeeMachineBrew(180, 50)).toEqual({"portions":4,"totalMl":200});
    });
    it("тест 2: coffeeMachineBrew(40, 50)", () => {
      expect(coffeeMachineBrew(40, 50)).toEqual({"portions":1,"totalMl":50});
    });
  });

  describe("2.12 randomWalkSim - Блукання частинки до барʼєру", () => {
    it("тест 1: randomWalkSim([1, 2, -1, 3], 3)", () => {
      expect(randomWalkSim([1, 2, -1, 3], 3)).toEqual(3);
    });
    it("тест 2: randomWalkSim([-2, -3], 4)", () => {
      expect(randomWalkSim([-2, -3], 4)).toEqual(-5);
    });
  });

  describe("2.13 auctionBidStep - Підвищення ставки на аукціоні", () => {
    it("тест 1: auctionBidStep(100, 25, 170)", () => {
      expect(auctionBidStep(100, 25, 170)).toEqual(175);
    });
    it("тест 2: auctionBidStep(200, 50, 150)", () => {
      expect(auctionBidStep(200, 50, 150)).toEqual(250);
    });
  });

  describe("2.14 paginateDataDoWhile - Пагінація сторінок з API", () => {
    it("тест 1: paginateDataDoWhile([[\"a\", \"b\"], [\"c\", \"d\"], [\"e\"]], 2)", () => {
      expect(paginateDataDoWhile([["a", "b"], ["c", "d"], ["e"]], 2)).toEqual(["a","b","c","d"]);
    });
    it("тест 2: paginateDataDoWhile([[\"item1\"]], 1)", () => {
      expect(paginateDataDoWhile([["item1"]], 1)).toEqual(["item1"]);
    });
  });

  describe("2.15 coolingSystemCycle - Охолодження двигуна циклами", () => {
    it("тест 1: coolingSystemCycle(95, 70, 10)", () => {
      expect(coolingSystemCycle(95, 70, 10)).toEqual(3);
    });
    it("тест 2: coolingSystemCycle(68, 70, 5)", () => {
      expect(coolingSystemCycle(68, 70, 5)).toEqual(1);
    });
  });

  describe("2.16 elevatorMove - Рух ліфта поверхами", () => {
    it("тест 1: elevatorMove(1, 4)", () => {
      expect(elevatorMove(1, 4)).toEqual([2,3,4]);
    });
    it("тест 2: elevatorMove(5, 3)", () => {
      expect(elevatorMove(5, 3)).toEqual([4,3]);
    });
    it("тест 3: elevatorMove(2, 2)", () => {
      expect(elevatorMove(2, 2)).toEqual([2]);
    });
  });

  describe("2.17 gameBossHitPoints - Бій з босом до перемоги", () => {
    it("тест 1: gameBossHitPoints(100, 35)", () => {
      expect(gameBossHitPoints(100, 35)).toEqual(3);
    });
    it("тест 2: gameBossHitPoints(10, 50)", () => {
      expect(gameBossHitPoints(10, 50)).toEqual(1);
    });
  });

  describe("2.18 trainSpeedBraking - Плавне гальмування потяга", () => {
    it("тест 1: trainSpeedBraking(60, 25)", () => {
      expect(trainSpeedBraking(60, 25)).toEqual([35,10,0]);
    });
    it("тест 2: trainSpeedBraking(20, 30)", () => {
      expect(trainSpeedBraking(20, 30)).toEqual([0]);
    });
  });

  describe("2.19 creditRepaymentMonths - Погашення кредиту фіксованим платежем", () => {
    it("тест 1: creditRepaymentMonths(1000, 300)", () => {
      expect(creditRepaymentMonths(1000, 300)).toEqual(4);
    });
    it("тест 2: creditRepaymentMonths(200, 500)", () => {
      expect(creditRepaymentMonths(200, 500)).toEqual(1);
    });
  });

  describe("2.20 downloadBufferChunks - Завантаження файлу чанками", () => {
    it("тест 1: downloadBufferChunks(150, 60)", () => {
      expect(downloadBufferChunks(150, 60)).toEqual([90,30,0]);
    });
    it("тест 2: downloadBufferChunks(40, 50)", () => {
      expect(downloadBufferChunks(40, 50)).toEqual([0]);
    });
  });

  describe("2.21 cardDeckDraw - Витягування карт до туза", () => {
    it("тест 1: cardDeckDraw([\"10\", \"K\", \"A\", \"7\"])", () => {
      expect(cardDeckDraw(["10", "K", "A", "7"])).toEqual(3);
    });
    it("тест 2: cardDeckDraw([\"A\"])", () => {
      expect(cardDeckDraw(["A"])).toEqual(1);
    });
    it("тест 3: cardDeckDraw([\"Q\", \"J\"])", () => {
      expect(cardDeckDraw(["Q", "J"])).toEqual(2);
    });
  });

  describe("2.22 printerQueueProcess - Друк завдань з черги", () => {
    it("тест 1: printerQueueProcess([10, 25, 5])", () => {
      expect(printerQueueProcess([10, 25, 5])).toEqual(40);
    });
    it("тест 2: printerQueueProcess([7])", () => {
      expect(printerQueueProcess([7])).toEqual(7);
    });
    it("тест 3: printerQueueProcess([])", () => {
      expect(printerQueueProcess([])).toEqual(0);
    });
  });

  describe("2.23 countdownDoWhile - Таймер зворотного відліку з фінальним нулем", () => {
    it("тест 1: countdownDoWhile(3)", () => {
      expect(countdownDoWhile(3)).toEqual([3,2,1,0]);
    });
    it("тест 2: countdownDoWhile(0)", () => {
      expect(countdownDoWhile(0)).toEqual([0]);
    });
  });

  describe("2.24 passwordGeneratorLength - Генерація рядка циклічним додаванням символів", () => {
    it("тест 1: passwordGeneratorLength(\"abc\", 7)", () => {
      expect(passwordGeneratorLength("abc", 7)).toEqual("abcabca");
    });
    it("тест 2: passwordGeneratorLength(\"x\", 3)", () => {
      expect(passwordGeneratorLength("x", 3)).toEqual("xxx");
    });
  });

  describe("2.25 assemblyLineInspector - Інспекція конвеєра до першого дефекту", () => {
    it("тест 1: assemblyLineInspector([\"OK\", \"OK\", \"DEFECT\", \"OK\"])", () => {
      expect(assemblyLineInspector(["OK", "OK", "DEFECT", "OK"])).toEqual({"inspectedCount":3,"passedAll":false});
    });
    it("тест 2: assemblyLineInspector([\"OK\", \"OK\"])", () => {
      expect(assemblyLineInspector(["OK", "OK"])).toEqual({"inspectedCount":2,"passedAll":true});
    });
  });

});
