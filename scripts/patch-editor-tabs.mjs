import fs from 'fs';

const filePath = '/Users/grabovsky/projects/js-loops-workout/index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add Prettier html & postcss plugins
const prettierHeadOld = `<script src="https://cdn.jsdelivr.net/npm/prettier@3.3.3/plugins/estree.js"></script>`;
const prettierHeadNew = `<script src="https://cdn.jsdelivr.net/npm/prettier@3.3.3/plugins/estree.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/prettier@3.3.3/plugins/html.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/prettier@3.3.3/plugins/postcss.js"></script>`;

if (!content.includes('prettier@3.3.3/plugins/html.js')) {
  content = content.replace(prettierHeadOld, prettierHeadNew);
  console.log('✓ Added Prettier HTML & PostCSS plugins');
}

// 2. Add CSS for editor file tabs
const cssInsertTarget = `.editor-filename {`;
const cssTabs = `    .editor-file-tabs {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: rgba(0, 0, 0, 0.05);
      padding: 3px 4px;
      border-radius: 8px;
      border: 1px solid var(--border-stone);
    }

    [data-theme="dark"] .editor-file-tabs {
      background: rgba(255, 255, 255, 0.04);
      border-color: #243048;
    }

    .editor-tab {
      padding: 3px 10px;
      font-size: 11.5px;
      font-family: var(--font-mono);
      font-weight: 600;
      border: 1px solid transparent;
      background: transparent;
      color: var(--smoke);
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.15s ease;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    .editor-tab:hover {
      color: var(--ink);
      background: rgba(0, 0, 0, 0.05);
    }

    [data-theme="dark"] .editor-tab:hover {
      color: #f8fafc;
      background: rgba(255, 255, 255, 0.08);
    }

    .editor-tab.active {
      background: #ffffff;
      color: #0f172a;
      border-color: #d1d5db;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    [data-theme="dark"] .editor-tab.active {
      background: #6366f1;
      color: #ffffff;
      border-color: #6366f1;
      box-shadow: 0 0 12px rgba(99, 102, 241, 0.4);
    }

    .editor-filename {`;

if (!content.includes('.editor-file-tabs {')) {
  content = content.replace(cssInsertTarget, cssTabs);
  console.log('✓ Added CSS for editor file tabs');
}

// 3. Update editor-topbar HTML
const topbarOld = `            <div class="editor-topbar">
              <div class="editor-filename">
                <span>📄</span>
                <span id="editorFilename">src/01-while-basics.js</span>
              </div>`;

const topbarNew = `            <div class="editor-topbar">
              <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                <div class="editor-filename">
                  <span id="editorFileIcon">📄</span>
                  <span id="editorFilename">src/01-while-basics.js</span>
                </div>
                <!-- File switcher tabs for DOM modules (8, 9, 10) -->
                <div class="editor-file-tabs" id="editorFileTabs" style="display:none;">
                  <button type="button" class="editor-tab active" data-file-tab="js">📄 script.js</button>
                  <button type="button" class="editor-tab" data-file-tab="html">🌐 index.html</button>
                  <button type="button" class="editor-tab" data-file-tab="css">🎨 style.css</button>
                </div>
              </div>`;

if (!content.includes('id="editorFileTabs"')) {
  content = content.replace(topbarOld, topbarNew);
  console.log('✓ Added editor file tabs to topbar HTML');
}

// 4. Update JS state
const stateOld = `    const userCodes = JSON.parse(localStorage.getItem('js_loops_codes') || '{}');`;
const stateNew = `    const userCodes = JSON.parse(localStorage.getItem('js_loops_codes') || '{}');
    const userHtmlCodes = JSON.parse(localStorage.getItem('js_loops_html_codes') || '{}');
    const userCssCodes = JSON.parse(localStorage.getItem('js_loops_css_codes') || '{}');
    let currentEditorTab = 'js';

    function getStarterHtml(task) {
      return \`<!-- index.html: Підготуйте базову розмітку для завдання \${task.id} (\${task.name}) -->
<div class="task-sandbox" id="taskSandbox">
  <!-- TODO: додайте сюди необхідні HTML-елементи: div, p, ul, table тощо -->
</div>
\`;
    }

    function getStarterCss(task) {
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

if (!content.includes('const userHtmlCodes =')) {
  content = content.replace(stateOld, stateNew);
  console.log('✓ Added HTML/CSS state and template generators');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('File successfully updated with initial blocks');

