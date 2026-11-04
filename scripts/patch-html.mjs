import fs from 'fs';

const filePath = '/Users/grabovsky/projects/js-loops-workout/index.html';
let html = fs.readFileSync(filePath, 'utf8');

// 1. Add generateDomPreview before runSingleTaskTest
const generateDomPreviewCode = `
    // Live DOM Component Preview Generator for Modules 8, 9, 10
    function generateDomPreview(task, userFn) {
      if (typeof userFn !== 'function') return null;
      try {
        switch (task.name) {
          // --- MODULE 8 ---
          case 'renderProductCards':
            return userFn([
              { id: 1, title: 'MacBook Pro M3', price: 1999, inStock: true },
              { id: 2, title: 'AirPods Max', price: 549, inStock: false },
              { id: 3, title: 'iPad Pro OLED', price: 999, inStock: true }
            ]);
          case 'renderStarRating':
            return userFn(4, 5);
          case 'renderBreadcrumbs':
            return userFn([
              { label: 'Головна', url: '/' },
              { label: 'Курси', url: '/courses' },
              { label: 'JavaScript Loops & DOM', url: null }
            ]);
          case 'renderStatusBadges':
            return userFn([
              { label: 'Успішно', status: 'success' },
              { label: 'В черзі', status: 'warning' },
              { label: 'Помилка', status: 'danger' },
              { label: 'Інфо', status: 'neutral' }
            ]);
          case 'renderMessageList':
            return userFn([
              { author: 'Ментор', text: 'Чудова робота з циклами та DOM!', timestamp: '14:20', isMine: false },
              { author: 'Студент', text: 'Дякую, тепер інтерфейс генерується наживо!', timestamp: '14:22', isMine: true }
            ]);
          case 'renderTagCloud':
            return userFn([
              { name: 'javascript', count: 42 },
              { name: 'while', count: 35 },
              { name: 'dom', count: 28 },
              { name: 'algorithms', count: 18 },
              { name: 'css', count: 8 }
            ]);
          case 'renderProgressBarSteps':
            return userFn(3, 4);
          case 'renderNumberedList':
            return userFn(['Ініціалізація лічильника', 'Перевірка умови циклу', 'Тіло ітерації (маніпуляція DOM)', 'Зміна кроку (i++)']);
          case 'renderNotificationFeed':
            return userFn([
              { title: 'Тестування', message: 'Всі 201 тест успішно пройдено!', unread: true },
              { title: 'Система', message: 'Резервна копія збережена', unread: false }
            ]);
          case 'renderTabsNavigation':
            return userFn(['Огляд курсу', 'Практичні завдання', 'Довідник теорії'], 1);
          case 'renderAccordionList':
            return userFn([
              { title: 'Чому цикли важливі для DOM?', content: 'Вони дозволяють масово створювати та оновлювати елементи на основі масивів даних.', open: true },
              { title: 'Як уникнути підвисання браузера?', content: 'Завжди контролюйте умову виходу та не допускайте нескінченних ітерацій.', open: false }
            ]);
          case 'renderAvatarStack':
            return userFn(['https://i.pravatar.cc/100?img=11', 'https://i.pravatar.cc/100?img=12', 'https://i.pravatar.cc/100?img=13', 'https://i.pravatar.cc/100?img=14'], 3);

          // --- MODULE 9 ---
          case 'renderDataTable':
            return userFn(['ID', 'Студент', 'Модуль', 'Статус'], [
              { ID: 1, 'Студент': 'Олексій Коваленко', 'Модуль': 'Модуль 10', 'Статус': '✓ Складено' },
              { ID: 2, 'Студент': 'Марія Шевченко', 'Модуль': 'Модуль 9', 'Статус': '✓ Складено' },
              { ID: 3, 'Студент': 'Тарас Бондар', 'Модуль': 'Модуль 8', 'Статус': '⏳ В процесі' }
            ]);
          case 'renderCalendarMonth':
            return userFn(31, 3, 'Березень 2026');
          case 'renderChessBoard':
            return userFn(8);
          case 'renderActivityHeatmap':
            return userFn(8, [
              [1, 4, 0, 8, 3, 2, 6],
              [0, 2, 5, 7, 1, 0, 3],
              [4, 8, 2, 0, 5, 6, 1],
              [0, 0, 3, 2, 6, 1, 0],
              [7, 5, 2, 4, 0, 1, 8],
              [2, 3, 6, 0, 1, 4, 2],
              [0, 1, 4, 8, 3, 2, 5],
              [6, 2, 0, 1, 4, 5, 7]
            ]);
          case 'renderPixelArtGrid':
            return userFn(6, 6, [
              ['#6366f1', '#6366f1', '#6366f1', '#6366f1', '#6366f1', '#6366f1'],
              ['#6366f1', '#ffffff', '#6366f1', '#6366f1', '#ffffff', '#6366f1'],
              ['#6366f1', '#6366f1', '#6366f1', '#6366f1', '#6366f1', '#6366f1'],
              ['#6366f1', '#10b981', '#10b981', '#10b981', '#10b981', '#6366f1'],
              ['#6366f1', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#6366f1'],
              ['#6366f1', '#6366f1', '#6366f1', '#6366f1', '#6366f1', '#6366f1']
            ]);
          case 'renderMultiplicationTableDOM':
            return userFn(5);
          case 'renderNestedTreeMenu':
            return userFn([
              { label: '📁 Документи', children: [{ label: '📄 Звіти 2026' }, { label: '📄 Рахунки' }] },
              { label: '📁 Проєкти', children: [{ label: '🚀 Frontend Camp' }, { label: '⚡ Loops Workout' }] }
            ]);
          case 'renderSeatMap':
            return userFn(4, 6, ['1-2', '2-4', '3-1', '4-5']);
          case 'renderColorPaletteMatrix':
            return userFn([
              { groupName: 'Emerald (Успіх)', shades: ['#a7f3d0', '#34d399', '#059669', '#064e3b'] },
              { groupName: 'Indigo (Акцент)', shades: ['#c7d2fe', '#818cf8', '#6366f1', '#3730a3'] }
            ]);
          case 'renderProductComparisonGrid':
            return userFn(['Wi-Fi 6', 'Type-C', 'Вологозахист'], [
              { name: 'Базова модель', features: { 'Wi-Fi 6': true, 'Type-C': true, 'Вологозахист': false } },
              { name: 'Pro версія', features: { 'Wi-Fi 6': true, 'Type-C': true, 'Вологозахист': true } }
            ]);
          case 'renderWordSearchGrid':
            return userFn([
              ['J', 'A', 'V', 'A'],
              ['L', 'O', 'O', 'P'],
              ['C', 'O', 'D', 'E'],
              ['T', 'E', 'S', 'T']
            ]);
          case 'renderBarChartGrouped':
            return userFn(['Січ', 'Лют', 'Бер', 'Кві'], [
              { name: 'План', color: '#6366f1', data: [40, 60, 75, 90] },
              { name: 'Факт', color: '#10b981', data: [35, 65, 80, 95] }
            ]);

          // --- MODULE 10 (DOM Manipulation) ---
          case 'applyZebraStriping': {
            const tbl = document.createElement('table');
            tbl.className = 'data-table';
            tbl.style.width = '100%';
            const thead = document.createElement('thead');
            thead.innerHTML = '<tr><th style=\"padding:8px 12px;\">#</th><th style=\"padding:8px 12px;\">Студент</th><th style=\"padding:8px 12px;\">Статус</th></tr>';
            tbl.appendChild(thead);
            const tbody = document.createElement('tbody');
            const rowsData = [
              ['1', 'Олексій Коваленко', '✓ Зараховано'],
              ['2', 'Марія Шевченко', '✓ Зараховано'],
              ['3', 'Тарас Бондар', '✓ Зараховано'],
              ['4', 'Олена Мельник', '✓ Зараховано']
            ];
            rowsData.forEach(r => {
              const tr = document.createElement('tr');
              tr.innerHTML = \`<td style=\"padding:8px 12px; font-weight:600;\">\${r[0]}</td><td style=\"padding:8px 12px;\">\${r[1]}</td><td style=\"padding:8px 12px; color:#10b981;\">\${r[2]}</td>\`;
              tbody.appendChild(tr);
            });
            tbl.appendChild(tbody);
            userFn(tbl, '#1a233a', '#0f1723');
            return tbl;
          }
          case 'clearContainerFast': {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:14px; text-align:center; border:1px dashed #10b981; border-radius:8px; width:100%;';
            const dummy = document.createElement('div');
            for (let i = 0; i < 4; i++) {
              const item = document.createElement('div');
              item.textContent = \`Застарілий вузол #\${i + 1}\`;
              dummy.appendChild(item);
            }
            const removed = userFn(dummy);
            wrap.innerHTML = \`<span style=\"color:#10b981; font-weight:700;\">✓ Контейнер миттєво очищено через цикл while</span><div style=\"font-size:12px; color:var(--smoke); margin-top:4px;\">Видалено вузлів: \${removed || 4}</div>\`;
            return wrap;
          }
          case 'buildNestedListTree':
            return userFn([
              { title: '📁 Розділ 1: Вступ до DOM', children: [{ title: '📄 1.1 Що таке дерево вузлів' }, { title: '📄 1.2 Селектори' }] },
              { title: '📁 Розділ 2: Цикли та ітерація', children: [{ title: '📄 2.1 Генерація списків' }, { title: '📄 2.2 Таблиці та сітки' }] }
            ]);
          case 'renderStepWizard':
            return userFn(['Реєстрація', 'Верифікація', 'Оплата', 'Завершення'], 2);
          case 'highlightKeywordsInElements': {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'display:flex; flex-direction:column; gap:8px; width:100%;';
            const p1 = document.createElement('p');
            p1.textContent = 'Цикл for та цикл while є фундаментальними конструкціями JavaScript.';
            p1.style.margin = '0';
            const p2 = document.createElement('p');
            p2.textContent = 'Маніпуляція DOM через цикл дозволяє динамічно підсвічувати важливі ключові слова.';
            p2.style.margin = '0';
            wrap.appendChild(p1);
            wrap.appendChild(p2);
            userFn([p1, p2], ['цикл', 'DOM', 'JavaScript']);
            return wrap;
          }
          case 'toggleElementsVisibility': {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'display:flex; gap:8px; flex-wrap:wrap; width:100%;';
            const items = [
              { name: 'Активний модуль 8', active: true },
              { name: 'Активний модуль 9', active: true },
              { name: 'Прихований чернетковий блок', active: false }
            ];
            const domEls = items.map(it => {
              const el = document.createElement('div');
              el.className = 'pill-badge';
              el.textContent = it.name;
              el.setAttribute('data-active', String(it.active));
              wrap.appendChild(el);
              return el;
            });
            userFn(domEls, el => el.getAttribute('data-active') === 'true');
            return wrap;
          }
          case 'reorderListByAttribute': {
            const ul = document.createElement('ul');
            ul.style.cssText = 'list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:6px; width:100%;';
            const sample = [
              { name: 'Крок 3: Тестування', order: 3 },
              { name: 'Крок 1: Планування', order: 1 },
              { name: 'Крок 4: Деплой', order: 4 },
              { name: 'Крок 2: Розробка', order: 2 }
            ];
            sample.forEach(s => {
              const li = document.createElement('li');
              li.className = 'pill-badge';
              li.style.justifyContent = 'space-between';
              li.setAttribute('data-order', String(s.order));
              li.innerHTML = \`<span>\${s.name}</span><span style=\"font-family:var(--font-mono); color:var(--accent-violet);\">#\${s.order}</span>\`;
              ul.appendChild(li);
            });
            userFn(ul, 'data-order');
            return ul;
          }
          case 'paginateChildren': {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; width:100%;';
            for (let i = 1; i <= 6; i++) {
              const card = document.createElement('div');
              card.className = 'product-card';
              card.innerHTML = \`<span style=\"font-weight:700;\">Картка #\${i}</span><span style=\"font-size:11px; color:var(--smoke);\">Сторінка 1</span>\`;
              wrap.appendChild(card);
            }
            userFn(wrap, 3, 1);
            return wrap;
          }
          case 'batchUpdateStyles': {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'display:flex; gap:10px; width:100%;';
            const b1 = document.createElement('div');
            b1.textContent = 'Карточка A';
            const b2 = document.createElement('div');
            b2.textContent = 'Карточка B';
            wrap.appendChild(b1);
            wrap.appendChild(b2);
            userFn([b1, b2], {
              padding: '10px 18px',
              borderRadius: '8px',
              background: 'rgba(99, 102, 241, 0.2)',
              border: '1px solid #6366f1',
              color: '#ffffff',
              fontWeight: '700'
            });
            return wrap;
          }
          case 'extractTableData': {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'display:flex; flex-direction:column; gap:10px; width:100%;';
            const tbl = document.createElement('table');
            tbl.className = 'data-table';
            tbl.innerHTML = \`
              <thead><tr><th style=\"padding:6px 10px;\">name</th><th style=\"padding:6px 10px;\">level</th><th style=\"padding:6px 10px;\">tasks</th></tr></thead>
              <tbody>
                <tr><td style=\"padding:6px 10px;\">Loops Basics</td><td style=\"padding:6px 10px;\">Easy</td><td style=\"padding:6px 10px;\">25</td></tr>
                <tr><td style=\"padding:6px 10px;\">DOM Manipulation</td><td style=\"padding:6px 10px;\">Medium</td><td style=\"padding:6px 10px;\">36</td></tr>
              </tbody>
            \`;
            wrap.appendChild(tbl);
            const data = userFn(tbl);
            const pre = document.createElement('pre');
            pre.className = 'th-card-code';
            pre.textContent = '// Зчитані дані:\\n' + JSON.stringify(data, null, 2);
            wrap.appendChild(pre);
            return wrap;
          }
          case 'wrapConsecutiveElements': {
            const container = document.createElement('div');
            container.style.cssText = 'display:flex; flex-direction:column; gap:8px; width:100%;';
            for (let i = 1; i <= 4; i++) {
              const item = document.createElement('span');
              item.className = 'badge';
              item.style.background = '#6366f1';
              item.textContent = \`Елемент \${i}\`;
              container.appendChild(item);
            }
            userFn(container, 2, 'wizard-container');
            return container;
          }
          case 'animateElementsStagger': {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'display:flex; gap:8px; width:100%; overflow-x:auto; padding:8px 0;';
            for (let i = 1; i <= 5; i++) {
              const box = document.createElement('div');
              box.className = 'product-card animate-stagger';
              box.style.cssText = 'min-width:90px; text-align:center; padding:12px 8px; background:rgba(99,102,241,0.15); border:1px solid #6366f1; border-radius:8px;';
              box.innerHTML = \`<span style=\"font-weight:700;\">Блок #\${i}</span><div style=\"font-size:10px; color:var(--smoke);\">Stagger</div>\`;
              wrap.appendChild(box);
            }
            userFn(Array.from(wrap.children), 100);
            return wrap;
          }
          default:
            return null;
        }
      } catch (err) {
        console.warn('Live preview error:', err);
        return null;
      }
    }
`;

