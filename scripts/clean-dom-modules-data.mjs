import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const PASSWORD = 'camp-admin-2026';
const SALT_STR = 'camp_salt_2026_secure';

function deriveKeyNode(password) {
  return crypto.pbkdf2Sync(password, SALT_STR, 100000, 32, 'sha256');
}

function encryptTextNode(plainText, key) {
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
    title: "Модуль 8: Генерація розмітки списків, карток та UI-елементів через цикли",
    shortTitle: "8. Генерація списків та карток",
    filename: "08-dom-lists-cards.js",
    testFilename: "08-dom-lists-cards.test.js",
    desc: "Створення HTML-рядків карток товарів, рейтингів, хлібних крихт, статусних бейджів, хмар тегів та списків через цикли."
  },
  {
    idx: 9,
    id: "09-dom-grids-tables",
    title: "Модуль 9: Генерація складних структур та сіток через вкладені цикли",
    shortTitle: "9. Генерація таблиць та сіток",
    filename: "09-dom-grids-tables.js",
    testFilename: "09-dom-grids-tables.test.js",
    desc: "Побудова розмітки HTML-таблиць, сіток календарів, шахових дошок, теплових карт активності та матриць через вкладені цикли."
  },
  {
    idx: 10,
    id: "10-dom-manipulation",
    title: "Модуль 10: Маніпуляція DOM, стилізація та очищення через цикли",
    shortTitle: "10. DOM Маніпуляція та Стилі",
    filename: "10-dom-manipulation.js",
    testFilename: "10-dom-manipulation.test.js",
    desc: "Справжня робота з DOM API: зебра-стилізація, швидке очищення через while, покрокові майстри, пагінація, сортування вузлів та стилі."
  }
];

