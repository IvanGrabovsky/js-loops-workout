import fs from 'fs';

const filePath = '/Users/grabovsky/projects/js-loops-workout/index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Define getTaskReferenceTemplates
const referenceTemplatesCode = `    // Reference HTML & CSS templates for DOM tasks in Mentor Mode
    function getTaskReferenceTemplates(task) {
      const templates = {
        '8.1': {
          html: \`<!-- index.html: Контейнер для вітрини товарів -->
<div class="products-catalog-wrapper">
  <h3 class="catalog-heading">🛍️ Каталог товарів</h3>
  <div id="productsCatalog"></div>
</div>\`,
          css: \`/* style.css: Стилі сітки та карток товарів */
.product-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 12px;
}
.product-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}
.product-card__title {
  font-size: 15px;
  font-weight: 600;
  color: #f8fafc;
}
.product-card__price {
  font-size: 14px;
  font-weight: 700;
  color: #10b981;
}\`
        },
        '8.2': {
          html: \`<!-- index.html: Віджет рейтингу товару -->
<div class="rating-widget-box">
  <div class="rating-title">Оцінка покупців:</div>
  <div id="starRatingMount"></div>
</div>\`,
          css: \`/* style.css: Стилізація зірочок рейтингу */
.star-rating {
  display: inline-flex;
  gap: 4px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
}
.star {
  font-size: 20px;
  line-height: 1;
}
.star--filled {
  color: #f59e0b;
  filter: drop-shadow(0 0 3px rgba(245, 158, 11, 0.5));
}
.star--empty {
  color: #64748b;
}\`
        },
        '8.4': {
          html: \`<!-- index.html: Панель статусів замовлень -->
<div class="orders-status-board">
  <h4>Статуси замовлень:</h4>
  <div id="statusBadgesMount"></div>
</div>\`,
          css: \`/* style.css: Бейджі статусів */
.badge-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 0;
}
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
}
.badge--success { background: #10b981; color: #fff; }
.badge--warning { background: #f59e0b; color: #fff; }
.badge--danger { background: #ef4444; color: #fff; }
.badge--neutral { background: #6b7280; color: #fff; }\`
        },
        '9.1': {
          html: \`<!-- index.html: Таблиця аналітики -->
<div class="data-table-section">
  <h3>📊 Звіт з продажів</h3>
  <div id="dataTableMount"></div>
</div>\`,
          css: \`/* style.css: Стилі таблиці даних */
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  border-radius: 8px;
  overflow: hidden;
}
.data-table th {
  background: rgba(99, 102, 241, 0.2);
  color: #e0e7ff;
  padding: 10px 14px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.data-table td {
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}\`
        },
        '9.3': {
          html: \`<!-- index.html: Шахівниця -->
<div class="chess-game-container">
  <h3>♟️ Шахова дошка</h3>
  <div id="chessBoardMount"></div>
</div>\`,
          css: \`/* style.css: Стилі шахівниці */
.chess-board {
  display: grid;
  grid-template-columns: repeat(8, 40px);
  grid-template-rows: repeat(8, 40px);
  border: 3px solid #6366f1;
  border-radius: 4px;
  width: fit-content;
}
.chess-cell {
  width: 40px;
  height: 40px;
}
.chess-cell--white { background-color: #f0d9b5; }
.chess-cell--black { background-color: #b58863; }\`
        },
        '10.1': {
          html: \`<!-- index.html: Зебра-таблиця замовлень -->
<div class="table-card">
  <table class="striped-table" id="ordersTable">
    <thead>
      <tr>
        <th>№</th>
        <th>Клієнт</th>
        <th>Статус</th>
        <th>Сума</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>Олександр</td><td>Оплачено</td><td>1 200 ₴</td></tr>
      <tr><td>2</td><td>Марія</td><td>В дорозі</td><td>850 ₴</td></tr>
      <tr><td>3</td><td>Богдан</td><td>Очікує</td><td>2 400 ₴</td></tr>
      <tr><td>4</td><td>Олена</td><td>Доставлено</td><td>620 ₴</td></tr>
    </tbody>
  </table>
</div>\`,
          css: \`/* style.css: Стилі зебра-таблиці */
.striped-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
}
.striped-table th {
  background: rgba(99, 102, 241, 0.2);
  color: #e0e7ff;
  padding: 10px 14px;
  text-align: left;
  font-size: 12px;
}
.striped-table td {
  padding: 10px 14px;
  font-size: 13px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.table-row--striped {
  background-color: rgba(255, 255, 255, 0.04);
}\`
        },
        '10.9': {
          html: \`<!-- index.html: Елементи для масового оновлення стилів -->
<div class="batch-demo-wrapper">
  <div class="batch-target-card">Картка №1</div>
  <div class="batch-target-card">Картка №2</div>
  <div class="batch-target-card">Картка №3</div>
</div>\`,
          css: \`/* style.css: Стилі пакетно оновлюваних карток */
.batch-demo-wrapper {
  display: flex;
  gap: 12px;
  padding: 12px;
}
.batch-target-card {
  padding: 12px 20px;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid #6366f1;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 600;
  transition: all 0.2s ease;
}\`
        }
      };

      if (templates[task.id]) {
        return templates[task.id];
      }

      // Default contextual reference template
      return {
        html: \`<!-- index.html: Еталонна розмітка для завдання \${task.id} (\${task.name}) -->
<div class="component-sandbox" id="componentSandbox">
  <!-- Контейнер для візуалізації результатів функції \${task.name} -->
  <div class="sandbox-header">
    <h4>Компонент: \${task.title}</h4>
  </div>
  <div class="sandbox-content"></div>
</div>\`,
        css: \`/* style.css: Еталонні стилі для завдання \${task.id} (\${task.name}) */
.component-sandbox {
  padding: 14px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.sandbox-header h4 {
  margin: 0;
  font-size: 14px;
  color: #818cf8;
}
.sandbox-content {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}\`
      };
    }`;

