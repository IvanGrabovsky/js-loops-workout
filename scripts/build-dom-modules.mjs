// scripts/build-dom-modules.mjs
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const PASSWORD = 'camp-admin-2026';
const SALT = Buffer.from('camp_salt_2026_secure', 'utf-8');

function deriveKeyNode(password) {
  return crypto.pbkdf2Sync(password, SALT, 100000, 32, 'sha256');
}

function encryptTextNode(text, key) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `${iv.toString('hex')}:${tag.toString('hex')}:${encrypted.toString('hex')}`;
}

async function getWebCryptoKey(password) {
  const enc = new TextEncoder();
  const salt = enc.encode('camp_salt_2026_secure');
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
    ['decrypt']
  );
}

async function decryptWithKey(payload, webCryptoKey) {
  const [ivHex, tagHex, dataHex] = payload.split(':');
  const iv = new Uint8Array(ivHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
  const tag = new Uint8Array(tagHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
  const data = new Uint8Array(dataHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

  const combined = new Uint8Array(data.length + tag.length);
  combined.set(data, 0);
  combined.set(tag, data.length);

  const decryptedBuf = await crypto.webcrypto.subtle.decrypt(
    { name: 'AES-GCM', iv: iv },
    webCryptoKey,
    combined
  );
  return new TextDecoder().decode(decryptedBuf);
}

export const NEW_MODULES = [
  {
    idx: 8,
    id: "08-dom-lists-cards",
    title: "Модуль 8: Генерація списків, карток та UI-елементів через цикли",
    shortTitle: "8. DOM Списки та Картки",
    filename: "08-dom-lists-cards.js",
    testFilename: "08-dom-lists-cards.test.js",
    desc: "Динамічне створення карток товарів, рейтингів, хлібних крихт, статусних бейджів, хмар тегів та списків у DOM."
  },
  {
    idx: 9,
    id: "09-dom-grids-tables",
    title: "Модуль 9: Генерація складних структур та сіток через вкладені цикли",
    shortTitle: "9. DOM Таблиці та Матриці",
    filename: "09-dom-grids-tables.js",
    testFilename: "09-dom-grids-tables.test.js",
    desc: "Побудова HTML-таблиць, сіток календарів, шахових дошок, теплових карт активності та матриць у DOM."
  },
  {
    idx: 10,
    id: "10-dom-manipulation",
    title: "Модуль 10: Маніпуляція DOM, стилізація та очищення через цикли",
    shortTitle: "10. DOM Маніпуляція та Стилі",
    filename: "10-dom-manipulation.js",
    testFilename: "10-dom-manipulation.test.js",
    desc: "Зебра-стилізація, швидке очищення через while, покрокові майстри, пагінація, сортування вузлів та анімації."
  }
];

export const NEW_TASKS_MODULE_8 = [
  {
    moduleIdx: 8,
    id: "8.1",
    name: "renderProductCards",
    title: "Динамічне створення карток товарів через цикл",
    level: "Базовий рівень",
    goal: "Створити контейнер <div class=\"product-cards-container\">. Для кожного товару з масиву products створити <div class=\"product-card\"> з заголовком <h4> назви товару та параграфом <p> з ціною у форматі \"${price} ₴\". Додати всі картки до контейнера та повернути його.",
    reqs: [
      "Створити кореневий div з класом product-cards-container.",
      "Для кожного товару створити div.product-card через цикл for.",
      "Всередину кожної картки додати h4 (title) та p (price + ' ₴').",
      "Повернути створений контейнер."
    ],
    hint: "Використовуйте <a href=\"https://developer.mozilla.org/uk/docs/Web/API/Document/createElement\" target=\"_blank\">document.createElement('div')</a> для створення вузлів та <a href=\"https://developer.mozilla.org/uk/docs/Web/API/Node/appendChild\" target=\"_blank\">container.appendChild()</a> для додавання.",
    starterParams: "products",
    starterBody: "// Динамічне створення карток товарів\n  return null;",
    solutionBody: "const container = document.createElement('div');\ncontainer.className = 'product-cards-container';\nif (!Array.isArray(products)) return container;\nfor (let i = 0; i < products.length; i++) {\n  const p = products[i];\n  const card = document.createElement('div');\n  card.className = 'product-card';\n  const title = document.createElement('h4');\n  title.className = 'product-card__title';\n  title.textContent = p.title || '';\n  const price = document.createElement('p');\n  price.className = 'product-card__price';\n  price.textContent = `${p.price} ₴`;\n  card.appendChild(title);\n  card.appendChild(price);\n  container.appendChild(card);\n}\nreturn container;",
    tests: [
      {
        expr: `(() => {
          const res = renderProductCards([
            { title: 'Ноутбук', price: 25000 },
            { title: 'Мишка', price: 800 }
          ]);
          const cards = res.querySelectorAll('.product-card');
          return [res.className, cards.length, cards[0].querySelector('h4').textContent];
        })()`,
        expected: ['product-cards-container', 2, 'Ноутбук']
      },
      {
        expr: "renderProductCards([]).children.length",
        expected: 0
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.2",
    name: "renderStarRating",
    title: "Рендеринг рейтингу зірочками (★ / ☆)",
    level: "Базовий рівень",
    goal: "Створити <div class=\"star-rating\" role=\"img\" aria-label=\"Рейтинг: X з Y\">. У циклі від 1 до maxStars згенерувати зірки: якщо індекс <= rating — <span class=\"star star--filled\">★</span> з кольором rgb(245, 158, 11), інакше <span class=\"star star--empty\">☆</span> з кольором rgb(156, 163, 175). Якщо maxStars <= 0 — повернути порожній div.",
    reqs: [
      "Встановити атрибути role=\"img\" та aria-label.",
      "Використати цикл for від 1 до maxStars.",
      "Встановити класи star--filled / star--empty та відповідні кольори."
    ],
    hint: "Застосуйте цикл for (let i = 1; i <= maxStars; i++) з перевіркою i <= rating та методом <a href=\"https://developer.mozilla.org/uk/docs/Web/API/Element/classList\" target=\"_blank\">classList.add</a> для додавання класів star--filled або star--empty.",
    starterParams: "rating, maxStars = 5",
    starterBody: "// Рендеринг зірочок рейтингу\n  return null;",
    solutionBody: "const wrap = document.createElement('div');\nwrap.className = 'star-rating';\nwrap.setAttribute('role', 'img');\nwrap.setAttribute('aria-label', `Рейтинг: ${rating} з ${maxStars}`);\nif (maxStars <= 0) return wrap;\nfor (let i = 1; i <= maxStars; i++) {\n  const star = document.createElement('span');\n  star.className = 'star';\n  if (i <= rating) {\n    star.classList.add('star--filled');\n    star.textContent = '★';\n    star.style.color = 'rgb(245, 158, 11)';\n  } else {\n    star.classList.add('star--empty');\n    star.textContent = '☆';\n    star.style.color = 'rgb(156, 163, 175)';\n  }\n  wrap.appendChild(star);\n}\nreturn wrap;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: ['img', 'Рейтинг: 3 з 5', 5, 3, '★', 'rgb(245, 158, 11)', 2, '☆', 'rgb(156, 163, 175)']
      },
      {
        expr: `renderStarRating(0, 0).children.length`,
        expected: 0
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.3",
    name: "renderBreadcrumbs",
    title: "Генерація хлібних крихт (Breadcrumbs) зі стрілками-роздільниками",
    level: "Базовий рівень",
    goal: "Створити <nav aria-label=\"breadcrumb\"><ol class=\"breadcrumb-list\"></ol></nav>. У циклі for пройтися по links ({ title, url }). Для проміжних елементів додати <a href=\"...\"> та <span class=\"breadcrumb-separator\" aria-hidden=\"true\">→</span>. Для останнього елемента створити <span class=\"breadcrumb-current\" aria-current=\"page\"> без посилання і без розділювача.",
    reqs: [
      "Семантична структура <nav>, <ol>, <li>.",
      "Розділювач '→' додається тільки між елементами.",
      "Останній елемент містить атрибут aria-current=\"page\"."
    ],
    hint: "Перевіряйте в циклі if (i === links.length - 1) для останнього елемента.",
    starterParams: "links",
    starterBody: "// Генерація навігаційного ланцюжка\n  return null;",
    solutionBody: "const nav = document.createElement('nav');\nnav.setAttribute('aria-label', 'breadcrumb');\nconst ol = document.createElement('ol');\nol.className = 'breadcrumb-list';\nnav.appendChild(ol);\nif (!Array.isArray(links) || links.length === 0) return nav;\nfor (let i = 0; i < links.length; i++) {\n  const item = links[i];\n  const li = document.createElement('li');\n  li.className = 'breadcrumb-item';\n  const isLast = (i === links.length - 1);\n  if (isLast) {\n    const span = document.createElement('span');\n    span.className = 'breadcrumb-current';\n    span.setAttribute('aria-current', 'page');\n    span.textContent = item.title;\n    li.appendChild(span);\n  } else {\n    const a = document.createElement('a');\n    a.href = item.url;\n    a.textContent = item.title;\n    li.appendChild(a);\n    const sep = document.createElement('span');\n    sep.className = 'breadcrumb-separator';\n    sep.setAttribute('aria-hidden', 'true');\n    sep.textContent = '→';\n    li.appendChild(sep);\n  }\n  ol.appendChild(li);\n}\nreturn nav;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: ['NAV', 'breadcrumb', 3, 2, 'page', 'JS Loops']
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.4",
    name: "renderStatusBadges",
    title: "Динамічне створення статусних бейджів",
    level: "Базовий рівень",
    goal: "Створити <div class=\"badge-container\">. Для кожного елемента з items ({ label, status }) створити <span class=\"badge\">. Додати клас badge--status та фоновий колір: success -> rgb(16, 185, 129), warning -> rgb(245, 158, 11), danger -> rgb(239, 68, 68), інші -> neutral з rgb(107, 114, 128). Текст бейджа — label, колір тексту — rgb(255, 255, 255).",
    reqs: [
      "Встановити відповідний клас та inline backgroundColor.",
      "Встановити білий колір тексту color: rgb(255, 255, 255).",
      "Обробити невідомі статуси як neutral."
    ],
    hint: "Використайте об'єкт мапінгу кольорів і перевірку наявності ключа.",
    starterParams: "items",
    starterBody: "// Динамічне створення статусних бейджів\n  return null;",
    solutionBody: "const container = document.createElement('div');\ncontainer.className = 'badge-container';\nif (!Array.isArray(items)) return container;\nconst colors = {\n  success: 'rgb(16, 185, 129)',\n  warning: 'rgb(245, 158, 11)',\n  danger: 'rgb(239, 68, 68)',\n  neutral: 'rgb(107, 114, 128)'\n};\nfor (const item of items) {\n  const badge = document.createElement('span');\n  badge.className = 'badge';\n  const type = colors[item.status] ? item.status : 'neutral';\n  badge.classList.add(`badge--${type}`);\n  badge.style.backgroundColor = colors[type];\n  badge.style.color = 'rgb(255, 255, 255)';\n  badge.textContent = item.label || '';\n  container.appendChild(badge);\n}\nreturn container;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: ['badge-container', 3, true, 'rgb(16, 185, 129)', 'rgb(245, 158, 11)', 'rgb(239, 68, 68)']
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.5",
    name: "renderMessageList",
    title: "Рендеринг списку повідомлень чату",
    level: "Базовий рівень",
    goal: "Створити <ul class=\"message-list\">. У циклі для кожного повідомлення { author, text, timestamp, isMine } створити <li class=\"message-item\">. Якщо isMine === true — додати клас 'message-item--mine' та стиль alignSelf: 'flex-end'. Всередині розмістити <span class=\"message-author\">, <p class=\"message-text\"> та <time class=\"message-time\">.",
    reqs: [
      "Створити <ul> з класом message-list.",
      "Встановити клас message-item--mine та стиль alignSelf: flex-end для власних повідомлень.",
      "Використати семантичний тег <time> для часу."
    ],
    hint: "Перевіряйте m.isMine та встановлюйте li.style.alignSelf = 'flex-end'.",
    starterParams: "messages",
    starterBody: "// Рендеринг стрічки повідомлень\n  return null;",
    solutionBody: "const ul = document.createElement('ul');\nul.className = 'message-list';\nif (!Array.isArray(messages)) return ul;\nfor (const m of messages) {\n  const li = document.createElement('li');\n  li.className = 'message-item';\n  if (m.isMine) {\n    li.classList.add('message-item--mine');\n    li.style.alignSelf = 'flex-end';\n  }\n  const author = document.createElement('span');\n  author.className = 'message-author';\n  author.textContent = m.author || '';\n  const p = document.createElement('p');\n  p.className = 'message-text';\n  p.textContent = m.text || '';\n  const time = document.createElement('time');\n  time.className = 'message-time';\n  time.textContent = m.timestamp || '';\n  li.appendChild(author);\n  li.appendChild(p);\n  li.appendChild(time);\n  ul.appendChild(li);\n}\nreturn ul;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: ['UL', 2, true, 'flex-end', 'Привіт, як справи?']
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.6",
    name: "renderTagCloud",
    title: "Хмара тегів (Tag Cloud) зі шрифтами за популярністю",
    level: "Базовий рівень",
    goal: "Створити <div class=\"tag-cloud\">. Для кожного об'єкта { name, count } створити <span class=\"tag-chip\" data-count=\"...\">#name</span>. Якщо count > 10, додати клас 'tag-chip--popular' та стиль fontSize: '16px', інакше 'tag-chip--regular' та fontSize: '12px'.",
    reqs: [
      "Створити <div> з класом tag-cloud.",
      "Встановити атрибут data-count.",
      "Текст у форматі '#' + name.",
      "Динамічний розмір шрифту: 16px для count > 10, 12px для інших."
    ],
    hint: "Застосуйте chip.setAttribute('data-count', t.count) та chip.style.fontSize.",
    starterParams: "tags",
    starterBody: "// Хмара тегів зі шрифтами за популярністю\n  return null;",
    solutionBody: "const div = document.createElement('div');\ndiv.className = 'tag-cloud';\nif (!Array.isArray(tags)) return div;\nfor (const t of tags) {\n  const chip = document.createElement('span');\n  chip.className = 'tag-chip';\n  chip.setAttribute('data-count', String(t.count));\n  chip.textContent = `#${t.name}`;\n  if (t.count > 10) {\n    chip.classList.add('tag-chip--popular');\n    chip.style.fontSize = '16px';\n  } else {\n    chip.classList.add('tag-chip--regular');\n    chip.style.fontSize = '12px';\n  }\n  div.appendChild(chip);\n}\nreturn div;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: [2, '#javascript', '42', true, '16px', true, '12px']
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.7",
    name: "renderProgressBarSteps",
    title: "Прогрес-бар кроків із відсотковим заповненням",
    level: "Середній рівень",
    goal: "Створити <div class=\"step-progress-bar\"> з треком <div class=\"progress-track\"><div class=\"progress-fill\"></div></div>. Задати ширину progress-fill: Math.round((activeIndex / (steps.length - 1)) * 100) + '%'. У циклі для кожного кроку створити <div class=\"step-indicator\" data-step=\"...\">: якщо i < activeIndex — клас 'step--completed', якщо i === activeIndex — 'step--active', якщо i > activeIndex — 'step--upcoming'.",
    reqs: [
      "Обчислити відсоток та встановити progress-fill.style.width.",
      "Встановити атрибут data-step з номером кроку від 1.",
      "Встановити класи step--completed, step--active, step--upcoming."
    ],
    hint: "Ширина заповнення — (activeIndex / (steps.length - 1)) * 100 + '%'.",
    starterParams: "steps, activeIndex",
    starterBody: "// Прогрес-бар кроків реєстрації чи тесту\n  return null;",
    solutionBody: "const bar = document.createElement('div');\nbar.className = 'step-progress-bar';\nconst track = document.createElement('div');\ntrack.className = 'progress-track';\nconst fill = document.createElement('div');\nfill.className = 'progress-fill';\nconst len = Array.isArray(steps) ? steps.length : 0;\nconst pct = len > 1 ? Math.round((activeIndex / (len - 1)) * 100) : 0;\nfill.style.width = `${pct}%`;\ntrack.appendChild(fill);\nbar.appendChild(track);\nif (len === 0) return bar;\nconst stepsWrap = document.createElement('div');\nstepsWrap.className = 'steps-container';\nfor (let i = 0; i < len; i++) {\n  const step = document.createElement('div');\n  step.className = 'step-indicator';\n  step.setAttribute('data-step', String(i + 1));\n  step.textContent = steps[i];\n  if (i < activeIndex) step.classList.add('step--completed');\n  else if (i === activeIndex) step.classList.add('step--active');\n  else step.classList.add('step--upcoming');\n  stepsWrap.appendChild(step);\n}\nbar.appendChild(stepsWrap);\nreturn bar;",
    tests: [
      {
        expr: `(() => {
          const res = renderProgressBarSteps(['Крок 1', 'Крок 2', 'Крок 3'], 1);
          const fill = res.querySelector('.progress-fill');
          const steps = res.querySelectorAll('.step-indicator');
          return [
            fill.style.width,
            steps[0].classList.contains('step--completed'),
            steps[1].classList.contains('step--active'),
            steps[2].classList.contains('step--upcoming')
          ];
        })()`,
        expected: ['50%', true, true, true]
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.8",
    name: "renderNumberedList",
    title: "Нумерований список із маркерами та зміщенням початку",
    level: "Базовий рівень",
    goal: "Створити <ol class=\"numbered-list\" start=\"startNumber\">. У циклі для кожного рядка з items створити <li class=\"numbered-item\"><span class=\"item-num\">N.</span><span class=\"item-body\">текст</span></li>, де N — послідовний номер елемента від startNumber.",
    reqs: [
      "Встановити атрибут start для <ol>.",
      "Створити <span> з класом item-num та текстом 'N.'.",
      "Створити <span> з класом item-body."
    ],
    hint: "Номер кожного елемента — startNumber + i.",
    starterParams: "items, startNumber = 1",
    starterBody: "// Нумерований список із маркерами\n  return null;",
    solutionBody: "const ol = document.createElement('ol');\nol.className = 'numbered-list';\nol.setAttribute('start', String(startNumber));\nif (!Array.isArray(items)) return ol;\nfor (let i = 0; i < items.length; i++) {\n  const li = document.createElement('li');\n  li.className = 'numbered-item';\n  const numSpan = document.createElement('span');\n  numSpan.className = 'item-num';\n  numSpan.textContent = `${startNumber + i}.`;\n  const bodySpan = document.createElement('span');\n  bodySpan.className = 'item-body';\n  bodySpan.textContent = items[i];\n  li.appendChild(numSpan);\n  li.appendChild(bodySpan);\n  ol.appendChild(li);\n}\nreturn ol;",
    tests: [
      {
        expr: `(() => {
          const ol = renderNumberedList(['Вступ', 'Основи', 'Практика'], 5);
          const items = ol.querySelectorAll('.numbered-item');
          return [
            ol.getAttribute('start'),
            items.length,
            items[0].querySelector('.item-num').textContent,
            items[2].querySelector('.item-num').textContent
          ];
        })()`,
        expected: ['5', 3, '5.', '7.']
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.9",
    name: "renderNotificationFeed",
    title: "Стрічка сповіщень із виділенням непрочитаних",
    level: "Базовий рівень",
    goal: "Створити <div class=\"notification-feed\">. У циклі для кожного сповіщення { id, title, unread } створити <div class=\"notification-card\" data-id=\"...\"><h4 class=\"notification-title\">title</h4></div>. Якщо unread === true — додати клас 'notification--unread' та ліву кольорову рамку borderLeft: '4px solid rgb(59, 130, 246)'.",
    reqs: [
      "Встановити data-id з id сповіщення.",
      "Додати клас notification--unread та стиль borderLeft для непрочитаних.",
      "Повернути контейнер стрічки."
    ],
    hint: "Перевірте if (n.unread) { card.classList.add('notification--unread'); card.style.borderLeft = '4px solid rgb(59, 130, 246)'; }",
    starterParams: "notifications",
    starterBody: "// Стрічка сповіщень\n  return null;",
    solutionBody: "const feed = document.createElement('div');\nfeed.className = 'notification-feed';\nif (!Array.isArray(notifications)) return feed;\nfor (const n of notifications) {\n  const card = document.createElement('div');\n  card.className = 'notification-card';\n  card.setAttribute('data-id', String(n.id));\n  if (n.unread) {\n    card.classList.add('notification--unread');\n    card.style.borderLeft = '4px solid rgb(59, 130, 246)';\n  }\n  const h4 = document.createElement('h4');\n  h4.className = 'notification-title';\n  h4.textContent = n.title || '';\n  card.appendChild(h4);\n  feed.appendChild(card);\n}\nreturn feed;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: [2, true, '4px solid rgb(59, 130, 246)', false]
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.10",
    name: "renderTabsNavigation",
    title: "Панель вкладок із доступністю (ARIA tablist)",
    level: "Базовий рівень",
    goal: "Створити <nav class=\"tabs-nav\" role=\"tablist\">. У циклі створити кнопки <button class=\"tab-btn\" role=\"tab\">. Для активної вкладки (індекс === activeIdx) додати клас 'tab-btn--active', атрибут aria-selected=\"true\" та стиль borderBottom: '2px solid rgb(99, 102, 241)'. Для інших — aria-selected=\"false\".",
    reqs: [
      "Встановити role=\"tablist\" для контейнера та role=\"tab\" для кнопок.",
      "Встановити aria-selected відповідно до активності.",
      "Встановити стиль borderBottom для активної вкладки."
    ],
    hint: "Використовуйте btn.setAttribute('role', 'tab') та btn.setAttribute('aria-selected', isCur ? 'true' : 'false').",
    starterParams: "tabNames, activeIdx = 0",
    starterBody: "// Панель навігації вкладок\n  return null;",
    solutionBody: "const nav = document.createElement('nav');\nnav.className = 'tabs-nav';\nnav.setAttribute('role', 'tablist');\nif (!Array.isArray(tabNames)) return nav;\nfor (let i = 0; i < tabNames.length; i++) {\n  const btn = document.createElement('button');\n  btn.className = 'tab-btn';\n  btn.setAttribute('role', 'tab');\n  btn.textContent = tabNames[i];\n  if (i === activeIdx) {\n    btn.classList.add('tab-btn--active');\n    btn.setAttribute('aria-selected', 'true');\n    btn.style.borderBottom = '2px solid rgb(99, 102, 241)';\n  } else {\n    btn.setAttribute('aria-selected', 'false');\n  }\n  nav.appendChild(btn);\n}\nreturn nav;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: ['tablist', 3, true, 'true', '2px solid rgb(99, 102, 241)', 'false']
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.11",
    name: "renderAccordionList",
    title: "Список акордеонів на базі HTML5 <details> та <summary>",
    level: "Базовий рівень",
    goal: "Створити <div class=\"accordion-list\">. Для кожного елемента з sections ({ title, content, isOpen }) створити <details class=\"accordion-item\">. Якщо isOpen === true — додати атрибут 'open'. Всередині розмістити <summary class=\"accordion-header\">title</summary> та <div class=\"accordion-body\">content</div>.",
    reqs: [
      "Використати нативні HTML5 теги <details> та <summary>.",
      "Встановити атрибут open для відкритих секцій.",
      "Повернути контейнер."
    ],
    hint: "Для відкриття додайте details.setAttribute('open', '').",
    starterParams: "sections",
    starterBody: "// Список акордеонів\n  return null;",
    solutionBody: "const wrap = document.createElement('div');\nwrap.className = 'accordion-list';\nif (!Array.isArray(sections)) return wrap;\nfor (const sec of sections) {\n  const details = document.createElement('details');\n  details.className = 'accordion-item';\n  if (sec.isOpen) details.setAttribute('open', '');\n  const summary = document.createElement('summary');\n  summary.className = 'accordion-header';\n  summary.textContent = sec.title || '';\n  const body = document.createElement('div');\n  body.className = 'accordion-body';\n  body.textContent = sec.content || '';\n  details.appendChild(summary);\n  details.appendChild(body);\n  wrap.appendChild(details);\n}\nreturn wrap;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: [2, true, 'Розділ 1', false]
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.12",
    name: "renderAvatarStack",
    title: "Стек аватарів користувачів з індикатором залишку (+N)",
    level: "Середній рівень",
    goal: "Створити <div class=\"avatar-stack\">. У циклі вивести перші maxVisible користувачів у вигляді <div class=\"avatar\" title=\"name\" data-initials=\"initials\">initials</div>. Якщо всього користувачів більше за maxVisible, додати наприкінці один елемент <div class=\"avatar avatar--more\">+N</div>, де N = users.length - maxVisible.",
    reqs: [
      "Показати щонайбільше maxVisible аватарів.",
      "Встановити title та data-initials.",
      "Якщо є залишок — згенерувати аватар з класом avatar--more та текстом '+N'."
    ],
    hint: "Використайте Math.min(users.length, maxVisible) для ліміту циклу.",
    starterParams: "users, maxVisible = 3",
    starterBody: "// Стек аватарів користувачів\n  return null;",
    solutionBody: "const stack = document.createElement('div');\nstack.className = 'avatar-stack';\nif (!Array.isArray(users)) return stack;\nconst count = Math.min(users.length, maxVisible);\nfor (let i = 0; i < count; i++) {\n  const u = users[i];\n  const av = document.createElement('div');\n  av.className = 'avatar';\n  av.setAttribute('title', u.name || '');\n  av.setAttribute('data-initials', u.initials || '');\n  av.textContent = u.initials || '';\n  stack.appendChild(av);\n}\nif (users.length > maxVisible) {\n  const more = document.createElement('div');\n  more.className = 'avatar avatar--more';\n  more.textContent = `+${users.length - maxVisible}`;\n  stack.appendChild(more);\n}\nreturn stack;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: [3, 'ІГ', true, '+2']
      }
    ]
  }
];

export const NEW_TASKS_MODULE_9 = [
  {
    moduleIdx: 9,
    id: "9.1",
    name: "renderDataTable",
    title: "Побудова повноцінної HTML-таблиці через два цикли",
    level: "Базовий рівень",
    goal: "Створити <table class=\"data-table\">. Перший цикл по headers створює <thead><tr><th scope=\"col\">...</th></tr></thead>. Другий (зовнішній) цикл по rows створює <tbody><tr>, а вкладений внутрішній цикл по клітинках рядка створює <td data-label=\"...\">. Якщо rows порожній — <tbody> містить один рядок із <td colspan=\"...\">Немає даних</td>.",
    reqs: [
      "Семантична структура: <table>, <thead>, <tbody>, <tr>, <th>, <td>.",
      "Внутрішній цикл створює <td> для кожного значення рядка.",
      "При порожньому масиві рядків — резервний рядок із colspan та текстом 'Немає даних'."
    ],
    hint: "Один цикл для заголовків, вкладені цикли for для рядків та клітинок tbody.",
    starterParams: "headers, rows",
    starterBody: "// Побудова таблиці даних\n  return null;",
    solutionBody: "const table = document.createElement('table');\ntable.className = 'data-table';\nconst thead = document.createElement('thead');\nconst trHead = document.createElement('tr');\nfor (const h of headers || []) {\n  const th = document.createElement('th');\n  th.setAttribute('scope', 'col');\n  th.textContent = h;\n  trHead.appendChild(th);\n}\nthead.appendChild(trHead);\ntable.appendChild(thead);\n\nconst tbody = document.createElement('tbody');\nif (!Array.isArray(rows) || rows.length === 0) {\n  const emptyTr = document.createElement('tr');\n  const emptyTd = document.createElement('td');\n  emptyTd.setAttribute('colspan', String(headers ? headers.length : 1));\n  emptyTd.textContent = 'Немає даних';\n  emptyTr.appendChild(emptyTd);\n  tbody.appendChild(emptyTr);\n} else {\n  for (let r = 0; r < rows.length; r++) {\n    const tr = document.createElement('tr');\n    const rowData = rows[r] || [];\n    for (let c = 0; c < rowData.length; c++) {\n      const td = document.createElement('td');\n      if (headers && headers[c]) td.setAttribute('data-label', headers[c]);\n      td.textContent = String(rowData[c]);\n      tr.appendChild(td);\n    }\n    tbody.appendChild(tr);\n  }\n}\ntable.appendChild(tbody);\nreturn table;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: ['TABLE', 2, 'Імʼя', 4, 'Олена', 'Імʼя']
      },
      {
        expr: `renderDataTable(['A'], []).querySelector('tbody td').textContent`,
        expected: 'Немає даних'
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.2",
    name: "renderCalendarMonth",
    title: "Генерація календарної сітки місяця на базі <table>",
    level: "Середній рівень",
    goal: "Створити <div class=\"calendar-card\"><div class=\"calendar-header\">monthName</div><table class=\"calendar-table\">. Заголовки днів: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']. Через вкладені цикли по тижнях та днях розмістити клітинки <td>: порожні дні до startDayOfWeek (1..7, де 1 — Пн) та після totalDays мають клас 'cell--empty'. Дні вихідних (Сб та Нд, дні 6 і 7) мають клас 'cell--weekend' та стиль color: 'rgb(239, 68, 68)'.",
    reqs: [
      "Обчислити кількість тижнів через Math.ceil((totalDays + startDayOfWeek - 1) / 7).",
      "Встановити клас cell--weekend та червоний колір для вихідних.",
      "Встановити клас cell--empty для днів поза діапазоном місяця."
    ],
    hint: "Зовнішній цикл по тижнях w, внутрішній d від 1 до 7.",
    starterParams: "monthName, startDayOfWeek, totalDays",
    starterBody: "// Генерація календаря місяця\n  return null;",
    solutionBody: "const card = document.createElement('div');\ncard.className = 'calendar-card';\nconst hdr = document.createElement('div');\nhdr.className = 'calendar-header';\nhdr.textContent = monthName;\ncard.appendChild(hdr);\n\nconst table = document.createElement('table');\ntable.className = 'calendar-table';\nconst thead = document.createElement('thead');\nconst trHead = document.createElement('tr');\nconst dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];\nfor (const dn of dayNames) {\n  const th = document.createElement('th');\n  th.textContent = dn;\n  trHead.appendChild(th);\n}\nthead.appendChild(trHead);\ntable.appendChild(thead);\n\nconst tbody = document.createElement('tbody');\nlet dayCounter = 1;\nconst weeks = Math.ceil((totalDays + startDayOfWeek - 1) / 7);\n\nfor (let w = 0; w < weeks; w++) {\n  const tr = document.createElement('tr');\n  for (let d = 1; d <= 7; d++) {\n    const td = document.createElement('td');\n    const isWeekend = (d === 6 || d === 7);\n    if (isWeekend) {\n      td.classList.add('cell--weekend');\n      td.style.color = 'rgb(239, 68, 68)';\n    }\n    if ((w === 0 && d < startDayOfWeek) || dayCounter > totalDays) {\n      td.classList.add('cell--empty');\n      td.textContent = '';\n    } else {\n      td.classList.add('cell--day');\n      td.textContent = String(dayCounter);\n      dayCounter++;\n    }\n    tr.appendChild(td);\n  }\n  tbody.appendChild(tr);\n}\ntable.appendChild(tbody);\ncard.appendChild(table);\nreturn card;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: ['Листопад 2026', 30, '1', true, 'rgb(239, 68, 68)']
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.3",
    name: "renderChessBoard",
    title: "Генерація шахової дошки через вкладені цикли",
    level: "Базовий рівень",
    goal: "Створити <div class=\"chessboard\" data-size=\"size\">. Через вкладені цикли рядків (r від 0 до size-1) та стовпчиків (c від 0 до size-1) згенерувати рядки <div class=\"board-row\"> та клітинки <div class=\"cell\" data-coord=\"r,c\">. Якщо (r + c) % 2 === 0 — додати клас 'cell--white' та колір rgb(255, 255, 255), інакше 'cell--black' та rgb(30, 41, 59).",
    reqs: [
      "Встановити атрибут data-coord з координатами 'r,c'.",
      "Чергувати класи cell--white / cell--black за правилом (r + c) % 2 === 0.",
      "Встановити відповідний стиль backgroundColor."
    ],
    hint: "Чергування кольорів перевіряється через (r + c) % 2 === 0.",
    starterParams: "size = 8",
    starterBody: "// Генерація шахової дошки\n  return null;",
    solutionBody: "const board = document.createElement('div');\nboard.className = 'chessboard';\nboard.setAttribute('data-size', String(size));\nfor (let r = 0; r < size; r++) {\n  const row = document.createElement('div');\n  row.className = 'board-row';\n  for (let c = 0; c < size; c++) {\n    const cell = document.createElement('div');\n    cell.className = 'cell';\n    cell.setAttribute('data-coord', `${r},${c}`);\n    if ((r + c) % 2 === 0) {\n      cell.classList.add('cell--white');\n      cell.style.backgroundColor = 'rgb(255, 255, 255)';\n    } else {\n      cell.classList.add('cell--black');\n      cell.style.backgroundColor = 'rgb(30, 41, 59)';\n    }\n    row.appendChild(cell);\n  }\n  board.appendChild(row);\n}\nreturn board;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: ['4', 4, 16, true, 'rgb(255, 255, 255)', true, 'rgb(30, 41, 59)']
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.4",
    name: "renderActivityHeatmap",
    title: "Теплова карта активності (GitHub Heatmap)",
    level: "Середній рівень",
    goal: "Створити <div class=\"heatmap-container\" style=\"display: flex; gap: 4px;\">. Зовнішній цикл по weeksCount створює <div class=\"heatmap-week\" style=\"display: flex; flex-direction: column; gap: 4px;\">. Внутрішній цикл по daysPerWeek створює <div class=\"heatmap-day\" data-count=\"...\">. Залежно від count з activityMatrix[w][d]: 0 -> rgb(241, 245, 249), 1..3 -> rgb(187, 247, 208), 4..7 -> rgb(74, 222, 128), 8+ -> rgb(22, 163, 74).",
    reqs: [
      "Вкладені цикли: зовнішній по тижнях, внутрішній по днях.",
      "Встановити атрибут data-count.",
      "Динамічний колір фону залежно від кількості дій."
    ],
    hint: "Перевіряйте count = (activityMatrix[w] && activityMatrix[w][d]) || 0.",
    starterParams: "weeksCount, daysPerWeek = 7, activityMatrix = []",
    starterBody: "// Генерація теплової карти\n  return null;",
    solutionBody: "const map = document.createElement('div');\nmap.className = 'heatmap-container';\nmap.style.display = 'flex';\nmap.style.gap = '4px';\nfor (let w = 0; w < weeksCount; w++) {\n  const weekCol = document.createElement('div');\n  weekCol.className = 'heatmap-week';\n  weekCol.style.display = 'flex';\n  weekCol.style.flexDirection = 'column';\n  weekCol.style.gap = '4px';\n  for (let d = 0; d < daysPerWeek; d++) {\n    const count = (activityMatrix[w] && activityMatrix[w][d]) || 0;\n    const day = document.createElement('div');\n    day.className = 'heatmap-day';\n    day.setAttribute('data-count', String(count));\n    if (count === 0) day.style.backgroundColor = 'rgb(241, 245, 249)';\n    else if (count <= 3) day.style.backgroundColor = 'rgb(187, 247, 208)';\n    else if (count <= 7) day.style.backgroundColor = 'rgb(74, 222, 128)';\n    else day.style.backgroundColor = 'rgb(22, 163, 74)';\n    weekCol.appendChild(day);\n  }\n  map.appendChild(weekCol);\n}\nreturn map;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: [4, 'rgb(241, 245, 249)', 'rgb(187, 247, 208)', 'rgb(74, 222, 128)', 'rgb(22, 163, 74)']
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.5",
    name: "renderPixelArtGrid",
    title: "Піксельне полотно на базі CSS Grid",
    level: "Базовий рівень",
    goal: "Створити <div class=\"pixel-canvas\"> зі стилями display: 'grid' та gridTemplateColumns: `repeat(${cols}, 1fr)`. Через два вкладених цикли згенерувати rows * cols пікселів <div class=\"pixel\" data-row=\"r\" data-col=\"c\"> із фоновим кольором із colorMatrix[r][c] (якщо немає — '#ffffff').",
    reqs: [
      "Встановити display: grid та gridTemplateColumns.",
      "Встановити data-row та data-col для кожного пікселя.",
      "Встановити inline стиль backgroundColor."
    ],
    hint: "canvas.style.display = 'grid'; canvas.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;",
    starterParams: "rows, cols, colorMatrix",
    starterBody: "// Рендеринг піксельної сітки\n  return null;",
    solutionBody: "const canvas = document.createElement('div');\ncanvas.className = 'pixel-canvas';\ncanvas.style.display = 'grid';\ncanvas.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;\nfor (let r = 0; r < rows; r++) {\n  for (let c = 0; c < cols; c++) {\n    const color = (colorMatrix[r] && colorMatrix[r][c]) || 'rgb(255, 255, 255)';\n    const px = document.createElement('div');\n    px.className = 'pixel';\n    px.setAttribute('data-row', String(r));\n    px.setAttribute('data-col', String(c));\n    px.style.backgroundColor = color;\n    canvas.appendChild(px);\n  }\n}\nreturn canvas;",
    tests: [
      {
        expr: `(() => {
          const colors = [['#ff0000', '#00ff00'], ['#0000ff', '#ffffff']];
          const can = renderPixelArtGrid(2, 2, colors);
          const pxs = can.querySelectorAll('.pixel');
          const isPx0Red = pxs[0].style.backgroundColor === '#ff0000' || pxs[0].style.backgroundColor === 'rgb(255, 0, 0)';
          return [
            can.style.gridTemplateColumns,
            pxs.length,
            isPx0Red,
            pxs[0].dataset.row,
            pxs[0].dataset.col
          ];
        })()`,
        expected: ['repeat(2, 1fr)', 4, true, '0', '0']
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.6",
    name: "renderMultiplicationTableDOM",
    title: "Таблиця множення у DOM із виділенням головної діагоналі",
    level: "Базовий рівень",
    goal: "Створити <table class=\"mult-table\">. Через два цикли від 1 до max згенерувати рядки <tr> та клітинки <td> з добутком r * c. Якщо r === c — додати клас 'cell--diagonal' та стиль backgroundColor: 'rgb(254, 240, 138)'.",
    reqs: [
      "Вкладені цикли від 1 до max.",
      "Виділити клітинки головної діагоналі класом та жовтим фоном.",
      "Повернути створену <table>."
    ],
    hint: "Головна діагональ — умова if (r === c).",
    starterParams: "max = 5",
    starterBody: "// Таблиця множення в DOM\n  return null;",
    solutionBody: "const table = document.createElement('table');\ntable.className = 'mult-table';\nfor (let r = 1; r <= max; r++) {\n  const tr = document.createElement('tr');\n  for (let c = 1; c <= max; c++) {\n    const td = document.createElement('td');\n    td.textContent = String(r * c);\n    if (r === c) {\n      td.classList.add('cell--diagonal');\n      td.style.backgroundColor = 'rgb(254, 240, 138)';\n    }\n    tr.appendChild(td);\n  }\n  table.appendChild(tr);\n}\nreturn table;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: [3, 3, '1', '4', '9', 'rgb(254, 240, 138)']
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.7",
    name: "renderNestedTreeMenu",
    title: "Багаторівневе меню категорій (вкладені списки <ul>)",
    level: "Середній рівень",
    goal: "Створити <ul class=\"tree-menu\">. Зовнішній цикл створює <li class=\"tree-node\"><span class=\"node-title\">category.name</span>. Якщо у категорії є масив children, внутрішній цикл створює всередині цього li підсписок <ul class=\"tree-sub\"> з елементами <li class=\"sub-node\">.",
    reqs: [
      "Створити деревоподібну розмітку <ul> та <li>.",
      "Підсписок <ul class=\"tree-sub\"> додається тільки за наявності children.",
      "Повернути головний <ul>."
    ],
    hint: "Перевірте if (Array.isArray(cat.children) && cat.children.length > 0).",
    starterParams: "categories",
    starterBody: "// Меню категорій\n  return null;",
    solutionBody: "const ul = document.createElement('ul');\nul.className = 'tree-menu';\nif (!Array.isArray(categories)) return ul;\nfor (const cat of categories) {\n  const li = document.createElement('li');\n  li.className = 'tree-node';\n  const span = document.createElement('span');\n  span.className = 'node-title';\n  span.textContent = cat.name || '';\n  li.appendChild(span);\n  if (Array.isArray(cat.children) && cat.children.length > 0) {\n    const subUl = document.createElement('ul');\n    subUl.className = 'tree-sub';\n    for (const child of cat.children) {\n      const subLi = document.createElement('li');\n      subLi.className = 'sub-node';\n      subLi.textContent = child;\n      subUl.appendChild(subLi);\n    }\n    li.appendChild(subUl);\n  }\n  ul.appendChild(li);\n}\nreturn ul;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: [2, 4, 'HTML', 'Node.js']
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.8",
    name: "renderSeatMap",
    title: "План розсадки місць у залі із заброньованими квитками",
    level: "Базовий рівень",
    goal: "Створити <div class=\"seat-map\">. Зовнішній цикл по рядах (1..rowsCount) створює <div class=\"seat-row\" data-row=\"r\">. Внутрішній цикл по місцях (1..seatsPerRow) створює кнопки <button class=\"seat\" data-seat=\"r-s\">. Якщо місце є в reservedSeats — додати клас 'seat--reserved', disabled=true та колір rgb(239, 68, 68), інакше 'seat--available' та rgb(16, 185, 129).",
    reqs: [
      "Встановити атрибути data-row та data-seat.",
      "Встановити атрибут disabled для зайнятих місць.",
      "Динамічний колір кнопок: зелений для вільних, червоний для зайнятих."
    ],
    hint: "Створіть Set(reservedSeats) для швидкої перевірки reservedSet.has(seatId).",
    starterParams: "rowsCount, seatsPerRow, reservedSeats = []",
    starterBody: "// План розсадки місць\n  return null;",
    solutionBody: "const map = document.createElement('div');\nmap.className = 'seat-map';\nconst reservedSet = new Set(reservedSeats);\nfor (let r = 1; r <= rowsCount; r++) {\n  const rowDiv = document.createElement('div');\n  rowDiv.className = 'seat-row';\n  rowDiv.setAttribute('data-row', String(r));\n  for (let s = 1; s <= seatsPerRow; s++) {\n    const seatId = `${r}-${s}`;\n    const btn = document.createElement('button');\n    btn.className = 'seat';\n    btn.setAttribute('data-seat', seatId);\n    if (reservedSet.has(seatId)) {\n      btn.classList.add('seat--reserved');\n      btn.disabled = true;\n      btn.style.backgroundColor = 'rgb(239, 68, 68)';\n    } else {\n      btn.classList.add('seat--available');\n      btn.style.backgroundColor = 'rgb(16, 185, 129)';\n    }\n    btn.textContent = String(s);\n    rowDiv.appendChild(btn);\n  }\n  map.appendChild(rowDiv);\n}\nreturn map;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: [1, true, 'rgb(239, 68, 68)', 3, 'rgb(16, 185, 129)']
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.9",
    name: "renderColorPaletteMatrix",
    title: "Матриця відтінків кольорової палітри",
    level: "Базовий рівень",
    goal: "Створити <div class=\"palette-matrix\">. Для кожного елемента з palettes ({ groupName, shades: [c1, c2, ...] }) створити рядок <div class=\"palette-row\"><h4>groupName</h4><div class=\"shades-wrap\">. У вкладеному циклі по shades створити плашки <div class=\"color-swatch\" style=\"background-color: shade;\">shade</div>.",
    reqs: [
      "Зовнішній цикл по палітрах, внутрішній по відтінках.",
      "Встановити inline стиль backgroundColor для кожної плашки.",
      "Текст плашки — hex або rgb значення кольору."
    ],
    hint: "swatch.style.backgroundColor = shade; swatch.textContent = shade;",
    starterParams: "palettes",
    starterBody: "// Матриця кольорових палітр\n  return null;",
    solutionBody: "const matrix = document.createElement('div');\nmatrix.className = 'palette-matrix';\nif (!Array.isArray(palettes)) return matrix;\nfor (const p of palettes) {\n  const row = document.createElement('div');\n  row.className = 'palette-row';\n  const h4 = document.createElement('h4');\n  h4.textContent = p.groupName || '';\n  row.appendChild(h4);\n  const wrap = document.createElement('div');\n  wrap.className = 'shades-wrap';\n  for (const shade of p.shades || []) {\n    const swatch = document.createElement('div');\n    swatch.className = 'color-swatch';\n    swatch.style.backgroundColor = shade;\n    swatch.textContent = shade;\n    wrap.appendChild(swatch);\n  }\n  row.appendChild(wrap);\n  matrix.appendChild(row);\n}\nreturn matrix;",
    tests: [
      {
        expr: `(() => {
          const matrix = renderColorPaletteMatrix([
            { groupName: 'Emerald', shades: ['#a7f3d0', '#059669'] }
          ]);
          const swatches = matrix.querySelectorAll('.color-swatch');
          const isC0Valid = swatches[0].style.backgroundColor === '#a7f3d0' || swatches[0].style.backgroundColor === 'rgb(167, 243, 208)';
          const isC1Valid = swatches[1].style.backgroundColor === '#059669' || swatches[1].style.backgroundColor === 'rgb(5, 150, 105)';
          return [
            matrix.querySelector('h4').textContent,
            swatches.length,
            isC0Valid,
            isC1Valid
          ];
        })()`,
        expected: ['Emerald', 2, true, true]
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.10",
    name: "renderProductComparisonGrid",
    title: "Матриця порівняння характеристик товарів",
    level: "Середній рівень",
    goal: "Створити <table class=\"comparison-table\">. У thead додати th 'Функція' та назви товарів. Зовнішній цикл по features створює рядки з <th>feature</th>. Внутрішній цикл по products створює <td>: якщо product.features[f] === true — клас 'feature--yes', текст '✓' та колір rgb(16, 185, 129), якщо false — 'feature--no', текст '✕' та колір rgb(239, 68, 68).",
    reqs: [
      "Таблична розмітка з колонкою функцій та колонками кожного товару.",
      "Внутрішній цикл перевіряє наявність характеристики.",
      "Позначки '✓' та '✕' зі стилями кольорів."
    ],
    hint: "Перевіряйте const has = Boolean(product.features && product.features[f]).",
    starterParams: "features, products",
    starterBody: "// Матриця порівняння товарів\n  return null;",
    solutionBody: "const table = document.createElement('table');\ntable.className = 'comparison-table';\nconst thead = document.createElement('thead');\nconst trHead = document.createElement('tr');\nconst thFeature = document.createElement('th');\nthFeature.textContent = 'Функція';\ntrHead.appendChild(thFeature);\nfor (const p of products || []) {\n  const th = document.createElement('th');\n  th.textContent = p.name || '';\n  trHead.appendChild(th);\n}\nthead.appendChild(trHead);\ntable.appendChild(thead);\n\nconst tbody = document.createElement('tbody');\nfor (const f of features || []) {\n  const tr = document.createElement('tr');\n  const thRow = document.createElement('th');\n  thRow.textContent = f;\n  tr.appendChild(thRow);\n  for (const p of products || []) {\n    const td = document.createElement('td');\n    const hasFeature = p.features && Boolean(p.features[f]);\n    if (hasFeature) {\n      td.className = 'feature--yes';\n      td.textContent = '✓';\n      td.style.color = 'rgb(16, 185, 129)';\n    } else {\n      td.className = 'feature--no';\n      td.textContent = '✕';\n      td.style.color = 'rgb(239, 68, 68)';\n    }\n    tr.appendChild(td);\n  }\n  tbody.appendChild(tr);\n}\ntable.appendChild(tbody);\nreturn table;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: [3, 3, 1, 'rgb(16, 185, 129)', 'rgb(239, 68, 68)']
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.11",
    name: "renderWordSearchGrid",
    title: "Буквена сітка для пошуку слів (Word Search)",
    level: "Базовий рівень",
    goal: "Створити <div class=\"word-grid\">. Через два вкладених цикли для кожного рядка матриці letterMatrix створити <div class=\"grid-row\">, а для кожної літери — <span class=\"letter-cell\" data-row=\"r\" data-col=\"c\">letter</span>.",
    reqs: [
      "Встановити data-row та data-col для кожної літери.",
      "Вкладені цикли по рядках та колонках матриці.",
      "Повернути контейнер сітки."
    ],
    hint: "span.setAttribute('data-row', String(r)); span.setAttribute('data-col', String(c));",
    starterParams: "letterMatrix",
    starterBody: "// Буквена сітка слів\n  return null;",
    solutionBody: "const grid = document.createElement('div');\ngrid.className = 'word-grid';\nif (!Array.isArray(letterMatrix)) return grid;\nfor (let r = 0; r < letterMatrix.length; r++) {\n  const rowDiv = document.createElement('div');\n  rowDiv.className = 'grid-row';\n  const rowLetters = letterMatrix[r] || [];\n  for (let c = 0; c < rowLetters.length; c++) {\n    const span = document.createElement('span');\n    span.className = 'letter-cell';\n    span.setAttribute('data-row', String(r));\n    span.setAttribute('data-col', String(c));\n    span.textContent = String(rowLetters[c]);\n    rowDiv.appendChild(span);\n  }\n  grid.appendChild(rowDiv);\n}\nreturn grid;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: [2, 4, 'A', 'D', '1', '1']
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.12",
    name: "renderBarChartGrouped",
    title: "Групована гістограма стовпчиків із масштабуванням висоти",
    level: "Середній рівень",
    goal: "Створити <div class=\"grouped-chart\" style=\"display: flex; gap: 16px; align-items: flex-end;\">. Для кожного періоду створити <div class=\"chart-group\">. Внутрішній цикл по series ([{ name, color, data }]) створює стовпчик <div class=\"chart-bar\" style=\"height: val * 2px; background-color: color;\" title=\"name: val\"></div>.",
    reqs: [
      "Встановити стилі контейнера display: flex, gap: 16px, alignItems: flex-end.",
      "Встановити висоту height: `${val * 2}px` та колір фону.",
      "Встановити атрибут title для підказки."
    ],
    hint: "bar.style.height = `${val * 2}px`; bar.style.backgroundColor = s.color;",
    starterParams: "periods, series",
    starterBody: "// Групована гістограма\n  return null;",
    solutionBody: "const chart = document.createElement('div');\nchart.className = 'grouped-chart';\nchart.style.display = 'flex';\nchart.style.gap = '16px';\nchart.style.alignItems = 'flex-end';\nif (!Array.isArray(periods) || !Array.isArray(series)) return chart;\nfor (let p = 0; p < periods.length; p++) {\n  const group = document.createElement('div');\n  group.className = 'chart-group';\n  for (const s of series) {\n    const val = (s.data && s.data[p]) || 0;\n    const bar = document.createElement('div');\n    bar.className = 'chart-bar';\n    bar.style.height = `${val * 2}px`;\n    bar.style.backgroundColor = s.color || 'rgb(99, 102, 241)';\n    bar.setAttribute('title', `${s.name}: ${val}`);\n    group.appendChild(bar);\n  }\n  chart.appendChild(group);\n}\nreturn chart;",
    tests: [
      {
        expr: `(() => {
          const periods = ['Q1', 'Q2'];
          const series = [
            { name: 'План', color: '#3b82f6', data: [50, 80] },
            { name: 'Факт', color: '#10b981', data: [45, 90] }
          ];
          const chart = renderBarChartGrouped(periods, series);
          const bars = chart.querySelectorAll('.chart-bar');
          const isBarColorValid = bars[0].style.backgroundColor === '#3b82f6' || bars[0].style.backgroundColor === 'rgb(59, 130, 246)';
          return [
            chart.querySelectorAll('.chart-group').length,
            bars.length,
            bars[0].style.height,
            isBarColorValid,
            bars[3].style.height
          ];
        })()`,
        expected: [2, 4, '100px', true, '180px']
      }
    ]
  }
];

export const NEW_TASKS_MODULE_10 = [
  {
    moduleIdx: 10,
    id: "10.1",
    name: "applyZebraStriping",
    title: "Зебра-стилізація рядків таблиці через цикл",
    level: "Базовий рівень",
    goal: "Написати функцію applyZebraStriping(tableElement, evenBg = '#ffffff', oddBg = '#f9fafb'). Знайти всі рядки таблиці в tbody. У циклі: парним рядкам (i % 2 === 0) встановити style.backgroundColor = evenBg і видалити клас 'table-row--striped', непарним — style.backgroundColor = oddBg і додати клас 'table-row--striped'. Повернути кількість оброблених рядків.",
    reqs: [
      "Знайти рядки через tableElement.querySelectorAll('tbody tr').",
      "Чергувати стилі фону та наявність класу table-row--striped.",
      "Повернути загальну кількість рядків."
    ],
    hint: "Знайдіть рядки через <a href=\"https://developer.mozilla.org/uk/docs/Web/API/Element/querySelectorAll\" target=\"_blank\">tableElement.querySelectorAll</a>. Застосуйте цикл for (let i = 0; i < rows.length; i++) з перевіркою парності i % 2 === 0.",
    starterParams: "tableElement, evenBg = '#ffffff', oddBg = '#f9fafb'",
    starterBody: "// Зебра-стилізація таблиць\n  return 0;",
    solutionBody: "if (!tableElement) return 0;\nconst rows = tableElement.querySelectorAll('tbody tr');\nfor (let i = 0; i < rows.length; i++) {\n  const row = rows[i];\n  if (i % 2 === 0) {\n    row.style.backgroundColor = evenBg;\n    row.classList.remove('table-row--striped');\n  } else {\n    row.style.backgroundColor = oddBg;\n    row.classList.add('table-row--striped');\n  }\n}\nreturn rows.length;",
    tests: [
      {
        expr: `(() => {
          const tbl = document.createElement('table');
          const tbody = document.createElement('tbody');
          for (let i = 0; i < 3; i++) tbody.appendChild(document.createElement('tr'));
          tbl.appendChild(tbody);
          const count = applyZebraStriping(tbl, '#ffffff', '#f0f0f0');
          const rows = tbl.querySelectorAll('tbody tr');
          const isRow0Valid = rows[0].style.backgroundColor === '#ffffff' || rows[0].style.backgroundColor === 'rgb(255, 255, 255)';
          const isRow1Valid = rows[1].style.backgroundColor === '#f0f0f0' || rows[1].style.backgroundColor === 'rgb(240, 240, 240)';
          return [
            count,
            isRow0Valid,
            isRow1Valid,
            rows[1].classList.contains('table-row--striped')
          ];
        })()`,
        expected: [3, true, true, true]
      }
    ]
  },
  {
    moduleIdx: 10,
    id: "10.2",
    name: "clearContainerFast",
    title: "Швидке очищення контейнера через цикл while",
    level: "Базовий рівень",
    goal: "Написати функцію clearContainerFast(containerElement), яка видаляє всі дочірні елементи контейнера за допомогою швидкого циклу while (containerElement.firstChild) { containerElement.removeChild(containerElement.firstChild); }. Повернути кількість видалених елементів (0 для null/undefined або порожнього елемента).",
    reqs: [
      "Використати цикл while з умовою containerElement.firstChild.",
      "Видаляти через containerElement.removeChild(containerElement.firstChild).",
      "Підрахувати та повернути кількість видалених дітей."
    ],
    hint: "Використовуйте цикл while (container.firstChild) та метод <a href=\"https://developer.mozilla.org/uk/docs/Web/API/Node/removeChild\" target=\"_blank\">container.removeChild(container.firstChild)</a> для безпечного та швидкого видалення всіх дітей.",
    starterParams: "containerElement",
    starterBody: "// Повне швидке очищення через while\n  return 0;",
    solutionBody: "if (!containerElement) return 0;\nlet count = 0;\nwhile (containerElement.firstChild) {\n  containerElement.removeChild(containerElement.firstChild);\n  count++;\n}\nreturn count;",
    tests: [
      {
        expr: `(() => {
          const div = document.createElement('div');
          div.appendChild(document.createElement('p'));
          div.appendChild(document.createElement('span'));
          const deleted = clearContainerFast(div);
          return [deleted, div.childNodes.length];
        })()`,
        expected: [2, 0]
      },
      {
        expr: `clearContainerFast(null)`,
        expected: 0
      }
    ]
  },
  {
    moduleIdx: 10,
    id: "10.3",
    name: "buildNestedListTree",
    title: "Побудова багаторівневого дерева списків із об'єктної структури",
    level: "Середній рівень",
    goal: "Побудувати дерево списків <ul class=\"tree-root\"> із вкладеної структури treeData ({ label, children: [...] }). Для кожного вузла створити <li class=\"tree-item\">label</li>, а якщо є діти — рекурсивно або в циклі створити підсписок <ul class=\"tree-sublist\">.",
    reqs: [
      "Підтримка довільної глибини вкладеності.",
      "Класи: tree-root для головного списку, tree-sublist для дочірніх, tree-item для пунктів.",
      "Повернути кореневий <ul>."
    ],
    hint: "Створіть допоміжну функцію renderNode, яка через <a href=\"https://developer.mozilla.org/uk/docs/Web/API/Document/createElement\" target=\"_blank\">createElement('li')</a> та <a href=\"https://developer.mozilla.org/uk/docs/Web/API/Node/appendChild\" target=\"_blank\">appendChild</a> додає елементи та вкладені &lt;ul&gt;.",
    starterParams: "treeData",
    starterBody: "// Побудова дерева списків\n  return null;",
    solutionBody: "function renderNode(node) {\n  const li = document.createElement('li');\n  li.className = 'tree-item';\n  li.textContent = node.label || '';\n  if (Array.isArray(node.children) && node.children.length > 0) {\n    const subUl = document.createElement('ul');\n    subUl.className = 'tree-sublist';\n    for (let i = 0; i < node.children.length; i++) {\n      subUl.appendChild(renderNode(node.children[i]));\n    }\n    li.appendChild(subUl);\n  }\n  return li;\n}\nconst ul = document.createElement('ul');\nul.className = 'tree-root';\nconst items = Array.isArray(treeData) ? treeData : (treeData ? [treeData] : []);\nfor (let i = 0; i < items.length; i++) {\n  ul.appendChild(renderNode(items[i]));\n}\nreturn ul;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: ['UL', 3, 'Корінь']
      }
    ]
  },
  {
    moduleIdx: 10,
    id: "10.4",
    name: "renderStepWizard",
    title: "Покроковий майстер (Step Wizard) з індикатором активного кроку",
    level: "Базовий рівень",
    goal: "Створити <div class=\"wizard-container\">. У циклі по steps створити кроки <div class=\"wizard-step\" data-step=\"i+1\">: якщо i < currentStepIndex — клас 'wizard-step--done' та стиль borderColor: 'rgb(16, 185, 129)'; якщо i === currentStepIndex — 'wizard-step--active' та 'rgb(99, 102, 241)'; якщо i > currentStepIndex — 'wizard-step--pending' та 'rgb(203, 213, 225)'.",
    reqs: [
      "Встановити data-step з номером від 1.",
      "Встановити відповідний клас стану (done, active, pending).",
      "Встановити відповідний колір рамки borderColor."
    ],
    hint: "Порівнюйте індекс циклу i з currentStepIndex.",
    starterParams: "steps, currentStepIndex",
    starterBody: "// Покроковий майстер\n  return null;",
    solutionBody: "const wizard = document.createElement('div');\nwizard.className = 'wizard-container';\nif (!Array.isArray(steps)) return wizard;\nfor (let i = 0; i < steps.length; i++) {\n  const step = document.createElement('div');\n  step.className = 'wizard-step';\n  step.setAttribute('data-step', String(i + 1));\n  step.textContent = steps[i];\n  if (i < currentStepIndex) {\n    step.classList.add('wizard-step--done');\n    step.style.borderColor = 'rgb(16, 185, 129)';\n  } else if (i === currentStepIndex) {\n    step.classList.add('wizard-step--active');\n    step.style.borderColor = 'rgb(99, 102, 241)';\n  } else {\n    step.classList.add('wizard-step--pending');\n    step.style.borderColor = 'rgb(203, 213, 225)';\n  }\n  wizard.appendChild(step);\n}\nreturn wizard;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: [3, true, 'rgb(16, 185, 129)', true, 'rgb(99, 102, 241)', true, 'rgb(203, 213, 225)']
      }
    ]
  },
  {
    moduleIdx: 10,
    id: "10.5",
    name: "highlightKeywordsInElements",
    title: "Масове підсвічування ключових слів тегом <mark>",
    level: "Середній рівень",
    goal: "Пройтися по елементах elementsList у циклі for і для кожного елемента перебрати список keywords. За допомогою розбиття тексту на частини (split) та об'єднання (join) замінити всі збіги на <mark class=\"kw-highlight\">слово</mark>. Повернути сумарну кількість замінених слів.",
    reqs: [
      "Зовнішній цикл по elementsList та внутрішній цикл по keywords.",
      "Використати методи рядків split та join замість складних регулярних виразів.",
      "Обгорнути знайдені слова в <mark class=\"kw-highlight\">слово</mark>.",
      "Повернути загальну кількість знайдених та підсвічених слів."
    ],
    hint: "Для кожного елемента пройдіться по keywords. Застосуйте <a href=\"https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/split\" target=\"_blank\">string.split(word)</a>: кількість входжень — (parts.length - 1). Потім з\'єднайте частини через <a href=\"https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/join\" target=\"_blank\">parts.join('<mark class=\"kw-highlight\">' + word + '</mark>')</a>.",
    starterParams: "elementsList, keywords",
    starterBody: "// Підсвічування ключових слів через цикли та split/join\n  return 0;",
    solutionBody: "if (!elementsList || !keywords || keywords.length === 0) return 0;\nlet totalMatches = 0;\nfor (let i = 0; i < elementsList.length; i++) {\n  const el = elementsList[i];\n  let html = el.textContent || '';\n  for (let k = 0; k < keywords.length; k++) {\n    const word = keywords[k];\n    if (!word) continue;\n    const parts = html.split(word);\n    if (parts.length > 1) {\n      totalMatches += (parts.length - 1);\n      html = parts.join(`<mark class=\"kw-highlight\">${word}</mark>`);\n    }\n  }\n  el.innerHTML = html;\n}\nreturn totalMatches;",
    tests: [
      {
        expr: `(() => {
          const p1 = document.createElement('p'); p1.textContent = 'JavaScript цикли while та for';
          const p2 = document.createElement('p'); p2.textContent = 'Тут немає збігів';
          const count = highlightKeywordsInElements([p1, p2], ['while', 'for']);
          return [count, p1.innerHTML.includes('<mark class="kw-highlight">while</mark>')];
        })()`,
        expected: [2, true]
      }
    ]
  },
  {
    moduleIdx: 10,
    id: "10.6",
    name: "toggleElementsVisibility",
    title: "Фільтрація видимості елементів за предикатом",
    level: "Базовий рівень",
    goal: "У циклі for для кожного елемента з elementsList перевірити predicateFn(el): якщо true — встановити style.display = '' та зняти атрибут 'hidden'; якщо false — встановити style.display = 'none' та додати атрибут hidden='true'. Повернути кількість видимих елементів.",
    reqs: [
      "Обхід елементів у циклі for.",
      "Керування display та HTML-атрибутом hidden.",
      "Повернути кількість елементів, що залишилися видимими."
    ],
    hint: "Використовуйте <a href=\"https://developer.mozilla.org/uk/docs/Web/API/Element/removeAttribute\" target=\"_blank\">removeAttribute('hidden')</a> для показу та <a href=\"https://developer.mozilla.org/uk/docs/Web/API/Element/setAttribute\" target=\"_blank\">setAttribute('hidden', 'true')</a> для приховування.",
    starterParams: "elementsList, predicateFn",
    starterBody: "// Фільтрація видимості елементів\n  return 0;",
    solutionBody: "if (!elementsList || typeof predicateFn !== 'function') return 0;\nlet visibleCount = 0;\nfor (let i = 0; i < elementsList.length; i++) {\n  const el = elementsList[i];\n  const show = Boolean(predicateFn(el));\n  if (show) {\n    el.style.display = '';\n    el.removeAttribute('hidden');\n    visibleCount++;\n  } else {\n    el.style.display = 'none';\n    el.setAttribute('hidden', 'true');\n  }\n}\nreturn visibleCount;",
    tests: [
      {
        expr: `(() => {
          const c1 = document.createElement('div'); c1.dataset.status = 'active';
          const c2 = document.createElement('div'); c2.dataset.status = 'inactive';
          const visible = toggleElementsVisibility([c1, c2], el => el.dataset.status === 'active');
          return [visible, c1.style.display, c2.style.display, c2.hasAttribute('hidden')];
        })()`,
        expected: [1, '', 'none', true]
      }
    ]
  },
  {
    moduleIdx: 10,
    id: "10.7",
    name: "reorderListByAttribute",
    title: "Сортування вузлів у DOM за значенням data-атрибута",
    level: "Середній рівень",
    goal: "Відсортувати дочірні елементи parentListElement за зростанням значення атрибута attrName (числового або рядкового) і в циклі повторно вставити їх у parentListElement через appendChild(). Повернути parentListElement.",
    reqs: [
      "Зібрати дочірні вузли в масив через цикл for або Array.from.",
      "Відсортувати елементи за значенням getAttribute(attrName).",
      "У циклі повторно вставити відсортовані елементи через appendChild."
    ],
    hint: "Метод <a href=\"https://developer.mozilla.org/uk/docs/Web/API/Node/appendChild\" target=\"_blank\">appendChild</a> переміщує існуючий DOM-вузол у кінець. Для сортування можна використати метод <a href=\"https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/sort\" target=\"_blank\">Array.prototype.sort</a> або подвійний цикл (bubble sort) з Модуля 6.",
    starterParams: "parentListElement, attrName",
    starterBody: "// Сортування елементів у DOM\n  return null;",
    solutionBody: "if (!parentListElement) return null;\nconst items = [];\nfor (let i = 0; i < parentListElement.children.length; i++) {\n  items.push(parentListElement.children[i]);\n}\nitems.sort((a, b) => {\n  const valA = a.getAttribute(attrName) || '';\n  const valB = b.getAttribute(attrName) || '';\n  const numA = Number(valA);\n  const numB = Number(valB);\n  if (!isNaN(numA) && !isNaN(numB)) return numA - numB;\n  return valA.localeCompare(valB);\n});\nfor (let i = 0; i < items.length; i++) {\n  parentListElement.appendChild(items[i]);\n}\nreturn parentListElement;",
    tests: [
      {
        expr: `(() => {
          const ul = document.createElement('ul');
          const li1 = document.createElement('li'); li1.setAttribute('data-order', '3');
          const li2 = document.createElement('li'); li2.setAttribute('data-order', '1');
          const li3 = document.createElement('li'); li3.setAttribute('data-order', '2');
          ul.appendChild(li1); ul.appendChild(li2); ul.appendChild(li3);
          reorderListByAttribute(ul, 'data-order');
          return Array.from(ul.children).map(c => c.getAttribute('data-order'));
        })()`,
        expected: ['1', '2', '3']
      }
    ]
  },
  {
    moduleIdx: 10,
    id: "10.8",
    name: "paginateChildren",
    title: "Клієнтська пагінація дочірніх елементів контейнера",
    level: "Базовий рівень",
    goal: "Маючи containerElement, у циклі for по його дітях (0..children.length-1) показати лише елементи поточної сторінки activePage розміром pageSize: якщо i в межах [(activePage - 1) * pageSize, activePage * pageSize) — style.display = '', інакше style.display = 'none'. Повернути кількість видимих елементів.",
    reqs: [
      "Обчислити межі сторінки startIdx та endIdx.",
      "Встановити style.display: '' для активної сторінки та 'none' для інших.",
      "Повернути кількість видимих елементів."
    ],
    hint: "startIdx = (activePage - 1) * pageSize; endIdx = startIdx + pageSize;",
    starterParams: "containerElement, pageSize, activePage",
    starterBody: "// Клієнтська пагінація\n  return 0;",
    solutionBody: "if (!containerElement || pageSize <= 0 || activePage <= 0) return 0;\nconst children = containerElement.children;\nlet visibleCount = 0;\nconst startIdx = (activePage - 1) * pageSize;\nconst endIdx = startIdx + pageSize;\nfor (let i = 0; i < children.length; i++) {\n  const child = children[i];\n  if (i >= startIdx && i < endIdx) {\n    child.style.display = '';\n    visibleCount++;\n  } else {\n    child.style.display = 'none';\n  }\n}\nreturn visibleCount;",
    tests: [
      {
        expr: `(() => {
          const div = document.createElement('div');
          for (let i = 0; i < 5; i++) div.appendChild(document.createElement('span'));
          const page1Count = paginateChildren(div, 2, 1);
          const visiblePage1 = Array.from(div.children).filter(c => c.style.display !== 'none').length;
          const page3Count = paginateChildren(div, 2, 3);
          return [page1Count, visiblePage1, page3Count];
        })()`,
        expected: [2, 2, 1]
      }
    ]
  },
  {
    moduleIdx: 10,
    id: "10.9",
    name: "batchUpdateStyles",
    title: "Масове оновлення CSS-стилів елементів через цикл",
    level: "Базовий рівень",
    goal: "У циклі по elementsList застосувати до кожного елемента всі властивості з stylesList (двовимірний масив пар [['property', 'value'], ...], наприклад [['color', '#ffffff'], ['opacity', '0.8']]) за допомогою внутрішнього циклу по парах властивість-значення. Повернути elementsList.",
    reqs: [
      "Зовнішній цикл по елементах elementsList.",
      "Внутрішній цикл по парах [prop, val] масиву stylesList.",
      "Встановити el.style[prop] = val.",
      "Повернути початковий масив elementsList."
    ],
    hint: "Використовуйте вкладений цикл по масиву пар stylesList: for (let j = 0; j < stylesList.length; j++) { const [prop, val] = stylesList[j]; el.style[prop] = val; }.",
    starterParams: "elementsList, stylesList",
    starterBody: "// Масове оновлення стилів через масив пар\n  return null;",
    solutionBody: "if (!elementsList || !stylesList) return elementsList;\nif (Array.isArray(stylesList)) {\n  for (let i = 0; i < elementsList.length; i++) {\n    const el = elementsList[i];\n    for (let j = 0; j < stylesList.length; j++) {\n      const [prop, val] = stylesList[j];\n      el.style[prop] = val;\n    }\n  }\n} else if (typeof stylesList === 'object') {\n  for (const el of elementsList) {\n    for (const k in stylesList) {\n      el.style[k] = stylesList[k];\n    }\n  }\n}\nreturn elementsList;",
    tests: [
      {
        expr: `(() => {
          const d1 = document.createElement('div');
          const d2 = document.createElement('div');
          batchUpdateStyles([d1, d2], [['color', '#ffffff'], ['opacity', '0.8']]);
          const isColorSet = d1.style.color === '#ffffff' || d1.style.color === 'rgb(255, 255, 255)';
          return [isColorSet, d2.style.opacity];
        })()`,
        expected: [true, '0.8']
      }
    ]
  },
  {
    moduleIdx: 10,
    id: "10.10",
    name: "extractTableData",
    title: "Зчитування даних із HTML-таблиці назад у масив об'єктів",
    level: "Середній рівень",
    goal: "Зчитати дані з <table>: перший цикл по thead th зчитує ключі колонок (наприклад, ['name', 'score']). Другий зовнішній цикл по tbody tr та внутрішній по td формує масив об'єктів [{ name: '...', score: '...' }]. Повернути масив об'єктів.",
    reqs: [
      "Зчитати ключі з th заголовків через цикл for.",
      "Пройтися по рядках і клітинках tbody за допомогою вкладених циклів for.",
      "Повернути масив зчитаних об'єктів."
    ],
    hint: "Використовуйте <a href=\"https://developer.mozilla.org/uk/docs/Web/API/Element/querySelectorAll\" target=\"_blank\">querySelectorAll</a> для пошуку елементів та <a href=\"https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/Trim\" target=\"_blank\">textContent.trim()</a> для очищення зайвих пробілів.",
    starterParams: "tableElement",
    starterBody: "// Парсинг таблиці в масив об'єктів\n  return [];",
    solutionBody: "if (!tableElement) return [];\nconst thList = tableElement.querySelectorAll('thead th');\nconst headers = [];\nfor (let i = 0; i < thList.length; i++) {\n  headers.push(thList[i].textContent.trim());\n}\nconst rows = tableElement.querySelectorAll('tbody tr');\nconst data = [];\nfor (let r = 0; r < rows.length; r++) {\n  const cells = rows[r].querySelectorAll('td');\n  const rowObj = {};\n  for (let c = 0; c < cells.length; c++) {\n    const key = headers[c] || `col_${c}`;\n    rowObj[key] = cells[c].textContent.trim();\n  }\n  data.push(rowObj);\n}\nreturn data;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: [{ name: 'Anna', score: '100' }]
      }
    ]
  },
  {
    moduleIdx: 10,
    id: "10.11",
    name: "wrapConsecutiveElements",
    title: "Групування сусідніх елементів одного типу в контейнери",
    level: "Складний рівень",
    goal: "Знайти в parentElement сусідні елементи з тегом targetTagName і згрупувати їх у контейнери <div class=\"wrapperClass\"> через цикл while. Повернути parentElement.",
    reqs: [
      "Обхід дочірніх вузлів через цикл while.",
      "Сусідні елементи вкладаються в спільний div wrapperClass.",
      "Повернути parentElement."
    ],
    hint: "Створіть div-обгортку при першому знайденому елементі і додавайте наступні, доки збігається тег.",
    starterParams: "parentElement, targetTagName, wrapperClass = 'group-wrap'",
    starterBody: "// Групування елементів\n  return null;",
    solutionBody: "if (!parentElement || !targetTagName) return null;\nconst tag = targetTagName.toUpperCase();\nlet currentWrapper = null;\nlet node = parentElement.firstChild;\nwhile (node) {\n  const next = node.nextSibling;\n  if (node.nodeType === 1 && node.tagName === tag) {\n    if (!currentWrapper) {\n      currentWrapper = document.createElement('div');\n      currentWrapper.className = wrapperClass;\n      parentElement.insertBefore ? parentElement.insertBefore(currentWrapper, node) : parentElement.appendChild(currentWrapper);\n    }\n    currentWrapper.appendChild(node);\n  } else {\n    currentWrapper = null;\n  }\n  node = next;\n}\nreturn parentElement;",
    tests: [
      {
        expr: `(() => {
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
        })()`,
        expected: [2, 'group-wrap', 2]
      }
    ]
  },
  {
    moduleIdx: 10,
    id: "10.12",
    name: "animateElementsStagger",
    title: "Каскадна затримка CSS-анімації (Staggered Animation)",
    level: "Базовий рівень",
    goal: "Пройтися по elementsList у циклі for (let i = 0; i < elementsList.length; i++). Встановити для кожного елемента style.animationDelay = (i * stepDelayMs) + 'ms' та додати клас 'animate-stagger'. Повернути максимальну затримку (затримку останнього елемента або 0 якщо список порожній).",
    reqs: [
      "Обчислити delay = i * stepDelayMs.",
      "Встановити style.animationDelay та клас animate-stagger.",
      "Повернути максимальну затримку."
    ],
    hint: "el.style.animationDelay = `${i * stepDelayMs}ms`; el.classList.add('animate-stagger');",
    starterParams: "elementsList, stepDelayMs = 100",
    starterBody: "// Каскадні анімації\n  return 0;",
    solutionBody: "if (!elementsList || elementsList.length === 0) return 0;\nlet maxDelay = 0;\nfor (let i = 0; i < elementsList.length; i++) {\n  const el = elementsList[i];\n  const delay = i * stepDelayMs;\n  el.style.animationDelay = `${delay}ms`;\n  el.classList.add('animate-stagger');\n  maxDelay = delay;\n}\nreturn maxDelay;",
    tests: [
      {
        expr: `(() => {
          const el1 = document.createElement('div');
          const el2 = document.createElement('div');
          const el3 = document.createElement('div');
          const max = animateElementsStagger([el1, el2, el3], 150);
          return [max, el1.style.animationDelay, el2.style.animationDelay, el3.style.animationDelay, el3.classList.contains('animate-stagger')];
        })()`,
        expected: [300, '0ms', '150ms', '300ms', true]
      }
    ]
  }
];

export async function runBuild() {
  console.log("=== Building DOM Modules for js-loops-workout ===");
  const allNewTasks = [
    ...NEW_TASKS_MODULE_8,
    ...NEW_TASKS_MODULE_9,
    ...NEW_TASKS_MODULE_10
  ];

  console.log(`Prepared ${allNewTasks.length} new tasks across Modules 8, 9, 10.`);

  // 1. Read existing catalog.js
  const catalogPath = path.resolve('catalog.js');
  const catalogContent = fs.readFileSync(catalogPath, 'utf8');

  // Import existing modules and tasks
  const catalogModule = await import(`file://${catalogPath}?t=${Date.now()}`);
  const existingModules = catalogModule.MODULES || [];
  const existingTasks = catalogModule.ALL_TASKS || [];
  const existingEncrypted = catalogModule.ENCRYPTED_SOLUTIONS || {};

  // Check if already added
  const modulesFiltered = existingModules.filter(m => m.idx < 8);
  const updatedModules = [...modulesFiltered, ...NEW_MODULES];

  const tasksFiltered = existingTasks.filter(t => t.moduleIdx < 8);
  const updatedEncrypted = { ...existingEncrypted };

  const nodeKey = deriveKeyNode(PASSWORD);
  const webCryptoKey = await getWebCryptoKey(PASSWORD);

  const sanitizedNewTasks = [];

  for (const t of allNewTasks) {
    const rawSolution = t.solutionBody || '';
    if (rawSolution) {
      const encrypted = encryptTextNode(rawSolution, nodeKey);
      updatedEncrypted[t.id] = encrypted;

      // Verify integrity
      const decrypted = await decryptWithKey(encrypted, webCryptoKey);
      if (decrypted !== rawSolution) {
        throw new Error(`Integrity verification failed for task ${t.id}`);
      }
    }
    const { solutionBody, ...cleaned } = t;
    sanitizedNewTasks.push(cleaned);
  }

  const updatedTasks = [...tasksFiltered, ...sanitizedNewTasks];

  // Write catalog.js
  const catalogCode = `// Каталог завдань та метаданих курсу "Цикли та Робота з відлагоджувачем"
// УВАГА: Еталонні рішення та менторські розбори зашифровані AES-256-GCM (Zero-Leakage Architecture).
export const MODULES = ${JSON.stringify(updatedModules, null, 2)};

export const ALL_TASKS = ${JSON.stringify(updatedTasks, null, 2)};

export const ENCRYPTED_SOLUTIONS = ${JSON.stringify(updatedEncrypted, null, 2)};
`;

  fs.writeFileSync(catalogPath, catalogCode, 'utf8');
  console.log(`✅ catalog.js successfully updated with ${updatedModules.length} modules and ${updatedTasks.length} tasks!`);

  // Write frontend-camp tasks-all.json if exists
  const campTasksPath = '/Users/grabovsky/projects/frontend-camp/tasks-all.json';
  if (fs.existsSync(campTasksPath)) {
    try {
      const rawCamp = JSON.parse(fs.readFileSync(campTasksPath, 'utf8'));
      const rawCampFiltered = rawCamp.filter(t => t.moduleIdx < 8);
      const updatedCampTasks = [...rawCampFiltered, ...allNewTasks];
      fs.writeFileSync(campTasksPath, JSON.stringify(updatedCampTasks, null, 2), 'utf8');
      console.log(`✅ Updated ${campTasksPath} with ${updatedCampTasks.length} tasks.`);
    } catch (e) {
      console.warn("Could not write to campTasksPath:", e.message);
    }
  }

  // 2. Generate test files
  console.log("Generating test files...");
  generateTestFile('test/08-dom-lists-cards.test.js', 8, 'Модуль 8: Генерація списків, карток та UI-елементів через цикли', NEW_TASKS_MODULE_8, 'src/08-dom-lists-cards.js');
  generateTestFile('test/09-dom-grids-tables.test.js', 9, 'Модуль 9: Генерація складних структур та сіток через вкладені цикли', NEW_TASKS_MODULE_9, 'src/09-dom-grids-tables.js');
  generateTestFile('test/10-dom-manipulation.test.js', 10, 'Модуль 10: Маніпуляція DOM, стилізація та очищення через цикли', NEW_TASKS_MODULE_10, 'src/10-dom-manipulation.js');

  // 3. Update test/all-solutions.test.js
  updateAllSolutionsTest(allNewTasks);
}

function generateTestFile(testFilePath, modIdx, modTitle, tasks, srcFile) {
  const imports = tasks.map(t => t.name).join(', ');
  let code = `import './setup-dom.js';\nimport { describe, it, expect } from 'vitest';\nimport { ${imports} } from '../${srcFile}';\n\ndescribe('${modTitle}', () => {\n`;

  for (const t of tasks) {
    code += `  describe('${t.id}: ${t.name}', () => {\n`;
    t.tests.forEach((test, idx) => {
      code += `    it('test ${idx + 1}', () => {\n`;
      code += `      const res = ${test.expr};\n`;
      code += `      expect(res).toEqual(${JSON.stringify(test.expected)});\n`;
      code += `    });\n`;
    });
    code += `  });\n\n`;
  }
  code += `});\n`;
  fs.writeFileSync(testFilePath, code, 'utf8');
  console.log(`Generated ${testFilePath}`);
}

function updateAllSolutionsTest(newTasks) {
  const allSolPath = path.resolve('test/all-solutions.test.js');
  let currentContent = fs.readFileSync(allSolPath, 'utf8');

  // Ensure setup-dom is imported at top
  if (!currentContent.includes("import './setup-dom.js'")) {
    currentContent = "import './setup-dom.js';\n" + currentContent;
  }

  // Check if Module 8 already in all-solutions.test.js
  if (!currentContent.includes("SOLUTIONS: Модуль 8:")) {
    let newBlocks = '\n';
    
    // Group new tasks by module
    const mods = [
      { idx: 8, title: "Модуль 8: Генерація списків, карток та UI-елементів через цикли", tasks: NEW_TASKS_MODULE_8 },
      { idx: 9, title: "Модуль 9: Генерація складних структур та сіток через вкладені цикли", tasks: NEW_TASKS_MODULE_9 },
      { idx: 10, title: "Модуль 10: Маніпуляція DOM, стилізація та очищення через цикли", tasks: NEW_TASKS_MODULE_10 }
    ];

    for (const m of mods) {
      newBlocks += `  describe('SOLUTIONS: ${m.title}', () => {\n`;
      for (const t of m.tasks) {
        newBlocks += `    describe('${t.id} ${t.name}', () => {\n`;
        newBlocks += `      function ${t.name}(${t.starterParams}) {\n        ${t.solutionBody}\n      }\n`;
        t.tests.forEach((test, idx) => {
          newBlocks += `      it('test ${idx + 1}', () => {\n`;
          newBlocks += `        expect(${test.expr}).toEqual(${JSON.stringify(test.expected)});\n`;
          newBlocks += `      });\n`;
        });
        newBlocks += `    });\n`;
      }
      newBlocks += `  });\n\n`;
    }

    // Insert before the last closing of the main describe or append
    // In all-solutions.test.js, find the end of file
    const lastBraceIdx = currentContent.lastIndexOf('});');
    if (lastBraceIdx !== -1) {
      currentContent = currentContent.slice(0, lastBraceIdx) + newBlocks + '});\n';
    } else {
      currentContent += newBlocks;
    }

    fs.writeFileSync(allSolPath, currentContent, 'utf8');
    console.log(`✅ test/all-solutions.test.js updated with Modules 8, 9, 10!`);
  }
}

runBuild().catch(err => {
  console.error("Build failed:", err);
  process.exit(1);
});

