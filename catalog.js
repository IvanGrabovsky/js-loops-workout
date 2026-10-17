// Каталог завдань та метаданих курсу
// УВАГА: Еталонні рішення зашифровані AES-256-GCM та доступні виключно в режимі викладача.
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
    "hint": "Порада: проаналізуйте умову завдання «Сума чисел від 1 до N». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Факторіал числа через while». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Кількість цифр у числі». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Розворот цифр числа». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Чи є число степенем двійки». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return false;",
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
    "hint": "Порада: проаналізуйте умову завдання «НСД (Алгоритм Евкліда через while)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "a, b",
    "starterBody": "return 1;",
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
    "hint": "Порада: проаналізуйте умову завдання «Кроки гіпотези Коллатца (3n + 1)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Переведення в двійковий рядок через while». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return \"0\";",
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
    "hint": "Порада: проаналізуйте умову завдання «Кількість дільників числа». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Перевірка простоти числа через while». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return false;",
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
    "hint": "Порада: проаналізуйте умову завдання «Найменший дільник більший за 1». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return null;",
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
    "hint": "Порада: проаналізуйте умову завдання «Множення повторним додаванням». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "a, b",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Цілочисельне ділення через віднімання». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "a, b",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Залишок від ділення через віднімання». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "a, b",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Сума парних чисел у діапазоні». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "start, end",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Кількість членів геометричної прогресії». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "start, ratio, limit",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Місяці для накопичення депозиту». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "deposit, monthlyAdd, rateMonthly, target",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Число-паліндром арифметично». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return false;",
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
    "hint": "Порада: проаналізуйте умову завдання «N-те число Фібоначчі через while». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Цифровий корінь числа». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Симуляція наповнення резервуара водою». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "capacity, inFlow, outFlow",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Гарантоване виконання мінімум один раз». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "value",
    "starterBody": "return value;",
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
    "hint": "Порада: проаналізуйте умову завдання «Збір елементів масиву до нуля». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "inputs",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Симуляція кидків кубика до 6». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "rolls",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Перевірка PIN-коду з лімітом 3 спроб». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "attempts, correctPin",
    "starterBody": "return { unlocked: false, attemptsUsed: 0 };",
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
    "hint": "Порада: проаналізуйте умову завдання «Експоненційне зростання популяції». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "pop, multiplier, threshold",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Повторні спроби мережевого запиту (Retry)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "statusResponses, maxRetries",
    "starterBody": "return { success: false, retriesDone: 0 };",
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
    "hint": "Порада: проаналізуйте умову завдання «Симуляція розряду акумулятора». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "start, drainStep",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Обробка дій меню банкомата». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "actions",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Нарощування рядка суфіксом до ліміту довжини». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "str, suffix, minLength",
    "starterBody": "return str;",
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
    "hint": "Порада: проаналізуйте умову завдання «Покрокове наближення до цільового значення». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "current, target, step",
    "starterBody": "return current;",
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
    "hint": "Порада: проаналізуйте умову завдання «Дозування води кавомашиною». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "targetMl, portionMl",
    "starterBody": "return { portions: 0, totalMl: 0 };",
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
    "hint": "Порада: проаналізуйте умову завдання «Блукання частинки до барʼєру». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "deltaSteps, boundary",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Підвищення ставки на аукціоні». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "currentBid, step, reservePrice",
    "starterBody": "return currentBid;",
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
    "hint": "Порада: проаналізуйте умову завдання «Пагінація сторінок з API». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "pagesArray, totalPages",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Охолодження двигуна циклами». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "startTemp, targetTemp, coolRate",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Рух ліфта поверхами». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "currentFloor, targetFloor",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Бій з босом до перемоги». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "bossHp, damagePerHit",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Плавне гальмування потяга». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "speed, decelRate",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Погашення кредиту фіксованим платежем». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "balance, monthlyPayment",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Завантаження файлу чанками». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "totalBytes, chunkSize",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Витягування карт до туза». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "cards",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Друк завдань з черги». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "jobPages",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Таймер зворотного відліку з фінальним нулем». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "start",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Генерація рядка циклічним додаванням символів». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "chars, targetLen",
    "starterBody": "return \"\";",
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
    "hint": "Порада: проаналізуйте умову завдання «Інспекція конвеєра до першого дефекту». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "items",
    "starterBody": "return { inspectedCount: 0, passedAll: false };",
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
    "hint": "Порада: проаналізуйте умову завдання «Сума чисел від start до end». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "start, end",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Парні числа в діапазоні». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "start, end",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Непарні числа в діапазоні». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "start, end",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Послідовність з кастомним кроком». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "start, end, step",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Таблиця множення на число K». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "k, count",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Сума квадратів від 1 до N». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Підрахунок входжень літери». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "str, letter",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Реверс рядка через цикл for». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "str",
    "starterBody": "return \"\";",
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
    "hint": "Порада: проаналізуйте умову завдання «Генератор арифметичної прогресії». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "first, diff, n",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Генератор геометричної прогресії». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "first, ratio, n",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Фільтрація слів за мінімальною довжиною». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "words, minLen",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Індекс максимального елемента масиву». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return -1;",
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
    "hint": "Порада: проаналізуйте умову завдання «Індекс мінімального елемента масиву». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return -1;",
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
    "hint": "Порада: проаналізуйте умову завдання «Середнє арифметичне масиву чисел». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "numbers",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Кількість елементів вище порогу». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr, threshold",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Вибірка кожного N-го елемента». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr, n",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Різниця сусідніх елементів». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Накопичувальні суми (Prefix Sums)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Знакоперемінна сума масиву». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Повторення рядка N разів через for». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "str, n",
    "starterBody": "return \"\";",
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
    "hint": "Порада: проаналізуйте умову завдання «Підрахунок голосних літер». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "str",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Простий шифр Цезаря на +shift». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "str, shift",
    "starterBody": "return str;",
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
    "hint": "Порада: проаналізуйте умову завдання «Індекс першого відʼємного числа». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return -1;",
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
    "hint": "Порада: проаналізуйте умову завдання «Перевірка відсортованості масиву». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return true;",
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
    "hint": "Порада: проаналізуйте умову завдання «Заміна відʼємних елементів на нуль». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Почергове злиття двох масивів». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "a, b",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Кількість простих чисел до N». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Частота символів у рядку». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "str",
    "starterBody": "return {};",
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
    "hint": "Порада: проаналізуйте умову завдання «Розбиття масиву на чанки». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr, size",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Сума степеневого ряду 1 + x + ... + x^n». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "x, n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Перше кратне з раннім виходом (break)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "start, k",
    "starterBody": "return null;",
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
    "hint": "Порада: проаналізуйте умову завдання «Сума чисел з пропуском кратних 3 (continue)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Пошук першого відʼємного з break». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return -1;",
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
    "hint": "Порада: проаналізуйте умову завдання «Підсумовування до першого відʼємного числа». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Сума тільки числових значень (continue)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Запобіжник від зациклення (Watchdog Counter)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "conditionFn, maxIter",
    "starterBody": "return { iterations: 0, timedOut: false };",
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
    "hint": "Порада: проаналізуйте умову завдання «Пошук користувача за id з негайним break». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "users, id",
    "starterBody": "return null;",
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
    "hint": "Порада: проаналізуйте умову завдання «Сума лише непарних чисел через continue». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Індекс перевищення ліміту суми». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr, targetSum",
    "starterBody": "return -1;",
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
    "hint": "Порада: проаналізуйте умову завдання «Складання тексту з фільтром слів (continue)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "words, forbiddenList",
    "starterBody": "return \"\";",
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
    "hint": "Порада: проаналізуйте умову завдання «Перше спільне кратне через вічний цикл з break». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "a, b",
    "starterBody": "return 1;",
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
    "hint": "Порада: проаналізуйте умову завдання «Обробка платежів до вичерпання ліміту». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "transactions, budget",
    "starterBody": "return { count: 0, total: 0 };",
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
    "hint": "Порада: проаналізуйте умову завдання «Аварійний обрив циклу за лічильником кроків». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "maxSteps",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Пропуск кожного третього числа (continue)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Збір даних до стоп-маркера 0». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "stream",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Модерація коментарів через continue». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "comments, spamWord",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Перевірка простоти з раннім виходом (break)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return false;",
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
    "hint": "Порада: проаналізуйте умову завдання «Нарахування балів з обмеженням стелі (Cap)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "events, maxCap",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Облік робочих днів (пропуск 6 і 7 через continue)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "schedule",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Пошук першої пари однакових сусідів». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return null;",
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
    "hint": "Порада: проаналізуйте умову завдання «Парсинг CSV значень з лімітом колонок (break)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "csvLine, maxCols",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Квадратний корінь методом Ньютона з лімітом ітерацій». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "x, maxIter, eps",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Повторні спроби передачі пакетів з break». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "packetStatus",
    "starterBody": "return { delivered: false, attempts: 0 };",
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
    "hint": "Порада: проаналізуйте умову завдання «Фільтрація null та undefined через continue». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Пошук секретного токена з префіксом (break)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "tokens, prefix",
    "starterBody": "return null;",
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
    "hint": "Порада: проаналізуйте умову завдання «Моделювання блок-схеми циклу з передумовою». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Моделювання блок-схеми циклу з післяумовою». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "limit",
    "starterBody": "return { iterationsCount: 0, finalValue: 0 };",
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
    "hint": "Порада: проаналізуйте умову завдання «Блок підготовки циклу (шестикутник)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "start, end, step",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Розгалуження всередині циклу на блок-схемі». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "numbers",
    "starterBody": "return { sumEven: 0, sumOdd: 0 };",
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
    "hint": "Порада: проаналізуйте умову завдання «Гілка дострокового виходу (break) у блок-схемі». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr, target",
    "starterBody": "return -1;",
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
    "hint": "Порада: проаналізуйте умову завдання «Гілка пропуску (continue) у блок-схемі». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Алгоритм Евкліда за блок-схемою». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "a, b",
    "starterBody": "return 1;",
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
    "hint": "Порада: проаналізуйте умову завдання «Лінійний пошук за схемою алгоритму». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr, key",
    "starterBody": "return { found: false, index: -1, steps: 0 };",
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
    "hint": "Порада: проаналізуйте умову завдання «Блок-схема накопичувача суми». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Блок-схема обчислення факторіалу». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 1;",
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
    "hint": "Порада: проаналізуйте умову завдання «Блок-схема перевірки простого числа». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return false;",
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
    "hint": "Порада: проаналізуйте умову завдання «Блок-схема пошуку максимуму в масиві». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return null;",
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
    "hint": "Порада: проаналізуйте умову завдання «Блок-схема бінарного пошуку з журналом». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr, target",
    "starterBody": "return { found: false, trace: [] };",
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
    "hint": "Порада: проаналізуйте умову завдання «Блок-схема лічильника відповідностей». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr, threshold",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Блок-схема реверсу числа через розряди». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Блок-схема пошуку мінімального додатного числа». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return null;",
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
    "hint": "Порада: проаналізуйте умову завдання «Блок-схема обчислення змінного середнього». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Блок-схема двох вкладених шестикутників». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "rows, cols",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Блок-схема Run-Length стиснення рядка». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "str",
    "starterBody": "return \"\";",
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
    "hint": "Порада: проаналізуйте умову завдання «Блок-схема циклу із запобіжником Watchdog». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "value, maxTicks",
    "starterBody": "return { safeExit: false, value: 0, ticks: 0 };",
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
    "hint": "Порада: проаналізуйте умову завдання «Сума всіх елементів двовимірного масиву». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "matrix",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Таблиця множення n x n у вигляді матриці». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Прямокутний трикутник із зірочок». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Перевернутий трикутник із зірочок». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Транспонування матриці». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "matrix",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Шахівниця size x size». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "size",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Декартів добуток двох масивів». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr1, arr2",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Пошук пари чисел із цільовою сумою». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr, targetSum",
    "starterBody": "return null;",
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
    "hint": "Порада: проаналізуйте умову завдання «Сплющення 2D масиву без Array.prototype.flat». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "matrix",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Підрахунок входжень підрядка через вкладені цикли». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "str, sub",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Одинична матриця розміром n x n». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Трикутник Паскаля до numRows». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "numRows",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Максимум у кожному рядку матриці». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "matrix",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Сума елементів головної діагоналі». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "matrix",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Сума побічної діагоналі матриці». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "matrix",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Сортування бульбашкою (Bubble Sort)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "numbers",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Генерація всіх неперервних підмасивів». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Пошук дублікатів без використання Set». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Центрована піраміда з зірочок». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Множення двох матриць (потрійний вкладений цикл)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "A, B",
    "starterBody": "return null;",
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
    "hint": "Порада: проаналізуйте умову завдання «Сідлова точка матриці». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "matrix",
    "starterBody": "return null;",
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
    "hint": "Порада: проаналізуйте умову завдання «Підрахунок інверсій у масиві». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return 0;",
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
    "hint": "Порада: проаналізуйте умову завдання «Пошук слова у сітці літер (по горизонталі та вертикалі)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "grid, word",
    "starterBody": "return false;",
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
    "hint": "Порада: проаналізуйте умову завдання «Обхід матриці по спіралі». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "matrix",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Трипліки чисел із сумою 0». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "nums",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Виправлення помилки Off-by-one у лічильнику». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "n",
    "starterBody": "let sum = 0;\n  for (let i = 1; i < n; i++) {\n    sum += i;\n  }\n  return sum;",
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
    "hint": "Порада: проаналізуйте умову завдання «Виправлення вічного циклу через забутий інкремент». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "target",
    "starterBody": "const res = [];\n  let i = 0;\n  while (i < target) {\n    res.push(i);\n    // УВАГА: тут бракує інкременту лічильника\n  }\n  return res;",
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
    "hint": "Порада: проаналізуйте умову завдання «Виправлення передчасного break». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr, target",
    "starterBody": "let found = -1;\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === target) {\n      found = i;\n    }\n    break; // Помилка: break виконується завжди!\n  }\n  return found;",
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
    "hint": "Порада: проаналізуйте умову завдання «Мутація довжини масиву під час прямої ітерації». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "// Помилка: прямий splice зсуває індекси\n  const copy = [...arr];\n  for (let i = 0; i < copy.length; i++) {\n    if (copy[i] % 2 === 0) copy.splice(i, 1);\n  }\n  return copy;",
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
    "hint": "Порада: проаналізуйте умову завдання «Конфлікт змінних лічильника у вкладеному циклі (i замість j)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "matrix",
    "starterBody": "let sum = 0;\n  for (let i = 0; i < matrix.length; i++) {\n    for (let i = 0; i < matrix[i].length; i++) { // Помилка: i замість j\n      sum += matrix[i][i];\n    }\n  }\n  return sum;",
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
    "hint": "Порада: проаналізуйте умову завдання «Виправлення нульового ініціалізатора добутку». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "numbers",
    "starterBody": "let product = 0; // Помилка: множення на 0 дає 0\n  for (let i = 0; i < numbers.length; i++) {\n    product *= numbers[i];\n  }\n  return product;",
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
    "hint": "Порада: проаналізуйте умову завдання «Виправлення інвертованої умови do...while». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "max, step",
    "starterBody": "let count = 0;\n  do {\n    count += step;\n  } while (count === max); // Помилка умови\n  return count;",
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
    "hint": "Порада: проаналізуйте умову завдання «Зависання while через continue перед інкрементом». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "numbers",
    "starterBody": "let sum = 0;\n  let i = 0;\n  while (i < numbers.length) {\n    if (numbers[i] % 2 === 0) continue; // Зависання: i не збільшився!\n    sum += numbers[i];\n    i++;\n  }\n  return sum;",
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
    "hint": "Порада: проаналізуйте умову завдання «Відстеження глибини Call Stack у відлагоджувачі». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "depth",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Моделювання вікна Scope та Watch-виразів». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "arr",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Виправлення помилки виходу за межі рядка (i <= str.length)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "str",
    "starterBody": "let res = \"\";\n  // Помилка: починає з str.length (за межами індексу)\n  for (let i = str.length; i >= 0; i--) {\n    res += str[i];\n  }\n  return res;",
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
    "hint": "Порада: проаналізуйте умову завдання «Моделювання умовної точки зупинки (Conditional Breakpoint)». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "logs",
    "starterBody": "return [];",
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
    "hint": "Порада: проаналізуйте умову завдання «Помилка збереження мутованого посилання на один і той самий обʼєкт». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "items",
    "starterBody": "const res = [];\n  const template = { id: 0, active: true }; // Помилка: одне спільне посилання\n  for (let i = 0; i < items.length; i++) {\n    template.id = items[i];\n    res.push(template);\n  }\n  return res;",
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
    "hint": "Порада: проаналізуйте умову завдання «Мертвий код через невчасний return всередині циклу». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "nums",
    "starterBody": "let sum = 0;\n  for (let i = 0; i < nums.length; i++) {\n    sum += nums[i];\n    return sum; // Помилка: повертає результат після 1-го ж елемента\n  }\n  return sum;",
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
    "hint": "Порада: проаналізуйте умову завдання «Помилка точності чисел з рухомою комою у лічильнику циклу». Спробуйте розбити алгоритм на послідовні кроки: ініціалізація змінних стану, правильна умова виходу з циклу та оновлення лічильника.",
    "starterParams": "start, end, step",
    "starterBody": "const res = [];\n  for (let x = start; x <= end; x += step) {\n    res.push(x); // Помилка точності float\n  }\n  return res;",
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