// Insert getTaskReferenceTemplates right after getStarterCss
const targetAfterStarterCss = `    function getStarterCss(task) {
      return \`/* styles.css: Стилізуйте елементи для завдання \${task.id} (\${task.name}) */
.task-sandbox {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
}

/* Приклад додаткових стилів: */
/* .badge { padding: 4px 8px; border-radius: 4px; } */
/* .card { border: 1px solid rgba(255, 255, 255, 0.1); } */
\`;
    }`;

if (!content.includes('function getTaskReferenceTemplates')) {
  content = content.replace(targetAfterStarterCss, targetAfterStarterCss + '\n\n' + referenceTemplatesCode);
  console.log('✓ Added getTaskReferenceTemplates');
}

// 2. Update pasteTeacherSolution() to update all files (JS, HTML, CSS) and respect active tab
const oldPasteFunctionRegex = /function pasteTeacherSolution\(\) \{[\s\S]*?renderFullLivePreview\(currentTask\);\s*\}\s*\}\s*\}/;

const newPasteFunction = `function pasteTeacherSolution() {
      if (!decryptedSolutionsCache || !decryptedSolutionsCache[currentTask.id]) {
        showToast('Потрібна авторизація викладача');
        openTeacherModal();
        return;
      }
      const data = decryptedSolutionsCache[currentTask.id];
      const code = typeof data === 'object' && data.code ? data.code : data;
      const isDomTask = currentTask.moduleIdx >= 8;

      const confirmMsg = isDomTask
        ? 'Підставити повне еталонне рішення (JavaScript, HTML та CSS)?'
        : 'Підставити еталонне рішення? Це замінить ваш поточний код.';

      if (confirm(confirmMsg)) {
        // 1. Set JS solution
        userCodes[currentTask.id] = \`export function \${currentTask.name}(\${currentTask.starterParams}) {\\n  \${code}\\n}\`;
        localStorage.setItem('js_loops_codes', JSON.stringify(userCodes));

        // 2. If DOM task, also set tailored reference HTML and CSS!
        if (isDomTask) {
          const ref = getTaskReferenceTemplates(currentTask);
          userHtmlCodes[currentTask.id] = ref.html;
          userCssCodes[currentTask.id] = ref.css;
          localStorage.setItem('js_loops_html_codes', JSON.stringify(userHtmlCodes));
          localStorage.setItem('js_loops_css_codes', JSON.stringify(userCssCodes));
        }

        // 3. Update the editor to show the code of CURRENT active tab!
        if (currentEditorTab === 'js') {
          codeEditor.value = userCodes[currentTask.id];
        } else if (currentEditorTab === 'html') {
          codeEditor.value = userHtmlCodes[currentTask.id];
        } else if (currentEditorTab === 'css') {
          codeEditor.value = userCssCodes[currentTask.id];
        }

        saveNotice.classList.add('visible');
        setTimeout(() => saveNotice.classList.remove('visible'), 1200);

        showToast(isDomTask
          ? '💡 Еталонні файли (JS, HTML, CSS) успішно підставлено!'
          : '💡 Еталонне рішення вставлено (Режим ментора).');

        if (isDomTask) {
          renderFullLivePreview(currentTask);
        }
      }
    }`;

content = content.replace(oldPasteFunctionRegex, newPasteFunction);
console.log('✓ Updated pasteTeacherSolution');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully saved index.html!');

