import { describe, it, expect } from "vitest";
import {
  matrixSum,
  multiplicationGrid,
  printPatternTriangle,
  invertedTriangle,
  matrixTranspose,
  chessboardPattern,
  cartesianProduct,
  findPairWithSum,
  flattenDeep2D,
  countSubstrings,
  identityMatrix,
  pascalTriangle,
  matrixRowMaxValues,
  matrixMainDiagonalSum,
  matrixSecondaryDiagonalSum,
  bubbleSortStepByStep,
  allSubarrays,
  findDuplicatesNested,
  pyramidPattern,
  matrixMultiply,
  saddlePointMatrix,
  countInversions,
  crossWordSearchHorizontalVertical,
  spiralMatrixOrder,
  distinctTripletsSumZero
} from "../src/06-nested-loops.js";

describe("Модуль 6: Вкладені цикли та матриці", () => {
  describe("6.1 matrixSum - Сума всіх елементів двовимірного масиву", () => {
    it("тест 1: matrixSum([[1, 2], [3, 4]])", () => {
      expect(matrixSum([[1, 2], [3, 4]])).toEqual(10);
    });
    it("тест 2: matrixSum([[5, -5], [10, 0]])", () => {
      expect(matrixSum([[5, -5], [10, 0]])).toEqual(10);
    });
    it("тест 3: matrixSum([])", () => {
      expect(matrixSum([])).toEqual(0);
    });
  });

  describe("6.2 multiplicationGrid - Таблиця множення n x n у вигляді матриці", () => {
    it("тест 1: multiplicationGrid(3)", () => {
      expect(multiplicationGrid(3)).toEqual([[1,2,3],[2,4,6],[3,6,9]]);
    });
    it("тест 2: multiplicationGrid(1)", () => {
      expect(multiplicationGrid(1)).toEqual([[1]]);
    });
    it("тест 3: multiplicationGrid(0)", () => {
      expect(multiplicationGrid(0)).toEqual([]);
    });
  });

  describe("6.3 printPatternTriangle - Прямокутний трикутник із зірочок", () => {
    it("тест 1: printPatternTriangle(3)", () => {
      expect(printPatternTriangle(3)).toEqual(["*","**","***"]);
    });
    it("тест 2: printPatternTriangle(1)", () => {
      expect(printPatternTriangle(1)).toEqual(["*"]);
    });
    it("тест 3: printPatternTriangle(0)", () => {
      expect(printPatternTriangle(0)).toEqual([]);
    });
  });

  describe("6.4 invertedTriangle - Перевернутий трикутник із зірочок", () => {
    it("тест 1: invertedTriangle(3)", () => {
      expect(invertedTriangle(3)).toEqual(["***","**","*"]);
    });
    it("тест 2: invertedTriangle(2)", () => {
      expect(invertedTriangle(2)).toEqual(["**","*"]);
    });
    it("тест 3: invertedTriangle(0)", () => {
      expect(invertedTriangle(0)).toEqual([]);
    });
  });

  describe("6.5 matrixTranspose - Транспонування матриці", () => {
    it("тест 1: matrixTranspose([[1, 2, 3], [4, 5, 6]])", () => {
      expect(matrixTranspose([[1, 2, 3], [4, 5, 6]])).toEqual([[1,4],[2,5],[3,6]]);
    });
    it("тест 2: matrixTranspose([[1, 2], [3, 4]])", () => {
      expect(matrixTranspose([[1, 2], [3, 4]])).toEqual([[1,3],[2,4]]);
    });
    it("тест 3: matrixTranspose([])", () => {
      expect(matrixTranspose([])).toEqual([]);
    });
  });

  describe("6.6 chessboardPattern - Шахівниця size x size", () => {
    it("тест 1: chessboardPattern(2)", () => {
      expect(chessboardPattern(2)).toEqual(["# "," #"]);
    });
    it("тест 2: chessboardPattern(3)", () => {
      expect(chessboardPattern(3)).toEqual(["# #"," # ","# #"]);
    });
    it("тест 3: chessboardPattern(0)", () => {
      expect(chessboardPattern(0)).toEqual([]);
    });
  });

  describe("6.7 cartesianProduct - Декартів добуток двох масивів", () => {
    it("тест 1: cartesianProduct([\"a\", \"b\"], [1, 2])", () => {
      expect(cartesianProduct(["a", "b"], [1, 2])).toEqual([["a",1],["a",2],["b",1],["b",2]]);
    });
    it("тест 2: cartesianProduct([1], [\"x\"])", () => {
      expect(cartesianProduct([1], ["x"])).toEqual([[1,"x"]]);
    });
    it("тест 3: cartesianProduct([], [1, 2])", () => {
      expect(cartesianProduct([], [1, 2])).toEqual([]);
    });
  });

  describe("6.8 findPairWithSum - Пошук пари чисел із цільовою сумою", () => {
    it("тест 1: findPairWithSum([2, 7, 11, 15], 9)", () => {
      expect(findPairWithSum([2, 7, 11, 15], 9)).toEqual([2,7]);
    });
    it("тест 2: findPairWithSum([1, 2, 3, 4], 10)", () => {
      expect(findPairWithSum([1, 2, 3, 4], 10)).toEqual(null);
    });
    it("тест 3: findPairWithSum([5, 5], 10)", () => {
      expect(findPairWithSum([5, 5], 10)).toEqual([5,5]);
    });
  });

  describe("6.9 flattenDeep2D - Сплющення 2D масиву без Array.prototype.flat", () => {
    it("тест 1: flattenDeep2D([[1, 2], [3, 4], [5]])", () => {
      expect(flattenDeep2D([[1, 2], [3, 4], [5]])).toEqual([1,2,3,4,5]);
    });
    it("тест 2: flattenDeep2D([[], [1]])", () => {
      expect(flattenDeep2D([[], [1]])).toEqual([1]);
    });
    it("тест 3: flattenDeep2D([])", () => {
      expect(flattenDeep2D([])).toEqual([]);
    });
  });

  describe("6.10 countSubstrings - Підрахунок входжень підрядка через вкладені цикли", () => {
    it("тест 1: countSubstrings(\"banana\", \"an\")", () => {
      expect(countSubstrings("banana", "an")).toEqual(2);
    });
    it("тест 2: countSubstrings(\"aaaa\", \"aa\")", () => {
      expect(countSubstrings("aaaa", "aa")).toEqual(3);
    });
    it("тест 3: countSubstrings(\"hello\", \"world\")", () => {
      expect(countSubstrings("hello", "world")).toEqual(0);
    });
  });

  describe("6.11 identityMatrix - Одинична матриця розміром n x n", () => {
    it("тест 1: identityMatrix(3)", () => {
      expect(identityMatrix(3)).toEqual([[1,0,0],[0,1,0],[0,0,1]]);
    });
    it("тест 2: identityMatrix(1)", () => {
      expect(identityMatrix(1)).toEqual([[1]]);
    });
    it("тест 3: identityMatrix(0)", () => {
      expect(identityMatrix(0)).toEqual([]);
    });
  });

  describe("6.12 pascalTriangle - Трикутник Паскаля до numRows", () => {
    it("тест 1: pascalTriangle(4)", () => {
      expect(pascalTriangle(4)).toEqual([[1],[1,1],[1,2,1],[1,3,3,1]]);
    });
    it("тест 2: pascalTriangle(1)", () => {
      expect(pascalTriangle(1)).toEqual([[1]]);
    });
    it("тест 3: pascalTriangle(0)", () => {
      expect(pascalTriangle(0)).toEqual([]);
    });
  });

  describe("6.13 matrixRowMaxValues - Максимум у кожному рядку матриці", () => {
    it("тест 1: matrixRowMaxValues([[1, 5, 2], [9, 3, 8], [4, 4, 4]])", () => {
      expect(matrixRowMaxValues([[1, 5, 2], [9, 3, 8], [4, 4, 4]])).toEqual([5,9,4]);
    });
    it("тест 2: matrixRowMaxValues([[-1, -10], [0, 5]])", () => {
      expect(matrixRowMaxValues([[-1, -10], [0, 5]])).toEqual([-1,5]);
    });
    it("тест 3: matrixRowMaxValues([])", () => {
      expect(matrixRowMaxValues([])).toEqual([]);
    });
  });

  describe("6.14 matrixMainDiagonalSum - Сума елементів головної діагоналі", () => {
    it("тест 1: matrixMainDiagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
      expect(matrixMainDiagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual(15);
    });
    it("тест 2: matrixMainDiagonalSum([[4, 2], [1, 6]])", () => {
      expect(matrixMainDiagonalSum([[4, 2], [1, 6]])).toEqual(10);
    });
    it("тест 3: matrixMainDiagonalSum([])", () => {
      expect(matrixMainDiagonalSum([])).toEqual(0);
    });
  });

  describe("6.15 matrixSecondaryDiagonalSum - Сума побічної діагоналі матриці", () => {
    it("тест 1: matrixSecondaryDiagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
      expect(matrixSecondaryDiagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual(15);
    });
    it("тест 2: matrixSecondaryDiagonalSum([[1, 2], [3, 4]])", () => {
      expect(matrixSecondaryDiagonalSum([[1, 2], [3, 4]])).toEqual(5);
    });
    it("тест 3: matrixSecondaryDiagonalSum([])", () => {
      expect(matrixSecondaryDiagonalSum([])).toEqual(0);
    });
  });

  describe("6.16 bubbleSortStepByStep - Сортування бульбашкою (Bubble Sort)", () => {
    it("тест 1: bubbleSortStepByStep([5, 2, 9, 1, 5, 6])", () => {
      expect(bubbleSortStepByStep([5, 2, 9, 1, 5, 6])).toEqual([1,2,5,5,6,9]);
    });
    it("тест 2: bubbleSortStepByStep([3, 1])", () => {
      expect(bubbleSortStepByStep([3, 1])).toEqual([1,3]);
    });
    it("тест 3: bubbleSortStepByStep([])", () => {
      expect(bubbleSortStepByStep([])).toEqual([]);
    });
  });

  describe("6.17 allSubarrays - Генерація всіх неперервних підмасивів", () => {
    it("тест 1: allSubarrays([1, 2])", () => {
      expect(allSubarrays([1, 2])).toEqual([[1],[1,2],[2]]);
    });
    it("тест 2: allSubarrays([\"a\"])", () => {
      expect(allSubarrays(["a"])).toEqual([["a"]]);
    });
    it("тест 3: allSubarrays([])", () => {
      expect(allSubarrays([])).toEqual([]);
    });
  });

  describe("6.18 findDuplicatesNested - Пошук дублікатів без використання Set", () => {
    it("тест 1: findDuplicatesNested([1, 2, 3, 2, 4, 1, 5])", () => {
      expect(findDuplicatesNested([1, 2, 3, 2, 4, 1, 5])).toEqual([1,2]);
    });
    it("тест 2: findDuplicatesNested([1, 2, 3])", () => {
      expect(findDuplicatesNested([1, 2, 3])).toEqual([]);
    });
    it("тест 3: findDuplicatesNested([\"x\", \"x\", \"x\"])", () => {
      expect(findDuplicatesNested(["x", "x", "x"])).toEqual(["x"]);
    });
  });

  describe("6.19 pyramidPattern - Центрована піраміда з зірочок", () => {
    it("тест 1: pyramidPattern(3)", () => {
      expect(pyramidPattern(3)).toEqual(["  *"," ***","*****"]);
    });
    it("тест 2: pyramidPattern(1)", () => {
      expect(pyramidPattern(1)).toEqual(["*"]);
    });
    it("тест 3: pyramidPattern(0)", () => {
      expect(pyramidPattern(0)).toEqual([]);
    });
  });

  describe("6.20 matrixMultiply - Множення двох матриць (потрійний вкладений цикл)", () => {
    it("тест 1: matrixMultiply([[1, 2], [3, 4]], [[2, 0], [1, 2]])", () => {
      expect(matrixMultiply([[1, 2], [3, 4]], [[2, 0], [1, 2]])).toEqual([[4,4],[10,8]]);
    });
    it("тест 2: matrixMultiply([[1, 2]], [[3], [4]])", () => {
      expect(matrixMultiply([[1, 2]], [[3], [4]])).toEqual([[11]]);
    });
    it("тест 3: matrixMultiply([[1, 2]], [[1, 2]])", () => {
      expect(matrixMultiply([[1, 2]], [[1, 2]])).toEqual(null);
    });
  });

  describe("6.21 saddlePointMatrix - Сідлова точка матриці", () => {
    it("тест 1: saddlePointMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
      expect(saddlePointMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual({"row":2,"col":0,"value":7});
    });
    it("тест 2: saddlePointMatrix([[3, 8], [4, 7]])", () => {
      expect(saddlePointMatrix([[3, 8], [4, 7]])).toEqual({"row":1,"col":0,"value":4});
    });
    it("тест 3: saddlePointMatrix([])", () => {
      expect(saddlePointMatrix([])).toEqual(null);
    });
  });

  describe("6.22 countInversions - Підрахунок інверсій у масиві", () => {
    it("тест 1: countInversions([2, 4, 1, 3, 5])", () => {
      expect(countInversions([2, 4, 1, 3, 5])).toEqual(3);
    });
    it("тест 2: countInversions([1, 2, 3])", () => {
      expect(countInversions([1, 2, 3])).toEqual(0);
    });
    it("тест 3: countInversions([3, 2, 1])", () => {
      expect(countInversions([3, 2, 1])).toEqual(3);
    });
  });

  describe("6.23 crossWordSearchHorizontalVertical - Пошук слова у сітці літер (по горизонталі та вертикалі)", () => {
    it("тест 1: crossWordSearchHorizontalVertical([\"CAT\", \"DOG\", \"PIG\"], \"CAT\")", () => {
      expect(crossWordSearchHorizontalVertical(["CAT", "DOG", "PIG"], "CAT")).toEqual(true);
    });
    it("тест 2: crossWordSearchHorizontalVertical([\"CDP\", \"AOI\", \"TGG\"], \"CAT\")", () => {
      expect(crossWordSearchHorizontalVertical(["CDP", "AOI", "TGG"], "CAT")).toEqual(true);
    });
    it("тест 3: crossWordSearchHorizontalVertical([\"AAA\", \"BBB\"], \"XYZ\")", () => {
      expect(crossWordSearchHorizontalVertical(["AAA", "BBB"], "XYZ")).toEqual(false);
    });
  });

  describe("6.24 spiralMatrixOrder - Обхід матриці по спіралі", () => {
    it("тест 1: spiralMatrixOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
      expect(spiralMatrixOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1,2,3,6,9,8,7,4,5]);
    });
    it("тест 2: spiralMatrixOrder([[1, 2], [3, 4]])", () => {
      expect(spiralMatrixOrder([[1, 2], [3, 4]])).toEqual([1,2,4,3]);
    });
    it("тест 3: spiralMatrixOrder([])", () => {
      expect(spiralMatrixOrder([])).toEqual([]);
    });
  });

  describe("6.25 distinctTripletsSumZero - Трипліки чисел із сумою 0", () => {
    it("тест 1: distinctTripletsSumZero([-1, 0, 1, 2, -1, -4])", () => {
      expect(distinctTripletsSumZero([-1, 0, 1, 2, -1, -4])).toEqual([[-1,-1,2],[-1,0,1]]);
    });
    it("тест 2: distinctTripletsSumZero([0, 1, 1])", () => {
      expect(distinctTripletsSumZero([0, 1, 1])).toEqual([]);
    });
    it("тест 3: distinctTripletsSumZero([0, 0, 0])", () => {
      expect(distinctTripletsSumZero([0, 0, 0])).toEqual([[0,0,0]]);
    });
  });

});