// Insert generateDomPreview before runSingleTaskTest
html = html.replace('function runSingleTaskTest()', generateDomPreviewCode + '\n    function runSingleTaskTest()');

// Update preview mounting in runSingleTaskTest
const oldMountPattern = `// Mount Live DOM Preview for DOM Modules (8, 9, 10)
        if (currentTask.moduleIdx >= 8) {
          const previewContainer = document.getElementById('domPreviewContainer');
          if (previewContainer) {
            previewContainer.innerHTML = '';
            if (lastActualResult instanceof Node) {
              previewContainer.appendChild(lastActualResult.cloneNode(true));
            } else if (typeof lastActualResult === 'object' && lastActualResult !== null) {
              const pre = document.createElement('pre');
              pre.style.cssText = 'margin:0; font-family:monospace; font-size:12px; max-height:180px; overflow:auto; color:var(--ink);';
              pre.textContent = JSON.stringify(lastActualResult, null, 2);
              previewContainer.appendChild(pre);
            } else if (lastActualResult !== null && lastActualResult !== undefined) {
              const span = document.createElement('div');
              span.style.cssText = 'font-size:13px; font-weight:600; color:var(--accent-violet);';
              span.textContent = 'Результат виклику: ' + String(lastActualResult);
              previewContainer.appendChild(span);
            } else {
              previewContainer.innerHTML = '<div style="color:var(--smoke); font-size:12.5px;">✓ Тести виконано (DOM-компонент оновлено)</div>';
            }
          }
        }`;

