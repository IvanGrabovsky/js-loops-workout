// Каталог завдань та метаданих курсу "Цикли та Робота з відлагоджувачем"
export const MODULES = [
  {
    "idx": 1,
    "id": "01-while-basics",
    "title": "Модуль 1: Цикл while та поняття ітерації",
    "shortTitle": "1. Цикл while",
    "filename": "01-while-basics.js",
    "testFilename": "01-while-basics.test.js",
    "desc": "Що таке цикл, необхідність повторень, синтаксис while, поняття ітерації та кроку лічильника."
  },
  {
    "idx": 2,
    "id": "02-do-while",
    "title": "Модуль 2: Цикл do...while (гарантоване перше виконання)",
    "shortTitle": "2. Цикл do...while",
    "filename": "02-do-while.js",
    "testFilename": "02-do-while.test.js",
    "desc": "Особливості циклу з післяумовою: гарантоване виконання тіла щонайменше 1 раз, зчитування введення, повторні запити."
  },
  {
    "idx": 3,
    "id": "03-for-loops",
    "title": "Модуль 3: Параметричний цикл for",
    "shortTitle": "3. Цикл for",
    "filename": "03-for-loops.js",
    "testFilename": "03-for-loops.test.js",
    "desc": "Секції ініціалізації, умови та кроку; ітерація по діапазонах, індексах рядків та масивів."
  },
  {
    "idx": 4,
    "id": "04-break-continue",
    "title": "Модуль 4: Оператори break, continue та захист від вічних циклів",
    "shortTitle": "4. break & continue",
    "filename": "04-break-continue.js",
    "testFilename": "04-break-continue.test.js",
    "desc": "Дострокове переривання break, пропуск ітерації continue, небезпека нескінченних циклів і лічильники-сторожі."
  },
  {
    "idx": 5,
    "id": "05-flowcharts",
    "title": "Модуль 5: Позначення циклів у блок-схемах",
    "shortTitle": "5. Блок-схеми",
    "filename": "05-flowcharts.js",
    "testFilename": "05-flowcharts.test.js",
    "desc": "Блок циклу (шестикутник підготовки, ромб умови, прямокутник дії, стрілка зворотного звʼязку) та алгоритми."
  },
  {
    "idx": 6,
    "id": "06-nested-loops",
    "title": "Модуль 6: Вкладені цикли та матриці",
    "shortTitle": "6. Вкладені цикли",
    "filename": "06-nested-loops.js",
    "testFilename": "06-nested-loops.test.js",
    "desc": "Двовимірні матриці, сітки, таблиці множення, комбінації, сортування бульбашкою та піраміди."
  },
  {
    "idx": 7,
    "id": "07-debugger-hunting",
    "title": "Модуль 7: Робота з відлагоджувачем (Debugger & DevTools)",
    "shortTitle": "7. Debugger",
    "filename": "07-debugger-hunting.js",
    "testFilename": "07-debugger-hunting.test.js",
    "desc": "Що таке відлагоджувач, debugger;, точки зупинки (breakpoints), покрокове виконання, Scope, Watch і виправлення багів."
  }
];