// MODULE 8: Pure HTML String Generation (NO DOM API)
export const NEW_TASKS_MODULE_8 = [
  {
    moduleIdx: 8,
    id: "8.1",
    name: "renderProductCards",
    title: "Генерація розмітки карток товарів через цикл",
    level: "Базовий рівень",
    goal: "Створити та повернути HTML-рядок <div class=\"product-cards-container\">...</div>, що містить картки <div class=\"product-card\"><h4 class=\"product-card__title\">title</h4><p class=\"product-card__price\">price ₴</p></div> для кожного товару з масиву products. Якщо масив порожній або не є масивом — повернути порожній рядок ''.",
    reqs: [
      "Обхід масиву products через цикл for.",
      "Конкатенація або інтерполяція рядків.",
      "Повернути згенерований HTML-рядок."
    ],
    hint: "Створіть початковий рядок <code>let html = '&lt;div class=\"product-cards-container\"&gt;'</code>, у циклі for додавайте картки, і в кінці закрийте тег.",
    starterParams: "products",
    starterBody: "// Генерація HTML-розмітки карток товарів\n  return '';",
    solutionBody: "if (!Array.isArray(products) || products.length === 0) return '';\nlet html = '<div class=\"product-cards-container\">';\nfor (let i = 0; i < products.length; i++) {\n  const p = products[i];\n  html += `<div class=\"product-card\"><h4 class=\"product-card__title\">${p.title || ''}</h4><p class=\"product-card__price\">${p.price} ₴</p></div>`;\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderProductCards([{ title: 'Ноутбук', price: 25000 }, { title: 'Мишка', price: 800 }])",
        expected: '<div class="product-cards-container"><div class="product-card"><h4 class="product-card__title">Ноутбук</h4><p class="product-card__price">25000 ₴</p></div><div class="product-card"><h4 class="product-card__title">Мишка</h4><p class="product-card__price">800 ₴</p></div></div>'
      },
      {
        expr: "renderProductCards([])",
        expected: ""
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.2",
    name: "renderStarRating",
    title: "Генерація зіркового рейтингу (★ / ☆)",
    level: "Базовий рівень",
    goal: "Створити та повернути HTML-рядок <div class=\"star-rating\" role=\"img\" aria-label=\"Рейтинг: X з Y\">...</div>. У циклі від 1 до maxStars згенерувати зірочки: якщо індекс <= rating — <span class=\"star star--filled\">★</span>, інакше <span class=\"star star--empty\">☆</span>. Якщо maxStars <= 0 — повернути порожній рядок ''.",
    reqs: [
      "Цикл for (let i = 1; i <= maxStars; i++).",
      "Умова i <= rating для вибору ★ чи ☆.",
      "Повернути підсумковий HTML-рядок."
    ],
    hint: "Використайте шаблонні рядки: <code>`&lt;span class=\"star \${i &lt;= rating ? 'star--filled' : 'star--empty'}\"&gt;\${i &lt;= rating ? '★' : '☆'}&lt;/span&gt;`</code>.",
    starterParams: "rating, maxStars",
    starterBody: "// Генерація зіркового рейтингу\n  return '';",
    solutionBody: "if (maxStars <= 0) return '';\nlet html = `<div class=\"star-rating\" role=\"img\" aria-label=\"Рейтинг: ${rating} з ${maxStars}\">`;\nfor (let i = 1; i <= maxStars; i++) {\n  if (i <= rating) {\n    html += '<span class=\"star star--filled\">★</span>';\n  } else {\n    html += '<span class=\"star star--empty\">☆</span>';\n  }\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderStarRating(3, 5)",
        expected: '<div class="star-rating" role="img" aria-label="Рейтинг: 3 з 5"><span class="star star--filled">★</span><span class="star star--filled">★</span><span class="star star--filled">★</span><span class="star star--empty">☆</span><span class="star star--empty">☆</span></div>'
      },
      {
        expr: "renderStarRating(0, 0)",
        expected: ""
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.3",
    name: "renderBreadcrumbs",
    title: "Генерація навігаційних хлібних крихт",
    level: "Базовий рівень",
    goal: "Згенерувати HTML-рядок <nav class=\"breadcrumbs\">...</nav>. Для кожного елемента з links ({ label, url }): якщо це не останній елемент — <a href=\"url\">label</a> та <span class=\"separator\">/</span>. Для останнього елемента — <span class=\"breadcrumbs__current\">label</span>. Якщо links порожній — повернути ''.",
    reqs: [
      "Обхід масиву через цикл for.",
      "Перевірка останнього елемента (i === links.length - 1).",
      "Повернути підсумковий HTML-рядок nav."
    ],
    hint: "Перевіряйте індекс: останній елемент не має тега &lt;a&gt; та роздільника.",
    starterParams: "links",
    starterBody: "// Генерація хлібних крихт\n  return '';",
    solutionBody: "if (!Array.isArray(links) || links.length === 0) return '';\nlet html = '<nav class=\"breadcrumbs\">';\nfor (let i = 0; i < links.length; i++) {\n  const item = links[i];\n  if (i === links.length - 1) {\n    html += `<span class=\"breadcrumbs__current\">${item.label}</span>`;\n  } else {\n    html += `<a href=\"${item.url || '#'}\">${item.label}</a><span class=\"separator\">/</span>`;\n  }\n}\nhtml += '</nav>';\nreturn html;",
    tests: [
      {
        expr: "renderBreadcrumbs([{ label: 'Головна', url: '/' }, { label: 'Каталог', url: '/catalog' }, { label: 'Ноутбуки' }])",
        expected: '<nav class="breadcrumbs"><a href="/">Головна</a><span class="separator">/</span><a href="/catalog">Каталог</a><span class="separator">/</span><span class="breadcrumbs__current">Ноутбуки</span></nav>'
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.4",
    name: "renderStatusBadges",
    title: "Генерація статусних бейджів",
    level: "Базовий рівень",
    goal: "Створити та повернути HTML-рядок <div class=\"badge-container\">...</div>. Для кожного елемента з items ({ label, status }) створити <span class=\"badge badge--status\">label</span>. Допустимі статуси: success, warning, danger; інші замінювати на neutral. Якщо items порожній — повернути ''.",
    reqs: [
      "Обхід масиву через цикл for.",
      "Встановлення класу badge--status.",
      "Повернути підсумковий рядок."
    ],
    hint: "Використовуйте тернарний оператор або if для вибору класу.",
    starterParams: "items",
    starterBody: "// Генерація статусних бейджів\n  return '';",
    solutionBody: "if (!Array.isArray(items) || items.length === 0) return '';\nconst validStatuses = ['success', 'warning', 'danger'];\nlet html = '<div class=\"badge-container\">';\nfor (let i = 0; i < items.length; i++) {\n  const item = items[i];\n  const st = validStatuses.includes(item.status) ? item.status : 'neutral';\n  html += `<span class=\"badge badge--${st}\">${item.label}</span>`;\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderStatusBadges([{ label: 'Готово', status: 'success' }, { label: 'Увага', status: 'warning' }, { label: 'Тест', status: 'other' }])",
        expected: '<div class="badge-container"><span class="badge badge--success">Готово</span><span class="badge badge--warning">Увага</span><span class="badge badge--neutral">Тест</span></div>'
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.5",
    name: "renderMessageList",
    title: "Генерація списку повідомлень чату",
    level: "Базовий рівень",
    goal: "Створити та повернути HTML-рядок <ul class=\"message-list\">...</ul>. Для кожного повідомлення з messages ({ author, text, isMine }) створити <li class=\"message message--mine\"> (якщо isMine) або <li class=\"message message--other\">. Всередині додати <span class=\"author\">author</span>: <p class=\"text\">text</p>. Якщо повідомлень немає — повернути ''.",
    reqs: [
      "Цикл for по масиву messages.",
      "Клас message--mine або message--other залежно від isMine.",
      "Повернути HTML-рядок списку."
    ],
    hint: "Перевірте m.isMine та сформуйте рядок li.",
    starterParams: "messages",
    starterBody: "// Генерація повідомлень чату\n  return '';",
    solutionBody: "if (!Array.isArray(messages) || messages.length === 0) return '';\nlet html = '<ul class=\"message-list\">';\nfor (let i = 0; i < messages.length; i++) {\n  const m = messages[i];\n  const cls = m.isMine ? 'message message--mine' : 'message message--other';\n  html += `<li class=\"${cls}\"><span class=\"author\">${m.author}</span>: <p class=\"text\">${m.text}</p></li>`;\n}\nhtml += '</ul>';\nreturn html;",
    tests: [
      {
        expr: "renderMessageList([{ author: 'Бот', text: 'Привіт!', isMine: false }, { author: 'Я', text: 'Вітаю', isMine: true }])",
        expected: '<ul class="message-list"><li class="message message--other"><span class="author">Бот</span>: <p class="text">Привіт!</p></li><li class="message message--mine"><span class="author">Я</span>: <p class="text">Вітаю</p></li></ul>'
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.6",
    name: "renderTagCloud",
    title: "Генерація хмари тегів (Tag Cloud)",
    level: "Базовий рівень",
    goal: "Створити та повернути HTML-рядок <div class=\"tag-cloud\">...</div>. Для кожного об'єкта { name, count } створити <span class=\"tag-chip\" data-count=\"count\">#name</span>. Якщо count > 10, додати клас 'tag-chip--popular', інакше 'tag-chip--regular'. Якщо масив порожній — повернути ''.",
    reqs: [
      "Обхід масиву tags через цикл for.",
      "Атрибут data-count та відповідний клас.",
      "Повернути підсумковий HTML-рядок."
    ],
    hint: "Використовуйте умову <code>t.count &gt; 10</code> для вибору класу.",
    starterParams: "tags",
    starterBody: "// Генерація хмари тегів\n  return '';",
    solutionBody: "if (!Array.isArray(tags) || tags.length === 0) return '';\nlet html = '<div class=\"tag-cloud\">';\nfor (let i = 0; i < tags.length; i++) {\n  const t = tags[i];\n  const cls = t.count > 10 ? 'tag-chip tag-chip--popular' : 'tag-chip tag-chip--regular';\n  html += `<span class=\"${cls}\" data-count=\"${t.count}\">#${t.name}</span>`;\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderTagCloud([{ name: 'js', count: 25 }, { name: 'html', count: 5 }])",
        expected: '<div class="tag-cloud"><span class="tag-chip tag-chip--popular" data-count="25">#js</span><span class="tag-chip tag-chip--regular" data-count="5">#html</span></div>'
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.7",
    name: "renderProgressBarSteps",
    title: "Генерація покрокового прогрес-бару",
    level: "Базовий рівень",
    goal: "Згенерувати HTML-рядок <div class=\"progress-steps\">...</div>. У циклі від 1 до totalSteps створити кроки <span class=\"step\">step</span>. Якщо крок <= currentStep — додати клас 'step--completed', інакше 'step--pending'. Якщо totalSteps <= 0 — повернути ''.",
    reqs: [
      "Цикл for від 1 до totalSteps.",
      "Класи step--completed або step--pending.",
      "Повернути HTML-рядок."
    ],
    hint: "Запустіть цикл <code>for (let i = 1; i &lt;= totalSteps; i++)</code>.",
    starterParams: "currentStep, totalSteps",
    starterBody: "// Генерація покрокового прогрес-бару\n  return '';",
    solutionBody: "if (totalSteps <= 0) return '';\nlet html = '<div class=\"progress-steps\">';\nfor (let i = 1; i <= totalSteps; i++) {\n  const cls = i <= currentStep ? 'step step--completed' : 'step step--pending';\n  html += `<span class=\"${cls}\">${i}</span>`;\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderProgressBarSteps(2, 4)",
        expected: '<div class="progress-steps"><span class="step step--completed">1</span><span class="step step--completed">2</span><span class="step step--pending">3</span><span class="step step--pending">4</span></div>'
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.8",
    name: "renderNumberedList",
    title: "Генерація нумерованого списку з кастомним початком",
    level: "Базовий рівень",
    goal: "Створити та повернути HTML-рядок <ol class=\"numbered-list\" start=\"startNumber\">...</div>. Для кожного елемента з items створити <li>item</li>. Якщо items порожній — повернути ''.",
    reqs: [
      "Атрибут start=\"startNumber\" у тегу ol.",
      "Цикл for по масиву items.",
      "Повернути HTML-рядок списку."
    ],
    hint: "startNumber за замовчуванням дорівнює 1.",
    starterParams: "items, startNumber = 1",
    starterBody: "// Генерація нумерованого списку\n  return '';",
    solutionBody: "if (!Array.isArray(items) || items.length === 0) return '';\nlet html = `<ol class=\"numbered-list\" start=\"${startNumber}\">`;\nfor (let i = 0; i < items.length; i++) {\n  html += `<li>${items[i]}</li>`;\n}\nhtml += '</ol>';\nreturn html;",
    tests: [
      {
        expr: "renderNumberedList(['Вступ', 'Теорія', 'Практика'], 5)",
        expected: '<ol class="numbered-list" start="5"><li>Вступ</li><li>Теорія</li><li>Практика</li></ol>'
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.9",
    name: "renderNotificationFeed",
    title: "Генерація стрічки сповіщень",
    level: "Базовий рівень",
    goal: "Згенерувати HTML-рядок <div class=\"notification-feed\">...</div>. Для кожного сповіщення { title, unread } створити <div class=\"notification-card\">. Якщо unread === true, додати клас 'notification--unread', інакше 'notification--read'. Всередині додати <h4>title</h4>. Якщо notifications порожній — повернути ''.",
    reqs: [
      "Обхід масиву через цикл for.",
      "Встановлення класу notification--unread або notification--read.",
      "Повернути HTML-рядок."
    ],
    hint: "Перевірте <code>n.unread</code> у циклі.",
    starterParams: "notifications",
    starterBody: "// Генерація сповіщень\n  return '';",
    solutionBody: "if (!Array.isArray(notifications) || notifications.length === 0) return '';\nlet html = '<div class=\"notification-feed\">';\nfor (let i = 0; i < notifications.length; i++) {\n  const n = notifications[i];\n  const cls = n.unread ? 'notification-card notification--unread' : 'notification-card notification--read';\n  html += `<div class=\"${cls}\"><h4>${n.title}</h4></div>`;\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderNotificationFeed([{ title: 'Оновлення', unread: true }, { title: 'Звіт', unread: false }])",
        expected: '<div class="notification-feed"><div class="notification-card notification--unread"><h4>Оновлення</h4></div><div class="notification-card notification--read"><h4>Звіт</h4></div></div>'
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.10",
    name: "renderTabsNavigation",
    title: "Генерація розмітки вкладок (Tabs Navigation)",
    level: "Базовий рівень",
    goal: "Згенерувати HTML-рядок <div class=\"tabs-nav\" role=\"tablist\">...</div>. Для кожного елемента з tabs створити кнопку <button class=\"tab-btn\" role=\"tab\" aria-selected=\"...\">name</button>. Якщо індекс дорівнює activeIndex, додати клас 'tab--active' та aria-selected=\"true\", інакше aria-selected=\"false\". Якщо tabs порожній — повернути ''.",
    reqs: [
      "Атрибути role=\"tab\" та aria-selected.",
      "Клас tab--active для активної вкладки.",
      "Повернути HTML-рядок."
    ],
    hint: "Порівнюйте <code>i === activeIndex</code>.",
    starterParams: "tabs, activeIndex = 0",
    starterBody: "// Генерація вкладок\n  return '';",
    solutionBody: "if (!Array.isArray(tabs) || tabs.length === 0) return '';\nlet html = '<div class=\"tabs-nav\" role=\"tablist\">';\nfor (let i = 0; i < tabs.length; i++) {\n  const isCur = i === activeIndex;\n  const cls = isCur ? 'tab-btn tab--active' : 'tab-btn';\n  html += `<button class=\"${cls}\" role=\"tab\" aria-selected=\"${isCur ? 'true' : 'false'}\">${tabs[i]}</button>`;\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderTabsNavigation(['Головна', 'Профіль'], 1)",
        expected: '<div class="tabs-nav" role="tablist"><button class="tab-btn" role="tab" aria-selected="false">Головна</button><button class="tab-btn tab--active" role="tab" aria-selected="true">Профіль</button></div>'
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.11",
    name: "renderAccordionList",
    title: "Генерація розмітки акордеона (details/summary)",
    level: "Базовий рівень",
    goal: "Згенерувати HTML-рядок <div class=\"accordion-list\">...</div>. Для кожного елемента з items ({ title, content, open }) створити <details class=\"accordion-item\"> (з атрибутом open, якщо item.open === true), всередині <summary>title</summary> та <div class=\"accordion-content\">content</div>. Якщо items порожній — повернути ''.",
    reqs: [
      "Використати теги details та summary.",
      "Атрибут open за наявності item.open.",
      "Повернути HTML-рядок."
    ],
    hint: "Використовуйте <code>\${item.open ? ' open' : ''}</code> у відкриваючому тегу details.",
    starterParams: "items",
    starterBody: "// Генерація акордеона\n  return '';",
    solutionBody: "if (!Array.isArray(items) || items.length === 0) return '';\nlet html = '<div class=\"accordion-list\">';\nfor (let i = 0; i < items.length; i++) {\n  const it = items[i];\n  html += `<details class=\"accordion-item\"${it.open ? ' open' : ''}><summary>${it.title}</summary><div class=\"accordion-content\">${it.content}</div></details>`;\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderAccordionList([{ title: 'Питання 1', content: 'Відповідь', open: true }])",
        expected: '<div class="accordion-list"><details class="accordion-item" open><summary>Питання 1</summary><div class="accordion-content">Відповідь</div></details></div>'
      }
    ]
  },
  {
    moduleIdx: 8,
    id: "8.12",
    name: "renderAvatarStack",
    title: "Генерація аватар-стека з лімітом відображення",
    level: "Базовий рівень",
    goal: "Згенерувати HTML-рядок <div class=\"avatar-stack\">...</div>. Показати не більше maxVisible аватарів через <img class=\"avatar\" src=\"url\" alt=\"avatar\" />. Якщо користувачів більше за maxVisible, в кінці додати <span class=\"avatar-more\">+N</span>. Якщо users порожній — повернути ''.",
    reqs: [
      "Ліміт циклу через Math.min(users.length, maxVisible).",
      "Бейдж +N, де N = users.length - maxVisible.",
      "Повернути HTML-рядок."
    ],
    hint: "Застосуйте <code>const limit = Math.min(users.length, maxVisible)</code>.",
    starterParams: "users, maxVisible = 3",
    starterBody: "// Генерація аватар-стека\n  return '';",
    solutionBody: "if (!Array.isArray(users) || users.length === 0) return '';\nlet html = '<div class=\"avatar-stack\">';\nconst limit = Math.min(users.length, maxVisible);\nfor (let i = 0; i < limit; i++) {\n  html += `<img class=\"avatar\" src=\"${users[i]}\" alt=\"avatar\" />`;\n}\nif (users.length > maxVisible) {\n  html += `<span class=\"avatar-more\">+${users.length - maxVisible}</span>`;\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderAvatarStack(['u1.jpg', 'u2.jpg', 'u3.jpg', 'u4.jpg'], 2)",
        expected: '<div class="avatar-stack"><img class="avatar" src="u1.jpg" alt="avatar" /><img class="avatar" src="u2.jpg" alt="avatar" /><span class="avatar-more">+2</span></div>'
      }
    ]
  }
];

// MODULE 9: Complex HTML String Generation via Nested Loops (NO DOM API)
export const NEW_TASKS_MODULE_9 = [
  {
    moduleIdx: 9,
    id: "9.1",
    name: "renderDataTable",
    title: "Побудова HTML-таблиці через вкладені цикли",
    level: "Середній рівень",
    goal: "Згенерувати HTML-рядок повноцінної таблиці <table class=\"data-table\"><thead><tr>...</tr></thead><tbody>...</tbody></table>. Заголовки беруться з масиву headers через th. Рядки з 2D-масиву rows через tr та td. Якщо rows порожній — повернути ''.",
    reqs: [
      "Перший цикл для th всередині thead.",
      "Вкладені цикли для рядків tr та клітинок td у tbody.",
      "Повернути підсумковий HTML-рядок таблиці."
    ],
    hint: "Зовнішній цикл перебирає рядки, внутрішній клітинки: <code>for (let c = 0; c &lt; row.length; c++)</code>.",
    starterParams: "headers, rows",
    starterBody: "// Побудова HTML-таблиці\n  return '';",
    solutionBody: "if (!Array.isArray(rows) || rows.length === 0) return '';\nlet html = '<table class=\"data-table\"><thead><tr>';\nfor (let h = 0; h < headers.length; h++) {\n  html += `<th>${headers[h]}</th>`;\n}\nhtml += '</tr></thead><tbody>';\nfor (let r = 0; r < rows.length; r++) {\n  html += '<tr>';\n  for (let c = 0; c < rows[r].length; c++) {\n    html += `<td>${rows[r][c]}</td>`;\n  }\n  html += '</tr>';\n}\nhtml += '</tbody></table>';\nreturn html;",
    tests: [
      {
        expr: "renderDataTable(['Ім\\'я', 'Бал'], [['Анна', 95], ['Іван', 88]])",
        expected: '<table class="data-table"><thead><tr><th>Ім\'я</th><th>Бал</th></tr></thead><tbody><tr><td>Анна</td><td>95</td></tr><tr><td>Іван</td><td>88</td></tr></tbody></table>'
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.2",
    name: "renderCalendarMonth",
    title: "Генерація календарної сітки місяця",
    level: "Середній рівень",
    goal: "Згенерувати HTML-рядок сітки календаря <div class=\"calendar-month\"><h3 class=\"month-title\">monthName</h3><div class=\"calendar-grid\">...</div></div>. Дні від 1 до daysInMonth згенерувати через <span class=\"day-cell\">day</span>. Якщо daysInMonth <= 0 — повернути ''.",
    reqs: [
      "Заголовок з назвою monthName.",
      "Цикл for від 1 до daysInMonth.",
      "Повернути HTML-рядок календаря."
    ],
    hint: "Запустіть цикл по днях місяця та додайте кожне число у &lt;span class=\"day-cell\"&gt;.",
    starterParams: "daysInMonth, monthName",
    starterBody: "// Генерація календаря на місяць\n  return '';",
    solutionBody: "if (daysInMonth <= 0) return '';\nlet html = `<div class=\"calendar-month\"><h3 class=\"month-title\">${monthName}</h3><div class=\"calendar-grid\">`;\nfor (let d = 1; d <= daysInMonth; d++) {\n  html += `<span class=\"day-cell\">${d}</span>`;\n}\nhtml += '</div></div>';\nreturn html;",
    tests: [
      {
        expr: "renderCalendarMonth(3, 'Березень')",
        expected: '<div class="calendar-month"><h3 class="month-title">Березень</h3><div class="calendar-grid"><span class="day-cell">1</span><span class="day-cell">2</span><span class="day-cell">3</span></div></div>'
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.3",
    name: "renderChessBoard",
    title: "Генерація шахової дошки (вкладені цикли)",
    level: "Середній рівень",
    goal: "Згенерувати HTML-рядок шахівниці <div class=\"chess-board\">...</div> розміром size x size. Клітинки: <div class=\"chess-cell cell--white\"> або cell--black. Якщо (r + c) % 2 === 0 — cell--white, інакше cell--black. Якщо size <= 0 — повернути ''.",
    reqs: [
      "Вкладені цикли: r від 0 до size-1, c від 0 до size-1.",
      "Математичне чергування (r + c) % 2 === 0.",
      "Повернути HTML-рядок."
    ],
    hint: "Перевірте парність суми координат <code>(r + c) % 2 === 0</code>.",
    starterParams: "size = 8",
    starterBody: "// Генерація шахівниці\n  return '';",
    solutionBody: "if (size <= 0) return '';\nlet html = '<div class=\"chess-board\">';\nfor (let r = 0; r < size; r++) {\n  for (let c = 0; c < size; c++) {\n    const isWhite = (r + c) % 2 === 0;\n    html += `<div class=\"chess-cell ${isWhite ? 'cell--white' : 'cell--black'}\"></div>`;\n  }\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderChessBoard(2)",
        expected: '<div class="chess-board"><div class="chess-cell cell--white"></div><div class="chess-cell cell--black"></div><div class="chess-cell cell--black"></div><div class="chess-cell cell--white"></div></div>'
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.4",
    name: "renderActivityHeatmap",
    title: "Генерація карти активності (Heatmap)",
    level: "Середній рівень",
    goal: "Згенерувати HTML-рядок <div class=\"activity-heatmap\">...</div>. Матриця activityMatrix містить рівні активності 0..4 для кожного тижня і дня. Створити клітинки <div class=\"heatmap-cell cell--lvl-X\" data-val=\"X\">. Якщо матриця порожня — повернути ''.",
    reqs: [
      "Вкладені цикли по тижнях та днях.",
      "Клас cell--lvl-X залежно від значення.",
      "Повернути HTML-рядок."
    ],
    hint: "Значення клітинки: <code>activityMatrix[w][d]</code>.",
    starterParams: "activityMatrix",
    starterBody: "// Генерація теплової карти активності\n  return '';",
    solutionBody: "if (!Array.isArray(activityMatrix) || activityMatrix.length === 0) return '';\nlet html = '<div class=\"activity-heatmap\">';\nfor (let w = 0; w < activityMatrix.length; w++) {\n  const week = activityMatrix[w];\n  for (let d = 0; d < week.length; d++) {\n    const val = week[d] || 0;\n    html += `<div class=\"heatmap-cell cell--lvl-${val}\" data-val=\"${val}\"></div>`;\n  }\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderActivityHeatmap([[0, 2], [1, 3]])",
        expected: '<div class="activity-heatmap"><div class="heatmap-cell cell--lvl-0" data-val="0"></div><div class="heatmap-cell cell--lvl-2" data-val="2"></div><div class="heatmap-cell cell--lvl-1" data-val="1"></div><div class="heatmap-cell cell--lvl-3" data-val="3"></div></div>'
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.5",
    name: "renderPixelArtGrid",
    title: "Генерація піксельного полотна з 2D-матриці кольорів",
    level: "Середній рівень",
    goal: "Згенерувати HTML-рядок <div class=\"pixel-grid\">...</div>. 2D-масив pixels містить HEX-кольори клітинок. Для кожного кольору створити <div class=\"pixel-cell\" style=\"background-color:color;\">. Якщо pixels порожній — повернути ''.",
    reqs: [
      "Вкладені цикли по рядках та колонках.",
      "Інлайн-стиль background-color для кожного пікселя.",
      "Повернути HTML-рядок."
    ],
    hint: "Перебирайте <code>pixels[r][c]</code>.",
    starterParams: "pixels",
    starterBody: "// Генерація піксельної сітки\n  return '';",
    solutionBody: "if (!Array.isArray(pixels) || pixels.length === 0) return '';\nlet html = '<div class=\"pixel-grid\">';\nfor (let r = 0; r < pixels.length; r++) {\n  for (let c = 0; c < pixels[r].length; c++) {\n    html += `<div class=\"pixel-cell\" style=\"background-color:${pixels[r][c]};\"></div>`;\n  }\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderPixelArtGrid([['#fff', '#000'], ['#000', '#fff']])",
        expected: '<div class="pixel-grid"><div class="pixel-cell" style="background-color:#fff;"></div><div class="pixel-cell" style="background-color:#000;"></div><div class="pixel-cell" style="background-color:#000;"></div><div class="pixel-cell" style="background-color:#fff;"></div></div>'
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.6",
    name: "renderMultiplicationTableDOM",
    title: "Генерація таблиці множення N x N",
    level: "Базовий рівень",
    goal: "Згенерувати HTML-рядок таблиці множення <table class=\"mult-table\"><tbody>...</tbody></table> розміром n x n. У клітинках <td> значення r * c. Якщо r === c — додати клас 'cell--diagonal'. Якщо n <= 0 — повернути ''.",
    reqs: [
      "Вкладені цикли r від 1 до n, c від 1 до n.",
      "Підсвічування діагоналі cell--diagonal при r === c.",
      "Повернути HTML-рядок."
    ],
    hint: "Значення клітинки: <code>r * c</code>.",
    starterParams: "n",
    starterBody: "// Генерація таблиці множення\n  return '';",
    solutionBody: "if (n <= 0) return '';\nlet html = '<table class=\"mult-table\"><tbody>';\nfor (let r = 1; r <= n; r++) {\n  html += '<tr>';\n  for (let c = 1; c <= n; c++) {\n    const isDiag = r === c;\n    html += `<td${isDiag ? ' class=\"cell--diagonal\"' : ''}>${r * c}</td>`;\n  }\n  html += '</tr>';\n}\nhtml += '</tbody></table>';\nreturn html;",
    tests: [
      {
        expr: "renderMultiplicationTableDOM(2)",
        expected: '<table class="mult-table"><tbody><tr><td class="cell--diagonal">1</td><td>2</td></tr><tr><td>2</td><td class="cell--diagonal">4</td></tr></tbody></table>'
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.7",
    name: "renderNestedTreeMenu",
    title: "Генерація дворівневого меню списків",
    level: "Середній рівень",
    goal: "Згенерувати HTML-рядок <ul class=\"tree-menu\">...</ul>. Для кожної категорії з categories ({ label, children }) створити <li>label. Якщо children непорожній — додати вкладений <ul class=\"sub-menu\"> з дочірніми <li>child.label</li>. Якщо categories порожній — повернути ''.",
    reqs: [
      "Зовнішній цикл по категоріях, внутрішній по children.",
      "Вкладений тег ul class=\"sub-menu\".",
      "Повернути HTML-рядок."
    ],
    hint: "Перевіряйте <code>Array.isArray(cat.children) && cat.children.length > 0</code>.",
    starterParams: "categories",
    starterBody: "// Генерація дворівневого меню\n  return '';",
    solutionBody: "if (!Array.isArray(categories) || categories.length === 0) return '';\nlet html = '<ul class=\"tree-menu\">';\nfor (let i = 0; i < categories.length; i++) {\n  const cat = categories[i];\n  html += `<li>${cat.label}`;\n  if (Array.isArray(cat.children) && cat.children.length > 0) {\n    html += '<ul class=\"sub-menu\">';\n    for (let j = 0; j < cat.children.length; j++) {\n      html += `<li>${cat.children[j].label}</li>`;\n    }\n    html += '</ul>';\n  }\n  html += '</li>';\n}\nhtml += '</ul>';\nreturn html;",
    tests: [
      {
        expr: "renderNestedTreeMenu([{ label: 'Документи', children: [{ label: 'Звіт' }] }])",
        expected: '<ul class="tree-menu"><li>Документи<ul class="sub-menu"><li>Звіт</li></ul></li></ul>'
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.8",
    name: "renderSeatMap",
    title: "Генерація схеми залу кінотеатру",
    level: "Середній рівень",
    goal: "Згенерувати HTML-рядок <div class=\"seat-map\">...</div>. Вкладені цикли: r від 1 до rows, s від 1 до seatsPerRow. Створити <span class=\"seat seat--reserved\"> або seat--available з текстом \"r-s\". Якщо рядок \"r-s\" є у масиві reserved — встановити seat--reserved. Якщо rows або seatsPerRow <= 0 — повернути ''.",
    reqs: [
      "Вкладені цикли r та s.",
      "Перевірка наявності в reserved.",
      "Повернути HTML-рядок."
    ],
    hint: "Формуйте ключ місця: <code>`\${r}-\${s}`</code>.",
    starterParams: "rows, seatsPerRow, reserved = []",
    starterBody: "// Генерація схеми місць\n  return '';",
    solutionBody: "if (rows <= 0 || seatsPerRow <= 0) return '';\nlet html = '<div class=\"seat-map\">';\nfor (let r = 1; r <= rows; r++) {\n  for (let s = 1; s <= seatsPerRow; s++) {\n    const id = `${r}-${s}`;\n    const isRes = reserved.includes(id);\n    html += `<span class=\"seat ${isRes ? 'seat--reserved' : 'seat--available'}\">${id}</span>`;\n  }\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderSeatMap(1, 2, ['1-2'])",
        expected: '<div class="seat-map"><span class="seat seat--available">1-1</span><span class="seat seat--reserved">1-2</span></div>'
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.9",
    name: "renderColorPaletteMatrix",
    title: "Генерація матриці колірних палітр",
    level: "Базовий рівень",
    goal: "Згенерувати HTML-рядок <div class=\"palette-matrix\">...</div>. Масив groups ({ name, colors: [...] }). Для кожної групи вивести <div class=\"palette-group\"><h4>name</h4><div class=\"swatches\">..., всередині плитки <span class=\"swatch\" style=\"background-color:color;\">color</span>. Якщо groups порожній — повернути ''.",
    reqs: [
      "Зовнішній цикл по групах, внутрішній по colors.",
      "Інлайн-стиль background-color.",
      "Повернути HTML-рядок."
    ],
    hint: "Перебирайте кольори групи у внутрішньому циклі.",
    starterParams: "groups",
    starterBody: "// Генерація палітри кольорів\n  return '';",
    solutionBody: "if (!Array.isArray(groups) || groups.length === 0) return '';\nlet html = '<div class=\"palette-matrix\">';\nfor (let g = 0; g < groups.length; g++) {\n  const grp = groups[g];\n  html += `<div class=\"palette-group\"><h4>${grp.name}</h4><div class=\"swatches\">`;\n  for (let c = 0; c < grp.colors.length; c++) {\n    html += `<span class=\"swatch\" style=\"background-color:${grp.colors[c]};\">${grp.colors[c]}</span>`;\n  }\n  html += '</div></div>';\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderColorPaletteMatrix([{ name: 'Моно', colors: ['#000', '#fff'] }])",
        expected: '<div class="palette-matrix"><div class="palette-group"><h4>Моно</h4><div class="swatches"><span class="swatch" style="background-color:#000;">#000</span><span class="swatch" style="background-color:#fff;">#fff</span></div></div></div>'
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.10",
    name: "renderProductComparisonGrid",
    title: "Генерація порівняльної таблиці продуктів",
    level: "Середній рівень",
    goal: "Згенерувати HTML-рядок <table class=\"compare-table\">...</table>. <thead> містить стовпці ['Характеристика', ...productNames]. <tbody> містить рядки для кожної фічі: <td>feature</td> та для кожного товару <td>✓</td> або <td>—</td> (залежно від product.features[f]). Якщо products порожній — повернути ''.",
    reqs: [
      "Заголовки товарів у thead.",
      "Вкладені цикли по features та products у tbody.",
      "Повернути HTML-рядок таблиці."
    ],
    hint: "Перевіряйте <code>Boolean(p.features && p.features[f])</code>.",
    starterParams: "features, products",
    starterBody: "// Генерація порівняльної таблиці\n  return '';",
    solutionBody: "if (!Array.isArray(products) || products.length === 0) return '';\nlet html = '<table class=\"compare-table\"><thead><tr><th>Характеристика</th>';\nfor (let p = 0; p < products.length; p++) {\n  html += `<th>${products[p].name}</th>`;\n}\nhtml += '</tr></thead><tbody>';\nfor (let f = 0; f < features.length; f++) {\n  const feat = features[f];\n  html += `<tr><td>${feat}</td>`;\n  for (let p = 0; p < products.length; p++) {\n    const has = Boolean(products[p].features && products[p].features[feat]);\n    html += `<td>${has ? '✓' : '—'}</td>`;\n  }\n  html += '</tr>';\n}\nhtml += '</tbody></table>';\nreturn html;",
    tests: [
      {
        expr: "renderProductComparisonGrid(['Wi-Fi'], [{ name: 'A', features: { 'Wi-Fi': true } }, { name: 'B', features: {} }])",
        expected: '<table class="compare-table"><thead><tr><th>Характеристика</th><th>A</th><th>B</th></tr></thead><tbody><tr><td>Wi-Fi</td><td>✓</td><td>—</td></tr></tbody></table>'
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.11",
    name: "renderWordSearchGrid",
    title: "Генерація сітки гри «Пошук слів»",
    level: "Базовий рівень",
    goal: "Згенерувати HTML-рядок <div class=\"word-search-grid\">...</div> з 2D-масиву літер grid. Для кожної літери створити <span class=\"grid-letter\" data-r=\"r\" data-c=\"c\">letter</span>. Якщо grid порожній — повернути ''.",
    reqs: [
      "Вкладені цикли r та c.",
      "Атрибути data-r та data-c.",
      "Повернути HTML-рядок."
    ],
    hint: "Зчитуйте літеру як <code>grid[r][c]</code>.",
    starterParams: "grid",
    starterBody: "// Генерація сітки пошуку слів\n  return '';",
    solutionBody: "if (!Array.isArray(grid) || grid.length === 0) return '';\nlet html = '<div class=\"word-search-grid\">';\nfor (let r = 0; r < grid.length; r++) {\n  for (let c = 0; c < grid[r].length; c++) {\n    html += `<span class=\"grid-letter\" data-r=\"${r}\" data-c=\"${c}\">${grid[r][c]}</span>`;\n  }\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderWordSearchGrid([['A', 'B'], ['C', 'D']])",
        expected: '<div class="word-search-grid"><span class="grid-letter" data-r="0" data-c="0">A</span><span class="grid-letter" data-r="0" data-c="1">B</span><span class="grid-letter" data-r="1" data-c="0">C</span><span class="grid-letter" data-r="1" data-c="1">D</span></div>'
      }
    ]
  },
  {
    moduleIdx: 9,
    id: "9.12",
    name: "renderBarChartGrouped",
    title: "Генерація розмітки стовпчикової діаграми",
    level: "Середній рівень",
    goal: "Згенерувати HTML-рядок <div class=\"bar-chart\">...</div>. labels — підписи груп. series — масив серій [{ name, color, data: [...] }]. Для кожного періоду створити <div class=\"chart-group\"><span class=\"group-label\">label</span><div class=\"bars\">..., всередині стовпчики <div class=\"chart-bar\" style=\"height:val*2px;background-color:color;\">. Якщо series порожній — повернути ''.",
    reqs: [
      "Зовнішній цикл по labels, внутрішній по series.",
      "Стилі height та background-color.",
      "Повернути HTML-рядок."
    ],
    hint: "Висота стовпчика: <code>\${s.data[i] * 2}px</code>.",
    starterParams: "labels, series",
    starterBody: "// Генерація діаграми\n  return '';",
    solutionBody: "if (!Array.isArray(series) || series.length === 0 || !Array.isArray(labels)) return '';\nlet html = '<div class=\"bar-chart\">';\nfor (let i = 0; i < labels.length; i++) {\n  html += `<div class=\"chart-group\"><span class=\"group-label\">${labels[i]}</span><div class=\"bars\">`;\n  for (let s = 0; s < series.length; s++) {\n    const ser = series[s];\n    const val = (ser.data && ser.data[i]) || 0;\n    html += `<div class=\"chart-bar\" style=\"height:${val * 2}px;background-color:${ser.color};\"></div>`;\n  }\n  html += '</div></div>';\n}\nhtml += '</div>';\nreturn html;",
    tests: [
      {
        expr: "renderBarChartGrouped(['Січ'], [{ name: 'А', color: '#f00', data: [10] }])",
        expected: '<div class="bar-chart"><div class="chart-group"><span class="group-label">Січ</span><div class="bars"><div class="chart-bar" style="height:20px;background-color:#f00;"></div></div></div></div>'
      }
    ]
  }
];

// MODULE 10: Real DOM Manipulation (The ONLY module touching document / HTMLElement)
export const NEW_TASKS_MODULE_10 = [
  {
    moduleIdx: 10,
    id: "10.1",
    name: "applyZebraStriping",
    title: "Зебра-стилізація рядків таблиці через цикл",
    level: "Базовий рівень",
    goal: "Написати функцію applyZebraStriping(tableElement, evenBg = '#ffffff', oddBg = '#f8fafc'). Знайти всі рядки таблиці в tbody. У циклі: парним рядкам (i % 2 === 0) встановити style.backgroundColor = evenBg і видалити клас 'table-row--striped', непарним — style.backgroundColor = oddBg і додати клас 'table-row--striped'. Повернути кількість оброблених рядків.",
    reqs: [
      "Знайти рядки через tableElement.querySelectorAll('tbody tr').",
      "Чергувати стилі фону та наявність класу table-row--striped.",
      "Повернути загальну кількість рядків."
    ],
    hint: "Знайдіть рядки через <a href=\"https://developer.mozilla.org/uk/docs/Web/API/Element/querySelectorAll\" target=\"_blank\">tableElement.querySelectorAll</a>. Застосуйте цикл for (let i = 0; i < rows.length; i++) з перевіркою парності i % 2 === 0.",
    starterParams: "tableElement, evenBg = '#ffffff', oddBg = '#f8fafc'",
    starterBody: "// Зебра-стилізація рядків таблиці\n  return 0;",
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
          const isEvenMatch = rows[0].style.backgroundColor === '#ffffff' || rows[0].style.backgroundColor === 'rgb(255, 255, 255)';
          const isOddMatch = rows[1].style.backgroundColor === '#f0f0f0' || rows[1].style.backgroundColor === 'rgb(240, 240, 240)';
          return [count, isEvenMatch, isOddMatch, rows[1].classList.contains('table-row--striped')];
        })()`,
        expected: [3, true, true, true]
      }
    ]
  },
  {
    moduleIdx: 10,
    id: "10.2",
    name: "clearContainerFast",
    title: "Швидке та безпечне очищення DOM-контейнера через цикл while",
    level: "Базовий рівень",
    goal: "Написати функцію clearContainerFast(containerElement). Поки у containerElement є перший нащадок (firstChild), видаляти його за допомогою removeChild(containerElement.firstChild). Повернути кількість видалених вузлів.",
    reqs: [
      "Використати цикл while (containerElement.firstChild).",
      "Видаляти вузли через removeChild().",
      "Повернути лічильник видалених елементів."
    ],
    hint: "Використовуйте цикл while (container.firstChild) та метод <a href=\"https://developer.mozilla.org/uk/docs/Web/API/Node/removeChild\" target=\"_blank\">container.removeChild(container.firstChild)</a> для безпечного та швидкого видалення всіх дітей.",
    starterParams: "containerElement",
    starterBody: "// Швидке очищення контейнера\n  return 0;",
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
        expr: `(() => {
          const div = document.createElement('div');
          return clearContainerFast(div);
        })()`,
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
          const w = renderStepWizard(['Крок 1', 'Крок 2', 'Крок 3'], 1);
          const steps = w.querySelectorAll('.wizard-step');
          return [
            steps[0].classList.contains('wizard-step--done'),
            steps[1].classList.contains('wizard-step--active'),
            steps[2].classList.contains('wizard-step--pending')
          ];
        })()`,
        expected: [true, true, true]
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
    hint: "Для кожного елемента пройдіться по keywords. Застосуйте <a href=\"https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/split\" target=\"_blank\">string.split(word)</a>: кількість входжень — (parts.length - 1). Потім з'єднайте частини через <a href=\"https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/join\" target=\"_blank\">parts.join('<mark class=\"kw-highlight\">' + word + '</mark>')</a>.",
    starterParams: "elementsList, keywords",
    starterBody: "// Підсвічування ключових слів через цикли та split/join\n  return 0;",
    solutionBody: "if (!elementsList || !keywords || keywords.length === 0) return 0;\nlet totalMatches = 0;\nfor (let i = 0; i < elementsList.length; i++) {\n  const el = elementsList[i];\n  let html = el.textContent || '';\n  for (let k = 0; k < keywords.length; k++) {\n    const word = keywords[k];\n    if (!word) continue;\n    const parts = html.split(word);\n    if (parts.length > 1) {\n      totalMatches += (parts.length - 1);\n      html = parts.join(`<mark class=\"kw-highlight\">${word}</mark>`);\n    }\n  }\n  el.innerHTML = html;\n}\nreturn totalMatches;",
    tests: [
      {
        expr: `(() => {
          const p1 = document.createElement('p'); p1.textContent = 'JavaScript цикли while та for';
          const p2 = document.createElement('p'); p2.textContent = 'Тут немає збігів';
          const count = highlightKeywordsInElements([p1, p2], ['while', 'for']);
          return [count, p1.innerHTML.includes('<mark class=\"kw-highlight\">while</mark>')];
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
    solutionBody: "if (!parentElement) return null;\nconst target = targetTagName.toUpperCase();\nlet current = parentElement.firstElementChild;\nwhile (current) {\n  if (current.tagName === target) {\n    const wrapper = document.createElement('div');\n    wrapper.className = wrapperClass;\n    parentElement.insertBefore(wrapper, current);\n    while (current && current.tagName === target) {\n      const next = current.nextElementSibling;\n      wrapper.appendChild(current);\n      current = next;\n    }\n  } else {\n    current = current.nextElementSibling;\n  }\n}\nreturn parentElement;",
    tests: [
      {
        expr: `(() => {
          const parent = document.createElement('div');
          const p1 = document.createElement('p'); p1.textContent = '1';
          const p2 = document.createElement('p'); p2.textContent = '2';
          const span = document.createElement('span'); span.textContent = 'x';
          parent.appendChild(p1); parent.appendChild(p2); parent.appendChild(span);
          wrapConsecutiveElements(parent, 'p', 'group');
          return [parent.children.length, parent.children[0].className, parent.children[0].children.length];
        })()`,
        expected: [2, 'group', 2]
      }
    ]
  },
  {
    moduleIdx: 10,
    id: "10.12",
    name: "animateElementsStagger",
    title: "Каскадне призначення затримки анімації (Stagger)",
    level: "Середній рівень",
    goal: "Для кожного елемента в elementsList у циклі встановити інлайн-стиль animationDelay = `${i * stepDelayMs}ms` та додати клас 'animate-stagger'. Повернути максимальну затримку (в мілісекундах) останнього елемента.",
    reqs: [
      "Цикл for від 0 до elementsList.length - 1.",
      "Встановлення animationDelay у мілісекундах (наприклад, '0ms', '100ms').",
      "Додавання класу animate-stagger.",
      "Повернути затримку останнього елемента (або 0 для порожнього масиву)."
    ],
    hint: "el.style.animationDelay = `${i * stepDelayMs}ms`; el.classList.add('animate-stagger');",
    starterParams: "elementsList, stepDelayMs = 100",
    starterBody: "// Каскадне призначення анімації\n  return 0;",
    solutionBody: "if (!elementsList || elementsList.length === 0) return 0;\nlet maxDelay = 0;\nfor (let i = 0; i < elementsList.length; i++) {\n  const el = elementsList[i];\n  const delay = i * stepDelayMs;\n  el.style.animationDelay = `${delay}ms`;\n  el.classList.add('animate-stagger');\n  maxDelay = delay;\n}\nreturn maxDelay;",
    tests: [
      {
        expr: `(() => {
          const el1 = document.createElement('div');
          const el2 = document.createElement('div');
          const el3 = document.createElement('div');
          const max = animateElementsStagger([el1, el2, el3], 150);
          return [max, el1.style.animationDelay, el2.style.animationDelay, el3.style.animationDelay, el1.classList.contains('animate-stagger')];
        })()`,
        expected: [300, '0ms', '150ms', '300ms', true]
      }
    ]
  }
];

console.log('Finished preparing data structures.');