const newMountPattern = `// Mount Live DOM Component Preview for Modules 8, 9, 10
        if (currentTask.moduleIdx >= 8) {
          const previewContainer = document.getElementById('domPreviewContainer');
          if (previewContainer) {
            previewContainer.innerHTML = '';
            const previewEl = generateDomPreview(currentTask, userFn);
            if (previewEl instanceof Node) {
              previewContainer.appendChild(previewEl);
            } else if (lastActualResult instanceof Node) {
              previewContainer.appendChild(lastActualResult.cloneNode(true));
            } else {
              previewContainer.innerHTML = '<div style="color:var(--smoke); font-size:12.5px;">✓ Тести виконано (DOM-компонент перевірено)</div>';
            }
          }
        }`;

if (html.includes(oldMountPattern)) {
  html = html.replace(oldMountPattern, newMountPattern);
}

// Update selectTask to render preview immediately when a DOM task is selected
const oldSelectPv = `// Toggle Live DOM Component Preview for Modules 8, 9, 10
      const pvCard = document.getElementById('livePreviewCard');
      const pvMount = document.getElementById('domPreviewContainer');
      if (pvCard && pvMount) {
        if (task.moduleIdx >= 8) {
          pvCard.style.display = 'block';
          pvMount.innerHTML = '<div style="color:var(--smoke); font-size:12.5px;">Запустіть тест, щоб переглянути створений DOM-компонент наживо...</div>';
        } else {
          pvCard.style.display = 'none';
        }
      }`;

