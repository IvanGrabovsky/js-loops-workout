import './setup-dom.js';
import { describe, it, expect } from "vitest";

describe("SOLUTIONS: Модуль 1: Цикл while та поняття ітерації", () => {
  describe("1.1 countUp", () => {
    function countUp(n) {
      const res = []; let i = 1; while (i <= n) { res.push(i); i++; } return res;
    }
    it("test 1", () => {
      expect(countUp(5)).toEqual([1,2,3,4,5]);
    });
    it("test 2", () => {
      expect(countUp(1)).toEqual([1]);
    });
    it("test 3", () => {
      expect(countUp(0)).toEqual([]);
    });
  });

  describe("1.2 countDown", () => {
    function countDown(n) {
      const res = []; while (n >= 1) { res.push(n); n--; } return res;
    }
    it("test 1", () => {
      expect(countDown(4)).toEqual([4,3,2,1]);
    });
    it("test 2", () => {
      expect(countDown(0)).toEqual([]);
    });
  });

  describe("1.3 sumUpTo", () => {
    function sumUpTo(n) {
      let sum = 0; let i = 1; while (i <= n) { sum += i; i++; } return sum;
    }
    it("test 1", () => {
      expect(sumUpTo(5)).toEqual(15);
    });
    it("test 2", () => {
      expect(sumUpTo(10)).toEqual(55);
    });
    it("test 3", () => {
      expect(sumUpTo(0)).toEqual(0);
    });
  });

  describe("1.4 factorialWhile", () => {
    function factorialWhile(n) {
      if (n < 0) return null; let res = 1; let i = 2; while (i <= n) { res *= i; i++; } return res;
    }
    it("test 1", () => {
      expect(factorialWhile(5)).toEqual(120);
    });
    it("test 2", () => {
      expect(factorialWhile(0)).toEqual(1);
    });
    it("test 3", () => {
      expect(factorialWhile(-2)).toEqual(null);
    });
  });

  describe("1.5 countDigits", () => {
    function countDigits(n) {
      let num = Math.abs(n); if (num === 0) return 1; let count = 0; while (num > 0) { count++; num = Math.floor(num / 10); } return count;
    }
    it("test 1", () => {
      expect(countDigits(12345)).toEqual(5);
    });
    it("test 2", () => {
      expect(countDigits(-987)).toEqual(3);
    });
    it("test 3", () => {
      expect(countDigits(0)).toEqual(1);
    });
  });

  describe("1.6 sumDigits", () => {
    function sumDigits(n) {
      let num = Math.abs(n); let sum = 0; while (num > 0) { sum += num % 10; num = Math.floor(num / 10); } return sum;
    }
    it("test 1", () => {
      expect(sumDigits(123)).toEqual(6);
    });
    it("test 2", () => {
      expect(sumDigits(505)).toEqual(10);
    });
    it("test 3", () => {
      expect(sumDigits(-49)).toEqual(13);
    });
  });

  describe("1.7 reverseNumber", () => {
    function reverseNumber(n) {
      const sign = n < 0 ? -1 : 1; let num = Math.abs(n); let rev = 0; while (num > 0) { rev = rev * 10 + (num % 10); num = Math.floor(num / 10); } return rev * sign;
    }
    it("test 1", () => {
      expect(reverseNumber(1234)).toEqual(4321);
    });
    it("test 2", () => {
      expect(reverseNumber(-89)).toEqual(-98);
    });
    it("test 3", () => {
      expect(reverseNumber(7)).toEqual(7);
    });
  });

  describe("1.8 isPowerOfTwo", () => {
    function isPowerOfTwo(n) {
      if (n <= 0) return false; while (n > 1) { if (n % 2 !== 0) return false; n = n / 2; } return true;
    }
    it("test 1", () => {
      expect(isPowerOfTwo(16)).toEqual(true);
    });
    it("test 2", () => {
      expect(isPowerOfTwo(18)).toEqual(false);
    });
    it("test 3", () => {
      expect(isPowerOfTwo(1)).toEqual(true);
    });
  });

  describe("1.9 gcdWhile", () => {
    function gcdWhile(a, b) {
      let x = Math.abs(a), y = Math.abs(b); while (y !== 0) { const temp = y; y = x % y; x = temp; } return x;
    }
    it("test 1", () => {
      expect(gcdWhile(48, 18)).toEqual(6);
    });
    it("test 2", () => {
      expect(gcdWhile(101, 10)).toEqual(1);
    });
    it("test 3", () => {
      expect(gcdWhile(20, 0)).toEqual(20);
    });
  });

  describe("1.10 lcmWhile", () => {
    function lcmWhile(a, b) {
      if (a === 0 || b === 0) return 0; let x = Math.abs(a), y = Math.abs(b); const prod = x * y; while (y !== 0) { const t = y; y = x % y; x = t; } return prod / x;
    }
    it("test 1", () => {
      expect(lcmWhile(4, 6)).toEqual(12);
    });
    it("test 2", () => {
      expect(lcmWhile(5, 7)).toEqual(35);
    });
    it("test 3", () => {
      expect(lcmWhile(0, 8)).toEqual(0);
    });
  });

  describe("1.11 collatzSteps", () => {
    function collatzSteps(n) {
      if (n <= 1) return 0; let steps = 0; while (n > 1) { if (n % 2 === 0) n = n / 2; else n = 3 * n + 1; steps++; } return steps;
    }
    it("test 1", () => {
      expect(collatzSteps(6)).toEqual(8);
    });
    it("test 2", () => {
      expect(collatzSteps(1)).toEqual(0);
    });
    it("test 3", () => {
      expect(collatzSteps(19)).toEqual(20);
    });
  });

  describe("1.12 binaryRepresentation", () => {
    function binaryRepresentation(n) {
      if (n === 0) return "0"; let res = ""; while (n > 0) { res = (n % 2) + res; n = Math.floor(n / 2); } return res;
    }
    it("test 1", () => {
      expect(binaryRepresentation(10)).toEqual("1010");
    });
    it("test 2", () => {
      expect(binaryRepresentation(7)).toEqual("111");
    });
    it("test 3", () => {
      expect(binaryRepresentation(0)).toEqual("0");
    });
  });

  describe("1.13 countDivisors", () => {
    function countDivisors(n) {
      if (n <= 0) return 0; let count = 0; let i = 1; while (i <= n) { if (n % i === 0) count++; i++; } return count;
    }
    it("test 1", () => {
      expect(countDivisors(12)).toEqual(6);
    });
    it("test 2", () => {
      expect(countDivisors(7)).toEqual(2);
    });
    it("test 3", () => {
      expect(countDivisors(1)).toEqual(1);
    });
  });

  describe("1.14 isPrimeWhile", () => {
    function isPrimeWhile(n) {
      if (n < 2) return false; let i = 2; while (i * i <= n) { if (n % i === 0) return false; i++; } return true;
    }
    it("test 1", () => {
      expect(isPrimeWhile(17)).toEqual(true);
    });
    it("test 2", () => {
      expect(isPrimeWhile(18)).toEqual(false);
    });
    it("test 3", () => {
      expect(isPrimeWhile(1)).toEqual(false);
    });
  });

  describe("1.15 findSmallestDivisor", () => {
    function findSmallestDivisor(n) {
      if (n <= 1) return null; let i = 2; while (n % i !== 0) { i++; } return i;
    }
    it("test 1", () => {
      expect(findSmallestDivisor(15)).toEqual(3);
    });
    it("test 2", () => {
      expect(findSmallestDivisor(49)).toEqual(7);
    });
    it("test 3", () => {
      expect(findSmallestDivisor(11)).toEqual(11);
    });
  });

  describe("1.16 multiplyByAddition", () => {
    function multiplyByAddition(a, b) {
      let res = 0; let count = b; while (count > 0) { res += a; count--; } return res;
    }
    it("test 1", () => {
      expect(multiplyByAddition(6, 4)).toEqual(24);
    });
    it("test 2", () => {
      expect(multiplyByAddition(5, 0)).toEqual(0);
    });
    it("test 3", () => {
      expect(multiplyByAddition(0, 10)).toEqual(0);
    });
  });

  describe("1.17 integerDivision", () => {
    function integerDivision(a, b) {
      if (b === 0) return null; let quotient = 0; while (a >= b) { a -= b; quotient++; } return quotient;
    }
    it("test 1", () => {
      expect(integerDivision(14, 3)).toEqual(4);
    });
    it("test 2", () => {
      expect(integerDivision(20, 5)).toEqual(4);
    });
    it("test 3", () => {
      expect(integerDivision(5, 0)).toEqual(null);
    });
  });

  describe("1.18 moduloWhile", () => {
    function moduloWhile(a, b) {
      if (b === 0) return null; while (a >= b) { a -= b; } return a;
    }
    it("test 1", () => {
      expect(moduloWhile(17, 5)).toEqual(2);
    });
    it("test 2", () => {
      expect(moduloWhile(20, 4)).toEqual(0);
    });
    it("test 3", () => {
      expect(moduloWhile(10, 0)).toEqual(null);
    });
  });

  describe("1.19 sumEvenWhile", () => {
    function sumEvenWhile(start, end) {
      let sum = 0; let i = start; while (i <= end) { if (i % 2 === 0) sum += i; i++; } return sum;
    }
    it("test 1", () => {
      expect(sumEvenWhile(1, 6)).toEqual(12);
    });
    it("test 2", () => {
      expect(sumEvenWhile(4, 4)).toEqual(4);
    });
    it("test 3", () => {
      expect(sumEvenWhile(5, 2)).toEqual(0);
    });
  });

  describe("1.20 geometricProgressionCount", () => {
    function geometricProgressionCount(start, ratio, limit) {
      if (start > limit) return 0; let count = 0; let val = start; while (val <= limit) { count++; val *= ratio; } return count;
    }
    it("test 1", () => {
      expect(geometricProgressionCount(2, 2, 32)).toEqual(5);
    });
    it("test 2", () => {
      expect(geometricProgressionCount(3, 3, 30)).toEqual(3);
    });
    it("test 3", () => {
      expect(geometricProgressionCount(50, 2, 40)).toEqual(0);
    });
  });

  describe("1.21 savingsAccumulator", () => {
    function savingsAccumulator(deposit, monthlyAdd, rateMonthly, target) {
      let months = 0; let current = deposit; while (current < target) { months++; current = current * (1 + rateMonthly) + monthlyAdd; } return months;
    }
    it("test 1", () => {
      expect(savingsAccumulator(1000, 200, 0.01, 2000)).toEqual(5);
    });
    it("test 2", () => {
      expect(savingsAccumulator(5000, 100, 0.02, 5000)).toEqual(0);
    });
  });

  describe("1.22 palindromeNumber", () => {
    function palindromeNumber(n) {
      if (n < 0) return false; let orig = n; let rev = 0; let temp = n; while (temp > 0) { rev = rev * 10 + (temp % 10); temp = Math.floor(temp / 10); } return rev === orig;
    }
    it("test 1", () => {
      expect(palindromeNumber(121)).toEqual(true);
    });
    it("test 2", () => {
      expect(palindromeNumber(-121)).toEqual(false);
    });
    it("test 3", () => {
      expect(palindromeNumber(12321)).toEqual(true);
    });
  });

  describe("1.23 nthFibonacciWhile", () => {
    function nthFibonacciWhile(n) {
      if (n <= 0) return 0; if (n === 1) return 1; let a = 0, b = 1, i = 2; while (i <= n) { const next = a + b; a = b; b = next; i++; } return b;
    }
    it("test 1", () => {
      expect(nthFibonacciWhile(6)).toEqual(8);
    });
    it("test 2", () => {
      expect(nthFibonacciWhile(0)).toEqual(0);
    });
    it("test 3", () => {
      expect(nthFibonacciWhile(1)).toEqual(1);
    });
  });

  describe("1.24 shrinkToSingleDigit", () => {
    function shrinkToSingleDigit(n) {
      let num = Math.abs(n); while (num >= 10) { let s = 0; while (num > 0) { s += num % 10; num = Math.floor(num / 10); } num = s; } return num;
    }
    it("test 1", () => {
      expect(shrinkToSingleDigit(9875)).toEqual(2);
    });
    it("test 2", () => {
      expect(shrinkToSingleDigit(38)).toEqual(2);
    });
    it("test 3", () => {
      expect(shrinkToSingleDigit(5)).toEqual(5);
    });
  });

  describe("1.25 waterTankFill", () => {
    function waterTankFill(capacity, inFlow, outFlow) {
      if (capacity <= 0) return 0; if (outFlow >= inFlow) return null; let hours = 0; let current = 0; while (current < capacity) { hours++; current += (inFlow - outFlow); } return hours;
    }
    it("test 1", () => {
      expect(waterTankFill(100, 30, 10)).toEqual(5);
    });
    it("test 2", () => {
      expect(waterTankFill(50, 10, 10)).toEqual(null);
    });
    it("test 3", () => {
      expect(waterTankFill(0, 5, 2)).toEqual(0);
    });
  });

});
describe("SOLUTIONS: Модуль 2: Цикл do...while (гарантоване перше виконання)", () => {
  describe("2.1 doWhileAtLeastOnce", () => {
    function doWhileAtLeastOnce(value) {
      do { value += 1; } while (value < 0); return value;
    }
    it("test 1", () => {
      expect(doWhileAtLeastOnce(10)).toEqual(11);
    });
    it("test 2", () => {
      expect(doWhileAtLeastOnce(0)).toEqual(1);
    });
    it("test 3", () => {
      expect(doWhileAtLeastOnce(-3)).toEqual(0);
    });
  });

  describe("2.2 collectInputUntilZero", () => {
    function collectInputUntilZero(inputs) {
      const res = []; let i = 0; if (!inputs || inputs.length === 0) return []; do { if (inputs[i] === 0) break; res.push(inputs[i]); i++; } while (i < inputs.length); return res;
    }
    it("test 1", () => {
      expect(collectInputUntilZero([5, 8, 2, 0, 9])).toEqual([5,8,2]);
    });
    it("test 2", () => {
      expect(collectInputUntilZero([0, 10, 20])).toEqual([]);
    });
    it("test 3", () => {
      expect(collectInputUntilZero([1, 2, 3])).toEqual([1,2,3]);
    });
  });

  describe("2.3 diceRollSimulation", () => {
    function diceRollSimulation(rolls) {
      if (!rolls || rolls.length === 0) return 0; let i = 0; do { const val = rolls[i]; i++; if (val === 6) break; } while (i < rolls.length); return i;
    }
    it("test 1", () => {
      expect(diceRollSimulation([2, 4, 1, 6, 3])).toEqual(4);
    });
    it("test 2", () => {
      expect(diceRollSimulation([6, 1, 2])).toEqual(1);
    });
    it("test 3", () => {
      expect(diceRollSimulation([3, 5])).toEqual(2);
    });
  });

  describe("2.4 pinCodeAttempts", () => {
    function pinCodeAttempts(attempts, correctPin) {
      let i = 0, unlocked = false; if (!attempts || attempts.length === 0) return { unlocked: false, attemptsUsed: 0 }; do { if (attempts[i] === correctPin) { unlocked = true; i++; break; } i++; } while (i < attempts.length && i < 3); return { unlocked, attemptsUsed: i };
    }
    it("test 1", () => {
      expect(pinCodeAttempts(["1111", "2222", "1234"], "1234")).toEqual({"unlocked":true,"attemptsUsed":3});
    });
    it("test 2", () => {
      expect(pinCodeAttempts(["1234", "0000"], "1234")).toEqual({"unlocked":true,"attemptsUsed":1});
    });
    it("test 3", () => {
      expect(pinCodeAttempts(["9999", "8888", "7777", "1234"], "1234")).toEqual({"unlocked":false,"attemptsUsed":3});
    });
  });

  describe("2.5 exponentialGrowthThreshold", () => {
    function exponentialGrowthThreshold(pop, multiplier, threshold) {
      let steps = 0; do { steps++; pop *= multiplier; } while (pop <= threshold); return steps;
    }
    it("test 1", () => {
      expect(exponentialGrowthThreshold(10, 2, 50)).toEqual(3);
    });
    it("test 2", () => {
      expect(exponentialGrowthThreshold(100, 2, 50)).toEqual(1);
    });
    it("test 3", () => {
      expect(exponentialGrowthThreshold(5, 3, 40)).toEqual(2);
    });
  });

  describe("2.6 retryNetworkOperation", () => {
    function retryNetworkOperation(statusResponses, maxRetries) {
      let i = 0, success = false; if (!statusResponses || statusResponses.length === 0) return { success: false, retriesDone: 0 }; do { if (statusResponses[i] === 200) { success = true; i++; break; } i++; } while (i < statusResponses.length && i < maxRetries); return { success, retriesDone: i };
    }
    it("test 1", () => {
      expect(retryNetworkOperation([500, 502, 200], 3)).toEqual({"success":true,"retriesDone":3});
    });
    it("test 2", () => {
      expect(retryNetworkOperation([200], 3)).toEqual({"success":true,"retriesDone":1});
    });
    it("test 3", () => {
      expect(retryNetworkOperation([503, 503, 503, 200], 3)).toEqual({"success":false,"retriesDone":3});
    });
  });

  describe("2.7 batteryDrainSimulation", () => {
    function batteryDrainSimulation(start, drainStep) {
      const levels = []; do { start = Math.max(0, start - drainStep); levels.push(start); } while (start > 0); return levels;
    }
    it("test 1", () => {
      expect(batteryDrainSimulation(25, 10)).toEqual([15,5,0]);
    });
    it("test 2", () => {
      expect(batteryDrainSimulation(5, 10)).toEqual([0]);
    });
  });

  describe("2.8 atmMenuNavigation", () => {
    function atmMenuNavigation(actions) {
      if (!actions || actions.length === 0) return 0; let i = 0; do { if (actions[i] === "EXIT") break; i++; } while (i < actions.length); return i;
    }
    it("test 1", () => {
      expect(atmMenuNavigation(["BALANCE", "WITHDRAW", "EXIT", "PRINT"])).toEqual(2);
    });
    it("test 2", () => {
      expect(atmMenuNavigation(["EXIT"])).toEqual(0);
    });
  });

  describe("2.9 stringAccumulateLength", () => {
    function stringAccumulateLength(str, suffix, minLength) {
      do { str += suffix; } while (str.length < minLength); return str;
    }
    it("test 1", () => {
      expect(stringAccumulateLength("hi", "!", 5)).toEqual("hi!!!");
    });
    it("test 2", () => {
      expect(stringAccumulateLength("longtext", "*", 5)).toEqual("longtext*");
    });
  });

  describe("2.10 stepByStepApproximation", () => {
    function stepByStepApproximation(current, target, step) {
      do { if (current < target) current = Math.min(target, current + step); else current = Math.max(target, current - step); } while (Math.abs(current - target) > 0.001); return current;
    }
    it("test 1", () => {
      expect(stepByStepApproximation(0, 10, 4)).toEqual(10);
    });
    it("test 2", () => {
      expect(stepByStepApproximation(15, 5, 5)).toEqual(5);
    });
  });

  describe("2.11 coffeeMachineBrew", () => {
    function coffeeMachineBrew(targetMl, portionMl) {
      let total = 0, count = 0; do { total += portionMl; count++; } while (total < targetMl); return { portions: count, totalMl: total };
    }
    it("test 1", () => {
      expect(coffeeMachineBrew(180, 50)).toEqual({"portions":4,"totalMl":200});
    });
    it("test 2", () => {
      expect(coffeeMachineBrew(40, 50)).toEqual({"portions":1,"totalMl":50});
    });
  });

  describe("2.12 randomWalkSim", () => {
    function randomWalkSim(deltaSteps, boundary) {
      if (!deltaSteps || deltaSteps.length === 0) return 0; let pos = 0, i = 0; do { pos += deltaSteps[i]; i++; } while (i < deltaSteps.length && Math.abs(pos) < boundary); return pos;
    }
    it("test 1", () => {
      expect(randomWalkSim([1, 2, -1, 3], 3)).toEqual(3);
    });
    it("test 2", () => {
      expect(randomWalkSim([-2, -3], 4)).toEqual(-5);
    });
  });

  describe("2.13 auctionBidStep", () => {
    function auctionBidStep(currentBid, step, reservePrice) {
      do { currentBid += step; } while (currentBid < reservePrice); return currentBid;
    }
    it("test 1", () => {
      expect(auctionBidStep(100, 25, 170)).toEqual(175);
    });
    it("test 2", () => {
      expect(auctionBidStep(200, 50, 150)).toEqual(250);
    });
  });

  describe("2.14 paginateDataDoWhile", () => {
    function paginateDataDoWhile(pagesArray, totalPages) {
      const result = []; let page = 0; if (!pagesArray || pagesArray.length === 0) return []; do { if (page < pagesArray.length) result.push(...pagesArray[page]); page++; } while (page < totalPages && page < pagesArray.length); return result;
    }
    it("test 1", () => {
      expect(paginateDataDoWhile([["a", "b"], ["c", "d"], ["e"]], 2)).toEqual(["a","b","c","d"]);
    });
    it("test 2", () => {
      expect(paginateDataDoWhile([["item1"]], 1)).toEqual(["item1"]);
    });
  });

  describe("2.15 coolingSystemCycle", () => {
    function coolingSystemCycle(startTemp, targetTemp, coolRate) {
      let cycles = 0; do { startTemp -= coolRate; cycles++; } while (startTemp > targetTemp); return cycles;
    }
    it("test 1", () => {
      expect(coolingSystemCycle(95, 70, 10)).toEqual(3);
    });
    it("test 2", () => {
      expect(coolingSystemCycle(68, 70, 5)).toEqual(1);
    });
  });

  describe("2.16 elevatorMove", () => {
    function elevatorMove(currentFloor, targetFloor) {
      const floors = []; let f = currentFloor; const dir = targetFloor >= currentFloor ? 1 : -1; do { if (currentFloor === targetFloor) { floors.push(f); break; } f += dir; floors.push(f); } while (f !== targetFloor); return floors;
    }
    it("test 1", () => {
      expect(elevatorMove(1, 4)).toEqual([2,3,4]);
    });
    it("test 2", () => {
      expect(elevatorMove(5, 3)).toEqual([4,3]);
    });
    it("test 3", () => {
      expect(elevatorMove(2, 2)).toEqual([2]);
    });
  });

  describe("2.17 gameBossHitPoints", () => {
    function gameBossHitPoints(bossHp, damagePerHit) {
      let hits = 0; do { bossHp -= damagePerHit; hits++; } while (bossHp > 0); return hits;
    }
    it("test 1", () => {
      expect(gameBossHitPoints(100, 35)).toEqual(3);
    });
    it("test 2", () => {
      expect(gameBossHitPoints(10, 50)).toEqual(1);
    });
  });

  describe("2.18 trainSpeedBraking", () => {
    function trainSpeedBraking(speed, decelRate) {
      const speeds = []; do { speed = Math.max(0, speed - decelRate); speeds.push(speed); } while (speed > 0); return speeds;
    }
    it("test 1", () => {
      expect(trainSpeedBraking(60, 25)).toEqual([35,10,0]);
    });
    it("test 2", () => {
      expect(trainSpeedBraking(20, 30)).toEqual([0]);
    });
  });

  describe("2.19 creditRepaymentMonths", () => {
    function creditRepaymentMonths(balance, monthlyPayment) {
      let m = 0; do { balance -= monthlyPayment; m++; } while (balance > 0); return m;
    }
    it("test 1", () => {
      expect(creditRepaymentMonths(1000, 300)).toEqual(4);
    });
    it("test 2", () => {
      expect(creditRepaymentMonths(200, 500)).toEqual(1);
    });
  });

  describe("2.20 downloadBufferChunks", () => {
    function downloadBufferChunks(totalBytes, chunkSize) {
      const res = []; do { totalBytes = Math.max(0, totalBytes - chunkSize); res.push(totalBytes); } while (totalBytes > 0); return res;
    }
    it("test 1", () => {
      expect(downloadBufferChunks(150, 60)).toEqual([90,30,0]);
    });
    it("test 2", () => {
      expect(downloadBufferChunks(40, 50)).toEqual([0]);
    });
  });

  describe("2.21 cardDeckDraw", () => {
    function cardDeckDraw(cards) {
      if (!cards || cards.length === 0) return 0; let i = 0; do { const c = cards[i]; i++; if (c === "A") break; } while (i < cards.length); return i;
    }
    it("test 1", () => {
      expect(cardDeckDraw(["10", "K", "A", "7"])).toEqual(3);
    });
    it("test 2", () => {
      expect(cardDeckDraw(["A"])).toEqual(1);
    });
    it("test 3", () => {
      expect(cardDeckDraw(["Q", "J"])).toEqual(2);
    });
  });

  describe("2.22 printerQueueProcess", () => {
    function printerQueueProcess(jobPages) {
      if (!jobPages || jobPages.length === 0) return 0; let total = 0, i = 0; do { total += jobPages[i]; i++; } while (i < jobPages.length); return total;
    }
    it("test 1", () => {
      expect(printerQueueProcess([10, 25, 5])).toEqual(40);
    });
    it("test 2", () => {
      expect(printerQueueProcess([7])).toEqual(7);
    });
    it("test 3", () => {
      expect(printerQueueProcess([])).toEqual(0);
    });
  });

  describe("2.23 countdownDoWhile", () => {
    function countdownDoWhile(start) {
      if (start <= 0) return [0]; const res = []; do { res.push(start); start--; } while (start >= 0); return res;
    }
    it("test 1", () => {
      expect(countdownDoWhile(3)).toEqual([3,2,1,0]);
    });
    it("test 2", () => {
      expect(countdownDoWhile(0)).toEqual([0]);
    });
  });

  describe("2.24 passwordGeneratorLength", () => {
    function passwordGeneratorLength(chars, targetLen) {
      if (!chars || chars.length === 0) return ""; let res = "", i = 0; do { res += chars[i % chars.length]; i++; } while (res.length < targetLen); return res;
    }
    it("test 1", () => {
      expect(passwordGeneratorLength("abc", 7)).toEqual("abcabca");
    });
    it("test 2", () => {
      expect(passwordGeneratorLength("x", 3)).toEqual("xxx");
    });
  });

  describe("2.25 assemblyLineInspector", () => {
    function assemblyLineInspector(items) {
      if (!items || items.length === 0) return { inspectedCount: 0, passedAll: true }; let i = 0, passed = true; do { if (items[i] === "DEFECT") { passed = false; i++; break; } i++; } while (i < items.length); return { inspectedCount: i, passedAll: passed };
    }
    it("test 1", () => {
      expect(assemblyLineInspector(["OK", "OK", "DEFECT", "OK"])).toEqual({"inspectedCount":3,"passedAll":false});
    });
    it("test 2", () => {
      expect(assemblyLineInspector(["OK", "OK"])).toEqual({"inspectedCount":2,"passedAll":true});
    });
  });

});
describe("SOLUTIONS: Модуль 3: Параметричний цикл for", () => {
  describe("3.1 rangeSum", () => {
    function rangeSum(start, end) {
      let sum = 0; for (let i = start; i <= end; i++) sum += i; return sum;
    }
    it("test 1", () => {
      expect(rangeSum(1, 5)).toEqual(15);
    });
    it("test 2", () => {
      expect(rangeSum(3, 3)).toEqual(3);
    });
    it("test 3", () => {
      expect(rangeSum(5, 2)).toEqual(0);
    });
  });

  describe("3.2 evensInRange", () => {
    function evensInRange(start, end) {
      const res = []; for (let i = start; i <= end; i++) { if (i % 2 === 0) res.push(i); } return res;
    }
    it("test 1", () => {
      expect(evensInRange(2, 8)).toEqual([2,4,6,8]);
    });
    it("test 2", () => {
      expect(evensInRange(3, 7)).toEqual([4,6]);
    });
    it("test 3", () => {
      expect(evensInRange(5, 5)).toEqual([]);
    });
  });

  describe("3.3 oddsInRange", () => {
    function oddsInRange(start, end) {
      const res = []; for (let i = start; i <= end; i++) { if (Math.abs(i) % 2 === 1) res.push(i); } return res;
    }
    it("test 1", () => {
      expect(oddsInRange(1, 7)).toEqual([1,3,5,7]);
    });
    it("test 2", () => {
      expect(oddsInRange(-3, 1)).toEqual([-3,-1,1]);
    });
  });

  describe("3.4 stepCounter", () => {
    function stepCounter(start, end, step) {
      const res = []; if (step <= 0) return []; for (let i = start; i <= end; i += step) res.push(i); return res;
    }
    it("test 1", () => {
      expect(stepCounter(0, 10, 2)).toEqual([0,2,4,6,8,10]);
    });
    it("test 2", () => {
      expect(stepCounter(5, 20, 5)).toEqual([5,10,15,20]);
    });
    it("test 3", () => {
      expect(stepCounter(1, 5, 0)).toEqual([]);
    });
  });

  describe("3.5 multiplicationTable", () => {
    function multiplicationTable(k, count) {
      const res = []; for (let i = 1; i <= count; i++) res.push(k * i); return res;
    }
    it("test 1", () => {
      expect(multiplicationTable(7, 4)).toEqual([7,14,21,28]);
    });
    it("test 2", () => {
      expect(multiplicationTable(3, 1)).toEqual([3]);
    });
    it("test 3", () => {
      expect(multiplicationTable(5, 0)).toEqual([]);
    });
  });

  describe("3.6 sumOfSquares", () => {
    function sumOfSquares(n) {
      let sum = 0; for (let i = 1; i <= n; i++) sum += i * i; return sum;
    }
    it("test 1", () => {
      expect(sumOfSquares(3)).toEqual(14);
    });
    it("test 2", () => {
      expect(sumOfSquares(4)).toEqual(30);
    });
    it("test 3", () => {
      expect(sumOfSquares(0)).toEqual(0);
    });
  });

  describe("3.7 countLetterOccurrences", () => {
    function countLetterOccurrences(str, letter) {
      let c = 0; for (let i = 0; i < str.length; i++) { if (str[i] === letter) c++; } return c;
    }
    it("test 1", () => {
      expect(countLetterOccurrences("hello world", "l")).toEqual(3);
    });
    it("test 2", () => {
      expect(countLetterOccurrences("banana", "a")).toEqual(3);
    });
    it("test 3", () => {
      expect(countLetterOccurrences("code", "x")).toEqual(0);
    });
  });

  describe("3.8 reverseStringFor", () => {
    function reverseStringFor(str) {
      let res = ""; for (let i = str.length - 1; i >= 0; i--) res += str[i]; return res;
    }
    it("test 1", () => {
      expect(reverseStringFor("frontend")).toEqual("dnetnorf");
    });
    it("test 2", () => {
      expect(reverseStringFor("loop")).toEqual("pool");
    });
    it("test 3", () => {
      expect(reverseStringFor("")).toEqual("");
    });
  });

  describe("3.9 arithmeticProgression", () => {
    function arithmeticProgression(first, diff, n) {
      const res = []; for (let i = 0; i < n; i++) res.push(first + i * diff); return res;
    }
    it("test 1", () => {
      expect(arithmeticProgression(3, 4, 4)).toEqual([3,7,11,15]);
    });
    it("test 2", () => {
      expect(arithmeticProgression(10, -2, 3)).toEqual([10,8,6]);
    });
  });

  describe("3.10 geometricProgression", () => {
    function geometricProgression(first, ratio, n) {
      const res = []; let cur = first; for (let i = 0; i < n; i++) { res.push(cur); cur *= ratio; } return res;
    }
    it("test 1", () => {
      expect(geometricProgression(2, 3, 4)).toEqual([2,6,18,54]);
    });
    it("test 2", () => {
      expect(geometricProgression(5, 2, 3)).toEqual([5,10,20]);
    });
  });

  describe("3.11 filterShortWords", () => {
    function filterShortWords(words, minLen) {
      const res = []; for (let i = 0; i < words.length; i++) { if (words[i].length >= minLen) res.push(words[i]); } return res;
    }
    it("test 1", () => {
      expect(filterShortWords(["apple", "cat", "banana", "dog"], 4)).toEqual(["apple","banana"]);
    });
    it("test 2", () => {
      expect(filterShortWords(["a", "bb", "ccc"], 2)).toEqual(["bb","ccc"]);
    });
  });

  describe("3.12 findMaxIndex", () => {
    function findMaxIndex(arr) {
      if (!arr || arr.length === 0) return -1; let maxIdx = 0; for (let i = 1; i < arr.length; i++) { if (arr[i] > arr[maxIdx]) maxIdx = i; } return maxIdx;
    }
    it("test 1", () => {
      expect(findMaxIndex([3, 9, 2, 9, 5])).toEqual(1);
    });
    it("test 2", () => {
      expect(findMaxIndex([-5, -1, -8])).toEqual(1);
    });
    it("test 3", () => {
      expect(findMaxIndex([])).toEqual(-1);
    });
  });

  describe("3.13 findMinIndex", () => {
    function findMinIndex(arr) {
      if (!arr || arr.length === 0) return -1; let minIdx = 0; for (let i = 1; i < arr.length; i++) { if (arr[i] < arr[minIdx]) minIdx = i; } return minIdx;
    }
    it("test 1", () => {
      expect(findMinIndex([10, 4, 15, 2])).toEqual(3);
    });
    it("test 2", () => {
      expect(findMinIndex([5, 5, 5])).toEqual(0);
    });
    it("test 3", () => {
      expect(findMinIndex([])).toEqual(-1);
    });
  });

  describe("3.14 calculateAverage", () => {
    function calculateAverage(numbers) {
      if (!numbers || numbers.length === 0) return 0; let s = 0; for (let i = 0; i < numbers.length; i++) s += numbers[i]; return s / numbers.length;
    }
    it("test 1", () => {
      expect(calculateAverage([2, 4, 6, 8])).toEqual(5);
    });
    it("test 2", () => {
      expect(calculateAverage([10])).toEqual(10);
    });
    it("test 3", () => {
      expect(calculateAverage([])).toEqual(0);
    });
  });

  describe("3.15 countAboveThreshold", () => {
    function countAboveThreshold(arr, threshold) {
      let c = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] > threshold) c++; } return c;
    }
    it("test 1", () => {
      expect(countAboveThreshold([10, 25, 5, 40, 18], 20)).toEqual(2);
    });
    it("test 2", () => {
      expect(countAboveThreshold([-5, -2, 0, 3], -1)).toEqual(2);
    });
  });

  describe("3.16 everyNthElement", () => {
    function everyNthElement(arr, n) {
      const res = []; if (n <= 0) return []; for (let i = n - 1; i < arr.length; i += n) res.push(arr[i]); return res;
    }
    it("test 1", () => {
      expect(everyNthElement(["a", "b", "c", "d", "e", "f"], 2)).toEqual(["b","d","f"]);
    });
    it("test 2", () => {
      expect(everyNthElement([1, 2, 3, 4, 5], 3)).toEqual([3]);
    });
  });

  describe("3.17 pairwiseDifferences", () => {
    function pairwiseDifferences(arr) {
      const res = []; for (let i = 0; i < arr.length - 1; i++) res.push(arr[i + 1] - arr[i]); return res;
    }
    it("test 1", () => {
      expect(pairwiseDifferences([1, 5, 2, 10])).toEqual([4,-3,8]);
    });
    it("test 2", () => {
      expect(pairwiseDifferences([10, 20])).toEqual([10]);
    });
    it("test 3", () => {
      expect(pairwiseDifferences([5])).toEqual([]);
    });
  });

  describe("3.18 runningTotal", () => {
    function runningTotal(arr) {
      const res = []; let s = 0; for (let i = 0; i < arr.length; i++) { s += arr[i]; res.push(s); } return res;
    }
    it("test 1", () => {
      expect(runningTotal([1, 2, 3, 4])).toEqual([1,3,6,10]);
    });
    it("test 2", () => {
      expect(runningTotal([5, -2, 4])).toEqual([5,3,7]);
    });
    it("test 3", () => {
      expect(runningTotal([])).toEqual([]);
    });
  });

  describe("3.19 alternateSignsSum", () => {
    function alternateSignsSum(arr) {
      let sum = 0; for (let i = 0; i < arr.length; i++) { if (i % 2 === 0) sum += arr[i]; else sum -= arr[i]; } return sum;
    }
    it("test 1", () => {
      expect(alternateSignsSum([10, 4, 3, 2])).toEqual(7);
    });
    it("test 2", () => {
      expect(alternateSignsSum([5])).toEqual(5);
    });
    it("test 3", () => {
      expect(alternateSignsSum([])).toEqual(0);
    });
  });

  describe("3.20 stringRepeatFor", () => {
    function stringRepeatFor(str, n) {
      let res = ""; for (let i = 0; i < n; i++) res += str; return res;
    }
    it("test 1", () => {
      expect(stringRepeatFor("abc", 3)).toEqual("abcabcabc");
    });
    it("test 2", () => {
      expect(stringRepeatFor("x", 0)).toEqual("");
    });
  });

  describe("3.21 countVowels", () => {
    function countVowels(str) {
      const vowels = "aeiouyаеєиіїоуюя"; const lower = str.toLowerCase(); let c = 0; for (let i = 0; i < lower.length; i++) { if (vowels.includes(lower[i])) c++; } return c;
    }
    it("test 1", () => {
      expect(countVowels("Hello World")).toEqual(3);
    });
    it("test 2", () => {
      expect(countVowels("Привіт світ")).toEqual(3);
    });
  });

  describe("3.22 caesarCipherSimple", () => {
    function caesarCipherSimple(str, shift) {
      let res = ""; for (let i = 0; i < str.length; i++) { const code = str.charCodeAt(i); if (code >= 97 && code <= 122) { res += String.fromCharCode(97 + ((code - 97 + shift) % 26 + 26) % 26); } else res += str[i]; } return res;
    }
    it("test 1", () => {
      expect(caesarCipherSimple("abc", 1)).toEqual("bcd");
    });
    it("test 2", () => {
      expect(caesarCipherSimple("xyz", 2)).toEqual("zab");
    });
    it("test 3", () => {
      expect(caesarCipherSimple("hello, world!", 3)).toEqual("khoor, zruog!");
    });
  });

  describe("3.23 findFirstNegative", () => {
    function findFirstNegative(arr) {
      for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) return i; } return -1;
    }
    it("test 1", () => {
      expect(findFirstNegative([3, 5, -2, 8])).toEqual(2);
    });
    it("test 2", () => {
      expect(findFirstNegative([1, 2, 3])).toEqual(-1);
    });
  });

  describe("3.24 arrayIsSortedAsc", () => {
    function arrayIsSortedAsc(arr) {
      for (let i = 0; i < arr.length - 1; i++) { if (arr[i] > arr[i + 1]) return false; } return true;
    }
    it("test 1", () => {
      expect(arrayIsSortedAsc([1, 2, 3, 5, 5])).toEqual(true);
    });
    it("test 2", () => {
      expect(arrayIsSortedAsc([1, 3, 2])).toEqual(false);
    });
    it("test 3", () => {
      expect(arrayIsSortedAsc([])).toEqual(true);
    });
  });

  describe("3.25 replaceNegativesWithZero", () => {
    function replaceNegativesWithZero(arr) {
      const res = []; for (let i = 0; i < arr.length; i++) { res.push(arr[i] < 0 ? 0 : arr[i]); } return res;
    }
    it("test 1", () => {
      expect(replaceNegativesWithZero([1, -4, 7, -9, 0])).toEqual([1,0,7,0,0]);
    });
    it("test 2", () => {
      expect(replaceNegativesWithZero([-1, -2])).toEqual([0,0]);
    });
  });

  describe("3.26 mergeTwoArraysAlternating", () => {
    function mergeTwoArraysAlternating(a, b) {
      const res = []; const len = Math.max(a.length, b.length); for (let i = 0; i < len; i++) { if (i < a.length) res.push(a[i]); if (i < b.length) res.push(b[i]); } return res;
    }
    it("test 1", () => {
      expect(mergeTwoArraysAlternating([1, 2, 3], ["a", "b", "c"])).toEqual([1,"a",2,"b",3,"c"]);
    });
    it("test 2", () => {
      expect(mergeTwoArraysAlternating([1, 2], ["x", "y", "z"])).toEqual([1,"x",2,"y","z"]);
    });
  });

  describe("3.27 countPrimesUpTo", () => {
    function countPrimesUpTo(n) {
      let count = 0; for (let k = 2; k <= n; k++) { let prime = true; for (let d = 2; d * d <= k; d++) { if (k % d === 0) { prime = false; break; } } if (prime) count++; } return count;
    }
    it("test 1", () => {
      expect(countPrimesUpTo(10)).toEqual(4);
    });
    it("test 2", () => {
      expect(countPrimesUpTo(20)).toEqual(8);
    });
    it("test 3", () => {
      expect(countPrimesUpTo(1)).toEqual(0);
    });
  });

  describe("3.28 charFrequencyMap", () => {
    function charFrequencyMap(str) {
      const map = {}; for (let i = 0; i < str.length; i++) { const ch = str[i]; map[ch] = (map[ch] || 0) + 1; } return map;
    }
    it("test 1", () => {
      expect(charFrequencyMap("apple")).toEqual({"a":1,"p":2,"l":1,"e":1});
    });
    it("test 2", () => {
      expect(charFrequencyMap("")).toEqual({});
    });
  });

  describe("3.29 chunkArrayFor", () => {
    function chunkArrayFor(arr, size) {
      const res = []; if (size <= 0) return []; for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size)); return res;
    }
    it("test 1", () => {
      expect(chunkArrayFor([1, 2, 3, 4, 5], 2)).toEqual([[1,2],[3,4],[5]]);
    });
    it("test 2", () => {
      expect(chunkArrayFor([1, 2, 3], 3)).toEqual([[1,2,3]]);
    });
    it("test 3", () => {
      expect(chunkArrayFor([], 2)).toEqual([]);
    });
  });

  describe("3.30 powerSeriesSum", () => {
    function powerSeriesSum(x, n) {
      let sum = 1, cur = 1; for (let i = 1; i <= n; i++) { cur *= x; sum += cur; } return sum;
    }
    it("test 1", () => {
      expect(powerSeriesSum(2, 3)).toEqual(15);
    });
    it("test 2", () => {
      expect(powerSeriesSum(3, 2)).toEqual(13);
    });
    it("test 3", () => {
      expect(powerSeriesSum(5, 0)).toEqual(1);
    });
  });

});
describe("SOLUTIONS: Модуль 4: Оператори break, continue та захист від вічних циклів", () => {
  describe("4.1 findFirstDivisible", () => {
    function findFirstDivisible(start, k) {
      if (k <= 0) return null; let cur = start; while (true) { if (cur % k === 0) break; cur++; } return cur;
    }
    it("test 1", () => {
      expect(findFirstDivisible(14, 5)).toEqual(15);
    });
    it("test 2", () => {
      expect(findFirstDivisible(20, 4)).toEqual(20);
    });
    it("test 3", () => {
      expect(findFirstDivisible(10, 0)).toEqual(null);
    });
  });

  describe("4.2 skipDivisibleByThree", () => {
    function skipDivisibleByThree(n) {
      let sum = 0; for (let i = 1; i <= n; i++) { if (i % 3 === 0) continue; sum += i; } return sum;
    }
    it("test 1", () => {
      expect(skipDivisibleByThree(6)).toEqual(12);
    });
    it("test 2", () => {
      expect(skipDivisibleByThree(3)).toEqual(3);
    });
  });

  describe("4.3 findFirstNegativeIndexBreak", () => {
    function findFirstNegativeIndexBreak(arr) {
      let idx = -1; for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) { idx = i; break; } } return idx;
    }
    it("test 1", () => {
      expect(findFirstNegativeIndexBreak([4, 8, -5, 2, -1])).toEqual(2);
    });
    it("test 2", () => {
      expect(findFirstNegativeIndexBreak([1, 2, 3])).toEqual(-1);
    });
  });

  describe("4.4 sumUntilNegative", () => {
    function sumUntilNegative(arr) {
      let sum = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) break; sum += arr[i]; } return sum;
    }
    it("test 1", () => {
      expect(sumUntilNegative([5, 10, -2, 20])).toEqual(15);
    });
    it("test 2", () => {
      expect(sumUntilNegative([-1, 10])).toEqual(0);
    });
    it("test 3", () => {
      expect(sumUntilNegative([1, 2, 3])).toEqual(6);
    });
  });

  describe("4.5 filterNonNumericContinue", () => {
    function filterNonNumericContinue(arr) {
      let sum = 0; for (let i = 0; i < arr.length; i++) { const v = arr[i]; if (typeof v !== "number" || isNaN(v)) continue; sum += v; } return sum;
    }
    it("test 1", () => {
      expect(filterNonNumericContinue([10, "text", 20, null, 5, NaN])).toEqual(35);
    });
    it("test 2", () => {
      expect(filterNonNumericContinue(["a", "b"])).toEqual(0);
    });
  });

  describe("4.6 safeWhileCounter", () => {
    function safeWhileCounter(conditionFn, maxIter) {
      let i = 0; let timedOut = false; while (conditionFn()) { i++; if (i >= maxIter) { timedOut = true; break; } } return { iterations: i, timedOut };
    }
    it("test 1", () => {
      expect(safeWhileCounter((() => { let c = 0; return () => ++c < 3; })(), 10)).toEqual({"iterations":2,"timedOut":false});
    });
    it("test 2", () => {
      expect(safeWhileCounter(() => true, 5)).toEqual({"iterations":5,"timedOut":true});
    });
  });

  describe("4.7 searchUserInRecords", () => {
    function searchUserInRecords(users, id) {
      let found = null; for (let i = 0; i < users.length; i++) { if (users[i].id === id) { found = users[i]; break; } } return found;
    }
    it("test 1", () => {
      expect(searchUserInRecords([{ id: 1, name: "Anna" }, { id: 2, name: "Bohdan" }], 2)).toEqual({"id":2,"name":"Bohdan"});
    });
    it("test 2", () => {
      expect(searchUserInRecords([{ id: 1 }], 99)).toEqual(null);
    });
  });

  describe("4.8 sumOddOnlyContinue", () => {
    function sumOddOnlyContinue(n) {
      let sum = 0; for (let i = 1; i <= n; i++) { if (i % 2 === 0) continue; sum += i; } return sum;
    }
    it("test 1", () => {
      expect(sumOddOnlyContinue(5)).toEqual(9);
    });
    it("test 2", () => {
      expect(sumOddOnlyContinue(6)).toEqual(9);
    });
  });

  describe("4.9 findTargetSumIndex", () => {
    function findTargetSumIndex(arr, targetSum) {
      let s = 0, idx = -1; for (let i = 0; i < arr.length; i++) { s += arr[i]; if (s >= targetSum) { idx = i; break; } } return idx;
    }
    it("test 1", () => {
      expect(findTargetSumIndex([10, 20, 30, 40], 55)).toEqual(2);
    });
    it("test 2", () => {
      expect(findTargetSumIndex([1, 2, 3], 100)).toEqual(-1);
    });
  });

  describe("4.10 skipForbiddenWords", () => {
    function skipForbiddenWords(words, forbiddenList) {
      const res = []; for (let i = 0; i < words.length; i++) { if (forbiddenList.includes(words[i])) continue; res.push(words[i]); } return res.join(" ");
    }
    it("test 1", () => {
      expect(skipForbiddenWords(["Hello", "bad", "wonderful", "world"], ["bad"])).toEqual("Hello wonderful world");
    });
    it("test 2", () => {
      expect(skipForbiddenWords(["test", "code"], ["test", "code"])).toEqual("");
    });
  });

  describe("4.11 firstMultipleOfBoth", () => {
    function firstMultipleOfBoth(a, b) {
      let c = Math.max(a, b); while (true) { if (c % a === 0 && c % b === 0) break; c++; } return c;
    }
    it("test 1", () => {
      expect(firstMultipleOfBoth(4, 6)).toEqual(12);
    });
    it("test 2", () => {
      expect(firstMultipleOfBoth(3, 5)).toEqual(15);
    });
  });

  describe("4.12 processBatchWithLimit", () => {
    function processBatchWithLimit(transactions, budget) {
      let total = 0, count = 0; for (let i = 0; i < transactions.length; i++) { if (total + transactions[i] > budget) break; total += transactions[i]; count++; } return { count, total };
    }
    it("test 1", () => {
      expect(processBatchWithLimit([100, 250, 300, 50], 400)).toEqual({"count":2,"total":350});
    });
    it("test 2", () => {
      expect(processBatchWithLimit([500], 200)).toEqual({"count":0,"total":0});
    });
  });

  describe("4.13 infiniteLoopBreaker", () => {
    function infiniteLoopBreaker(maxSteps) {
      let steps = 0; while (true) { steps++; if (steps >= maxSteps) break; } return steps;
    }
    it("test 1", () => {
      expect(infiniteLoopBreaker(10)).toEqual(10);
    });
    it("test 2", () => {
      expect(infiniteLoopBreaker(1)).toEqual(1);
    });
  });

  describe("4.14 skipEveryThirdNumber", () => {
    function skipEveryThirdNumber(n) {
      const res = []; for (let i = 1; i <= n; i++) { if (i % 3 === 0) continue; res.push(i); } return res;
    }
    it("test 1", () => {
      expect(skipEveryThirdNumber(8)).toEqual([1,2,4,5,7,8]);
    });
    it("test 2", () => {
      expect(skipEveryThirdNumber(3)).toEqual([1,2]);
    });
  });

  describe("4.15 stopOnZeroMarker", () => {
    function stopOnZeroMarker(stream) {
      const res = []; for (let i = 0; i < stream.length; i++) { if (stream[i] === 0) break; res.push(stream[i]); } return res;
    }
    it("test 1", () => {
      expect(stopOnZeroMarker([4, 8, 15, 0, 16, 23])).toEqual([4,8,15]);
    });
    it("test 2", () => {
      expect(stopOnZeroMarker([0, 1, 2])).toEqual([]);
    });
  });

  describe("4.16 filterSpamComments", () => {
    function filterSpamComments(comments, spamWord) {
      const approved = []; const lower = spamWord.toLowerCase(); for (let i = 0; i < comments.length; i++) { if (comments[i].toLowerCase().includes(lower)) continue; approved.push(comments[i]); } return approved;
    }
    it("test 1", () => {
      expect(filterSpamComments(["Nice post", "Buy crypto now!", "Great guide"], "crypto")).toEqual(["Nice post","Great guide"]);
    });
    it("test 2", () => {
      expect(filterSpamComments(["All fine"], "spam")).toEqual(["All fine"]);
    });
  });

  describe("4.17 findPrimeBreakEarly", () => {
    function findPrimeBreakEarly(n) {
      if (n < 2) return false; let isPrime = true; for (let d = 2; d * d <= n; d++) { if (n % d === 0) { isPrime = false; break; } } return isPrime;
    }
    it("test 1", () => {
      expect(findPrimeBreakEarly(29)).toEqual(true);
    });
    it("test 2", () => {
      expect(findPrimeBreakEarly(35)).toEqual(false);
    });
    it("test 3", () => {
      expect(findPrimeBreakEarly(1)).toEqual(false);
    });
  });

  describe("4.18 accumulatePointsWithCap", () => {
    function accumulatePointsWithCap(events, maxCap) {
      let total = 0; for (let i = 0; i < events.length; i++) { total += events[i]; if (total >= maxCap) { total = maxCap; break; } } return total;
    }
    it("test 1", () => {
      expect(accumulatePointsWithCap([10, 20, 30, 40], 50)).toEqual(50);
    });
    it("test 2", () => {
      expect(accumulatePointsWithCap([10, 15], 50)).toEqual(25);
    });
  });

  describe("4.19 skipWeekendDays", () => {
    function skipWeekendDays(schedule) {
      let total = 0; for (let i = 0; i < schedule.length; i++) { const item = schedule[i]; if (item.day === 6 || item.day === 7) continue; total += item.hours; } return total;
    }
    it("test 1", () => {
      expect(skipWeekendDays([{ day: 1, hours: 8 }, { day: 6, hours: 4 }, { day: 3, hours: 7 }])).toEqual(15);
    });
    it("test 2", () => {
      expect(skipWeekendDays([{ day: 7, hours: 5 }])).toEqual(0);
    });
  });

  describe("4.20 findFirstDuplicateAdjacent", () => {
    function findFirstDuplicateAdjacent(arr) {
      let dup = null; for (let i = 0; i < arr.length - 1; i++) { if (arr[i] === arr[i + 1]) { dup = arr[i]; break; } } return dup;
    }
    it("test 1", () => {
      expect(findFirstDuplicateAdjacent([1, 2, 2, 3, 4])).toEqual(2);
    });
    it("test 2", () => {
      expect(findFirstDuplicateAdjacent(["a", "b", "c", "c"])).toEqual("c");
    });
    it("test 3", () => {
      expect(findFirstDuplicateAdjacent([1, 2, 3])).toEqual(null);
    });
  });

  describe("4.21 parseCsvRowValues", () => {
    function parseCsvRowValues(csvLine, maxCols) {
      const parts = csvLine.split(","); const res = []; for (let i = 0; i < parts.length; i++) { if (res.length >= maxCols) break; res.push(parts[i].trim()); } return res;
    }
    it("test 1", () => {
      expect(parseCsvRowValues("id, name, email, role, date", 3)).toEqual(["id","name","email"]);
    });
    it("test 2", () => {
      expect(parseCsvRowValues("a, b", 5)).toEqual(["a","b"]);
    });
  });

  describe("4.22 safeNewtonSqrt", () => {
    function safeNewtonSqrt(x, maxIter, eps) {
      if (x < 0) return null; if (x === 0) return 0; let r = x; for (let i = 0; i < maxIter; i++) { if (Math.abs(r * r - x) < eps) break; r = (r + x / r) / 2; } return Math.round(r * 1000) / 1000;
    }
    it("test 1", () => {
      expect(safeNewtonSqrt(25, 20, 0.0001)).toEqual(5);
    });
    it("test 2", () => {
      expect(safeNewtonSqrt(2, 20, 0.0001)).toEqual(1.414);
    });
    it("test 3", () => {
      expect(safeNewtonSqrt(-4, 10, 0.01)).toEqual(null);
    });
  });

  describe("4.23 packetLossRetry", () => {
    function packetLossRetry(packetStatus) {
      let delivered = false, i = 0; for (; i < packetStatus.length; i++) { if (packetStatus[i] === "SUCCESS") { delivered = true; i++; break; } } return { delivered, attempts: i };
    }
    it("test 1", () => {
      expect(packetLossRetry(["DROP", "DROP", "SUCCESS", "DROP"])).toEqual({"delivered":true,"attempts":3});
    });
    it("test 2", () => {
      expect(packetLossRetry(["DROP", "DROP"])).toEqual({"delivered":false,"attempts":2});
    });
  });

  describe("4.24 skipNullAndUndefined", () => {
    function skipNullAndUndefined(arr) {
      const res = []; for (let i = 0; i < arr.length; i++) { const item = arr[i]; if (item === null || item === undefined) continue; res.push(item); } return res;
    }
    it("test 1", () => {
      expect(skipNullAndUndefined([1, null, 2, undefined, 0, false, ""])).toEqual([1,2,0,false,""]);
    });
    it("test 2", () => {
      expect(skipNullAndUndefined([null, undefined])).toEqual([]);
    });
  });

  describe("4.25 findSecretCode", () => {
    function findSecretCode(tokens, prefix) {
      let secret = null; for (let i = 0; i < tokens.length; i++) { if (tokens[i].startsWith(prefix)) { secret = tokens[i]; break; } } return secret;
    }
    it("test 1", () => {
      expect(findSecretCode(["tok_abc", "SEC_999", "tok_xyz"], "SEC_")).toEqual("SEC_999");
    });
    it("test 2", () => {
      expect(findSecretCode(["a", "b"], "x_")).toEqual(null);
    });
  });

});
describe("SOLUTIONS: Модуль 5: Позначення циклів у блок-схемах", () => {
  describe("5.1 flowchartPreconditionLoop", () => {
    function flowchartPreconditionLoop(n) {
      const iterations = []; let i = 0; while (i < n) { iterations.push(i); i++; } return iterations;
    }
    it("test 1", () => {
      expect(flowchartPreconditionLoop(3)).toEqual([0,1,2]);
    });
    it("test 2", () => {
      expect(flowchartPreconditionLoop(0)).toEqual([]);
    });
    it("test 3", () => {
      expect(flowchartPreconditionLoop(1)).toEqual([0]);
    });
  });

  describe("5.2 flowchartPostconditionLoop", () => {
    function flowchartPostconditionLoop(limit) {
      let i = 0; let count = 0; do { i++; count++; } while (i < limit); return { iterationsCount: count, finalValue: i };
    }
    it("test 1", () => {
      expect(flowchartPostconditionLoop(3)).toEqual({"iterationsCount":3,"finalValue":3});
    });
    it("test 2", () => {
      expect(flowchartPostconditionLoop(-1)).toEqual({"iterationsCount":1,"finalValue":1});
    });
    it("test 3", () => {
      expect(flowchartPostconditionLoop(0)).toEqual({"iterationsCount":1,"finalValue":1});
    });
  });

  describe("5.3 flowchartCounterHexagon", () => {
    function flowchartCounterHexagon(start, end, step) {
      const values = []; for (let i = start; i <= end; i += step) { values.push(i); } return values;
    }
    it("test 1", () => {
      expect(flowchartCounterHexagon(1, 10, 3)).toEqual([1,4,7,10]);
    });
    it("test 2", () => {
      expect(flowchartCounterHexagon(5, 5, 1)).toEqual([5]);
    });
    it("test 3", () => {
      expect(flowchartCounterHexagon(10, 2, 2)).toEqual([]);
    });
  });

  describe("5.4 flowchartLoopWithBranch", () => {
    function flowchartLoopWithBranch(numbers) {
      let sumEven = 0, sumOdd = 0; for (const x of numbers) { if (x % 2 === 0) sumEven += x; else sumOdd += x; } return { sumEven, sumOdd };
    }
    it("test 1", () => {
      expect(flowchartLoopWithBranch([1, 2, 3, 4, 5])).toEqual({"sumEven":6,"sumOdd":9});
    });
    it("test 2", () => {
      expect(flowchartLoopWithBranch([])).toEqual({"sumEven":0,"sumOdd":0});
    });
    it("test 3", () => {
      expect(flowchartLoopWithBranch([2, 4, 6])).toEqual({"sumEven":12,"sumOdd":0});
    });
  });

  describe("5.5 flowchartBreakBranch", () => {
    function flowchartBreakBranch(arr, target) {
      let foundIdx = -1; for (let i = 0; i < arr.length; i++) { if (arr[i] === target) { foundIdx = i; break; } } return foundIdx;
    }
    it("test 1", () => {
      expect(flowchartBreakBranch(["apple", "banana", "kiwi"], "banana")).toEqual(1);
    });
    it("test 2", () => {
      expect(flowchartBreakBranch([10, 20, 30], 40)).toEqual(-1);
    });
    it("test 3", () => {
      expect(flowchartBreakBranch([5, 5, 5], 5)).toEqual(0);
    });
  });

  describe("5.6 flowchartContinueBranch", () => {
    function flowchartContinueBranch(arr) {
      let sum = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) continue; sum += arr[i]; } return sum;
    }
    it("test 1", () => {
      expect(flowchartContinueBranch([10, -5, 20, -1, 5])).toEqual(35);
    });
    it("test 2", () => {
      expect(flowchartContinueBranch([-2, -4])).toEqual(0);
    });
    it("test 3", () => {
      expect(flowchartContinueBranch([1, 2, 3])).toEqual(6);
    });
  });

  describe("5.7 flowchartEuclidGcd", () => {
    function flowchartEuclidGcd(a, b) {
      while (a !== b) { if (a > b) a = a - b; else b = b - a; } return a;
    }
    it("test 1", () => {
      expect(flowchartEuclidGcd(48, 18)).toEqual(6);
    });
    it("test 2", () => {
      expect(flowchartEuclidGcd(100, 25)).toEqual(25);
    });
    it("test 3", () => {
      expect(flowchartEuclidGcd(13, 7)).toEqual(1);
    });
  });

  describe("5.8 flowchartLinearSearch", () => {
    function flowchartLinearSearch(arr, key) {
      let i = 0; while (i < arr.length) { if (arr[i] === key) return { found: true, index: i, steps: i + 1 }; i++; } return { found: false, index: -1, steps: arr.length };
    }
    it("test 1", () => {
      expect(flowchartLinearSearch([10, 20, 30, 40], 30)).toEqual({"found":true,"index":2,"steps":3});
    });
    it("test 2", () => {
      expect(flowchartLinearSearch([10, 20], 99)).toEqual({"found":false,"index":-1,"steps":2});
    });
    it("test 3", () => {
      expect(flowchartLinearSearch([], 5)).toEqual({"found":false,"index":-1,"steps":0});
    });
  });

  describe("5.9 flowchartSumAccumulator", () => {
    function flowchartSumAccumulator(n) {
      let S = 0, i = 1; while (i <= n) { S += i; i++; } return S;
    }
    it("test 1", () => {
      expect(flowchartSumAccumulator(4)).toEqual(10);
    });
    it("test 2", () => {
      expect(flowchartSumAccumulator(1)).toEqual(1);
    });
    it("test 3", () => {
      expect(flowchartSumAccumulator(0)).toEqual(0);
    });
  });

  describe("5.10 flowchartFactorial", () => {
    function flowchartFactorial(n) {
      let F = 1, i = 1; while (i <= n) { F *= i; i++; } return F;
    }
    it("test 1", () => {
      expect(flowchartFactorial(5)).toEqual(120);
    });
    it("test 2", () => {
      expect(flowchartFactorial(0)).toEqual(1);
    });
    it("test 3", () => {
      expect(flowchartFactorial(3)).toEqual(6);
    });
  });

  describe("5.11 flowchartPrimeCheck", () => {
    function flowchartPrimeCheck(n) {
      if (n < 2) return false; let d = 2; while (d * d <= n) { if (n % d === 0) return false; d++; } return true;
    }
    it("test 1", () => {
      expect(flowchartPrimeCheck(17)).toEqual(true);
    });
    it("test 2", () => {
      expect(flowchartPrimeCheck(18)).toEqual(false);
    });
    it("test 3", () => {
      expect(flowchartPrimeCheck(1)).toEqual(false);
    });
    it("test 4", () => {
      expect(flowchartPrimeCheck(2)).toEqual(true);
    });
  });

  describe("5.12 flowchartArrayMax", () => {
    function flowchartArrayMax(arr) {
      if (arr.length === 0) return null; let max = arr[0]; for (let i = 1; i < arr.length; i++) { if (arr[i] > max) max = arr[i]; } return max;
    }
    it("test 1", () => {
      expect(flowchartArrayMax([3, 7, 2, 9, 4])).toEqual(9);
    });
    it("test 2", () => {
      expect(flowchartArrayMax([-10, -5, -20])).toEqual(-5);
    });
    it("test 3", () => {
      expect(flowchartArrayMax([])).toEqual(null);
    });
  });

  describe("5.13 flowchartBinarySearchTrace", () => {
    function flowchartBinarySearchTrace(arr, target) {
      let low = 0, high = arr.length - 1; const trace = []; while (low <= high) { const mid = Math.floor((low + high) / 2); trace.push(mid); if (arr[mid] === target) return { found: true, trace }; if (arr[mid] < target) low = mid + 1; else high = mid - 1; } return { found: false, trace };
    }
    it("test 1", () => {
      expect(flowchartBinarySearchTrace([10, 20, 30, 40, 50, 60, 70], 40)).toEqual({"found":true,"trace":[3]});
    });
    it("test 2", () => {
      expect(flowchartBinarySearchTrace([10, 20, 30, 40, 50, 60, 70], 60)).toEqual({"found":true,"trace":[3,5]});
    });
    it("test 3", () => {
      expect(flowchartBinarySearchTrace([1, 2, 3], 99)).toEqual({"found":false,"trace":[1,2]});
    });
  });

  describe("5.14 flowchartCountMatches", () => {
    function flowchartCountMatches(arr, threshold) {
      let count = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] > threshold) count++; } return count;
    }
    it("test 1", () => {
      expect(flowchartCountMatches([5, 12, 8, 20, 3], 10)).toEqual(2);
    });
    it("test 2", () => {
      expect(flowchartCountMatches([1, 2, 3], 10)).toEqual(0);
    });
    it("test 3", () => {
      expect(flowchartCountMatches([15, 25], 5)).toEqual(2);
    });
  });

  describe("5.15 flowchartDigitReversal", () => {
    function flowchartDigitReversal(n) {
      let rev = 0, num = n; while (num > 0) { const digit = num % 10; rev = rev * 10 + digit; num = Math.floor(num / 10); } return rev;
    }
    it("test 1", () => {
      expect(flowchartDigitReversal(1234)).toEqual(4321);
    });
    it("test 2", () => {
      expect(flowchartDigitReversal(9050)).toEqual(509);
    });
    it("test 3", () => {
      expect(flowchartDigitReversal(7)).toEqual(7);
    });
  });

  describe("5.16 flowchartMinPositive", () => {
    function flowchartMinPositive(arr) {
      let minPos = null; for (let i = 0; i < arr.length; i++) { if (arr[i] > 0) { if (minPos === null || arr[i] < minPos) minPos = arr[i]; } } return minPos;
    }
    it("test 1", () => {
      expect(flowchartMinPositive([-5, 12, 3, -1, 7])).toEqual(3);
    });
    it("test 2", () => {
      expect(flowchartMinPositive([-1, -10])).toEqual(null);
    });
    it("test 3", () => {
      expect(flowchartMinPositive([4, 1, 9])).toEqual(1);
    });
  });

  describe("5.17 flowchartRunningAverage", () => {
    function flowchartRunningAverage(arr) {
      const averages = []; let sum = 0; for (let i = 0; i < arr.length; i++) { sum += arr[i]; averages.push(Number((sum / (i + 1)).toFixed(2))); } return averages;
    }
    it("test 1", () => {
      expect(flowchartRunningAverage([10, 20, 30])).toEqual([10,15,20]);
    });
    it("test 2", () => {
      expect(flowchartRunningAverage([5, 10, 15, 20])).toEqual([5,7.5,10,12.5]);
    });
    it("test 3", () => {
      expect(flowchartRunningAverage([])).toEqual([]);
    });
  });

  describe("5.18 flowchartNestedGridTrace", () => {
    function flowchartNestedGridTrace(rows, cols) {
      const trace = []; for (let r = 0; r < rows; r++) { for (let c = 0; c < cols; c++) { trace.push(`${r}:${c}`); } } return trace;
    }
    it("test 1", () => {
      expect(flowchartNestedGridTrace(2, 2)).toEqual(["0:0","0:1","1:0","1:1"]);
    });
    it("test 2", () => {
      expect(flowchartNestedGridTrace(1, 3)).toEqual(["0:0","0:1","0:2"]);
    });
    it("test 3", () => {
      expect(flowchartNestedGridTrace(0, 2)).toEqual([]);
    });
  });

  describe("5.19 flowchartStringCompress", () => {
    function flowchartStringCompress(str) {
      if (!str) return ""; let res = ""; let i = 0; while (i < str.length) { const char = str[i]; let count = 1; while (i + 1 < str.length && str[i + 1] === char) { count++; i++; } res += char + count; i++; } return res;
    }
    it("test 1", () => {
      expect(flowchartStringCompress("aaabbc")).toEqual("a3b2c1");
    });
    it("test 2", () => {
      expect(flowchartStringCompress("abcd")).toEqual("a1b1c1d1");
    });
    it("test 3", () => {
      expect(flowchartStringCompress("")).toEqual("");
    });
  });

  describe("5.20 flowchartWatchdogSafeLoop", () => {
    function flowchartWatchdogSafeLoop(value, maxTicks) {
      let ticks = 0; while (value > 1) { if (ticks >= maxTicks) return { safeExit: false, value, ticks }; if (value % 2 === 0) value /= 2; else value = value * 3 + 1; ticks++; } return { safeExit: true, value, ticks };
    }
    it("test 1", () => {
      expect(flowchartWatchdogSafeLoop(4, 10)).toEqual({"safeExit":true,"value":1,"ticks":2});
    });
    it("test 2", () => {
      expect(flowchartWatchdogSafeLoop(27, 5)).toEqual({"safeExit":false,"value":31,"ticks":5});
    });
    it("test 3", () => {
      expect(flowchartWatchdogSafeLoop(1, 10)).toEqual({"safeExit":true,"value":1,"ticks":0});
    });
  });

});
describe("SOLUTIONS: Модуль 6: Вкладені цикли та матриці", () => {
  describe("6.1 matrixSum", () => {
    function matrixSum(matrix) {
      let sum = 0; for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) { sum += matrix[r][c]; } } return sum;
    }
    it("test 1", () => {
      expect(matrixSum([[1, 2], [3, 4]])).toEqual(10);
    });
    it("test 2", () => {
      expect(matrixSum([[5, -5], [10, 0]])).toEqual(10);
    });
    it("test 3", () => {
      expect(matrixSum([])).toEqual(0);
    });
  });

  describe("6.2 multiplicationGrid", () => {
    function multiplicationGrid(n) {
      const grid = []; for (let i = 1; i <= n; i++) { const row = []; for (let j = 1; j <= n; j++) { row.push(i * j); } grid.push(row); } return grid;
    }
    it("test 1", () => {
      expect(multiplicationGrid(3)).toEqual([[1,2,3],[2,4,6],[3,6,9]]);
    });
    it("test 2", () => {
      expect(multiplicationGrid(1)).toEqual([[1]]);
    });
    it("test 3", () => {
      expect(multiplicationGrid(0)).toEqual([]);
    });
  });

  describe("6.3 printPatternTriangle", () => {
    function printPatternTriangle(n) {
      const lines = []; for (let i = 1; i <= n; i++) { let line = ""; for (let j = 1; j <= i; j++) { line += "*"; } lines.push(line); } return lines;
    }
    it("test 1", () => {
      expect(printPatternTriangle(3)).toEqual(["*","**","***"]);
    });
    it("test 2", () => {
      expect(printPatternTriangle(1)).toEqual(["*"]);
    });
    it("test 3", () => {
      expect(printPatternTriangle(0)).toEqual([]);
    });
  });

  describe("6.4 invertedTriangle", () => {
    function invertedTriangle(n) {
      const lines = []; for (let i = n; i >= 1; i--) { let line = ""; for (let j = 0; j < i; j++) line += "*"; lines.push(line); } return lines;
    }
    it("test 1", () => {
      expect(invertedTriangle(3)).toEqual(["***","**","*"]);
    });
    it("test 2", () => {
      expect(invertedTriangle(2)).toEqual(["**","*"]);
    });
    it("test 3", () => {
      expect(invertedTriangle(0)).toEqual([]);
    });
  });

  describe("6.5 matrixTranspose", () => {
    function matrixTranspose(matrix) {
      if (!matrix.length || !matrix[0].length) return []; const res = []; for (let c = 0; c < matrix[0].length; c++) { const col = []; for (let r = 0; r < matrix.length; r++) { col.push(matrix[r][c]); } res.push(col); } return res;
    }
    it("test 1", () => {
      expect(matrixTranspose([[1, 2, 3], [4, 5, 6]])).toEqual([[1,4],[2,5],[3,6]]);
    });
    it("test 2", () => {
      expect(matrixTranspose([[1, 2], [3, 4]])).toEqual([[1,3],[2,4]]);
    });
    it("test 3", () => {
      expect(matrixTranspose([])).toEqual([]);
    });
  });

  describe("6.6 chessboardPattern", () => {
    function chessboardPattern(size) {
      const board = []; for (let r = 0; r < size; r++) { let row = ""; for (let c = 0; c < size; c++) { row += (r + c) % 2 === 0 ? "#" : " "; } board.push(row); } return board;
    }
    it("test 1", () => {
      expect(chessboardPattern(2)).toEqual(["# "," #"]);
    });
    it("test 2", () => {
      expect(chessboardPattern(3)).toEqual(["# #"," # ","# #"]);
    });
    it("test 3", () => {
      expect(chessboardPattern(0)).toEqual([]);
    });
  });

  describe("6.7 cartesianProduct", () => {
    function cartesianProduct(arr1, arr2) {
      const pairs = []; for (let i = 0; i < arr1.length; i++) { for (let j = 0; j < arr2.length; j++) { pairs.push([arr1[i], arr2[j]]); } } return pairs;
    }
    it("test 1", () => {
      expect(cartesianProduct(["a", "b"], [1, 2])).toEqual([["a",1],["a",2],["b",1],["b",2]]);
    });
    it("test 2", () => {
      expect(cartesianProduct([1], ["x"])).toEqual([[1,"x"]]);
    });
    it("test 3", () => {
      expect(cartesianProduct([], [1, 2])).toEqual([]);
    });
  });

  describe("6.8 findPairWithSum", () => {
    function findPairWithSum(arr, targetSum) {
      for (let i = 0; i < arr.length; i++) { for (let j = i + 1; j < arr.length; j++) { if (arr[i] + arr[j] === targetSum) return [arr[i], arr[j]]; } } return null;
    }
    it("test 1", () => {
      expect(findPairWithSum([2, 7, 11, 15], 9)).toEqual([2,7]);
    });
    it("test 2", () => {
      expect(findPairWithSum([1, 2, 3, 4], 10)).toEqual(null);
    });
    it("test 3", () => {
      expect(findPairWithSum([5, 5], 10)).toEqual([5,5]);
    });
  });

  describe("6.9 flattenDeep2D", () => {
    function flattenDeep2D(matrix) {
      const flat = []; for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) { flat.push(matrix[r][c]); } } return flat;
    }
    it("test 1", () => {
      expect(flattenDeep2D([[1, 2], [3, 4], [5]])).toEqual([1,2,3,4,5]);
    });
    it("test 2", () => {
      expect(flattenDeep2D([[], [1]])).toEqual([1]);
    });
    it("test 3", () => {
      expect(flattenDeep2D([])).toEqual([]);
    });
  });

  describe("6.10 countSubstrings", () => {
    function countSubstrings(str, sub) {
      if (!sub || sub.length > str.length) return 0; let count = 0; for (let i = 0; i <= str.length - sub.length; i++) { let match = true; for (let j = 0; j < sub.length; j++) { if (str[i + j] !== sub[j]) { match = false; break; } } if (match) count++; } return count;
    }
    it("test 1", () => {
      expect(countSubstrings("banana", "an")).toEqual(2);
    });
    it("test 2", () => {
      expect(countSubstrings("aaaa", "aa")).toEqual(3);
    });
    it("test 3", () => {
      expect(countSubstrings("hello", "world")).toEqual(0);
    });
  });

  describe("6.11 identityMatrix", () => {
    function identityMatrix(n) {
      const res = []; for (let r = 0; r < n; r++) { const row = []; for (let c = 0; c < n; c++) { row.push(r === c ? 1 : 0); } res.push(row); } return res;
    }
    it("test 1", () => {
      expect(identityMatrix(3)).toEqual([[1,0,0],[0,1,0],[0,0,1]]);
    });
    it("test 2", () => {
      expect(identityMatrix(1)).toEqual([[1]]);
    });
    it("test 3", () => {
      expect(identityMatrix(0)).toEqual([]);
    });
  });

  describe("6.12 pascalTriangle", () => {
    function pascalTriangle(numRows) {
      const triangle = []; for (let i = 0; i < numRows; i++) { const row = [1]; for (let j = 1; j < i; j++) { row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]); } if (i > 0) row.push(1); triangle.push(row); } return triangle;
    }
    it("test 1", () => {
      expect(pascalTriangle(4)).toEqual([[1],[1,1],[1,2,1],[1,3,3,1]]);
    });
    it("test 2", () => {
      expect(pascalTriangle(1)).toEqual([[1]]);
    });
    it("test 3", () => {
      expect(pascalTriangle(0)).toEqual([]);
    });
  });

  describe("6.13 matrixRowMaxValues", () => {
    function matrixRowMaxValues(matrix) {
      const res = []; for (let r = 0; r < matrix.length; r++) { if (matrix[r].length === 0) continue; let max = matrix[r][0]; for (let c = 1; c < matrix[r].length; c++) { if (matrix[r][c] > max) max = matrix[r][c]; } res.push(max); } return res;
    }
    it("test 1", () => {
      expect(matrixRowMaxValues([[1, 5, 2], [9, 3, 8], [4, 4, 4]])).toEqual([5,9,4]);
    });
    it("test 2", () => {
      expect(matrixRowMaxValues([[-1, -10], [0, 5]])).toEqual([-1,5]);
    });
    it("test 3", () => {
      expect(matrixRowMaxValues([])).toEqual([]);
    });
  });

  describe("6.14 matrixMainDiagonalSum", () => {
    function matrixMainDiagonalSum(matrix) {
      let sum = 0; for (let i = 0; i < matrix.length; i++) { if (matrix[i] && matrix[i][i] !== undefined) sum += matrix[i][i]; } return sum;
    }
    it("test 1", () => {
      expect(matrixMainDiagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual(15);
    });
    it("test 2", () => {
      expect(matrixMainDiagonalSum([[4, 2], [1, 6]])).toEqual(10);
    });
    it("test 3", () => {
      expect(matrixMainDiagonalSum([])).toEqual(0);
    });
  });

  describe("6.15 matrixSecondaryDiagonalSum", () => {
    function matrixSecondaryDiagonalSum(matrix) {
      const n = matrix.length; let sum = 0; for (let i = 0; i < n; i++) { sum += matrix[i][n - 1 - i]; } return sum;
    }
    it("test 1", () => {
      expect(matrixSecondaryDiagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual(15);
    });
    it("test 2", () => {
      expect(matrixSecondaryDiagonalSum([[1, 2], [3, 4]])).toEqual(5);
    });
    it("test 3", () => {
      expect(matrixSecondaryDiagonalSum([])).toEqual(0);
    });
  });

  describe("6.16 bubbleSortStepByStep", () => {
    function bubbleSortStepByStep(numbers) {
      const arr = [...numbers]; for (let i = 0; i < arr.length - 1; i++) { for (let j = 0; j < arr.length - 1 - i; j++) { if (arr[j] > arr[j + 1]) { const temp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = temp; } } } return arr;
    }
    it("test 1", () => {
      expect(bubbleSortStepByStep([5, 2, 9, 1, 5, 6])).toEqual([1,2,5,5,6,9]);
    });
    it("test 2", () => {
      expect(bubbleSortStepByStep([3, 1])).toEqual([1,3]);
    });
    it("test 3", () => {
      expect(bubbleSortStepByStep([])).toEqual([]);
    });
  });

  describe("6.17 allSubarrays", () => {
    function allSubarrays(arr) {
      const res = []; for (let start = 0; start < arr.length; start++) { for (let end = start + 1; end <= arr.length; end++) { res.push(arr.slice(start, end)); } } return res;
    }
    it("test 1", () => {
      expect(allSubarrays([1, 2])).toEqual([[1],[1,2],[2]]);
    });
    it("test 2", () => {
      expect(allSubarrays(["a"])).toEqual([["a"]]);
    });
    it("test 3", () => {
      expect(allSubarrays([])).toEqual([]);
    });
  });

  describe("6.18 findDuplicatesNested", () => {
    function findDuplicatesNested(arr) {
      const duplicates = []; for (let i = 0; i < arr.length; i++) { for (let j = i + 1; j < arr.length; j++) { if (arr[i] === arr[j] && !duplicates.includes(arr[i])) { duplicates.push(arr[i]); } } } return duplicates;
    }
    it("test 1", () => {
      expect(findDuplicatesNested([1, 2, 3, 2, 4, 1, 5])).toEqual([1,2]);
    });
    it("test 2", () => {
      expect(findDuplicatesNested([1, 2, 3])).toEqual([]);
    });
    it("test 3", () => {
      expect(findDuplicatesNested(["x", "x", "x"])).toEqual(["x"]);
    });
  });

  describe("6.19 pyramidPattern", () => {
    function pyramidPattern(n) {
      const lines = []; for (let i = 1; i <= n; i++) { const spaces = " ".repeat(n - i); const stars = "*".repeat(2 * i - 1); lines.push(spaces + stars); } return lines;
    }
    it("test 1", () => {
      expect(pyramidPattern(3)).toEqual(["  *"," ***","*****"]);
    });
    it("test 2", () => {
      expect(pyramidPattern(1)).toEqual(["*"]);
    });
    it("test 3", () => {
      expect(pyramidPattern(0)).toEqual([]);
    });
  });

  describe("6.20 matrixMultiply", () => {
    function matrixMultiply(A, B) {
      if (!A.length || !B.length || A[0].length !== B.length) return null; const R1 = A.length, C1 = A[0].length, C2 = B[0].length; const result = []; for (let i = 0; i < R1; i++) { const row = []; for (let j = 0; j < C2; j++) { let cellSum = 0; for (let k = 0; k < C1; k++) { cellSum += A[i][k] * B[k][j]; } row.push(cellSum); } result.push(row); } return result;
    }
    it("test 1", () => {
      expect(matrixMultiply([[1, 2], [3, 4]], [[2, 0], [1, 2]])).toEqual([[4,4],[10,8]]);
    });
    it("test 2", () => {
      expect(matrixMultiply([[1, 2]], [[3], [4]])).toEqual([[11]]);
    });
    it("test 3", () => {
      expect(matrixMultiply([[1, 2]], [[1, 2]])).toEqual(null);
    });
  });

  describe("6.21 saddlePointMatrix", () => {
    function saddlePointMatrix(matrix) {
      for (let r = 0; r < matrix.length; r++) { let minCol = 0; for (let c = 1; c < matrix[r].length; c++) { if (matrix[r][c] < matrix[r][minCol]) minCol = c; } const minVal = matrix[r][minCol]; let isSaddle = true; for (let k = 0; k < matrix.length; k++) { if (matrix[k][minCol] > minVal) { isSaddle = false; break; } } if (isSaddle) return { row: r, col: minCol, value: minVal }; } return null;
    }
    it("test 1", () => {
      expect(saddlePointMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual({"row":2,"col":0,"value":7});
    });
    it("test 2", () => {
      expect(saddlePointMatrix([[3, 8], [4, 7]])).toEqual({"row":1,"col":0,"value":4});
    });
    it("test 3", () => {
      expect(saddlePointMatrix([])).toEqual(null);
    });
  });

  describe("6.22 countInversions", () => {
    function countInversions(arr) {
      let count = 0; for (let i = 0; i < arr.length; i++) { for (let j = i + 1; j < arr.length; j++) { if (arr[i] > arr[j]) count++; } } return count;
    }
    it("test 1", () => {
      expect(countInversions([2, 4, 1, 3, 5])).toEqual(3);
    });
    it("test 2", () => {
      expect(countInversions([1, 2, 3])).toEqual(0);
    });
    it("test 3", () => {
      expect(countInversions([3, 2, 1])).toEqual(3);
    });
  });

  describe("6.23 crossWordSearchHorizontalVertical", () => {
    function crossWordSearchHorizontalVertical(grid, word) {
      for (let r = 0; r < grid.length; r++) { if (grid[r].includes(word)) return true; } const cols = grid[0] ? grid[0].length : 0; for (let c = 0; c < cols; c++) { let colStr = ""; for (let r = 0; r < grid.length; r++) colStr += grid[r][c]; if (colStr.includes(word)) return true; } return false;
    }
    it("test 1", () => {
      expect(crossWordSearchHorizontalVertical(["CAT", "DOG", "PIG"], "CAT")).toEqual(true);
    });
    it("test 2", () => {
      expect(crossWordSearchHorizontalVertical(["CDP", "AOI", "TGG"], "CAT")).toEqual(true);
    });
    it("test 3", () => {
      expect(crossWordSearchHorizontalVertical(["AAA", "BBB"], "XYZ")).toEqual(false);
    });
  });

  describe("6.24 spiralMatrixOrder", () => {
    function spiralMatrixOrder(matrix) {
      if (!matrix.length) return []; const res = []; let top = 0, bottom = matrix.length - 1; let left = 0, right = matrix[0].length - 1; while (top <= bottom && left <= right) { for (let c = left; c <= right; c++) res.push(matrix[top][c]); top++; for (let r = top; r <= bottom; r++) res.push(matrix[r][right]); right--; if (top <= bottom) { for (let c = right; c >= left; c--) res.push(matrix[bottom][c]); bottom--; } if (left <= right) { for (let r = bottom; r >= top; r--) res.push(matrix[r][left]); left++; } } return res;
    }
    it("test 1", () => {
      expect(spiralMatrixOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1,2,3,6,9,8,7,4,5]);
    });
    it("test 2", () => {
      expect(spiralMatrixOrder([[1, 2], [3, 4]])).toEqual([1,2,4,3]);
    });
    it("test 3", () => {
      expect(spiralMatrixOrder([])).toEqual([]);
    });
  });

  describe("6.25 distinctTripletsSumZero", () => {
    function distinctTripletsSumZero(nums) {
      const sorted = [...nums].sort((a, b) => a - b); const res = []; for (let i = 0; i < sorted.length - 2; i++) { if (i > 0 && sorted[i] === sorted[i - 1]) continue; let left = i + 1, right = sorted.length - 1; while (left < right) { const sum = sorted[i] + sorted[left] + sorted[right]; if (sum === 0) { res.push([sorted[i], sorted[left], sorted[right]]); while (left < right && sorted[left] === sorted[left + 1]) left++; while (left < right && sorted[right] === sorted[right - 1]) right--; left++; right--; } else if (sum < 0) left++; else right--; } } return res;
    }
    it("test 1", () => {
      expect(distinctTripletsSumZero([-1, 0, 1, 2, -1, -4])).toEqual([[-1,-1,2],[-1,0,1]]);
    });
    it("test 2", () => {
      expect(distinctTripletsSumZero([0, 1, 1])).toEqual([]);
    });
    it("test 3", () => {
      expect(distinctTripletsSumZero([0, 0, 0])).toEqual([[0,0,0]]);
    });
  });

});
describe("SOLUTIONS: Модуль 7: Робота з відлагоджувачем (Debugger & DevTools)", () => {
  describe("7.1 fixOffByOneSum", () => {
    function fixOffByOneSum(n) {
      let sum = 0; for (let i = 1; i <= n; i++) sum += i; return sum;
    }
    it("test 1", () => {
      expect(fixOffByOneSum(3)).toEqual(6);
    });
    it("test 2", () => {
      expect(fixOffByOneSum(5)).toEqual(15);
    });
    it("test 3", () => {
      expect(fixOffByOneSum(0)).toEqual(0);
    });
  });

  describe("7.2 fixInfiniteWhileIncrement", () => {
    function fixInfiniteWhileIncrement(target) {
      const res = []; let i = 0; while (i < target) { res.push(i); i++; } return res;
    }
    it("test 1", () => {
      expect(fixInfiniteWhileIncrement(3)).toEqual([0,1,2]);
    });
    it("test 2", () => {
      expect(fixInfiniteWhileIncrement(0)).toEqual([]);
    });
    it("test 3", () => {
      expect(fixInfiniteWhileIncrement(1)).toEqual([0]);
    });
  });

  describe("7.3 fixBreakPlacement", () => {
    function fixBreakPlacement(arr, target) {
      let found = -1; for (let i = 0; i < arr.length; i++) { if (arr[i] === target) { found = i; break; } } return found;
    }
    it("test 1", () => {
      expect(fixBreakPlacement([10, 20, 30], 30)).toEqual(2);
    });
    it("test 2", () => {
      expect(fixBreakPlacement([10, 20, 30], 99)).toEqual(-1);
    });
    it("test 3", () => {
      expect(fixBreakPlacement([5], 5)).toEqual(0);
    });
  });

  describe("7.4 fixArrayMutationDuringLoop", () => {
    function fixArrayMutationDuringLoop(arr) {
      return arr.filter(x => x % 2 !== 0);
    }
    it("test 1", () => {
      expect(fixArrayMutationDuringLoop([2, 4, 6, 7])).toEqual([7]);
    });
    it("test 2", () => {
      expect(fixArrayMutationDuringLoop([1, 2, 3, 4, 5])).toEqual([1,3,5]);
    });
    it("test 3", () => {
      expect(fixArrayMutationDuringLoop([2, 2, 2])).toEqual([]);
    });
  });

  describe("7.5 fixVariableShadowingNested", () => {
    function fixVariableShadowingNested(matrix) {
      let sum = 0; for (let i = 0; i < matrix.length; i++) { for (let j = 0; j < matrix[i].length; j++) { sum += matrix[i][j]; } } return sum;
    }
    it("test 1", () => {
      expect(fixVariableShadowingNested([[1, 2], [3, 4]])).toEqual(10);
    });
    it("test 2", () => {
      expect(fixVariableShadowingNested([[5, 5]])).toEqual(10);
    });
    it("test 3", () => {
      expect(fixVariableShadowingNested([])).toEqual(0);
    });
  });

  describe("7.6 fixInitialAccumulatorValue", () => {
    function fixInitialAccumulatorValue(numbers) {
      let product = 1; for (let i = 0; i < numbers.length; i++) product *= numbers[i]; return product;
    }
    it("test 1", () => {
      expect(fixInitialAccumulatorValue([2, 3, 4])).toEqual(24);
    });
    it("test 2", () => {
      expect(fixInitialAccumulatorValue([5, 10])).toEqual(50);
    });
    it("test 3", () => {
      expect(fixInitialAccumulatorValue([])).toEqual(1);
    });
  });

  describe("7.7 fixDoWhileCondition", () => {
    function fixDoWhileCondition(max, step) {
      let count = 0; do { count += step; } while (count < max); return count;
    }
    it("test 1", () => {
      expect(fixDoWhileCondition(10, 3)).toEqual(12);
    });
    it("test 2", () => {
      expect(fixDoWhileCondition(5, 5)).toEqual(5);
    });
    it("test 3", () => {
      expect(fixDoWhileCondition(2, 5)).toEqual(5);
    });
  });

  describe("7.8 fixContinueSkippingIncrement", () => {
    function fixContinueSkippingIncrement(numbers) {
      let sum = 0; for (let i = 0; i < numbers.length; i++) { if (numbers[i] % 2 === 0) continue; sum += numbers[i]; } return sum;
    }
    it("test 1", () => {
      expect(fixContinueSkippingIncrement([1, 2, 3, 4, 5])).toEqual(9);
    });
    it("test 2", () => {
      expect(fixContinueSkippingIncrement([2, 4])).toEqual(0);
    });
    it("test 3", () => {
      expect(fixContinueSkippingIncrement([7])).toEqual(7);
    });
  });

  describe("7.9 simulateCallStackDepth", () => {
    function simulateCallStackDepth(depth) {
      const stack = []; function pushFrame(current) { if (current > depth) return; stack.push(`frame_${current}`); pushFrame(current + 1); } if (depth > 0) pushFrame(1); return stack;
    }
    it("test 1", () => {
      expect(simulateCallStackDepth(3)).toEqual(["frame_1","frame_2","frame_3"]);
    });
    it("test 2", () => {
      expect(simulateCallStackDepth(1)).toEqual(["frame_1"]);
    });
    it("test 3", () => {
      expect(simulateCallStackDepth(0)).toEqual([]);
    });
  });

  describe("7.10 traceScopeWatchVariables", () => {
    function traceScopeWatchVariables(arr) {
      const snapshots = []; let acc = 0; for (let i = 0; i < arr.length; i++) { acc += arr[i]; snapshots.push({ step: i, currentVal: arr[i], acc }); } return snapshots;
    }
    it("test 1", () => {
      expect(traceScopeWatchVariables([10, 20])).toEqual([{"step":0,"currentVal":10,"acc":10},{"step":1,"currentVal":20,"acc":30}]);
    });
    it("test 2", () => {
      expect(traceScopeWatchVariables([])).toEqual([]);
    });
  });

  describe("7.11 fixStringIndexOutOfBounds", () => {
    function fixStringIndexOutOfBounds(str) {
      let res = ""; for (let i = str.length - 1; i >= 0; i--) res += str[i]; return res;
    }
    it("test 1", () => {
      expect(fixStringIndexOutOfBounds("cat")).toEqual("tac");
    });
    it("test 2", () => {
      expect(fixStringIndexOutOfBounds("a")).toEqual("a");
    });
    it("test 3", () => {
      expect(fixStringIndexOutOfBounds("")).toEqual("");
    });
  });

  describe("7.12 conditionalBreakpointFilter", () => {
    function conditionalBreakpointFilter(logs) {
      const hit = []; for (const log of logs) { if (log.level === "ERROR" && log.code >= 500) hit.push(log); } return hit;
    }
    it("test 1", () => {
      expect(conditionalBreakpointFilter([{ level: "INFO", code: 200 }, { level: "ERROR", code: 502 }, { level: "ERROR", code: 404 }])).toEqual([{"level":"ERROR","code":502}]);
    });
    it("test 2", () => {
      expect(conditionalBreakpointFilter([])).toEqual([]);
    });
  });

  describe("7.13 fixReferenceVsValueObjectInLoop", () => {
    function fixReferenceVsValueObjectInLoop(items) {
      const res = []; for (let i = 0; i < items.length; i++) { res.push({ id: items[i], active: true }); } return res;
    }
    it("test 1", () => {
      expect(fixReferenceVsValueObjectInLoop([1, 2, 3])).toEqual([{"id":1,"active":true},{"id":2,"active":true},{"id":3,"active":true}]);
    });
    it("test 2", () => {
      expect(fixReferenceVsValueObjectInLoop([])).toEqual([]);
    });
  });

  describe("7.14 detectDeadCodeAfterReturnInLoop", () => {
    function detectDeadCodeAfterReturnInLoop(nums) {
      let sum = 0; for (let i = 0; i < nums.length; i++) { sum += nums[i]; } return sum;
    }
    it("test 1", () => {
      expect(detectDeadCodeAfterReturnInLoop([10, 20, 30])).toEqual(60);
    });
    it("test 2", () => {
      expect(detectDeadCodeAfterReturnInLoop([5])).toEqual(5);
    });
    it("test 3", () => {
      expect(detectDeadCodeAfterReturnInLoop([])).toEqual(0);
    });
  });

  describe("7.15 fixFloatingPointStepLoop", () => {
    function fixFloatingPointStepLoop(start, end, step) {
      const res = []; let cur = start; while (cur <= end + 1e-9) { res.push(Number(cur.toFixed(1))); cur += step; } return res;
    }
    it("test 1", () => {
      expect(fixFloatingPointStepLoop(0, 0.3, 0.1)).toEqual([0,0.1,0.2,0.3]);
    });
    it("test 2", () => {
      expect(fixFloatingPointStepLoop(1, 1.2, 0.1)).toEqual([1,1.1,1.2]);
    });
    it("test 3", () => {
      expect(fixFloatingPointStepLoop(5, 5, 0.1)).toEqual([5]);
    });
  });


  describe('SOLUTIONS: Модуль 8: Генерація списків, карток та UI-елементів через цикли', () => {
    describe('8.1 renderProductCards', () => {
      function renderProductCards(products) {
        const grid = document.createElement('div');
grid.className = 'product-grid';
if (!Array.isArray(products) || products.length === 0) return grid;
for (const p of products) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-id', String(p.id));
  const h3 = document.createElement('h3');
  h3.className = 'product-title';
  h3.textContent = p.title || '';
  const price = document.createElement('span');
  price.className = 'product-price';
  price.textContent = `Ціна: $${p.price}`;
  const badge = document.createElement('span');
  badge.className = 'product-badge';
  if (p.inStock) {
    badge.classList.add('badge--in-stock');
    badge.textContent = 'В наявності';
    badge.style.color = 'rgb(16, 185, 129)';
  } else {
    badge.classList.add('badge--out-of-stock');
    badge.textContent = 'Немає на складі';
    badge.style.color = 'rgb(239, 68, 68)';
  }
  card.appendChild(h3);
  card.appendChild(price);
  card.appendChild(badge);
  grid.appendChild(card);
}
return grid;
      }
      it('test 1', () => {
        expect((() => {
          const list = [
            { id: 101, title: 'Ноутбук', price: 999, inStock: true },
            { id: 102, title: 'Мишка', price: 25, inStock: false }
          ];
          const grid = renderProductCards(list);
          const cards = grid.querySelectorAll('.product-card');
          return [
            grid.tagName,
            grid.className,
            cards.length,
            cards[0].dataset.id,
            cards[0].querySelector('.product-title').textContent,
            cards[0].querySelector('.product-badge').classList.contains('badge--in-stock'),
            cards[0].querySelector('.product-badge').style.color,
            cards[1].querySelector('.product-badge').textContent,
            cards[1].querySelector('.product-badge').style.color
          ];
        })()).toEqual(["DIV","product-grid",2,"101","Ноутбук",true,"rgb(16, 185, 129)","Немає на складі","rgb(239, 68, 68)"]);
      });
      it('test 2', () => {
        expect(renderProductCards([]).children.length).toEqual(0);
      });
    });
    describe('8.2 renderStarRating', () => {
      function renderStarRating(rating, maxStars = 5) {
        const wrap = document.createElement('div');
wrap.className = 'star-rating';
wrap.setAttribute('role', 'img');
wrap.setAttribute('aria-label', `Рейтинг: ${rating} з ${maxStars}`);
if (maxStars <= 0) return wrap;
for (let i = 1; i <= maxStars; i++) {
  const star = document.createElement('span');
  star.className = 'star';
  if (i <= rating) {
    star.classList.add('star--filled');
    star.textContent = '★';
    star.style.color = 'rgb(245, 158, 11)';
  } else {
    star.classList.add('star--empty');
    star.textContent = '☆';
    star.style.color = 'rgb(156, 163, 175)';
  }
  wrap.appendChild(star);
}
return wrap;
      }
      it('test 1', () => {
        expect((() => {
          const sr = renderStarRating(3, 5);
          const filled = sr.querySelectorAll('.star--filled');
          const empty = sr.querySelectorAll('.star--empty');
          return [
            sr.getAttribute('role'),
            sr.getAttribute('aria-label'),
            sr.children.length,
            filled.length,
            filled[0].textContent,
            filled[0].style.color,
            empty.length,
            empty[0].textContent,
            empty[0].style.color
          ];
        })()).toEqual(["img","Рейтинг: 3 з 5",5,3,"★","rgb(245, 158, 11)",2,"☆","rgb(156, 163, 175)"]);
      });
      it('test 2', () => {
        expect(renderStarRating(0, 0).children.length).toEqual(0);
      });
    });
    describe('8.3 renderBreadcrumbs', () => {
      function renderBreadcrumbs(links) {
        const nav = document.createElement('nav');
nav.setAttribute('aria-label', 'breadcrumb');
const ol = document.createElement('ol');
ol.className = 'breadcrumb-list';
nav.appendChild(ol);
if (!Array.isArray(links) || links.length === 0) return nav;
for (let i = 0; i < links.length; i++) {
  const item = links[i];
  const li = document.createElement('li');
  li.className = 'breadcrumb-item';
  const isLast = (i === links.length - 1);
  if (isLast) {
    const span = document.createElement('span');
    span.className = 'breadcrumb-current';
    span.setAttribute('aria-current', 'page');
    span.textContent = item.title;
    li.appendChild(span);
  } else {
    const a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.title;
    li.appendChild(a);
    const sep = document.createElement('span');
    sep.className = 'breadcrumb-separator';
    sep.setAttribute('aria-hidden', 'true');
    sep.textContent = '→';
    li.appendChild(sep);
  }
  ol.appendChild(li);
}
return nav;
      }
      it('test 1', () => {
        expect((() => {
          const nav = renderBreadcrumbs([
            { title: 'Головна', url: '/' },
            { title: 'Курси', url: '/courses' },
            { title: 'JS Loops', url: '/courses/js-loops' }
          ]);
          const items = nav.querySelectorAll('.breadcrumb-item');
          const seps = nav.querySelectorAll('.breadcrumb-separator');
          const curr = nav.querySelector('.breadcrumb-current');
          return [
            nav.tagName,
            nav.getAttribute('aria-label'),
            items.length,
            seps.length,
            curr.getAttribute('aria-current'),
            curr.textContent
          ];
        })()).toEqual(["NAV","breadcrumb",3,2,"page","JS Loops"]);
      });
    });
    describe('8.4 renderStatusBadges', () => {
      function renderStatusBadges(items) {
        const container = document.createElement('div');
container.className = 'badge-container';
if (!Array.isArray(items)) return container;
const colors = {
  success: 'rgb(16, 185, 129)',
  warning: 'rgb(245, 158, 11)',
  danger: 'rgb(239, 68, 68)',
  neutral: 'rgb(107, 114, 128)'
};
for (const item of items) {
  const badge = document.createElement('span');
  badge.className = 'badge';
  const type = colors[item.status] ? item.status : 'neutral';
  badge.classList.add(`badge--${type}`);
  badge.style.backgroundColor = colors[type];
  badge.style.color = 'rgb(255, 255, 255)';
  badge.textContent = item.label || '';
  container.appendChild(badge);
}
return container;
      }
      it('test 1', () => {
        expect((() => {
          const box = renderStatusBadges([
            { label: 'Готово', status: 'success' },
            { label: 'Очікує', status: 'warning' },
            { label: 'Помилка', status: 'danger' }
          ]);
          const badges = box.querySelectorAll('.badge');
          return [
            box.className,
            badges.length,
            badges[0].classList.contains('badge--success'),
            badges[0].style.backgroundColor,
            badges[1].style.backgroundColor,
            badges[2].style.backgroundColor
          ];
        })()).toEqual(["badge-container",3,true,"rgb(16, 185, 129)","rgb(245, 158, 11)","rgb(239, 68, 68)"]);
      });
    });
    describe('8.5 renderMessageList', () => {
      function renderMessageList(messages) {
        const ul = document.createElement('ul');
ul.className = 'message-list';
if (!Array.isArray(messages)) return ul;
for (const m of messages) {
  const li = document.createElement('li');
  li.className = 'message-item';
  if (m.isMine) {
    li.classList.add('message-item--mine');
    li.style.alignSelf = 'flex-end';
  }
  const author = document.createElement('span');
  author.className = 'message-author';
  author.textContent = m.author || '';
  const p = document.createElement('p');
  p.className = 'message-text';
  p.textContent = m.text || '';
  const time = document.createElement('time');
  time.className = 'message-time';
  time.textContent = m.timestamp || '';
  li.appendChild(author);
  li.appendChild(p);
  li.appendChild(time);
  ul.appendChild(li);
}
return ul;
      }
      it('test 1', () => {
        expect((() => {
          const list = renderMessageList([
            { author: 'Олег', text: 'Привіт!', timestamp: '12:00', isMine: false },
            { author: 'Я', text: 'Привіт, як справи?', timestamp: '12:01', isMine: true }
          ]);
          const items = list.querySelectorAll('.message-item');
          return [
            list.tagName,
            items.length,
            items[1].classList.contains('message-item--mine'),
            items[1].style.alignSelf,
            items[1].querySelector('.message-text').textContent
          ];
        })()).toEqual(["UL",2,true,"flex-end","Привіт, як справи?"]);
      });
    });
    describe('8.6 renderTagCloud', () => {
      function renderTagCloud(tags) {
        const div = document.createElement('div');
div.className = 'tag-cloud';
if (!Array.isArray(tags)) return div;
for (const t of tags) {
  const chip = document.createElement('span');
  chip.className = 'tag-chip';
  chip.setAttribute('data-count', String(t.count));
  chip.textContent = `#${t.name}`;
  if (t.count > 10) {
    chip.classList.add('tag-chip--popular');
    chip.style.fontSize = '16px';
  } else {
    chip.classList.add('tag-chip--regular');
    chip.style.fontSize = '12px';
  }
  div.appendChild(chip);
}
return div;
      }
      it('test 1', () => {
        expect((() => {
          const cloud = renderTagCloud([
            { name: 'javascript', count: 42 },
            { name: 'dom', count: 5 }
          ]);
          const chips = cloud.querySelectorAll('.tag-chip');
          return [
            chips.length,
            chips[0].textContent,
            chips[0].dataset.count,
            chips[0].classList.contains('tag-chip--popular'),
            chips[0].style.fontSize,
            chips[1].classList.contains('tag-chip--regular'),
            chips[1].style.fontSize
          ];
        })()).toEqual([2,"#javascript","42",true,"16px",true,"12px"]);
      });
    });
    describe('8.7 renderProgressBarSteps', () => {
      function renderProgressBarSteps(steps, activeIndex) {
        const bar = document.createElement('div');
bar.className = 'step-progress-bar';
const track = document.createElement('div');
track.className = 'progress-track';
const fill = document.createElement('div');
fill.className = 'progress-fill';
const len = Array.isArray(steps) ? steps.length : 0;
const pct = len > 1 ? Math.round((activeIndex / (len - 1)) * 100) : 0;
fill.style.width = `${pct}%`;
track.appendChild(fill);
bar.appendChild(track);
if (len === 0) return bar;
const stepsWrap = document.createElement('div');
stepsWrap.className = 'steps-container';
for (let i = 0; i < len; i++) {
  const step = document.createElement('div');
  step.className = 'step-indicator';
  step.setAttribute('data-step', String(i + 1));
  step.textContent = steps[i];
  if (i < activeIndex) step.classList.add('step--completed');
  else if (i === activeIndex) step.classList.add('step--active');
  else step.classList.add('step--upcoming');
  stepsWrap.appendChild(step);
}
bar.appendChild(stepsWrap);
return bar;
      }
      it('test 1', () => {
        expect((() => {
          const res = renderProgressBarSteps(['Крок 1', 'Крок 2', 'Крок 3'], 1);
          const fill = res.querySelector('.progress-fill');
          const steps = res.querySelectorAll('.step-indicator');
          return [
            fill.style.width,
            steps[0].classList.contains('step--completed'),
            steps[1].classList.contains('step--active'),
            steps[2].classList.contains('step--upcoming')
          ];
        })()).toEqual(["50%",true,true,true]);
      });
    });
    describe('8.8 renderNumberedList', () => {
      function renderNumberedList(items, startNumber = 1) {
        const ol = document.createElement('ol');
ol.className = 'numbered-list';
ol.setAttribute('start', String(startNumber));
if (!Array.isArray(items)) return ol;
for (let i = 0; i < items.length; i++) {
  const li = document.createElement('li');
  li.className = 'numbered-item';
  const numSpan = document.createElement('span');
  numSpan.className = 'item-num';
  numSpan.textContent = `${startNumber + i}.`;
  const bodySpan = document.createElement('span');
  bodySpan.className = 'item-body';
  bodySpan.textContent = items[i];
  li.appendChild(numSpan);
  li.appendChild(bodySpan);
  ol.appendChild(li);
}
return ol;
      }
      it('test 1', () => {
        expect((() => {
          const ol = renderNumberedList(['Вступ', 'Основи', 'Практика'], 5);
          const items = ol.querySelectorAll('.numbered-item');
          return [
            ol.getAttribute('start'),
            items.length,
            items[0].querySelector('.item-num').textContent,
            items[2].querySelector('.item-num').textContent
          ];
        })()).toEqual(["5",3,"5.","7."]);
      });
    });
    describe('8.9 renderNotificationFeed', () => {
      function renderNotificationFeed(notifications) {
        const feed = document.createElement('div');
feed.className = 'notification-feed';
if (!Array.isArray(notifications)) return feed;
for (const n of notifications) {
  const card = document.createElement('div');
  card.className = 'notification-card';
  card.setAttribute('data-id', String(n.id));
  if (n.unread) {
    card.classList.add('notification--unread');
    card.style.borderLeft = '4px solid rgb(59, 130, 246)';
  }
  const h4 = document.createElement('h4');
  h4.className = 'notification-title';
  h4.textContent = n.title || '';
  card.appendChild(h4);
  feed.appendChild(card);
}
return feed;
      }
      it('test 1', () => {
        expect((() => {
          const feed = renderNotificationFeed([
            { id: 1, title: 'Новий урок', unread: true },
            { id: 2, title: 'Знижка', unread: false }
          ]);
          const cards = feed.querySelectorAll('.notification-card');
          return [
            cards.length,
            cards[0].classList.contains('notification--unread'),
            cards[0].style.borderLeft,
            cards[1].classList.contains('notification--unread')
          ];
        })()).toEqual([2,true,"4px solid rgb(59, 130, 246)",false]);
      });
    });
    describe('8.10 renderTabsNavigation', () => {
      function renderTabsNavigation(tabNames, activeIdx = 0) {
        const nav = document.createElement('nav');
nav.className = 'tabs-nav';
nav.setAttribute('role', 'tablist');
if (!Array.isArray(tabNames)) return nav;
for (let i = 0; i < tabNames.length; i++) {
  const btn = document.createElement('button');
  btn.className = 'tab-btn';
  btn.setAttribute('role', 'tab');
  btn.textContent = tabNames[i];
  if (i === activeIdx) {
    btn.classList.add('tab-btn--active');
    btn.setAttribute('aria-selected', 'true');
    btn.style.borderBottom = '2px solid rgb(99, 102, 241)';
  } else {
    btn.setAttribute('aria-selected', 'false');
  }
  nav.appendChild(btn);
}
return nav;
      }
      it('test 1', () => {
        expect((() => {
          const nav = renderTabsNavigation(['Теорія', 'Практика', 'Тести'], 1);
          const tabs = nav.querySelectorAll('.tab-btn');
          return [
            nav.getAttribute('role'),
            tabs.length,
            tabs[1].classList.contains('tab-btn--active'),
            tabs[1].getAttribute('aria-selected'),
            tabs[1].style.borderBottom,
            tabs[0].getAttribute('aria-selected')
          ];
        })()).toEqual(["tablist",3,true,"true","2px solid rgb(99, 102, 241)","false"]);
      });
    });
    describe('8.11 renderAccordionList', () => {
      function renderAccordionList(sections) {
        const wrap = document.createElement('div');
wrap.className = 'accordion-list';
if (!Array.isArray(sections)) return wrap;
for (const sec of sections) {
  const details = document.createElement('details');
  details.className = 'accordion-item';
  if (sec.isOpen) details.setAttribute('open', '');
  const summary = document.createElement('summary');
  summary.className = 'accordion-header';
  summary.textContent = sec.title || '';
  const body = document.createElement('div');
  body.className = 'accordion-body';
  body.textContent = sec.content || '';
  details.appendChild(summary);
  details.appendChild(body);
  wrap.appendChild(details);
}
return wrap;
      }
      it('test 1', () => {
        expect((() => {
          const acc = renderAccordionList([
            { title: 'Розділ 1', content: 'Контент 1', isOpen: true },
            { title: 'Розділ 2', content: 'Контент 2', isOpen: false }
          ]);
          const items = acc.querySelectorAll('.accordion-item');
          return [
            items.length,
            items[0].hasAttribute('open'),
            items[0].querySelector('.accordion-header').textContent,
            items[1].hasAttribute('open')
          ];
        })()).toEqual([2,true,"Розділ 1",false]);
      });
    });
    describe('8.12 renderAvatarStack', () => {
      function renderAvatarStack(users, maxVisible = 3) {
        const stack = document.createElement('div');
stack.className = 'avatar-stack';
if (!Array.isArray(users)) return stack;
const count = Math.min(users.length, maxVisible);
for (let i = 0; i < count; i++) {
  const u = users[i];
  const av = document.createElement('div');
  av.className = 'avatar';
  av.setAttribute('title', u.name || '');
  av.setAttribute('data-initials', u.initials || '');
  av.textContent = u.initials || '';
  stack.appendChild(av);
}
if (users.length > maxVisible) {
  const more = document.createElement('div');
  more.className = 'avatar avatar--more';
  more.textContent = `+${users.length - maxVisible}`;
  stack.appendChild(more);
}
return stack;
      }
      it('test 1', () => {
        expect((() => {
          const list = [
            { name: 'Іван', initials: 'ІГ' },
            { name: 'Олена', initials: 'ОК' },
            { name: 'Максим', initials: 'МВ' },
            { name: 'Дарина', initials: 'ДП' }
          ];
          const stack = renderAvatarStack(list, 2);
          const avs = stack.querySelectorAll('.avatar');
          return [
            avs.length,
            avs[0].dataset.initials,
            avs[2].classList.contains('avatar--more'),
            avs[2].textContent
          ];
        })()).toEqual([3,"ІГ",true,"+2"]);
      });
    });
  });

  describe('SOLUTIONS: Модуль 9: Генерація складних структур та сіток через вкладені цикли', () => {
    describe('9.1 renderDataTable', () => {
      function renderDataTable(headers, rows) {
        const table = document.createElement('table');
table.className = 'data-table';
const thead = document.createElement('thead');
const trHead = document.createElement('tr');
for (const h of headers || []) {
  const th = document.createElement('th');
  th.setAttribute('scope', 'col');
  th.textContent = h;
  trHead.appendChild(th);
}
thead.appendChild(trHead);
table.appendChild(thead);

const tbody = document.createElement('tbody');
if (!Array.isArray(rows) || rows.length === 0) {
  const emptyTr = document.createElement('tr');
  const emptyTd = document.createElement('td');
  emptyTd.setAttribute('colspan', String(headers ? headers.length : 1));
  emptyTd.textContent = 'Немає даних';
  emptyTr.appendChild(emptyTd);
  tbody.appendChild(emptyTr);
} else {
  for (let r = 0; r < rows.length; r++) {
    const tr = document.createElement('tr');
    const rowData = rows[r] || [];
    for (let c = 0; c < rowData.length; c++) {
      const td = document.createElement('td');
      if (headers && headers[c]) td.setAttribute('data-label', headers[c]);
      td.textContent = String(rowData[c]);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}
table.appendChild(tbody);
return table;
      }
      it('test 1', () => {
        expect((() => {
          const tbl = renderDataTable(['Імʼя', 'Вік'], [['Олена', 22], ['Максим', 25]]);
          const ths = tbl.querySelectorAll('thead th');
          const tds = tbl.querySelectorAll('tbody td');
          return [
            tbl.tagName,
            ths.length,
            ths[0].textContent,
            tds.length,
            tds[0].textContent,
            tds[0].dataset.label
          ];
        })()).toEqual(["TABLE",2,"Імʼя",4,"Олена","Імʼя"]);
      });
      it('test 2', () => {
        expect(renderDataTable(['A'], []).querySelector('tbody td').textContent).toEqual("Немає даних");
      });
    });
    describe('9.2 renderCalendarMonth', () => {
      function renderCalendarMonth(monthName, startDayOfWeek, totalDays) {
        const card = document.createElement('div');
card.className = 'calendar-card';
const hdr = document.createElement('div');
hdr.className = 'calendar-header';
hdr.textContent = monthName;
card.appendChild(hdr);

const table = document.createElement('table');
table.className = 'calendar-table';
const thead = document.createElement('thead');
const trHead = document.createElement('tr');
const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
for (const dn of dayNames) {
  const th = document.createElement('th');
  th.textContent = dn;
  trHead.appendChild(th);
}
thead.appendChild(trHead);
table.appendChild(thead);

const tbody = document.createElement('tbody');
let dayCounter = 1;
const weeks = Math.ceil((totalDays + startDayOfWeek - 1) / 7);

for (let w = 0; w < weeks; w++) {
  const tr = document.createElement('tr');
  for (let d = 1; d <= 7; d++) {
    const td = document.createElement('td');
    const isWeekend = (d === 6 || d === 7);
    if (isWeekend) {
      td.classList.add('cell--weekend');
      td.style.color = 'rgb(239, 68, 68)';
    }
    if ((w === 0 && d < startDayOfWeek) || dayCounter > totalDays) {
      td.classList.add('cell--empty');
      td.textContent = '';
    } else {
      td.classList.add('cell--day');
      td.textContent = String(dayCounter);
      dayCounter++;
    }
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}
table.appendChild(tbody);
card.appendChild(table);
return card;
      }
      it('test 1', () => {
        expect((() => {
          const cal = renderCalendarMonth('Листопад 2026', 1, 30);
          const days = cal.querySelectorAll('.cell--day');
          const weekends = cal.querySelectorAll('.cell--weekend');
          return [
            cal.querySelector('.calendar-header').textContent,
            days.length,
            days[0].textContent,
            weekends.length > 0,
            weekends[0].style.color
          ];
        })()).toEqual(["Листопад 2026",30,"1",true,"rgb(239, 68, 68)"]);
      });
    });
    describe('9.3 renderChessBoard', () => {
      function renderChessBoard(size = 8) {
        const board = document.createElement('div');
board.className = 'chessboard';
board.setAttribute('data-size', String(size));
for (let r = 0; r < size; r++) {
  const row = document.createElement('div');
  row.className = 'board-row';
  for (let c = 0; c < size; c++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.setAttribute('data-coord', `${r},${c}`);
    if ((r + c) % 2 === 0) {
      cell.classList.add('cell--white');
      cell.style.backgroundColor = 'rgb(255, 255, 255)';
    } else {
      cell.classList.add('cell--black');
      cell.style.backgroundColor = 'rgb(30, 41, 59)';
    }
    row.appendChild(cell);
  }
  board.appendChild(row);
}
return board;
      }
      it('test 1', () => {
        expect((() => {
          const b = renderChessBoard(4);
          const rows = b.querySelectorAll('.board-row');
          const cells = b.querySelectorAll('.cell');
          return [
            b.dataset.size,
            rows.length,
            cells.length,
            cells[0].classList.contains('cell--white'),
            cells[0].style.backgroundColor,
            cells[1].classList.contains('cell--black'),
            cells[1].style.backgroundColor
          ];
        })()).toEqual(["4",4,16,true,"rgb(255, 255, 255)",true,"rgb(30, 41, 59)"]);
      });
    });
    describe('9.4 renderActivityHeatmap', () => {
      function renderActivityHeatmap(weeksCount, daysPerWeek = 7, activityMatrix = []) {
        const map = document.createElement('div');
map.className = 'heatmap-container';
map.style.display = 'flex';
map.style.gap = '4px';
for (let w = 0; w < weeksCount; w++) {
  const weekCol = document.createElement('div');
  weekCol.className = 'heatmap-week';
  weekCol.style.display = 'flex';
  weekCol.style.flexDirection = 'column';
  weekCol.style.gap = '4px';
  for (let d = 0; d < daysPerWeek; d++) {
    const count = (activityMatrix[w] && activityMatrix[w][d]) || 0;
    const day = document.createElement('div');
    day.className = 'heatmap-day';
    day.setAttribute('data-count', String(count));
    if (count === 0) day.style.backgroundColor = 'rgb(241, 245, 249)';
    else if (count <= 3) day.style.backgroundColor = 'rgb(187, 247, 208)';
    else if (count <= 7) day.style.backgroundColor = 'rgb(74, 222, 128)';
    else day.style.backgroundColor = 'rgb(22, 163, 74)';
    weekCol.appendChild(day);
  }
  map.appendChild(weekCol);
}
return map;
      }
      it('test 1', () => {
        expect((() => {
          const matrix = [[0, 2, 5, 10]];
          const hm = renderActivityHeatmap(1, 4, matrix);
          const days = hm.querySelectorAll('.heatmap-day');
          return [
            days.length,
            days[0].style.backgroundColor,
            days[1].style.backgroundColor,
            days[2].style.backgroundColor,
            days[3].style.backgroundColor
          ];
        })()).toEqual([4,"rgb(241, 245, 249)","rgb(187, 247, 208)","rgb(74, 222, 128)","rgb(22, 163, 74)"]);
      });
    });
    describe('9.5 renderPixelArtGrid', () => {
      function renderPixelArtGrid(rows, cols, colorMatrix) {
        const canvas = document.createElement('div');
canvas.className = 'pixel-canvas';
canvas.style.display = 'grid';
canvas.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const color = (colorMatrix[r] && colorMatrix[r][c]) || 'rgb(255, 255, 255)';
    const px = document.createElement('div');
    px.className = 'pixel';
    px.setAttribute('data-row', String(r));
    px.setAttribute('data-col', String(c));
    px.style.backgroundColor = color;
    canvas.appendChild(px);
  }
}
return canvas;
      }
      it('test 1', () => {
        expect((() => {
          const colors = [['#ff0000', '#00ff00'], ['#0000ff', '#ffffff']];
          const can = renderPixelArtGrid(2, 2, colors);
          const pxs = can.querySelectorAll('.pixel');
          return [
            can.style.gridTemplateColumns,
            pxs.length,
            pxs[0].style.backgroundColor,
            pxs[0].dataset.row,
            pxs[0].dataset.col
          ];
        })()).toEqual(["repeat(2, 1fr)",4,"#ff0000","0","0"]);
      });
    });
    describe('9.6 renderMultiplicationTableDOM', () => {
      function renderMultiplicationTableDOM(max = 5) {
        const table = document.createElement('table');
table.className = 'mult-table';
for (let r = 1; r <= max; r++) {
  const tr = document.createElement('tr');
  for (let c = 1; c <= max; c++) {
    const td = document.createElement('td');
    td.textContent = String(r * c);
    if (r === c) {
      td.classList.add('cell--diagonal');
      td.style.backgroundColor = 'rgb(254, 240, 138)';
    }
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
return table;
      }
      it('test 1', () => {
        expect((() => {
          const tbl = renderMultiplicationTableDOM(3);
          const diag = tbl.querySelectorAll('.cell--diagonal');
          return [
            tbl.querySelectorAll('tr').length,
            diag.length,
            diag[0].textContent,
            diag[1].textContent,
            diag[2].textContent,
            diag[0].style.backgroundColor
          ];
        })()).toEqual([3,3,"1","4","9","rgb(254, 240, 138)"]);
      });
    });
    describe('9.7 renderNestedTreeMenu', () => {
      function renderNestedTreeMenu(categories) {
        const ul = document.createElement('ul');
ul.className = 'tree-menu';
if (!Array.isArray(categories)) return ul;
for (const cat of categories) {
  const li = document.createElement('li');
  li.className = 'tree-node';
  const span = document.createElement('span');
  span.className = 'node-title';
  span.textContent = cat.name || '';
  li.appendChild(span);
  if (Array.isArray(cat.children) && cat.children.length > 0) {
    const subUl = document.createElement('ul');
    subUl.className = 'tree-sub';
    for (const child of cat.children) {
      const subLi = document.createElement('li');
      subLi.className = 'sub-node';
      subLi.textContent = child;
      subUl.appendChild(subLi);
    }
    li.appendChild(subUl);
  }
  ul.appendChild(li);
}
return ul;
      }
      it('test 1', () => {
        expect((() => {
          const data = [
            { name: 'Фронтенд', children: ['HTML', 'CSS', 'JS'] },
            { name: 'Бекенд', children: ['Node.js'] }
          ];
          const tree = renderNestedTreeMenu(data);
          const subNodes = tree.querySelectorAll('.sub-node');
          return [
            tree.querySelectorAll('.tree-node').length,
            subNodes.length,
            subNodes[0].textContent,
            subNodes[3].textContent
          ];
        })()).toEqual([2,4,"HTML","Node.js"]);
      });
    });
    describe('9.8 renderSeatMap', () => {
      function renderSeatMap(rowsCount, seatsPerRow, reservedSeats = []) {
        const map = document.createElement('div');
map.className = 'seat-map';
const reservedSet = new Set(reservedSeats);
for (let r = 1; r <= rowsCount; r++) {
  const rowDiv = document.createElement('div');
  rowDiv.className = 'seat-row';
  rowDiv.setAttribute('data-row', String(r));
  for (let s = 1; s <= seatsPerRow; s++) {
    const seatId = `${r}-${s}`;
    const btn = document.createElement('button');
    btn.className = 'seat';
    btn.setAttribute('data-seat', seatId);
    if (reservedSet.has(seatId)) {
      btn.classList.add('seat--reserved');
      btn.disabled = true;
      btn.style.backgroundColor = 'rgb(239, 68, 68)';
    } else {
      btn.classList.add('seat--available');
      btn.style.backgroundColor = 'rgb(16, 185, 129)';
    }
    btn.textContent = String(s);
    rowDiv.appendChild(btn);
  }
  map.appendChild(rowDiv);
}
return map;
      }
      it('test 1', () => {
        expect((() => {
          const sm = renderSeatMap(2, 2, ['1-2']);
          const reserved = sm.querySelectorAll('.seat--reserved');
          const available = sm.querySelectorAll('.seat--available');
          return [
            reserved.length,
            reserved[0].disabled,
            reserved[0].style.backgroundColor,
            available.length,
            available[0].style.backgroundColor
          ];
        })()).toEqual([1,true,"rgb(239, 68, 68)",3,"rgb(16, 185, 129)"]);
      });
    });
    describe('9.9 renderColorPaletteMatrix', () => {
      function renderColorPaletteMatrix(palettes) {
        const matrix = document.createElement('div');
matrix.className = 'palette-matrix';
if (!Array.isArray(palettes)) return matrix;
for (const p of palettes) {
  const row = document.createElement('div');
  row.className = 'palette-row';
  const h4 = document.createElement('h4');
  h4.textContent = p.groupName || '';
  row.appendChild(h4);
  const wrap = document.createElement('div');
  wrap.className = 'shades-wrap';
  for (const shade of p.shades || []) {
    const swatch = document.createElement('div');
    swatch.className = 'color-swatch';
    swatch.style.backgroundColor = shade;
    swatch.textContent = shade;
    wrap.appendChild(swatch);
  }
  row.appendChild(wrap);
  matrix.appendChild(row);
}
return matrix;
      }
      it('test 1', () => {
        expect((() => {
          const matrix = renderColorPaletteMatrix([
            { groupName: 'Emerald', shades: ['#a7f3d0', '#059669'] }
          ]);
          const swatches = matrix.querySelectorAll('.color-swatch');
          return [
            matrix.querySelector('h4').textContent,
            swatches.length,
            swatches[0].style.backgroundColor,
            swatches[1].style.backgroundColor
          ];
        })()).toEqual(["Emerald",2,"#a7f3d0","#059669"]);
      });
    });
    describe('9.10 renderProductComparisonGrid', () => {
      function renderProductComparisonGrid(features, products) {
        const table = document.createElement('table');
table.className = 'comparison-table';
const thead = document.createElement('thead');
const trHead = document.createElement('tr');
const thFeature = document.createElement('th');
thFeature.textContent = 'Функція';
trHead.appendChild(thFeature);
for (const p of products || []) {
  const th = document.createElement('th');
  th.textContent = p.name || '';
  trHead.appendChild(th);
}
thead.appendChild(trHead);
table.appendChild(thead);

const tbody = document.createElement('tbody');
for (const f of features || []) {
  const tr = document.createElement('tr');
  const thRow = document.createElement('th');
  thRow.textContent = f;
  tr.appendChild(thRow);
  for (const p of products || []) {
    const td = document.createElement('td');
    const hasFeature = p.features && Boolean(p.features[f]);
    if (hasFeature) {
      td.className = 'feature--yes';
      td.textContent = '✓';
      td.style.color = 'rgb(16, 185, 129)';
    } else {
      td.className = 'feature--no';
      td.textContent = '✕';
      td.style.color = 'rgb(239, 68, 68)';
    }
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}
table.appendChild(tbody);
return table;
      }
      it('test 1', () => {
        expect((() => {
          const feats = ['Wi-Fi', 'Bluetooth'];
          const prods = [
            { name: 'Модель A', features: { 'Wi-Fi': true, 'Bluetooth': false } },
            { name: 'Модель B', features: { 'Wi-Fi': true, 'Bluetooth': true } }
          ];
          const tbl = renderProductComparisonGrid(feats, prods);
          const yes = tbl.querySelectorAll('.feature--yes');
          const no = tbl.querySelectorAll('.feature--no');
          return [
            tbl.querySelectorAll('thead th').length,
            yes.length,
            no.length,
            yes[0].style.color,
            no[0].style.color
          ];
        })()).toEqual([3,3,1,"rgb(16, 185, 129)","rgb(239, 68, 68)"]);
      });
    });
    describe('9.11 renderWordSearchGrid', () => {
      function renderWordSearchGrid(letterMatrix) {
        const grid = document.createElement('div');
grid.className = 'word-grid';
if (!Array.isArray(letterMatrix)) return grid;
for (let r = 0; r < letterMatrix.length; r++) {
  const rowDiv = document.createElement('div');
  rowDiv.className = 'grid-row';
  const rowLetters = letterMatrix[r] || [];
  for (let c = 0; c < rowLetters.length; c++) {
    const span = document.createElement('span');
    span.className = 'letter-cell';
    span.setAttribute('data-row', String(r));
    span.setAttribute('data-col', String(c));
    span.textContent = String(rowLetters[c]);
    rowDiv.appendChild(span);
  }
  grid.appendChild(rowDiv);
}
return grid;
      }
      it('test 1', () => {
        expect((() => {
          const mat = [['A', 'B'], ['C', 'D']];
          const g = renderWordSearchGrid(mat);
          const cells = g.querySelectorAll('.letter-cell');
          return [
            g.querySelectorAll('.grid-row').length,
            cells.length,
            cells[0].textContent,
            cells[3].textContent,
            cells[3].dataset.row,
            cells[3].dataset.col
          ];
        })()).toEqual([2,4,"A","D","1","1"]);
      });
    });
    describe('9.12 renderBarChartGrouped', () => {
      function renderBarChartGrouped(periods, series) {
        const chart = document.createElement('div');
chart.className = 'grouped-chart';
chart.style.display = 'flex';
chart.style.gap = '16px';
chart.style.alignItems = 'flex-end';
if (!Array.isArray(periods) || !Array.isArray(series)) return chart;
for (let p = 0; p < periods.length; p++) {
  const group = document.createElement('div');
  group.className = 'chart-group';
  for (const s of series) {
    const val = (s.data && s.data[p]) || 0;
    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    bar.style.height = `${val * 2}px`;
    bar.style.backgroundColor = s.color || 'rgb(99, 102, 241)';
    bar.setAttribute('title', `${s.name}: ${val}`);
    group.appendChild(bar);
  }
  chart.appendChild(group);
}
return chart;
      }
      it('test 1', () => {
        expect((() => {
          const periods = ['Q1', 'Q2'];
          const series = [
            { name: 'План', color: '#3b82f6', data: [50, 80] },
            { name: 'Факт', color: '#10b981', data: [45, 90] }
          ];
          const chart = renderBarChartGrouped(periods, series);
          const bars = chart.querySelectorAll('.chart-bar');
          return [
            chart.querySelectorAll('.chart-group').length,
            bars.length,
            bars[0].style.height,
            bars[0].style.backgroundColor,
            bars[3].style.height
          ];
        })()).toEqual([2,4,"100px","#3b82f6","180px"]);
      });
    });
  });

  describe('SOLUTIONS: Модуль 10: Маніпуляція DOM, стилізація та очищення через цикли', () => {
    describe('10.1 applyZebraStriping', () => {
      function applyZebraStriping(tableElement, evenBg = '#ffffff', oddBg = '#f9fafb') {
        if (!tableElement) return 0;
const rows = tableElement.querySelectorAll('tbody tr');
for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  if (i % 2 === 0) {
    row.style.backgroundColor = evenBg;
    row.classList.remove('table-row--striped');
  } else {
    row.style.backgroundColor = oddBg;
    row.classList.add('table-row--striped');
  }
}
return rows.length;
      }
      it('test 1', () => {
        expect((() => {
          const tbl = document.createElement('table');
          const tbody = document.createElement('tbody');
          for (let i = 0; i < 3; i++) tbody.appendChild(document.createElement('tr'));
          tbl.appendChild(tbody);
          const count = applyZebraStriping(tbl, '#ffffff', '#f0f0f0');
          const rows = tbl.querySelectorAll('tbody tr');
          return [
            count,
            rows[0].style.backgroundColor,
            rows[1].style.backgroundColor,
            rows[1].classList.contains('table-row--striped')
          ];
        })()).toEqual([3,"#ffffff","#f0f0f0",true]);
      });
    });
    describe('10.2 clearContainerFast', () => {
      function clearContainerFast(containerElement) {
        if (!containerElement) return 0;
let count = 0;
while (containerElement.firstChild) {
  containerElement.removeChild(containerElement.firstChild);
  count++;
}
return count;
      }
      it('test 1', () => {
        expect((() => {
          const div = document.createElement('div');
          div.appendChild(document.createElement('p'));
          div.appendChild(document.createElement('span'));
          const deleted = clearContainerFast(div);
          return [deleted, div.childNodes.length];
        })()).toEqual([2,0]);
      });
      it('test 2', () => {
        expect(clearContainerFast(null)).toEqual(0);
      });
    });
    describe('10.3 buildNestedListTree', () => {
      function buildNestedListTree(treeData) {
        function renderNode(node) {
  const li = document.createElement('li');
  li.className = 'tree-item';
  li.textContent = node.label || '';
  if (Array.isArray(node.children) && node.children.length > 0) {
    const subUl = document.createElement('ul');
    subUl.className = 'tree-sublist';
    for (const child of node.children) {
      subUl.appendChild(renderNode(child));
    }
    li.appendChild(subUl);
  }
  return li;
}
const ul = document.createElement('ul');
ul.className = 'tree-root';
const items = Array.isArray(treeData) ? treeData : [treeData].filter(Boolean);
for (const item of items) {
  ul.appendChild(renderNode(item));
}
return ul;
      }
      it('test 1', () => {
        expect((() => {
          const data = {
            label: 'Корінь',
            children: [{ label: 'Дочірній 1' }, { label: 'Дочірній 2' }]
          };
          const tree = buildNestedListTree(data);
          const items = tree.querySelectorAll('.tree-item');
          return [
            tree.tagName,
            items.length,
            items[0].childNodes[0].text || items[0].textContent
          ];
        })()).toEqual(["UL",3,"Корінь"]);
      });
    });
    describe('10.4 renderStepWizard', () => {
      function renderStepWizard(steps, currentStepIndex) {
        const wizard = document.createElement('div');
wizard.className = 'wizard-container';
if (!Array.isArray(steps)) return wizard;
for (let i = 0; i < steps.length; i++) {
  const step = document.createElement('div');
  step.className = 'wizard-step';
  step.setAttribute('data-step', String(i + 1));
  step.textContent = steps[i];
  if (i < currentStepIndex) {
    step.classList.add('wizard-step--done');
    step.style.borderColor = 'rgb(16, 185, 129)';
  } else if (i === currentStepIndex) {
    step.classList.add('wizard-step--active');
    step.style.borderColor = 'rgb(99, 102, 241)';
  } else {
    step.classList.add('wizard-step--pending');
    step.style.borderColor = 'rgb(203, 213, 225)';
  }
  wizard.appendChild(step);
}
return wizard;
      }
      it('test 1', () => {
        expect((() => {
          const wiz = renderStepWizard(['Контакти', 'Оплата', 'Підтвердження'], 1);
          const steps = wiz.querySelectorAll('.wizard-step');
          return [
            steps.length,
            steps[0].classList.contains('wizard-step--done'),
            steps[0].style.borderColor,
            steps[1].classList.contains('wizard-step--active'),
            steps[1].style.borderColor,
            steps[2].classList.contains('wizard-step--pending'),
            steps[2].style.borderColor
          ];
        })()).toEqual([3,true,"rgb(16, 185, 129)",true,"rgb(99, 102, 241)",true,"rgb(203, 213, 225)"]);
      });
    });
    describe('10.5 highlightKeywordsInElements', () => {
      function highlightKeywordsInElements(elementsList, keywords) {
        if (!elementsList || !keywords || keywords.length === 0) return 0;
let totalMatches = 0;
const escaped = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
const regex = new RegExp(`(${escaped})`, 'gi');
for (const el of elementsList) {
  const text = el.textContent || '';
  const matches = text.match(regex);
  if (matches) {
    totalMatches += matches.length;
    el.innerHTML = text.replace(regex, '<mark class="kw-highlight">$1</mark>');
  }
}
return totalMatches;
      }
      it('test 1', () => {
        expect((() => {
          const p1 = document.createElement('p'); p1.textContent = 'JavaScript цикли while та for';
          const p2 = document.createElement('p'); p2.textContent = 'Тут немає збігів';
          const count = highlightKeywordsInElements([p1, p2], ['while', 'for']);
          return [count, p1.innerHTML.includes('<mark class="kw-highlight">while</mark>')];
        })()).toEqual([2,true]);
      });
    });
    describe('10.6 toggleElementsVisibility', () => {
      function toggleElementsVisibility(elementsList, predicateFn) {
        if (!elementsList || typeof predicateFn !== 'function') return 0;
let visibleCount = 0;
for (const el of elementsList) {
  const show = Boolean(predicateFn(el));
  if (show) {
    el.style.display = '';
    el.removeAttribute('hidden');
    visibleCount++;
  } else {
    el.style.display = 'none';
    el.setAttribute('hidden', 'true');
  }
}
return visibleCount;
      }
      it('test 1', () => {
        expect((() => {
          const c1 = document.createElement('div'); c1.dataset.status = 'active';
          const c2 = document.createElement('div'); c2.dataset.status = 'inactive';
          const visible = toggleElementsVisibility([c1, c2], el => el.dataset.status === 'active');
          return [visible, c1.style.display, c2.style.display, c2.hasAttribute('hidden')];
        })()).toEqual([1,"","none",true]);
      });
    });
    describe('10.7 reorderListByAttribute', () => {
      function reorderListByAttribute(parentListElement, attrName) {
        if (!parentListElement) return null;
const items = Array.from(parentListElement.children);
items.sort((a, b) => {
  const valA = a.getAttribute(attrName) || '';
  const valB = b.getAttribute(attrName) || '';
  const numA = Number(valA);
  const numB = Number(valB);
  if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
  return valA.localeCompare(valB);
});
for (const item of items) {
  parentListElement.appendChild(item);
}
return parentListElement;
      }
      it('test 1', () => {
        expect((() => {
          const ul = document.createElement('ul');
          const li1 = document.createElement('li'); li1.setAttribute('data-order', '3');
          const li2 = document.createElement('li'); li2.setAttribute('data-order', '1');
          const li3 = document.createElement('li'); li3.setAttribute('data-order', '2');
          ul.appendChild(li1); ul.appendChild(li2); ul.appendChild(li3);
          reorderListByAttribute(ul, 'data-order');
          return Array.from(ul.children).map(c => c.getAttribute('data-order'));
        })()).toEqual(["1","2","3"]);
      });
    });
    describe('10.8 paginateChildren', () => {
      function paginateChildren(containerElement, pageSize, activePage) {
        if (!containerElement || pageSize <= 0 || activePage <= 0) return 0;
const children = containerElement.children;
let visibleCount = 0;
const startIdx = (activePage - 1) * pageSize;
const endIdx = startIdx + pageSize;
for (let i = 0; i < children.length; i++) {
  const child = children[i];
  if (i >= startIdx && i < endIdx) {
    child.style.display = '';
    visibleCount++;
  } else {
    child.style.display = 'none';
  }
}
return visibleCount;
      }
      it('test 1', () => {
        expect((() => {
          const div = document.createElement('div');
          for (let i = 0; i < 5; i++) div.appendChild(document.createElement('span'));
          const page1Count = paginateChildren(div, 2, 1);
          const visiblePage1 = Array.from(div.children).filter(c => c.style.display !== 'none').length;
          const page3Count = paginateChildren(div, 2, 3);
          return [page1Count, visiblePage1, page3Count];
        })()).toEqual([2,2,1]);
      });
    });
    describe('10.9 batchUpdateStyles', () => {
      function batchUpdateStyles(elementsList, stylesObject) {
        if (!elementsList || !stylesObject) return elementsList;
const entries = Object.entries(stylesObject);
for (const el of elementsList) {
  for (const [prop, val] of entries) {
    el.style[prop] = val;
  }
}
return elementsList;
      }
      it('test 1', () => {
        expect((() => {
          const d1 = document.createElement('div');
          const d2 = document.createElement('div');
          batchUpdateStyles([d1, d2], { color: '#ffffff', opacity: '0.8' });
          return [d1.style.color, d2.style.opacity];
        })()).toEqual(["#ffffff","0.8"]);
      });
    });
    describe('10.10 extractTableData', () => {
      function extractTableData(tableElement) {
        if (!tableElement) return [];
const headers = Array.from(tableElement.querySelectorAll('thead th')).map(th => th.textContent.trim());
const rows = tableElement.querySelectorAll('tbody tr');
const data = [];
for (const tr of rows) {
  const cells = tr.querySelectorAll('td');
  const rowObj = {};
  for (let c = 0; c < cells.length; c++) {
    const key = headers[c] || `col_${c}`;
    rowObj[key] = cells[c].textContent.trim();
  }
  data.push(rowObj);
}
return data;
      }
      it('test 1', () => {
        expect((() => {
          const tbl = document.createElement('table');
          const thead = document.createElement('thead');
          const trH = document.createElement('tr');
          const th1 = document.createElement('th'); th1.textContent = 'name';
          const th2 = document.createElement('th'); th2.textContent = 'score';
          trH.appendChild(th1); trH.appendChild(th2);
          thead.appendChild(trH);
          tbl.appendChild(thead);
          const tbody = document.createElement('tbody');
          const trD = document.createElement('tr');
          const td1 = document.createElement('td'); td1.textContent = 'Anna';
          const td2 = document.createElement('td'); td2.textContent = '100';
          trD.appendChild(td1); trD.appendChild(td2);
          tbody.appendChild(trD);
          tbl.appendChild(tbody);
          return extractTableData(tbl);
        })()).toEqual([{"name":"Anna","score":"100"}]);
      });
    });
    describe('10.11 wrapConsecutiveElements', () => {
      function wrapConsecutiveElements(parentElement, targetTagName, wrapperClass = 'group-wrap') {
        if (!parentElement || !targetTagName) return null;
const tag = targetTagName.toUpperCase();
let currentWrapper = null;
let node = parentElement.firstChild;
while (node) {
  const next = node.nextSibling;
  if (node.nodeType === 1 && node.tagName === tag) {
    if (!currentWrapper) {
      currentWrapper = document.createElement('div');
      currentWrapper.className = wrapperClass;
      parentElement.insertBefore ? parentElement.insertBefore(currentWrapper, node) : parentElement.appendChild(currentWrapper);
    }
    currentWrapper.appendChild(node);
  } else {
    currentWrapper = null;
  }
  node = next;
}
return parentElement;
      }
      it('test 1', () => {
        expect((() => {
          const div = document.createElement('div');
          const p1 = document.createElement('p');
          const p2 = document.createElement('p');
          const span = document.createElement('span');
          div.appendChild(p1); div.appendChild(p2); div.appendChild(span);
          const wrap = document.createElement('div');
          wrap.className = 'group-wrap';
          wrap.appendChild(p1); wrap.appendChild(p2);
          const res = document.createElement('div');
          res.appendChild(wrap); res.appendChild(span);
          return [res.children.length, res.children[0].className, res.children[0].children.length];
        })()).toEqual([2,"group-wrap",2]);
      });
    });
    describe('10.12 animateElementsStagger', () => {
      function animateElementsStagger(elementsList, stepDelayMs = 100) {
        if (!elementsList || elementsList.length === 0) return 0;
let maxDelay = 0;
for (let i = 0; i < elementsList.length; i++) {
  const el = elementsList[i];
  const delay = i * stepDelayMs;
  el.style.animationDelay = `${delay}ms`;
  el.classList.add('animate-stagger');
  maxDelay = delay;
}
return maxDelay;
      }
      it('test 1', () => {
        expect((() => {
          const el1 = document.createElement('div');
          const el2 = document.createElement('div');
          const el3 = document.createElement('div');
          const max = animateElementsStagger([el1, el2, el3], 150);
          return [max, el1.style.animationDelay, el2.style.animationDelay, el3.style.animationDelay, el3.classList.contains('animate-stagger')];
        })()).toEqual([300,"0ms","150ms","300ms",true]);
      });
    });
  });

});

describe("SOLUTIONS: Модуль 8: Створення DOM-елементів: списки, картки та UI-компоненти", () => {
  describe("8.1 renderProductCards", () => {
    function renderProductCards(products) {
      if (!Array.isArray(products) || products.length === 0) return null;
const container = document.createElement('div');
container.className = 'product-cards-container';
for (let i = 0; i < products.length; i++) {
  const p = products[i];
  const card = document.createElement('div');
  card.className = 'product-card';

  const title = document.createElement('h4');
  title.className = 'product-card__title';
  title.textContent = p.title || '';

  const price = document.createElement('p');
  price.className = 'product-card__price';
  price.textContent = `${p.price} ₴`;

  card.appendChild(title);
  card.appendChild(price);
  container.appendChild(card);
}
return container;
    }
    it("test 1", () => {
      expect((() => {
          const res = renderProductCards([{ title: 'Ноутбук', price: 25000 }, { title: 'Мишка', price: 800 }]);
          return [res.className, res.children.length, res.children[0].querySelector('.product-card__title').textContent];
        })()).toEqual(["product-cards-container",2,"Ноутбук"]);
    });
    it("test 2", () => {
      expect(renderProductCards([])).toEqual(null);
    });
  });

  describe("8.2 renderStarRating", () => {
    function renderStarRating(rating, maxStars) {
      if (maxStars <= 0) return null;
const container = document.createElement('div');
container.className = 'star-rating';
container.setAttribute('role', 'img');
container.setAttribute('aria-label', `Рейтинг: ${rating} з ${maxStars}`);
for (let i = 1; i <= maxStars; i++) {
  const star = document.createElement('span');
  if (i <= rating) {
    star.className = 'star star--filled';
    star.textContent = '★';
  } else {
    star.className = 'star star--empty';
    star.textContent = '☆';
  }
  container.appendChild(star);
}
return container;
    }
    it("test 1", () => {
      expect((() => {
          const el = renderStarRating(3, 5);
          return [el.className, el.children.length, el.querySelectorAll('.star--filled').length];
        })()).toEqual(["star-rating",5,3]);
    });
    it("test 2", () => {
      expect(renderStarRating(0, 0)).toEqual(null);
    });
  });

  describe("8.3 renderBreadcrumbs", () => {
    function renderBreadcrumbs(links) {
      if (!Array.isArray(links) || links.length === 0) return null;
const nav = document.createElement('nav');
nav.className = 'breadcrumbs';
for (let i = 0; i < links.length; i++) {
  const item = links[i];
  const isLast = (i === links.length - 1) || !item.url;
  if (isLast) {
    const cur = document.createElement('span');
    cur.className = 'breadcrumbs__current';
    cur.textContent = item.label;
    nav.appendChild(cur);
  } else {
    const a = document.createElement('a');
    a.className = 'breadcrumbs__link';
    a.setAttribute('href', item.url);
    a.textContent = item.label;
    nav.appendChild(a);

    const sep = document.createElement('span');
    sep.className = 'breadcrumbs__sep';
    sep.textContent = '/';
    nav.appendChild(sep);
  }
}
return nav;
    }
    it("test 1", () => {
      expect((() => {
          const nav = renderBreadcrumbs([{ label: 'Головна', url: '/' }, { label: 'Курс', url: null }]);
          return [nav.children.length, nav.children[0].tagName, nav.children[1].className, nav.children[2].className];
        })()).toEqual([3,"A","breadcrumbs__sep","breadcrumbs__current"]);
    });
    it("test 2", () => {
      expect(renderBreadcrumbs([])).toEqual(null);
    });
  });

  describe("8.4 renderStatusBadges", () => {
    function renderStatusBadges(items) {
      if (!Array.isArray(items) || items.length === 0) return null;
const container = document.createElement('div');
container.className = 'badge-container';
const valid = ['success', 'warning', 'danger'];
for (let i = 0; i < items.length; i++) {
  const it = items[i];
  const span = document.createElement('span');
  const st = valid.includes(it.status) ? it.status : 'neutral';
  span.className = `badge badge--${st}`;
  span.textContent = it.label;
  container.appendChild(span);
}
return container;
    }
    it("test 1", () => {
      expect((() => {
          const wrap = renderStatusBadges([{ label: 'OK', status: 'success' }, { label: '???', status: 'unknown' }]);
          return [wrap.children.length, wrap.children[0].className, wrap.children[1].className];
        })()).toEqual([2,"badge badge--success","badge badge--neutral"]);
    });
  });

  describe("8.5 renderMessageList", () => {
    function renderMessageList(messages) {
      if (!Array.isArray(messages) || messages.length === 0) return null;
const ul = document.createElement('ul');
ul.className = 'message-list';
for (let i = 0; i < messages.length; i++) {
  const m = messages[i];
  const li = document.createElement('li');
  li.className = `message-item ${m.isMine ? 'message-item--mine' : 'message-item--other'}`;

  const author = document.createElement('span');
  author.className = 'message-item__author';
  author.textContent = `${m.author}: `;

  const text = document.createElement('span');
  text.className = 'message-item__text';
  text.textContent = m.text;

  li.appendChild(author);
  li.appendChild(text);
  ul.appendChild(li);
}
return ul;
    }
    it("test 1", () => {
      expect((() => {
          const list = renderMessageList([{ author: 'Анна', text: 'Привіт!', isMine: false }, { author: 'Я', text: 'Привіт', isMine: true }]);
          return [list.children.length, list.children[0].className, list.children[1].className];
        })()).toEqual([2,"message-item message-item--other","message-item message-item--mine"]);
    });
  });

  describe("8.6 renderTagCloud", () => {
    function renderTagCloud(tags) {
      if (!Array.isArray(tags) || tags.length === 0) return null;
const container = document.createElement('div');
container.className = 'tag-cloud';
for (let i = 0; i < tags.length; i++) {
  const t = tags[i];
  const chip = document.createElement('span');
  chip.className = t.count > 10 ? 'tag-chip tag-chip--popular' : 'tag-chip';
  chip.setAttribute('data-count', String(t.count));
  chip.textContent = t.name;
  container.appendChild(chip);
}
return container;
    }
    it("test 1", () => {
      expect((() => {
          const wrap = renderTagCloud([{ name: 'js', count: 15 }, { name: 'css', count: 5 }]);
          return [wrap.children.length, wrap.children[0].className, wrap.children[0].getAttribute('data-count')];
        })()).toEqual([2,"tag-chip tag-chip--popular","15"]);
    });
  });

  describe("8.7 renderProgressBarSteps", () => {
    function renderProgressBarSteps(stepsCount, activeIndex) {
      if (stepsCount <= 0) return null;
const container = document.createElement('div');
container.className = 'progress-steps';
container.setAttribute('data-total', String(stepsCount));
for (let i = 0; i < stepsCount; i++) {
  const step = document.createElement('div');
  step.className = i <= activeIndex ? 'step-indicator step-indicator--completed' : 'step-indicator';
  step.textContent = String(i + 1);
  container.appendChild(step);
}
return container;
    }
    it("test 1", () => {
      expect((() => {
          const bar = renderProgressBarSteps(4, 1);
          return [bar.children.length, bar.children[0].className, bar.children[2].className];
        })()).toEqual([4,"step-indicator step-indicator--completed","step-indicator"]);
    });
  });

  describe("8.8 renderNumberedList", () => {
    function renderNumberedList(items, startNumber) {
      if (!Array.isArray(items) || items.length === 0) return null;
const ol = document.createElement('ol');
ol.className = 'numbered-list';
ol.setAttribute('start', String(startNumber));
for (let i = 0; i < items.length; i++) {
  const li = document.createElement('li');
  li.className = 'numbered-list__item';
  li.setAttribute('data-index', String(startNumber + i));
  li.textContent = items[i];
  ol.appendChild(li);
}
return ol;
    }
    it("test 1", () => {
      expect((() => {
          const ol = renderNumberedList(['Вступ', 'Основи'], 10);
          return [ol.getAttribute('start'), ol.children[0].getAttribute('data-index'), ol.children[0].textContent];
        })()).toEqual(["10","10","Вступ"]);
    });
  });

  describe("8.9 renderNotificationFeed", () => {
    function renderNotificationFeed(notifications) {
      if (!Array.isArray(notifications) || notifications.length === 0) return null;
const container = document.createElement('div');
container.className = 'notification-feed';
for (let i = 0; i < notifications.length; i++) {
  const n = notifications[i];
  const card = document.createElement('div');
  card.className = n.unread ? 'notification-card notification-card--unread' : 'notification-card';

  const title = document.createElement('h5');
  title.className = 'notification-card__title';
  title.textContent = n.title;

  const body = document.createElement('p');
  body.className = 'notification-card__body';
  body.textContent = n.message;

  card.appendChild(title);
  card.appendChild(body);
  container.appendChild(card);
}
return container;
    }
    it("test 1", () => {
      expect((() => {
          const feed = renderNotificationFeed([{ title: 'Оновлення', message: 'Готово', unread: true }]);
          return [feed.children.length, feed.children[0].className, feed.children[0].querySelector('h5').textContent];
        })()).toEqual([1,"notification-card notification-card--unread","Оновлення"]);
    });
  });

  describe("8.10 renderTabsNavigation", () => {
    function renderTabsNavigation(tabTitles, activeIndex) {
      if (!Array.isArray(tabTitles) || tabTitles.length === 0) return null;
const nav = document.createElement('div');
nav.className = 'tabs-nav';
nav.setAttribute('role', 'tablist');
for (let i = 0; i < tabTitles.length; i++) {
  const isCur = (i === activeIndex);
  const btn = document.createElement('button');
  btn.className = isCur ? 'tab-button tab-button--active' : 'tab-button';
  btn.setAttribute('role', 'tab');
  btn.setAttribute('aria-selected', isCur ? 'true' : 'false');
  btn.textContent = tabTitles[i];
  nav.appendChild(btn);
}
return nav;
    }
    it("test 1", () => {
      expect((() => {
          const nav = renderTabsNavigation(['Таб 1', 'Таб 2'], 0);
          return [nav.children.length, nav.children[0].className, nav.children[0].getAttribute('aria-selected'), nav.children[1].getAttribute('aria-selected')];
        })()).toEqual([2,"tab-button tab-button--active","true","false"]);
    });
  });

  describe("8.11 renderAccordionList", () => {
    function renderAccordionList(items) {
      if (!Array.isArray(items) || items.length === 0) return null;
const list = document.createElement('div');
list.className = 'accordion-list';
for (let i = 0; i < items.length; i++) {
  const it = items[i];
  const details = document.createElement('details');
  details.className = 'accordion-item';
  if (it.open) details.open = true;

  const summary = document.createElement('summary');
  summary.className = 'accordion-header';
  summary.textContent = it.title;

  const content = document.createElement('div');
  content.className = 'accordion-content';
  content.textContent = it.content;

  details.appendChild(summary);
  details.appendChild(content);
  list.appendChild(details);
}
return list;
    }
    it("test 1", () => {
      expect((() => {
          const acc = renderAccordionList([{ title: 'Питання', content: 'Відповідь', open: true }]);
          return [acc.children.length, acc.children[0].tagName, acc.children[0].open];
        })()).toEqual([1,"DETAILS",true]);
    });
  });

  describe("8.12 renderAvatarStack", () => {
    function renderAvatarStack(avatars, maxVisible) {
      if (!Array.isArray(avatars) || avatars.length === 0) return null;
const stack = document.createElement('div');
stack.className = 'avatar-stack';
const limit = Math.min(avatars.length, maxVisible);
for (let i = 0; i < limit; i++) {
  const img = document.createElement('img');
  img.className = 'avatar-img';
  img.setAttribute('src', avatars[i]);
  img.setAttribute('alt', 'avatar');
  stack.appendChild(img);
}
if (avatars.length > maxVisible) {
  const more = document.createElement('span');
  more.className = 'avatar-more';
  more.textContent = `+${avatars.length - maxVisible}`;
  stack.appendChild(more);
}
return stack;
    }
    it("test 1", () => {
      expect((() => {
          const s = renderAvatarStack(['u1.png', 'u2.png', 'u3.png'], 2);
          return [s.children.length, s.children[0].tagName, s.children[2].className, s.children[2].textContent];
        })()).toEqual([3,"IMG","avatar-more","+1"]);
    });
  });

});

describe("SOLUTIONS: Модуль 9: Створення складних сіток та таблиць через вкладені цикли та DOM API", () => {
  describe("9.1 renderDataTable", () => {
    function renderDataTable(headers, rows) {
      if (!Array.isArray(headers) || headers.length === 0) return null;
const tbl = document.createElement('table');
tbl.className = 'data-table';

const thead = document.createElement('thead');
const trHead = document.createElement('tr');
for (let h = 0; h < headers.length; h++) {
  const th = document.createElement('th');
  th.textContent = headers[h];
  trHead.appendChild(th);
}
thead.appendChild(trHead);
tbl.appendChild(thead);

const tbody = document.createElement('tbody');
if (Array.isArray(rows)) {
  for (let r = 0; r < rows.length; r++) {
    const tr = document.createElement('tr');
    for (let c = 0; c < headers.length; c++) {
      const td = document.createElement('td');
      td.textContent = rows[r][headers[c]] !== undefined ? String(rows[r][headers[c]]) : '';
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}
tbl.appendChild(tbody);
return tbl;
    }
    it("test 1", () => {
      expect((() => {
          const t = renderDataTable(['id', 'name'], [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
          return [t.tagName, t.querySelectorAll('th').length, t.querySelectorAll('tbody tr').length, t.querySelectorAll('td')[1].textContent];
        })()).toEqual(["TABLE",2,2,"Alice"]);
    });
    it("test 2", () => {
      expect(renderDataTable([], [])).toEqual(null);
    });
  });

  describe("9.2 renderCalendarMonth", () => {
    function renderCalendarMonth(daysInMonth, monthName) {
      if (daysInMonth <= 0) return null;
const container = document.createElement('div');
container.className = 'calendar-month';

const title = document.createElement('h3');
title.className = 'month-title';
title.textContent = monthName;
container.appendChild(title);

const grid = document.createElement('div');
grid.className = 'calendar-grid';

for (let d = 1; d <= daysInMonth; d++) {
  const cell = document.createElement('span');
  cell.className = 'day-cell';
  cell.textContent = String(d);
  grid.appendChild(cell);
}

container.appendChild(grid);
return container;
    }
    it("test 1", () => {
      expect((() => {
          const cal = renderCalendarMonth(31, 'Березень 2026');
          return [cal.className, cal.querySelector('h3').textContent, cal.querySelectorAll('.day-cell').length, cal.querySelectorAll('.day-cell')[0].textContent];
        })()).toEqual(["calendar-month","Березень 2026",31,"1"]);
    });
    it("test 2", () => {
      expect(renderCalendarMonth(0, 'Тест')).toEqual(null);
    });
  });

  describe("9.3 renderChessBoard", () => {
    function renderChessBoard(size) {
      if (size <= 0) return null;
const board = document.createElement('div');
board.className = 'chess-board';
for (let r = 0; r < size; r++) {
  const row = document.createElement('div');
  row.className = 'chess-row';
  for (let c = 0; c < size; c++) {
    const cell = document.createElement('div');
    cell.className = (r + c) % 2 === 0 ? 'chess-cell cell--white' : 'chess-cell cell--black';
    row.appendChild(cell);
  }
  board.appendChild(row);
}
return board;
    }
    it("test 1", () => {
      expect((() => {
          const b = renderChessBoard(4);
          return [b.children.length, b.children[0].children.length, b.children[0].children[0].className, b.children[0].children[1].className];
        })()).toEqual([4,4,"chess-cell cell--white","chess-cell cell--black"]);
    });
  });

  describe("9.4 renderActivityHeatmap", () => {
    function renderActivityHeatmap(weeksCount, dataMatrix) {
      if (weeksCount <= 0 || !Array.isArray(dataMatrix)) return null;
const grid = document.createElement('div');
grid.className = 'heatmap-grid';
for (let w = 0; w < weeksCount; w++) {
  const col = document.createElement('div');
  col.className = 'heatmap-col';
  const week = dataMatrix[w] || [];
  for (let d = 0; d < 7; d++) {
    const val = week[d] || 0;
    const cell = document.createElement('div');
    cell.className = 'heatmap-cell';
    const level = val > 6 ? 3 : val >= 4 ? 2 : val >= 1 ? 1 : 0;
    cell.setAttribute('data-level', String(level));
    cell.setAttribute('title', `${val} дій`);
    col.appendChild(cell);
  }
  grid.appendChild(col);
}
return grid;
    }
    it("test 1", () => {
      expect((() => {
          const hm = renderActivityHeatmap(2, [[0, 5, 2, 0, 8, 1, 0], [1, 2, 0, 4, 0, 0, 0]]);
          return [hm.children.length, hm.children[0].children.length, hm.children[0].children[1].getAttribute('data-level')];
        })()).toEqual([2,7,"2"]);
    });
  });

  describe("9.5 renderPixelArtGrid", () => {
    function renderPixelArtGrid(width, height, colorMatrix) {
      if (width <= 0 || height <= 0 || !Array.isArray(colorMatrix)) return null;
const grid = document.createElement('div');
grid.className = 'pixel-art-grid';
for (let r = 0; r < height; r++) {
  const row = document.createElement('div');
  row.className = 'pixel-row';
  const colors = colorMatrix[r] || [];
  for (let c = 0; c < width; c++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel-cell';
    pixel.style.backgroundColor = colors[c] || '#ffffff';
    row.appendChild(pixel);
  }
  grid.appendChild(row);
}
return grid;
    }
    it("test 1", () => {
      expect((() => {
          const g = renderPixelArtGrid(2, 2, [['#ff0000', '#00ff00'], ['#0000ff', '#ffffff']]);
          return [g.children.length, g.children[0].children[0].style.backgroundColor];
        })()).toEqual([2,"#ff0000"]);
    });
  });

  describe("9.6 renderMultiplicationTableDOM", () => {
    function renderMultiplicationTableDOM(size) {
      if (size <= 0) return null;
const table = document.createElement('table');
table.className = 'mult-table';
const tbody = document.createElement('tbody');
for (let r = 1; r <= size; r++) {
  const tr = document.createElement('tr');
  for (let c = 1; c <= size; c++) {
    const td = document.createElement('td');
    td.textContent = String(r * c);
    if (r === c) td.className = 'cell--diagonal';
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}
table.appendChild(tbody);
return table;
    }
    it("test 1", () => {
      expect((() => {
          const t = renderMultiplicationTableDOM(3);
          return [t.querySelectorAll('tr').length, t.querySelectorAll('.cell--diagonal').length, t.querySelectorAll('td')[8].textContent];
        })()).toEqual([3,3,"9"]);
    });
  });

  describe("9.7 renderNestedTreeMenu", () => {
    function renderNestedTreeMenu(nodes) {
      if (!Array.isArray(nodes) || nodes.length === 0) return null;
const ul = document.createElement('ul');
ul.className = 'tree-menu';
for (let i = 0; i < nodes.length; i++) {
  const node = nodes[i];
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.className = 'tree-label';
  span.textContent = node.label;
  li.appendChild(span);

  if (Array.isArray(node.children) && node.children.length > 0) {
    const subUl = document.createElement('ul');
    subUl.className = 'tree-submenu';
    for (let j = 0; j < node.children.length; j++) {
      const subLi = document.createElement('li');
      subLi.textContent = node.children[j].label;
      subUl.appendChild(subLi);
    }
    li.appendChild(subUl);
  }
  ul.appendChild(li);
}
return ul;
    }
    it("test 1", () => {
      expect((() => {
          const m = renderNestedTreeMenu([{ label: 'Каталог', children: [{ label: 'Взуття' }] }]);
          return [m.children.length, m.querySelector('.tree-submenu').children.length];
        })()).toEqual([1,1]);
    });
  });

  describe("9.8 renderSeatMap", () => {
    function renderSeatMap(rowsCount, seatsPerRow, reservedSeats) {
      if (rowsCount <= 0 || seatsPerRow <= 0) return null;
const map = document.createElement('div');
map.className = 'seat-map';
const reserved = Array.isArray(reservedSeats) ? reservedSeats : [];
for (let r = 1; r <= rowsCount; r++) {
  const row = document.createElement('div');
  row.className = 'seat-row';
  row.setAttribute('data-row', String(r));
  for (let s = 1; s <= seatsPerRow; s++) {
    const seatId = `${r}-${s}`;
    const btn = document.createElement('button');
    btn.setAttribute('data-seat', seatId);
    btn.textContent = String(s);
    if (reserved.includes(seatId)) {
      btn.className = 'seat seat--reserved';
      btn.disabled = true;
    } else {
      btn.className = 'seat seat--available';
    }
    row.appendChild(btn);
  }
  map.appendChild(row);
}
return map;
    }
    it("test 1", () => {
      expect((() => {
          const sm = renderSeatMap(2, 2, ['1-2']);
          return [sm.children.length, sm.querySelectorAll('.seat--reserved').length, sm.querySelectorAll('.seat--reserved')[0].disabled];
        })()).toEqual([2,1,true]);
    });
  });

  describe("9.9 renderColorPaletteMatrix", () => {
    function renderColorPaletteMatrix(paletteGroups) {
      if (!Array.isArray(paletteGroups) || paletteGroups.length === 0) return null;
const matrix = document.createElement('div');
matrix.className = 'palette-matrix';
for (let g = 0; g < paletteGroups.length; g++) {
  const grp = paletteGroups[g];
  const groupEl = document.createElement('div');
  groupEl.className = 'palette-group';

  const title = document.createElement('h4');
  title.className = 'palette-group__title';
  title.textContent = grp.groupName;
  groupEl.appendChild(title);

  const chips = document.createElement('div');
  chips.className = 'palette-chips';
  const shades = Array.isArray(grp.shades) ? grp.shades : [];
  for (let c = 0; c < shades.length; c++) {
    const chip = document.createElement('div');
    chip.className = 'color-chip';
    chip.style.backgroundColor = shades[c];
    chip.setAttribute('title', shades[c]);
    chips.appendChild(chip);
  }
  groupEl.appendChild(chips);
  matrix.appendChild(groupEl);
}
return matrix;
    }
    it("test 1", () => {
      expect((() => {
          const pm = renderColorPaletteMatrix([{ groupName: 'Greens', shades: ['#10b981', '#059669'] }]);
          return [pm.children.length, pm.querySelectorAll('.color-chip').length];
        })()).toEqual([1,2]);
    });
  });

  describe("9.10 renderProductComparisonGrid", () => {
    function renderProductComparisonGrid(featuresList, productsList) {
      if (!Array.isArray(featuresList) || !Array.isArray(productsList) || featuresList.length === 0 || productsList.length === 0) return null;
const table = document.createElement('table');
table.className = 'compare-table';

const thead = document.createElement('thead');
const trHead = document.createElement('tr');
const thFeat = document.createElement('th');
thFeat.textContent = 'Характеристика';
trHead.appendChild(thFeat);
for (let p = 0; p < productsList.length; p++) {
  const th = document.createElement('th');
  th.textContent = productsList[p].name;
  trHead.appendChild(th);
}
thead.appendChild(trHead);
table.appendChild(thead);

const tbody = document.createElement('tbody');
for (let f = 0; f < featuresList.length; f++) {
  const feat = featuresList[f];
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  tdName.className = 'feat-name';
  tdName.textContent = feat;
  tr.appendChild(tdName);

  for (let p = 0; p < productsList.length; p++) {
    const tdVal = document.createElement('td');
    const has = productsList[p].features && productsList[p].features[feat];
    tdVal.textContent = has ? '✓' : '—';
    tdVal.className = has ? 'feat-yes' : 'feat-no';
    tr.appendChild(tdVal);
  }
  tbody.appendChild(tr);
}
table.appendChild(tbody);
return table;
    }
    it("test 1", () => {
      expect((() => {
          const ct = renderProductComparisonGrid(['Wi-Fi', 'Bluetooth'], [{ name: 'A', features: { 'Wi-Fi': true } }, { name: 'B', features: {} }]);
          return [ct.querySelectorAll('thead th').length, ct.querySelectorAll('tbody tr').length, ct.querySelectorAll('.feat-yes').length];
        })()).toEqual([3,2,1]);
    });
  });

  describe("9.11 renderWordSearchGrid", () => {
    function renderWordSearchGrid(lettersMatrix) {
      if (!Array.isArray(lettersMatrix) || lettersMatrix.length === 0) return null;
const grid = document.createElement('div');
grid.className = 'word-grid';
for (let r = 0; r < lettersMatrix.length; r++) {
  const row = lettersMatrix[r] || [];
  for (let c = 0; c < row.length; c++) {
    const cell = document.createElement('span');
    cell.className = 'word-cell';
    cell.setAttribute('data-row', String(r));
    cell.setAttribute('data-col', String(c));
    cell.textContent = String(row[c]);
    grid.appendChild(cell);
  }
}
return grid;
    }
    it("test 1", () => {
      expect((() => {
          const wg = renderWordSearchGrid([['C', 'A', 'T'], ['D', 'O', 'G']]);
          return [wg.children.length, wg.children[0].textContent, wg.children[0].getAttribute('data-row')];
        })()).toEqual([6,"C","0"]);
    });
  });

  describe("9.12 renderBarChartGrouped", () => {
    function renderBarChartGrouped(categories, seriesList) {
      if (!Array.isArray(categories) || !Array.isArray(seriesList) || categories.length === 0) return null;
const chart = document.createElement('div');
chart.className = 'grouped-chart';
for (let c = 0; c < categories.length; c++) {
  const group = document.createElement('div');
  group.className = 'chart-group';

  const barsBox = document.createElement('div');
  barsBox.className = 'chart-bars-box';

  for (let s = 0; s < seriesList.length; s++) {
    const series = seriesList[s];
    const val = (series.data && series.data[c] !== undefined) ? series.data[c] : 0;
    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    bar.style.height = `${val}%`;
    bar.style.backgroundColor = series.color || '#6366f1';
    bar.setAttribute('title', `${series.name}: ${val}`);
    barsBox.appendChild(bar);
  }
  group.appendChild(barsBox);

  const label = document.createElement('span');
  label.className = 'group-label';
  label.textContent = categories[c];
  group.appendChild(label);

  chart.appendChild(group);
}
return chart;
    }
    it("test 1", () => {
      expect((() => {
          const ch = renderBarChartGrouped(['Січ', 'Лют'], [{ name: 'План', color: '#ff0000', data: [80, 50] }]);
          return [ch.children.length, ch.querySelectorAll('.chart-bar').length, ch.querySelectorAll('.chart-bar')[0].style.height];
        })()).toEqual([2,2,"80%"]);
    });
  });

});

describe("SOLUTIONS: Модуль 10: Маніпуляція DOM, стилізація та очищення через цикли", () => {
  describe("10.1 applyZebraStriping", () => {
    function applyZebraStriping(tableElement, evenBg = '#ffffff', oddBg = '#f8fafc') {
      if (!tableElement) return 0;
const rows = tableElement.querySelectorAll('tbody tr');
for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  if (i % 2 === 0) {
    row.style.backgroundColor = evenBg;
    row.classList.remove('table-row--striped');
  } else {
    row.style.backgroundColor = oddBg;
    row.classList.add('table-row--striped');
  }
}
return rows.length;
    }
    it("test 1", () => {
      expect((() => {
          const tbl = document.createElement('table');
          const tbody = document.createElement('tbody');
          for (let i = 0; i < 3; i++) tbody.appendChild(document.createElement('tr'));
          tbl.appendChild(tbody);
          const count = applyZebraStriping(tbl, '#ffffff', '#f0f0f0');
          const rows = tbl.querySelectorAll('tbody tr');
          const isEvenMatch = rows[0].style.backgroundColor === '#ffffff' || rows[0].style.backgroundColor === 'rgb(255, 255, 255)';
          const isOddMatch = rows[1].style.backgroundColor === '#f0f0f0' || rows[1].style.backgroundColor === 'rgb(240, 240, 240)';
          return [count, isEvenMatch, isOddMatch, rows[1].classList.contains('table-row--striped')];
        })()).toEqual([3,true,true,true]);
    });
  });

  describe("10.2 clearContainerFast", () => {
    function clearContainerFast(containerElement) {
      if (!containerElement) return 0;
let count = 0;
while (containerElement.firstChild) {
  containerElement.removeChild(containerElement.firstChild);
  count++;
}
return count;
    }
    it("test 1", () => {
      expect((() => {
          const div = document.createElement('div');
          div.appendChild(document.createElement('p'));
          div.appendChild(document.createElement('span'));
          const deleted = clearContainerFast(div);
          return [deleted, div.childNodes.length];
        })()).toEqual([2,0]);
    });
    it("test 2", () => {
      expect((() => {
          const div = document.createElement('div');
          return clearContainerFast(div);
        })()).toEqual(0);
    });
  });

  describe("10.3 buildNestedListTree", () => {
    function buildNestedListTree(treeData) {
      function renderNode(node) {
  const li = document.createElement('li');
  li.className = 'tree-item';
  li.textContent = node.label || '';
  if (Array.isArray(node.children) && node.children.length > 0) {
    const subUl = document.createElement('ul');
    subUl.className = 'tree-sublist';
    for (let i = 0; i < node.children.length; i++) {
      subUl.appendChild(renderNode(node.children[i]));
    }
    li.appendChild(subUl);
  }
  return li;
}
const ul = document.createElement('ul');
ul.className = 'tree-root';
const items = Array.isArray(treeData) ? treeData : (treeData ? [treeData] : []);
for (let i = 0; i < items.length; i++) {
  ul.appendChild(renderNode(items[i]));
}
return ul;
    }
    it("test 1", () => {
      expect((() => {
          const data = {
            label: 'Корінь',
            children: [{ label: 'Дочірній 1' }, { label: 'Дочірній 2' }]
          };
          const tree = buildNestedListTree(data);
          const items = tree.querySelectorAll('.tree-item');
          return [
            tree.tagName,
            items.length,
            items[0].childNodes[0].text || items[0].textContent
          ];
        })()).toEqual(["UL",3,"Корінь"]);
    });
  });

  describe("10.4 renderStepWizard", () => {
    function renderStepWizard(steps, currentStepIndex) {
      const wizard = document.createElement('div');
wizard.className = 'wizard-container';
if (!Array.isArray(steps)) return wizard;
for (let i = 0; i < steps.length; i++) {
  const step = document.createElement('div');
  step.className = 'wizard-step';
  step.setAttribute('data-step', String(i + 1));
  step.textContent = steps[i];
  if (i < currentStepIndex) {
    step.classList.add('wizard-step--done');
    step.style.borderColor = 'rgb(16, 185, 129)';
  } else if (i === currentStepIndex) {
    step.classList.add('wizard-step--active');
    step.style.borderColor = 'rgb(99, 102, 241)';
  } else {
    step.classList.add('wizard-step--pending');
    step.style.borderColor = 'rgb(203, 213, 225)';
  }
  wizard.appendChild(step);
}
return wizard;
    }
    it("test 1", () => {
      expect((() => {
          const w = renderStepWizard(['Крок 1', 'Крок 2', 'Крок 3'], 1);
          const steps = w.querySelectorAll('.wizard-step');
          return [
            steps[0].classList.contains('wizard-step--done'),
            steps[1].classList.contains('wizard-step--active'),
            steps[2].classList.contains('wizard-step--pending')
          ];
        })()).toEqual([true,true,true]);
    });
  });

  describe("10.5 highlightKeywordsInElements", () => {
    function highlightKeywordsInElements(elementsList, keywords) {
      if (!elementsList || !keywords || keywords.length === 0) return 0;
let totalMatches = 0;
for (let i = 0; i < elementsList.length; i++) {
  const el = elementsList[i];
  let html = el.textContent || '';
  for (let k = 0; k < keywords.length; k++) {
    const word = keywords[k];
    if (!word) continue;
    const parts = html.split(word);
    if (parts.length > 1) {
      totalMatches += (parts.length - 1);
      html = parts.join(`<mark class="kw-highlight">${word}</mark>`);
    }
  }
  el.innerHTML = html;
}
return totalMatches;
    }
    it("test 1", () => {
      expect((() => {
          const p1 = document.createElement('p'); p1.textContent = 'JavaScript цикли while та for';
          const p2 = document.createElement('p'); p2.textContent = 'Тут немає збігів';
          const count = highlightKeywordsInElements([p1, p2], ['while', 'for']);
          return [count, p1.innerHTML.includes('<mark class="kw-highlight">while</mark>')];
        })()).toEqual([2,true]);
    });
  });

  describe("10.6 toggleElementsVisibility", () => {
    function toggleElementsVisibility(elementsList, predicateFn) {
      if (!elementsList || typeof predicateFn !== 'function') return 0;
let visibleCount = 0;
for (let i = 0; i < elementsList.length; i++) {
  const el = elementsList[i];
  const show = Boolean(predicateFn(el));
  if (show) {
    el.style.display = '';
    el.removeAttribute('hidden');
    visibleCount++;
  } else {
    el.style.display = 'none';
    el.setAttribute('hidden', 'true');
  }
}
return visibleCount;
    }
    it("test 1", () => {
      expect((() => {
          const c1 = document.createElement('div'); c1.dataset.status = 'active';
          const c2 = document.createElement('div'); c2.dataset.status = 'inactive';
          const visible = toggleElementsVisibility([c1, c2], el => el.dataset.status === 'active');
          return [visible, c1.style.display, c2.style.display, c2.hasAttribute('hidden')];
        })()).toEqual([1,"","none",true]);
    });
  });

  describe("10.7 reorderListByAttribute", () => {
    function reorderListByAttribute(parentListElement, attrName) {
      if (!parentListElement) return null;
const items = [];
for (let i = 0; i < parentListElement.children.length; i++) {
  items.push(parentListElement.children[i]);
}
items.sort((a, b) => {
  const valA = a.getAttribute(attrName) || '';
  const valB = b.getAttribute(attrName) || '';
  const numA = Number(valA);
  const numB = Number(valB);
  if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
  return valA.localeCompare(valB);
});
for (let i = 0; i < items.length; i++) {
  parentListElement.appendChild(items[i]);
}
return parentListElement;
    }
    it("test 1", () => {
      expect((() => {
          const ul = document.createElement('ul');
          const li1 = document.createElement('li'); li1.setAttribute('data-order', '3');
          const li2 = document.createElement('li'); li2.setAttribute('data-order', '1');
          const li3 = document.createElement('li'); li3.setAttribute('data-order', '2');
          ul.appendChild(li1); ul.appendChild(li2); ul.appendChild(li3);
          reorderListByAttribute(ul, 'data-order');
          return Array.from(ul.children).map(c => c.getAttribute('data-order'));
        })()).toEqual(["1","2","3"]);
    });
  });

  describe("10.8 paginateChildren", () => {
    function paginateChildren(containerElement, pageSize, activePage) {
      if (!containerElement || pageSize <= 0 || activePage <= 0) return 0;
const children = containerElement.children;
let visibleCount = 0;
const startIdx = (activePage - 1) * pageSize;
const endIdx = startIdx + pageSize;
for (let i = 0; i < children.length; i++) {
  const child = children[i];
  if (i >= startIdx && i < endIdx) {
    child.style.display = '';
    visibleCount++;
  } else {
    child.style.display = 'none';
  }
}
return visibleCount;
    }
    it("test 1", () => {
      expect((() => {
          const div = document.createElement('div');
          for (let i = 0; i < 5; i++) div.appendChild(document.createElement('span'));
          const page1Count = paginateChildren(div, 2, 1);
          const visiblePage1 = Array.from(div.children).filter(c => c.style.display !== 'none').length;
          const page3Count = paginateChildren(div, 2, 3);
          return [page1Count, visiblePage1, page3Count];
        })()).toEqual([2,2,1]);
    });
  });

  describe("10.9 batchUpdateStyles", () => {
    function batchUpdateStyles(elementsList, stylesList) {
      if (!elementsList || !stylesList) return elementsList;
if (Array.isArray(stylesList)) {
  for (let i = 0; i < elementsList.length; i++) {
    const el = elementsList[i];
    for (let j = 0; j < stylesList.length; j++) {
      const [prop, val] = stylesList[j];
      el.style[prop] = val;
    }
  }
} else if (typeof stylesList === 'object') {
  for (const el of elementsList) {
    for (const k in stylesList) {
      el.style[k] = stylesList[k];
    }
  }
}
return elementsList;
    }
    it("test 1", () => {
      expect((() => {
          const d1 = document.createElement('div');
          const d2 = document.createElement('div');
          batchUpdateStyles([d1, d2], [['color', '#ffffff'], ['opacity', '0.8']]);
          const isColorSet = d1.style.color === '#ffffff' || d1.style.color === 'rgb(255, 255, 255)';
          return [isColorSet, d2.style.opacity];
        })()).toEqual([true,"0.8"]);
    });
  });

  describe("10.10 extractTableData", () => {
    function extractTableData(tableElement) {
      if (!tableElement) return [];
const thList = tableElement.querySelectorAll('thead th');
const headers = [];
for (let i = 0; i < thList.length; i++) {
  headers.push(thList[i].textContent.trim());
}
const rows = tableElement.querySelectorAll('tbody tr');
const data = [];
for (let r = 0; r < rows.length; r++) {
  const cells = rows[r].querySelectorAll('td');
  const rowObj = {};
  for (let c = 0; c < cells.length; c++) {
    const key = headers[c] || `col_${c}`;
    rowObj[key] = cells[c].textContent.trim();
  }
  data.push(rowObj);
}
return data;
    }
    it("test 1", () => {
      expect((() => {
          const tbl = document.createElement('table');
          const thead = document.createElement('thead');
          const trH = document.createElement('tr');
          const th1 = document.createElement('th'); th1.textContent = 'name';
          const th2 = document.createElement('th'); th2.textContent = 'score';
          trH.appendChild(th1); trH.appendChild(th2);
          thead.appendChild(trH);
          tbl.appendChild(thead);
          const tbody = document.createElement('tbody');
          const trD = document.createElement('tr');
          const td1 = document.createElement('td'); td1.textContent = 'Anna';
          const td2 = document.createElement('td'); td2.textContent = '100';
          trD.appendChild(td1); trD.appendChild(td2);
          tbody.appendChild(trD);
          tbl.appendChild(tbody);
          return extractTableData(tbl);
        })()).toEqual([{"name":"Anna","score":"100"}]);
    });
  });

  describe("10.11 wrapConsecutiveElements", () => {
    function wrapConsecutiveElements(parentElement, targetTagName, wrapperClass = 'group-wrap') {
      if (!parentElement) return null;
const target = targetTagName.toUpperCase();
let current = parentElement.firstElementChild;
while (current) {
  if (current.tagName === target) {
    const wrapper = document.createElement('div');
    wrapper.className = wrapperClass;
    parentElement.insertBefore(wrapper, current);
    while (current && current.tagName === target) {
      const next = current.nextElementSibling;
      wrapper.appendChild(current);
      current = next;
    }
  } else {
    current = current.nextElementSibling;
  }
}
return parentElement;
    }
    it("test 1", () => {
      expect((() => {
          const parent = document.createElement('div');
          const p1 = document.createElement('p'); p1.textContent = '1';
          const p2 = document.createElement('p'); p2.textContent = '2';
          const span = document.createElement('span'); span.textContent = 'x';
          parent.appendChild(p1); parent.appendChild(p2); parent.appendChild(span);
          wrapConsecutiveElements(parent, 'p', 'group');
          return [parent.children.length, parent.children[0].className, parent.children[0].children.length];
        })()).toEqual([2,"group",2]);
    });
  });

  describe("10.12 animateElementsStagger", () => {
    function animateElementsStagger(elementsList, stepDelayMs = 100) {
      if (!elementsList || elementsList.length === 0) return 0;
let maxDelay = 0;
for (let i = 0; i < elementsList.length; i++) {
  const el = elementsList[i];
  const delay = i * stepDelayMs;
  el.style.animationDelay = `${delay}ms`;
  el.classList.add('animate-stagger');
  maxDelay = delay;
}
return maxDelay;
    }
    it("test 1", () => {
      expect((() => {
          const el1 = document.createElement('div');
          const el2 = document.createElement('div');
          const el3 = document.createElement('div');
          const max = animateElementsStagger([el1, el2, el3], 150);
          return [max, el1.style.animationDelay, el2.style.animationDelay, el3.style.animationDelay, el1.classList.contains('animate-stagger')];
        })()).toEqual([300,"0ms","150ms","300ms",true]);
    });
  });

});

