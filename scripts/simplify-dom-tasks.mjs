import fs from 'fs';

const filePath = '/Users/grabovsky/projects/js-loops-workout/scripts/build-dom-modules.mjs';
let code = fs.readFileSync(filePath, 'utf8');

// 1. Refactor 10.5 highlightKeywordsInElements
const old10_5Regex = /id:\s*"10\.5"[\s\S]*?tests:\s*\[[\s\S]*?\]\s*\}/;

const new10_5 = `id: "10.5",
    name: "highlightKeywordsInElements",
    title: "Масове підсвічування ключових слів тегом <mark>",
    level: "Середній рівень",
    goal: "Пройтися по елементах elementsList у циклі for і для кожного елемента перебрати список keywords. За допомогою розбиття тексту на частини (split) та об'єднання (join) замінити всі збіги на <mark class=\\"kw-highlight\\">слово</mark>. Повернути сумарну кількість замінених слів.",
    reqs: [
      "Зовнішній цикл по elementsList та внутрішній цикл по keywords.",
      "Використати методи рядків split та join замість складних регулярних виразів.",
      "Обгорнути знайдені слова в <mark class=\\"kw-highlight\\">слово</mark>.",
      "Повернути загальну кількість знайдених та підсвічених слів."
    ],
    hint: "Для кожного елемента пройдіться по keywords. Застосуйте <a href=\\"https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/split\\" target=\\"_blank\\">string.split(word)</a>: кількість входжень — (parts.length - 1). Потім з\\'єднайте частини через <a href=\\"https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/join\\" target=\\"_blank\\">parts.join('<mark class=\\"kw-highlight\\">' + word + '</mark>')</a>.",
    starterParams: "elementsList, keywords",
    starterBody: "// Підсвічування ключових слів через цикли та split/join\\n  return 0;",
    solutionBody: "if (!elementsList || !keywords || keywords.length === 0) return 0;\\nlet totalMatches = 0;\\nfor (let i = 0; i < elementsList.length; i++) {\\n  const el = elementsList[i];\\n  let html = el.textContent || '';\\n  for (let k = 0; k < keywords.length; k++) {\\n    const word = keywords[k];\\n    if (!word) continue;\\n    const parts = html.split(word);\\n    if (parts.length > 1) {\\n      totalMatches += (parts.length - 1);\\n      html = parts.join(\`<mark class=\\"kw-highlight\\">\${word}</mark>\`);\\n    }\\n  }\\n  el.innerHTML = html;\\n}\\nreturn totalMatches;",
    tests: [
      {
        expr: \`(() => {
          const p1 = document.createElement('p'); p1.textContent = 'JavaScript цикли while та for';
          const p2 = document.createElement('p'); p2.textContent = 'Тут немає збігів';
          const count = highlightKeywordsInElements([p1, p2], ['while', 'for']);
          return [count, p1.innerHTML.includes('<mark class=\"kw-highlight\">while</mark>')];
        })()\`,
        expected: [2, true]
      }
    ]
  }`;

code = code.replace(old10_5Regex, new10_5);
console.log('✓ Refactored 10.5 highlightKeywordsInElements to beginner loops + split/join + MDN links');

// 2. Refactor 10.10 extractTableData
const old10_10Regex = /id:\s*"10\.10"[\s\S]*?tests:\s*\[[\s\S]*?\]\s*\}/;

const new10_10 = `id: "10.10",
    name: "extractTableData",
    title: "Зчитування даних із HTML-таблиці назад у масив об'єктів",
    level: "Середній рівень",
    goal: "Зчитати дані з <table>: перший цикл по thead th зчитує ключі колонок (наприклад, ['name', 'score']). Другий зовнішній цикл по tbody tr та внутрішній по td формує масив об'єктів [{ name: '...', score: '...' }]. Повернути масив об'єктів.",
    reqs: [
      "Зчитати ключі з th заголовків через цикл for.",
      "Пройтися по рядках і клітинках tbody за допомогою вкладених циклів for.",
      "Повернути масив зчитаних об'єктів."
    ],
    hint: "Використовуйте <a href=\\"https://developer.mozilla.org/uk/docs/Web/API/Element/querySelectorAll\\" target=\\"_blank\\">querySelectorAll</a> для пошуку елементів та <a href=\\"https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/Trim\\" target=\\"_blank\\">textContent.trim()</a> для очищення зайвих пробілів.",
    starterParams: "tableElement",
    starterBody: "// Парсинг таблиці в масив об'єктів\\n  return [];",
    solutionBody: "if (!tableElement) return [];\\nconst thList = tableElement.querySelectorAll('thead th');\\nconst headers = [];\\nfor (let i = 0; i < thList.length; i++) {\\n  headers.push(thList[i].textContent.trim());\\n}\\nconst rows = tableElement.querySelectorAll('tbody tr');\\nconst data = [];\\nfor (let r = 0; r < rows.length; r++) {\\n  const cells = rows[r].querySelectorAll('td');\\n  const rowObj = {};\\n  for (let c = 0; c < cells.length; c++) {\\n    const key = headers[c] || \`col_\${c}\`;\\n    rowObj[key] = cells[c].textContent.trim();\\n  }\\n  data.push(rowObj);\\n}\\nreturn data;",
    tests: [
      {
        expr: \`(() => {
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
        })()\`,
        expected: [{ name: 'Anna', score: '100' }]
      }
    ]
  }`;