export const ENCRYPTED_SOLUTIONS = {
  "1.1": "1e8aa931ccd8fb93ff098fd1:86b54b50514440691a3784c5eb68d5f1:14501da0211660f7f6a02e9a9820e695e32b9ce198162e164688e83cd3d63c4e9dd542d90bc3095c8fd032faf0218a4c3b1afe9d4e4ae1df42348efce20ef055e9152b4f8ca8b10536e3f8",
  "1.2": "cb6228c1a4021961dd6350c7:c008858e3f853c1b06fd23897659310e:e6eaacc6603585f8cc9ea43614b69a01183ec1afcbe401ad42e40b15134af0f283b4981dc87d2a274d0ed89c4b2d978eef6e433dd2b0cce47d5767e9c0684895",
  "1.3": "68509ff389bf8cfdd0786508:5ba9cb88256906eab3c7f9b4f3bac5bc:50edfb9e55ebbae1dcdece86f18b7876e2a1506ded100e1a4cbb5cb658818a4f7c21c1c553152d545d559bad5fe632a4a682a4d019216bbf6a269eabd6e316c391e2af06ba",
  "1.4": "5a771dcb4ea44f4ee210324c:92352d9dcbdd31d80df52d4999b0af16:c5a098edc08a4b1f5c6b6da8e0b59b1637b262b7ebbffe267a6f5dcca72055b804a78f765cd092a80ee0642762795e90d1009a21fda08a2a6241d17f04caa70421ce6a028bf47030d579c57def3e89a1a408239e9a4e05c97b2f8c9184",
  "1.5": "779a7b6a6be2ea37fe07ad6e:f515d28972a271db3b8926da45d43c6e:aaae94852a519ceb2c45e84bee538f5c4753aaacccf8e48df741741eaaaa83f9e7e6dbff471e4446e67b364836aae97b89a86ac57c36b7abcc5c4a1a0567c3298ae73d0b477aa586c415866ef84f229ccd6dfabe431d1e92e8d5987524dabaaf52c4bf6a436564cb237bca2029011c408e239321c0b4d64a56c5de3945831ed8916cde33c6",
  "1.6": "8e0a391deafa6339eb2c6fdd:bcb135dd7b6e7ed96082de4ebbad0b59:ed57f9e4cba65fd59a769b0cd37a33f31e21648794447103321b7bfb250abf35d75fbea3b15832629c0474b6f8b3dccf1144f5bb846db57932961bb6da9b352680316e022165adaa4657c0c36eae40e20c2bc3fc9abb1fcce0e7ffb162d346391acde9667236a23ee644a59e822e9755",
  "1.7": "54be7ecae4a5c19054f399d1:6119a877c0b973f747d7e5fcaf90e322:a61a555f1f5064c622c80e05b6ceaaaf1d752c8e337969d802639a7e1cb51cae2fd20da81b503b2c595593e246be559ae9718720c6e1828f4175efbb19dcc3386cfdff84c39edbfc2906f48931d224624032fb2f94f13e5dc181babd77c6056a326477e54f9ba8e73044a07566ed40a508fa3b0449ad643c4a17949ccfc01d546a4788c8eb2f70b76245cc5c8c62b35b281c99b858ac2bd13a0df653bd1e993d",
  "1.8": "ab0b2aab1828b9d590dd8e6c:32bba7b32cd75770120ed2d810952ab9:d72bc1d513f92831076a7c2afb7a680dff2f1c03cebbb446eeabd0f648bebd16f7c5f719b4aa11e42caac2e87b37554a66f6cc71fbe10d7e909a6c1db36191015dab668781e75f76774ec230ebd7d8de7f14ad425054077cd15cf2722ddb9e3bf5bb",
  "1.9": "27b4c5369ee58d15e3639b3a:8193cbc13c07af4893719c1a73c0364b:4789a3d47cfdc5d964dc0dd9b48be18e386325437a332ccc63fe8a54ff3c8e996c5f33fc0f3f384a5f37ad00709ae95b218c75e8796cbefcefe3d2f69b2460d82517ba4e61659cce38af58d516c6678e96ce600863f0f3875f860a6bba95342b82c7f31b6a59db2b",
  "1.10": "4f4e03f71f982a490d46e20a:b54fdff66884d1a85afae654e6d68e13:c460c34c6c5f7ea4880eb995d5d7cdc9e0d3afa3ce76a495012d13dfe5200a7d23bcb10c4cdcc170dbe001e614f7ea7fd25b1aa1944e8dc4d2d889aca6b4d47dfa877d47e60d35a48f92158971056ff7805449700424979b2512cf138b9c18e9f0ec1fa19826efc832fa045cb2dd12964b8d1c50bf463f14b20c2c0c22a22fd2466c3037045afa1c9f8a9b93dac973e8efa689f56aa400811162446f7f6e6c",
  "1.11": "421b8add4cd7fcede0238b30:1a1b36fe213a9997dd0e9a19668a9909:d12f68527c3e7033c317d131968852258fdae800b3877b8e2ca68b775d233d779b5b70d95c036374ce96df6e069bcce93e6d081a741f0be19a2d64bce4de21cb385fc5f3748873763f68a563cd5bc97075230ff522d9d167c983edfa1ed5210359d22777b9d9a97620144c1776c9742d661f24fe90e96995398338c357",
  "1.12": "7d5a28732e56666a42615914:fe9287aec8a1f71c683456f9a5602032:3310cd18055853ade5ef11e2fca89c67eafbfbd3bb81138dbe69fff75cca82d1a14dc125b42bd6aa207dbe683397192a37aa03ff0bb23160a7d2bfd3e28854188988b1c29b46ac556ac64aa882739f3e18fa971794c1bb4c5baf5b0fb7d00c1f2bf21179949c5962b065d3c5234971f1",
  "1.13": "59a90983b21427ffb79ad28a:4215c691b19a743793fd38815bb6b977:4fcbc860b8cf96e2a90103eb47f8e2d850bfef8523e31405821bc2b4fb5447ae646693ff738b6c89f4c49e244d22c865284030e50396090d7ecc3eff05c1effd97b3bb1416be9b8435fada87ce7451bb6fcec181bd69a5943dd4a72066d9d29f368c98224d2038d23853827309971b",
  "1.14": "8d11f7a0730fdd705edbe874:b777cc5f5605e70ae65ee2cafa57d3b6:f83a0f527718005c530895e7e7f9a603a5be28f6d5e193c0ed2bf4e18f651ae4f47aad79575562301fa2c06253fecf1ae0fafa477916acc6b40b3ab84f735ed967f8b04ce308f2a8d3ac76620cf8eadbc15de7676d3da9fbe07eb69c8d47791ef14fc5c055031ccbff9faf",
  "1.15": "975acabc7132225eb8cdd8b2:05967aed3aefb3b65235ae5e7bdb7b54:a24974a4f5161f6aef5231904ad2d03cf64c7781e8b99297386564d1915bda9b144dfad14f9a93cca435fb744c883f5d82ea48f3d905fbbdf598b822f7869117c9d29eb484bf83c91024",
  "1.16": "fdf73db2e5c129640399ddbd:3d0dedf55b6dabe5dd1b1a6094371d38:c022ac5638f0fafbfd3c2c4ce13eb3410e5ad1c69d5e529002e693ffdffc8b8245cc47de4b45c2166efe725a71d7d38676e3cb19116c3a8dc1b12fc424eb343136895a95b39ba51ad651f4690019bd7f",
  "1.17": "0cb16f14e8e8bc9af42d2913:c52da4455c42fd9ea98d5512d2148cf3:17da36f211cf00838bb0c6c4c4e123112320dfe90867739521180df21dfd35722362f51aa30a1bfa3d955034e5e72f82dc457ff0ed466d1c72ea30c3be731846127e1d7c56afcfb495f12934323b16f9ddc56326fac08e94b1b75dcad746806ed74ba8",
  "1.18": "3d8af1e544f33459aee152c4:f45c5c299709eaa5c564da82d803402e:409794819241ac80bad8453cdbab098d804ee1f9d153e1746b8297cb708d1bbac76d1311abcdf0a6171dff5aab461808d2ccb955ed7b408b71f65cf4aec5",
  "1.19": "b64b7f8d2d45055ed3867f9a:6bcb01fd945c983403c816a65f74a970:bb16ec88b849a93fca7c0831bb05a51508fbed8170e5dadfc64def73d07cb67d1cf8d14ab0703a7142db9801ff06a418aab773d1bf08e8b13f4caf1f495231c76c4dd1c9b25f0da3095c50e1ff35c68a794dd978b901264d7ed7a649",
  "1.20": "07d24c756e6a4395aab7d76e:d4631d59f845a3bf5c0c7b74282acd0c:cd813f2551c41a276175e44d7ead325f59f8e6a66c09c196515a1ba62f21caac2345227eafd0e105cd093f6fc70e49c8b07a0a4e686fcb700506d05cc88db926772291d31bd88a15c27a1cb9e6dd48c43208242851cd7a7dbfacbafe3a1f8f613df4be5928e5996e52715e89eca97c691150da8fceb761cbee5a",
  "1.21": "31cf0aa31663c28c1d710a73:38f1cf46a8574c30d874ddf59d2c9d26:071671f20357b7539a206a585860966f1d31cc8a9b14e41224cd5286527e7d6ce8a3a13f443df634b731be6c6c4fa15a3770f846941255c93a75df41d6b1efcd51e96301319706eb428fc032b23021b19d3b4fa947a7a59213bde987cc05554cbaeeb6febe249cd056ef8f17bd904116935920ba68867b9b6e7c0adda1f4e1ef97cd9fd367ede6eb561109ebedef0bf3",
  "1.22": "32274a401225d6edaebbad2b:673d038ea215938180b8d260852dd411:8ff32ec06537f036e71d280927aa1be15fdf7d2be3cf6bc34da3f08895f98d45dcc4a403445cf744a5eec9e7859e4826268193528538af50a57ccd834d3c9b1b0a2efc6f76557a1064295a2f43ed4c4233e80aad13c67e219372e98e942d55efcfc5ea1ad49b098ce8faad32cbe58d0231d228667d070423691119524fd89292f7f60ff03fee6ca7b3fd6be997d40840058f7b995a032f7815d422e3258ac2b783af10bb02cba9",
  "1.23": "8c46d078cac5736abc1e06d4:c45ba422ca557157ba7026a44f6c7fa7:aff7e1780a0522c120bd3bc96e23d17b7ff87d2a69448f999e13d392c91fb750dec56755293ea1909eaa09192c37f1dd9bbd32ae393a92bcd977e5929276c5b7f43d6a935af83b328701a14a5de577700de0c3f5eb888c265ac96596db0ed06860bfadb6ca01595f0b424fbab637ea841fd51ccf67fb84b7d5edc1e15e7ddd7442cd604bc892045a8aebaafd",
  "1.24": "6ad8eb5cd75a4227e8dbb57e:8adbd13057928a48f1dc6fffe461eefa:929ee831b7d87a45d95fd08e62be837ae140ab7b72c5d1480e8eca0fa566fb3e8f559a985a524933b06d979575ed884fdace5ee4430bf7986a9ed98871142339ec9f9315504b6a09fb08bc7f14fec95323cc10e3691fbe31b7f306adb1b98886a0ee97d9379419cdbe25ea2285d49cd84bf283a2c7bf8f3a661776c256bc215efd427f52a5c58e37f15733",
  "1.25": "315c244b485604d1f6fd31a0:afe4394b08bcf0c997f444f3b05f86fc:5a4b1db06772e1317840d73ad4af79175a8462929a543e1afc538be2568c7d9acdfa44428a44cb7f6bf917f1bb9092f6538bfa8e1b24dbf7590a46d731648ece8986b7325be9e9e30119f5c19def07bde3936312b9eb40ae3d3ff7aca9aecb4779df39bdaa95ad35ba3ad24ddc340fad60678d20a8bb4089d5b6ca2084e6e1617e648bf66d102f010ceacaceafdeed2d6ccaa36aba903fbf8c14d57f2e881bd871e937b874c3621ef0e0fa2ec6753a36464b2038af",
  "2.1": "c2a2802ed092abf0dc21357c:53ca599b95077655f3602a7def65f59f:05d0b3584b1950df3707aaf7c837e44d441275392e61bb1f8479ab7373bfff52420d02ab59082afcd6212752f8902529ccbd6c",
  "2.2": "db1c585c5c38fbdde3c35d01:3cc64db2baad0c6005988fa26aac2741:a606abfc86828351d97312233c270e046cfe2e7db5ce2d5a18746c371a12c199fdaf3bce3b425ac22824a5832f5d8f9f7226153b5cbbc322ded7ba0b272f7f2552d1163c538455de402b7d530c0d78145de8a3f9e4deb6de8eb54eee3ddde75ec9a27a53e593f1c334f8e96488cd6aa0d760d7d96cb03de8f8e89f76278e0f2adfccf64920b4d5981f1f3f71b19c2718fc8ef815df4b8683e8c4196bcbef69045a9a2ce0d85621d1f0174fd019",
  "2.3": "06447e2307eb31ce04e5e678:0e8d256932d1c5e06580c9b54fb45726:e90fbcf481281614dd3e7c03ba3aa5f83ced2d428e6e6a2e94ba5672a90e7e466091e5655d0315f3b4f63a6675b4b437c47e69f71a79787ce08a767e6d017179ea547b824341470fda5d9755aab06b0465cbbefbfb7c497da8d7f334cb00f45c347987e0cb4b78616b2a9e752f93c15f16dfd899558c68f181f6a2ae27e836febdbebbf4438698bb097f8ad88f850ed8f7d4",
  "2.4": "1f8cd2ebfe4de3f3ef61e63d:26095d991fa5b28ec314652eabf831e6:322fd788e2de257bff4a312e1141c1fc712373cf4aea32ea2b927aa09ed511913d651f9a06e580278d829f859eb24edb01282fc0799813662e6de18ab61d5d02c690c342085164c23aef2b681b3d5efddafdeb1fd434c2b147e166c53778b42022d0600dfd154eeb059fe6f2139275c07cc32914904bbe0ad7dc5229989851013e32c8464d3cf44affc7c7e13ace6af588abe4d81474b83d32e623583a2b1a1ab373679e7a684e3f29a97c81d8d6c5d9443c9b699ba2a2cfef734607a4c349cdba07c84d83a97369f66948f18d92dec6f5cd70beac9af9434ce74b17aeb7d289d150ed2f8c78a8cb91f83e83200002c590440e7cf932c74fddbb969cfe4b08a3555d1c0652a45e430270",
  "2.5": "a920fa7d91eec40a4ae660a4:e402c4e7d18259cd39a74933a7d6bb44:ca7333a4f5783fe048f640cdf6e8947f5f85e1308aa47a803b31bbad5f53e8940c121da772948cce3dd43a3cc2efa78dff1a072890d9af191bae7655f518e073c5484999730444076a4ef0984598297f2eba55c518b3926b13",
  "2.6": "b2b75af2161fe60a5ded4f25:92c061068473852266eb740d6d459621:393056c40c13485936399b8d166f906748e21da577f643306037ed123dfe488705e9ebb0c3a0185efcbf7229bec6283844c39c2691cca2f049e6189c0fee577542042671048fb3563180dc8804312452a2aabc73caaba4a8638b9cf650dbb2a18775bcc22b29e6430ce4dcb838193baca151fb2966eb2170d7024dc17ef22f830a24ac0ad7e2affb2e18bc06a2cb3c57286708e4c0583c0e9b627d0aa0c61208cbc0e2b72c52e8ddd58d77d8ecaba006bed8f00123378e3ffcb8e1299ff2f298005089cfe77a7d4d1920b9b6fe6290f2fb0dfb2885dfd4cdfe3ae104ab1d6b0b60e9f8fa39f4a0ab238df50028f7657434e905803c0b86c003571b4b911fff939497a864ca233d5feb2dc3b4d7459b5585b213f4ab567caaa7878fa3cd8156f43d3e",
  "2.7": "1c78fc745f670951bbc55731:02641ae1934a211a11ec7c0b4658f052:a3cf63b5321e61e60f569f4438aaeb2eb5e813baf697496161571f8ade059fdd5e91ac9b37f0c42c490c574362e3249b1e01ff1dc503631f476f7b122a329b0dd20d7fe8821ec8b7be67f88b6cc905d191231b89392353c6e8a51911cc4c655d1cfcb09fb9c614fa1152749ebb77f0428ee5dd65e9d533",
  "2.8": "9f85adbe28ba0210389db1e5:e1a52f4885152c27a79ffa0422c2bcfb:8000717bc3fa49fe5c31c0e5e4ee149e6b6cb6803f1c6a1f2dad982d37006b52a73a9deab9fd62086d33af12d4fdd875fc001a223c02f92e24876e63cd2b4abff9b0be97f53fac655e7390a2c4eab49c9b456108a979766906c4d7b45cffba0218181ae6762f9206e59fe50dece172dfaf14ab28cf94a1917e8a85af9b2797c2608dfe789b74385f259c1629a455",
  "2.9": "be818c1a44b54e0f5311642f:a957bf88f3ed31f2112ecba5aee31774:69de2e8bc25e082bc649ae5577f4afea47f39966910dbd823a9df681d06391731a512b4e6bc117747644c97ae7decf9cde10d91ab573f7c0664f1958ef43ecaad9",
  "2.10": "c8de4ddbb8014b33d11dbe71:b15a05d6d395960abe0841d5f9c9e4a8:d286fd1f2ac21bfb1774783e7381d29639e7d8a9a13c408bdb243d49fb37145258974d802a8932738b9734fee0353547a3f20c7d4cbe322792805c2b19d435c9751c84c23275e2b41aa4611a016321021c75b03890b552cc711768ad247cf54d6999356069f1d8139c0c5f31d78d753e5504462144b36cd37d0409a079e3906faafffa5575febd17b97f529fb1f6bf114c1da0f73e4c70e0c37d7396f291054740291e7ca6693956817a4c357bb52ec0ead8d2ee3b",
  "2.11": "7883828f6b93d0fd9583006b:fa2cc773a112a21686fd6f105b08d572:54502a0edf2b4614b20a122eb9f7c1c6064bb47236c188709ae1e3f2821aba840dbd1e244da594b32be16e57518dded3133d8e4748849bb2f8fcd711901ce25892698da25066ca5e14fff432fb69313f26f15d55961c0c81ba283e6d82f4dd14416a21507df49305b05d6a18815363d1bbfca18fc8f1f8e098796f2d6d330436fface5",
  "2.12": "ea34c07f19acfd4af30a0ca4:1c657a6bb5fff6c1dea91b81fb99ff69:8f6339c1b897442bd5c583c12116eadd302bfb1efb28fdfce356d9aaff7b7687dd2aaec7d6bd531cb36a063f9ec92ba35741c6cfdcd19fd98c2f00995b110927a002d1b52218e71ca3a82f884790a864abe7d1a864f7c14d27274c44f53821de9218fca7612b0e724924a9135276412b67cca1332e0cd08c5e39cda7d0311b5624ec7de8f17499e8007bbc030fdbb3ff3795fad645a47caf4eb935c3b0b3b874ee06f3a95d161b9f7342e6fa4d1100646409",
  "2.13": "e711fabecbb3dfd56da1cbbc:3e79fd3ca1b4da7f1b8d4ec58ced2d51:be1569fb2ada415dae0157d28f1bdc0f8027bc1ca76bd4f8739b1e047b82be0bf79ec8af283871f44d2f2007b718b2eb61b90a62bef7ae30a6987c21c4d7f0cfd96265501e7663f4ed54618637f253d6",
  "2.14": "40597e8745357737df35b22c:098076f4836f0ba80e0c638284d2e2d5:9017458d92818672d32e579f25129eff8456fbc4a5c4adffe968908a9dccc5e298ec83193999d2e04012dd01c60f8f29ee4d98813582c982cce2864e3f84eb61411010ae1a8ea86ada5719c83a5da7ffaa8a175dd37e1bf380efe629205e05de4a0be0df44d4f70af5be19649388c31378114477c1e7da728c0d30d184d3c60da8d4bb85c6bea095d715e9d2a0b23e8c788204ae9d0d1ce33d98d6207e2ed13d10a9cd8d3813ccec41722ea369e6e5d4c848d7f70a8e8b5756529d1c0c5b9235f4fb6f7d2322df5a51b2e96dab000d0afd1863e005f3a362a00fdb6616141249d66d135a0d488a4b5cfa7dc4",
  "2.15": "7a493571f7f4d5941c7d480f:7bcd246679ac6f312c687f55bc6dc6ab:b8bfdacb618d5ad966c0a164d266f28106cf86b1b21d511f4c924b59935543df05797e6f6342733875b11449852271adb84df375733bdd90eec6ce03725180a54d5ca67bcb3067b98719902eec521c2db9f968c8f00e1af0e29114d12797ea7e00aaa87bae15",
  "2.16": "0c55a57be4273843338069ed:501222340c14823b31f31524294cdad9:a109f21dfcb4531f9a679de7762e8f56cb2e6c2767cfeaf0ede838bd6539358ddae03cf42bc5033c165fbd5095ae826bd5409e77c731420aaa6d73889652f07d11877ddb7e1a7021dc68e192ba9a13077b4730603d7f823ed9ccc71fdeac6060b50a7d91ff7d8f93736a5d7e127688a51b13bc7d484b7f2a2bdd480cba4ddf804dee21c379c1c3ad284f92ace5f1066700dc8afc6c83bbee925e3d19a73a95f438d11874ffd31a85af8eed1599c24008ecf051a47b8d2e378b385ecbd8c40ea94319a92ee72d0d59e2f3b7a529000c94d8903d9b26ea7c75ed60c63e6cb4107f2ba0",
  "2.17": "f25b8718cd0b14024c345ce8:c4d0ac4a7f2c236354d9d86484abb3c2:e1b28f3fde626309903442cd59f92822bf97380a8cabbb61a054e301efa50df6c99cb9bb2cdfaff5bef1618ecc4ae3c07841d71aa13dab66cd081169df5b6ae789270e6d68c2f514325ead2899612a4ec4818ec81c",
  "2.18": "5d77ee8e9df9e9be4d68f114:b26b4f2f957071ff6786c0445f43bf52:7cc43f5f33ff716a21d87b0df410d273fc92bfbcba2bca3069d7f394329f03d77090faff050e48780483dd0cb89df44bd3af0876f0f95217be34682d39bcd6a2e4d5e597a74f9350e017f97de30b67a27a8ec13095c9a5452b0161248b92ca9df0bcf84ef86aff956a419ab1f1581de8ad054921f909d3",
  "2.19": "6b716cac621642aa334ca5f6:ecbf5758742eaf74f520d03a4c7c3878:4e158fbb2be2bd6143871c67673a6c699cb289f997281f53fb9c4a95d9188a37ba8e682f947ac1a9d530580dbc30c73513c07346c3e86875fec6406c64d16b6211352aa4551f5aba164c688be7e42ac4",
  "2.20": "1bb8d028ac08a17c69ea3cfd:c0606517f6b6941d76dc96a0294b4e17:3cb10c661ee48097eec987b4a8b69924d90a07d8a394eb91f63b5c3603a60e25f0f69910410de5487b3679912f430b7ba717e3b8a6f9ac776b9ca8f49aaa9205845261a24943c32c603bcad4773e54087dad177949ec938808720e60d5794f0cb6746796362b40296694961aff243ac6197ce20d4a348e3e4722bf712bd6b0a8e1bc",
  "2.21": "d4bfd4cca8cb87f0b33f36ac:4bb748d2ce7a02020bac98734a929d5a:d28e0d9930545a8c1aadcfb83bdf89b63dc91ddb234d4fd42241ef8c6bba52b0d018996013c88c79b6757bbeb55ea675b8e88e55f0081e3ec446726aa31ee82f688681516d763b3baa9fa0fe39ecd323d9c783511d32831a2a59c271bd4182e3dd9c4dae3da5b4503048b890801baa886458a952d5839e3dfe65a73ac6b4b123d07e3bf6f8a7e64a00077d7e7f733ea0",
  "2.22": "5f33f9228401e173197907aa:ea9403ab65b9b051ff7d6ea97df31b7b:44e4ece95df231a2cfd5f24637cc440c013bf9dc43adcdba9896ce9ba57ff860c27a60b43e5292d1ace98d4a0391f9037870f64dbf475b2124916631274be39a308ff3429721568d6875685c5b5a2ba953928468e154fbf5d20c17f4b4155a2103fe568e93bdd34cb3c15b7405cd14e5b707e489faff7206066057e5fd3da4c95ea09f1f02f50c0dfcb19517c1d202518f187b0b",
  "2.23": "91fa72911db76ea0d3c048d9:9b26f4435f26f6bde3f8ae134ad1bf7e:a0a9d7c182e16c96013fb8918d7caf34487921dd4c8a15e08c46477a08e4b6dabccced7fb39ad477e9c29beb8ff339a26530462a99a7dabfcf21e763e639f631db4bb3b1a378f2484b8c9c9dc6922f357ac7edbf4c9e0684f605743b298be361df84ba137ae376991db83dd7",
  "2.24": "7344aa9c57db9621a507f13a:42c7b572f61cc1879c13add4f7318361:248b3f9a986e6454099f54f5404800e1ba1cbc661ece62368a96eee20515b6161271adf57e7000d09759fd1340715cfbdd87a0224e1f3232374626ae607e58d2ccd08a71943b1565bb7947ae2980d1804567a766ae9472d3bbe1e6110f58952366acc1f6221bba3476359c08d47ac486b7bdb027d3b534516edf02fea595ae2a7acedf53433c96d31e845154f8446a60e584bb163ce0a37b5e",
  "2.25": "7ef0fd57f272f9bf39ca6a00:e352c45d18b9f27ae2b783e6df185515:eb6997fa96a5cf9b4ab58ee1b4df64c2047ffc6d35dadaa5cb4fc561a91a4a9f54a0bb03caf5f485845a615c6ebcac1e1561060121aa1281b24c0acd2ee95471e30c9b0c9635be8bf1c5928d2caef1149036d6f15882dcde8e33d14795a4fd991ccdfcc0e570120fe8ebf6c897ab31e66e2a367abace34658e6beff39d354045a6222a002cd9d3a4bf268bd29de3bdd2120d001ea3fb7afee8b125f05158674106c291692e4817c3f6db2b9c4fd4fa531589af86df8e2e221a449b410d6c137d332f87ca9f898ff6977dbdfff12c060ae08223a051dd72c6dd9d67eb667ba6ecf0700d8bb13f61bfae5f6b4949b10862c91ac00aec04ab75a9e536ce",
  "3.1": "80e1b7c92af5d7bcb812b28a:ce8395a75bf997808264907cede99333:3ebc291e2b271a71c58da3517cca79505b09a494eb87bb6c9b7bb7e317220bd3fe48d1f868f43395d4d7b267b39eb5656816ec29253a9555351e4b737f0e9b3ae5de5bdc23",
  "3.2": "94a95aa6d7d67ad2e4b3513f:b168647dea3e27691d56cf584f11d675:a2465890cc0c459ce288793185b54a59fadd8ba85a9457c4ce15d13871304a39e7930c16a3de10000ec7035361395132c3851014748b0e215b390258a9c05ab561d34d184047586cf06751d40846a48bc5ff0fa036e9279e2f15c851f6c10904",
  "3.3": "4fb6c5952179be87937d05af:8c9cabd5e01b80271868482e56707e40:2f59c620e775d504e0288a508b95fc05b1c31111b23e497de2991ce8dae031ae3fd376e49cd137b5aea078f419e072acdc18c46cdb249dca5b2add180365a86f17187c0cf2bff1c91eb1ab301487a92aec6533abfaf6486d991537212ef3203b48782695f8af88cd97eb",
  "3.4": "27e70bcb649c37cd0902a49d:17c7782749325014e20260daedbf776f:237bf211fe7b35a91b3a13b40892f4db1f5085600befb25a54b8db7c6bb54dfc57104e2d3fd12f0fef56a81eb16c87a08f2f3844565ce8289dbf75cce07aa71b096fea3a953a6350410b5c04fd8c91fb4289d9b62e8fc54e3c90933c34590d5cdc12a4d3dc434bc8b2c694",
  "3.5": "f352d039f33179753ce72ecb:6e10ad3437ecb3c03d5b0cd4f84ea9be:69a3a2a8a9e4b546feffb75c349d9cb61cefb042f0df1da5c5b001146133bbdad6100c20f554951d79f943c6c702595a3be9fdf4efc34bc08027ac072903a93d44bd12a32469388b6a79b1bcf6",
  "3.6": "592c8fe43d2c838dadcaa829:a2e2b86f48f459533b651a68a9feb8a1:f21ffe31641cc5887d713dc2e0c96bcfe1923c482ea14cb46ec786a7fac4f2c85cf0a46c0058eb23dc3f14c68a3324b7722631a02840012fdb4ab2068f51cfa21a5cf6",
  "3.7": "bcd9990b1406c20145e3288a:2fc8d5e5f5b09baf49c10d6181a93a90:d47b8c02d26136fb065df108958c58f87a0a78a0ab358fc8cfce0d2c91e20a18fe0e9cf5883ba50d81a9a71208e56109044d34cdf61921e50f4ff542699edd52b4adf97d1b8a8d6eb746991853ba1e58ce0da0961e6017e53d",
  "3.8": "ea6b7dab117698fc30cc5179:6fc69089aa8895c568fdbfe2552996c4:baf6fe4204fb629c521bcad80af67bff005c6ed365582cf81f46b0540fcff0846d205851fd1645a5af02e9ae1745d673f81511024085a3184942df87fb282edfda04fe39c8200fd1c371a1966c6ac914c985",
  "3.9": "37704f57f44757740e542551:3be1f6da8752ede3b3b216043b51a7f8:c68d50e0cc2a4058c3196f918fd629126a5d4fc277ddd794165e0e15cc51daa2111c6997163d85c74e9a7deb96a6cb1393b9fc2201331e8214a2346c96878a1db9a87582c01e28c9bed714b71fb5cf4e0bc373",
  "3.10": "40f3f66db45d3f6cb2c90429:a99dc14154815dd93a1b98a2d18260e9:118157155fb8816e338d0c65fd717c8173d7629b56f54baa9913cbcd1a731a4747bbb9126a20299ce5aeb59bfa50de472d80c3c285972548b073c916479e6acf5d5cf1d48761e592d57e0c3a850899468215a290288fdbf9e39113518ceaefe60029d07f10384e7440",
  "3.11": "552df5158b0a68f5dc1f038c:c8a31887c60dea77354c30b7d23b593c:7c756fd2fd941d89113c292aed37162de520e7afc7a601a0ce3b9dd8d3aebadf06a0b852f2eb6ea9020171404d02ab503ea199d50605da3dff8596888304a5ead1371ab62b6544b0f1d836b0552bd856c3608d6475a71498a2ea87701f47bb65d8c4d23fb6b5c2022211b2946785f236f2cfdd411418684c50",
  "3.12": "c610e485b11696c80b591a9f:aff6d1993d7316f87f48964a45f9e3c1:0b53a25b403da5e83b49ee2457bfe5075be528c5f1a7b3844f4d86380d504f3823063a101984b6c15bb2e6d4800150588300a828b26d655951ce8418b8f12e12a0a25f713ae4285c1aa93f476dce2937472d3c167cce80775c6a900036360940b17bfd51a752d0e65ab3f61f274f343aa0656b354f34b354b31d5aa4cd7ff7350137f78c075458e633c7210b0b622084cc0991498f2d",
  "3.13": "08bac4b0fa1c8fc1f309bc37:8558f381650881db37fd568e361a602e:2eb8fe0b88afbcfff72a35a1decf822d1b8894a89d6f15e320c4edadd2f26aecc2b39d33153654e96fa8ce36f2a1f07ccf1f0f560e704ae768056623c2d41cd4a4180884be04ea234bd8010297a15a6cada79002cddc79824677b964631bb3ed90b0622dbb3399d5e070055bf8f90548cee96bd94f34364eab5d951e62a12ecbc31e1881047082a069778c117df844b773ca7ecdc4f9",
  "3.14": "d4cda4fd1a3c15d87ac04d2d:f72cbf1e50bf740bda42972a4d7ad8f4:358fd64799c4d712ab12e6d5ea6ff5c9aa80e6a833e7148989d2d8bb6474b072fabf60b79bb7881dcc1e03be9e4f075c943c0c6478ed6c43afe3f683d45eeb6fdf86cf12df0c764ab1f44db6d100c4bb066ebaf622e2e26a3f58c6d909d2c659d49afe1c210f808f7560f96c836e0b5c96628d36125da9a6b6ec6ddacd8ab2404940ac38f0271d20fddf17407d5876",
  "3.15": "ff95a070a358b92c223f3561:2817f3bc2705f15fcb89693caf400df6:0dd18207dc7cc758ddef62fa0afccaac2f8d3d87aa2dafb21bfbc72f883cacebe99ebef1c44a82786865bb94b5a14294c49d797cae2f5f6562dc3bf1f246c601c1000e528e53781f6c7684013a73bf112c36a5fd2f15984cb797",
  "3.16": "c78139e801a5010e638821d8:3d1aa79536ec0b3908e86c6ecc2c4ce7:204c3b70dd1fd1d9638153b7bf41844b4d6575784b5553786627080590887d5469d18457d0b58dfa3d3266c2dadec8c60d542f28a725a21a0692f35f5256f646ae105bdae42fa6777b4087733064fca67aeaa59c081fe22dee897d2a5e8691fdfa099110ae8ad96bc3e9a63126befc3d",
  "3.17": "7b2e6ccf47566b14e39fac67:e032d3500f8fea063ee4e0d3e94c3d17:b2ce9f914c4a8dd11f756b4f16c42c65cdcd44118f324cc8bef842e8da840c7b26b53aa8ca92d152baf4accacd49b23f02adfe01bd131968ace2398f4bf9d7e0561aa8ef4e53cb657e3309565ea9bf9dda37985b6da4e54a0facad918b222289329a4f",
  "3.18": "5b5a0efbcc0c09834ad44e85:9b2b77af14200b90772905dc50fea37b:d739c662660794826099cd7642954991563ef2ea47d3aa6602b99aeb5ff483eeea82370ca7c325060154337d0aa9aa2136ac47cb66d1279c08d334c35c1b91e3e23ac6c5d810069344e3064510de527104f827ed3b9334076787485f7ff9c71e847ed172899a9edb2b",
  "3.19": "44b206b50d008bdf0810cc71:6868d57f8a8515bbc926aa66d67b3948:4cfb487478b314662d582aaa5882b72df9c74e2a89a51bf3ac4ad4fc1127dc898305a3e624a49f2836fdf430babce7d794961f94344cd4a0ff0d698c157726a1862c247704cf45ab29555844fb965950e842f7ffb392c66bfd110f2eb467779e5289c2de3bb05b8d6e8ecd7d453dbb0dfb53a74b0a",
  "3.20": "6fae3ef7f1e247107af7e3de:90b6db76290d26e1250c356a77ec4f3b:02b7906960006f9ebfe238264dd8056747c3bc9e10a9a9397ab05e3b02ef86bed47e72c659606b63764ab0fe4e72b2d633de23735d9430ca780ddf9ce33f2eb041",
  "3.21": "125afef5aba247b2c3a8d215:39e163127438dab54bd61e82a217ed15:2d4db074433f31df3855499c61d328875c573acb7e4b5d9e8ea0bef392aae6ac976aed34be14e081ebdd258ab91ff5e700a58d0c6d63043a43561a63ea6067b43217c805b4b3c084c143bf177b39e47bfb781a924c1d63ee78e651a430785d1177987687d4687ebd537a5d092936f0a252b67d93cccbdb17fceda8cd49bc7061f90fe9b7732ea963dc2c548339eb15970190690017e71922df5c21d38813115ff68f5fecbd56a83182c820dc74351abe6d",
  "3.22": "61dd957048f9e613f5738aed:4b4f6a532b044adc917e706a03ef0db1:fed9459775b0b457a1fa74f7527b3a70d0a018a485d1f439b68fb63530b49a2d77f712958f74c1eed181f1852cc32fa3794fb2ad9bfb127f74f833a55cf189028aa85e67ca504fcdb1728daf74103003ed9e90eb0bff34e932ec161e16eb3c8e6e01edc560fc8bdb39020185e02b6b2c2f4550fd31cb5d0f018d767a7701dbcf6dcb143c956e52873b7bfb20c6322292d9689026caadcf2a28fc82fd331ac37f03a7ee4f0aeb268262aa78fef41732e1b35680f9658f3355634547bb8726974097f18365d638c5d8d3a1e99cdf7af246575d56eab9d015d38c3a7c517166882a",
  "3.23": "b23ec6e563c0958e434c3ef0:6efe6e87e0f9409efaa3631b79fc53a7:00c6e17b71e8f082f1c9cfebd9d8d43f886a25705e4a9074b071e2dbbfa56573c872ee044e7052ced489087af3f239768fd862a08c092735dd05cc9b1bbf1e10ba24f4f9d8f43356a86a693eab",
  "3.24": "dd76a58e33b356b676d1fbcd:2db164f615c869211a142890020fc258:c30bcb84dfb1c5077f8a9f710cb9f13d3c6c32696f8a4e10787a44099d54a175ce4f0ce4e9461362532770634693593f151ab30fe6b05ddeb413e2253074635d9b91e9ca7ec5f09b869edffd0908a0855ed240752cddbdce5f7e2a271a078e79",
  "3.25": "95b22369c715a3a504c362f6:561c5d8e24a4a3ace98062aeeef6ff3f:868c7f46217e178724d39a8238305453bad06669560431233a8755e285eccc5c755eccbd4cd5c1f095f3e3d1366ee814835e463fd9986b1b3c6067eaa608c92a2f2d5621ff50ad2d2166ddff73e2fab00566f2ad3e1ef10b9e9fe199f9d8f6e28b5845cf830efe",
  "3.26": "b687b6a3e2e13b9aaa738aad:90c8504c534a49eb119b8faa4122f4c6:77c38fcee321c3b594911a295004c60f254b8b0c837f9e9068c4210db8d750103a8dcfb7647ebe9818a736f9bf407f63ad52f50586fe8514f4b1e8f50a4f87c735509ddc4e2f6ba32da9f1236826f6e1d67b09faaef7835b5ad009308013124b21efedc480ec2b951b5731cac08a842d3fbacbc03d8c66a4b8cd016516010e2f01e1b0e421921cc24fb8c2075c7d927de4a75487dfb712fd5c6b9842ee9b855c71d1a5890e6f50dd46cd01",
  "3.27": "4d331ff163ca3097f140e562:271e897f9cd95453ffff863f008b7bab:a77d31ea3981dd09684138fbde0ff0e06fae5e65035dc7850b84129ff89f64618d9b02cd7681cae70c0c60aec155084f910b3e24c38ec1c14969c2e91a7396c4841835c512c917f09ec324d75da4e6b6ebe12cac6021f0028c238a230a851110872a03038a7ac891bda77d01a7aad6f97b58b489b26556ae109752c158a7180ab864d757c9fc984e7d8c679ed815a2da8f3f23eebde38a0163b6de9e0b83c91b22758450d6d75b3a5467da6c60d26e8f498821",
  "3.28": "1b03026a288188905a5a2f6d:a23c8033b8aa48661131b2abfc5740fa:d0a88f72e944b2bd8ab0abf8287bdc020756912069833dbd207750eefe97e878ce9f6a482bab3385e55848ee17315c72352bdf784f6eea85d0adf5dbde35648c33cc51274b34390f57c4d30f008754d2d668a4afc5fa84bd2eb7322b91595025ba9489de729b1950a33ec760ab217d4271f2a6e605",
  "3.29": "fb7820c041c52426a16e71c7:1bc07a8c155f20224602b878a418bc39:64af35c3193913031261bf0b9cc2d9779f9d5e842606b8a008d9251ebcfb2084d4ec1472862d283c34cab615d959a50318b13343fce32af9f16cb8e4ab905cae55bb313a746a9d2c2ff372069098e3b3c75c0d433d19afe29ecc68ee5f4acd0bfcf385c33844e32edbf95855b6e382f2142ea82e8d811eed55e18057e7cce36d1f7d",
  "3.30": "8c5ade63b78fd15cd3b9b4a2:eb04157e341ffdb29122ffd1bfd369bd:d6d53e515089f56c5eae80e97296c7fd39193550b28e31e0a13e8c7cb7fe354c4fea2b4a8c200725a4aa4d5ec4df299d12ad71515a42dbd2c31d93bc0b785203d4a21913b7163f3092884fb170263b9983a2b4f6355dc698",
  "4.1": "7f9bddccf664c06fda74d912:d558ecbd9f471b7172901d7de697a5cc:9c91867a538c4a0678ac1d69d3c8e77858e0feb2628f7422f3fa3f358bf79419ee453a7f8cc6e4dc250088b01a9a1fcbcd6c19f717beb399aa22416e02e27a5e07504f3a38819093dd975fa96fd5534874ff3473aed1b75065a80a6f78ad27ede9e4c9f3c5df52",
  "4.2": "daed03287ac97f466d190ef1:84f794307a5b67b9d8097bfcb4c2a583:3384fc3426a3bd8c92970683cea525bb9be29ffc1d8de69c6278e8e8391f934f9f3bf61afcfdcad31703d7b8ab86612aaa5933fdee97184a8bb6bc1593ccb0a0a377b8fd3427383ef6d619d1ba2b98a47acdd29821d5ed1f60adb25cc514",
  "4.3": "38535728003208c286ad43d2:0a870096aa8857f3d9b29317cbd06b99:0b26fa4958b01920a4748ce0b73f6f519d4fa48f1d8a93099a98986f011bcdfb1ceee3227a5fd9ab5259c89320030025219b123e2ecfaa06b2b7ecd88a6bc053350b88d85fc78df2e38ed804ce3de7d288d44d0d3caf1120936ea8b2db77c19d804f51ddbf70",
  "4.4": "ec8bbc2b501ee209951272d1:84f8da7624e2e28d7e91c8654ccb11c9:46b8c11b663536c87f30901e7737ec18fd12e10206d20cc64814f76e3763c2ef7ab26a02f81833a0b7f61c59140095540ee4c9fe776f360285e9d7d5c082b01bf07ab103a6005c29a349f7361854a2d7a5c50ac0b88f3ef551f11ca646de661d9a1770215efc35",
  "4.5": "0fa9fe208ebf88f1cddc4a4e:d939fc61ba93e3c81da3a0ac528e94e5:1245642517de2ee0efede5f3f8df0ab193dead84e0e548e7c24ac43c4a698c5ed7bbfa9ce3bd691fbf58da348ee9de38ef61002dccf3e2456a30953d48f1ec0ec7a96f9a47fa15dc3e31455a427bbaff566f43b583c6b57ee5f05a2684d478bc2f35003fb4ad9cc38a7f35d45f0be88cd8b0ef061517dc744b8f02466c093692419ac2efbfcc93667be892481297",
  "4.6": "27f1f2506c75dea3c4f45cf9:4bbc62b35ac03ed3c8aa287a4161b67a:936dc464cf2df524852b106dcf8ad29359cd11f6a8db42309d00d1eabbfd2d1458d4b8629afb60bfad0bd499c94f5945994ad9890667c148d8d9e62150282ec01a1c3a813fd1e788995cad9f54f7d580298f7d7e82f40f888aa930060ac77e5cef977cfb5525724ac70a80d74de10aa6a00ec0bcd9033f046b19650edbc58df9ac491b3c0dee931dbe5181f8385b6acd11",
  "4.7": "8e756ec0b16f47c7a1003b57:34551d5be1c100efc8c74ce5c989537b:c0b01c126e1b0d71691818e58d607eb0382c9d6b4e96730e62d6e973013e913025e5f9cbe468b5e5fdede0a375592b286a5c7ab75b8d5ebdf6d6dd8a755f251db65a1f146673b0a096128b68fd400f647db0c0f3cf571c9a319f853b64c6adb93463cd3a1fb34129f3b8a5dc7f904413c51b47b4efecbf4f01893277f65761",
  "4.8": "1b8b3543471d21f558479084:ed4d8e32af092d724fe686e2a45a0881:2a86e9a5b03e60fdeaa92e8f62cdd698a833292f312b3c3ea4d1faf196c206669bdbccd99a1f08673d37cfe2de25305ddd6b720f4295e82cac8853a1315978cb00ceaf52178a42db78cdd928813a9b939d5bbe2a33e184601b28bc60e9e7",
  "4.9": "8fa693ea9b13b16a61cb222a:b686da970c2f74d5b7291b132f9dbabd:7b9f5d6b8d939716d06d4c6b432589bf5bef3b44653b767af47050022b7d6ce5afe6f1d45ec5d8a9a031cb00b4eb74390b14f0cdbe1b9e44a952ca346a32e66ba6aa5ec6ff1a44cca64afb2dd05ec38e16501203f64917e682965c84e25ad96586bcb932bd4da746ae8c9d260f8bfa0da6633c01d74f10569beea1abf0a1",
  "4.10": "2e121003a83787569b4bfe47:929a3e228ca320efc78b5c4c3dc1f78a:3c4852a10577fbf4bb20304c893cee1d617add3d2fb20cae213e0846e9401df1e7fd8e86d3b10eb70d4622a23b7a4db001ad88b9419503d36625e75be1a005050b4e7efdd6a977ef008b0436fa2eef0a0bfaef14d58ed9e30ebf39e350545e9ef8f2299399d1f78da689ab20d8df0537f80b3e41753261a72cc8ff48a8e6f8c0414529b41817d83158dd337e7b2ee088df73ea6a",
  "4.11": "bf9fa9ef0d04fbd568d33793:82a49470e615bf0a97cb7df5997bc01e:ba4a6e11dd93408ee3c11491b0268c0445925aaaf148f2530f9f4cb9257fb63819dfda8ccdc312869f6eb091b2f027c3edf83a31323e58d8f23a3044ea0a87fc1f2a8b32c9c57220a01a157ac3807f5096ae99792e09313208d108db9b6c",
  "4.12": "43bb5ee71586b038d80177a7:d5aedc2da1df8285298b23e2335c4e9a:0f721bb09ef52b4c810d3b44a487d384ddf3f62db10a384467747819bf7b8bfcdd00c06a5e714411ca45c1f1c4913114e61a7f3aaf369d3b40f98b2f7425b5a0e61e4d21790940a61a8e2447e2f4e53588d7efc935640278202801676aa559f84606f3c38574d184e1a6f336edac1fab816861343e45ff53249d773ea357c8fe5228e70b7691c1ceb4db9c7a17c62a60b59d99950a452e2293f6488d0e38b12810255c2155af2bc9964c29c8f2c64a179aa45cb6",
  "4.13": "6b3185b28f35f73148467ea8:ace88ec3579ddfe48d4e1128cb7b3fc9:20ecabe676bdea81326589490a82cff7a835a8a7909d02e81274746589e42fd3b7aea3eb9e390ffa7edebcf7229765bd5f501b950d3cbc3498603b712ff40a6d6067df5a9942b1401d4d2036f9e38c510b85a6ab",
  "4.14": "3dd9dc347891ab83d7e9bcfc:a2abd15c2ff9c6269cafe40bf355d326:32370db7dec1425f2e32125e86742a060542d63846a892a8d0a8c5bece874008a11bf9b8cc070621aa20cd8ddb03bd9c2729a16638d9f4b2509d50bafd8e48c84ba666fd75d740cac604f59e83d9513683faaef6dcc26a1ae3f3534fc317747f258aa8d4",
  "4.15": "0fb8994cc8842d7cfd78442e:919b26cb3bff2eec29c2552687d84bd6:2b604d4ac712399cad93f623a42572cb733db2a360bee1a1fff93c6b5b5a183dbe4245bd764cd7bb2f83bb06f2a3bf0f86ec08f14cee0d606096bba2163203bf1508e3f14a687d3437aae48d8c9d79f73e0d5cbbb9a3ff5d1811f16c671c9bf1c9731c9ca7442a9bf52bf5666b1435a3e29b111d23b10b8d",
  "4.16": "9567ae5ef88b4170237d1259:5f012b6bb8e723ac393c74082d2b1d09:f5aa3dfd0e5d1e87bb93a4260fe4074b650eb206abdf3599db14a3612b74bf9fafcf65a50a6728625f3a74a6fae45f3a756ec02b29ae1a3e55cc0d1e0455476e190871f687655b57502b3c59ed6d12efcd5f8a6bd76e5a8fac7ef9a545493c652922a2f9930afa36ca8d8c9e1ffed04be495604d076e959ca353936cf6ad152143915da55e37ba1f654a746adb3eebc28f3a521c112f6c4e3be43755555fd33ce341c3c47c007a3db771af6bfc933af29a864565a61af3b442ea02fd3a2c3cb81586367dfb52902ef3d8387fadea",
  "4.17": "0a77bb1f7e42364fa5393ad8:be1593a23b03466ac58a6b6a129f7eab:af2c11e888aed0c6ebda28c8fbb05052f132b2611f88890bc1bb9db2bb470bd1b447e7ab1fb0a0ad6bfa5c224ec369b25c856fdd1dad46c4061129f93fd44ccff3ab47cc7da640f91e8fec51ac585995e5e2f66e0c9066fa9e73f283c30907be8f6f571508692ed205d8061e1013180507c524448bda3f9f3943c3caed529ecdb292429abbee62ea9a2966d20bec",
  "4.18": "8ef8e1c84944801982265224:7f33e30e3a5ad68200b79ac445206485:02e679c76f40a994231a0ec6210eb866b85996e10b9501ad53574f115c4e8c088b0839a439baae6e170a95912dcf226267c1c788fa06ba6fff8206d9e4972b6897550bf2289270a2c3355b1980b7ed2ed30d0e06f35811e66b3653bdb6fd603d11c00fee355b00a753fc69b350cbcc3ba47f86a4d0bebb8979b03888e00f9c4f633fbb7c0fc57e6b1a427759",
  "4.19": "0cb8ab0ee9bae1f7a4000b6e:7fe4412e3a24ede8ee985768fc231b07:143886d52b24a88b0226058831f3f4a2122a8f874458035b8e96dd2a307a96b89158118cfe38f77d08d16a3448641cda1d09b9e6bd63d2b4317453119bffcfbe18bf1aecf4c77b05f859c5a7f4f4b3d51c0d654ae23f8395811bf09b5e42b7a42b6af20080ed9857d6862504073133ff1728a8abeefed6d94144481c26af139e8d63f4f096cd360698643921092fdb9da4bb98f54d7ebeb7788efa3d718d48184b0640a0ed6adbf925",
  "4.20": "168a76336a43aa9ed19ab982:6cf5e1346dd299bdc6b5ddbb450c3334:678b9f226da026ec817ad33b4d1033003187d0d82a1c8c1856b643dbb8d1c07b5f0a84e856e7711fcfa1c614144f0d6e314fb7aa027fe8f5a6767bf9dd6c75f4ff69d3c20aef22ef99b6a93e173de8ac175667bb64670265c701939692e9221ce582fda6a337a314a979fce11d434795298cd511b22577d48325a437",
  "4.21": "12a7c3ba8bb8e1c35567f3d3:b8c122efcc047ea44d32ccde33f8092e:3875a237d3227cffd19edec6c8717fd64d42328b8ab65b8488a637a35ab4469b4bd661abd1ac9b311795b5ec0e064ad2c578d8f4694b2dfa9ac17f2cabb1f37e77c18b6b5828ba0f06007b9f29ccd1418fc4fb6576fc4baa6cfdb066f3440d6a84fc9219c5efe28c25882b401c157ae0f7ac8fb85e3e96f00b58f04ad1ae056e20b7398f62a68e1bdbe8744a1ec456a3e7fdb26e73fa2d242a97d98b4552fdfc75ddb24c89",
  "4.22": "6ea4cad6d96a5026a406de0a:d6d66358cdd50f973db597d429df79f1:e50bc7f716ff32f3217ad8276c8032cb0dff71627bd8bc252b5f0e39d110a2070aeda21697db2a99fa2505ce4fd7936355e003ab11d4c2792c355b3ab28894b7e77e223a2b52ed7f538e95fafadc23eb7bfc164a0c2fc73e142833ee6b0cf621bd138ba036864fbb7bfa3eab664b23c222081705dc4979b5f8e5046fc409e1724d837180a98b632155ab894cc873a4965562c87f281dfbb66ed88070e652d9ac1cca65648f4ad5e3c52b9f228b3ce1c245a6ee38985e8a7df16b2c79725e",
  "4.23": "96728ae80c85bed73a3b4cf2:ca7d256acc2fffdadf2999587fd17fcc:fccdf96910b43ad204e135ba91ea541be41e3f64743c716f7f46d759459c66a0fc9a58469cdcedecbabd69927420af9b1805553310a45153bfbc1daced93634d2fc472f4ad9b4ce93006723e9f0fa826a7ca0cda4507d784b2784510c162c0c61af9d4a08d8965c5fcaac5534efac3a91a58f88712a4145b1f44a1a24ab6be6096eff4dca2cf3c1f8f6c3bf1fa17af8b727f9d91502e71bed3df2ea1dee72946feac570a82a2a1499a545628e0df",
  "4.24": "e7adce3fe864097f34a7c487:038c1daea2c33738073de1c034686fec:6843dc3acd04f9b6de29760b69e08b6dc33e56a28ddd9b54aec940c87e81aaf56d81ff9c5af23ab76eedcbb9b6659ce31101885938f78b8f9a9a6312dc5420e1ca032fd681b75c8d5b1b2e3f04ce0ae768e1309d666d6cba4bfa3360847eac98392edb77935870b1b81a4c7d61d59a01c2581879ecd53aa469ee7a3549847652620afacb0cbdeb4563f345a2bb3b05c3d2b6409b887bfee1a50d992b",
  "4.25": "e3a89db3898ac25b3a4a83ba:71573d47b8303c3931346f4707dec7e1:b40f7fddc7d3732115fa2e298aec0bacb5cc39c48f9c527cb920a9b1ef989273ab860aa8bfe19d635ab5f3f6341d63878781cb234c3ba9c7ec24795f3d0c5d3c5db84784d8581faf1c0af51e30ec4a615245444f9ce9f19a992fa5c38da7bdbf02f8873f8b499f0eb4682e4bbacb5e8300de07d8444c97d7b9bc4f33d1012fa99c4e8b59c8fe4dc56a823080d06a",
  "5.1": "1ba245e0d4bd1a29724e43d5:0736560bc7a3f7021787019838762940:27a249a1d21b0094b3d4f1e6e30f66b5149512ff2eb3527624b0e85fe7d1078380308ed7bf44d972c6706217e5fd80f15d1b5f236287865303d6c92323f802d74f522b6d00917f7611e15ad6cf3a486b3fe61266c52dfd5f5ce6c8e44c98d5",
  "5.2": "7567a4fae07fb6885f262ad8:6616392549d8f242df85ad28da26e0b8:f6614d5efaaa77f19538207832fce9174307a38f68761db54e8b6af84cee20879775c3e0eecac4928f7971c614d5159d85ee1a672777523f92278834afbaed4e85f5f33edf406ae0c00873d0478c3ad211fd9d88083374a1b58a5f78eb9d7a9aaeb534aacb1b402881a5e01657e97d946c18cd",
  "5.3": "b6b134db896d9416406a0f6e:5c2c7b8c763bf23ec3e7bba94dba66f7:ab87e900b97262523b4be2054664de6c93f4e3b9834dba9a938cbdac1226c817ffe7cc428fce834550bd61d85f8fd13876396884b0ade3b5bcd6b32a24280bed2f1a3a85dd1900b83fd8f39dd07be11a96fd4776f97730ec508eb243e974",
  "5.4": "448e8cd468552818dfb69b8d:04b8bd5051d82e5e97d70305676ece30:bbb3bce083f9c77390d83e61cba42254ef128e4aa6bc547352802e66ce3e9c8ebf770ded54e1fc194dd31dba260f6bd9cc8c03780818eeb91f39dbc40439e7f192dd7657b0a1136b4754772217d1ac3c43f77fab4167a5790388039cd3a133050c093d0b1e541bacd08cf8377e7c4d397a23e164d3524c0e9b479661b2c41ef86d8d01414c70",
  "5.5": "b6c72620a635cb823e7248c2:4c2c8361ec2ef90e97dae0c53cba4f10:6aefefcecdd0d0896ae474155c526ca0f93bc8054bdea4d5d9405a44cb35f2322ffa9e3f3bc95625b0afab53a482f80a4bd4ee6fd24c6772b2e4d9fd2a38ba3d459a2d74dd29e03fc5cd90c216d45cf665bd9076010438c582672f0b106c47689874b37af1a9b7aeacd6684d2e75d906b273767a05f17727ed70c522",
  "5.6": "da8405d4c16a53f65f50abbe:60b2d3073b126212b8fd154ffbc12d7d:562967444beaa5971a661c11473dd27fd1803e2f3408e6fe79e5b4f558422b6423b20d28f3c310e097221636c56f3b7c99df7a81cc0f12b9a9f01e65b3e5b11f3ff18bae58917ccac1622f0e8d5cf1bb7ace1bedaa18777db17b56b9e6aef56dceaa21a34ad4453e0eae",
  "5.7": "d28b8dbf7904eaa428ebac89:c3da5731d709fc0e3e2b429110c9b3c1:8393f1e674dfd2dbc1ce0b30d044334f4f90e2e2d169d0469f1860c6674d7d3ba2c28a38c33974aa679366feb9fea2bb3d5c03feda7b93b9e4dbf352b3674f0002a0a0",
  "5.8": "c98d736bbb85fd49458a3107:84a3821933579ecd94a3593b57825f17:6637b60361abfad9d10c7fa249a147fb6f09021d9d7332ced26588ed3f4f4081f4fa0dd65225d7d879b81a9e070e7f4cd867ae87437b86993d7b1eb4b807d48b14cc2d014782a62df24dd266efafbe3673a0f60a5216758c9800af2094e0f601b86fb76535cccd67089a14ae8f09b1ad2570df520824bd86d290a326b79e9398be3f81faed0d38511cd6fde38f2951dec2ad9c975f229aaee27a65e3b16a961cb70df30927",
  "5.9": "f91d518035948a7a51c2fc63:152e04f452138960801ae50a53a94101:6752bab8df5457af6f08aea5224046e507a8d77cf92f4f97cc513acf0ff41dc9a7adfb141402cc1e454a68ab69abc616eebd5c87cdee49eaf84251",
  "5.10": "7360d005c56ed9d091404454:805da383ed8e1d3a24be27b7fefec34f:80e9980245a17010423bf52e253d4c38b24bfc4558ca557fcbd6e4f4678141142b3b21d5e566cf0113a565a057c532ac6e59c92f3324d756f668c1",
  "5.11": "4db84d4a7df1d1e764ac8862:8c6be41238cdcbdd85cbc8d1b45a69bc:80a8daf43e463274bc586e1ae7f4bce4b5b407d4a97a65f13da78d66940e8726346119fa8522dfc2b84e09c8323bc92f38f2a1f07f7a1f4ecb59aa400fc7e914bc1a42ee3fb18376e8059b67a25da016b792801eeaf6d09d11e90ca70a6d21697f3854d02b01e33736a978",
  "5.12": "cf73817285c1469dc56c694d:9de91ac6c68a6f1c5876903d0d7674c5:e424c5d1af6b2138bf204e851c74bde2a9e3668c5667621c0521c3d2510ba13cd350af416842c5cde4153a87233b38d8a80f67196be0d2e6e08bb34a5ab654610d6411d17d62f21607ae6c49b76e24efc41f86e3b408faca70881ea2d625679f5b5c86fbc59d4c03e27165754ec2558f7c230177beb7fdf5f4086de93b2e704c44e0497c67c82820e0",
  "5.13": "b59a0a72fea6567374631997:aa42351e6d3abd8e1335d46429429897:b6f89d35e1ad92eb68d4bc038832d2c4d5393869e909b7cc13b933905f308d24b39d302a7783b2182cbf0ab31d4a3c099a8d3391a1c25e320682dc4804866720f55557abf1cf4663d5f95a5ca57d17f414dde49d189d7d6b5b070aec2219c077a432445b454c33331a0c06dceb8f9c4727807928a2987cec13ec654eb3872d12fe2657ee4196f2a7efafcca7076e1e09743081ad60c1600253028a66b7d5345a480f3ec0c33a074009050a48215633e019181defa0a79656edc05eff033cb2bbed4eafc95ec98695f5184b088a34e437e25507996c98e656d4d5647e9c1cff41447c95ae5a16d2b210c3f8ab84a6d9c7e0007efd20e09a59754a4e412aac61fc06c0c125f3413964b892922de06b787fafb7ef18cb7e7d0cb909f9",
  "5.14": "545a3662ee5374ad71644622:87cd1926c83895ed3f50edeaa3be63d2:e5e4f9cd809e6f5e3db84b3d9e3107f116ac1bfde902597f951c621308338ffa3513d56767e6d6a2b21d40049dfb205d9d2218264cd38f664953e87ab3ee8f0614b6a1d6e025eb206e555a01bcbe70b51669ba6281f79c5e69a9ddf75ffd0bdf405b13300567",
  "5.15": "4c33d338c3cb2b2de366f62a:dcbda3e803072f8917bf75dfc70e2ed2:aba8dc85b734c78df7f93c23f368a93b4135677791650b9a4c60f93e4e7199afb0c11f7deeaac2c1bf3d778a37e3faa91888e0188e9082567ab459a24a7f8d2f0e391181d3cf75264758a5741848e8246e6a9ef23c2a57a2997eb03a3e8aad8161990f0d3bec71966d68df3d649ea5970be9f49ee3fb9cba6d6696f083abcb143a",
  "5.16": "4fde2e47a7f958f7da9e5917:a6b9e230bbff55912c9c1917c1f33b98:c83cb2d739032f56129160d8df192c07f5b7ce3a22efe765bee656f52bdd07ba398e97d5ea38bd15c3892ffd54cfbeb8bed412cf63e05325a9f43503866a7058c71d8d65c035d3ca74dbcb35af39b8708803f597dbe9c2295fb3fabc8768147cfc0f3db4bb46082a669e1a0d7bebafa69d489b5efb52696ede37682800baed6aee2679c0e91588b95530fea433a7b60cd7da540f3aa1a9",
  "5.17": "81d600d359a4091e7f742166:3f7f276f673b42841ea08c65e4d6e357:532c3d33a76172fe2ddc7f31bc6d2bbe1e82c522c473ab445370a0b02507b63c54950273a71180460599af5394c59244e15ca1e89af5c77621129050b6ca7e0ffc265060f650e5ef75ded8b777744f6b8562fdef30cf1af5fb95e4afbc406c2bfb9740393fae5637ee9a7fbe0c7bf9a3fa8087e515f44e9b25f8501f171b01465419be7238d161f66958b54d7875e4925757d3b5a98d67cbc68777b241",
  "5.18": "320c453ed0b4242c7a82e728:f5dcb8d2a93f83fa9e4b6b68a9e4f284:38e208014667a80ab3d5267fa38269fa2867c5f5a5eaad6a4e2a9d02e28134316872667920da877cd3eef91fefde6387564e326f25d9832c248a146139c7e6a8a34ef3a8563578a0050312f70615430f52ffa737fd35051dcf3a0ebd1fbced63b4ba8e470114c1fa8eefb4bfc07c592685aa6a8c9383540b01f31b14aaa2",
  "5.19": "11d8ae50acaaa36dd4822396:5fdc4edd24cc614276765a66962a3a53:7bbc2e38986ea1fdc0692817ad54df09faebff097726a1c765f9fe6abce9b42e2a46b5cb9322e50e75393b9ee364370da4374621544481294cfa3a6ad6fb7d9f63af5a4fce9f1311531f7b68b8ee301c6d22ab1fc875905878bce0bbb6f2520864560c1eb57e22a9e3e26bbccc616bfd29a28b1e2273851c7aea8698bd564e0b81b6acb5217d91c63b30274173439f84a47ed49296dd56c2adc559407af50ca1a9594b6069f2bfc5beca4960ff2f2aeeb2d934e678eda6ed190dd5a1b73ac5ffe6ad33c4c6032c82a61f61d840031aafe871c956dc74",
  "5.20": "7658aa9d5bde9d421a13319d:b82155b4c0e6cc87946905164b034ffb:153d89cd4fcf7548c39b0c62fc300e09794f53bd6c63de9316edcafd516ac7f22759144f29109482f2412c417625c2789b6d79f3444c30c6ed50a3976c56f91c9234b0e671b34ae12e7ffa66c053f2d23018b2a43af25f02363356eebbc51e52ae52e294f18e95e3d5f43b6c27a897edc0230826fad1412883a44c6c77c904c2522c75d740c8741f34408c4b86203d3b78565d0e03946d156074d12d35efe834b4e903ae3fa706f5fb9bb7e29b67b16fef11583701b82a3d607baa090c33b5e1463b2b4f90998669189834d63369a5f3ffd552ed",
  "6.1": "9dfce6c7c6d72675cfa7b5fb:c01bbbfc3dbbe9753bd550be650b0050:22dfe4fdf3c210c93a78667fd90a00e2c37bb75ac9074da21d36880fef77063e4a437942d36aa173b35840450969d6dae7c32cdb36bf89e926db8a471d85df635ccae2ecbb2421dad2a39fc2eea889719e57524ae389f96f5de2a8c3fe62e26424c522c8320bad1a694da198a5801a8876e587a0c2617c6ed930e813d6016e8e3b6ca29c427a0ebc",
  "6.2": "0afc84902023ad2fedcb99be:8a39a5b6c05bd15f5817bf8837ce293f:6af509b5810fd071821e84ca86ed93f48b91cd181f5ca5ab3c2c1ecbe3d42e8089ef95167ae2a06211ac4bf20e790fe697c478725b95594996f9d8003f5ebe89fda4eb810fc5170e38a0dc63f49cd34fa928674d5af9d85b179f8d1226787b340320289db6df822b96617cd0962aad834ba7ebc6815268c6d4f4a042df4c0446345ea227a502424d4d1dd7cf6ace4acc",
  "6.3": "e3aaea1740eb65670ece9166:a25ea8d9b5244bce316b37afaa2a5b96:d287a6c7c0cb657c2884ba94b53547c1273ca159422c38f1ac77629119d2963cd4acb8607f62e2ba821899d8ee22893d328225f3a17ba8d65560bc3374aeea8959d5867d29a4721c195ab9cbf8bdd8ae6e213818d972bae6934b11d5869e1f08ba97a3c8498b6cb72ae303d1b3c117f777f7d00a4d618665c9bbcfe6f96ba2f4a57cb939e3ec0c90e6e78147ee5bbb",
  "6.4": "297c318bc47528fa352d25d6:bb4ca79c7b497862f68aee58b7c51595:02db5f8e9ad74342b210d072ad006eea0a0c2196748ab03cd11a1681ea69a42dde645d1ae5543667bb68b94ccf4a9bd85c4edf370610c42141f3d1945bb62da809ba8abbe1ba90b77345f3e3d7bf98b38760c63b0d69385cae629c462457bee170ee1c38c14c85fd7fc299eacba762835a068cf89126f7b8239be19d3521e93e46555cd530edb825ed4f",
  "6.5": "96337f058b60b06c7b78f24b:5f69e848c0cfc86f2ecdb94a53b179bc:da2a7d29cf30c419d8265d2d645ffcf3f4cbc780c1d07d4bb2166b06768b211db3064a9c3db52a1202d9d459666641cc6b8f4bedbfa3edcbc2acb165159a0666800424177d8515738dfc237b99c986b64ae2a1f1162c2c60cd6f0451e3e6b4b6d6de72ebf76be65736ed9b0cb94ef3b88001323c849f8a170c7c9de3c20fcd3b942897da8409863cc900772795529c07299f2aa7b8385a5edff87edbb536de7be83f3eda2b28a87b2a371d5a08e580b490161ea7409c5166f4bc357820a23d0f493d2bca6ac162fdeb6f0e64ded99dcd34f0b8055a1ec2e759142fe003e81c6241",
  "6.6": "869a00a9d98fec71bb563dd2:c26636b68020a8c3fc7e0448cb58e1e2:ad921f9be93ca20a7040eb51fc7419eebde1881d19fb2a81ac3bb397987b30a47cdc9c803da8006774c9fa77aed4521e738613883fd17ef8b6f1462989f0f11730045efd3fbe0ae7b51f35b6f1dddbdedd2600c610e9893887fa376a1332c275a351e9faf7ea285e92ed5bdee58b2a6b150b8ce6af130753f419703b12af9d8ee3acda3b3040fbd9eb549df4c5281c18bd863c601affacf5e77af942068b815a85ed3e5723c367dcc29f",
  "6.7": "644ff83e0069d1e6f3d848c9:5f39ffb01ec2e0bef1889796ba4eb9d1:6a6bf0186838ef8bc5f2e1b22d41d76c414ac8bc163d49a72c8870f5c00419152399b80f559b0da15cf75d6539651894c593aa1b0d7e5e9dcb238a810232e699e17ed07191dae2847e8ae39cef85af3641a6ab5414f1da8e23209439e5bfa15d573e3f5eaaee90a9c31421b063f8a6ec851ec67e2261b375b5eb88d4fc0537c957ffe20ad02db954bf659a93e0f59bf806f89c",
  "6.8": "d9d39f404d6ea1d98fc1cca1:ef23fc8f1b20454a172da2b45304137e:89ed4fed0f6d82d002b70d5b56864fd674a7a073fd4363e8e27ddc04e7d3c352f9647c36822aa579931d0159f5cbbb4f4b8de990708be356d651f4e0d9fb85d462f09f7ce76a784680dd03c67f3a8fb7b06cd22408f4f12ebed5cb55f143afd07687ce5c2b8cc57f2326268021294665bc555db1a93d38926869f9f4dd5ccc4dfe912034d905fd8f8b87a53387a4a8b1b23b36bed73f765e6fe23bacd6c8",
  "6.9": "394aa6d9c9719a61af4d3411:a6c4c65b404bf2d052786e15d77a0495:dc1e110fc1be9cc5551de90165a66e7f18a67a8a8a32d0ec022746e2688f861b1cd8aefca84739c7c31c7aba7b99a3c99ead1402614c0fcadc562a49ab8491f163388f4a5bd530d47df286a93052b2362c597558eeae44b7a3135cbebc5680d365e4b63c2a50edb8cd9decd2caf86a364b424387ff21f0149df299e125732bf0d971236cd2541df095083f696a4e9e64b4",
  "6.10": "459fbc42acebe17a7b6cbc16:98ffea5ec2f087221a6ddcfc9de1c622:9ea41433e3f7805d1ba88ce204585f50b67fb1012109b873d8c2aacc92d946e234a03cec2426ff4390cb91b6ada7d7202bca0f8668c97d9ad3522befeff921395ddba3a528b6836bd567b489f98837d33c0c831abc1ddde421cee2bceebf175ae1e45ea21478f604d403dade998be92821b4baa951a2b91abf112cb82e121499d4674292d6a1848db5852e62563a09f7dbc2274929c64a0945ad8a9124efcef27798fa5f5a0be708abdabac939bed42f1660124f652d4fd76ea35699f2a2aafcbe857e000698ae63705edd9b053aa856f672511231a5e5493b650d4671f90ed7e21664721a1fdb909f0f83fcf25a2b990426728754e0ca32a83cce96ef5ff225172ebffee1af",
  "6.11": "8b3538ddca98eb3f07605a62:317b943947cd9bdefea7b5ad7dc6b4c2:89f8840c324163c40b8af7267316d5eb4910681e33bbbc55f03ee2fa62a35ec057684536435163fbbd17e6129856e2028ae626a7eaa8a24c7fa8351dbc10dc55c38fa11a4d549fcaf596aa9b7d0a16d9dc76c2658746561844ba40b2ac5edb63c970daf825525ee82fb6a7a9ff4c5d4b61c6aea746251bf48664bc279875708d371930b24596e0952cccfcbe1eaff3a0225bcf4ebf",
  "6.12": "3e32b311406ff604c632e038:e4561ed305f6aab497f707e4a2ca5387:85178d96a69b9b72176c98f87ecb0e0d624305368aaabf24701e1c46a484367cb5dc97b11ce83b20431a41c285cb2a9ff0305b8e850c32b631e8c86dc0823bb7424e4bcecc29c22f391c02fb44dc34d2bc81868815072b70af625fdf90632a097fde4cf21a3844cc4c70e0100c14da3df0144372cc8f14b43402e60b32f8cfcb3482967aca7131f6c75634423391bccb24e63156643bb1f202ac7b772b09c62903f5ef20d7b816b5ec544f13789362a668bb6e30fd74cd1f78140e696d1d004ad75cf6a8d0b90a059a4744afe3b49a2db1b22deb596d3321e8baa64811f41f",
  "6.13": "fb7ac930ac79c939e3099dea:3a3388f8a93e5d4f654d5eee09555b4e:a44a65007c0773fa9fe686c2fce225440f1294acf1795ea11f9b654ac6a43baf89b25585d4edcc3bbe0ef2b075f7e83e702c655c4317196b6ae8d59fa76f9d0051d9e595e7f99a44cf629b4ceada0b0bd2c72ab95add67675683cd7d2e0cf257a49aa14becc8afbf127946ca2293886dc582c6f2a8f8ec289c09b6463d702cc870c9fe83d46c94d8e01ba2836e2ff2e501bd033e13bf4de5c3863ef6fa540b515035e77beffdfcdc810fdee9789f887e4619ae24a66795ef69f0ddf82f349cd54cd172cce8dd81df79dace422112ebce537016d22697a048ef886885b5e5b16910be56ce3c55891e200f8a6f64a482",
  "6.14": "a2cef9eb805e594bc7080b3f:e2221ffd528ba30fe257019d86cf51e3:5feed052fadd3c7e0eb20550724d4458f1c49b8557323726806b661dafb8756d68ffb23a4ad9442d8ca32086c59d50c8d3eb67929f0df0f92d2b5905737b90ab6923d2f5ae0890c2769098ec9db3d15fc2e591492b45b5bbeca9b2ad656cfae72bdedda2674e7ed71b537f53017f9c91bd6d4e7b0cdac80a03fa4612398043eb68c15f9df1b8",
  "6.15": "a83b43bfc0222c5227ba6526:391a2e2a55250a4053f361d25319fef1:916dc728cebae4811c30ba4a63870ab23253bd60f0beedc9f8a2d83c784f8e7d15d8eb35573712510ef97077ebc9d7a0d461346a39470d718b8d2d2ffc70a909dc21a4454cc7859324efb243d7617b33c7eb911be41e0562771e72f5a8d9ad353c0778ef021509f0951056efb071",
  "6.16": "40fb8c531af323dd7bdd8dbf:a644058759203cae2cd528257f4bf394:123c90e4b14b16ba50f4167419d438e49685909f705762195e84a992baa372d0c4e225ad4cdbb75560d05db097ea1a011f10e389a7f20b3848ed286b5aefa486a0103896da4bab6c6e49a0d0c5b81f3014f8d4c7d10ba0f523a9a7e356b08c0502d6eaa17f2b2e734993e3a2f712e1b3965e80e982e600ce878e5877083e02a423855c6e10357f03d230c2be82222ec2776ae8272dc8e664fd80c7b57dccea5a1e8a844e9794fcfadfef03b4cdc7e341dc16c4e1b6b1ef0b17ef41122fa3042432f1a5488d608ef6bf2c62fb8a30a7ac4e98d58f709c9a583f1f8e0ee1",
  "6.17": "44b559119934dd775c3c2ad6:7ea7a7d9526c13a3b053874bcd62f154:1dfbefa55ce9e820681da53afb1824db2e45690b2686fc47de150891b6bedb662fed7c5a917a456de43af8c5a2ec6d4968fdd341695839c531f0da704c0a7acb38ad97b008c1bc7b44ab44bd03fe0ed0e9e71433f50135e7627caa672d46477612b3771e9b70b1524c5c0e889aa135f010b8e07f65b08f6736a1da48a7d38c1fae85e2a026849c49e16e8e73ec79549ea42f87e971fc75e820b38a36fc11ae9ec30e406e7f1768aa04",
  "6.18": "8834c3d6c854b995db9fa56b:56ef444defbb9fbfec1187f975b5596d:b4eab8668e98c47bd3f44669d6900c9afcb1d7c76233f58f100e0ba59df1140981fc6578b9a464d3e9b65a8a1e7c3e2693de65069dabb31c417cede2c30cf91d662d868bd1f084f80ca419a1e6a434cf439f65f7a7863681fe4c481fa467c24817ec7584becb4374c256147ec357690b4663665aa949a6b62a4aca188e7a6a6970205265c4c64f1c826c27348d669e5558ef2e54a72134fd6d9af283cac040437d7c6b1bd12fd534f4712d5f6bf684e720588808ee36aab614ebcb8ba8be9bd712f53602ec28b8d8f4a781fd651c1a8584253d",
  "6.19": "ab42f24931f768cd0d46fc92:40d53249e6f82506ddce708f25d702ae:087a1141dcd949fc07ee994cc8e8bb049e81ccffbf451f691d627b57a938cb05d49917f81b086e467eb6767715f98eaf7df2981997bd9baf4cbfb5b61836f65dbfb1e5ea60492eb92ce6fd987c69156040e1b8a495ff16e8f08195d851f83236def5d07363f4719095394d4b9e5515ef229d0c9894677a9fe91bf701915c2d51552adbc7f37b794b9ecab6f9f084094b3bfebc8427935316ecad932c89a75156f118df",
  "6.20": "56af857d0487e102d9a59100:6207396a37e2710039f919b5a00f2a96:3253fba7e2116783d4937fdf165295ff53f7adf4c34ab4c0ea4fd08373736772cea1cd33b9dc05239895ef126871e33a6e8d92ea10e142a09b675bfab8470f63484c95d668ea6015dfab33184ba9bada7830890dca28fc2b0ebb6f07c4dc8833135f6b4cf482e121f69ccc60c9b21b9665dac2687d146e68386817e853a15040702e24a8ac548fe6de0645f054ffd790924fde6742f4e3147f5bb4e4a590540e18a154842aea6dc0a4eb734733c2756c5835a13334e48a1995ecf3e2ea95ab1c55e1cf6c0c65dad9c777d8dacb0ce268e0a233c1c17d3404a3a8a484e40667bb995796cbf1c87c06552378b68863cb4b8ff035783d38a62b3f2ae7f3e7165ac33bc8a01ddc5e69d1ed62a8e8a6deaa348f5825c107324565fdba879b6e8997fc95894b454eeabf43f249e18a0f0eb9b47a2dc71321a5165bc31f6cf6e4ce64a3fb75b3d1d199fcef7ed6fd4b3f298b19703ae7f857ff34c4bde07eaa5664c8c0d0c12e90bfd5",
  "6.21": "a7c72f9727174a06c3a04c8e:73af8768cdba1f30593bdd1962eb4e5d:6c3797113a5ae35593e54ace0af070a300ef4e3d63acf0dae1aecc58fd6ca9458431598d4560d9aac1eae1609c2a90b2b6240ec93d79f80ddcb889e3f4f77db6836be9c9b582d513c2a08f5144b7390694650c5df5ec305ef628ed7f47e86537ac7ce61f1ad54c9fc6f35c7b7a090353126dfad9c95872d0e63196ca8d4152724e8348d861ae7c6c73f307d41ae459fb320f66b9166c1d6fd7c94240491e1aaaa53131d979b20f95e5607aef175a75261a415022ba1149f4af51b48e108c505f8d7a0729bafbb9a0c114c7f62f1c02458310aa42af2e074634548bb440c96d227acf28a0a6cccf14d8da21a5d422408e6a7bc7e49647eba2d58d5fae8aa47510b0d85ca062e7f2e5f9c94a6cad9043d5f7d1d849ab4c859c82bec655d886f980d94290bbe1d42e6494cd30d76d9dc8cdb72fb6aef9d6f6022ea401d0b2661e9d9977d7f01a3ba8dc25702a4c1aff7fe7b2e2e5327f5a84983ef9d5b47f08e0398a62b1114c4b81d91e0717cd92a3ace2b2d43dd8c0932d95c59491e6426f8594106f015afb33",
  "6.22": "922a4745d81b41fe80602ded:e35bd805ee47c816b5c09cfab944a14a:7cdea4f9237f49fc17157d9c33e898a7639856acc338fde69d64dd9119464f16ccc6162de4d6b1e1a37f5b90b933c2c047042c88101c676c5e7618407fe7ce43dc931aad35eb7ccd840c2170f874670f0e227d0ca8db4d4e754609a168b1f24a11fed7b47c1164d41f4fcefdc0a0e7d436cc6cb1dc8d4e3f261cd8be6d7421ebc2209ded7fb6b6ef3e16a9eeeb3e03d1",
  "6.23": "139f8f5ef6e9341c05193781:7e2dec703243bd7edb16b531325ed752:d5b755a668a18919edf33df346c63aa24f62bfc3f7e1c7d6b4c06a042427363e2d2e26c0e0b3c7a73f2b053486eb92be7b57c48f6ca6750dfccd8af18ea22e48fc3fcf8511c575f929acd6ac3adfd3dbc1a21cf103da9866adeef9f236ef1d1c75882bd66520f5f9733f421972909c19c954815d93ba53c5fa02b82d0406a59ff19de677600c5d723651c703881c69807248363f288230bbd71ab3bd0db17a063a073157a0ff38ce4e44d1928e1c631d13a0b0f78c0e6d4a4f3b2e330bad3f5d6b277343f5617a8fdc6d1c356d2de1eb86f34600e05fea0e841d250211dcfb960ffdb766ecd29c979d1518659399bcfb9a6d668204a7e8abc17e8a2e0f5f6fc29364c5f52acded65be23af1258fa48a3fdada38f9670e06cf02b4f1876c1f011299a4a",
  "6.24": "c1a77e387ce4e7c774c9e648:95137bf1a3689794ba8fbea170c25893:c34040ecfff0de00363d431cf87b14504fd2c5f841995de440b8ea03d0936297a7dd696252f3774c52523af8ff1c5dc89126332583b69a7e078f7f7e473d169e4e0df375d5461850a9ab8f3eb7695bc01f721fe45e2cb1b910ac66af05c34088a9327ac69719600ebe51b5484ba61e0832d1f7e3111d290dc212e8774986f492a501452d5b17aeeda323d7bf4a0c1bf58d12883fa5a80cbf9688da8925fe586dffbc8b891b5a9815e7964997b343c27c5c672897988de08323e59e7b190ea6ac5795fc666a8afaa492663699803c1fdcf0c667f057d9a4d2a12142ee66a07a78120d9892a21f2016908e31fff3692674c3c9280ba815b1dea286e22cab6c7009bd2a56209c7dbc89039dd167f6193770f88c167f960dd3fc8aa9102538e90ce622598d5a5edb4ff71743096783c5c1b4ce61684e5d59c12851a9c691bcb8b1495279819683ce8544d9676a9e8043343d33ca8b62b52cef7f9aecb23ae12bca54d4ffa018f77664d91d47a60373866749e66f7db489d02cfa98dd17d00766c00a581e4496e3758872d85e9dd71d5d2f8f9a78f2bd6302908498d106fa39ddcefa9f9dd8c84959c33a82a8cd9e8984912a7dd9ffc986f15fa9ab01517de7be47af3ea3b545cf69f8cd00deb706201b392c0e2ef1b0de616d53631d91ab1fd031d8e0884ec69443b86dc97d556b1f16637e20bcfc68d95f72912396d8a7b8a4ae54c3674b58ae7ad9b1",
  "6.25": "366194b62f627ce611acd460:5439e11cb23468948b783761ec2fca2c:5d9fdc09edbc4909aa11460edaffd077b2119b566633087087ccaabaad7af22d9f69d8e5785e2a49198392d7146d1cab6696c2bb8a676d6b779daf9b5a9fa412fd61e46aa30ad769eb187cc217a85df748b20d182c59b3b2287859cf32f35e50e219a7c71bd760743a3b606baeb1ec7b9b5c59ab11997558703f4b15fb5d4854f71b3476d2e5eb13e0dd3ff4981b1e24d9cb8e28de74b924bbbd4270649f305e2cc93d05b94eba082d9100b32b43123acf35c01e15acfd490135175711bb073f9c003d7844c918c016a4c0d8ceb6d789ca3d3e6728857f0b2f09541c3d8bcdab5ffd806936909d438e9cde467cc83a65f50b7a3f7da5723096279cceb96d49e7374deff01da834ca4f8f72fb9a5a13569789b442b21569fe9840395bc66d12455f6310866ec3f8dd3322d797acf738912db5c998127bc1c21576a3c9262f5a6cbf38de2b047376e87a387040afe5e3b40b8685c737084ace6c63eb88890d4f10cda71c8b82ed48d5c0bae8c26899db42633665b29bb66a0cd2102600bfbea01528036218569e200fa2c7c95c1403009b06a1f0808a1c7d760260e30d911264c1e05189b4e6894fdabf244f962be2498e10e5cebc77993e25ac5c4b27a3bcdf731e38b4b0324be3a67aa555703d1f359ba70bb906ce09c1f4417e32cb4e747c466ec4e5e0668bcaafa58eda49428e874cd087dbbdca661b95b8edbf23e294f188df18507fbba4205da7e289a141131cff6c8c4c2454637973176e561858bbd11fb246bbcc182c6e0caa100633860350159998",
  "7.1": "86b1e70f543761105fb6c88e:cf106f40fba43f6415c39e9233c7604a:591b8305d0f432d747a00ba3acac40b8e0df27674907bc4f24953c659768ebec8e1ca34bdb2f936cbee61c33ff30c69e9f4c8115823729ea516b8ac9b6103a",
  "7.2": "48b2bf5e5799dcef8344e214:494e77199d666ee12c4d9024ee467aa2:13f8d9f8dc3282a2977758d1ebcb86e3bf2cd058673ff926796721b89228dfbfbd1b4f5ed6b1c66628f43e0d6dde61d332c444bb0553b07ae21702dc0e22368b408f20004d133dd14b9d9b54cc9b5e",
  "7.3": "618277110af8d516dcf75fec:059a7bfb978941e7b89a6069ef0928bd:4156d820119bf85fe0ed08643fcd7ce910e0e0728aa4cf55b384a5bcecb2fe7738405403d6804d4655098d81bba99d6a20e0b216809cf4aa6242fce7b4a36057e3211ae9eec87038fc304c9482328129aafffec015a67f8d5755982e183f2268de68ef9dbc979b42accb97814bb5e3469da7e2",
  "7.4": "ff8c189ca67d9e8cd9acf34f:b44b5711204b3bf9cf7ba11045737510:36ef0d5e88cc2b5f034b8183503d347cdcdb9843fd2e0ff759c1d8f7b9bf2c54831340ea",
  "7.5": "56c741912c8deb593b9e5114:fe9f6c76670265b573b48fbbd4d8ed2c:73160815fc5e5625215aa86c51c2d09b9f7025ed1618244ad7e0256638569c3fea713866fede948316a770a022170f4b550d1c036176ff92fc3ccfcc9aefb64d38d672ef6851a69f677644623abc8e8d8a441ebd5707e9ef16ac2483c126af8092343752ebc6202618d6ba32164e7f7ccad90ba98bc7d8c2498bd2fe2c1501617b2b0ab798ce0890",
  "7.6": "f2f3a7c74d65589ead1a3953:4efc9cce04724e02695f866fafe3d62f:a0f58d71e59c205c977b03274abb3e6846d407b582a9ad53a920640282745391dad3ba2e34de8e9f3a65fa4011d8bb8eb3d705e395ee6f3038db37844ba031f33e3f0616321f8d477c15c2c15bdc56525ab0fbafb863abc1430ac81ae74640e5",
  "7.7": "c99c0035f69bcd951525b0a2:6be2be33c390ee1ad0d49e461c0e5231:65c6661d8389585e63bb883f426748382d2bb606120788bcb6b2c049b1a9a8dde61f84da21335391a2d74f9d883e81b8b35d4d146257683bb137a1d04c16fa039d2d6ec1f93163",
  "7.8": "728cfe3f6d2d1fb0dc120b09:01200e7af0be12bb33ed3105516ca092:27c91753caf422fb025758c71c37d9046aacbbd6acaf061ca80d2beaec7fd31607da7403a4f00f0c04d69e89981e67d88586be36e1c474dd47f467da72f5d7cfccbc40470d90c19885e9620ce63ae084af5157db366ebb994be2ec6649b5151adeb0715a2bdf96918996560206cf2541f397c9f5659db6e32ec30504",
  "7.9": "b0fff4b4bc8110e7177f5579:489ab22e274dbc32535f26b99ec73396:856cc0556fa06e06cf54b78e16fa7b6022dbe0f10ee23cb052726dddb01d089db7f08a43f6100d2e023777950f6fb3a051d4ad5a57f7f5327549f53e7ba1434fc93d0487736ed1fd1a21ca2cd257f708149ddb4dfecfdf23ca31de7a30518b0884257795a52ecf51fa8bdbc6b2927cba2f844774e93caef0c7a9bdf4c89a9391e9604f7239d6b34c100fe7d57536879cbdead14e18c356cdb944d179edf602675739968e3c7e091095157783cf7cdedc88",
  "7.10": "2165ccca74f91b8036ac28a2:9bf27a0fd95bcd28df90bb5cfbfcb280:6ca3c6149a1599440bdb32f2565b3dc1ac615026c1c18a1b9cbc350aa6707c354ce86b91fd462bada7a1b5ebb243dc8fcc1b5ef1199d1e550963500e1c5402d88f16b5a32ede2afb337c836d011f6c4a678a550c3c5aec4291f680138b112ea2f4b943c964148b8f1dd62dcc39e20e17ed94dcc7911a892adef0ae7d8593f6588d1a8829375e3313197426176a1e78f5e101947402ab71875eb6bd6a637430707b68",
  "7.11": "e7de68a8d74f4e1124ef7fee:48db5bc1bd890edf1f0f9e18a404ebb7:9dfb8b8b58a05470221b1e58769c342ccb4e3d8bef9a58ca2f88e97e3cfa63f7709bc63a9436e1fd14b272d86f9675ad3780bfb8264f26319b1860312150b166a8f9020abd30c59c44c068e4d9726c145ece",
  "7.12": "88327a9ed24f49a58ef17eef:db14aec8a19e2960e4390919b54046e4:298fec2ed40a1e67f46247b1fedb0525af9c5ba7e2f30c92a270715e1988f56e8704b9baac3d30f736a7973c0bdf228e3148591ef74507869757954ab743723b78306bef36b23852cf9436e682c96827067fa793368d078ff18a2dc82325e3c0ae2289039e03a94142a482301c918105142d30bd",
  "7.13": "6d55e6f48874b515eaa2f7d0:38aa11558a5db6ee5b3d7ecdbba60aa8:3d02a585b2187d7af0d492ca34ccfe9f72a952a4b557a981f0931ecccbe7e715d1ac39a01bf5e99188304a365013b9d5dd068d37068526bdfa34638dc169c4ed2ffdfff1ac51528c3d6eb45fca95358e8ed6d2b38a235abb97751e184cd3f5d1552d0adb0c00887d34b55bff10d8369a",
  "7.14": "aed3cb07b47d317e88efbf62:c7704bd6bab6c62b1873484345cb5943:7b1aca3689cd398207b01cc39bd4c28b25c0249f0969fa0134897aa24af2c7f67a4de77d91042cab44e53a99d93f50a2217c7d49e17ac52e4d70a98e807558a2175760f1892c9fe3fbbf7843e50da8b54476",
  "7.15": "6abbe124906fedbec6ca9911:e1152865ac68cee39040d7fee17e3b4d:b9f7054bf91610c182fe8fd32414c41f5b1b8efadf78d4d1ea2a803a3f4353aaedb9e4dfcdc7891652c28ceebcba1155e3995f1c16a16759b0f5628fa46b568cfbab128181f914ad8977f7603c6afcb57443eb1719ed0b3447c55014a946b4af57ccd24f6879a0dca29faeb1162ead854237f1408c15bfdc36"
};