export const ALL_TASKS = [
  {
    "moduleIdx": 1,
    "id": "1.1",
    "name": "countUp",
    "title": "Лічильник від 1 до N",
    "level": "Початковий рівень",
    "goal": "Повернути масив чисел від 1 до N включно через цикл while.",
    "reqs": [
      "Якщо n <= 0, повернути порожній масив [].",
      "Використати цикл while."
    ],
    "hint": "Ініціалізуйте i = 1, масив res = [], і в циклі while (i <= n) додавайте i та збільшуйте i++.",
    "starterParams": "n",
    "starterBody": "return [];",
    "solutionBody": "const res = []; let i = 1; while (i <= n) { res.push(i); i++; } return res;",
    "tests": [
      {
        "expr": "countUp(5)",
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "expr": "countUp(1)",
        "expected": [
          1
        ]
      },
      {
        "expr": "countUp(0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.2",
    "name": "countDown",
    "title": "Зворотний відлік від N до 1",
    "level": "Початковий рівень",
    "goal": "Повернути масив чисел від N до 1 через цикл while.",
    "reqs": [
      "Якщо n <= 0, повернути [].",
      "Зменшувати лічильник на 1 на кожній ітерації."
    ],
    "hint": "while (n >= 1) { res.push(n); n--; }",
    "starterParams": "n",
    "starterBody": "return [];",
    "solutionBody": "const res = []; while (n >= 1) { res.push(n); n--; } return res;",
    "tests": [
      {
        "expr": "countDown(4)",
        "expected": [
          4,
          3,
          2,
          1
        ]
      },
      {
        "expr": "countDown(0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.3",
    "name": "sumUpTo",
    "title": "Сума чисел від 1 до N",
    "level": "Початковий рівень",
    "goal": "Обчислити суму 1 + 2 + ... + N через цикл while.",
    "reqs": [
      "Якщо n <= 0, повернути 0.",
      "Накопичувати суму у змінній-акумуляторі."
    ],
    "hint": "let sum = 0; let i = 1; while (i <= n) { sum += i; i++; } return sum;",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; let i = 1; while (i <= n) { sum += i; i++; } return sum;",
    "tests": [
      {
        "expr": "sumUpTo(5)",
        "expected": 15
      },
      {
        "expr": "sumUpTo(10)",
        "expected": 55
      },
      {
        "expr": "sumUpTo(0)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.4",
    "name": "factorialWhile",
    "title": "Факторіал числа через while",
    "level": "Базовий рівень",
    "goal": "Обчислити факторіал числа n! = 1 * 2 * ... * n через while.",
    "reqs": [
      "0! = 1 та 1! = 1.",
      "Якщо n < 0, повернути null."
    ],
    "hint": "Для n=0 повернути 1. Далі let result = 1; let i = 1; while (i <= n) ...",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "if (n < 0) return null; let res = 1; let i = 2; while (i <= n) { res *= i; i++; } return res;",
    "tests": [
      {
        "expr": "factorialWhile(5)",
        "expected": 120
      },
      {
        "expr": "factorialWhile(0)",
        "expected": 1
      },
      {
        "expr": "factorialWhile(-2)",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.5",
    "name": "countDigits",
    "title": "Кількість цифр у числі",
    "level": "Базовий рівень",
    "goal": "Порахувати скільки цифр містить ціле число за допомогою ділення на 10 у циклі while.",
    "reqs": [
      "Працювати з додатними та відʼємними числами.",
      "Для числа 0 повернути 1."
    ],
    "hint": "Взяти Math.abs(n). Якщо n === 0 return 1. У циклі n = Math.floor(n / 10); count++;",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "let num = Math.abs(n); if (num === 0) return 1; let count = 0; while (num > 0) { count++; num = Math.floor(num / 10); } return count;",
    "tests": [
      {
        "expr": "countDigits(12345)",
        "expected": 5
      },
      {
        "expr": "countDigits(-987)",
        "expected": 3
      },
      {
        "expr": "countDigits(0)",
        "expected": 1
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.6",
    "name": "sumDigits",
    "title": "Сума цифр числа",
    "level": "Базовий рівень",
    "goal": "Обчислити суму цифр числа через залишок від ділення на 10 та Math.floor.",
    "reqs": [
      "Працювати з Math.abs(n).",
      "Повернути ціле число."
    ],
    "hint": "while (num > 0) { sum += num % 10; num = Math.floor(num / 10); }",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "let num = Math.abs(n); let sum = 0; while (num > 0) { sum += num % 10; num = Math.floor(num / 10); } return sum;",
    "tests": [
      {
        "expr": "sumDigits(123)",
        "expected": 6
      },
      {
        "expr": "sumDigits(505)",
        "expected": 10
      },
      {
        "expr": "sumDigits(-49)",
        "expected": 13
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.7",
    "name": "reverseNumber",
    "title": "Розворот цифр числа",
    "level": "Базовий рівень",
    "goal": "Розвернути цифри числа математично (наприклад, 123 -> 321, -45 -> -54).",
    "reqs": [
      "Зберегти знак числа.",
      "Не використовувати перетворення рядка через split/reverse."
    ],
    "hint": "let rev = 0; while (num > 0) { rev = rev * 10 + (num % 10); num = Math.floor(num / 10); }",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "const sign = n < 0 ? -1 : 1; let num = Math.abs(n); let rev = 0; while (num > 0) { rev = rev * 10 + (num % 10); num = Math.floor(num / 10); } return rev * sign;",
    "tests": [
      {
        "expr": "reverseNumber(1234)",
        "expected": 4321
      },
      {
        "expr": "reverseNumber(-89)",
        "expected": -98
      },
      {
        "expr": "reverseNumber(7)",
        "expected": 7
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.8",
    "name": "isPowerOfTwo",
    "title": "Чи є число степенем двійки",
    "level": "Базовий рівень",
    "goal": "Перевірити через цикл while послідовним діленням на 2, чи є n степенем двійки.",
    "reqs": [
      "Числа <= 0 повертають false.",
      "Якщо на будь-якому кроці число непарне (крім 1) — false."
    ],
    "hint": "if (n <= 0) return false; while (n > 1) { if (n % 2 !== 0) return false; n = n / 2; } return true;",
    "starterParams": "n",
    "starterBody": "return false;",
    "solutionBody": "if (n <= 0) return false; while (n > 1) { if (n % 2 !== 0) return false; n = n / 2; } return true;",
    "tests": [
      {
        "expr": "isPowerOfTwo(16)",
        "expected": true
      },
      {
        "expr": "isPowerOfTwo(18)",
        "expected": false
      },
      {
        "expr": "isPowerOfTwo(1)",
        "expected": true
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.9",
    "name": "gcdWhile",
    "title": "НСД (Алгоритм Евкліда через while)",
    "level": "Середній рівень",
    "goal": "Знайти найбільший спільний дільник двох чисел a і b за класичним алгоритмом Евкліда.",
    "reqs": [
      "Використати цикл while (b !== 0) { let t = b; b = a % b; a = t; }",
      "Повернути додатне число."
    ],
    "hint": "let x = Math.abs(a), y = Math.abs(b); while (y !== 0) { const temp = y; y = x % y; x = temp; } return x;",
    "starterParams": "a, b",
    "starterBody": "return 1;",
    "solutionBody": "let x = Math.abs(a), y = Math.abs(b); while (y !== 0) { const temp = y; y = x % y; x = temp; } return x;",
    "tests": [
      {
        "expr": "gcdWhile(48, 18)",
        "expected": 6
      },
      {
        "expr": "gcdWhile(101, 10)",
        "expected": 1
      },
      {
        "expr": "gcdWhile(20, 0)",
        "expected": 20
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.10",
    "name": "lcmWhile",
    "title": "Найменше спільне кратне (НСК)",
    "level": "Середній рівень",
    "goal": "Обчислити найменше спільне кратне за формулою (a * b) / НСД(a, b).",
    "reqs": [
      "Якщо будь-яке число 0, повернути 0.",
      "Використати цикл пошуку НСД."
    ],
    "hint": "НСК(a, b) = Math.abs(a * b) / НСД(a, b).",
    "starterParams": "a, b",
    "starterBody": "return 0;",
    "solutionBody": "if (a === 0 || b === 0) return 0; let x = Math.abs(a), y = Math.abs(b); const prod = x * y; while (y !== 0) { const t = y; y = x % y; x = t; } return prod / x;",
    "tests": [
      {
        "expr": "lcmWhile(4, 6)",
        "expected": 12
      },
      {
        "expr": "lcmWhile(5, 7)",
        "expected": 35
      },
      {
        "expr": "lcmWhile(0, 8)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.11",
    "name": "collatzSteps",
    "title": "Кроки гіпотези Коллатца (3n + 1)",
    "level": "Середній рівень",
    "goal": "Порахувати скільки кроків потрібно, щоб число n дійшло до 1 за правилами Коллатца: якщо парне n/2, якщо непарне 3n+1.",
    "reqs": [
      "Якщо n <= 0, повернути 0.",
      "Для n = 1 повернути 0 кроків."
    ],
    "hint": "let steps = 0; while (n > 1) { if (n % 2 === 0) n = n / 2; else n = 3 * n + 1; steps++; }",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "if (n <= 1) return 0; let steps = 0; while (n > 1) { if (n % 2 === 0) n = n / 2; else n = 3 * n + 1; steps++; } return steps;",
    "tests": [
      {
        "expr": "collatzSteps(6)",
        "expected": 8
      },
      {
        "expr": "collatzSteps(1)",
        "expected": 0
      },
      {
        "expr": "collatzSteps(19)",
        "expected": 20
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.12",
    "name": "binaryRepresentation",
    "title": "Переведення в двійковий рядок через while",
    "level": "Середній рівень",
    "goal": "Перевести невідʼємне ціле число n у двійковий рядок діленням на 2 у циклі while.",
    "reqs": [
      "Для n = 0 повернути \"0\".",
      "Залишки від ділення додавати на початок рядка."
    ],
    "hint": "if (n === 0) return \"0\"; let res = \"\"; while (n > 0) { res = (n % 2) + res; n = Math.floor(n / 2); } return res;",
    "starterParams": "n",
    "starterBody": "return \"0\";",
    "solutionBody": "if (n === 0) return \"0\"; let res = \"\"; while (n > 0) { res = (n % 2) + res; n = Math.floor(n / 2); } return res;",
    "tests": [
      {
        "expr": "binaryRepresentation(10)",
        "expected": "1010"
      },
      {
        "expr": "binaryRepresentation(7)",
        "expected": "111"
      },
      {
        "expr": "binaryRepresentation(0)",
        "expected": "0"
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.13",
    "name": "countDivisors",
    "title": "Кількість дільників числа",
    "level": "Середній рівень",
    "goal": "Знайти кількість дільників натурального числа n від 1 до n включно.",
    "reqs": [
      "Для n <= 0 повернути 0.",
      "Використати цикл while."
    ],
    "hint": "let count = 0; let i = 1; while (i <= n) { if (n % i === 0) count++; i++; } return count;",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "if (n <= 0) return 0; let count = 0; let i = 1; while (i <= n) { if (n % i === 0) count++; i++; } return count;",
    "tests": [
      {
        "expr": "countDivisors(12)",
        "expected": 6
      },
      {
        "expr": "countDivisors(7)",
        "expected": 2
      },
      {
        "expr": "countDivisors(1)",
        "expected": 1
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.14",
    "name": "isPrimeWhile",
    "title": "Перевірка простоти числа через while",
    "level": "Середній рівень",
    "goal": "Перевірити чи є число n простим (має рівно два дільники: 1 та n).",
    "reqs": [
      "Числа < 2 повертають false.",
      "Перевіряти дільники i від 2 доки i * i <= n."
    ],
    "hint": "if (n < 2) return false; let i = 2; while (i * i <= n) { if (n % i === 0) return false; i++; } return true;",
    "starterParams": "n",
    "starterBody": "return false;",
    "solutionBody": "if (n < 2) return false; let i = 2; while (i * i <= n) { if (n % i === 0) return false; i++; } return true;",
    "tests": [
      {
        "expr": "isPrimeWhile(17)",
        "expected": true
      },
      {
        "expr": "isPrimeWhile(18)",
        "expected": false
      },
      {
        "expr": "isPrimeWhile(1)",
        "expected": false
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.15",
    "name": "findSmallestDivisor",
    "title": "Найменший дільник більший за 1",
    "level": "Базовий рівень",
    "goal": "Знайти найменший дільник цілого числа n, більший за 1.",
    "reqs": [
      "Для n <= 1 повернути null.",
      "Почати перевірку з i = 2 і збільшувати i++ поки n % i !== 0."
    ],
    "hint": "if (n <= 1) return null; let i = 2; while (n % i !== 0) { i++; } return i;",
    "starterParams": "n",
    "starterBody": "return null;",
    "solutionBody": "if (n <= 1) return null; let i = 2; while (n % i !== 0) { i++; } return i;",
    "tests": [
      {
        "expr": "findSmallestDivisor(15)",
        "expected": 3
      },
      {
        "expr": "findSmallestDivisor(49)",
        "expected": 7
      },
      {
        "expr": "findSmallestDivisor(11)",
        "expected": 11
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.16",
    "name": "multiplyByAddition",
    "title": "Множення повторним додаванням",
    "level": "Базовий рівень",
    "goal": "Помножити невідʼємні числа a * b використовуючи цикл while з додаванням замість оператора *.",
    "reqs": [
      "Якщо b = 0, повернути 0.",
      "Додавати a до результату b разів."
    ],
    "hint": "let res = 0; let count = b; while (count > 0) { res += a; count--; } return res;",
    "starterParams": "a, b",
    "starterBody": "return 0;",
    "solutionBody": "let res = 0; let count = b; while (count > 0) { res += a; count--; } return res;",
    "tests": [
      {
        "expr": "multiplyByAddition(6, 4)",
        "expected": 24
      },
      {
        "expr": "multiplyByAddition(5, 0)",
        "expected": 0
      },
      {
        "expr": "multiplyByAddition(0, 10)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.17",
    "name": "integerDivision",
    "title": "Цілочисельне ділення через віднімання",
    "level": "Середній рівень",
    "goal": "Знайти частку a / b для додатних чисел через віднімання у циклі while.",
    "reqs": [
      "Якщо b === 0, повернути null (ділення на 0).",
      "Рахувати скільки разів b віднімається від a доки a >= b."
    ],
    "hint": "if (b === 0) return null; let quotient = 0; while (a >= b) { a -= b; quotient++; } return quotient;",
    "starterParams": "a, b",
    "starterBody": "return 0;",
    "solutionBody": "if (b === 0) return null; let quotient = 0; while (a >= b) { a -= b; quotient++; } return quotient;",
    "tests": [
      {
        "expr": "integerDivision(14, 3)",
        "expected": 4
      },
      {
        "expr": "integerDivision(20, 5)",
        "expected": 4
      },
      {
        "expr": "integerDivision(5, 0)",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.18",
    "name": "moduloWhile",
    "title": "Залишок від ділення через віднімання",
    "level": "Середній рівень",
    "goal": "Обчислити a % b без використання оператора %, віднімаючи b від a.",
    "reqs": [
      "Якщо b === 0, повернути null.",
      "Повернути кінцевий залишок a."
    ],
    "hint": "if (b === 0) return null; while (a >= b) { a -= b; } return a;",
    "starterParams": "a, b",
    "starterBody": "return 0;",
    "solutionBody": "if (b === 0) return null; while (a >= b) { a -= b; } return a;",
    "tests": [
      {
        "expr": "moduloWhile(17, 5)",
        "expected": 2
      },
      {
        "expr": "moduloWhile(20, 4)",
        "expected": 0
      },
      {
        "expr": "moduloWhile(10, 0)",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.19",
    "name": "sumEvenWhile",
    "title": "Сума парних чисел у діапазоні",
    "level": "Базовий рівень",
    "goal": "Обчислити суму парних чисел від start до end включно за допомогою while.",
    "reqs": [
      "Якщо start > end, повернути 0.",
      "Перевіряти i % 2 === 0 або робити i += 2."
    ],
    "hint": "let sum = 0; let i = start; while (i <= end) { if (i % 2 === 0) sum += i; i++; } return sum;",
    "starterParams": "start, end",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; let i = start; while (i <= end) { if (i % 2 === 0) sum += i; i++; } return sum;",
    "tests": [
      {
        "expr": "sumEvenWhile(1, 6)",
        "expected": 12
      },
      {
        "expr": "sumEvenWhile(4, 4)",
        "expected": 4
      },
      {
        "expr": "sumEvenWhile(5, 2)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.20",
    "name": "geometricProgressionCount",
    "title": "Кількість членів геометричної прогресії",
    "level": "Середній рівень",
    "goal": "Порахувати скільки членів геометричної прогресії start * ratio^k не перевищують ліміт limit.",
    "reqs": [
      "Починати з k = 0 (значення start).",
      "Якщо start > limit, повернути 0."
    ],
    "hint": "if (start > limit) return 0; let count = 0; let val = start; while (val <= limit) { count++; val *= ratio; } return count;",
    "starterParams": "start, ratio, limit",
    "starterBody": "return 0;",
    "solutionBody": "if (start > limit) return 0; let count = 0; let val = start; while (val <= limit) { count++; val *= ratio; } return count;",
    "tests": [
      {
        "expr": "geometricProgressionCount(2, 2, 32)",
        "expected": 5
      },
      {
        "expr": "geometricProgressionCount(3, 3, 30)",
        "expected": 3
      },
      {
        "expr": "geometricProgressionCount(50, 2, 40)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.21",
    "name": "savingsAccumulator",
    "title": "Місяці для накопичення депозиту",
    "level": "Просунутий рівень",
    "goal": "Розрахувати скільки повних місяців потрібно, щоб початковий депозит з щомісячним поповненням досяг target.",
    "reqs": [
      "Щомісяця спочатку додається % за ставкою rateMonthly, потім додається monthlyAdd.",
      "Повернути кількість місяців."
    ],
    "hint": "let months = 0; let current = deposit; while (current < target) { months++; current = current * (1 + rateMonthly) + monthlyAdd; } return months;",
    "starterParams": "deposit, monthlyAdd, rateMonthly, target",
    "starterBody": "return 0;",
    "solutionBody": "let months = 0; let current = deposit; while (current < target) { months++; current = current * (1 + rateMonthly) + monthlyAdd; } return months;",
    "tests": [
      {
        "expr": "savingsAccumulator(1000, 200, 0.01, 2000)",
        "expected": 5
      },
      {
        "expr": "savingsAccumulator(5000, 100, 0.02, 5000)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.22",
    "name": "palindromeNumber",
    "title": "Число-паліндром арифметично",
    "level": "Середній рівень",
    "goal": "Перевірити чи читається число однаково зліва направо та справа наліво без перетворення в рядок.",
    "reqs": [
      "Відʼємні числа не є паліндромами.",
      "Розвернути число через % 10 та порівняти з оригіналом."
    ],
    "hint": "if (n < 0) return false; let orig = n; let rev = 0; while (n > 0) { rev = rev * 10 + (n % 10); n = Math.floor(n / 10); } return rev === orig;",
    "starterParams": "n",
    "starterBody": "return false;",
    "solutionBody": "if (n < 0) return false; let orig = n; let rev = 0; let temp = n; while (temp > 0) { rev = rev * 10 + (temp % 10); temp = Math.floor(temp / 10); } return rev === orig;",
    "tests": [
      {
        "expr": "palindromeNumber(121)",
        "expected": true
      },
      {
        "expr": "palindromeNumber(-121)",
        "expected": false
      },
      {
        "expr": "palindromeNumber(12321)",
        "expected": true
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.23",
    "name": "nthFibonacciWhile",
    "title": "N-те число Фібоначчі через while",
    "level": "Середній рівень",
    "goal": "Знайти N-те число послідовності Фібоначчі: 0, 1, 1, 2, 3, 5, 8... через while.",
    "reqs": [
      "F(0) = 0, F(1) = 1.",
      "Використати дві змінні a = 0, b = 1 та циклічний зсув."
    ],
    "hint": "if (n <= 0) return 0; if (n === 1) return 1; let a = 0, b = 1, i = 2; while (i <= n) { const next = a + b; a = b; b = next; i++; } return b;",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "if (n <= 0) return 0; if (n === 1) return 1; let a = 0, b = 1, i = 2; while (i <= n) { const next = a + b; a = b; b = next; i++; } return b;",
    "tests": [
      {
        "expr": "nthFibonacciWhile(6)",
        "expected": 8
      },
      {
        "expr": "nthFibonacciWhile(0)",
        "expected": 0
      },
      {
        "expr": "nthFibonacciWhile(1)",
        "expected": 1
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.24",
    "name": "shrinkToSingleDigit",
    "title": "Цифровий корінь числа",
    "level": "Середній рівень",
    "goal": "Знайти цифровий корінь числа: повторно додавати цифри доки не залишиться рівно 1 цифра.",
    "reqs": [
      "Наприклад, 9875 -> 9+8+7+5 = 29 -> 2+9 = 11 -> 1+1 = 2.",
      "Використати вкладений або послідовний while."
    ],
    "hint": "while (n >= 10) { let s = 0; while (n > 0) { s += n % 10; n = Math.floor(n / 10); } n = s; } return n;",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "let num = Math.abs(n); while (num >= 10) { let s = 0; while (num > 0) { s += num % 10; num = Math.floor(num / 10); } num = s; } return num;",
    "tests": [
      {
        "expr": "shrinkToSingleDigit(9875)",
        "expected": 2
      },
      {
        "expr": "shrinkToSingleDigit(38)",
        "expected": 2
      },
      {
        "expr": "shrinkToSingleDigit(5)",
        "expected": 5
      }
    ]
  },
  {
    "moduleIdx": 1,
    "id": "1.25",
    "name": "waterTankFill",
    "title": "Симуляція наповнення резервуара водою",
    "level": "Бос-рівень",
    "goal": "Обчислити за скільки годин резервуар ємністю capacity наповниться, якщо щогодини прибуває inFlow, але витікає outFlow.",
    "reqs": [
      "Якщо outFlow >= inFlow та capacity > 0, повернути null (ніколи не наповниться).",
      "Повернути цілу кількість годин."
    ],
    "hint": "if (capacity <= 0) return 0; if (outFlow >= inFlow) return null; let hours = 0; let current = 0; while (current < capacity) { hours++; current += (inFlow - outFlow); } return hours;",
    "starterParams": "capacity, inFlow, outFlow",
    "starterBody": "return 0;",
    "solutionBody": "if (capacity <= 0) return 0; if (outFlow >= inFlow) return null; let hours = 0; let current = 0; while (current < capacity) { hours++; current += (inFlow - outFlow); } return hours;",
    "tests": [
      {
        "expr": "waterTankFill(100, 30, 10)",
        "expected": 5
      },
      {
        "expr": "waterTankFill(50, 10, 10)",
        "expected": null
      },
      {
        "expr": "waterTankFill(0, 5, 2)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.1",
    "name": "doWhileAtLeastOnce",
    "title": "Гарантоване виконання мінімум один раз",
    "level": "Початковий рівень",
    "goal": "Продемонструвати виконання тіла do...while навіть при спочатку хибній умові.",
    "reqs": [
      "Виконати один крок: додати 1 до value.",
      "Умова циклу: while (value < 0). Повернути фінальне значення."
    ],
    "hint": "do { value += 1; } while (value < 0); return value;",
    "starterParams": "value",
    "starterBody": "return value;",
    "solutionBody": "do { value += 1; } while (value < 0); return value;",
    "tests": [
      {
        "expr": "doWhileAtLeastOnce(10)",
        "expected": 11
      },
      {
        "expr": "doWhileAtLeastOnce(0)",
        "expected": 1
      },
      {
        "expr": "doWhileAtLeastOnce(-3)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.2",
    "name": "collectInputUntilZero",
    "title": "Збір елементів масиву до нуля",
    "level": "Базовий рівень",
    "goal": "Зчитувати числа з масиву inputs через do...while доки не зустрінеться 0 (або не закінчиться масив).",
    "reqs": [
      "Завжди зчитати щонайменше перший елемент.",
      "Повернути масив зчитаних чисел до першого 0."
    ],
    "hint": "const res = []; let i = 0; do { if (i >= inputs.length || inputs[i] === 0) break; res.push(inputs[i]); i++; } while (i < inputs.length); return res;",
    "starterParams": "inputs",
    "starterBody": "return [];",
    "solutionBody": "const res = []; let i = 0; if (!inputs || inputs.length === 0) return []; do { if (inputs[i] === 0) break; res.push(inputs[i]); i++; } while (i < inputs.length); return res;",
    "tests": [
      {
        "expr": "collectInputUntilZero([5, 8, 2, 0, 9])",
        "expected": [
          5,
          8,
          2
        ]
      },
      {
        "expr": "collectInputUntilZero([0, 10, 20])",
        "expected": []
      },
      {
        "expr": "collectInputUntilZero([1, 2, 3])",
        "expected": [
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.3",
    "name": "diceRollSimulation",
    "title": "Симуляція кидків кубика до 6",
    "level": "Базовий рівень",
    "goal": "Зчитувати кидки з масиву rolls через do...while доки значення не дорівнює 6.",
    "reqs": [
      "Повернути кількість зроблених кидків (мінімум 1).",
      "Якщо 6 не випало і масив закінчився, повернути довжину масиву."
    ],
    "hint": "let i = 0; do { const val = rolls[i]; i++; if (val === 6) break; } while (i < rolls.length); return i;",
    "starterParams": "rolls",
    "starterBody": "return 0;",
    "solutionBody": "if (!rolls || rolls.length === 0) return 0; let i = 0; do { const val = rolls[i]; i++; if (val === 6) break; } while (i < rolls.length); return i;",
    "tests": [
      {
        "expr": "diceRollSimulation([2, 4, 1, 6, 3])",
        "expected": 4
      },
      {
        "expr": "diceRollSimulation([6, 1, 2])",
        "expected": 1
      },
      {
        "expr": "diceRollSimulation([3, 5])",
        "expected": 2
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.4",
    "name": "pinCodeAttempts",
    "title": "Перевірка PIN-коду з лімітом 3 спроб",
    "level": "Середній рівень",
    "goal": "Імітувати введення PIN-коду з масиву спроб attempts до успіху або вичерпання 3 спроб.",
    "reqs": [
      "Повернути обʼєкт { unlocked: boolean, attemptsUsed: number }.",
      "Зробити мінімум одну спробу."
    ],
    "hint": "let i = 0, unlocked = false; do { if (attempts[i] === correctPin) { unlocked = true; i++; break; } i++; } while (i < attempts.length && i < 3); return { unlocked, attemptsUsed: i };",
    "starterParams": "attempts, correctPin",
    "starterBody": "return { unlocked: false, attemptsUsed: 0 };",
    "solutionBody": "let i = 0, unlocked = false; if (!attempts || attempts.length === 0) return { unlocked: false, attemptsUsed: 0 }; do { if (attempts[i] === correctPin) { unlocked = true; i++; break; } i++; } while (i < attempts.length && i < 3); return { unlocked, attemptsUsed: i };",
    "tests": [
      {
        "expr": "pinCodeAttempts([\"1111\", \"2222\", \"1234\"], \"1234\")",
        "expected": {
          "unlocked": true,
          "attemptsUsed": 3
        }
      },
      {
        "expr": "pinCodeAttempts([\"1234\", \"0000\"], \"1234\")",
        "expected": {
          "unlocked": true,
          "attemptsUsed": 1
        }
      },
      {
        "expr": "pinCodeAttempts([\"9999\", \"8888\", \"7777\", \"1234\"], \"1234\")",
        "expected": {
          "unlocked": false,
          "attemptsUsed": 3
        }
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.5",
    "name": "exponentialGrowthThreshold",
    "title": "Експоненційне зростання популяції",
    "level": "Базовий рівень",
    "goal": "Розрахувати кількість кроків, за які популяція перевищить threshold, помножуючись на multiplier (мінімум 1 крок).",
    "reqs": [
      "Кожного кроку pop *= multiplier.",
      "Повернути кількість кроків."
    ],
    "hint": "let steps = 0; do { steps++; pop *= multiplier; } while (pop <= threshold); return steps;",
    "starterParams": "pop, multiplier, threshold",
    "starterBody": "return 0;",
    "solutionBody": "let steps = 0; do { steps++; pop *= multiplier; } while (pop <= threshold); return steps;",
    "tests": [
      {
        "expr": "exponentialGrowthThreshold(10, 2, 50)",
        "expected": 3
      },
      {
        "expr": "exponentialGrowthThreshold(100, 2, 50)",
        "expected": 1
      },
      {
        "expr": "exponentialGrowthThreshold(5, 3, 40)",
        "expected": 2
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.6",
    "name": "retryNetworkOperation",
    "title": "Повторні спроби мережевого запиту (Retry)",
    "level": "Середній рівень",
    "goal": "Обробляти масив відповідей сервісу statusResponses до отримання 200 або вичерпання maxRetries.",
    "reqs": [
      "Повернути обʼєкт { success: boolean, retriesDone: number }.",
      "Виконати щонайменше 1 спробу."
    ],
    "hint": "let i = 0, success = false; do { if (statusResponses[i] === 200) { success = true; i++; break; } i++; } while (i < statusResponses.length && i < maxRetries); return { success, retriesDone: i };",
    "starterParams": "statusResponses, maxRetries",
    "starterBody": "return { success: false, retriesDone: 0 };",
    "solutionBody": "let i = 0, success = false; if (!statusResponses || statusResponses.length === 0) return { success: false, retriesDone: 0 }; do { if (statusResponses[i] === 200) { success = true; i++; break; } i++; } while (i < statusResponses.length && i < maxRetries); return { success, retriesDone: i };",
    "tests": [
      {
        "expr": "retryNetworkOperation([500, 502, 200], 3)",
        "expected": {
          "success": true,
          "retriesDone": 3
        }
      },
      {
        "expr": "retryNetworkOperation([200], 3)",
        "expected": {
          "success": true,
          "retriesDone": 1
        }
      },
      {
        "expr": "retryNetworkOperation([503, 503, 503, 200], 3)",
        "expected": {
          "success": false,
          "retriesDone": 3
        }
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.7",
    "name": "batteryDrainSimulation",
    "title": "Симуляція розряду акумулятора",
    "level": "Базовий рівень",
    "goal": "Змоделювати розряд батареї кроками drainStep до 0%. Повернути масив рівнів заряду.",
    "reqs": [
      "Завжди виконати мінімум один крок розряду.",
      "Останнє значення не може бути менше 0."
    ],
    "hint": "const levels = []; do { start = Math.max(0, start - drainStep); levels.push(start); } while (start > 0); return levels;",
    "starterParams": "start, drainStep",
    "starterBody": "return [];",
    "solutionBody": "const levels = []; do { start = Math.max(0, start - drainStep); levels.push(start); } while (start > 0); return levels;",
    "tests": [
      {
        "expr": "batteryDrainSimulation(25, 10)",
        "expected": [
          15,
          5,
          0
        ]
      },
      {
        "expr": "batteryDrainSimulation(5, 10)",
        "expected": [
          0
        ]
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.8",
    "name": "atmMenuNavigation",
    "title": "Обробка дій меню банкомата",
    "level": "Середній рівень",
    "goal": "Обробляти дії з масиву actions до отримання команди \"EXIT\".",
    "reqs": [
      "Повернути кількість виконаних дій до виходу.",
      "Мінімум 1 дія зчитується."
    ],
    "hint": "let i = 0; do { if (actions[i] === \"EXIT\") break; i++; } while (i < actions.length); return i;",
    "starterParams": "actions",
    "starterBody": "return 0;",
    "solutionBody": "if (!actions || actions.length === 0) return 0; let i = 0; do { if (actions[i] === \"EXIT\") break; i++; } while (i < actions.length); return i;",
    "tests": [
      {
        "expr": "atmMenuNavigation([\"BALANCE\", \"WITHDRAW\", \"EXIT\", \"PRINT\"])",
        "expected": 2
      },
      {
        "expr": "atmMenuNavigation([\"EXIT\"])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.9",
    "name": "stringAccumulateLength",
    "title": "Нарощування рядка суфіксом до ліміту довжини",
    "level": "Базовий рівень",
    "goal": "Додавати suffix до рядка str через do...while доки str.length < minLength.",
    "reqs": [
      "Суфікс додається щонайменше 1 раз.",
      "Повернути фінальний рядок."
    ],
    "hint": "do { str += suffix; } while (str.length < minLength); return str;",
    "starterParams": "str, suffix, minLength",
    "starterBody": "return str;",
    "solutionBody": "do { str += suffix; } while (str.length < minLength); return str;",
    "tests": [
      {
        "expr": "stringAccumulateLength(\"hi\", \"!\", 5)",
        "expected": "hi!!!"
      },
      {
        "expr": "stringAccumulateLength(\"longtext\", \"*\", 5)",
        "expected": "longtext*"
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.10",
    "name": "stepByStepApproximation",
    "title": "Покрокове наближення до цільового значення",
    "level": "Середній рівень",
    "goal": "Рухати поточне значення current до target з кроком step. Зупинитись коли залишок <= step.",
    "reqs": [
      "Зробити щонайменше один крок.",
      "Повернути значення current."
    ],
    "hint": "do { if (current < target) current = Math.min(target, current + step); else current = Math.max(target, current - step); } while (Math.abs(current - target) > 0.001); return current;",
    "starterParams": "current, target, step",
    "starterBody": "return current;",
    "solutionBody": "do { if (current < target) current = Math.min(target, current + step); else current = Math.max(target, current - step); } while (Math.abs(current - target) > 0.001); return current;",
    "tests": [
      {
        "expr": "stepByStepApproximation(0, 10, 4)",
        "expected": 10
      },
      {
        "expr": "stepByStepApproximation(15, 5, 5)",
        "expected": 5
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.11",
    "name": "coffeeMachineBrew",
    "title": "Дозування води кавомашиною",
    "level": "Базовий рівень",
    "goal": "Наливати воду порціями portionMl доки не набереться targetMl.",
    "reqs": [
      "Мінімум одна порція наливається.",
      "Повернути обʼєкт { portions: number, totalMl: number }."
    ],
    "hint": "let total = 0, count = 0; do { total += portionMl; count++; } while (total < targetMl); return { portions: count, totalMl: total };",
    "starterParams": "targetMl, portionMl",
    "starterBody": "return { portions: 0, totalMl: 0 };",
    "solutionBody": "let total = 0, count = 0; do { total += portionMl; count++; } while (total < targetMl); return { portions: count, totalMl: total };",
    "tests": [
      {
        "expr": "coffeeMachineBrew(180, 50)",
        "expected": {
          "portions": 4,
          "totalMl": 200
        }
      },
      {
        "expr": "coffeeMachineBrew(40, 50)",
        "expected": {
          "portions": 1,
          "totalMl": 50
        }
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.12",
    "name": "randomWalkSim",
    "title": "Блукання частинки до барʼєру",
    "level": "Середній рівень",
    "goal": "Змінювати позицію pos на величини з масиву deltaSteps доки |pos| < boundary або масив не закінчиться.",
    "reqs": [
      "Мінімум один крок робиться.",
      "Повернути кінцеву позицію pos."
    ],
    "hint": "let pos = 0, i = 0; do { pos += deltaSteps[i]; i++; } while (i < deltaSteps.length && Math.abs(pos) < boundary); return pos;",
    "starterParams": "deltaSteps, boundary",
    "starterBody": "return 0;",
    "solutionBody": "if (!deltaSteps || deltaSteps.length === 0) return 0; let pos = 0, i = 0; do { pos += deltaSteps[i]; i++; } while (i < deltaSteps.length && Math.abs(pos) < boundary); return pos;",
    "tests": [
      {
        "expr": "randomWalkSim([1, 2, -1, 3], 3)",
        "expected": 3
      },
      {
        "expr": "randomWalkSim([-2, -3], 4)",
        "expected": -5
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.13",
    "name": "auctionBidStep",
    "title": "Підвищення ставки на аукціоні",
    "level": "Базовий рівень",
    "goal": "Підвищувати поточну ставку currentBid на step доки вона не стане >= reservePrice.",
    "reqs": [
      "Мінімум 1 підвищення ставки.",
      "Повернути фінальну ставку."
    ],
    "hint": "do { currentBid += step; } while (currentBid < reservePrice); return currentBid;",
    "starterParams": "currentBid, step, reservePrice",
    "starterBody": "return currentBid;",
    "solutionBody": "do { currentBid += step; } while (currentBid < reservePrice); return currentBid;",
    "tests": [
      {
        "expr": "auctionBidStep(100, 25, 170)",
        "expected": 175
      },
      {
        "expr": "auctionBidStep(200, 50, 150)",
        "expected": 250
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.14",
    "name": "paginateDataDoWhile",
    "title": "Пагінація сторінок з API",
    "level": "Середній рівень",
    "goal": "Завантажувати масиви сторінок з pagesArray по одній доки page <= totalPages.",
    "reqs": [
      "Мінімум 1 сторінка зчитується.",
      "Повернути обʼєднаний плоский масив усіх завантажених елементів."
    ],
    "hint": "const result = []; let page = 0; do { if (page < pagesArray.length) result.push(...pagesArray[page]); page++; } while (page < totalPages && page < pagesArray.length); return result;",
    "starterParams": "pagesArray, totalPages",
    "starterBody": "return [];",
    "solutionBody": "const result = []; let page = 0; if (!pagesArray || pagesArray.length === 0) return []; do { if (page < pagesArray.length) result.push(...pagesArray[page]); page++; } while (page < totalPages && page < pagesArray.length); return result;",
    "tests": [
      {
        "expr": "paginateDataDoWhile([[\"a\", \"b\"], [\"c\", \"d\"], [\"e\"]], 2)",
        "expected": [
          "a",
          "b",
          "c",
          "d"
        ]
      },
      {
        "expr": "paginateDataDoWhile([[\"item1\"]], 1)",
        "expected": [
          "item1"
        ]
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.15",
    "name": "coolingSystemCycle",
    "title": "Охолодження двигуна циклами",
    "level": "Базовий рівень",
    "goal": "Охолоджувати двигун з startTemp кроками по coolRate доки температура не стане <= targetTemp.",
    "reqs": [
      "Повернути кількість циклів охолодження (мінімум 1).",
      "Повернути ціле число."
    ],
    "hint": "let cycles = 0; do { startTemp -= coolRate; cycles++; } while (startTemp > targetTemp); return cycles;",
    "starterParams": "startTemp, targetTemp, coolRate",
    "starterBody": "return 0;",
    "solutionBody": "let cycles = 0; do { startTemp -= coolRate; cycles++; } while (startTemp > targetTemp); return cycles;",
    "tests": [
      {
        "expr": "coolingSystemCycle(95, 70, 10)",
        "expected": 3
      },
      {
        "expr": "coolingSystemCycle(68, 70, 5)",
        "expected": 1
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.16",
    "name": "elevatorMove",
    "title": "Рух ліфта поверхами",
    "level": "Базовий рівень",
    "goal": "Змоделювати рух ліфта з currentFloor до targetFloor по 1 поверху. Повернути масив відвіданих поверхів.",
    "reqs": [
      "Якщо поверхи однакові, масив містить [currentFloor].",
      "Інакше містить послідовність поверхів до цільового включно."
    ],
    "hint": "const floors = []; let f = currentFloor; const dir = targetFloor >= currentFloor ? 1 : -1; do { if (currentFloor === targetFloor) { floors.push(f); break; } f += dir; floors.push(f); } while (f !== targetFloor); return floors;",
    "starterParams": "currentFloor, targetFloor",
    "starterBody": "return [];",
    "solutionBody": "const floors = []; let f = currentFloor; const dir = targetFloor >= currentFloor ? 1 : -1; do { if (currentFloor === targetFloor) { floors.push(f); break; } f += dir; floors.push(f); } while (f !== targetFloor); return floors;",
    "tests": [
      {
        "expr": "elevatorMove(1, 4)",
        "expected": [
          2,
          3,
          4
        ]
      },
      {
        "expr": "elevatorMove(5, 3)",
        "expected": [
          4,
          3
        ]
      },
      {
        "expr": "elevatorMove(2, 2)",
        "expected": [
          2
        ]
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.17",
    "name": "gameBossHitPoints",
    "title": "Бій з босом до перемоги",
    "level": "Базовий рівень",
    "goal": "Завдавати босу з bossHp шкоду damagePerHit доки HP не стане <= 0. Повернути кількість ударів.",
    "reqs": [
      "Мінімум 1 удар завдається.",
      "Повернути число ударів."
    ],
    "hint": "let hits = 0; do { bossHp -= damagePerHit; hits++; } while (bossHp > 0); return hits;",
    "starterParams": "bossHp, damagePerHit",
    "starterBody": "return 0;",
    "solutionBody": "let hits = 0; do { bossHp -= damagePerHit; hits++; } while (bossHp > 0); return hits;",
    "tests": [
      {
        "expr": "gameBossHitPoints(100, 35)",
        "expected": 3
      },
      {
        "expr": "gameBossHitPoints(10, 50)",
        "expected": 1
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.18",
    "name": "trainSpeedBraking",
    "title": "Плавне гальмування потяга",
    "level": "Базовий рівень",
    "goal": "Зменшувати швидкість speed на decelRate до 0 км/год. Повернути масив швидкостей після кожного кроку.",
    "reqs": [
      "Останнє число завжди 0.",
      "Мінімум 1 крок гальмування."
    ],
    "hint": "const speeds = []; do { speed = Math.max(0, speed - decelRate); speeds.push(speed); } while (speed > 0); return speeds;",
    "starterParams": "speed, decelRate",
    "starterBody": "return [];",
    "solutionBody": "const speeds = []; do { speed = Math.max(0, speed - decelRate); speeds.push(speed); } while (speed > 0); return speeds;",
    "tests": [
      {
        "expr": "trainSpeedBraking(60, 25)",
        "expected": [
          35,
          10,
          0
        ]
      },
      {
        "expr": "trainSpeedBraking(20, 30)",
        "expected": [
          0
        ]
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.19",
    "name": "creditRepaymentMonths",
    "title": "Погашення кредиту фіксованим платежем",
    "level": "Середній рівень",
    "goal": "Розрахувати кількість місяців для повного погашення суми balance щомісячним внеском monthlyPayment.",
    "reqs": [
      "Мінімум 1 місяць сплачується.",
      "Повернути кількість місяців."
    ],
    "hint": "let m = 0; do { balance -= monthlyPayment; m++; } while (balance > 0); return m;",
    "starterParams": "balance, monthlyPayment",
    "starterBody": "return 0;",
    "solutionBody": "let m = 0; do { balance -= monthlyPayment; m++; } while (balance > 0); return m;",
    "tests": [
      {
        "expr": "creditRepaymentMonths(1000, 300)",
        "expected": 4
      },
      {
        "expr": "creditRepaymentMonths(200, 500)",
        "expected": 1
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.20",
    "name": "downloadBufferChunks",
    "title": "Завантаження файлу чанками",
    "level": "Базовий рівень",
    "goal": "Зменшувати залишок байтів totalBytes на chunkSize до 0. Повернути масив залишків після кожного чанка.",
    "reqs": [
      "Мінімум 1 чанк завантажується.",
      "Останнє значення в масиві 0."
    ],
    "hint": "const res = []; do { totalBytes = Math.max(0, totalBytes - chunkSize); res.push(totalBytes); } while (totalBytes > 0); return res;",
    "starterParams": "totalBytes, chunkSize",
    "starterBody": "return [];",
    "solutionBody": "const res = []; do { totalBytes = Math.max(0, totalBytes - chunkSize); res.push(totalBytes); } while (totalBytes > 0); return res;",
    "tests": [
      {
        "expr": "downloadBufferChunks(150, 60)",
        "expected": [
          90,
          30,
          0
        ]
      },
      {
        "expr": "downloadBufferChunks(40, 50)",
        "expected": [
          0
        ]
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.21",
    "name": "cardDeckDraw",
    "title": "Витягування карт до туза",
    "level": "Базовий рівень",
    "goal": "Витягувати карти з масиву cards доки не випаде \"A\" (Туз). Повернути кількість витягнутих карт.",
    "reqs": [
      "Мінімум 1 карта витягується.",
      "Якщо туза немає, повернути довжину масиву."
    ],
    "hint": "let i = 0; do { const c = cards[i]; i++; if (c === \"A\") break; } while (i < cards.length); return i;",
    "starterParams": "cards",
    "starterBody": "return 0;",
    "solutionBody": "if (!cards || cards.length === 0) return 0; let i = 0; do { const c = cards[i]; i++; if (c === \"A\") break; } while (i < cards.length); return i;",
    "tests": [
      {
        "expr": "cardDeckDraw([\"10\", \"K\", \"A\", \"7\"])",
        "expected": 3
      },
      {
        "expr": "cardDeckDraw([\"A\"])",
        "expected": 1
      },
      {
        "expr": "cardDeckDraw([\"Q\", \"J\"])",
        "expected": 2
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.22",
    "name": "printerQueueProcess",
    "title": "Друк завдань з черги",
    "level": "Базовий рівень",
    "goal": "Друкувати документи з масиву сторінок jobPages доки черга не закінчиться. Повернути загальну суму сторінок.",
    "reqs": [
      "Мінімум перше завдання обробляється.",
      "Якщо масив порожній, повернути 0."
    ],
    "hint": "let total = 0, i = 0; do { total += jobPages[i]; i++; } while (i < jobPages.length); return total;",
    "starterParams": "jobPages",
    "starterBody": "return 0;",
    "solutionBody": "if (!jobPages || jobPages.length === 0) return 0; let total = 0, i = 0; do { total += jobPages[i]; i++; } while (i < jobPages.length); return total;",
    "tests": [
      {
        "expr": "printerQueueProcess([10, 25, 5])",
        "expected": 40
      },
      {
        "expr": "printerQueueProcess([7])",
        "expected": 7
      },
      {
        "expr": "printerQueueProcess([])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.23",
    "name": "countdownDoWhile",
    "title": "Таймер зворотного відліку з фінальним нулем",
    "level": "Базовий рівень",
    "goal": "Згенерувати зворотний відлік від start до 0 у вигляді масиву [start, ..., 0] через do...while.",
    "reqs": [
      "Для будь-якого start <= 0 повернути [0].",
      "Повернути масив цілих чисел."
    ],
    "hint": "const res = []; do { res.push(start); if (start <= 0) break; start--; } while (start >= 0); return res;",
    "starterParams": "start",
    "starterBody": "return [];",
    "solutionBody": "if (start <= 0) return [0]; const res = []; do { res.push(start); start--; } while (start >= 0); return res;",
    "tests": [
      {
        "expr": "countdownDoWhile(3)",
        "expected": [
          3,
          2,
          1,
          0
        ]
      },
      {
        "expr": "countdownDoWhile(0)",
        "expected": [
          0
        ]
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.24",
    "name": "passwordGeneratorLength",
    "title": "Генерація рядка циклічним додаванням символів",
    "level": "Середній рівень",
    "goal": "Формувати рядок послідовним додаванням символів із chars доки довжина не стане >= targetLen.",
    "reqs": [
      "Мінімум 1 символ додається.",
      "Повернути згенерований рядок."
    ],
    "hint": "let res = \"\", i = 0; do { res += chars[i % chars.length]; i++; } while (res.length < targetLen); return res;",
    "starterParams": "chars, targetLen",
    "starterBody": "return \"\";",
    "solutionBody": "if (!chars || chars.length === 0) return \"\"; let res = \"\", i = 0; do { res += chars[i % chars.length]; i++; } while (res.length < targetLen); return res;",
    "tests": [
      {
        "expr": "passwordGeneratorLength(\"abc\", 7)",
        "expected": "abcabca"
      },
      {
        "expr": "passwordGeneratorLength(\"x\", 3)",
        "expected": "xxx"
      }
    ]
  },
  {
    "moduleIdx": 2,
    "id": "2.25",
    "name": "assemblyLineInspector",
    "title": "Інспекція конвеєра до першого дефекту",
    "level": "Бос-рівень",
    "goal": "Перевіряти вироби з items доки не зустрінеться рядок \"DEFECT\" або не закінчиться масив.",
    "reqs": [
      "Повернути обʼєкт { inspectedCount: number, passedAll: boolean }.",
      "Щонайменше один виріб інспектується."
    ],
    "hint": "let i = 0, passed = true; do { if (items[i] === \"DEFECT\") { passed = false; i++; break; } i++; } while (i < items.length); return { inspectedCount: i, passedAll: passed };",
    "starterParams": "items",
    "starterBody": "return { inspectedCount: 0, passedAll: false };",
    "solutionBody": "if (!items || items.length === 0) return { inspectedCount: 0, passedAll: true }; let i = 0, passed = true; do { if (items[i] === \"DEFECT\") { passed = false; i++; break; } i++; } while (i < items.length); return { inspectedCount: i, passedAll: passed };",
    "tests": [
      {
        "expr": "assemblyLineInspector([\"OK\", \"OK\", \"DEFECT\", \"OK\"])",
        "expected": {
          "inspectedCount": 3,
          "passedAll": false
        }
      },
      {
        "expr": "assemblyLineInspector([\"OK\", \"OK\"])",
        "expected": {
          "inspectedCount": 2,
          "passedAll": true
        }
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.1",
    "name": "rangeSum",
    "title": "Сума чисел від start до end",
    "level": "Початковий рівень",
    "goal": "Обчислити суму всіх цілих чисел від start до end включно через класичний for.",
    "reqs": [
      "Якщо start > end, повернути 0.",
      "Використати for (let i = start; i <= end; i++)."
    ],
    "hint": "let sum = 0; for (let i = start; i <= end; i++) sum += i; return sum;",
    "starterParams": "start, end",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; for (let i = start; i <= end; i++) sum += i; return sum;",
    "tests": [
      {
        "expr": "rangeSum(1, 5)",
        "expected": 15
      },
      {
        "expr": "rangeSum(3, 3)",
        "expected": 3
      },
      {
        "expr": "rangeSum(5, 2)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.2",
    "name": "evensInRange",
    "title": "Парні числа в діапазоні",
    "level": "Початковий рівень",
    "goal": "Повернути масив парних чисел від start до end включно.",
    "reqs": [
      "Якщо парних немає, повернути [].",
      "Крок циклу або перевірка i % 2 === 0."
    ],
    "hint": "const res = []; for (let i = start; i <= end; i++) { if (i % 2 === 0) res.push(i); } return res;",
    "starterParams": "start, end",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = start; i <= end; i++) { if (i % 2 === 0) res.push(i); } return res;",
    "tests": [
      {
        "expr": "evensInRange(2, 8)",
        "expected": [
          2,
          4,
          6,
          8
        ]
      },
      {
        "expr": "evensInRange(3, 7)",
        "expected": [
          4,
          6
        ]
      },
      {
        "expr": "evensInRange(5, 5)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.3",
    "name": "oddsInRange",
    "title": "Непарні числа в діапазоні",
    "level": "Початковий рівень",
    "goal": "Повернути масив непарних чисел від start до end включно.",
    "reqs": [
      "Використати цикл for.",
      "Числа можуть бути відʼємними (Math.abs(i) % 2 === 1)."
    ],
    "hint": "const res = []; for (let i = start; i <= end; i++) { if (Math.abs(i) % 2 === 1) res.push(i); } return res;",
    "starterParams": "start, end",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = start; i <= end; i++) { if (Math.abs(i) % 2 === 1) res.push(i); } return res;",
    "tests": [
      {
        "expr": "oddsInRange(1, 7)",
        "expected": [
          1,
          3,
          5,
          7
        ]
      },
      {
        "expr": "oddsInRange(-3, 1)",
        "expected": [
          -3,
          -1,
          1
        ]
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.4",
    "name": "stepCounter",
    "title": "Послідовність з кастомним кроком",
    "level": "Базовий рівень",
    "goal": "Згенерувати масив чисел від start до end з кроком step (i += step).",
    "reqs": [
      "Якщо step <= 0, повернути [].",
      "Включати значення доки i <= end."
    ],
    "hint": "const res = []; if (step <= 0) return []; for (let i = start; i <= end; i += step) res.push(i); return res;",
    "starterParams": "start, end, step",
    "starterBody": "return [];",
    "solutionBody": "const res = []; if (step <= 0) return []; for (let i = start; i <= end; i += step) res.push(i); return res;",
    "tests": [
      {
        "expr": "stepCounter(0, 10, 2)",
        "expected": [
          0,
          2,
          4,
          6,
          8,
          10
        ]
      },
      {
        "expr": "stepCounter(5, 20, 5)",
        "expected": [
          5,
          10,
          15,
          20
        ]
      },
      {
        "expr": "stepCounter(1, 5, 0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.5",
    "name": "multiplicationTable",
    "title": "Таблиця множення на число K",
    "level": "Базовий рівень",
    "goal": "Повернути масив [k*1, k*2, ..., k*count] для заданого k та count.",
    "reqs": [
      "Якщо count <= 0, повернути [].",
      "for (let i = 1; i <= count; i++)."
    ],
    "hint": "const res = []; for (let i = 1; i <= count; i++) res.push(k * i); return res;",
    "starterParams": "k, count",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = 1; i <= count; i++) res.push(k * i); return res;",
    "tests": [
      {
        "expr": "multiplicationTable(7, 4)",
        "expected": [
          7,
          14,
          21,
          28
        ]
      },
      {
        "expr": "multiplicationTable(3, 1)",
        "expected": [
          3
        ]
      },
      {
        "expr": "multiplicationTable(5, 0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.6",
    "name": "sumOfSquares",
    "title": "Сума квадратів від 1 до N",
    "level": "Базовий рівень",
    "goal": "Обчислити 1^2 + 2^2 + ... + N^2 через for.",
    "reqs": [
      "Якщо n <= 0, повернути 0.",
      "Накопичувати i * i."
    ],
    "hint": "let sum = 0; for (let i = 1; i <= n; i++) sum += i * i; return sum;",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; for (let i = 1; i <= n; i++) sum += i * i; return sum;",
    "tests": [
      {
        "expr": "sumOfSquares(3)",
        "expected": 14
      },
      {
        "expr": "sumOfSquares(4)",
        "expected": 30
      },
      {
        "expr": "sumOfSquares(0)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.7",
    "name": "countLetterOccurrences",
    "title": "Підрахунок входжень літери",
    "level": "Базовий рівень",
    "goal": "Порахувати скільки разів символ letter зустрічається в рядку str.",
    "reqs": [
      "Регістрозалежний пошук.",
      "Обхід через for (let i = 0; i < str.length; i++)."
    ],
    "hint": "let c = 0; for (let i = 0; i < str.length; i++) { if (str[i] === letter) c++; } return c;",
    "starterParams": "str, letter",
    "starterBody": "return 0;",
    "solutionBody": "let c = 0; for (let i = 0; i < str.length; i++) { if (str[i] === letter) c++; } return c;",
    "tests": [
      {
        "expr": "countLetterOccurrences(\"hello world\", \"l\")",
        "expected": 3
      },
      {
        "expr": "countLetterOccurrences(\"banana\", \"a\")",
        "expected": 3
      },
      {
        "expr": "countLetterOccurrences(\"code\", \"x\")",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.8",
    "name": "reverseStringFor",
    "title": "Реверс рядка через цикл for",
    "level": "Базовий рівень",
    "goal": "Розвернути рядок str задом наперед за допомогою циклу for (від str.length - 1 до 0).",
    "reqs": [
      "Не використовувати вбудований reverse().",
      "Повернути новий рядок."
    ],
    "hint": "let res = \"\"; for (let i = str.length - 1; i >= 0; i--) res += str[i]; return res;",
    "starterParams": "str",
    "starterBody": "return \"\";",
    "solutionBody": "let res = \"\"; for (let i = str.length - 1; i >= 0; i--) res += str[i]; return res;",
    "tests": [
      {
        "expr": "reverseStringFor(\"frontend\")",
        "expected": "dnetnorf"
      },
      {
        "expr": "reverseStringFor(\"loop\")",
        "expected": "pool"
      },
      {
        "expr": "reverseStringFor(\"\")",
        "expected": ""
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.9",
    "name": "arithmeticProgression",
    "title": "Генератор арифметичної прогресії",
    "level": "Базовий рівень",
    "goal": "Згенерувати масив перших n членів арифметичної прогресії з першим членом first та різницею diff.",
    "reqs": [
      "Формула: a_i = first + i * diff.",
      "Якщо n <= 0, повернути []."
    ],
    "hint": "const res = []; for (let i = 0; i < n; i++) res.push(first + i * diff); return res;",
    "starterParams": "first, diff, n",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = 0; i < n; i++) res.push(first + i * diff); return res;",
    "tests": [
      {
        "expr": "arithmeticProgression(3, 4, 4)",
        "expected": [
          3,
          7,
          11,
          15
        ]
      },
      {
        "expr": "arithmeticProgression(10, -2, 3)",
        "expected": [
          10,
          8,
          6
        ]
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.10",
    "name": "geometricProgression",
    "title": "Генератор геометричної прогресії",
    "level": "Базовий рівень",
    "goal": "Згенерувати масив перших n членів геометричної прогресії: first, first*ratio, first*ratio^2...",
    "reqs": [
      "Якщо n <= 0, повернути [].",
      "Повернути масив чисел."
    ],
    "hint": "const res = []; let cur = first; for (let i = 0; i < n; i++) { res.push(cur); cur *= ratio; } return res;",
    "starterParams": "first, ratio, n",
    "starterBody": "return [];",
    "solutionBody": "const res = []; let cur = first; for (let i = 0; i < n; i++) { res.push(cur); cur *= ratio; } return res;",
    "tests": [
      {
        "expr": "geometricProgression(2, 3, 4)",
        "expected": [
          2,
          6,
          18,
          54
        ]
      },
      {
        "expr": "geometricProgression(5, 2, 3)",
        "expected": [
          5,
          10,
          20
        ]
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.11",
    "name": "filterShortWords",
    "title": "Фільтрація слів за мінімальною довжиною",
    "level": "Базовий рівень",
    "goal": "Повернути новий масив слів із words, довжина яких >= minLen.",
    "reqs": [
      "Використати цикл for.",
      "Зберегти початковий порядок слів."
    ],
    "hint": "const res = []; for (let i = 0; i < words.length; i++) { if (words[i].length >= minLen) res.push(words[i]); } return res;",
    "starterParams": "words, minLen",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = 0; i < words.length; i++) { if (words[i].length >= minLen) res.push(words[i]); } return res;",
    "tests": [
      {
        "expr": "filterShortWords([\"apple\", \"cat\", \"banana\", \"dog\"], 4)",
        "expected": [
          "apple",
          "banana"
        ]
      },
      {
        "expr": "filterShortWords([\"a\", \"bb\", \"ccc\"], 2)",
        "expected": [
          "bb",
          "ccc"
        ]
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.12",
    "name": "findMaxIndex",
    "title": "Індекс максимального елемента масиву",
    "level": "Базовий рівень",
    "goal": "Знайти індекс першого входження найбільшого числа в масиві arr через for.",
    "reqs": [
      "Якщо масив порожній, повернути -1.",
      "Повернути індекс (0-based)."
    ],
    "hint": "if (!arr || arr.length === 0) return -1; let maxIdx = 0; for (let i = 1; i < arr.length; i++) { if (arr[i] > arr[maxIdx]) maxIdx = i; } return maxIdx;",
    "starterParams": "arr",
    "starterBody": "return -1;",
    "solutionBody": "if (!arr || arr.length === 0) return -1; let maxIdx = 0; for (let i = 1; i < arr.length; i++) { if (arr[i] > arr[maxIdx]) maxIdx = i; } return maxIdx;",
    "tests": [
      {
        "expr": "findMaxIndex([3, 9, 2, 9, 5])",
        "expected": 1
      },
      {
        "expr": "findMaxIndex([-5, -1, -8])",
        "expected": 1
      },
      {
        "expr": "findMaxIndex([])",
        "expected": -1
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.13",
    "name": "findMinIndex",
    "title": "Індекс мінімального елемента масиву",
    "level": "Базовий рівень",
    "goal": "Знайти індекс першого входження найменшого числа в масиві arr.",
    "reqs": [
      "Якщо масив порожній, повернути -1.",
      "Повернути цілий індекс."
    ],
    "hint": "if (!arr || arr.length === 0) return -1; let minIdx = 0; for (let i = 1; i < arr.length; i++) { if (arr[i] < arr[minIdx]) minIdx = i; } return minIdx;",
    "starterParams": "arr",
    "starterBody": "return -1;",
    "solutionBody": "if (!arr || arr.length === 0) return -1; let minIdx = 0; for (let i = 1; i < arr.length; i++) { if (arr[i] < arr[minIdx]) minIdx = i; } return minIdx;",
    "tests": [
      {
        "expr": "findMinIndex([10, 4, 15, 2])",
        "expected": 3
      },
      {
        "expr": "findMinIndex([5, 5, 5])",
        "expected": 0
      },
      {
        "expr": "findMinIndex([])",
        "expected": -1
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.14",
    "name": "calculateAverage",
    "title": "Середнє арифметичне масиву чисел",
    "level": "Базовий рівень",
    "goal": "Обчислити середнє арифметичне чисел у масиві numbers через for.",
    "reqs": [
      "Якщо масив порожній, повернути 0.",
      "Повернути сума / довжина."
    ],
    "hint": "if (!numbers || numbers.length === 0) return 0; let s = 0; for (let i = 0; i < numbers.length; i++) s += numbers[i]; return s / numbers.length;",
    "starterParams": "numbers",
    "starterBody": "return 0;",
    "solutionBody": "if (!numbers || numbers.length === 0) return 0; let s = 0; for (let i = 0; i < numbers.length; i++) s += numbers[i]; return s / numbers.length;",
    "tests": [
      {
        "expr": "calculateAverage([2, 4, 6, 8])",
        "expected": 5
      },
      {
        "expr": "calculateAverage([10])",
        "expected": 10
      },
      {
        "expr": "calculateAverage([])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.15",
    "name": "countAboveThreshold",
    "title": "Кількість елементів вище порогу",
    "level": "Базовий рівень",
    "goal": "Порахувати скільки чисел у масиві arr перевищують значення threshold.",
    "reqs": [
      "Повернути цілу кількість.",
      "Працювати з додатними та відʼємними числами."
    ],
    "hint": "let c = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] > threshold) c++; } return c;",
    "starterParams": "arr, threshold",
    "starterBody": "return 0;",
    "solutionBody": "let c = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] > threshold) c++; } return c;",
    "tests": [
      {
        "expr": "countAboveThreshold([10, 25, 5, 40, 18], 20)",
        "expected": 2
      },
      {
        "expr": "countAboveThreshold([-5, -2, 0, 3], -1)",
        "expected": 2
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.16",
    "name": "everyNthElement",
    "title": "Вибірка кожного N-го елемента",
    "level": "Базовий рівень",
    "goal": "Повернути масив кожного n-го елемента масиву arr (1-based: n-1, 2n-1, 3n-1...).",
    "reqs": [
      "Якщо n <= 0, повернути [].",
      "Повернути масив елементів."
    ],
    "hint": "const res = []; if (n <= 0) return []; for (let i = n - 1; i < arr.length; i += n) res.push(arr[i]); return res;",
    "starterParams": "arr, n",
    "starterBody": "return [];",
    "solutionBody": "const res = []; if (n <= 0) return []; for (let i = n - 1; i < arr.length; i += n) res.push(arr[i]); return res;",
    "tests": [
      {
        "expr": "everyNthElement([\"a\", \"b\", \"c\", \"d\", \"e\", \"f\"], 2)",
        "expected": [
          "b",
          "d",
          "f"
        ]
      },
      {
        "expr": "everyNthElement([1, 2, 3, 4, 5], 3)",
        "expected": [
          3
        ]
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.17",
    "name": "pairwiseDifferences",
    "title": "Різниця сусідніх елементів",
    "level": "Середній рівень",
    "goal": "Створити масив різниць сусідніх чисел: arr[i+1] - arr[i].",
    "reqs": [
      "Якщо arr.length < 2, повернути [].",
      "Довжина результату arr.length - 1."
    ],
    "hint": "const res = []; for (let i = 0; i < arr.length - 1; i++) res.push(arr[i + 1] - arr[i]); return res;",
    "starterParams": "arr",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = 0; i < arr.length - 1; i++) res.push(arr[i + 1] - arr[i]); return res;",
    "tests": [
      {
        "expr": "pairwiseDifferences([1, 5, 2, 10])",
        "expected": [
          4,
          -3,
          8
        ]
      },
      {
        "expr": "pairwiseDifferences([10, 20])",
        "expected": [
          10
        ]
      },
      {
        "expr": "pairwiseDifferences([5])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.18",
    "name": "runningTotal",
    "title": "Накопичувальні суми (Prefix Sums)",
    "level": "Середній рівень",
    "goal": "Повернути масив префіксних сум: [arr[0], arr[0]+arr[1], ...].",
    "reqs": [
      "Якщо масив порожній, повернути [].",
      "Кожен елемент — це сума всіх попередніх плюс поточний."
    ],
    "hint": "const res = []; let s = 0; for (let i = 0; i < arr.length; i++) { s += arr[i]; res.push(s); } return res;",
    "starterParams": "arr",
    "starterBody": "return [];",
    "solutionBody": "const res = []; let s = 0; for (let i = 0; i < arr.length; i++) { s += arr[i]; res.push(s); } return res;",
    "tests": [
      {
        "expr": "runningTotal([1, 2, 3, 4])",
        "expected": [
          1,
          3,
          6,
          10
        ]
      },
      {
        "expr": "runningTotal([5, -2, 4])",
        "expected": [
          5,
          3,
          7
        ]
      },
      {
        "expr": "runningTotal([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.19",
    "name": "alternateSignsSum",
    "title": "Знакоперемінна сума масиву",
    "level": "Середній рівень",
    "goal": "Обчислити arr[0] - arr[1] + arr[2] - arr[3] + ... через for.",
    "reqs": [
      "Для парного індексу додавати, для непарного віднімати.",
      "Якщо порожній, повернути 0."
    ],
    "hint": "let sum = 0; for (let i = 0; i < arr.length; i++) { if (i % 2 === 0) sum += arr[i]; else sum -= arr[i]; } return sum;",
    "starterParams": "arr",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; for (let i = 0; i < arr.length; i++) { if (i % 2 === 0) sum += arr[i]; else sum -= arr[i]; } return sum;",
    "tests": [
      {
        "expr": "alternateSignsSum([10, 4, 3, 2])",
        "expected": 7
      },
      {
        "expr": "alternateSignsSum([5])",
        "expected": 5
      },
      {
        "expr": "alternateSignsSum([])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.20",
    "name": "stringRepeatFor",
    "title": "Повторення рядка N разів через for",
    "level": "Базовий рівень",
    "goal": "Сконкатенувати рядок str сам із собою n разів за допомогою for.",
    "reqs": [
      "Якщо n <= 0, повернути \"\".",
      "Не використовувати вбудований .repeat()."
    ],
    "hint": "let res = \"\"; for (let i = 0; i < n; i++) res += str; return res;",
    "starterParams": "str, n",
    "starterBody": "return \"\";",
    "solutionBody": "let res = \"\"; for (let i = 0; i < n; i++) res += str; return res;",
    "tests": [
      {
        "expr": "stringRepeatFor(\"abc\", 3)",
        "expected": "abcabcabc"
      },
      {
        "expr": "stringRepeatFor(\"x\", 0)",
        "expected": ""
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.21",
    "name": "countVowels",
    "title": "Підрахунок голосних літер",
    "level": "Базовий рівень",
    "goal": "Порахувати кількість голосних літер (a, e, i, o, u, y / а, е, є, и, і, ї, о, у, ю, я) у рядку.",
    "reqs": [
      "Регістронезалежний підрахунок.",
      "Використати цикл for."
    ],
    "hint": "const vowels = \"aeiouyаеєиіїоуюя\"; const lower = str.toLowerCase(); let c = 0; for (let i = 0; i < lower.length; i++) { if (vowels.includes(lower[i])) c++; } return c;",
    "starterParams": "str",
    "starterBody": "return 0;",
    "solutionBody": "const vowels = \"aeiouyаеєиіїоуюя\"; const lower = str.toLowerCase(); let c = 0; for (let i = 0; i < lower.length; i++) { if (vowels.includes(lower[i])) c++; } return c;",
    "tests": [
      {
        "expr": "countVowels(\"Hello World\")",
        "expected": 3
      },
      {
        "expr": "countVowels(\"Привіт світ\")",
        "expected": 3
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.22",
    "name": "caesarCipherSimple",
    "title": "Простий шифр Цезаря на +shift",
    "level": "Середній рівень",
    "goal": "Зсунути кожну малу англійську літеру a-z у рядку str на shift позицій вперед за модулем 26.",
    "reqs": [
      "Символи поза a-z залишати без змін.",
      "Використати for та charCodeAt/fromCharCode."
    ],
    "hint": "let res = \"\"; for (let i = 0; i < str.length; i++) { const code = str.charCodeAt(i); if (code >= 97 && code <= 122) { res += String.fromCharCode(97 + (code - 97 + shift) % 26); } else res += str[i]; } return res;",
    "starterParams": "str, shift",
    "starterBody": "return str;",
    "solutionBody": "let res = \"\"; for (let i = 0; i < str.length; i++) { const code = str.charCodeAt(i); if (code >= 97 && code <= 122) { res += String.fromCharCode(97 + ((code - 97 + shift) % 26 + 26) % 26); } else res += str[i]; } return res;",
    "tests": [
      {
        "expr": "caesarCipherSimple(\"abc\", 1)",
        "expected": "bcd"
      },
      {
        "expr": "caesarCipherSimple(\"xyz\", 2)",
        "expected": "zab"
      },
      {
        "expr": "caesarCipherSimple(\"hello, world!\", 3)",
        "expected": "khoor, zruog!"
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.23",
    "name": "findFirstNegative",
    "title": "Індекс першого відʼємного числа",
    "level": "Базовий рівень",
    "goal": "Знайти індекс першого числа < 0 у масиві arr. Якщо немає, повернути -1.",
    "reqs": [
      "Повернути індекс першого входження.",
      "Використати цикл for."
    ],
    "hint": "for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) return i; } return -1;",
    "starterParams": "arr",
    "starterBody": "return -1;",
    "solutionBody": "for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) return i; } return -1;",
    "tests": [
      {
        "expr": "findFirstNegative([3, 5, -2, 8])",
        "expected": 2
      },
      {
        "expr": "findFirstNegative([1, 2, 3])",
        "expected": -1
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.24",
    "name": "arrayIsSortedAsc",
    "title": "Перевірка відсортованості масиву",
    "level": "Середній рівень",
    "goal": "Перевірити чи масив arr відсортований за незменшенням (arr[i] <= arr[i+1]).",
    "reqs": [
      "Для масивів довжиною 0 або 1 повернути true.",
      "Якщо хоча б один елемент порушує порядок — false."
    ],
    "hint": "for (let i = 0; i < arr.length - 1; i++) { if (arr[i] > arr[i + 1]) return false; } return true;",
    "starterParams": "arr",
    "starterBody": "return true;",
    "solutionBody": "for (let i = 0; i < arr.length - 1; i++) { if (arr[i] > arr[i + 1]) return false; } return true;",
    "tests": [
      {
        "expr": "arrayIsSortedAsc([1, 2, 3, 5, 5])",
        "expected": true
      },
      {
        "expr": "arrayIsSortedAsc([1, 3, 2])",
        "expected": false
      },
      {
        "expr": "arrayIsSortedAsc([])",
        "expected": true
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.25",
    "name": "replaceNegativesWithZero",
    "title": "Заміна відʼємних елементів на нуль",
    "level": "Базовий рівень",
    "goal": "Повернути новий масив, де всі числа < 0 замінені на 0, а інші залишені без змін.",
    "reqs": [
      "Не мутувати вхідний масив.",
      "Використати цикл for."
    ],
    "hint": "const res = []; for (let i = 0; i < arr.length; i++) { res.push(arr[i] < 0 ? 0 : arr[i]); } return res;",
    "starterParams": "arr",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = 0; i < arr.length; i++) { res.push(arr[i] < 0 ? 0 : arr[i]); } return res;",
    "tests": [
      {
        "expr": "replaceNegativesWithZero([1, -4, 7, -9, 0])",
        "expected": [
          1,
          0,
          7,
          0,
          0
        ]
      },
      {
        "expr": "replaceNegativesWithZero([-1, -2])",
        "expected": [
          0,
          0
        ]
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.26",
    "name": "mergeTwoArraysAlternating",
    "title": "Почергове злиття двох масивів",
    "level": "Середній рівень",
    "goal": "Злити два масиви a та b почергово: a[0], b[0], a[1], b[1]... додаючи хвіст довшого масиву в кінець.",
    "reqs": [
      "Використати цикл for до Math.max(a.length, b.length).",
      "Повернути результуючий масив."
    ],
    "hint": "const res = []; const len = Math.max(a.length, b.length); for (let i = 0; i < len; i++) { if (i < a.length) res.push(a[i]); if (i < b.length) res.push(b[i]); } return res;",
    "starterParams": "a, b",
    "starterBody": "return [];",
    "solutionBody": "const res = []; const len = Math.max(a.length, b.length); for (let i = 0; i < len; i++) { if (i < a.length) res.push(a[i]); if (i < b.length) res.push(b[i]); } return res;",
    "tests": [
      {
        "expr": "mergeTwoArraysAlternating([1, 2, 3], [\"a\", \"b\", \"c\"])",
        "expected": [
          1,
          "a",
          2,
          "b",
          3,
          "c"
        ]
      },
      {
        "expr": "mergeTwoArraysAlternating([1, 2], [\"x\", \"y\", \"z\"])",
        "expected": [
          1,
          "x",
          2,
          "y",
          "z"
        ]
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.27",
    "name": "countPrimesUpTo",
    "title": "Кількість простих чисел до N",
    "level": "Середній рівень",
    "goal": "Порахувати скільки простих чисел існує в діапазоні від 2 до N включно через цикл for.",
    "reqs": [
      "Якщо n < 2, повернути 0.",
      "Перевіряти кожне число k у циклі for."
    ],
    "hint": "let count = 0; for (let k = 2; k <= n; k++) { let prime = true; for (let d = 2; d * d <= k; d++) { if (k % d === 0) { prime = false; break; } } if (prime) count++; } return count;",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "let count = 0; for (let k = 2; k <= n; k++) { let prime = true; for (let d = 2; d * d <= k; d++) { if (k % d === 0) { prime = false; break; } } if (prime) count++; } return count;",
    "tests": [
      {
        "expr": "countPrimesUpTo(10)",
        "expected": 4
      },
      {
        "expr": "countPrimesUpTo(20)",
        "expected": 8
      },
      {
        "expr": "countPrimesUpTo(1)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.28",
    "name": "charFrequencyMap",
    "title": "Частота символів у рядку",
    "level": "Середній рівень",
    "goal": "Побудувати обʼєкт частоти кожного символу в рядку str: { [char]: count } через for.",
    "reqs": [
      "Враховувати регістр.",
      "Для порожнього рядка повернути {}."
    ],
    "hint": "const map = {}; for (let i = 0; i < str.length; i++) { const ch = str[i]; map[ch] = (map[ch] || 0) + 1; } return map;",
    "starterParams": "str",
    "starterBody": "return {};",
    "solutionBody": "const map = {}; for (let i = 0; i < str.length; i++) { const ch = str[i]; map[ch] = (map[ch] || 0) + 1; } return map;",
    "tests": [
      {
        "expr": "charFrequencyMap(\"apple\")",
        "expected": {
          "a": 1,
          "p": 2,
          "l": 1,
          "e": 1
        }
      },
      {
        "expr": "charFrequencyMap(\"\")",
        "expected": {}
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.29",
    "name": "chunkArrayFor",
    "title": "Розбиття масиву на чанки",
    "level": "Середній рівень",
    "goal": "Розбити масив arr на підмасиви довжиною size за допомогою кроку for (i += size).",
    "reqs": [
      "Якщо size <= 0 або arr порожній, повернути [].",
      "Останній чанк може бути коротшим."
    ],
    "hint": "const res = []; if (size <= 0) return []; for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size)); return res;",
    "starterParams": "arr, size",
    "starterBody": "return [];",
    "solutionBody": "const res = []; if (size <= 0) return []; for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size)); return res;",
    "tests": [
      {
        "expr": "chunkArrayFor([1, 2, 3, 4, 5], 2)",
        "expected": [
          [
            1,
            2
          ],
          [
            3,
            4
          ],
          [
            5
          ]
        ]
      },
      {
        "expr": "chunkArrayFor([1, 2, 3], 3)",
        "expected": [
          [
            1,
            2,
            3
          ]
        ]
      },
      {
        "expr": "chunkArrayFor([], 2)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 3,
    "id": "3.30",
    "name": "powerSeriesSum",
    "title": "Сума степеневого ряду 1 + x + ... + x^n",
    "level": "Просунутий рівень",
    "goal": "Обчислити суму 1 + x + x^2 + ... + x^n для заданого x та n (n >= 0).",
    "reqs": [
      "Для n = 0 повернути 1.",
      "Підтримувати поточний степінь power *= x у циклі for."
    ],
    "hint": "let sum = 1, cur = 1; for (let i = 1; i <= n; i++) { cur *= x; sum += cur; } return sum;",
    "starterParams": "x, n",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 1, cur = 1; for (let i = 1; i <= n; i++) { cur *= x; sum += cur; } return sum;",
    "tests": [
      {
        "expr": "powerSeriesSum(2, 3)",
        "expected": 15
      },
      {
        "expr": "powerSeriesSum(3, 2)",
        "expected": 13
      },
      {
        "expr": "powerSeriesSum(5, 0)",
        "expected": 1
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.1",
    "name": "findFirstDivisible",
    "title": "Перше кратне з раннім виходом (break)",
    "level": "Базовий рівень",
    "goal": "Знайти перше число >= start, яке ділиться на k націло. Використати break.",
    "reqs": [
      "Якщо k <= 0, повернути null.",
      "Перевіряти у циклі for чи while з лімітом."
    ],
    "hint": "if (k <= 0) return null; let cur = start; while (true) { if (cur % k === 0) break; cur++; } return cur;",
    "starterParams": "start, k",
    "starterBody": "return null;",
    "solutionBody": "if (k <= 0) return null; let cur = start; while (true) { if (cur % k === 0) break; cur++; } return cur;",
    "tests": [
      {
        "expr": "findFirstDivisible(14, 5)",
        "expected": 15
      },
      {
        "expr": "findFirstDivisible(20, 4)",
        "expected": 20
      },
      {
        "expr": "findFirstDivisible(10, 0)",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.2",
    "name": "skipDivisibleByThree",
    "title": "Сума чисел з пропуском кратних 3 (continue)",
    "level": "Базовий рівень",
    "goal": "Обчислити суму чисел від 1 до n, пропускаючи ті, що діляться на 3 через continue.",
    "reqs": [
      "Якщо i % 3 === 0, викликати continue.",
      "Повернути суму решти чисел."
    ],
    "hint": "let sum = 0; for (let i = 1; i <= n; i++) { if (i % 3 === 0) continue; sum += i; } return sum;",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; for (let i = 1; i <= n; i++) { if (i % 3 === 0) continue; sum += i; } return sum;",
    "tests": [
      {
        "expr": "skipDivisibleByThree(6)",
        "expected": 12
      },
      {
        "expr": "skipDivisibleByThree(3)",
        "expected": 3
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.3",
    "name": "findFirstNegativeIndexBreak",
    "title": "Пошук першого відʼємного з break",
    "level": "Базовий рівень",
    "goal": "Знайти індекс першого відʼємного елемента в масиві arr та негайно перервати цикл через break.",
    "reqs": [
      "Якщо відʼємних немає, повернути -1.",
      "Зберегти індекс у змінну перед break."
    ],
    "hint": "let idx = -1; for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) { idx = i; break; } } return idx;",
    "starterParams": "arr",
    "starterBody": "return -1;",
    "solutionBody": "let idx = -1; for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) { idx = i; break; } } return idx;",
    "tests": [
      {
        "expr": "findFirstNegativeIndexBreak([4, 8, -5, 2, -1])",
        "expected": 2
      },
      {
        "expr": "findFirstNegativeIndexBreak([1, 2, 3])",
        "expected": -1
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.4",
    "name": "sumUntilNegative",
    "title": "Підсумовування до першого відʼємного числа",
    "level": "Базовий рівень",
    "goal": "Додавати елементи масиву arr до суми доки не зустрінеться відʼємне число (break).",
    "reqs": [
      "Відʼємне число НЕ додавати до суми.",
      "Повернути накопичену суму."
    ],
    "hint": "let sum = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) break; sum += arr[i]; } return sum;",
    "starterParams": "arr",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) break; sum += arr[i]; } return sum;",
    "tests": [
      {
        "expr": "sumUntilNegative([5, 10, -2, 20])",
        "expected": 15
      },
      {
        "expr": "sumUntilNegative([-1, 10])",
        "expected": 0
      },
      {
        "expr": "sumUntilNegative([1, 2, 3])",
        "expected": 6
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.5",
    "name": "filterNonNumericContinue",
    "title": "Сума тільки числових значень (continue)",
    "level": "Базовий рівень",
    "goal": "Обчислити суму тільки тих елементів arr, які є числами (typeof item === \"number\" && !isNaN(item)).",
    "reqs": [
      "Нечислові значення пропускати оператором continue.",
      "Повернути суму."
    ],
    "hint": "let sum = 0; for (let i = 0; i < arr.length; i++) { const v = arr[i]; if (typeof v !== \"number\" || isNaN(v)) continue; sum += v; } return sum;",
    "starterParams": "arr",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; for (let i = 0; i < arr.length; i++) { const v = arr[i]; if (typeof v !== \"number\" || isNaN(v)) continue; sum += v; } return sum;",
    "tests": [
      {
        "expr": "filterNonNumericContinue([10, \"text\", 20, null, 5, NaN])",
        "expected": 35
      },
      {
        "expr": "filterNonNumericContinue([\"a\", \"b\"])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.6",
    "name": "safeWhileCounter",
    "title": "Запобіжник від зациклення (Watchdog Counter)",
    "level": "Середній рівень",
    "goal": "Виконувати циклічний інкремент лічильника доки conditionFn() повертає true, але не більше maxIter.",
    "reqs": [
      "Якщо лічильник досяг maxIter, вийти з циклу (break).",
      "Повернути обʼєкт { iterations: number, timedOut: boolean }."
    ],
    "hint": "let i = 0; let timedOut = false; while (conditionFn()) { i++; if (i >= maxIter) { timedOut = true; break; } } return { iterations: i, timedOut };",
    "starterParams": "conditionFn, maxIter",
    "starterBody": "return { iterations: 0, timedOut: false };",
    "solutionBody": "let i = 0; let timedOut = false; while (conditionFn()) { i++; if (i >= maxIter) { timedOut = true; break; } } return { iterations: i, timedOut };",
    "tests": [
      {
        "expr": "safeWhileCounter((() => { let c = 0; return () => ++c < 3; })(), 10)",
        "expected": {
          "iterations": 2,
          "timedOut": false
        }
      },
      {
        "expr": "safeWhileCounter(() => true, 5)",
        "expected": {
          "iterations": 5,
          "timedOut": true
        }
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.7",
    "name": "searchUserInRecords",
    "title": "Пошук користувача за id з негайним break",
    "level": "Базовий рівень",
    "goal": "Знайти обʼєкт користувача з масиву users за заданим id. При знаходженні викликати break.",
    "reqs": [
      "Якщо не знайдено, повернути null.",
      "Зберегти знайдений обʼєкт перед break."
    ],
    "hint": "let found = null; for (let i = 0; i < users.length; i++) { if (users[i].id === id) { found = users[i]; break; } } return found;",
    "starterParams": "users, id",
    "starterBody": "return null;",
    "solutionBody": "let found = null; for (let i = 0; i < users.length; i++) { if (users[i].id === id) { found = users[i]; break; } } return found;",
    "tests": [
      {
        "expr": "searchUserInRecords([{ id: 1, name: \"Anna\" }, { id: 2, name: \"Bohdan\" }], 2)",
        "expected": {
          "id": 2,
          "name": "Bohdan"
        }
      },
      {
        "expr": "searchUserInRecords([{ id: 1 }], 99)",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.8",
    "name": "sumOddOnlyContinue",
    "title": "Сума лише непарних чисел через continue",
    "level": "Базовий рівень",
    "goal": "Обчислити суму непарних чисел від 1 до n. Для парних чисел використовувати continue.",
    "reqs": [
      "for (let i = 1; i <= n; i++) { if (i % 2 === 0) continue; sum += i; }",
      "Повернути суму."
    ],
    "hint": "let sum = 0; for (let i = 1; i <= n; i++) { if (i % 2 === 0) continue; sum += i; } return sum;",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; for (let i = 1; i <= n; i++) { if (i % 2 === 0) continue; sum += i; } return sum;",
    "tests": [
      {
        "expr": "sumOddOnlyContinue(5)",
        "expected": 9
      },
      {
        "expr": "sumOddOnlyContinue(6)",
        "expected": 9
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.9",
    "name": "findTargetSumIndex",
    "title": "Індекс перевищення ліміту суми",
    "level": "Середній рівень",
    "goal": "Знайти перший індекс у масиві arr, коли накопичена сума досягає або перевищує targetSum.",
    "reqs": [
      "Вийти негайно через break.",
      "Якщо сума так і не досягла targetSum, повернути -1."
    ],
    "hint": "let s = 0, idx = -1; for (let i = 0; i < arr.length; i++) { s += arr[i]; if (s >= targetSum) { idx = i; break; } } return idx;",
    "starterParams": "arr, targetSum",
    "starterBody": "return -1;",
    "solutionBody": "let s = 0, idx = -1; for (let i = 0; i < arr.length; i++) { s += arr[i]; if (s >= targetSum) { idx = i; break; } } return idx;",
    "tests": [
      {
        "expr": "findTargetSumIndex([10, 20, 30, 40], 55)",
        "expected": 2
      },
      {
        "expr": "findTargetSumIndex([1, 2, 3], 100)",
        "expected": -1
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.10",
    "name": "skipForbiddenWords",
    "title": "Складання тексту з фільтром слів (continue)",
    "level": "Базовий рівень",
    "goal": "Обʼєднати слова з масиву words через пробіл, пропускаючи заборонені слова з forbiddenList через continue.",
    "reqs": [
      "Використати continue якщо forbiddenList.includes(word).",
      "Повернути рядок без зайвих пробілів на початку і в кінці."
    ],
    "hint": "const res = []; for (let i = 0; i < words.length; i++) { if (forbiddenList.includes(words[i])) continue; res.push(words[i]); } return res.join(\" \");",
    "starterParams": "words, forbiddenList",
    "starterBody": "return \"\";",
    "solutionBody": "const res = []; for (let i = 0; i < words.length; i++) { if (forbiddenList.includes(words[i])) continue; res.push(words[i]); } return res.join(\" \");",
    "tests": [
      {
        "expr": "skipForbiddenWords([\"Hello\", \"bad\", \"wonderful\", \"world\"], [\"bad\"])",
        "expected": "Hello wonderful world"
      },
      {
        "expr": "skipForbiddenWords([\"test\", \"code\"], [\"test\", \"code\"])",
        "expected": ""
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.11",
    "name": "firstMultipleOfBoth",
    "title": "Перше спільне кратне через вічний цикл з break",
    "level": "Середній рівень",
    "goal": "Знайти найменше спільне кратне додатних чисел a та b за допомогою while(true) та break.",
    "reqs": [
      "Починати пошук з candidate = Math.max(a, b).",
      "Коли candidate % a === 0 && candidate % b === 0, викликати break."
    ],
    "hint": "let c = Math.max(a, b); while (true) { if (c % a === 0 && c % b === 0) break; c++; } return c;",
    "starterParams": "a, b",
    "starterBody": "return 1;",
    "solutionBody": "let c = Math.max(a, b); while (true) { if (c % a === 0 && c % b === 0) break; c++; } return c;",
    "tests": [
      {
        "expr": "firstMultipleOfBoth(4, 6)",
        "expected": 12
      },
      {
        "expr": "firstMultipleOfBoth(3, 5)",
        "expected": 15
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.12",
    "name": "processBatchWithLimit",
    "title": "Обробка платежів до вичерпання ліміту",
    "level": "Середній рівень",
    "goal": "Приймати транзакції з transactions доки загальна сума не перевищить budget. Вийти через break.",
    "reqs": [
      "Повернути кількість прийнятих транзакцій та загальну суму.",
      "Транзакцію, яка перевищила ліміт, не приймати."
    ],
    "hint": "let total = 0, count = 0; for (let i = 0; i < transactions.length; i++) { if (total + transactions[i] > budget) break; total += transactions[i]; count++; } return { count, total };",
    "starterParams": "transactions, budget",
    "starterBody": "return { count: 0, total: 0 };",
    "solutionBody": "let total = 0, count = 0; for (let i = 0; i < transactions.length; i++) { if (total + transactions[i] > budget) break; total += transactions[i]; count++; } return { count, total };",
    "tests": [
      {
        "expr": "processBatchWithLimit([100, 250, 300, 50], 400)",
        "expected": {
          "count": 2,
          "total": 350
        }
      },
      {
        "expr": "processBatchWithLimit([500], 200)",
        "expected": {
          "count": 0,
          "total": 0
        }
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.13",
    "name": "infiniteLoopBreaker",
    "title": "Аварійний обрив циклу за лічильником кроків",
    "level": "Базовий рівень",
    "goal": "Змоделювати захист циклу while(true), що рахує кроки та обривається через break при досягненні maxSteps.",
    "reqs": [
      "Повернути кінцеву кількість зроблених кроків.",
      "Запобігти зависанню браузера."
    ],
    "hint": "let steps = 0; while (true) { steps++; if (steps >= maxSteps) break; } return steps;",
    "starterParams": "maxSteps",
    "starterBody": "return 0;",
    "solutionBody": "let steps = 0; while (true) { steps++; if (steps >= maxSteps) break; } return steps;",
    "tests": [
      {
        "expr": "infiniteLoopBreaker(10)",
        "expected": 10
      },
      {
        "expr": "infiniteLoopBreaker(1)",
        "expected": 1
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.14",
    "name": "skipEveryThirdNumber",
    "title": "Пропуск кожного третього числа (continue)",
    "level": "Базовий рівень",
    "goal": "Зібрати в масив числа від 1 до n, пропускаючи кожне третє (i % 3 === 0) за допомогою continue.",
    "reqs": [
      "Використати цикл for.",
      "Повернути масив решти чисел."
    ],
    "hint": "const res = []; for (let i = 1; i <= n; i++) { if (i % 3 === 0) continue; res.push(i); } return res;",
    "starterParams": "n",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = 1; i <= n; i++) { if (i % 3 === 0) continue; res.push(i); } return res;",
    "tests": [
      {
        "expr": "skipEveryThirdNumber(8)",
        "expected": [
          1,
          2,
          4,
          5,
          7,
          8
        ]
      },
      {
        "expr": "skipEveryThirdNumber(3)",
        "expected": [
          1,
          2
        ]
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.15",
    "name": "stopOnZeroMarker",
    "title": "Збір даних до стоп-маркера 0",
    "level": "Базовий рівень",
    "goal": "Збирати значення з масиву stream доки не зустрінеться 0. Зупинити цикл через break.",
    "reqs": [
      "Маркер 0 не додавати до результату.",
      "Повернути зібрані елементи."
    ],
    "hint": "const res = []; for (let i = 0; i < stream.length; i++) { if (stream[i] === 0) break; res.push(stream[i]); } return res;",
    "starterParams": "stream",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = 0; i < stream.length; i++) { if (stream[i] === 0) break; res.push(stream[i]); } return res;",
    "tests": [
      {
        "expr": "stopOnZeroMarker([4, 8, 15, 0, 16, 23])",
        "expected": [
          4,
          8,
          15
        ]
      },
      {
        "expr": "stopOnZeroMarker([0, 1, 2])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.16",
    "name": "filterSpamComments",
    "title": "Модерація коментарів через continue",
    "level": "Середній рівень",
    "goal": "Відфільтрувати коментарі, пропускаючи ті, що містять слово spamWord (case-insensitive) через continue.",
    "reqs": [
      "Повернути масив безпечних коментарів.",
      "Використати цикл for."
    ],
    "hint": "const approved = []; const lower = spamWord.toLowerCase(); for (let i = 0; i < comments.length; i++) { if (comments[i].toLowerCase().includes(lower)) continue; approved.push(comments[i]); } return approved;",
    "starterParams": "comments, spamWord",
    "starterBody": "return [];",
    "solutionBody": "const approved = []; const lower = spamWord.toLowerCase(); for (let i = 0; i < comments.length; i++) { if (comments[i].toLowerCase().includes(lower)) continue; approved.push(comments[i]); } return approved;",
    "tests": [
      {
        "expr": "filterSpamComments([\"Nice post\", \"Buy crypto now!\", \"Great guide\"], \"crypto\")",
        "expected": [
          "Nice post",
          "Great guide"
        ]
      },
      {
        "expr": "filterSpamComments([\"All fine\"], \"spam\")",
        "expected": [
          "All fine"
        ]
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.17",
    "name": "findPrimeBreakEarly",
    "title": "Перевірка простоти з раннім виходом (break)",
    "level": "Середній рівень",
    "goal": "Визначити чи є n простим числом, обриваючи перевірку через break при першому ж знайденому дільнику.",
    "reqs": [
      "Якщо знайдено дільник, встановити isPrime = false та викликати break.",
      "Числа < 2 повертають false."
    ],
    "hint": "if (n < 2) return false; let isPrime = true; for (let d = 2; d * d <= n; d++) { if (n % d === 0) { isPrime = false; break; } } return isPrime;",
    "starterParams": "n",
    "starterBody": "return false;",
    "solutionBody": "if (n < 2) return false; let isPrime = true; for (let d = 2; d * d <= n; d++) { if (n % d === 0) { isPrime = false; break; } } return isPrime;",
    "tests": [
      {
        "expr": "findPrimeBreakEarly(29)",
        "expected": true
      },
      {
        "expr": "findPrimeBreakEarly(35)",
        "expected": false
      },
      {
        "expr": "findPrimeBreakEarly(1)",
        "expected": false
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.18",
    "name": "accumulatePointsWithCap",
    "title": "Нарахування балів з обмеженням стелі (Cap)",
    "level": "Базовий рівень",
    "goal": "Підсумовувати бали з events. Якщо сума досягає або перевищує maxCap, встановити суму рівною maxCap та перервати цикл (break).",
    "reqs": [
      "Повернути фінальну суму балів.",
      "Сума ніколи не перевищує maxCap."
    ],
    "hint": "let total = 0; for (let i = 0; i < events.length; i++) { total += events[i]; if (total >= maxCap) { total = maxCap; break; } } return total;",
    "starterParams": "events, maxCap",
    "starterBody": "return 0;",
    "solutionBody": "let total = 0; for (let i = 0; i < events.length; i++) { total += events[i]; if (total >= maxCap) { total = maxCap; break; } } return total;",
    "tests": [
      {
        "expr": "accumulatePointsWithCap([10, 20, 30, 40], 50)",
        "expected": 50
      },
      {
        "expr": "accumulatePointsWithCap([10, 15], 50)",
        "expected": 25
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.19",
    "name": "skipWeekendDays",
    "title": "Облік робочих днів (пропуск 6 і 7 через continue)",
    "level": "Базовий рівень",
    "goal": "Обчислити загальну суму робочих годин з масиву записів schedule: [{ day: number, hours: number }].",
    "reqs": [
      "Якщо day === 6 або day === 7 (вихідні) — використати continue.",
      "Повернути суму годин будніх днів."
    ],
    "hint": "let total = 0; for (let i = 0; i < schedule.length; i++) { const item = schedule[i]; if (item.day === 6 || item.day === 7) continue; total += item.hours; } return total;",
    "starterParams": "schedule",
    "starterBody": "return 0;",
    "solutionBody": "let total = 0; for (let i = 0; i < schedule.length; i++) { const item = schedule[i]; if (item.day === 6 || item.day === 7) continue; total += item.hours; } return total;",
    "tests": [
      {
        "expr": "skipWeekendDays([{ day: 1, hours: 8 }, { day: 6, hours: 4 }, { day: 3, hours: 7 }])",
        "expected": 15
      },
      {
        "expr": "skipWeekendDays([{ day: 7, hours: 5 }])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.20",
    "name": "findFirstDuplicateAdjacent",
    "title": "Пошук першої пари однакових сусідів",
    "level": "Середній рівень",
    "goal": "Знайти перше значення, яке стоїть поруч із таким самим значенням у масиві (arr[i] === arr[i+1]). Вийти через break.",
    "reqs": [
      "Повернути це значення або null якщо однакових сусідів немає.",
      "Використати break."
    ],
    "hint": "let dup = null; for (let i = 0; i < arr.length - 1; i++) { if (arr[i] === arr[i + 1]) { dup = arr[i]; break; } } return dup;",
    "starterParams": "arr",
    "starterBody": "return null;",
    "solutionBody": "let dup = null; for (let i = 0; i < arr.length - 1; i++) { if (arr[i] === arr[i + 1]) { dup = arr[i]; break; } } return dup;",
    "tests": [
      {
        "expr": "findFirstDuplicateAdjacent([1, 2, 2, 3, 4])",
        "expected": 2
      },
      {
        "expr": "findFirstDuplicateAdjacent([\"a\", \"b\", \"c\", \"c\"])",
        "expected": "c"
      },
      {
        "expr": "findFirstDuplicateAdjacent([1, 2, 3])",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.21",
    "name": "parseCsvRowValues",
    "title": "Парсинг CSV значень з лімітом колонок (break)",
    "level": "Середній рівень",
    "goal": "Розбити рядок csvLine через кому, зібравши не більше maxCols значень. Вийти через break.",
    "reqs": [
      "Використати цикл for з trim() для кожного поля.",
      "Повернути масив значень."
    ],
    "hint": "const parts = csvLine.split(\",\"); const res = []; for (let i = 0; i < parts.length; i++) { if (res.length >= maxCols) break; res.push(parts[i].trim()); } return res;",
    "starterParams": "csvLine, maxCols",
    "starterBody": "return [];",
    "solutionBody": "const parts = csvLine.split(\",\"); const res = []; for (let i = 0; i < parts.length; i++) { if (res.length >= maxCols) break; res.push(parts[i].trim()); } return res;",
    "tests": [
      {
        "expr": "parseCsvRowValues(\"id, name, email, role, date\", 3)",
        "expected": [
          "id",
          "name",
          "email"
        ]
      },
      {
        "expr": "parseCsvRowValues(\"a, b\", 5)",
        "expected": [
          "a",
          "b"
        ]
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.22",
    "name": "safeNewtonSqrt",
    "title": "Квадратний корінь методом Ньютона з лімітом ітерацій",
    "level": "Просунутий рівень",
    "goal": "Наблизити квадратний корінь числа x методом Ньютона: r = (r + x / r) / 2 доки різниця > eps або ітерацій < maxIter.",
    "reqs": [
      "Якщо x < 0, повернути null.",
      "При кожній ітерації перевіряти Math.abs(r * r - x) < eps та робити break."
    ],
    "hint": "if (x < 0) return null; if (x === 0) return 0; let r = x; for (let i = 0; i < maxIter; i++) { if (Math.abs(r * r - x) < eps) break; r = (r + x / r) / 2; } return Math.round(r * 1000) / 1000;",
    "starterParams": "x, maxIter, eps",
    "starterBody": "return 0;",
    "solutionBody": "if (x < 0) return null; if (x === 0) return 0; let r = x; for (let i = 0; i < maxIter; i++) { if (Math.abs(r * r - x) < eps) break; r = (r + x / r) / 2; } return Math.round(r * 1000) / 1000;",
    "tests": [
      {
        "expr": "safeNewtonSqrt(25, 20, 0.0001)",
        "expected": 5
      },
      {
        "expr": "safeNewtonSqrt(2, 20, 0.0001)",
        "expected": 1.414
      },
      {
        "expr": "safeNewtonSqrt(-4, 10, 0.01)",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.23",
    "name": "packetLossRetry",
    "title": "Повторні спроби передачі пакетів з break",
    "level": "Середній рівень",
    "goal": "Обробляти масив статусів передачі пакетів packetStatus. При першому \"SUCCESS\" перервати цикл (break).",
    "reqs": [
      "Повернути обʼєкт { delivered: boolean, attempts: number }.",
      "Якщо масив закінчився без успіху, delivered: false."
    ],
    "hint": "let delivered = false, i = 0; for (; i < packetStatus.length; i++) { if (packetStatus[i] === \"SUCCESS\") { delivered = true; i++; break; } } return { delivered, attempts: i };",
    "starterParams": "packetStatus",
    "starterBody": "return { delivered: false, attempts: 0 };",
    "solutionBody": "let delivered = false, i = 0; for (; i < packetStatus.length; i++) { if (packetStatus[i] === \"SUCCESS\") { delivered = true; i++; break; } } return { delivered, attempts: i };",
    "tests": [
      {
        "expr": "packetLossRetry([\"DROP\", \"DROP\", \"SUCCESS\", \"DROP\"])",
        "expected": {
          "delivered": true,
          "attempts": 3
        }
      },
      {
        "expr": "packetLossRetry([\"DROP\", \"DROP\"])",
        "expected": {
          "delivered": false,
          "attempts": 2
        }
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.24",
    "name": "skipNullAndUndefined",
    "title": "Фільтрація null та undefined через continue",
    "level": "Базовий рівень",
    "goal": "Зібрати в новий масив тільки валідні елементи, пропускаючи null та undefined через continue.",
    "reqs": [
      "Не пропускати 0, false, \"\" (вони є валідними значеннями).",
      "Використати цикл for."
    ],
    "hint": "const res = []; for (let i = 0; i < arr.length; i++) { const item = arr[i]; if (item === null || item === undefined) continue; res.push(item); } return res;",
    "starterParams": "arr",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let i = 0; i < arr.length; i++) { const item = arr[i]; if (item === null || item === undefined) continue; res.push(item); } return res;",
    "tests": [
      {
        "expr": "skipNullAndUndefined([1, null, 2, undefined, 0, false, \"\"])",
        "expected": [
          1,
          2,
          0,
          false,
          ""
        ]
      },
      {
        "expr": "skipNullAndUndefined([null, undefined])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 4,
    "id": "4.25",
    "name": "findSecretCode",
    "title": "Пошук секретного токена з префіксом (break)",
    "level": "Базовий рівень",
    "goal": "Знайти перший токен у масиві tokens, що починається з prefix. Вийти через break.",
    "reqs": [
      "Повернути знайдений рядок або null.",
      "Використати break."
    ],
    "hint": "let secret = null; for (let i = 0; i < tokens.length; i++) { if (tokens[i].startsWith(prefix)) { secret = tokens[i]; break; } } return secret;",
    "starterParams": "tokens, prefix",
    "starterBody": "return null;",
    "solutionBody": "let secret = null; for (let i = 0; i < tokens.length; i++) { if (tokens[i].startsWith(prefix)) { secret = tokens[i]; break; } } return secret;",
    "tests": [
      {
        "expr": "findSecretCode([\"tok_abc\", \"SEC_999\", \"tok_xyz\"], \"SEC_\")",
        "expected": "SEC_999"
      },
      {
        "expr": "findSecretCode([\"a\", \"b\"], \"x_\")",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.1",
    "name": "flowchartPreconditionLoop",
    "title": "Моделювання блок-схеми циклу з передумовою",
    "level": "Початковий рівень",
    "goal": "Змоделювати виконання класичної блок-схеми циклу з передумовою (while): [Перевірка умови i < n] -> ТАК: додати i до історії, i++, повернення до ромба; НІ: вихід.",
    "reqs": [
      "Почати з i = 0 і порожнього масиву історії iterations: [].",
      "Повернути масив знятих значень i на кожній ітерації."
    ],
    "hint": "const iterations = []; let i = 0; while (i < n) { iterations.push(i); i++; } return iterations;",
    "starterParams": "n",
    "starterBody": "return [];",
    "solutionBody": "const iterations = []; let i = 0; while (i < n) { iterations.push(i); i++; } return iterations;",
    "tests": [
      {
        "expr": "flowchartPreconditionLoop(3)",
        "expected": [
          0,
          1,
          2
        ]
      },
      {
        "expr": "flowchartPreconditionLoop(0)",
        "expected": []
      },
      {
        "expr": "flowchartPreconditionLoop(1)",
        "expected": [
          0
        ]
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.2",
    "name": "flowchartPostconditionLoop",
    "title": "Моделювання блок-схеми циклу з післяумовою",
    "level": "Початковий рівень",
    "goal": "Змоделювати блок-схему do...while: [Тіло: дія i++] -> [Ромб умови: i < limit?] -> ТАК: стрілка зворотного звʼязку до тіла; НІ: завершення.",
    "reqs": [
      "Тіло циклу виконується щонайменше 1 раз.",
      "Повернути обʼєкт { iterationsCount, finalValue }."
    ],
    "hint": "let i = 0; let count = 0; do { i++; count++; } while (i < limit); return { iterationsCount: count, finalValue: i };",
    "starterParams": "limit",
    "starterBody": "return { iterationsCount: 0, finalValue: 0 };",
    "solutionBody": "let i = 0; let count = 0; do { i++; count++; } while (i < limit); return { iterationsCount: count, finalValue: i };",
    "tests": [
      {
        "expr": "flowchartPostconditionLoop(3)",
        "expected": {
          "iterationsCount": 3,
          "finalValue": 3
        }
      },
      {
        "expr": "flowchartPostconditionLoop(-1)",
        "expected": {
          "iterationsCount": 1,
          "finalValue": 1
        }
      },
      {
        "expr": "flowchartPostconditionLoop(0)",
        "expected": {
          "iterationsCount": 1,
          "finalValue": 1
        }
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.3",
    "name": "flowchartCounterHexagon",
    "title": "Блок підготовки циклу (шестикутник)",
    "level": "Базовий рівень",
    "goal": "У блок-схемах блок підготовки (шестикутник) містить: параметр i = start, step, end. Змоделювати проходження цього блоку.",
    "reqs": [
      "Пройти значення від start до end з кроком step включно.",
      "Повернути масив сформованих значень лічильника."
    ],
    "hint": "const values = []; for (let i = start; i <= end; i += step) { values.push(i); } return values;",
    "starterParams": "start, end, step",
    "starterBody": "return [];",
    "solutionBody": "const values = []; for (let i = start; i <= end; i += step) { values.push(i); } return values;",
    "tests": [
      {
        "expr": "flowchartCounterHexagon(1, 10, 3)",
        "expected": [
          1,
          4,
          7,
          10
        ]
      },
      {
        "expr": "flowchartCounterHexagon(5, 5, 1)",
        "expected": [
          5
        ]
      },
      {
        "expr": "flowchartCounterHexagon(10, 2, 2)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.4",
    "name": "flowchartLoopWithBranch",
    "title": "Розгалуження всередині циклу на блок-схемі",
    "level": "Базовий рівень",
    "goal": "Змоделювати цикл, де в тілі стоїть ромб розгалуження: якщо число парне — додати до sumEven, якщо непарне — до sumOdd.",
    "reqs": [
      "Повернути обʼєкт { sumEven, sumOdd } для переданого масиву чисел."
    ],
    "hint": "let sumEven = 0, sumOdd = 0; for (const x of numbers) { if (x % 2 === 0) sumEven += x; else sumOdd += x; } return { sumEven, sumOdd };",
    "starterParams": "numbers",
    "starterBody": "return { sumEven: 0, sumOdd: 0 };",
    "solutionBody": "let sumEven = 0, sumOdd = 0; for (const x of numbers) { if (x % 2 === 0) sumEven += x; else sumOdd += x; } return { sumEven, sumOdd };",
    "tests": [
      {
        "expr": "flowchartLoopWithBranch([1, 2, 3, 4, 5])",
        "expected": {
          "sumEven": 6,
          "sumOdd": 9
        }
      },
      {
        "expr": "flowchartLoopWithBranch([])",
        "expected": {
          "sumEven": 0,
          "sumOdd": 0
        }
      },
      {
        "expr": "flowchartLoopWithBranch([2, 4, 6])",
        "expected": {
          "sumEven": 12,
          "sumOdd": 0
        }
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.5",
    "name": "flowchartBreakBranch",
    "title": "Гілка дострокового виходу (break) у блок-схемі",
    "level": "Базовий рівень",
    "goal": "На блок-схемі ромб перевіряє (item === target): якщо ТАК, стрілка виходить за межі циклу до блоку Кінець.",
    "reqs": [
      "Знайти індекс першого знаходження target у масиві arr. Якщо не знайдено, повернути -1."
    ],
    "hint": "let foundIdx = -1; for (let i = 0; i < arr.length; i++) { if (arr[i] === target) { foundIdx = i; break; } } return foundIdx;",
    "starterParams": "arr, target",
    "starterBody": "return -1;",
    "solutionBody": "let foundIdx = -1; for (let i = 0; i < arr.length; i++) { if (arr[i] === target) { foundIdx = i; break; } } return foundIdx;",
    "tests": [
      {
        "expr": "flowchartBreakBranch([\"apple\", \"banana\", \"kiwi\"], \"banana\")",
        "expected": 1
      },
      {
        "expr": "flowchartBreakBranch([10, 20, 30], 40)",
        "expected": -1
      },
      {
        "expr": "flowchartBreakBranch([5, 5, 5], 5)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.6",
    "name": "flowchartContinueBranch",
    "title": "Гілка пропуску (continue) у блок-схемі",
    "level": "Базовий рівень",
    "goal": "На блок-схемі ромб (num < 0): якщо ТАК, стрілка оминає тіло обробки і веде прямо до наступної ітерації.",
    "reqs": [
      "Підсумувати лише додатні числа з масиву arr, пропускаючи відʼємні за допомогою continue."
    ],
    "hint": "let sum = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) continue; sum += arr[i]; } return sum;",
    "starterParams": "arr",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) continue; sum += arr[i]; } return sum;",
    "tests": [
      {
        "expr": "flowchartContinueBranch([10, -5, 20, -1, 5])",
        "expected": 35
      },
      {
        "expr": "flowchartContinueBranch([-2, -4])",
        "expected": 0
      },
      {
        "expr": "flowchartContinueBranch([1, 2, 3])",
        "expected": 6
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.7",
    "name": "flowchartEuclidGcd",
    "title": "Алгоритм Евкліда за блок-схемою",
    "level": "Середній рівень",
    "goal": "Реалізувати алгоритм пошуку НСД двох чисел за класичною блок-схемою: поки a !== b: якщо a > b, то a = a - b, інакше b = b - a. Повернути a.",
    "reqs": [
      "Вхідні дані a, b > 0. Використати цикл while (a !== b)."
    ],
    "hint": "while (a !== b) { if (a > b) a = a - b; else b = b - a; } return a;",
    "starterParams": "a, b",
    "starterBody": "return 1;",
    "solutionBody": "while (a !== b) { if (a > b) a = a - b; else b = b - a; } return a;",
    "tests": [
      {
        "expr": "flowchartEuclidGcd(48, 18)",
        "expected": 6
      },
      {
        "expr": "flowchartEuclidGcd(100, 25)",
        "expected": 25
      },
      {
        "expr": "flowchartEuclidGcd(13, 7)",
        "expected": 1
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.8",
    "name": "flowchartLinearSearch",
    "title": "Лінійний пошук за схемою алгоритму",
    "level": "Базовий рівень",
    "goal": "Змоделювати блок-схему лінійного пошуку: i = 0; поки i < length: якщо arr[i] === key повернути { found: true, index: i, steps: i + 1 }; інакше i++. Якщо вийшли з циклу: { found: false, index: -1, steps: arr.length }.",
    "reqs": [
      "Повернути повний звіт про пошук: { found, index, steps }."
    ],
    "hint": "let i = 0; while (i < arr.length) { if (arr[i] === key) return { found: true, index: i, steps: i + 1 }; i++; } return { found: false, index: -1, steps: arr.length };",
    "starterParams": "arr, key",
    "starterBody": "return { found: false, index: -1, steps: 0 };",
    "solutionBody": "let i = 0; while (i < arr.length) { if (arr[i] === key) return { found: true, index: i, steps: i + 1 }; i++; } return { found: false, index: -1, steps: arr.length };",
    "tests": [
      {
        "expr": "flowchartLinearSearch([10, 20, 30, 40], 30)",
        "expected": {
          "found": true,
          "index": 2,
          "steps": 3
        }
      },
      {
        "expr": "flowchartLinearSearch([10, 20], 99)",
        "expected": {
          "found": false,
          "index": -1,
          "steps": 2
        }
      },
      {
        "expr": "flowchartLinearSearch([], 5)",
        "expected": {
          "found": false,
          "index": -1,
          "steps": 0
        }
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.9",
    "name": "flowchartSumAccumulator",
    "title": "Блок-схема накопичувача суми",
    "level": "Початковий рівень",
    "goal": "Змоделювати блок накопичення: S = 0, i = 1. Поки i <= n: S = S + i, i = i + 1. Вивести S.",
    "reqs": [
      "Якщо n <= 0, повернути 0.",
      "Повернути підсумкове значення S."
    ],
    "hint": "let S = 0, i = 1; while (i <= n) { S += i; i++; } return S;",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "let S = 0, i = 1; while (i <= n) { S += i; i++; } return S;",
    "tests": [
      {
        "expr": "flowchartSumAccumulator(4)",
        "expected": 10
      },
      {
        "expr": "flowchartSumAccumulator(1)",
        "expected": 1
      },
      {
        "expr": "flowchartSumAccumulator(0)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.10",
    "name": "flowchartFactorial",
    "title": "Блок-схема обчислення факторіалу",
    "level": "Початковий рівень",
    "goal": "Реалізувати факторіал n! строго за блок-схемою: F = 1, i = 1; поки i <= n: F = F * i; i = i + 1; повернути F.",
    "reqs": [
      "Для n = 0 або 1 повернути 1."
    ],
    "hint": "let F = 1, i = 1; while (i <= n) { F *= i; i++; } return F;",
    "starterParams": "n",
    "starterBody": "return 1;",
    "solutionBody": "let F = 1, i = 1; while (i <= n) { F *= i; i++; } return F;",
    "tests": [
      {
        "expr": "flowchartFactorial(5)",
        "expected": 120
      },
      {
        "expr": "flowchartFactorial(0)",
        "expected": 1
      },
      {
        "expr": "flowchartFactorial(3)",
        "expected": 6
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.11",
    "name": "flowchartPrimeCheck",
    "title": "Блок-схема перевірки простого числа",
    "level": "Середній рівень",
    "goal": "Змоделювати алгоритм простого числа з блок-схеми: якщо n < 2 -> false. d = 2. Поки d * d <= n: якщо n % d === 0 -> false; d++. Якщо цикл завершився -> true.",
    "reqs": [
      "Повернути boolean."
    ],
    "hint": "if (n < 2) return false; let d = 2; while (d * d <= n) { if (n % d === 0) return false; d++; } return true;",
    "starterParams": "n",
    "starterBody": "return false;",
    "solutionBody": "if (n < 2) return false; let d = 2; while (d * d <= n) { if (n % d === 0) return false; d++; } return true;",
    "tests": [
      {
        "expr": "flowchartPrimeCheck(17)",
        "expected": true
      },
      {
        "expr": "flowchartPrimeCheck(18)",
        "expected": false
      },
      {
        "expr": "flowchartPrimeCheck(1)",
        "expected": false
      },
      {
        "expr": "flowchartPrimeCheck(2)",
        "expected": true
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.12",
    "name": "flowchartArrayMax",
    "title": "Блок-схема пошуку максимуму в масиві",
    "level": "Базовий рівень",
    "goal": "Блок-схема: якщо довжина 0 -> null. max = arr[0], i = 1. Поки i < arr.length: якщо arr[i] > max то max = arr[i]; i++. Повернути max.",
    "reqs": [
      "Повернути максимальний елемент або null для []"
    ],
    "hint": "if (arr.length === 0) return null; let max = arr[0]; for (let i = 1; i < arr.length; i++) { if (arr[i] > max) max = arr[i]; } return max;",
    "starterParams": "arr",
    "starterBody": "return null;",
    "solutionBody": "if (arr.length === 0) return null; let max = arr[0]; for (let i = 1; i < arr.length; i++) { if (arr[i] > max) max = arr[i]; } return max;",
    "tests": [
      {
        "expr": "flowchartArrayMax([3, 7, 2, 9, 4])",
        "expected": 9
      },
      {
        "expr": "flowchartArrayMax([-10, -5, -20])",
        "expected": -5
      },
      {
        "expr": "flowchartArrayMax([])",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.13",
    "name": "flowchartBinarySearchTrace",
    "title": "Блок-схема бінарного пошуку з журналом",
    "level": "Середній рівень",
    "goal": "Змоделювати блок-схему бінарного пошуку з фіксацією перевірених серединних індексів mid.",
    "reqs": [
      "Вхідний масив відсортований. Поки low <= high: mid = Math.floor((low+high)/2); зберегти mid у trace. Якщо arr[mid] === target -> успіх.",
      "Повернути { found: boolean, trace: number[] }."
    ],
    "hint": "let low = 0, high = arr.length - 1; const trace = []; while (low <= high) { const mid = Math.floor((low + high) / 2); trace.push(mid); if (arr[mid] === target) return { found: true, trace }; if (arr[mid] < target) low = mid + 1; else high = mid - 1; } return { found: false, trace };",
    "starterParams": "arr, target",
    "starterBody": "return { found: false, trace: [] };",
    "solutionBody": "let low = 0, high = arr.length - 1; const trace = []; while (low <= high) { const mid = Math.floor((low + high) / 2); trace.push(mid); if (arr[mid] === target) return { found: true, trace }; if (arr[mid] < target) low = mid + 1; else high = mid - 1; } return { found: false, trace };",
    "tests": [
      {
        "expr": "flowchartBinarySearchTrace([10, 20, 30, 40, 50, 60, 70], 40)",
        "expected": {
          "found": true,
          "trace": [
            3
          ]
        }
      },
      {
        "expr": "flowchartBinarySearchTrace([10, 20, 30, 40, 50, 60, 70], 60)",
        "expected": {
          "found": true,
          "trace": [
            3,
            5
          ]
        }
      },
      {
        "expr": "flowchartBinarySearchTrace([1, 2, 3], 99)",
        "expected": {
          "found": false,
          "trace": [
            1,
            2
          ]
        }
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.14",
    "name": "flowchartCountMatches",
    "title": "Блок-схема лічильника відповідностей",
    "level": "Початковий рівень",
    "goal": "Блок-схема підрахунку елементів, більших за поріг: count = 0, i = 0. Поки i < arr.length: якщо arr[i] > threshold -> count = count + 1; i = i + 1. Повернути count.",
    "reqs": [
      "Повернути кількість знайдених збігів."
    ],
    "hint": "let count = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] > threshold) count++; } return count;",
    "starterParams": "arr, threshold",
    "starterBody": "return 0;",
    "solutionBody": "let count = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] > threshold) count++; } return count;",
    "tests": [
      {
        "expr": "flowchartCountMatches([5, 12, 8, 20, 3], 10)",
        "expected": 2
      },
      {
        "expr": "flowchartCountMatches([1, 2, 3], 10)",
        "expected": 0
      },
      {
        "expr": "flowchartCountMatches([15, 25], 5)",
        "expected": 2
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.15",
    "name": "flowchartDigitReversal",
    "title": "Блок-схема реверсу числа через розряди",
    "level": "Базовий рівень",
    "goal": "Блок-схема розбиття числа: rev = 0, num = n. Поки num > 0: digit = num % 10; rev = rev * 10 + digit; num = Math.floor(num / 10). Повернути rev.",
    "reqs": [
      "Працювати з додатними цілими числами."
    ],
    "hint": "let rev = 0, num = n; while (num > 0) { const digit = num % 10; rev = rev * 10 + digit; num = Math.floor(num / 10); } return rev;",
    "starterParams": "n",
    "starterBody": "return 0;",
    "solutionBody": "let rev = 0, num = n; while (num > 0) { const digit = num % 10; rev = rev * 10 + digit; num = Math.floor(num / 10); } return rev;",
    "tests": [
      {
        "expr": "flowchartDigitReversal(1234)",
        "expected": 4321
      },
      {
        "expr": "flowchartDigitReversal(9050)",
        "expected": 509
      },
      {
        "expr": "flowchartDigitReversal(7)",
        "expected": 7
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.16",
    "name": "flowchartMinPositive",
    "title": "Блок-схема пошуку мінімального додатного числа",
    "level": "Базовий рівень",
    "goal": "Схема: minPos = null. Для кожного x в arr: якщо x > 0: якщо minPos === null або x < minPos то minPos = x. Повернути minPos.",
    "reqs": [
      "Якщо додатних чисел немає, повернути null."
    ],
    "hint": "let minPos = null; for (let i = 0; i < arr.length; i++) { if (arr[i] > 0) { if (minPos === null || arr[i] < minPos) minPos = arr[i]; } } return minPos;",
    "starterParams": "arr",
    "starterBody": "return null;",
    "solutionBody": "let minPos = null; for (let i = 0; i < arr.length; i++) { if (arr[i] > 0) { if (minPos === null || arr[i] < minPos) minPos = arr[i]; } } return minPos;",
    "tests": [
      {
        "expr": "flowchartMinPositive([-5, 12, 3, -1, 7])",
        "expected": 3
      },
      {
        "expr": "flowchartMinPositive([-1, -10])",
        "expected": null
      },
      {
        "expr": "flowchartMinPositive([4, 1, 9])",
        "expected": 1
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.17",
    "name": "flowchartRunningAverage",
    "title": "Блок-схема обчислення змінного середнього",
    "level": "Середній рівень",
    "goal": "На кожному кроці циклу оновлювати суму та повертати середнє значення на даний момент: sum += arr[i]; averages.push(Number((sum / (i + 1)).toFixed(2))).",
    "reqs": [
      "Повернути масив середніх значень з округленням до 2 знаків."
    ],
    "hint": "const averages = []; let sum = 0; for (let i = 0; i < arr.length; i++) { sum += arr[i]; averages.push(Number((sum / (i + 1)).toFixed(2))); } return averages;",
    "starterParams": "arr",
    "starterBody": "return [];",
    "solutionBody": "const averages = []; let sum = 0; for (let i = 0; i < arr.length; i++) { sum += arr[i]; averages.push(Number((sum / (i + 1)).toFixed(2))); } return averages;",
    "tests": [
      {
        "expr": "flowchartRunningAverage([10, 20, 30])",
        "expected": [
          10,
          15,
          20
        ]
      },
      {
        "expr": "flowchartRunningAverage([5, 10, 15, 20])",
        "expected": [
          5,
          7.5,
          10,
          12.5
        ]
      },
      {
        "expr": "flowchartRunningAverage([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.18",
    "name": "flowchartNestedGridTrace",
    "title": "Блок-схема двох вкладених шестикутників",
    "level": "Базовий рівень",
    "goal": "Змоделювати вкладений блок: Зовнішній блок: row від 0 до rows - 1; Внутрішній блок: col від 0 до cols - 1. Сформувати масив координат `\"${row}:${col}\"`.",
    "reqs": [
      "Повернути одновимірний масив координат у порядку обходу."
    ],
    "hint": "const trace = []; for (let r = 0; r < rows; r++) { for (let c = 0; c < cols; c++) { trace.push(`${r}:${c}`); } } return trace;",
    "starterParams": "rows, cols",
    "starterBody": "return [];",
    "solutionBody": "const trace = []; for (let r = 0; r < rows; r++) { for (let c = 0; c < cols; c++) { trace.push(`${r}:${c}`); } } return trace;",
    "tests": [
      {
        "expr": "flowchartNestedGridTrace(2, 2)",
        "expected": [
          "0:0",
          "0:1",
          "1:0",
          "1:1"
        ]
      },
      {
        "expr": "flowchartNestedGridTrace(1, 3)",
        "expected": [
          "0:0",
          "0:1",
          "0:2"
        ]
      },
      {
        "expr": "flowchartNestedGridTrace(0, 2)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.19",
    "name": "flowchartStringCompress",
    "title": "Блок-схема Run-Length стиснення рядка",
    "level": "Середній рівень",
    "goal": "Схема: i = 0, res = \"\". Поки i < str.length: char = str[i], count = 1. Поки i + 1 < str.length && str[i+1] === char: count++, i++. res += char + count; i++. Повернути res.",
    "reqs": [
      "Наприклад \"aaabbc\" -> \"a3b2c1\". Для порожнього рядка повернути \"\"."
    ],
    "hint": "if (!str) return \"\"; let res = \"\"; let i = 0; while (i < str.length) { const char = str[i]; let count = 1; while (i + 1 < str.length && str[i + 1] === char) { count++; i++; } res += char + count; i++; } return res;",
    "starterParams": "str",
    "starterBody": "return \"\";",
    "solutionBody": "if (!str) return \"\"; let res = \"\"; let i = 0; while (i < str.length) { const char = str[i]; let count = 1; while (i + 1 < str.length && str[i + 1] === char) { count++; i++; } res += char + count; i++; } return res;",
    "tests": [
      {
        "expr": "flowchartStringCompress(\"aaabbc\")",
        "expected": "a3b2c1"
      },
      {
        "expr": "flowchartStringCompress(\"abcd\")",
        "expected": "a1b1c1d1"
      },
      {
        "expr": "flowchartStringCompress(\"\")",
        "expected": ""
      }
    ]
  },
  {
    "moduleIdx": 5,
    "id": "5.20",
    "name": "flowchartWatchdogSafeLoop",
    "title": "Блок-схема циклу із запобіжником Watchdog",
    "level": "Середній рівень",
    "goal": "Блок-схема з лічильником запобіжника: ticks = 0. Поки value > 1: якщо ticks >= maxTicks -> повернути { safeExit: false, value, ticks }. Якщо value % 2 === 0 то value /= 2, інакше value = value * 3 + 1; ticks++. Повернути { safeExit: true, value, ticks }.",
    "reqs": [
      "Захищає від зависання алгоритму Коллатца при перевищенні maxTicks."
    ],
    "hint": "let ticks = 0; while (value > 1) { if (ticks >= maxTicks) return { safeExit: false, value, ticks }; if (value % 2 === 0) value /= 2; else value = value * 3 + 1; ticks++; } return { safeExit: true, value, ticks };",
    "starterParams": "value, maxTicks",
    "starterBody": "return { safeExit: false, value: 0, ticks: 0 };",
    "solutionBody": "let ticks = 0; while (value > 1) { if (ticks >= maxTicks) return { safeExit: false, value, ticks }; if (value % 2 === 0) value /= 2; else value = value * 3 + 1; ticks++; } return { safeExit: true, value, ticks };",
    "tests": [
      {
        "expr": "flowchartWatchdogSafeLoop(4, 10)",
        "expected": {
          "safeExit": true,
          "value": 1,
          "ticks": 2
        }
      },
      {
        "expr": "flowchartWatchdogSafeLoop(27, 5)",
        "expected": {
          "safeExit": false,
          "value": 31,
          "ticks": 5
        }
      },
      {
        "expr": "flowchartWatchdogSafeLoop(1, 10)",
        "expected": {
          "safeExit": true,
          "value": 1,
          "ticks": 0
        }
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.1",
    "name": "matrixSum",
    "title": "Сума всіх елементів двовимірного масиву",
    "level": "Початковий рівень",
    "goal": "Обчислити загальну суму всіх чисел у матриці (масиві масивів) за допомогою двох вкладених циклів.",
    "reqs": [
      "Якщо матриця порожня або рядки порожні, повернути 0."
    ],
    "hint": "let sum = 0; for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) { sum += matrix[r][c]; } } return sum;",
    "starterParams": "matrix",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) { sum += matrix[r][c]; } } return sum;",
    "tests": [
      {
        "expr": "matrixSum([[1, 2], [3, 4]])",
        "expected": 10
      },
      {
        "expr": "matrixSum([[5, -5], [10, 0]])",
        "expected": 10
      },
      {
        "expr": "matrixSum([])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.2",
    "name": "multiplicationGrid",
    "title": "Таблиця множення n x n у вигляді матриці",
    "level": "Базовий рівень",
    "goal": "Створити таблицю множення розміром n x n як двовимірний масив, де комірка [i][j] = (i + 1) * (j + 1).",
    "reqs": [
      "Для n <= 0 повернути []."
    ],
    "hint": "const grid = []; for (let i = 1; i <= n; i++) { const row = []; for (let j = 1; j <= n; j++) { row.push(i * j); } grid.push(row); } return grid;",
    "starterParams": "n",
    "starterBody": "return [];",
    "solutionBody": "const grid = []; for (let i = 1; i <= n; i++) { const row = []; for (let j = 1; j <= n; j++) { row.push(i * j); } grid.push(row); } return grid;",
    "tests": [
      {
        "expr": "multiplicationGrid(3)",
        "expected": [
          [
            1,
            2,
            3
          ],
          [
            2,
            4,
            6
          ],
          [
            3,
            6,
            9
          ]
        ]
      },
      {
        "expr": "multiplicationGrid(1)",
        "expected": [
          [
            1
          ]
        ]
      },
      {
        "expr": "multiplicationGrid(0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.3",
    "name": "printPatternTriangle",
    "title": "Прямокутний трикутник із зірочок",
    "level": "Початковий рівень",
    "goal": "Згенерувати масив рядків із зірочок висотою n: перший рядок \"*\", другий \"**\", ..., n-й рядок n зірочок.",
    "reqs": [
      "Використати вкладені цикли або цикл із накопиченням.",
      "Для n <= 0 повернути []."
    ],
    "hint": "const lines = []; for (let i = 1; i <= n; i++) { let line = \"\"; for (let j = 1; j <= i; j++) { line += \"*\"; } lines.push(line); } return lines;",
    "starterParams": "n",
    "starterBody": "return [];",
    "solutionBody": "const lines = []; for (let i = 1; i <= n; i++) { let line = \"\"; for (let j = 1; j <= i; j++) { line += \"*\"; } lines.push(line); } return lines;",
    "tests": [
      {
        "expr": "printPatternTriangle(3)",
        "expected": [
          "*",
          "**",
          "***"
        ]
      },
      {
        "expr": "printPatternTriangle(1)",
        "expected": [
          "*"
        ]
      },
      {
        "expr": "printPatternTriangle(0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.4",
    "name": "invertedTriangle",
    "title": "Перевернутий трикутник із зірочок",
    "level": "Базовий рівень",
    "goal": "Згенерувати масив рядків довжиною від n до 1 зірочки: для n=3 -> [\"***\", \"**\", \"*\"].",
    "reqs": [
      "Для n <= 0 повернути []."
    ],
    "hint": "const lines = []; for (let i = n; i >= 1; i--) { let line = \"\"; for (let j = 0; j < i; j++) line += \"*\"; lines.push(line); } return lines;",
    "starterParams": "n",
    "starterBody": "return [];",
    "solutionBody": "const lines = []; for (let i = n; i >= 1; i--) { let line = \"\"; for (let j = 0; j < i; j++) line += \"*\"; lines.push(line); } return lines;",
    "tests": [
      {
        "expr": "invertedTriangle(3)",
        "expected": [
          "***",
          "**",
          "*"
        ]
      },
      {
        "expr": "invertedTriangle(2)",
        "expected": [
          "**",
          "*"
        ]
      },
      {
        "expr": "invertedTriangle(0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.5",
    "name": "matrixTranspose",
    "title": "Транспонування матриці",
    "level": "Середній рівень",
    "goal": "Транспонувати прямокутну матрицю matrix розміром R x C у матрицю розміром C x R (перетворити рядки на стовпчики).",
    "reqs": [
      "Якщо матриця порожня, повернути []."
    ],
    "hint": "if (!matrix.length || !matrix[0].length) return []; const res = []; for (let c = 0; c < matrix[0].length; c++) { const col = []; for (let r = 0; r < matrix.length; r++) { col.push(matrix[r][c]); } res.push(col); } return res;",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "solutionBody": "if (!matrix.length || !matrix[0].length) return []; const res = []; for (let c = 0; c < matrix[0].length; c++) { const col = []; for (let r = 0; r < matrix.length; r++) { col.push(matrix[r][c]); } res.push(col); } return res;",
    "tests": [
      {
        "expr": "matrixTranspose([[1, 2, 3], [4, 5, 6]])",
        "expected": [
          [
            1,
            4
          ],
          [
            2,
            5
          ],
          [
            3,
            6
          ]
        ]
      },
      {
        "expr": "matrixTranspose([[1, 2], [3, 4]])",
        "expected": [
          [
            1,
            3
          ],
          [
            2,
            4
          ]
        ]
      },
      {
        "expr": "matrixTranspose([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.6",
    "name": "chessboardPattern",
    "title": "Шахівниця size x size",
    "level": "Базовий рівень",
    "goal": "Створити шахівницю розміром size x size у вигляді масиву рядків, де комірка (r, c) містить \"#\" якщо (r + c) парне, і \" \" (пробіл) якщо непарне.",
    "reqs": [
      "Для size <= 0 повернути []."
    ],
    "hint": "const board = []; for (let r = 0; r < size; r++) { let row = \"\"; for (let c = 0; c < size; c++) { row += (r + c) % 2 === 0 ? \"#\" : \" \"; } board.push(row); } return board;",
    "starterParams": "size",
    "starterBody": "return [];",
    "solutionBody": "const board = []; for (let r = 0; r < size; r++) { let row = \"\"; for (let c = 0; c < size; c++) { row += (r + c) % 2 === 0 ? \"#\" : \" \"; } board.push(row); } return board;",
    "tests": [
      {
        "expr": "chessboardPattern(2)",
        "expected": [
          "# ",
          " #"
        ]
      },
      {
        "expr": "chessboardPattern(3)",
        "expected": [
          "# #",
          " # ",
          "# #"
        ]
      },
      {
        "expr": "chessboardPattern(0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.7",
    "name": "cartesianProduct",
    "title": "Декартів добуток двох масивів",
    "level": "Базовий рівень",
    "goal": "Сформувати всі можливі пари [a, b], де a належить arr1, а b належить arr2, за допомогою двох вкладених циклів.",
    "reqs": [
      "Повернути масив пар. Якщо хоча б один масив порожній, повернути []."
    ],
    "hint": "const pairs = []; for (let i = 0; i < arr1.length; i++) { for (let j = 0; j < arr2.length; j++) { pairs.push([arr1[i], arr2[j]]); } } return pairs;",
    "starterParams": "arr1, arr2",
    "starterBody": "return [];",
    "solutionBody": "const pairs = []; for (let i = 0; i < arr1.length; i++) { for (let j = 0; j < arr2.length; j++) { pairs.push([arr1[i], arr2[j]]); } } return pairs;",
    "tests": [
      {
        "expr": "cartesianProduct([\"a\", \"b\"], [1, 2])",
        "expected": [
          [
            "a",
            1
          ],
          [
            "a",
            2
          ],
          [
            "b",
            1
          ],
          [
            "b",
            2
          ]
        ]
      },
      {
        "expr": "cartesianProduct([1], [\"x\"])",
        "expected": [
          [
            1,
            "x"
          ]
        ]
      },
      {
        "expr": "cartesianProduct([], [1, 2])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.8",
    "name": "findPairWithSum",
    "title": "Пошук пари чисел із цільовою сумою",
    "level": "Базовий рівень",
    "goal": "Знайти першу пару [arr[i], arr[j]] (де i < j), сума яких дорівнює targetSum. Використати два вкладені цикли.",
    "reqs": [
      "Якщо пари немає, повернути null."
    ],
    "hint": "for (let i = 0; i < arr.length; i++) { for (let j = i + 1; j < arr.length; j++) { if (arr[i] + arr[j] === targetSum) return [arr[i], arr[j]]; } } return null;",
    "starterParams": "arr, targetSum",
    "starterBody": "return null;",
    "solutionBody": "for (let i = 0; i < arr.length; i++) { for (let j = i + 1; j < arr.length; j++) { if (arr[i] + arr[j] === targetSum) return [arr[i], arr[j]]; } } return null;",
    "tests": [
      {
        "expr": "findPairWithSum([2, 7, 11, 15], 9)",
        "expected": [
          2,
          7
        ]
      },
      {
        "expr": "findPairWithSum([1, 2, 3, 4], 10)",
        "expected": null
      },
      {
        "expr": "findPairWithSum([5, 5], 10)",
        "expected": [
          5,
          5
        ]
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.9",
    "name": "flattenDeep2D",
    "title": "Сплющення 2D масиву без Array.prototype.flat",
    "level": "Початковий рівень",
    "goal": "Перетворити матрицю (масив масивів) на одновимірний масив за допомогою вкладених циклів.",
    "reqs": [
      "Повернути плаский масив усіх значень."
    ],
    "hint": "const flat = []; for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) { flat.push(matrix[r][c]); } } return flat;",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "solutionBody": "const flat = []; for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) { flat.push(matrix[r][c]); } } return flat;",
    "tests": [
      {
        "expr": "flattenDeep2D([[1, 2], [3, 4], [5]])",
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "expr": "flattenDeep2D([[], [1]])",
        "expected": [
          1
        ]
      },
      {
        "expr": "flattenDeep2D([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.10",
    "name": "countSubstrings",
    "title": "Підрахунок входжень підрядка через вкладені цикли",
    "level": "Середній рівень",
    "goal": "Підрахувати скільки разів підрядок sub зустрічається в рядку str, порівнюючи символи посимвольно за допомогою вкладених циклів.",
    "reqs": [
      "Якщо sub порожній або довший за str, повернути 0."
    ],
    "hint": "if (!sub || sub.length > str.length) return 0; let count = 0; for (let i = 0; i <= str.length - sub.length; i++) { let match = true; for (let j = 0; j < sub.length; j++) { if (str[i + j] !== sub[j]) { match = false; break; } } if (match) count++; } return count;",
    "starterParams": "str, sub",
    "starterBody": "return 0;",
    "solutionBody": "if (!sub || sub.length > str.length) return 0; let count = 0; for (let i = 0; i <= str.length - sub.length; i++) { let match = true; for (let j = 0; j < sub.length; j++) { if (str[i + j] !== sub[j]) { match = false; break; } } if (match) count++; } return count;",
    "tests": [
      {
        "expr": "countSubstrings(\"banana\", \"an\")",
        "expected": 2
      },
      {
        "expr": "countSubstrings(\"aaaa\", \"aa\")",
        "expected": 3
      },
      {
        "expr": "countSubstrings(\"hello\", \"world\")",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.11",
    "name": "identityMatrix",
    "title": "Одинична матриця розміром n x n",
    "level": "Базовий рівень",
    "goal": "Створити квадратну матрицю n x n, де на головній діагоналі (r === c) стоять одиниці (1), а всі інші елементи — нулі (0).",
    "reqs": [
      "Для n <= 0 повернути []."
    ],
    "hint": "const res = []; for (let r = 0; r < n; r++) { const row = []; for (let c = 0; c < n; c++) { row.push(r === c ? 1 : 0); } res.push(row); } return res;",
    "starterParams": "n",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let r = 0; r < n; r++) { const row = []; for (let c = 0; c < n; c++) { row.push(r === c ? 1 : 0); } res.push(row); } return res;",
    "tests": [
      {
        "expr": "identityMatrix(3)",
        "expected": [
          [
            1,
            0,
            0
          ],
          [
            0,
            1,
            0
          ],
          [
            0,
            0,
            1
          ]
        ]
      },
      {
        "expr": "identityMatrix(1)",
        "expected": [
          [
            1
          ]
        ]
      },
      {
        "expr": "identityMatrix(0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.12",
    "name": "pascalTriangle",
    "title": "Трикутник Паскаля до numRows",
    "level": "Середній рівень",
    "goal": "Згенерувати перші numRows рядків трикутника Паскаля: кожен рядок починається і закінчується 1, а внутрішні елементи є сумою двох елементів над ними.",
    "reqs": [
      "Для numRows <= 0 повернути []."
    ],
    "hint": "const triangle = []; for (let i = 0; i < numRows; i++) { const row = [1]; for (let j = 1; j < i; j++) { row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]); } if (i > 0) row.push(1); triangle.push(row); } return triangle;",
    "starterParams": "numRows",
    "starterBody": "return [];",
    "solutionBody": "const triangle = []; for (let i = 0; i < numRows; i++) { const row = [1]; for (let j = 1; j < i; j++) { row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]); } if (i > 0) row.push(1); triangle.push(row); } return triangle;",
    "tests": [
      {
        "expr": "pascalTriangle(4)",
        "expected": [
          [
            1
          ],
          [
            1,
            1
          ],
          [
            1,
            2,
            1
          ],
          [
            1,
            3,
            3,
            1
          ]
        ]
      },
      {
        "expr": "pascalTriangle(1)",
        "expected": [
          [
            1
          ]
        ]
      },
      {
        "expr": "pascalTriangle(0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.13",
    "name": "matrixRowMaxValues",
    "title": "Максимум у кожному рядку матриці",
    "level": "Базовий рівень",
    "goal": "Для кожного рядка матриці знайти максимальне значення та повернути їх у вигляді одного масиву.",
    "reqs": [
      "Якщо рядок порожній, пропустити або повернути []."
    ],
    "hint": "const res = []; for (let r = 0; r < matrix.length; r++) { if (matrix[r].length === 0) continue; let max = matrix[r][0]; for (let c = 1; c < matrix[r].length; c++) { if (matrix[r][c] > max) max = matrix[r][c]; } res.push(max); } return res;",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let r = 0; r < matrix.length; r++) { if (matrix[r].length === 0) continue; let max = matrix[r][0]; for (let c = 1; c < matrix[r].length; c++) { if (matrix[r][c] > max) max = matrix[r][c]; } res.push(max); } return res;",
    "tests": [
      {
        "expr": "matrixRowMaxValues([[1, 5, 2], [9, 3, 8], [4, 4, 4]])",
        "expected": [
          5,
          9,
          4
        ]
      },
      {
        "expr": "matrixRowMaxValues([[-1, -10], [0, 5]])",
        "expected": [
          -1,
          5
        ]
      },
      {
        "expr": "matrixRowMaxValues([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.14",
    "name": "matrixMainDiagonalSum",
    "title": "Сума елементів головної діагоналі",
    "level": "Базовий рівень",
    "goal": "Обчислити суму елементів квадратної матриці, розташованих на головній діагоналі (де індекс рядка дорівнює індексу стовпчика matrix[i][i]).",
    "reqs": [
      "Для порожньої матриці повернути 0."
    ],
    "hint": "let sum = 0; for (let i = 0; i < matrix.length; i++) { if (matrix[i] && matrix[i][i] !== undefined) sum += matrix[i][i]; } return sum;",
    "starterParams": "matrix",
    "starterBody": "return 0;",
    "solutionBody": "let sum = 0; for (let i = 0; i < matrix.length; i++) { if (matrix[i] && matrix[i][i] !== undefined) sum += matrix[i][i]; } return sum;",
    "tests": [
      {
        "expr": "matrixMainDiagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])",
        "expected": 15
      },
      {
        "expr": "matrixMainDiagonalSum([[4, 2], [1, 6]])",
        "expected": 10
      },
      {
        "expr": "matrixMainDiagonalSum([])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.15",
    "name": "matrixSecondaryDiagonalSum",
    "title": "Сума побічної діагоналі матриці",
    "level": "Базовий рівень",
    "goal": "Обчислити суму елементів квадратної матриці n x n на побічній діагоналі: елементи matrix[i][n - 1 - i].",
    "reqs": [
      "Для порожньої матриці повернути 0."
    ],
    "hint": "const n = matrix.length; let sum = 0; for (let i = 0; i < n; i++) { sum += matrix[i][n - 1 - i]; } return sum;",
    "starterParams": "matrix",
    "starterBody": "return 0;",
    "solutionBody": "const n = matrix.length; let sum = 0; for (let i = 0; i < n; i++) { sum += matrix[i][n - 1 - i]; } return sum;",
    "tests": [
      {
        "expr": "matrixSecondaryDiagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])",
        "expected": 15
      },
      {
        "expr": "matrixSecondaryDiagonalSum([[1, 2], [3, 4]])",
        "expected": 5
      },
      {
        "expr": "matrixSecondaryDiagonalSum([])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.16",
    "name": "bubbleSortStepByStep",
    "title": "Сортування бульбашкою (Bubble Sort)",
    "level": "Середній рівень",
    "goal": "Реалізувати класичне сортування бульбашкою за допомогою двох вкладених циклів for. Повернути новий відсортований за зростанням масив.",
    "reqs": [
      "Не мутувати вхідний масив (створити копію)."
    ],
    "hint": "const arr = [...numbers]; for (let i = 0; i < arr.length - 1; i++) { for (let j = 0; j < arr.length - 1 - i; j++) { if (arr[j] > arr[j + 1]) { const temp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = temp; } } } return arr;",
    "starterParams": "numbers",
    "starterBody": "return [];",
    "solutionBody": "const arr = [...numbers]; for (let i = 0; i < arr.length - 1; i++) { for (let j = 0; j < arr.length - 1 - i; j++) { if (arr[j] > arr[j + 1]) { const temp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = temp; } } } return arr;",
    "tests": [
      {
        "expr": "bubbleSortStepByStep([5, 2, 9, 1, 5, 6])",
        "expected": [
          1,
          2,
          5,
          5,
          6,
          9
        ]
      },
      {
        "expr": "bubbleSortStepByStep([3, 1])",
        "expected": [
          1,
          3
        ]
      },
      {
        "expr": "bubbleSortStepByStep([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.17",
    "name": "allSubarrays",
    "title": "Генерація всіх неперервних підмасивів",
    "level": "Середній рівень",
    "goal": "Згенерувати всі можливі неперервні підмасиви для заданого масиву arr за допомогою двох вкладених циклів (початок start і кінець end).",
    "reqs": [
      "Для [1, 2] -> [[1], [1, 2], [2]]."
    ],
    "hint": "const res = []; for (let start = 0; start < arr.length; start++) { for (let end = start + 1; end <= arr.length; end++) { res.push(arr.slice(start, end)); } } return res;",
    "starterParams": "arr",
    "starterBody": "return [];",
    "solutionBody": "const res = []; for (let start = 0; start < arr.length; start++) { for (let end = start + 1; end <= arr.length; end++) { res.push(arr.slice(start, end)); } } return res;",
    "tests": [
      {
        "expr": "allSubarrays([1, 2])",
        "expected": [
          [
            1
          ],
          [
            1,
            2
          ],
          [
            2
          ]
        ]
      },
      {
        "expr": "allSubarrays([\"a\"])",
        "expected": [
          [
            "a"
          ]
        ]
      },
      {
        "expr": "allSubarrays([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.18",
    "name": "findDuplicatesNested",
    "title": "Пошук дублікатів без використання Set",
    "level": "Середній рівень",
    "goal": "Знайти всі унікальні елементи, які зустрічаються в масиві більше одного разу, використовуючи два вкладені цикли перевірки.",
    "reqs": [
      "Повернути масив дублікатів без повторів. Порядок появи."
    ],
    "hint": "const duplicates = []; for (let i = 0; i < arr.length; i++) { for (let j = i + 1; j < arr.length; j++) { if (arr[i] === arr[j] && !duplicates.includes(arr[i])) { duplicates.push(arr[i]); } } } return duplicates;",
    "starterParams": "arr",
    "starterBody": "return [];",
    "solutionBody": "const duplicates = []; for (let i = 0; i < arr.length; i++) { for (let j = i + 1; j < arr.length; j++) { if (arr[i] === arr[j] && !duplicates.includes(arr[i])) { duplicates.push(arr[i]); } } } return duplicates;",
    "tests": [
      {
        "expr": "findDuplicatesNested([1, 2, 3, 2, 4, 1, 5])",
        "expected": [
          1,
          2
        ]
      },
      {
        "expr": "findDuplicatesNested([1, 2, 3])",
        "expected": []
      },
      {
        "expr": "findDuplicatesNested([\"x\", \"x\", \"x\"])",
        "expected": [
          "x"
        ]
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.19",
    "name": "pyramidPattern",
    "title": "Центрована піраміда з зірочок",
    "level": "Середній рівень",
    "goal": "Згенерувати симетричну піраміду висотою n. Кожен рядок має відступи пробілами зліва, щоб зірочки формували трикутник: рядок i містить (n - i) пробілів і (2*i - 1) зірочок.",
    "reqs": [
      "Для n=3 -> [\"  *\", \" *** \", \"*****\"]. (Пробіли справа за бажанням або симетрично, головне точний рядок \"  *\", \" ***\", \"*****\" без зайвих пробілів справа). Формат: \" \".repeat(n - i) + \"*\".repeat(2 * i - 1)."
    ],
    "hint": "const lines = []; for (let i = 1; i <= n; i++) { const spaces = \" \".repeat(n - i); const stars = \"*\".repeat(2 * i - 1); lines.push(spaces + stars); } return lines;",
    "starterParams": "n",
    "starterBody": "return [];",
    "solutionBody": "const lines = []; for (let i = 1; i <= n; i++) { const spaces = \" \".repeat(n - i); const stars = \"*\".repeat(2 * i - 1); lines.push(spaces + stars); } return lines;",
    "tests": [
      {
        "expr": "pyramidPattern(3)",
        "expected": [
          "  *",
          " ***",
          "*****"
        ]
      },
      {
        "expr": "pyramidPattern(1)",
        "expected": [
          "*"
        ]
      },
      {
        "expr": "pyramidPattern(0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.20",
    "name": "matrixMultiply",
    "title": "Множення двох матриць (потрійний вкладений цикл)",
    "level": "Високий рівень",
    "goal": "Помножити матрицю A (розміром R1 x C1) на матрицю B (розміром C1 x C2). Елемент C[i][j] дорівнює сумі A[i][k] * B[k][j] для k від 0 до C1 - 1.",
    "reqs": [
      "Якщо матриці неможливо помножити (C1 !== R2), повернути null."
    ],
    "hint": "if (!A.length || !B.length || A[0].length !== B.length) return null; const R1 = A.length, C1 = A[0].length, C2 = B[0].length; const result = []; for (let i = 0; i < R1; i++) { const row = []; for (let j = 0; j < C2; j++) { let cellSum = 0; for (let k = 0; k < C1; k++) { cellSum += A[i][k] * B[k][j]; } row.push(cellSum); } result.push(row); } return result;",
    "starterParams": "A, B",
    "starterBody": "return null;",
    "solutionBody": "if (!A.length || !B.length || A[0].length !== B.length) return null; const R1 = A.length, C1 = A[0].length, C2 = B[0].length; const result = []; for (let i = 0; i < R1; i++) { const row = []; for (let j = 0; j < C2; j++) { let cellSum = 0; for (let k = 0; k < C1; k++) { cellSum += A[i][k] * B[k][j]; } row.push(cellSum); } result.push(row); } return result;",
    "tests": [
      {
        "expr": "matrixMultiply([[1, 2], [3, 4]], [[2, 0], [1, 2]])",
        "expected": [
          [
            4,
            4
          ],
          [
            10,
            8
          ]
        ]
      },
      {
        "expr": "matrixMultiply([[1, 2]], [[3], [4]])",
        "expected": [
          [
            11
          ]
        ]
      },
      {
        "expr": "matrixMultiply([[1, 2]], [[1, 2]])",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.21",
    "name": "saddlePointMatrix",
    "title": "Сідлова точка матриці",
    "level": "Високий рівень",
    "goal": "Знайти сідлову точку в матриці: елемент, який є мінімальним у своєму рядку і максимальним у своєму стовпчику. Повернути { row, col, value } або null, якщо такої немає.",
    "reqs": [
      "Використати вкладені цикли перевірки."
    ],
    "hint": "for (let r = 0; r < matrix.length; r++) { let minCol = 0; for (let c = 1; c < matrix[r].length; c++) { if (matrix[r][c] < matrix[r][minCol]) minCol = c; } const minVal = matrix[r][minCol]; let isSaddle = true; for (let k = 0; k < matrix.length; k++) { if (matrix[k][minCol] > minVal) { isSaddle = false; break; } } if (isSaddle) return { row: r, col: minCol, value: minVal }; } return null;",
    "starterParams": "matrix",
    "starterBody": "return null;",
    "solutionBody": "for (let r = 0; r < matrix.length; r++) { let minCol = 0; for (let c = 1; c < matrix[r].length; c++) { if (matrix[r][c] < matrix[r][minCol]) minCol = c; } const minVal = matrix[r][minCol]; let isSaddle = true; for (let k = 0; k < matrix.length; k++) { if (matrix[k][minCol] > minVal) { isSaddle = false; break; } } if (isSaddle) return { row: r, col: minCol, value: minVal }; } return null;",
    "tests": [
      {
        "expr": "saddlePointMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])",
        "expected": {
          "row": 2,
          "col": 0,
          "value": 7
        }
      },
      {
        "expr": "saddlePointMatrix([[3, 8], [4, 7]])",
        "expected": {
          "row": 1,
          "col": 0,
          "value": 4
        }
      },
      {
        "expr": "saddlePointMatrix([])",
        "expected": null
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.22",
    "name": "countInversions",
    "title": "Підрахунок інверсій у масиві",
    "level": "Середній рівень",
    "goal": "Підрахувати кількість пар індексів (i, j), де i < j та arr[i] > arr[j] (міра невідсортованості масиву).",
    "reqs": [
      "Використати два вкладені цикли."
    ],
    "hint": "let count = 0; for (let i = 0; i < arr.length; i++) { for (let j = i + 1; j < arr.length; j++) { if (arr[i] > arr[j]) count++; } } return count;",
    "starterParams": "arr",
    "starterBody": "return 0;",
    "solutionBody": "let count = 0; for (let i = 0; i < arr.length; i++) { for (let j = i + 1; j < arr.length; j++) { if (arr[i] > arr[j]) count++; } } return count;",
    "tests": [
      {
        "expr": "countInversions([2, 4, 1, 3, 5])",
        "expected": 3
      },
      {
        "expr": "countInversions([1, 2, 3])",
        "expected": 0
      },
      {
        "expr": "countInversions([3, 2, 1])",
        "expected": 3
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.23",
    "name": "crossWordSearchHorizontalVertical",
    "title": "Пошук слова у сітці літер (по горизонталі та вертикалі)",
    "level": "Високий рівень",
    "goal": "Визначити, чи зустрічається задане word у квадратній/прямокутній сітці grid (масив рядків) зліва-направо або зверху-вниз.",
    "reqs": [
      "Повернути boolean: true якщо знайдено, інакше false."
    ],
    "hint": "for (let r = 0; r < grid.length; r++) { if (grid[r].includes(word)) return true; } const cols = grid[0] ? grid[0].length : 0; for (let c = 0; c < cols; c++) { let colStr = \"\"; for (let r = 0; r < grid.length; r++) colStr += grid[r][c]; if (colStr.includes(word)) return true; } return false;",
    "starterParams": "grid, word",
    "starterBody": "return false;",
    "solutionBody": "for (let r = 0; r < grid.length; r++) { if (grid[r].includes(word)) return true; } const cols = grid[0] ? grid[0].length : 0; for (let c = 0; c < cols; c++) { let colStr = \"\"; for (let r = 0; r < grid.length; r++) colStr += grid[r][c]; if (colStr.includes(word)) return true; } return false;",
    "tests": [
      {
        "expr": "crossWordSearchHorizontalVertical([\"CAT\", \"DOG\", \"PIG\"], \"CAT\")",
        "expected": true
      },
      {
        "expr": "crossWordSearchHorizontalVertical([\"CDP\", \"AOI\", \"TGG\"], \"CAT\")",
        "expected": true
      },
      {
        "expr": "crossWordSearchHorizontalVertical([\"AAA\", \"BBB\"], \"XYZ\")",
        "expected": false
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.24",
    "name": "spiralMatrixOrder",
    "title": "Обхід матриці по спіралі",
    "level": "Boss-рівень",
    "goal": "Обійти матрицю R x C по спіралі (за годинниковою стрілкою) та повернути елементи у порядку обходу.",
    "reqs": [
      "Якщо матриця порожня, повернути []."
    ],
    "hint": "if (!matrix.length) return []; const res = []; let top = 0, bottom = matrix.length - 1; let left = 0, right = matrix[0].length - 1; while (top <= bottom && left <= right) { for (let c = left; c <= right; c++) res.push(matrix[top][c]); top++; for (let r = top; r <= bottom; r++) res.push(matrix[r][right]); right--; if (top <= bottom) { for (let c = right; c >= left; c--) res.push(matrix[bottom][c]); bottom--; } if (left <= right) { for (let r = bottom; r >= top; r--) res.push(matrix[r][left]); left++; } } return res;",
    "starterParams": "matrix",
    "starterBody": "return [];",
    "solutionBody": "if (!matrix.length) return []; const res = []; let top = 0, bottom = matrix.length - 1; let left = 0, right = matrix[0].length - 1; while (top <= bottom && left <= right) { for (let c = left; c <= right; c++) res.push(matrix[top][c]); top++; for (let r = top; r <= bottom; r++) res.push(matrix[r][right]); right--; if (top <= bottom) { for (let c = right; c >= left; c--) res.push(matrix[bottom][c]); bottom--; } if (left <= right) { for (let r = bottom; r >= top; r--) res.push(matrix[r][left]); left++; } } return res;",
    "tests": [
      {
        "expr": "spiralMatrixOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])",
        "expected": [
          1,
          2,
          3,
          6,
          9,
          8,
          7,
          4,
          5
        ]
      },
      {
        "expr": "spiralMatrixOrder([[1, 2], [3, 4]])",
        "expected": [
          1,
          2,
          4,
          3
        ]
      },
      {
        "expr": "spiralMatrixOrder([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 6,
    "id": "6.25",
    "name": "distinctTripletsSumZero",
    "title": "Трипліки чисел із сумою 0",
    "level": "Boss-рівень",
    "goal": "Знайти всі унікальні трипліки [nums[i], nums[j], nums[k]] (де i < j < k), сума яких дорівнює 0. Результат не повинен містити дублікатів однакових трійок чисел.",
    "reqs": [
      "Повернути масив відсортованих трійок."
    ],
    "hint": "const sorted = [...nums].sort((a, b) => a - b); const res = []; for (let i = 0; i < sorted.length - 2; i++) { if (i > 0 && sorted[i] === sorted[i - 1]) continue; let left = i + 1, right = sorted.length - 1; while (left < right) { const sum = sorted[i] + sorted[left] + sorted[right]; if (sum === 0) { res.push([sorted[i], sorted[left], sorted[right]]); while (left < right && sorted[left] === sorted[left + 1]) left++; while (left < right && sorted[right] === sorted[right - 1]) right--; left++; right--; } else if (sum < 0) left++; else right--; } } return res;",
    "starterParams": "nums",
    "starterBody": "return [];",
    "solutionBody": "const sorted = [...nums].sort((a, b) => a - b); const res = []; for (let i = 0; i < sorted.length - 2; i++) { if (i > 0 && sorted[i] === sorted[i - 1]) continue; let left = i + 1, right = sorted.length - 1; while (left < right) { const sum = sorted[i] + sorted[left] + sorted[right]; if (sum === 0) { res.push([sorted[i], sorted[left], sorted[right]]); while (left < right && sorted[left] === sorted[left + 1]) left++; while (left < right && sorted[right] === sorted[right - 1]) right--; left++; right--; } else if (sum < 0) left++; else right--; } } return res;",
    "tests": [
      {
        "expr": "distinctTripletsSumZero([-1, 0, 1, 2, -1, -4])",
        "expected": [
          [
            -1,
            -1,
            2
          ],
          [
            -1,
            0,
            1
          ]
        ]
      },
      {
        "expr": "distinctTripletsSumZero([0, 1, 1])",
        "expected": []
      },
      {
        "expr": "distinctTripletsSumZero([0, 0, 0])",
        "expected": [
          [
            0,
            0,
            0
          ]
        ]
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.1",
    "name": "fixOffByOneSum",
    "title": "Виправлення помилки Off-by-one у лічильнику",
    "level": "Базовий рівень",
    "goal": "У коді була помилка: цикл for (let i = 1; i < n; i++) не враховував останній елемент n включно. Виправити, щоб сумувалися числа від 1 до n включно.",
    "reqs": [
      "Для n = 3 сума має бути 1 + 2 + 3 = 6.",
      "Якщо n <= 0, повернути 0."
    ],
    "hint": "let sum = 0; for (let i = 1; i <= n; i++) sum += i; return sum;",
    "starterParams": "n",
    "starterBody": "let sum = 0;\n  for (let i = 1; i < n; i++) {\n    sum += i;\n  }\n  return sum;",
    "solutionBody": "let sum = 0; for (let i = 1; i <= n; i++) sum += i; return sum;",
    "tests": [
      {
        "expr": "fixOffByOneSum(3)",
        "expected": 6
      },
      {
        "expr": "fixOffByOneSum(5)",
        "expected": 15
      },
      {
        "expr": "fixOffByOneSum(0)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.2",
    "name": "fixInfiniteWhileIncrement",
    "title": "Виправлення вічного циклу через забутий інкремент",
    "level": "Базовий рівень",
    "goal": "У циклі while лічильник забули збільшувати всередині тіла, що спричиняло вічний цикл (зависання). Додати i++ та повернути масив [0, 1, ..., target - 1].",
    "reqs": [
      "Для target <= 0 повернути []."
    ],
    "hint": "const res = []; let i = 0; while (i < target) { res.push(i); i++; } return res;",
    "starterParams": "target",
    "starterBody": "const res = [];\n  let i = 0;\n  while (i < target) {\n    res.push(i);\n    // УВАГА: тут бракує інкременту лічильника\n  }\n  return res;",
    "solutionBody": "const res = []; let i = 0; while (i < target) { res.push(i); i++; } return res;",
    "tests": [
      {
        "expr": "fixInfiniteWhileIncrement(3)",
        "expected": [
          0,
          1,
          2
        ]
      },
      {
        "expr": "fixInfiniteWhileIncrement(0)",
        "expected": []
      },
      {
        "expr": "fixInfiniteWhileIncrement(1)",
        "expected": [
          0
        ]
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.3",
    "name": "fixBreakPlacement",
    "title": "Виправлення передчасного break",
    "level": "Базовий рівень",
    "goal": "У коді оператор break стояв поза блоком if, через що цикл зупинявся вже на першій ітерації. Виправити, щоб перевірялися всі елементи масиву до знаходження target.",
    "reqs": [
      "Повернути індекс елемента або -1."
    ],
    "hint": "let found = -1; for (let i = 0; i < arr.length; i++) { if (arr[i] === target) { found = i; break; } } return found;",
    "starterParams": "arr, target",
    "starterBody": "let found = -1;\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === target) {\n      found = i;\n    }\n    break; // Помилка: break виконується завжди!\n  }\n  return found;",
    "solutionBody": "let found = -1; for (let i = 0; i < arr.length; i++) { if (arr[i] === target) { found = i; break; } } return found;",
    "tests": [
      {
        "expr": "fixBreakPlacement([10, 20, 30], 30)",
        "expected": 2
      },
      {
        "expr": "fixBreakPlacement([10, 20, 30], 99)",
        "expected": -1
      },
      {
        "expr": "fixBreakPlacement([5], 5)",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.4",
    "name": "fixArrayMutationDuringLoop",
    "title": "Мутація довжини масиву під час прямої ітерації",
    "level": "Середній рівень",
    "goal": "При видаленні елементів (splice) під час прямої ітерації i++ наступний елемент перестрибує. Виправити функцію видалення всіх парних чисел з масиву (ітерувати з кінця або фільтрувати без мутації).",
    "reqs": [
      "Повернути новий або скоригований масив, що містить тільки непарні числа."
    ],
    "hint": "return arr.filter(x => x % 2 !== 0);",
    "starterParams": "arr",
    "starterBody": "// Помилка: прямий splice зсуває індекси\n  const copy = [...arr];\n  for (let i = 0; i < copy.length; i++) {\n    if (copy[i] % 2 === 0) copy.splice(i, 1);\n  }\n  return copy;",
    "solutionBody": "return arr.filter(x => x % 2 !== 0);",
    "tests": [
      {
        "expr": "fixArrayMutationDuringLoop([2, 4, 6, 7])",
        "expected": [
          7
        ]
      },
      {
        "expr": "fixArrayMutationDuringLoop([1, 2, 3, 4, 5])",
        "expected": [
          1,
          3,
          5
        ]
      },
      {
        "expr": "fixArrayMutationDuringLoop([2, 2, 2])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.5",
    "name": "fixVariableShadowingNested",
    "title": "Конфлікт змінних лічильника у вкладеному циклі (i замість j)",
    "level": "Середній рівень",
    "goal": "У вкладеному циклі розробник випадково використав той самий лічильник i (for let i = 0...), перетираючи зовнішній цикл. Виправити внутрішній цикл на використання j.",
    "reqs": [
      "Повернути суму елементів матриці."
    ],
    "hint": "let sum = 0; for (let i = 0; i < matrix.length; i++) { for (let j = 0; j < matrix[i].length; j++) { sum += matrix[i][j]; } } return sum;",
    "starterParams": "matrix",
    "starterBody": "let sum = 0;\n  for (let i = 0; i < matrix.length; i++) {\n    for (let i = 0; i < matrix[i].length; i++) { // Помилка: i замість j\n      sum += matrix[i][i];\n    }\n  }\n  return sum;",
    "solutionBody": "let sum = 0; for (let i = 0; i < matrix.length; i++) { for (let j = 0; j < matrix[i].length; j++) { sum += matrix[i][j]; } } return sum;",
    "tests": [
      {
        "expr": "fixVariableShadowingNested([[1, 2], [3, 4]])",
        "expected": 10
      },
      {
        "expr": "fixVariableShadowingNested([[5, 5]])",
        "expected": 10
      },
      {
        "expr": "fixVariableShadowingNested([])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.6",
    "name": "fixInitialAccumulatorValue",
    "title": "Виправлення нульового ініціалізатора добутку",
    "level": "Початковий рівень",
    "goal": "Для обчислення добутку чисел масиву розробник ініціалізував let product = 0 замість 1, через що будь-який результат множення дорівнював 0. Виправити.",
    "reqs": [
      "Якщо масив порожній, повернути 1."
    ],
    "hint": "let product = 1; for (let i = 0; i < numbers.length; i++) product *= numbers[i]; return product;",
    "starterParams": "numbers",
    "starterBody": "let product = 0; // Помилка: множення на 0 дає 0\n  for (let i = 0; i < numbers.length; i++) {\n    product *= numbers[i];\n  }\n  return product;",
    "solutionBody": "let product = 1; for (let i = 0; i < numbers.length; i++) product *= numbers[i]; return product;",
    "tests": [
      {
        "expr": "fixInitialAccumulatorValue([2, 3, 4])",
        "expected": 24
      },
      {
        "expr": "fixInitialAccumulatorValue([5, 10])",
        "expected": 50
      },
      {
        "expr": "fixInitialAccumulatorValue([])",
        "expected": 1
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.7",
    "name": "fixDoWhileCondition",
    "title": "Виправлення інвертованої умови do...while",
    "level": "Базовий рівень",
    "goal": "Умова do...while була написана як count === max замість count < max, через що цикл зупинявся вже після першої ітерації. Виправити умову циклу.",
    "reqs": [
      "Виконувати додавання кроку step, поки count < max."
    ],
    "hint": "let count = 0; do { count += step; } while (count < max); return count;",
    "starterParams": "max, step",
    "starterBody": "let count = 0;\n  do {\n    count += step;\n  } while (count === max); // Помилка умови\n  return count;",
    "solutionBody": "let count = 0; do { count += step; } while (count < max); return count;",
    "tests": [
      {
        "expr": "fixDoWhileCondition(10, 3)",
        "expected": 12
      },
      {
        "expr": "fixDoWhileCondition(5, 5)",
        "expected": 5
      },
      {
        "expr": "fixDoWhileCondition(2, 5)",
        "expected": 5
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.8",
    "name": "fixContinueSkippingIncrement",
    "title": "Зависання while через continue перед інкрементом",
    "level": "Середній рівень",
    "goal": "У циклі while стояв оператор continue перед i++, через що при виконанні умови i ніколи не збільшувався і цикл зависав. Переставити інкремент або використати for.",
    "reqs": [
      "Повернути суму непарних чисел масиву."
    ],
    "hint": "let sum = 0; for (let i = 0; i < numbers.length; i++) { if (numbers[i] % 2 === 0) continue; sum += numbers[i]; } return sum;",
    "starterParams": "numbers",
    "starterBody": "let sum = 0;\n  let i = 0;\n  while (i < numbers.length) {\n    if (numbers[i] % 2 === 0) continue; // Зависання: i не збільшився!\n    sum += numbers[i];\n    i++;\n  }\n  return sum;",
    "solutionBody": "let sum = 0; for (let i = 0; i < numbers.length; i++) { if (numbers[i] % 2 === 0) continue; sum += numbers[i]; } return sum;",
    "tests": [
      {
        "expr": "fixContinueSkippingIncrement([1, 2, 3, 4, 5])",
        "expected": 9
      },
      {
        "expr": "fixContinueSkippingIncrement([2, 4])",
        "expected": 0
      },
      {
        "expr": "fixContinueSkippingIncrement([7])",
        "expected": 7
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.9",
    "name": "simulateCallStackDepth",
    "title": "Відстеження глибини Call Stack у відлагоджувачі",
    "level": "Середній рівень",
    "goal": "Змоделювати панель Call Stack: функція викликає саму себе з додаванням імені фрейму в стек до досягнення базового випадку.",
    "reqs": [
      "Для depth=3 повернути масив фреймів стеку викликів `[\"frame_1\", \"frame_2\", \"frame_3\"]`. Для depth <= 0 повернути []."
    ],
    "hint": "const stack = []; function pushFrame(current) { if (current > depth) return; stack.push(`frame_${current}`); pushFrame(current + 1); } if (depth > 0) pushFrame(1); return stack;",
    "starterParams": "depth",
    "starterBody": "return [];",
    "solutionBody": "const stack = []; function pushFrame(current) { if (current > depth) return; stack.push(`frame_${current}`); pushFrame(current + 1); } if (depth > 0) pushFrame(1); return stack;",
    "tests": [
      {
        "expr": "simulateCallStackDepth(3)",
        "expected": [
          "frame_1",
          "frame_2",
          "frame_3"
        ]
      },
      {
        "expr": "simulateCallStackDepth(1)",
        "expected": [
          "frame_1"
        ]
      },
      {
        "expr": "simulateCallStackDepth(0)",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.10",
    "name": "traceScopeWatchVariables",
    "title": "Моделювання вікна Scope та Watch-виразів",
    "level": "Середній рівень",
    "goal": "Змоделювати стан вікна Scopes / Watch під час проходження циклу. На кожній ітерації зафіксувати стан: { step: i, currentVal: arr[i], acc: runningTotal }.",
    "reqs": [
      "Повернути масив знімків стану на кожному кроці."
    ],
    "hint": "const snapshots = []; let acc = 0; for (let i = 0; i < arr.length; i++) { acc += arr[i]; snapshots.push({ step: i, currentVal: arr[i], acc }); } return snapshots;",
    "starterParams": "arr",
    "starterBody": "return [];",
    "solutionBody": "const snapshots = []; let acc = 0; for (let i = 0; i < arr.length; i++) { acc += arr[i]; snapshots.push({ step: i, currentVal: arr[i], acc }); } return snapshots;",
    "tests": [
      {
        "expr": "traceScopeWatchVariables([10, 20])",
        "expected": [
          {
            "step": 0,
            "currentVal": 10,
            "acc": 10
          },
          {
            "step": 1,
            "currentVal": 20,
            "acc": 30
          }
        ]
      },
      {
        "expr": "traceScopeWatchVariables([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.11",
    "name": "fixStringIndexOutOfBounds",
    "title": "Виправлення помилки виходу за межі рядка (i <= str.length)",
    "level": "Базовий рівень",
    "goal": "У коді умова циклу була `i <= str.length`, що спричиняло додавання `undefined` на останньому кроці. Виправити на `i < str.length`.",
    "reqs": [
      "Повернути реверсований рядок без додавання undefined."
    ],
    "hint": "let res = \"\"; for (let i = str.length - 1; i >= 0; i--) res += str[i]; return res;",
    "starterParams": "str",
    "starterBody": "let res = \"\";\n  // Помилка: починає з str.length (за межами індексу)\n  for (let i = str.length; i >= 0; i--) {\n    res += str[i];\n  }\n  return res;",
    "solutionBody": "let res = \"\"; for (let i = str.length - 1; i >= 0; i--) res += str[i]; return res;",
    "tests": [
      {
        "expr": "fixStringIndexOutOfBounds(\"cat\")",
        "expected": "tac"
      },
      {
        "expr": "fixStringIndexOutOfBounds(\"a\")",
        "expected": "a"
      },
      {
        "expr": "fixStringIndexOutOfBounds(\"\")",
        "expected": ""
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.12",
    "name": "conditionalBreakpointFilter",
    "title": "Моделювання умовної точки зупинки (Conditional Breakpoint)",
    "level": "Середній рівень",
    "goal": "Змоделювати поведінку Conditional Breakpoint у DevTools: зупинити виконання та зафіксувати дані лише тоді, коли елемент log відповідає умові log.level === \"ERROR\" && log.code >= 500.",
    "reqs": [
      "Повернути масив зафіксованих логів, на яких спрацював би breakpoint."
    ],
    "hint": "const hit = []; for (const log of logs) { if (log.level === \"ERROR\" && log.code >= 500) hit.push(log); } return hit;",
    "starterParams": "logs",
    "starterBody": "return [];",
    "solutionBody": "const hit = []; for (const log of logs) { if (log.level === \"ERROR\" && log.code >= 500) hit.push(log); } return hit;",
    "tests": [
      {
        "expr": "conditionalBreakpointFilter([{ level: \"INFO\", code: 200 }, { level: \"ERROR\", code: 502 }, { level: \"ERROR\", code: 404 }])",
        "expected": [
          {
            "level": "ERROR",
            "code": 502
          }
        ]
      },
      {
        "expr": "conditionalBreakpointFilter([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.13",
    "name": "fixReferenceVsValueObjectInLoop",
    "title": "Помилка збереження мутованого посилання на один і той самий обʼєкт",
    "level": "Високий рівень",
    "goal": "У циклі розробник створив один обʼєкт template поза циклом і мутував його всередині push, через що всі елементи масиву стали ідентичними останньому. Виправити, створюючи новий обʼєкт `{ id: item.id, active: true }` на кожній ітерації.",
    "reqs": [
      "Повернути масив незалежних обʼєктів."
    ],
    "hint": "const res = []; for (let i = 0; i < items.length; i++) { res.push({ id: items[i], active: true }); } return res;",
    "starterParams": "items",
    "starterBody": "const res = [];\n  const template = { id: 0, active: true }; // Помилка: одне спільне посилання\n  for (let i = 0; i < items.length; i++) {\n    template.id = items[i];\n    res.push(template);\n  }\n  return res;",
    "solutionBody": "const res = []; for (let i = 0; i < items.length; i++) { res.push({ id: items[i], active: true }); } return res;",
    "tests": [
      {
        "expr": "fixReferenceVsValueObjectInLoop([1, 2, 3])",
        "expected": [
          {
            "id": 1,
            "active": true
          },
          {
            "id": 2,
            "active": true
          },
          {
            "id": 3,
            "active": true
          }
        ]
      },
      {
        "expr": "fixReferenceVsValueObjectInLoop([])",
        "expected": []
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.14",
    "name": "detectDeadCodeAfterReturnInLoop",
    "title": "Мертвий код через невчасний return всередині циклу",
    "level": "Базовий рівень",
    "goal": "Розробник випадково поставив return sum всередині тіла циклу замість того, щоб дочекатися завершення всіх ітерацій. Виправити розташування return.",
    "reqs": [
      "Повернути повну суму всіх чисел масиву."
    ],
    "hint": "let sum = 0; for (let i = 0; i < nums.length; i++) { sum += nums[i]; } return sum;",
    "starterParams": "nums",
    "starterBody": "let sum = 0;\n  for (let i = 0; i < nums.length; i++) {\n    sum += nums[i];\n    return sum; // Помилка: повертає результат після 1-го ж елемента\n  }\n  return sum;",
    "solutionBody": "let sum = 0; for (let i = 0; i < nums.length; i++) { sum += nums[i]; } return sum;",
    "tests": [
      {
        "expr": "detectDeadCodeAfterReturnInLoop([10, 20, 30])",
        "expected": 60
      },
      {
        "expr": "detectDeadCodeAfterReturnInLoop([5])",
        "expected": 5
      },
      {
        "expr": "detectDeadCodeAfterReturnInLoop([])",
        "expected": 0
      }
    ]
  },
  {
    "moduleIdx": 7,
    "id": "7.15",
    "name": "fixFloatingPointStepLoop",
    "title": "Помилка точності чисел з рухомою комою у лічильнику циклу",
    "level": "Високий рівень",
    "goal": "При ітерації з дробовим кроком (наприклад 0.1) накопичується двійкова похибка (0.30000000000000004), через що умова <= end спрацьовує неправильно. Виправити обчислення, використовуючи цілі числа або Math.round / toFixed(2).",
    "reqs": [
      "Повернути масив округлених до 1 знака чисел від start до end з кроком step включно."
    ],
    "hint": "const res = []; let cur = start; while (cur <= end + 1e-9) { res.push(Number(cur.toFixed(1))); cur += step; } return res;",
    "starterParams": "start, end, step",
    "starterBody": "const res = [];\n  for (let x = start; x <= end; x += step) {\n    res.push(x); // Помилка точності float\n  }\n  return res;",
    "solutionBody": "const res = []; let cur = start; while (cur <= end + 1e-9) { res.push(Number(cur.toFixed(1))); cur += step; } return res;",
    "tests": [
      {
        "expr": "fixFloatingPointStepLoop(0, 0.3, 0.1)",
        "expected": [
          0,
          0.1,
          0.2,
          0.3
        ]
      },
      {
        "expr": "fixFloatingPointStepLoop(1, 1.2, 0.1)",
        "expected": [
          1,
          1.1,
          1.2
        ]
      },
      {
        "expr": "fixFloatingPointStepLoop(5, 5, 0.1)",
        "expected": [
          5
        ]
      }
    ]
  }
];