code = code.replace(old10_10Regex, new10_10);
console.log('✓ Refactored 10.10 extractTableData to pure for loops + MDN links');

// 3. Refactor 10.3 buildNestedListTree to avoid .filter
const old10_3Regex = /id:\s*"10\.3"[\s\S]*?tests:\s*\[[\s\S]*?\]\s*\}/;

const new10_3 = `id: "10.3",
    name: "buildNestedListTree",
    title: "Побудова багаторівневого дерева списків із об'єктної структури",
    level: "Середній рівень",
    goal: "Побудувати дерево списків <ul class=\\"tree-root\\"> із вкладеної структури treeData ({ label, children: [...] }). Для кожного вузла створити <li class=\\"tree-item\\">label</li>, а якщо є діти — рекурсивно або в циклі створити підсписок <ul class=\\"tree-sublist\\">.",
    reqs: [
      "Підтримка довільної глибини вкладеності.",
      "Класи: tree-root для головного списку, tree-sublist для дочірніх, tree-item для пунктів.",
      "Повернути кореневий <ul>."
    ],
    hint: "Створіть допоміжну функцію renderNode, яка через <a href=\\"https://developer.mozilla.org/uk/docs/Web/API/Document/createElement\\" target=\\"_blank\\">createElement('li')</a> та <a href=\\"https://developer.mozilla.org/uk/docs/Web/API/Node/appendChild\\" target=\\"_blank\\">appendChild</a> додає елементи та вкладені &lt;ul&gt;.",
    starterParams: "treeData",
    starterBody: "// Побудова дерева списків\\n  return null;",
    solutionBody: "function renderNode(node) {\\n  const li = document.createElement('li');\\n  li.className = 'tree-item';\\n  li.textContent = node.label || '';\\n  if (Array.isArray(node.children) && node.children.length > 0) {\\n    const subUl = document.createElement('ul');\\n    subUl.className = 'tree-sublist';\\n    for (let i = 0; i < node.children.length; i++) {\\n      subUl.appendChild(renderNode(node.children[i]));\\n    }\\n    li.appendChild(subUl);\\n  }\\n  return li;\\n}\\nconst ul = document.createElement('ul');\\nul.className = 'tree-root';\\nconst items = Array.isArray(treeData) ? treeData : (treeData ? [treeData] : []);\\nfor (let i = 0; i < items.length; i++) {\\n  ul.appendChild(renderNode(items[i]));\\n}\\nreturn ul;",
    tests: [
      {
        expr: \`(() => {
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
        })()\`,
        expected: ['UL', 3, 'Корінь']
      }
    ]
  }`;

code = code.replace(old10_3Regex, new10_3);
console.log('✓ Refactored 10.3 buildNestedListTree');

// 4. Refactor 10.6 toggleElementsVisibility to classic for loop + MDN links
const old10_6Regex = /id:\s*"10\.6"[\s\S]*?tests:\s*\[[\s\S]*?\]\s*\}/;

