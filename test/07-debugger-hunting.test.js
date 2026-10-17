import { describe, it, expect } from "vitest";
import {
  fixOffByOneSum,
  fixInfiniteWhileIncrement,
  fixBreakPlacement,
  fixArrayMutationDuringLoop,
  fixVariableShadowingNested,
  fixInitialAccumulatorValue,
  fixDoWhileCondition,
  fixContinueSkippingIncrement,
  simulateCallStackDepth,
  traceScopeWatchVariables,
  fixStringIndexOutOfBounds,
  conditionalBreakpointFilter,
  fixReferenceVsValueObjectInLoop,
  detectDeadCodeAfterReturnInLoop,
  fixFloatingPointStepLoop
} from "../src/07-debugger-hunting.js";

describe("Модуль 7: Робота з відлагоджувачем (Debugger & DevTools)", () => {
  describe("7.1 fixOffByOneSum - Виправлення помилки Off-by-one у лічильнику", () => {
    it("тест 1: fixOffByOneSum(3)", () => {
      expect(fixOffByOneSum(3)).toEqual(6);
    });
    it("тест 2: fixOffByOneSum(5)", () => {
      expect(fixOffByOneSum(5)).toEqual(15);
    });
    it("тест 3: fixOffByOneSum(0)", () => {
      expect(fixOffByOneSum(0)).toEqual(0);
    });
  });

  describe("7.2 fixInfiniteWhileIncrement - Виправлення вічного циклу через забутий інкремент", () => {
    it("тест 1: fixInfiniteWhileIncrement(3)", () => {
      expect(fixInfiniteWhileIncrement(3)).toEqual([0,1,2]);
    });
    it("тест 2: fixInfiniteWhileIncrement(0)", () => {
      expect(fixInfiniteWhileIncrement(0)).toEqual([]);
    });
    it("тест 3: fixInfiniteWhileIncrement(1)", () => {
      expect(fixInfiniteWhileIncrement(1)).toEqual([0]);
    });
  });

  describe("7.3 fixBreakPlacement - Виправлення передчасного break", () => {
    it("тест 1: fixBreakPlacement([10, 20, 30], 30)", () => {
      expect(fixBreakPlacement([10, 20, 30], 30)).toEqual(2);
    });
    it("тест 2: fixBreakPlacement([10, 20, 30], 99)", () => {
      expect(fixBreakPlacement([10, 20, 30], 99)).toEqual(-1);
    });
    it("тест 3: fixBreakPlacement([5], 5)", () => {
      expect(fixBreakPlacement([5], 5)).toEqual(0);
    });
  });

  describe("7.4 fixArrayMutationDuringLoop - Мутація довжини масиву під час прямої ітерації", () => {
    it("тест 1: fixArrayMutationDuringLoop([2, 4, 6, 7])", () => {
      expect(fixArrayMutationDuringLoop([2, 4, 6, 7])).toEqual([7]);
    });
    it("тест 2: fixArrayMutationDuringLoop([1, 2, 3, 4, 5])", () => {
      expect(fixArrayMutationDuringLoop([1, 2, 3, 4, 5])).toEqual([1,3,5]);
    });
    it("тест 3: fixArrayMutationDuringLoop([2, 2, 2])", () => {
      expect(fixArrayMutationDuringLoop([2, 2, 2])).toEqual([]);
    });
  });

  describe("7.5 fixVariableShadowingNested - Конфлікт змінних лічильника у вкладеному циклі (i замість j)", () => {
    it("тест 1: fixVariableShadowingNested([[1, 2], [3, 4]])", () => {
      expect(fixVariableShadowingNested([[1, 2], [3, 4]])).toEqual(10);
    });
    it("тест 2: fixVariableShadowingNested([[5, 5]])", () => {
      expect(fixVariableShadowingNested([[5, 5]])).toEqual(10);
    });
    it("тест 3: fixVariableShadowingNested([])", () => {
      expect(fixVariableShadowingNested([])).toEqual(0);
    });
  });

  describe("7.6 fixInitialAccumulatorValue - Виправлення нульового ініціалізатора добутку", () => {
    it("тест 1: fixInitialAccumulatorValue([2, 3, 4])", () => {
      expect(fixInitialAccumulatorValue([2, 3, 4])).toEqual(24);
    });
    it("тест 2: fixInitialAccumulatorValue([5, 10])", () => {
      expect(fixInitialAccumulatorValue([5, 10])).toEqual(50);
    });
    it("тест 3: fixInitialAccumulatorValue([])", () => {
      expect(fixInitialAccumulatorValue([])).toEqual(1);
    });
  });

  describe("7.7 fixDoWhileCondition - Виправлення інвертованої умови do...while", () => {
    it("тест 1: fixDoWhileCondition(10, 3)", () => {
      expect(fixDoWhileCondition(10, 3)).toEqual(12);
    });
    it("тест 2: fixDoWhileCondition(5, 5)", () => {
      expect(fixDoWhileCondition(5, 5)).toEqual(5);
    });
    it("тест 3: fixDoWhileCondition(2, 5)", () => {
      expect(fixDoWhileCondition(2, 5)).toEqual(5);
    });
  });

  describe("7.8 fixContinueSkippingIncrement - Зависання while через continue перед інкрементом", () => {
    it("тест 1: fixContinueSkippingIncrement([1, 2, 3, 4, 5])", () => {
      expect(fixContinueSkippingIncrement([1, 2, 3, 4, 5])).toEqual(9);
    });
    it("тест 2: fixContinueSkippingIncrement([2, 4])", () => {
      expect(fixContinueSkippingIncrement([2, 4])).toEqual(0);
    });
    it("тест 3: fixContinueSkippingIncrement([7])", () => {
      expect(fixContinueSkippingIncrement([7])).toEqual(7);
    });
  });

  describe("7.9 simulateCallStackDepth - Відстеження глибини Call Stack у відлагоджувачі", () => {
    it("тест 1: simulateCallStackDepth(3)", () => {
      expect(simulateCallStackDepth(3)).toEqual(["frame_1","frame_2","frame_3"]);
    });
    it("тест 2: simulateCallStackDepth(1)", () => {
      expect(simulateCallStackDepth(1)).toEqual(["frame_1"]);
    });
    it("тест 3: simulateCallStackDepth(0)", () => {
      expect(simulateCallStackDepth(0)).toEqual([]);
    });
  });

  describe("7.10 traceScopeWatchVariables - Моделювання вікна Scope та Watch-виразів", () => {
    it("тест 1: traceScopeWatchVariables([10, 20])", () => {
      expect(traceScopeWatchVariables([10, 20])).toEqual([{"step":0,"currentVal":10,"acc":10},{"step":1,"currentVal":20,"acc":30}]);
    });
    it("тест 2: traceScopeWatchVariables([])", () => {
      expect(traceScopeWatchVariables([])).toEqual([]);
    });
  });

  describe("7.11 fixStringIndexOutOfBounds - Виправлення помилки виходу за межі рядка (i <= str.length)", () => {
    it("тест 1: fixStringIndexOutOfBounds(\"cat\")", () => {
      expect(fixStringIndexOutOfBounds("cat")).toEqual("tac");
    });
    it("тест 2: fixStringIndexOutOfBounds(\"a\")", () => {
      expect(fixStringIndexOutOfBounds("a")).toEqual("a");
    });
    it("тест 3: fixStringIndexOutOfBounds(\"\")", () => {
      expect(fixStringIndexOutOfBounds("")).toEqual("");
    });
  });

  describe("7.12 conditionalBreakpointFilter - Моделювання умовної точки зупинки (Conditional Breakpoint)", () => {
    it("тест 1: conditionalBreakpointFilter([{ level: \"INFO\", code: 200 }, { level: \"ERROR\", code: 502 }, { level: \"ERROR\", code: 404 }])", () => {
      expect(conditionalBreakpointFilter([{ level: "INFO", code: 200 }, { level: "ERROR", code: 502 }, { level: "ERROR", code: 404 }])).toEqual([{"level":"ERROR","code":502}]);
    });
    it("тест 2: conditionalBreakpointFilter([])", () => {
      expect(conditionalBreakpointFilter([])).toEqual([]);
    });
  });

  describe("7.13 fixReferenceVsValueObjectInLoop - Помилка збереження мутованого посилання на один і той самий обʼєкт", () => {
    it("тест 1: fixReferenceVsValueObjectInLoop([1, 2, 3])", () => {
      expect(fixReferenceVsValueObjectInLoop([1, 2, 3])).toEqual([{"id":1,"active":true},{"id":2,"active":true},{"id":3,"active":true}]);
    });
    it("тест 2: fixReferenceVsValueObjectInLoop([])", () => {
      expect(fixReferenceVsValueObjectInLoop([])).toEqual([]);
    });
  });

  describe("7.14 detectDeadCodeAfterReturnInLoop - Мертвий код через невчасний return всередині циклу", () => {
    it("тест 1: detectDeadCodeAfterReturnInLoop([10, 20, 30])", () => {
      expect(detectDeadCodeAfterReturnInLoop([10, 20, 30])).toEqual(60);
    });
    it("тест 2: detectDeadCodeAfterReturnInLoop([5])", () => {
      expect(detectDeadCodeAfterReturnInLoop([5])).toEqual(5);
    });
    it("тест 3: detectDeadCodeAfterReturnInLoop([])", () => {
      expect(detectDeadCodeAfterReturnInLoop([])).toEqual(0);
    });
  });

  describe("7.15 fixFloatingPointStepLoop - Помилка точності чисел з рухомою комою у лічильнику циклу", () => {
    it("тест 1: fixFloatingPointStepLoop(0, 0.3, 0.1)", () => {
      expect(fixFloatingPointStepLoop(0, 0.3, 0.1)).toEqual([0,0.1,0.2,0.3]);
    });
    it("тест 2: fixFloatingPointStepLoop(1, 1.2, 0.1)", () => {
      expect(fixFloatingPointStepLoop(1, 1.2, 0.1)).toEqual([1,1.1,1.2]);
    });
    it("тест 3: fixFloatingPointStepLoop(5, 5, 0.1)", () => {
      expect(fixFloatingPointStepLoop(5, 5, 0.1)).toEqual([5]);
    });
  });

});