const newSelectPv = `// Toggle Live DOM Component Preview for Modules 8, 9, 10
      const pvCard = document.getElementById('livePreviewCard');
      const pvMount = document.getElementById('domPreviewContainer');
      if (pvCard && pvMount) {
        if (task.moduleIdx >= 8) {
          pvCard.style.display = 'block';
          try {
            const cleanCode = codeEditor.value.replace(/export\\s+default\\s+/g, '').replace(/export\\s+/g, '');
            const fnRunner = new Function(cleanCode + '\\nreturn ' + task.name + ';');
            const uFn = fnRunner();
            const pv = generateDomPreview(task, uFn);
            if (pv instanceof Node) {
              pvMount.innerHTML = '';
              pvMount.appendChild(pv);
            } else {
              pvMount.innerHTML = '<div style="color:var(--smoke); font-size:12.5px;">Натисніть \\"Запустити тест\\", щоб згенерувати DOM-компонент наживо...</div>';
            }
          } catch (_) {
            pvMount.innerHTML = '<div style="color:var(--smoke); font-size:12.5px;">Натисніть \\"Запустити тест\\", щоб згенерувати DOM-компонент наживо...</div>';
          }
        } else {
          pvCard.style.display = 'none';
        }
      }`;

if (html.includes(oldSelectPv)) {
  html = html.replace(oldSelectPv, newSelectPv);
}