const new10_6 = `id: "10.6",
    name: "toggleElementsVisibility",
    title: "Фільтрація видимості елементів за предикатом",
    level: "Базовий рівень",
    goal: "У циклі for для кожного елемента з elementsList перевірити predicateFn(el): якщо true — встановити style.display = '' та зняти атрибут 'hidden'; якщо false — встановити style.display = 'none' та додати атрибут hidden='true'. Повернути кількість видимих елементів.",
    reqs: [
      "Обхід елементів у циклі for.",
      "Керування display та HTML-атрибутом hidden.",
      "Повернути кількість елементів, що залишилися видимими."
    ],
    hint: "Використовуйте <a href=\\"https://developer.mozilla.org/uk/docs/Web/API/Element/removeAttribute\\" target=\\"_blank\\">removeAttribute('hidden')</a> для показу та <a href=\\"https://developer.mozilla.org/uk/docs/Web/API/Element/setAttribute\\" target=\\"_blank\\">setAttribute('hidden', 'true')</a> для приховування.",
    starterParams: "elementsList, predicateFn",
    starterBody: "// Фільтрація видимості елементів\\n  return 0;",
    solutionBody: "if (!elementsList || typeof predicateFn !== 'function') return 0;\\nlet visibleCount = 0;\\nfor (let i = 0; i < elementsList.length; i++) {\\n  const el = elementsList[i];\\n  const show = Boolean(predicateFn(el));\\n  if (show) {\\n    el.style.display = '';\\n    el.removeAttribute('hidden');\\n    visibleCount++;\\n  } else {\\n    el.style.display = 'none';\\n    el.setAttribute('hidden', 'true');\\n  }\\n}\\nreturn visibleCount;",
    tests: [
      {
        expr: \`(() => {
          const c1 = document.createElement('div'); c1.dataset.status = 'active';
          const c2 = document.createElement('div'); c2.dataset.status = 'inactive';
          const visible = toggleElementsVisibility([c1, c2], el => el.dataset.status === 'active');
          return [visible, c1.style.display, c2.style.display, c2.hasAttribute('hidden')];
        })()\`,
        expected: [1, '', 'none', true]
      }
    ]
  }`;

code = code.replace(old10_6Regex, new10_6);
console.log('✓ Refactored 10.6 toggleElementsVisibility');

// 5. Refactor 10.7 reorderListByAttribute hint & loop
const old10_7Regex = /id:\s*"10\.7"[\s\S]*?tests:\s*\[[\s\S]*?\]\s*\}/;

const new10_7 = `id: "10.7",
    name: "reorderListByAttribute",
    title: "Сортування вузлів у DOM за значенням data-атрибута",
    level: "Середній рівень",
    goal: "Відсортувати дочірні елементи parentListElement за зростанням значення атрибута attrName (числового або рядкового) і в циклі повторно вставити їх у parentListElement через appendChild(). Повернути parentListElement.",
    reqs: [
      "Зібрати дочірні вузли в масив через цикл for або Array.from.",
      "Відсортувати елементи за значенням getAttribute(attrName).",
      "У циклі повторно вставити відсортовані елементи через appendChild."
    ],
    hint: "Метод <a href=\\"https://developer.mozilla.org/uk/docs/Web/API/Node/appendChild\\" target=\\"_blank\\">appendChild</a> переміщує існуючий DOM-вузол у кінець. Для сортування можна використати метод <a href=\\"https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/sort\\" target=\\"_blank\\">Array.prototype.sort</a> або подвійний цикл (bubble sort) з Модуля 6.",
    starterParams: "parentListElement, attrName",
    starterBody: "// Сортування елементів у DOM\\n  return null;",
    solutionBody: "if (!parentListElement) return null;\\nconst items = [];\\nfor (let i = 0; i < parentListElement.children.length; i++) {\\n  items.push(parentListElement.children[i]);\\n}\\nitems.sort((a, b) => {\\n  const valA = a.getAttribute(attrName) || '';\\n  const valB = b.getAttribute(attrName) || '';\\n  const numA = Number(valA);\\n  const numB = Number(valB);\\n  if (!isNaN(numA) && !isNaN(numB)) return numA - numB;\\n  return valA.localeCompare(valB);\\n});\\nfor (let i = 0; i < items.length; i++) {\\n  parentListElement.appendChild(items[i]);\\n}\\nreturn parentListElement;",
    tests: [
      {
        expr: \`(() => {
          const ul = document.createElement('ul');
          const li1 = document.createElement('li'); li1.setAttribute('data-order', '3');
          const li2 = document.createElement('li'); li2.setAttribute('data-order', '1');
          const li3 = document.createElement('li'); li3.setAttribute('data-order', '2');
          ul.appendChild(li1); ul.appendChild(li2); ul.appendChild(li3);
          reorderListByAttribute(ul, 'data-order');
          return Array.from(ul.children).map(c => c.getAttribute('data-order'));
        })()\`,
        expected: ['1', '2', '3']
      }
    ]
  }`;

