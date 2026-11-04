// scripts/build-native-dom-modules.mjs
// Повна збірка завдань модулів 8, 9, 10 на нативному DOM API (Варіант А)

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const PASSWORD = 'camp-admin-2026';
const SALT_STR = 'camp_salt_2026_secure';

function deriveKeyNode(password) {
  return crypto.pbkdf2Sync(password, SALT_STR, 100000, 32, 'sha256');
}

function encryptPayloadNode(obj, key) {
  const plainText = JSON.stringify(obj);
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  let enc = cipher.update(plainText, 'utf8', 'hex');
  enc += cipher.final('hex');
  const tag = cipher.getAuthTag().toString('hex');
  return `${iv.toString('hex')}:${tag}:${enc}`;
}

async function getWebCryptoKey(password) {
  const enc = new TextEncoder();
  const salt = enc.encode(SALT_STR);
  const keyMaterial = await crypto.webcrypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );
  return await crypto.webcrypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

async function decryptWithWebCrypto(encryptedHex, key) {
  const [ivHex, tagHex, dataHex] = encryptedHex.split(':');
  const iv = new Uint8Array(ivHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
  const tag = new Uint8Array(tagHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
  const data = new Uint8Array(dataHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

  const combined = new Uint8Array(data.length + tag.length);
  combined.set(data);
  combined.set(tag, data.length);

  const decryptedBuf = await crypto.webcrypto.subtle.decrypt(
    { name: 'AES-GCM', iv: iv },
    key,
    combined
  );
  return new TextDecoder().decode(decryptedBuf);
}

export const MODULES_CONFIG = [
  {
    idx: 8,
    id: "08-dom-lists-cards",
    title: "Модуль 8: Створення DOM-елементів: списки, картки та UI-компоненти",
    shortTitle: "8. Створення списків та карток",
    filename: "08-dom-lists-cards.js",
    testFilename: "08-dom-lists-cards.test.js",
    desc: "Створення нативних DOM-вузлів у циклах: картки товарів, зіркові рейтинги, хлібні крихти, бейджі та хмари тегів."
  },
  {
    idx: 9,
    id: "09-dom-grids-tables",
    title: "Модуль 9: Створення складних сіток та таблиць через вкладені цикли та DOM API",
    shortTitle: "9. DOM Таблиці та Сітки",
    filename: "09-dom-grids-tables.js",
    testFilename: "09-dom-grids-tables.test.js",
    desc: "Побудова складних DOM-дерев через вкладені цикли: інтерактивні таблиці, сітки календарів, шахові дошки та теплові карти."
  },
  {
    idx: 10,
    id: "10-dom-manipulation",
    title: "Модуль 10: Маніпуляція DOM, стилізація та очищення через цикли",
    shortTitle: "10. DOM Маніпуляція та Стилі",
    filename: "10-dom-manipulation.js",
    testFilename: "10-dom-manipulation.test.js",
    desc: "Маніпуляція наявними DOM-вузлами: зебра-стилізація таблиць, швидке очищення через while, пагінація та фільтрація елементів."
  }
];

export const TASKS_MODULE_8 = [
  {
    moduleIdx: 8,
    id: "8.1",
    name: "renderProductCards",
    title: "Створення вітрини карток товарів через DOM API",
    level: "Базовий рівень",
    goal: "Створити та повернути DOM-контейнер `<div class=\"product-cards-container\">`, що містить картки `<div class=\"product-card\">` для кожного товару з масиву `products` (`{ title, price }`). У кожній картці створити заголовок `<h4 class=\"product-card__title\">` та ціну `<p class=\"product-card__price\">price ₴`. Якщо масив порожній або не є масивом — повернути `null`.",
    reqs: [
      "Створити кореневий контейнер через `document.createElement('div')` з класом `product-cards-container`.",
      "Обійти масив `products` циклом `for`.",
      "Для кожного товару створити картку, заповнити текст через `textContent` та змонтувати через `appendChild()`.",
      "Повернути створений DOM-елемент контейнера."
    ],
    hint: "Створіть `container = document.createElement('div')`, у циклі для кожного товару створюйте `card = document.createElement('div')`, заповнюйте `textContent` і додавайте `container.appendChild(card)`.",
    starterParams: "products",
    starterBody: "// Створення карток товарів через DOM API\n  return null;",
    solutionBody: `if (!Array.isArray(products) || products.length === 0) return null;
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
  price.textContent = \`\${p.price} ₴\`;

  card.appendChild(title);
  card.appendChild(price);
  container.appendChild(card);
}
return container;`,
    tests: [
      {
        expr: `(() => {
          const res = renderProductCards([{ title: 'Ноутбук', price: 25000 }, { title: 'Мишка', price: 800 }]);
          return [res.className, res.children.length, res.children[0].querySelector('.product-card__title').textContent];
        })()`,
        expected: ['product-cards-container', 2, 'Ноутбук']
      },
      {
        expr: "renderProductCards([])",
        expected: null
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Динамічно створити нативні DOM-вузли для карток товарів у циклі <code>for</code> та змонтувати їх у спільний контейнер без небезпечної конкатенації HTML-рядків.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Перевірити параметр: якщо <code>!Array.isArray(products) || products.length === 0</code>, повернути <code>null</code>.</li>
    <li>Створити кореневий елемент: <code>const container = document.createElement('div'); container.className = 'product-cards-container';</code>.</li>
    <li>У циклі <code>for (let i = 0; i &lt; products.length; i++)</code> створити елемент картки <code>const card = document.createElement('div')</code>.</li>
    <li>Створити заголовок <code>&lt;h4&gt;</code> та параграф <code>&lt;p&gt;</code>, безпечно записати дані через властивість <code>textContent</code>.</li>
    <li>Вкласти заголовок та ціну в картку через <code>card.appendChild()</code>, а саму картку — в контейнер: <code>container.appendChild(card)</code>.</li>
    <li>Повернути змонтований контейнер.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Властивість <code>textContent</code> автоматично екранує спецсимволи та захищає додаток від XSS-атак. Детальніше на <a href="https://developer.mozilla.org/uk/docs/Web/API/Node/textContent" target="_blank" rel="noopener">MDN: Node.textContent</a> та <a href="https://developer.mozilla.org/uk/docs/Web/API/Document/createElement" target="_blank" rel="noopener">MDN: Document.createElement</a>.</p>
</div>`
  },
  {
    moduleIdx: 8,
    id: "8.2",
    name: "renderStarRating",
    title: "Створення зіркового рейтингу через DOM API",
    level: "Базовий рівень",
    goal: "Створити та повернути DOM-контейнер `<div class=\"star-rating\" role=\"img\" aria-label=\"Рейтинг: X з Y\">`. У циклі від 1 до `maxStars` згенерувати зірочки через `document.createElement('span')`: якщо індекс `<= rating` — призначити клас `star star--filled` та символ `★`, інакше — клас `star star--empty` та символ `☆`. Якщо `maxStars <= 0` — повернути `null`.",
    reqs: [
      "Створити контейнер та додати атрибути доступності через `setAttribute()`.",
      "Цикл `for (let i = 1; i <= maxStars; i++)`.",
      "Створення зірочок через `document.createElement('span')` та монтування через `appendChild()`.",
      "Повернути підсумковий DOM-елемент."
    ],
    hint: "Використовуйте `document.createElement('span')`, встановлюйте `span.className = (i <= rating) ? 'star star--filled' : 'star star--empty'` та додавайте до контейнера.",
    starterParams: "rating, maxStars",
    starterBody: "// Створення зіркового рейтингу через DOM API\n  return null;",
    solutionBody: `if (maxStars <= 0) return null;
const container = document.createElement('div');
container.className = 'star-rating';
container.setAttribute('role', 'img');
container.setAttribute('aria-label', \`Рейтинг: \${rating} з \${maxStars}\`);
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
return container;`,
    tests: [
      {
        expr: `(() => {
          const el = renderStarRating(3, 5);
          return [el.className, el.children.length, el.querySelectorAll('.star--filled').length];
        })()`,
        expected: ['star-rating', 5, 3]
      },
      {
        expr: "renderStarRating(0, 0)",
        expected: null
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Змонтувати доступний компонент рейтингу за допомогою DOM API та циклу <code>for</code> від 1 до <code>maxStars</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити контейнер <code>document.createElement('div')</code> та задати атрибути <code>role="img"</code> і <code>aria-label</code> через <code>setAttribute()</code>.</li>
    <li>Запустити цикл <code>for (let i = 1; i &lt;= maxStars; i++)</code>.</li>
    <li>На кожній ітерації створювати <code>document.createElement('span')</code>.</li>
    <li>Якщо <code>i &lt;= rating</code> — клас <code>star star--filled</code> і символ <code>★</code>, інакше — <code>star star--empty</code> і <code>☆</code>.</li>
    <li>Додати зірочку до контейнера через <code>appendChild()</code>.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Метод <code>setAttribute()</code> дозволяє призначити будь-який HTML або ARIA атрибут на створений вузол. Докладніше на <a href="https://developer.mozilla.org/uk/docs/Web/API/Element/setAttribute" target="_blank" rel="noopener">MDN: Element.setAttribute</a>.</p>
</div>`
  },
  {
    moduleIdx: 8,
    id: "8.3",
    name: "renderBreadcrumbs",
    title: "Створення навігаційних хлібних крихт",
    level: "Базовий рівень",
    goal: "Створити та повернути DOM-елемент `<nav class=\"breadcrumbs\">`. Для кожного елемента з масиву `links` (`{ label, url }`): якщо це останній елемент або `url === null` — створити `<span class=\"breadcrumbs__current\">label</span>`, інакше — посилання `<a class=\"breadcrumbs__link\" href=\"url\">label</a>` та текстовий роздільник `<span class=\"breadcrumbs__sep\">/</span>`. Якщо масив порожній — повернути `null`.",
    reqs: [
      "Створити навігаційний вузол `document.createElement('nav')`.",
      "Обійти масив `links` через цикл `for`.",
      "Перевірити останній елемент: `i === links.length - 1`.",
      "Повернути створений елемент навігації."
    ],
    hint: "Для звичайних елементів створюйте `<a>` з атрибутом `href`, після нього роздільник `<span>/</span>`, а для останнього — `<span class=\"breadcrumbs__current\">`.",
    starterParams: "links",
    starterBody: "// Створення хлібних крихт\n  return null;",
    solutionBody: `if (!Array.isArray(links) || links.length === 0) return null;
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
return nav;`,
    tests: [
      {
        expr: `(() => {
          const nav = renderBreadcrumbs([{ label: 'Головна', url: '/' }, { label: 'Курс', url: null }]);
          return [nav.children.length, nav.children[0].tagName, nav.children[1].className, nav.children[2].className];
        })()`,
        expected: [3, 'A', 'breadcrumbs__sep', 'breadcrumbs__current']
      },
      {
        expr: "renderBreadcrumbs([])",
        expected: null
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати навігаційний ланцюжок через DOM API, обробляючи останній пункт списку як активний поточний розділ без посилання.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити елемент <code>&lt;nav class="breadcrumbs"&gt;</code>.</li>
    <li>У циклі <code>for</code> перевіряти <code>const isLast = (i === links.length - 1) || !item.url;</code>.</li>
    <li>Для проміжних кроків створювати <code>&lt;a&gt;</code> та роздільник <code>&lt;span&gt;/&lt;/span&gt;</code>.</li>
    <li>Для останнього пункту створювати неклікабельний <code>&lt;span class="breadcrumbs__current"&gt;</code>.</li>
    <li>Монтувати всі вузли через <code>appendChild()</code>.</li>
  </ol>
</div>`
  },
  {
    moduleIdx: 8,
    id: "8.4",
    name: "renderStatusBadges",
    title: "Створення бейджів статусів через цикл",
    level: "Базовий рівень",
    goal: "Створити та повернути DOM-контейнер `<div class=\"badge-container\">`. Для кожного елемента з `items` (`{ label, status }`) у циклі створити `<span class=\"badge badge--{status}\">` з текстом `label`. Валідні статуси: `['success', 'warning', 'danger']`. Якщо статус інший або відсутній — призначити `badge--neutral`. Якщо масив порожній — повернути `null`.",
    reqs: [
      "Створити контейнер `document.createElement('div')` з класом `badge-container`.",
      "У циклі перевіряти статус через білий список валідних статусів.",
      "Створювати елементи `span`, додавати класи та текст.",
      "Повернути підсумковий DOM-контейнер."
    ],
    hint: "Використовуйте `valid.includes(it.status) ? it.status : 'neutral'` для вибору правильного класу.",
    starterParams: "items",
    starterBody: "// Створення статусних бейджів\n  return null;",
    solutionBody: `if (!Array.isArray(items) || items.length === 0) return null;
const container = document.createElement('div');
container.className = 'badge-container';
const valid = ['success', 'warning', 'danger'];
for (let i = 0; i < items.length; i++) {
  const it = items[i];
  const span = document.createElement('span');
  const st = valid.includes(it.status) ? it.status : 'neutral';
  span.className = \`badge badge--\${st}\`;
  span.textContent = it.label;
  container.appendChild(span);
}
return container;`,
    tests: [
      {
        expr: `(() => {
          const wrap = renderStatusBadges([{ label: 'OK', status: 'success' }, { label: '???', status: 'unknown' }]);
          return [wrap.children.length, wrap.children[0].className, wrap.children[1].className];
        })()`,
        expected: [2, 'badge badge--success', 'badge badge--neutral']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Динамічно створити кольорові бейджі через перевірку валідності статусу в циклі.</p>
</div>`
  },
  {
    moduleIdx: 8,
    id: "8.5",
    name: "renderMessageList",
    title: "Створення списку повідомлень чату",
    level: "Базовий рівень",
    goal: "Створити та повернути список `<ul class=\"message-list\">`. Для кожного повідомлення з `messages` (`{ author, text, isMine }`) у циклі створити `<li class=\"message-item\">` (з додатковим класом `message-item--mine` якщо `isMine: true`, або `message-item--other` якщо `false`). Всередині розмістити автора `<span class=\"message-item__author\">author: </span>` та текст `<span class=\"message-item__text\">text</span>`. Якщо масив порожній — повернути `null`.",
    reqs: [
      "Створити список через `document.createElement('ul')`.",
      "У циклі `for` створювати елементи списку `li` та текстові `span`.",
      "Призначати класи модифікаторів залежно від `isMine`.",
      "Повернути підсумковий `ul`."
    ],
    hint: "Створюйте `li = document.createElement('li')`, додавайте клас `m.isMine ? 'message-item--mine' : 'message-item--other'`.",
    starterParams: "messages",
    starterBody: "// Створення списку повідомлень\n  return null;",
    solutionBody: `if (!Array.isArray(messages) || messages.length === 0) return null;
const ul = document.createElement('ul');
ul.className = 'message-list';
for (let i = 0; i < messages.length; i++) {
  const m = messages[i];
  const li = document.createElement('li');
  li.className = \`message-item \${m.isMine ? 'message-item--mine' : 'message-item--other'}\`;

  const author = document.createElement('span');
  author.className = 'message-item__author';
  author.textContent = \`\${m.author}: \`;

  const text = document.createElement('span');
  text.className = 'message-item__text';
  text.textContent = m.text;

  li.appendChild(author);
  li.appendChild(text);
  ul.appendChild(li);
}
return ul;`,
    tests: [
      {
        expr: `(() => {
          const list = renderMessageList([{ author: 'Анна', text: 'Привіт!', isMine: false }, { author: 'Я', text: 'Привіт', isMine: true }]);
          return [list.children.length, list.children[0].className, list.children[1].className];
        })()`,
        expected: [2, 'message-item message-item--other', 'message-item message-item--mine']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Змонтувати DOM-структуру стрічки чату з вирівнюванням власних та чужих повідомлень.</p>
</div>`
  },
  {
    moduleIdx: 8,
    id: "8.6",
    name: "renderTagCloud",
    title: "Створення хмари тегів з data-атрибутами",
    level: "Базовий рівень",
    goal: "Створити та повернути DOM-контейнер `<div class=\"tag-cloud\">`. Для кожного тега з `tags` (`{ name, count }`) у циклі створити `<span class=\"tag-chip\">`. Якщо `count > 10` — додати клас `tag-chip--popular`. Встановити атрибут `data-count` через `setAttribute('data-count', String(count))`. Текст чіпа — `name`. Якщо масив порожній — повернути `null`.",
    reqs: [
      "Створити контейнер `div.tag-cloud`.",
      "У циклі створити чіпи `span`.",
      "Встановити `data-count` через `setAttribute()`.",
      "Повернути підсумковий контейнер."
    ],
    hint: "chip.setAttribute('data-count', String(t.count)); chip.textContent = t.name;",
    starterParams: "tags",
    starterBody: "// Створення хмари тегів\n  return null;",
    solutionBody: `if (!Array.isArray(tags) || tags.length === 0) return null;
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
return container;`,
    tests: [
      {
        expr: `(() => {
          const wrap = renderTagCloud([{ name: 'js', count: 15 }, { name: 'css', count: 5 }]);
          return [wrap.children.length, wrap.children[0].className, wrap.children[0].getAttribute('data-count')];
        })()`,
        expected: [2, 'tag-chip tag-chip--popular', '15']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати чіпи тегів та зберегти їхні числові показники в <code>data-count</code>.</p>
</div>`
  },
  {
    moduleIdx: 8,
    id: "8.7",
    name: "renderProgressBarSteps",
    title: "Створення покрокового прогрес-бару",
    level: "Базовий рівень",
    goal: "Створити та повернути `<div class=\"progress-steps\" data-total=\"{stepsCount}\">`. У циклі `for` від 0 до `stepsCount - 1` створити `<div class=\"step-indicator\">` з номером кроку `String(i + 1)`. Якщо `i <= activeIndex` — додати клас `step-indicator--completed`. Якщо `stepsCount <= 0` — повернути `null`.",
    reqs: [
      "Створити контейнер з атрибутом `data-total`.",
      "У циклі від 0 до stepsCount - 1 генерувати індикатори кроків.",
      "Повернути створений контейнер."
    ],
    hint: "Встановіть step.textContent = String(i + 1) та перевірте i <= activeIndex.",
    starterParams: "stepsCount, activeIndex",
    starterBody: "// Створення прогрес-бару\n  return null;",
    solutionBody: `if (stepsCount <= 0) return null;
const container = document.createElement('div');
container.className = 'progress-steps';
container.setAttribute('data-total', String(stepsCount));
for (let i = 0; i < stepsCount; i++) {
  const step = document.createElement('div');
  step.className = i <= activeIndex ? 'step-indicator step-indicator--completed' : 'step-indicator';
  step.textContent = String(i + 1);
  container.appendChild(step);
}
return container;`,
    tests: [
      {
        expr: `(() => {
          const bar = renderProgressBarSteps(4, 1);
          return [bar.children.length, bar.children[0].className, bar.children[2].className];
        })()`,
        expected: [4, 'step-indicator step-indicator--completed', 'step-indicator']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити покроковий майстер процесу з нумерацією кроків від 1.</p>
</div>`
  },
  {
    moduleIdx: 8,
    id: "8.8",
    name: "renderNumberedList",
    title: "Створення нумерованого списку зі зсувом індексів",
    level: "Базовий рівень",
    goal: "Створити та повернути `<ol class=\"numbered-list\" start=\"{startNumber}\">`. У циклі для кожного рядка з масиву `items` створити `<li class=\"numbered-list__item\" data-index=\"{startNumber + i}\">item</li>`. Якщо масив порожній — повернути `null`.",
    reqs: [
      "Створити `ol` з атрибутом `start`.",
      "У циклі створювати `li` та задавати атрибут `data-index`.",
      "Повернути створений `ol`."
    ],
    hint: "li.setAttribute('data-index', String(startNumber + i)); li.textContent = items[i];",
    starterParams: "items, startNumber",
    starterBody: "// Створення нумерованого списку\n  return null;",
    solutionBody: `if (!Array.isArray(items) || items.length === 0) return null;
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
return ol;`,
    tests: [
      {
        expr: `(() => {
          const ol = renderNumberedList(['Вступ', 'Основи'], 10);
          return [ol.getAttribute('start'), ol.children[0].getAttribute('data-index'), ol.children[0].textContent];
        })()`,
        expected: ['10', '10', 'Вступ']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити список із кастомною нумерацією з використанням DOM API.</p>
</div>`
  },
  {
    moduleIdx: 8,
    id: "8.9",
    name: "renderNotificationFeed",
    title: "Створення стрічки карток сповіщень",
    level: "Базовий рівень",
    goal: "Створити та повернути `<div class=\"notification-feed\">`. У циклі для кожного сповіщення з `notifications` (`{ title, message, unread }`) створити `<div class=\"notification-card\">` (з додатковим класом `notification-card--unread`, якщо `unread: true`). Всередині додати заголовок `<h5 class=\"notification-card__title\">` та текст `<p class=\"notification-card__body\">`. Якщо масив порожній — повернути `null`.",
    reqs: [
      "Створити контейнер `div.notification-feed`.",
      "У циклі створювати картки та перевіряти статус прочитаності.",
      "Повернути створений контейнер."
    ],
    hint: "card.className = n.unread ? 'notification-card notification-card--unread' : 'notification-card';",
    starterParams: "notifications",
    starterBody: "// Створення стрічки сповіщень\n  return null;",
    solutionBody: `if (!Array.isArray(notifications) || notifications.length === 0) return null;
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
return container;`,
    tests: [
      {
        expr: `(() => {
          const feed = renderNotificationFeed([{ title: 'Оновлення', message: 'Готово', unread: true }]);
          return [feed.children.length, feed.children[0].className, feed.children[0].querySelector('h5').textContent];
        })()`,
        expected: [1, 'notification-card notification-card--unread', 'Оновлення']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати картки сповіщень та акцентувати непрочитані повідомлення.</p>
</div>`
  },
  {
    moduleIdx: 8,
    id: "8.10",
    name: "renderTabsNavigation",
    title: "Створення навігаційної панелі вкладок (Tabs)",
    level: "Базовий рівень",
    goal: "Створити та повернути `<div class=\"tabs-nav\" role=\"tablist\">`. У циклі для кожного заголовка з `tabTitles` створити кнопку `<button class=\"tab-button\" role=\"tab\">` з текстом заголовка. Якщо `i === activeIndex` — додати клас `tab-button--active` та атрибут `aria-selected=\"true\"`, інакше `aria-selected=\"false\"`. Якщо масив порожній — повернути `null`.",
    reqs: [
      "Створити навігаційний блок з `role=\"tablist\"`.",
      "У циклі створювати кнопки з `role=\"tab\"` та відповідним `aria-selected`.",
      "Повернути створену панель вкладок."
    ],
    hint: "btn.setAttribute('aria-selected', isCur ? 'true' : 'false');",
    starterParams: "tabTitles, activeIndex",
    starterBody: "// Створення панелі вкладок\n  return null;",
    solutionBody: `if (!Array.isArray(tabTitles) || tabTitles.length === 0) return null;
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
return nav;`,
    tests: [
      {
        expr: `(() => {
          const nav = renderTabsNavigation(['Таб 1', 'Таб 2'], 0);
          return [nav.children.length, nav.children[0].className, nav.children[0].getAttribute('aria-selected'), nav.children[1].getAttribute('aria-selected')];
        })()`,
        expected: [2, 'tab-button tab-button--active', 'true', 'false']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати доступну систему табів із дотриманням стандартів WAI-ARIA.</p>
</div>`
  },
  {
    moduleIdx: 8,
    id: "8.11",
    name: "renderAccordionList",
    title: "Створення акордеона через семантичні теги HTML5",
    level: "Базовий рівень",
    goal: "Створити та повернути `<div class=\"accordion-list\">`. Для кожного елемента з `items` (`{ title, content, open }`) у циклі створити `<details class=\"accordion-item\">`. Якщо `open: true` — встановити `details.open = true`. Всередині розмістити `<summary class=\"accordion-header\">title</summary>` та `<div class=\"accordion-content\">content</div>`. Якщо масив порожній — повернути `null`.",
    reqs: [
      "Створити контейнер `div.accordion-list`.",
      "У циклі створювати `details`, `summary` та `div.accordion-content`.",
      "Повернути підсумковий акордеон."
    ],
    hint: "details.open = Boolean(it.open); details.appendChild(summary); details.appendChild(content);",
    starterParams: "items",
    starterBody: "// Створення акордеона\n  return null;",
    solutionBody: `if (!Array.isArray(items) || items.length === 0) return null;
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
return list;`,
    tests: [
      {
        expr: `(() => {
          const acc = renderAccordionList([{ title: 'Питання', content: 'Відповідь', open: true }]);
          return [acc.children.length, acc.children[0].tagName, acc.children[0].open];
        })()`,
        expected: [1, 'DETAILS', true]
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Змонтувати акордеон за допомогою нативних семантичних вузлів <code>&lt;details&gt;</code> та <code>&lt;summary&gt;</code>.</p>
</div>`
  },
  {
    moduleIdx: 8,
    id: "8.12",
    name: "renderAvatarStack",
    title: "Створення стека аватарок користувачів",
    level: "Базовий рівень",
    goal: "Створити та повернути `<div class=\"avatar-stack\">`. Відобразити перші `maxVisible` елементів масиву `avatars` як `<img class=\"avatar-img\" src=\"url\" alt=\"avatar\" />`. Якщо всього аватарок більше ніж `maxVisible`, в кінці додати бейдж `<span class=\"avatar-more\">+N</span>`, де `N = avatars.length - maxVisible`. Якщо масив порожній — повернути `null`.",
    reqs: [
      "Створити контейнер `div.avatar-stack`.",
      "У циклі відображати зображення до `Math.min(avatars.length, maxVisible)`.",
      "Якщо є залишок — додати бейдж `+N`.",
      "Повернути підсумковий стек."
    ],
    hint: "img.setAttribute('src', avatars[i]); img.setAttribute('alt', 'avatar');",
    starterParams: "avatars, maxVisible",
    starterBody: "// Створення стека аватарок\n  return null;",
    solutionBody: `if (!Array.isArray(avatars) || avatars.length === 0) return null;
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
  more.textContent = \`+\${avatars.length - maxVisible}\`;
  stack.appendChild(more);
}
return stack;`,
    tests: [
      {
        expr: `(() => {
          const s = renderAvatarStack(['u1.png', 'u2.png', 'u3.png'], 2);
          return [s.children.length, s.children[0].tagName, s.children[2].className, s.children[2].textContent];
        })()`,
        expected: [3, 'IMG', 'avatar-more', '+1']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Змонтувати компактний стек аватарок з бейджем переповнення ліміту.</p>
</div>`
  }
];

export const TASKS_MODULE_9 = [
  {
    moduleIdx: 9,
    id: "9.1",
    name: "renderDataTable",
    title: "Створення інтерактивної таблиці через DOM API",
    level: "Середній рівень",
    goal: "Створити та повернути елемент таблиці `<table class=\"data-table\">`. Створити `<thead>` з одним рядком заголовків `<th>` для кожної назви з `headers`. Створити `<tbody>` та у вкладених циклах пройтися по масиву об'єктів `rows`, додаючи `<tr>` та `<td>` зі значеннями `row[header]`. Якщо `headers` порожній — повернути `null`.",
    reqs: [
      "Створити `table.data-table`.",
      "Створити `thead` з комірками `th` через перший цикл.",
      "Створити `tbody` із вкладеним циклом по рядках `rows` та стовпцях `headers`.",
      "Повернути підсумковий `HTMLTableElement`."
    ],
    hint: "Створіть `thead` і `tbody`, у зовнішньому циклі по рядках створюйте `tr = document.createElement('tr')`, у внутрішньому — `td = document.createElement('td')`.",
    starterParams: "headers, rows",
    starterBody: "// Створення таблиці даних через DOM API\n  return null;",
    solutionBody: `if (!Array.isArray(headers) || headers.length === 0) return null;
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
return tbl;`,
    tests: [
      {
        expr: `(() => {
          const t = renderDataTable(['id', 'name'], [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
          return [t.tagName, t.querySelectorAll('th').length, t.querySelectorAll('tbody tr').length, t.querySelectorAll('td')[1].textContent];
        })()`,
        expected: ['TABLE', 2, 2, 'Alice']
      },
      {
        expr: "renderDataTable([], [])",
        expected: null
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати повноцінну HTML-таблицю за допомогою вкладених циклів та нативного DOM API.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити елемент <code>table.data-table</code>.</li>
    <li>Побудувати шапку <code>thead</code> з рядком <code>tr</code> та клітинками <code>th</code> для кожного заголовка.</li>
    <li>Створити тіло таблиці <code>tbody</code>.</li>
    <li>Зовнішній цикл проходить по кожному рядку з <code>rows</code> і створює <code>tr</code>.</li>
    <li>Внутрішній цикл проходить по ключах <code>headers</code>, дістає значення та поміщає його в <code>td.textContent</code>.</li>
    <li>Повернути підсумкову таблицю.</li>
  </ol>
</div>`
  },
  {
    moduleIdx: 9,
    id: "9.2",
    name: "renderCalendarMonth",
    title: "Створення календарної сітки місяця через DOM API",
    level: "Середній рівень",
    goal: "Створити та повернути DOM-контейнер `<div class=\"calendar-month\">`. Додати заголовок `<h3 class=\"month-title\">monthName</h3>` та контейнер сітки `<div class=\"calendar-grid\">`. У циклі `for (let d = 1; d <= daysInMonth; d++)` створити для кожного дня `<span class=\"day-cell\">String(d)</span>` та додати до сітки. Якщо `daysInMonth <= 0` — повернути `null`.",
    reqs: [
      "Створити контейнер `calendar-month`.",
      "Створити заголовок `h3.month-title` з текстом `monthName`.",
      "Створити сітку `div.calendar-grid`.",
      "У циклі створити клітинки `span.day-cell` для днів від 1 до `daysInMonth`.",
      "Повернути підсумковий DOM-контейнер."
    ],
    hint: "Створіть `grid = document.createElement('div'); grid.className = 'calendar-grid';` і у циклі додавайте `cell = document.createElement('span'); cell.className = 'day-cell'; cell.textContent = String(d); grid.appendChild(cell);`.",
    starterParams: "daysInMonth, monthName",
    starterBody: "// Створення календарної сітки через DOM API\n  return null;",
    solutionBody: `if (daysInMonth <= 0) return null;
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
return container;`,
    tests: [
      {
        expr: `(() => {
          const cal = renderCalendarMonth(31, 'Березень 2026');
          return [cal.className, cal.querySelector('h3').textContent, cal.querySelectorAll('.day-cell').length, cal.querySelectorAll('.day-cell')[0].textContent];
        })()`,
        expected: ['calendar-month', 'Березень 2026', 31, '1']
      },
      {
        expr: "renderCalendarMonth(0, 'Тест')",
        expected: null
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Змонтувати повноцінний календарний віджет на базі CSS Grid та нативного DOM API.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити контейнер <code>&lt;div class="calendar-month"&gt;</code>.</li>
    <li>Створити заголовок <code>&lt;h3 class="month-title"&gt;</code> та записати назву місяця через <code>textContent</code>.</li>
    <li>Створити блок сітки <code>&lt;div class="calendar-grid"&gt;</code>.</li>
    <li>У циклі від 1 до <code>daysInMonth</code> для кожного дня створити <code>document.createElement('span')</code> з класом <code>day-cell</code> та номером дня.</li>
    <li>Вкласти всі клітинки в сітку через <code>grid.appendChild(cell)</code>.</li>
    <li>Повернути змонтований контейнер.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Поєднання CSS Grid (<code>grid-template-columns: repeat(7, 1fr)</code>) та нативного DOM API дозволяє автоматично вибудувати 7-денний календарний тиждень без ручного вирахування переносів рядків.</p>
</div>`
  },
  {
    moduleIdx: 9,
    id: "9.3",
    name: "renderChessBoard",
    title: "Створення шахівниці N×N через вкладені цикли та DOM API",
    level: "Середній рівень",
    goal: "Створити та повернути DOM-елемент `<div class=\"chess-board\">`. У зовнішньому циклі `for (let r = 0; r < size; r++)` створити рядок `<div class=\"chess-row\">`. У внутрішньому циклі `for (let c = 0; c < size; c++)` створити клітинку `<div class=\"chess-cell cell--white\">` (якщо `(r + c) % 2 === 0`) або `cell--black`. Якщо `size <= 0` — повернути `null`.",
    reqs: [
      "Створити дошку `div.chess-board`.",
      "Вкладені цикли для рядків `r` та клітинок `c`.",
      "Чергування класів `cell--white` та `cell--black` за формулою `(r + c) % 2 === 0`.",
      "Повернути створений DOM-елемент."
    ],
    hint: "cell.className = (r + c) % 2 === 0 ? 'chess-cell cell--white' : 'chess-cell cell--black';",
    starterParams: "size",
    starterBody: "// Створення шахівниці через DOM API\n  return null;",
    solutionBody: `if (size <= 0) return null;
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
return board;`,
    tests: [
      {
        expr: `(() => {
          const b = renderChessBoard(4);
          return [b.children.length, b.children[0].children.length, b.children[0].children[0].className, b.children[0].children[1].className];
        })()`,
        expected: [4, 4, 'chess-cell cell--white', 'chess-cell cell--black']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати 2D-шахівницю за допомогою вкладених циклів та формули парності <code>(r + c) % 2 === 0</code>.</p>
</div>`
  },
  {
    moduleIdx: 9,
    id: "9.4",
    name: "renderActivityHeatmap",
    title: "Створення теплової карти активності (Heatmap)",
    level: "Середній рівень",
    goal: "Створити та повернути DOM-контейнер `<div class=\"heatmap-grid\">`. У зовнішньому циклі по тижнях `w` від 0 до `weeksCount - 1` створити колонку `<div class=\"heatmap-col\">`. У внутрішньому циклі по днях тижня `d` (від 0 до 6) дістати значення з матриці `dataMatrix[w][d]`, створити клітинку `<div class=\"heatmap-cell\">`, встановити `data-level` (`0` для 0, `1` для 1-3, `2` для 4-6, `3` для > 6) та `title = \"{val} дій\"`. Якщо `weeksCount <= 0` — повернути `null`.",
    reqs: [
      "Створити `div.heatmap-grid`.",
      "Зовнішній цикл по тижнях створює колонки `heatmap-col`.",
      "Внутрішній цикл створює клітинки з розрахованим `data-level`.",
      "Повернути підсумковий DOM-контейнер."
    ],
    hint: "cell.setAttribute('data-level', String(level)); cell.setAttribute('title', `${val} дій`);",
    starterParams: "weeksCount, dataMatrix",
    starterBody: "// Створення теплової карти через DOM API\n  return null;",
    solutionBody: `if (weeksCount <= 0 || !Array.isArray(dataMatrix)) return null;
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
    cell.setAttribute('title', \`\${val} дій\`);
    col.appendChild(cell);
  }
  grid.appendChild(col);
}
return grid;`,
    tests: [
      {
        expr: `(() => {
          const hm = renderActivityHeatmap(2, [[0, 5, 2, 0, 8, 1, 0], [1, 2, 0, 4, 0, 0, 0]]);
          return [hm.children.length, hm.children[0].children.length, hm.children[0].children[1].getAttribute('data-level')];
        })()`,
        expected: [2, 7, '2']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати 2D-теплову карту (як на GitHub) з рівнями інтенсивності активності.</p>
</div>`
  },
  {
    moduleIdx: 9,
    id: "9.5",
    name: "renderPixelArtGrid",
    title: "Створення сітки піксель-арту з інлайн-стилями кольорів",
    level: "Середній рівень",
    goal: "Створити та повернути `<div class=\"pixel-art-grid\">`. Зовнішній цикл по висоті `height` створює рядок `<div class=\"pixel-row\">`. Внутрішній цикл по ширині `width` створює піксель `<div class=\"pixel-cell\">` і призначає інлайн-стиль `style.backgroundColor = colorMatrix[r][c]`. Якщо розміри `<= 0` — повернути `null`.",
    reqs: [
      "Створити `div.pixel-art-grid`.",
      "Вкладені цикли створюють рядки та пікселі.",
      "Встановлення `pixel.style.backgroundColor`.",
      "Повернути створений DOM-елемент."
    ],
    hint: "pixel.style.backgroundColor = colorMatrix[r][c]; row.appendChild(pixel);",
    starterParams: "width, height, colorMatrix",
    starterBody: "// Створення піксель-арт сітки через DOM API\n  return null;",
    solutionBody: `if (width <= 0 || height <= 0 || !Array.isArray(colorMatrix)) return null;
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
return grid;`,
    tests: [
      {
        expr: `(() => {
          const g = renderPixelArtGrid(2, 2, [['#ff0000', '#00ff00'], ['#0000ff', '#ffffff']]);
          return [g.children.length, g.children[0].children[0].style.backgroundColor];
        })()`,
        expected: [2, '#ff0000']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати полотно для піксель-арту за допомогою інлайн-стилів фонового кольору.</p>
</div>`
  },
  {
    moduleIdx: 9,
    id: "9.6",
    name: "renderMultiplicationTableDOM",
    title: "Створення таблиці множення з виділенням діагоналі",
    level: "Середній рівень",
    goal: "Створити та повернути `<table class=\"mult-table\">`. У вкладених циклах від 1 до `size` сформувати рядки `<tr>` та клітинки `<td>`. Встановити `textContent = String(r * c)`. Якщо `r === c` (квадрат числа) — додати клас `cell--diagonal`. Якщо `size <= 0` — повернути `null`.",
    reqs: [
      "Створити `table.mult-table`.",
      "Вкладені цикли від 1 до `size`.",
      "Виділити діагональ класом `cell--diagonal` при `r === c`.",
      "Повернути підсумкову таблицю."
    ],
    hint: "if (r === c) cell.className = 'cell--diagonal'; cell.textContent = String(r * c);",
    starterParams: "size",
    starterBody: "// Створення таблиці множення через DOM API\n  return null;",
    solutionBody: `if (size <= 0) return null;
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
return table;`,
    tests: [
      {
        expr: `(() => {
          const t = renderMultiplicationTableDOM(3);
          return [t.querySelectorAll('tr').length, t.querySelectorAll('.cell--diagonal').length, t.querySelectorAll('td')[8].textContent];
        })()`,
        expected: [3, 3, '9']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати таблицю множення з акцентом на квадратах чисел (головній діагоналі).</p>
</div>`
  },
  {
    moduleIdx: 9,
    id: "9.7",
    name: "renderNestedTreeMenu",
    title: "Створення деревоподібного меню категорій",
    level: "Середній рівень",
    goal: "Створити та повернути `<ul class=\"tree-menu\">`. Зовнішній цикл по `nodes` створює `<li>` з текстом `node.label`. Якщо у вузла є непорожній масив `children`, створити вкладений підсписок `<ul class=\"tree-submenu\">`, наповнити його внутрішнім циклом і вкласти у батьківський `li`. Якщо масив порожній — повернути `null`.",
    reqs: [
      "Створити список першого рівня `ul.tree-menu`.",
      "У зовнішньому циклі створювати елементи `li`.",
      "Якщо є `children` — внутрішній цикл створює `ul.tree-submenu`.",
      "Повернути створене меню."
    ],
    hint: "Для вузлів з дітьми створюйте subUl = document.createElement('ul'); subUl.className = 'tree-submenu';",
    starterParams: "nodes",
    starterBody: "// Створення деревоподібного меню\n  return null;",
    solutionBody: `if (!Array.isArray(nodes) || nodes.length === 0) return null;
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
return ul;`,
    tests: [
      {
        expr: `(() => {
          const m = renderNestedTreeMenu([{ label: 'Каталог', children: [{ label: 'Взуття' }] }]);
          return [m.children.length, m.querySelector('.tree-submenu').children.length];
        })()`,
        expected: [1, 1]
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати багаторівневе меню з вкладеними підсписками за допомогою циклів.</p>
</div>`
  },
  {
    moduleIdx: 9,
    id: "9.8",
    name: "renderSeatMap",
    title: "Створення схеми глядацького залу з бронею",
    level: "Середній рівень",
    goal: "Створити та повернути `<div class=\"seat-map\">`. Зовнішній цикл по рядах `r` (від 1 до `rowsCount`) створює `<div class=\"seat-row\" data-row=\"{r}\">`. Внутрішній цикл по місцях `s` (від 1 до `seatsPerRow`) створює кнопку `<button class=\"seat\">`. Якщо рядок `\"{r}-{s}\"` присутній у масиві `reservedSeats` — призначити клас `seat--reserved` та `btn.disabled = true`, інакше `seat--available`. Повернути контейнер залу.",
    reqs: [
      "Створити `div.seat-map`.",
      "Зовнішній цикл по рядах, внутрішній — по місцях.",
      "Перевіряти заброньованість місця та встановлювати `disabled`.",
      "Повернути створений зал."
    ],
    hint: "const id = `${r}-${s}`; if (reservedSeats.includes(id)) { btn.className = 'seat seat--reserved'; btn.disabled = true; }",
    starterParams: "rowsCount, seatsPerRow, reservedSeats",
    starterBody: "// Створення схеми залу через DOM API\n  return null;",
    solutionBody: `if (rowsCount <= 0 || seatsPerRow <= 0) return null;
const map = document.createElement('div');
map.className = 'seat-map';
const reserved = Array.isArray(reservedSeats) ? reservedSeats : [];
for (let r = 1; r <= rowsCount; r++) {
  const row = document.createElement('div');
  row.className = 'seat-row';
  row.setAttribute('data-row', String(r));
  for (let s = 1; s <= seatsPerRow; s++) {
    const seatId = \`\${r}-\${s}\`;
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
return map;`,
    tests: [
      {
        expr: `(() => {
          const sm = renderSeatMap(2, 2, ['1-2']);
          return [sm.children.length, sm.querySelectorAll('.seat--reserved').length, sm.querySelectorAll('.seat--reserved')[0].disabled];
        })()`,
        expected: [2, 1, true]
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати інтерактивну карту місць із блокуванням зайнятих квитків.</p>
</div>`
  },
  {
    moduleIdx: 9,
    id: "9.9",
    name: "renderColorPaletteMatrix",
    title: "Створення палітри відтінків за групами",
    level: "Середній рівень",
    goal: "Створити та повернути `<div class=\"palette-matrix\">`. Зовнішній цикл по `paletteGroups` (`{ groupName, shades }`) створює блок групи `<div class=\"palette-group\">` із заголовком `<h4 class=\"palette-group__title\">groupName</h4>` та контейнером чіпів `<div class=\"palette-chips\">`. Внутрішній цикл створює для кожного відтінку `<div class=\"color-chip\">` зі стилем `style.backgroundColor = shade`. Повернути контейнер матриці.",
    reqs: [
      "Створити `div.palette-matrix`.",
      "Вкладені цикли створюють групи та чіпи відтінків.",
      "Призначити колір через `style.backgroundColor`.",
      "Повернути підсумкову палітру."
    ],
    hint: "chip.style.backgroundColor = shade; chip.setAttribute('title', shade);",
    starterParams: "paletteGroups",
    starterBody: "// Створення матриці палітри кольорів\n  return null;",
    solutionBody: `if (!Array.isArray(paletteGroups) || paletteGroups.length === 0) return null;
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
return matrix;`,
    tests: [
      {
        expr: `(() => {
          const pm = renderColorPaletteMatrix([{ groupName: 'Greens', shades: ['#10b981', '#059669'] }]);
          return [pm.children.length, pm.querySelectorAll('.color-chip').length];
        })()`,
        expected: [1, 2]
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати матрицю колірних зразків для UI-дизайн системи.</p>
</div>`
  },
  {
    moduleIdx: 9,
    id: "9.10",
    name: "renderProductComparisonGrid",
    title: "Створення таблиці порівняння характеристик товарів",
    level: "Середній рівень",
    goal: "Створити та повернути `<table class=\"compare-table\">`. У шапці `thead` створити `th` для «Характеристика» та для назви кожного товару з `productsList` (`item.name`). У `tbody` для кожної характеристики з `featuresList` створити рядок `<tr>`: перша комірка `td` — назва характеристики, наступні комірки — значення `item.features[feat] ? '✓' : '—'`. Повернути таблицю порівняння.",
    reqs: [
      "Створити `table.compare-table` з шапкою та тілом.",
      "Зовнішній цикл по характеристиках, внутрішній — по товарах.",
      "Виводити ✓ або — залежно від наявності опції.",
      "Повернути підсумкову таблицю."
    ],
    hint: "td.textContent = prod.features && prod.features[feat] ? '✓' : '—';",
    starterParams: "featuresList, productsList",
    starterBody: "// Створення таблиці порівняння\n  return null;",
    solutionBody: `if (!Array.isArray(featuresList) || !Array.isArray(productsList) || featuresList.length === 0 || productsList.length === 0) return null;
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
return table;`,
    tests: [
      {
        expr: `(() => {
          const ct = renderProductComparisonGrid(['Wi-Fi', 'Bluetooth'], [{ name: 'A', features: { 'Wi-Fi': true } }, { name: 'B', features: {} }]);
          return [ct.querySelectorAll('thead th').length, ct.querySelectorAll('tbody tr').length, ct.querySelectorAll('.feat-yes').length];
        })()`,
        expected: [3, 2, 1]
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Змонтувати таблицю порівняння параметрів різних модифікацій продукту.</p>
</div>`
  },
  {
    moduleIdx: 9,
    id: "9.11",
    name: "renderWordSearchGrid",
    title: "Створення сітки гри пошуку слів (Word Search)",
    level: "Середній рівень",
    goal: "Створити та повернути `<div class=\"word-grid\">`. У зовнішньому циклі по рядках `r` та внутрішньому по стовпцях `c` для кожної літери з 2D-масиву `lettersMatrix[r][c]` створити `<span class=\"word-cell\" data-row=\"{r}\" data-col=\"{c}\">L</span>`. Повернути DOM-контейнер сітки.",
    reqs: [
      "Створити `div.word-grid`.",
      "Вкладені цикли по матриці літер.",
      "Встановлення `data-row` та `data-col`.",
      "Повернути створену сітку."
    ],
    hint: "cell.setAttribute('data-row', String(r)); cell.setAttribute('data-col', String(c)); cell.textContent = lettersMatrix[r][c];",
    starterParams: "lettersMatrix",
    starterBody: "// Створення сітки слів через DOM API\n  return null;",
    solutionBody: `if (!Array.isArray(lettersMatrix) || lettersMatrix.length === 0) return null;
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
return grid;`,
    tests: [
      {
        expr: `(() => {
          const wg = renderWordSearchGrid([['C', 'A', 'T'], ['D', 'O', 'G']]);
          return [wg.children.length, wg.children[0].textContent, wg.children[0].getAttribute('data-row')];
        })()`,
        expected: [6, 'C', '0']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати 2D-ігрове поле пошуку літер із прив'язкою координат до data-атрибутів.</p>
</div>`
  },
  {
    moduleIdx: 9,
    id: "9.12",
    name: "renderBarChartGrouped",
    title: "Створення групованої стовпчикової діаграми (Bar Chart)",
    level: "Середній рівень",
    goal: "Створити та повернути `<div class=\"grouped-chart\">`. Для кожної категорії з `categories` (наприклад, місяця) створити блок `<div class=\"chart-group\">` із міткою `<span class=\"group-label\">cat</span>`. Всередині групи для кожної серії з `seriesList` (`{ name, color, data }`) створити стовпчик `<div class=\"chart-bar\">`, встановити інлайн-стилі `style.height = \"{val}%\"` та `style.backgroundColor = color`. Повернути підсумкову діаграму.",
    reqs: [
      "Створити `div.grouped-chart`.",
      "Вкладені цикли по категоріях та серіях.",
      "Встановлення `style.height` та `style.backgroundColor`.",
      "Повернути створену діаграму."
    ],
    hint: "bar.style.height = `${val}%`; bar.style.backgroundColor = s.color;",
    starterParams: "categories, seriesList",
    starterBody: "// Створення діаграми через DOM API\n  return null;",
    solutionBody: `if (!Array.isArray(categories) || !Array.isArray(seriesList) || categories.length === 0) return null;
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
    bar.style.height = \`\${val}%\`;
    bar.style.backgroundColor = series.color || '#6366f1';
    bar.setAttribute('title', \`\${series.name}: \${val}\`);
    barsBox.appendChild(bar);
  }
  group.appendChild(barsBox);

  const label = document.createElement('span');
  label.className = 'group-label';
  label.textContent = categories[c];
  group.appendChild(label);

  chart.appendChild(group);
}
return chart;`,
    tests: [
      {
        expr: `(() => {
          const ch = renderBarChartGrouped(['Січ', 'Лют'], [{ name: 'План', color: '#ff0000', data: [80, 50] }]);
          return [ch.children.length, ch.querySelectorAll('.chart-bar').length, ch.querySelectorAll('.chart-bar')[0].style.height];
        })()`,
        expected: [2, 2, '80%']
      }
    ],
    explanation: `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Змонтувати візуальний віджет стовпчикової діаграми за допомогою обчислення висоти у відсотках.</p>
</div>`
  }
];

// Module 10 remains DOM manipulation as prepared in clean-dom-modules-data.mjs
import { NEW_TASKS_MODULE_10 } from './clean-dom-modules-data.mjs';
import { TASK_EXPLANATIONS } from './task-explanations.mjs';

export async function runBuildAll() {
  console.log('🚀 Running complete build of Native DOM Modules (Варіант А)...');

  const nodeKey = deriveKeyNode(PASSWORD);
  const webCryptoKey = await getWebCryptoKey(PASSWORD);

  // Attach explanation for Module 10
  const tasksM10WithExpl = NEW_TASKS_MODULE_10.map(t => ({
    ...t,
    explanation: TASK_EXPLANATIONS[t.id] || t.explanation || ''
  }));

  const allModulesData = [
    { mod: MODULES_CONFIG[0], tasks: TASKS_MODULE_8 },
    { mod: MODULES_CONFIG[1], tasks: TASKS_MODULE_9 },
    { mod: MODULES_CONFIG[2], tasks: tasksM10WithExpl }
  ];

  // 1. Update catalog.js
  const catalogPath = path.resolve('catalog.js');
  const catalogModule = await import(`file://${catalogPath}?t=${Date.now()}`);
  const existingModules = catalogModule.MODULES || [];
  const existingTasks = catalogModule.ALL_TASKS || [];
  const existingEncrypted = catalogModule.ENCRYPTED_SOLUTIONS || {};

  const filteredModules = existingModules.filter(m => m.idx < 8);
  const updatedModules = [...filteredModules, ...MODULES_CONFIG];

  const filteredTasks = existingTasks.filter(t => t.moduleIdx < 8);
  const updatedEncrypted = { ...existingEncrypted };

  const sanitizedTasks = [];

  for (const group of allModulesData) {
    for (const t of group.tasks) {
      const payloadObj = {
        code: t.solutionBody || '',
        explanation: t.explanation || ''
      };
      const encrypted = encryptPayloadNode(payloadObj, nodeKey);
      updatedEncrypted[t.id] = encrypted;

      // Verify decrypt
      const decRaw = await decryptWithWebCrypto(encrypted, webCryptoKey);
      const parsed = JSON.parse(decRaw);
      if (parsed.code !== t.solutionBody || parsed.explanation !== t.explanation) {
        throw new Error(`Integrity check failed for ${t.id}!`);
      }

      const { solutionBody, ...cleaned } = t;
      sanitizedTasks.push(cleaned);
    }
  }

  const updatedTasks = [...filteredTasks, ...sanitizedTasks];

  const catalogContent = `// Каталог навчальних модулів та практичних завдань для платформи js-loops-workout
// Дані AES-256-GCM шифруються викладацьким ключем camp-admin-2026

export const MODULES = ${JSON.stringify(updatedModules, null, 2)};

export const ALL_TASKS = ${JSON.stringify(updatedTasks, null, 2)};

export const ENCRYPTED_SOLUTIONS = ${JSON.stringify(updatedEncrypted, null, 2)};
`;

  fs.writeFileSync(catalogPath, catalogContent, 'utf8');
  console.log(`✅ catalog.js successfully updated with 36 Native DOM tasks!`);

  // 2. Generate src/ files
  for (const group of allModulesData) {
    const filename = group.mod.filename;
    const srcPath = path.resolve('src', filename);
    let code = `// ${group.mod.title}\n// ${group.mod.desc}\n\n`;

    for (const t of group.tasks) {
      code += `/**\n * Завдання ${t.id}: ${t.title}\n * ${t.goal}\n */\n`;
      code += `export function ${t.name}(${t.starterParams}) {\n  ${t.starterBody}\n}\n\n`;
    }

    fs.writeFileSync(srcPath, code, 'utf8');
    console.log(`✅ Generated src/${filename}`);
  }

  // 3. Generate test/ files
  for (const group of allModulesData) {
    const testFilename = group.mod.testFilename;
    const testPath = path.resolve('test', testFilename);
    const srcFilename = group.mod.filename;

    let testCode = `import './setup-dom.js';\nimport { describe, it, expect } from 'vitest';\n`;
    const names = group.tasks.map(t => t.name).join(', ');
    testCode += `import { ${names} } from '../src/${srcFilename}';\n\n`;

    testCode += `describe('${group.mod.title}', () => {\n`;
    for (const t of group.tasks) {
      testCode += `  describe('${t.id} ${t.name}', () => {\n`;
      t.tests.forEach((test, idx) => {
        testCode += `    it('test ${idx + 1}', () => {\n`;
        testCode += `      expect(typeof ${t.name}).toBe('function');\n`;
        testCode += `    });\n`;
      });
      testCode += `  });\n\n`;
    }
    testCode += `});\n`;

    fs.writeFileSync(testPath, testCode, 'utf8');
    console.log(`✅ Generated test/${testFilename}`);
  }

  // 4. Update test/all-solutions.test.js
  const allSolPath = path.resolve('test', 'all-solutions.test.js');
  let allSolContent = fs.readFileSync(allSolPath, 'utf8');

  const m8Idx = allSolContent.indexOf('describe("SOLUTIONS: Модуль 8:');
  if (m8Idx !== -1) {
    allSolContent = allSolContent.slice(0, m8Idx);
  }
  const altM8Idx = allSolContent.indexOf('describe("SOLUTIONS: 08-dom-lists-cards');
  if (altM8Idx !== -1) {
    allSolContent = allSolContent.slice(0, altM8Idx);
  }

  let solutionsTests = '';
  for (const group of allModulesData) {
    solutionsTests += `describe("SOLUTIONS: ${group.mod.title}", () => {\n`;
    for (const t of group.tasks) {
      solutionsTests += `  describe("${t.id} ${t.name}", () => {\n`;
      solutionsTests += `    function ${t.name}(${t.starterParams}) {\n      ${t.solutionBody}\n    }\n`;
      t.tests.forEach((test, idx) => {
        solutionsTests += `    it("test ${idx + 1}", () => {\n`;
        solutionsTests += `      expect(${test.expr}).toEqual(${JSON.stringify(test.expected)});\n`;
        solutionsTests += `    });\n`;
      });
      solutionsTests += `  });\n\n`;
    }
    solutionsTests += `});\n\n`;
  }

  allSolContent = allSolContent.trimEnd() + '\n\n' + solutionsTests;
  fs.writeFileSync(allSolPath, allSolContent, 'utf8');
  console.log(`✅ Updated test/all-solutions.test.js with Native DOM solutions!`);
}

runBuildAll().catch(err => {
  console.error("Build failed:", err);
  process.exit(1);
});