// Replace the entire #theoryHandbookModal HTML with clean modern structure
const modalStartIdx = html.indexOf('<div class="modal-overlay" id="theoryHandbookModal"');
const modalEndIdx = html.indexOf('<!-- ==========================================\n     STANDALONE THEME & THEORY CONTROLLER');

if (modalStartIdx !== -1 && modalEndIdx !== -1) {
  const newModalHtml = `<div class="modal-overlay" id="theoryHandbookModal" style="display:none; z-index:10001;">
  <div class="modal-card" style="max-width:920px; width:94%; max-height:88vh; display:flex; flex-direction:column; overflow:hidden;">
    <div class="modal-header" style="display:flex; justify-content:space-between; align-items:center; padding:16px 20px;">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:22px;">📖</span>
        <div>
          <h3 style="margin:0; font-size:17px; font-weight:700;">Базова теорія: HTML, CSS та DOM API</h3>
          <span style="font-size:12px; color:var(--smoke);">Швидкий довідник концепцій та офіційна документація MDN</span>
        </div>
      </div>
      <button class="modal-close" id="closeTheoryHandbookBtn" style="background:none; border:none; font-size:24px; cursor:pointer;">&times;</button>
    </div>

    <!-- Search & Tabs Toolbar -->
    <div class="th-toolbar">
      <div style="display:flex; gap:8px;">
        <button class="th-tab-btn active" data-th-tab="dom">⚡ DOM API</button>
        <button class="th-tab-btn" data-th-tab="html">🌐 HTML5</button>
        <button class="th-tab-btn" data-th-tab="css">🎨 CSS3</button>
      </div>
      <input type="text" id="thSearchInput" class="th-search-input" placeholder="🔍 Пошук по темах...">
    </div>

    <!-- Scrollable Content -->
    <div style="padding:20px; overflow-y:auto; flex:1;" id="thContentArea">
      <!-- DOM TAB -->
      <div class="th-pane active" id="th-pane-dom">
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(360px, 1fr)); gap:16px;">
          
          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Створення та додавання вузлів</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              <code>document.createElement(tag)</code> створює новий елемент. Додавання в дерево: <code>parent.appendChild(el)</code>, <code>parent.prepend(el)</code>. Видалення: <code>el.remove()</code>.
            </p>
            <pre class="th-card-code">const btn = document.createElement('button');
btn.textContent = 'Натисни мене';
document.body.appendChild(btn);</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Пошук елементів у дереві</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              <code>querySelector(selector)</code> повертає перший знайдений елемент або null. <code>querySelectorAll(selector)</code> повертає NodeList (перебирається forEach або Array.from).
            </p>
            <pre class="th-card-code">const active = document.querySelector('.card.active');
const allBtns = document.querySelectorAll('button.tab');
allBtns.forEach(b => console.log(b.textContent));</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Обробка подій (Event Listeners)</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              <code>el.addEventListener(event, callback)</code> додає слухач. Популярні події: <code>'click'</code>, <code>'input'</code>, <code>'change'</code>, <code>'keydown'</code>, <code>'submit'</code>.
            </p>
            <pre class="th-card-code">inp.addEventListener('input', (e) => {
  console.log('Поточне значення:', e.target.value);
});</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Керування класами та стилями</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              <code>classList.add('cls')</code>, <code>remove('cls')</code>, <code>toggle('cls')</code>, <code>contains('cls')</code>. Inline стилі: <code>el.style.display = 'none'</code>.
            </p>
            <pre class="th-card-code">item.classList.toggle('selected');
item.style.backgroundColor = '#6366f1';</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Делегування подій (Event Delegation)</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              Замість навішування десятків слухачів на кожну кнопку, вішаємо один слухач на батьківський контейнер та шукаємо ціль через <code>e.target.closest(selector)</code>.
            </p>
            <pre class="th-card-code">parentList.addEventListener('click', (e) => {
  const btn = e.target.closest('.action-btn');
  if (btn) handleAction(btn.dataset.id);
});</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Ітерація по колекціях DOM</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/NodeList" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              Колекції <code>NodeList</code> підтримують цикл <code>for...of</code> та метод <code>.forEach()</code>. Для перетворення на справжній масив використовуйте <code>Array.from()</code>.
            </p>
            <pre class="th-card-code">const pills = document.querySelectorAll('.task-pill');
for (const pill of pills) {
  pill.classList.remove('active');
}
const names = Array.from(pills).map(p => p.textContent);</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Клієнтське сховище (LocalStorage API)</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              Синхронне збереження даних між перезавантаженнями вкладки. Зберігає рядки ключ/значення. Для об'єктів обов'язкові <code>JSON.stringify</code> та <code>JSON.parse</code>.
            </p>
            <pre class="th-card-code">localStorage.setItem('theme', 'dark');
const saved = JSON.parse(localStorage.getItem('progress') || '{}');
localStorage.removeItem('token');</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Data-атрибути (Dataset API)</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              Атрибути <code>data-*</code> у HTML автоматично транслюються у властивості об'єкта <code>el.dataset</code> (у формат camelCase).
            </p>
            <pre class="th-card-code">// HTML: &lt;div data-task-id="4.1"&gt;
const id = el.dataset.taskId; // "4.1"
el.dataset.status = 'passed'; // data-status="passed"</pre>
          </div>

        </div>
      </div>

      <!-- HTML TAB -->
      <div class="th-pane" id="th-pane-html" style="display:none;">
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(360px, 1fr)); gap:16px;">
          
          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Семантичні теги розмітки</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              Використовуйте <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code> замість безконтрольних <code>&lt;div&gt;</code>.
            </p>
            <pre class="th-card-code">&lt;nav class="navbar"&gt;
  &lt;a href="/"&gt;Головна&lt;/a&gt;
  &lt;a href="/tasks"&gt;Завдання&lt;/a&gt;
&lt;/nav&gt;</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">HTML Таблиці (&lt;table&gt;)</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              Таблична структура: <code>&lt;table&gt;</code>, <code>&lt;thead&gt;&lt;tr&gt;&lt;th&gt;</code> для заголовків, <code>&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;</code> для даних, <code>&lt;tfoot&gt;</code> для підсумків.
            </p>
            <pre class="th-card-code">&lt;table&gt;
  &lt;thead&gt;&lt;tr&gt;&lt;th&gt;Колонка&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
  &lt;tbody&gt;&lt;tr&gt;&lt;td&gt;Значення&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;
&lt;/table&gt;</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Елементи форм та вводу</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              <code>&lt;input type="text|checkbox|radio|number"&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;button&gt;</code>. Завжди пов'язуйте з <code>&lt;label for="..."&gt;</code>.
            </p>
            <pre class="th-card-code">&lt;label for="agree"&gt;Погоджуюсь&lt;/label&gt;
&lt;input type="checkbox" id="agree" /&gt;</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Доступність (a11y &amp; ARIA)</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              Забезпечує розуміння інтерфейсу користувачами скрінрідерів. Використовуйте <code>aria-label</code>, <code>aria-hidden="true"</code> для іконок та семантичні кнопки.
            </p>
            <pre class="th-card-code">&lt;button aria-label="Закрити модальне вікно"&gt;
  &lt;span aria-hidden="true"&gt;&amp;times;&lt;/span&gt;
&lt;/button&gt;</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Векторна графіка SVG</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/SVG" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              Векторна графіка у форматі XML. Ідеально масштабується на Retina без пікселізації. Складається з <code>&lt;rect&gt;</code>, <code>&lt;circle&gt;</code>, <code>&lt;path&gt;</code>, <code>&lt;polygon&gt;</code>.
            </p>
            <pre class="th-card-code">&lt;svg viewBox="0 0 100 100" width="80" height="80"&gt;
  &lt;circle cx="50" cy="50" r="40" stroke="#6366f1" fill="none"/&gt;
  &lt;text x="50" y="55" text-anchor="middle"&gt;JS&lt;/text&gt;
&lt;/svg&gt;</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Метатеги та ES-модулі</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              Тег <code>viewport</code> критичний для мобільних екранів. Підключення <code>&lt;script type="module"&gt;</code> виконується відкладено (deferred) з ізольованим контекстом.
            </p>
            <pre class="th-card-code">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;script type="module" src="./src/app.js"&gt;&lt;/script&gt;</pre>
          </div>

        </div>
      </div>

      <!-- CSS TAB -->
      <div class="th-pane" id="th-pane-css" style="display:none;">
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(360px, 1fr)); gap:16px;">
          
          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Flexbox Layout</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              <code>display: flex</code>, <code>justify-content: space-between|center</code>, <code>align-items: center</code>, <code>gap: 12px</code>, <code>flex-wrap: wrap</code>.
            </p>
            <pre class="th-card-code">.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">CSS Grid Layout</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              <code>display: grid</code>, <code>grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))</code>, <code>gap: 16px</code>. Ідеально для 2D сіток карток та матриць.
            </p>
            <pre class="th-card-code">.matrix-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">CSS Змінні (Custom Properties)</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              Оголошуються через <code>--ім'я: значення;</code> у <code>:root</code> або селекторі теми. Використовуються через <code>var(--ім'я)</code>.
            </p>
            <pre class="th-card-code">:root { --primary: #6366f1; }
[data-theme="dark"] { --bg: #090d16; }
body { background: var(--bg); }</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Адаптивність та Media Queries</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              Керування виглядом інтерфейсу для різних розмірів екранів та режимів друку через <code>@media</code> правила.
            </p>
            <pre class="th-card-code">@media (max-width: 768px) {
  .trainer-grid { grid-template-columns: 1fr; }
}
@media print {
  header, .tabs-bar { display: none !important; }
}</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Псевдокласи станів (:hover, :focus)</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              Стилізують елементи в залежності від дій користувача: наведення (<code>:hover</code>), доступність фокусу з клавіатури (<code>:focus-visible</code>) чи стан <code>:disabled</code>.
            </p>
            <pre class="th-card-code">.btn-pill:hover { transform: translateY(-1px); }
.btn-pill:focus-visible { outline: 2px solid #6366f1; }
.btn-pill:disabled { opacity: 0.5; cursor: not-allowed; }</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">CSS Transitions &amp; Анімації</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              Плавні переходи між станами. Властивості <code>transform</code> та <code>opacity</code> апаратно прискорюються графічним процесором (GPU) без перемальовування всієї сторінки.
            </p>
            <pre class="th-card-code">.task-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.task-card:hover {
  transform: translateY(-2px);
}</pre>
          </div>

          <div class="th-card">
            <div class="th-card-header">
              <h4 class="th-card-title">Сучасні математичні функції</h4>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp" target="_blank" rel="noopener" class="th-mdn-link">MDN ↗</a>
            </div>
            <p class="th-card-desc">
              <code>clamp(min, preferred, max)</code> забезпечує чутливу типографіку без медіа-запитів. Функції <code>min()</code>, <code>max()</code> та <code>calc()</code> динамічно обраховують розміри.
            </p>
            <pre class="th-card-code">.title {
  font-size: clamp(16px, 3vw, 28px);
  width: min(100% - 32px, 1200px);
}</pre>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>\n\n`;

  html = html.slice(0, modalStartIdx) + newModalHtml + html.slice(modalEndIdx);
}