code = code.replace(old10_7Regex, new10_7);
console.log('✓ Refactored 10.7 reorderListByAttribute');

// 6. Refactor 8.1 renderProductCards hint & loop
const old8_1Regex = /id:\s*"8\.1"[\s\S]*?tests:\s*\[[\s\S]*?\]\s*\}/;

const new8_1 = `id: "8.1",
    name: "renderProductCards",
    title: "Динамічне створення карток товарів через цикл",
    level: "Базовий рівень",
    goal: "Створити контейнер <div class=\\"product-cards-container\\">. Для кожного товару з масиву products створити <div class=\\"product-card\\"> з заголовком <h4> назви товару та параграфом <p> з ціною у форматі \\"\${price} ₴\\". Додати всі картки до контейнера та повернути його.",
    reqs: [
      "Створити кореневий div з класом product-cards-container.",
      "Для кожного товару створити div.product-card через цикл for.",
      "Всередину кожної картки додати h4 (title) та p (price + ' ₴').",
      "Повернути створений контейнер."
    ],
    hint: "Використовуйте <a href=\\"https://developer.mozilla.org/uk/docs/Web/API/Document/createElement\\" target=\\"_blank\\">document.createElement('div')</a> для створення вузлів та <a href=\\"https://developer.mozilla.org/uk/docs/Web/API/Node/appendChild\\" target=\\"_blank\\">container.appendChild()</a> для додавання.",
    starterParams: "products",
    starterBody: "// Динамічне створення карток товарів\\n  return null;",
    solutionBody: "const container = document.createElement('div');\\ncontainer.className = 'product-cards-container';\\nif (!Array.isArray(products)) return container;\\nfor (let i = 0; i < products.length; i++) {\\n  const p = products[i];\\n  const card = document.createElement('div');\\n  card.className = 'product-card';\\n  const title = document.createElement('h4');\\n  title.className = 'product-card__title';\\n  title.textContent = p.title || '';\\n  const price = document.createElement('p');\\n  price.className = 'product-card__price';\\n  price.textContent = \`\${p.price} ₴\`;\\n  card.appendChild(title);\\n  card.appendChild(price);\\n  container.appendChild(card);\\n}\\nreturn container;",
    tests: [
      {
        expr: \`(() => {
          const res = renderProductCards([
            { title: 'Ноутбук', price: 25000 },
            { title: 'Мишка', price: 800 }
          ]);
          const cards = res.querySelectorAll('.product-card');
          return [res.className, cards.length, cards[0].querySelector('h4').textContent];
        })()\`,
        expected: ['product-cards-container', 2, 'Ноутбук']
      },
      {
        expr: "renderProductCards([]).children.length",
        expected: 0
      }
    ]
  }`;

code = code.replace(old8_1Regex, new8_1);
console.log('✓ Refactored 8.1 renderProductCards');

// 7. Refactor 8.2 renderStarRating hint
code = code.replace(
  'hint: "Застосуйте цикл for (let i = 1; i <= maxStars; i++) з умовою i <= rating."',
  'hint: "Застосуйте цикл for (let i = 1; i <= maxStars; i++) з перевіркою i <= rating та методом <a href=\\"https://developer.mozilla.org/uk/docs/Web/API/Element/classList\\" target=\\"_blank\\">classList.add</a> для додавання класів star--filled або star--empty."'
);

// 8. Refactor 10.1 applyZebraStriping hint
code = code.replace(
  'hint: "Застосуйте цикл for (let i = 0; i < rows.length; i++) з перевіркою i % 2 === 0."',
  'hint: "Знайдіть рядки через <a href=\\"https://developer.mozilla.org/uk/docs/Web/API/Element/querySelectorAll\\" target=\\"_blank\\">tableElement.querySelectorAll</a>. Застосуйте цикл for (let i = 0; i < rows.length; i++) з перевіркою парності i % 2 === 0."'
);

// 9. Refactor 10.2 clearContainerFast hint
code = code.replace(
  'hint: "let count = 0; while (container.firstChild) { container.removeChild(container.firstChild); count++; }"',
  'hint: "Використовуйте цикл while (container.firstChild) та метод <a href=\\"https://developer.mozilla.org/uk/docs/Web/API/Node/removeChild\\" target=\\"_blank\\">container.removeChild(container.firstChild)</a> для безпечного та швидкого видалення всіх дітей."'
);

fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully updated scripts/build-dom-modules.mjs!');