// 4. Update standalone controller with tab switching & anti-copy protection
const oldControllerStart = `  // Theory Tab Switching
  document.querySelectorAll('.th-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.th-tab-btn').forEach(b => {
        b.style.background = 'rgba(255,255,255,0.06)';
        b.style.color = 'var(--text-main, #fff)';
        b.classList.remove('active');
      });
      btn.style.background = 'var(--color-primary, #3ecf8e)';
      btn.style.color = '#000';
      btn.classList.add('active');

      const targetTab = btn.dataset.thTab;
      document.querySelectorAll('.th-pane').forEach(p => p.style.display = 'none');
      const activePane = document.getElementById('th-pane-' + targetTab);
      if (activePane) activePane.style.display = 'block';
    });
  });`;

const newControllerStart = `  // Theory Tab Switching
  document.querySelectorAll('.th-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.th-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTab = btn.dataset.thTab;
      document.querySelectorAll('.th-pane').forEach(p => p.style.display = 'none');
      const activePane = document.getElementById('th-pane-' + targetTab);
      if (activePane) activePane.style.display = 'block';
    });
  });

  // Anti-Copy & Context Menu Protection for Task Conditions
  document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('#codeEditor, #certCodeEditor, input, textarea')) {
      return;
    }
    e.preventDefault();
  });

  document.addEventListener('copy', (e) => {
    if (e.target.closest('#codeEditor, #certCodeEditor, input, textarea')) {
      return;
    }
    const selection = window.getSelection().toString();
    if (selection) {
      e.preventDefault();
      showToast('🔒 Копіювання умов завдань захищено платформою.');
    }
  });`;

if (html.includes(oldControllerStart)) {
  html = html.replace(oldControllerStart, newControllerStart);
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('✅ index.html successfully patched!');

