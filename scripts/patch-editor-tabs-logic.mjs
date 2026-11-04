import fs from 'fs';

const filePath = '/Users/grabovsky/projects/js-loops-workout/index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update formatCurrentCode() to support JS, HTML, CSS
const oldFormat = `    // Prettier Formatting
    async function formatCurrentCode() {
      if (!window.prettier || !window.prettierPlugins || !window.prettierPlugins.babel) {
        showToast('Prettier ще завантажується...');
        return;
      }
      try {
        const plugins = [window.prettierPlugins.babel];
        if (window.prettierPlugins.estree) plugins.push(window.prettierPlugins.estree);
        const formatted = await window.prettier.format(codeEditor.value, {
          parser: 'babel',
          plugins: plugins,
          semi: true,
          singleQuote: true,
          tabWidth: 2
        });
        codeEditor.value = formatted;
        saveCurrentCode();
        showToast('✨ Код успішно відформатовано!');
      } catch (err) {
        showToast('Помилка синтаксису: ' + err.message);
      }
    }`;

const newFormat = `    // Prettier Formatting
    async function formatCurrentCode() {
      if (!window.prettier || !window.prettierPlugins) {
        showToast('Prettier ще завантажується...');
        return;
      }
      try {
        let parser = 'babel';
        let plugins = [window.prettierPlugins.babel];
        if (window.prettierPlugins.estree) plugins.push(window.prettierPlugins.estree);

        if (currentEditorTab === 'html' && window.prettierPlugins.html) {
          parser = 'html';
          plugins = [window.prettierPlugins.html];
        } else if (currentEditorTab === 'css' && window.prettierPlugins.postcss) {
          parser = 'css';
          plugins = [window.prettierPlugins.postcss];
        }

        const formatted = await window.prettier.format(codeEditor.value, {
          parser,
          plugins,
          semi: true,
          singleQuote: true,
          tabWidth: 2
        });
        codeEditor.value = formatted;
        saveCurrentCode();
        showToast(\`✨ \${currentEditorTab.toUpperCase()} успішно відформатовано!\`);
      } catch (err) {
        showToast('Помилка форматування: ' + err.message);
      }
    }`;

content = content.replace(oldFormat, newFormat);
console.log('✓ Updated formatCurrentCode');

// 2. Update saveCurrentCode()
const oldSave = `    function saveCurrentCode() {
      userCodes[currentTask.id] = codeEditor.value;
      localStorage.setItem('js_loops_codes', JSON.stringify(userCodes));
      saveNotice.classList.add('visible');
      setTimeout(() => saveNotice.classList.remove('visible'), 1200);
    }`;

const newSave = `    function saveCurrentCode() {
      if (currentEditorTab === 'js') {
        userCodes[currentTask.id] = codeEditor.value;
        localStorage.setItem('js_loops_codes', JSON.stringify(userCodes));
      } else if (currentEditorTab === 'html') {
        userHtmlCodes[currentTask.id] = codeEditor.value;
        localStorage.setItem('js_loops_html_codes', JSON.stringify(userHtmlCodes));
      } else if (currentEditorTab === 'css') {
        userCssCodes[currentTask.id] = codeEditor.value;
        localStorage.setItem('js_loops_css_codes', JSON.stringify(userCssCodes));
      }
      saveNotice.classList.add('visible');
      setTimeout(() => saveNotice.classList.remove('visible'), 1200);

      if (currentTask && currentTask.moduleIdx >= 8 && (currentEditorTab === 'html' || currentEditorTab === 'css')) {
        renderFullLivePreview(currentTask);
      }
    }

    function switchEditorTab(targetTab) {
      if (currentEditorTab === targetTab) return;
      // Save current tab before switching
      if (currentEditorTab === 'js') {
        userCodes[currentTask.id] = codeEditor.value;
        localStorage.setItem('js_loops_codes', JSON.stringify(userCodes));
      } else if (currentEditorTab === 'html') {
        userHtmlCodes[currentTask.id] = codeEditor.value;
        localStorage.setItem('js_loops_html_codes', JSON.stringify(userHtmlCodes));
      } else if (currentEditorTab === 'css') {
        userCssCodes[currentTask.id] = codeEditor.value;
        localStorage.setItem('js_loops_css_codes', JSON.stringify(userCssCodes));
      }

      currentEditorTab = targetTab;
      document.querySelectorAll('.editor-tab').forEach(b => {
        b.classList.toggle('active', b.dataset.fileTab === targetTab);
      });

      const mod = MODULES.find(m => m.idx === currentTask.moduleIdx);
      const editorFileIcon = document.getElementById('editorFileIcon');

      if (targetTab === 'js') {
        editorFilename.textContent = \`src/\${mod ? mod.filename : 'task.js'}\`;
        if (editorFileIcon) editorFileIcon.textContent = '📄';
        codeEditor.value = userCodes[currentTask.id] !== undefined
          ? userCodes[currentTask.id]
          : \`export function \${currentTask.name}(\${currentTask.starterParams}) {\\n  // TODO: напишіть вашу реалізацію тут\\n  \${currentTask.starterBody}\\n}\`;
      } else if (targetTab === 'html') {
        editorFilename.textContent = 'index.html';
        if (editorFileIcon) editorFileIcon.textContent = '🌐';
        codeEditor.value = userHtmlCodes[currentTask.id] !== undefined
          ? userHtmlCodes[currentTask.id]
          : getStarterHtml(currentTask);
      } else if (targetTab === 'css') {
        editorFilename.textContent = 'style.css';
        if (editorFileIcon) editorFileIcon.textContent = '🎨';
        codeEditor.value = userCssCodes[currentTask.id] !== undefined
          ? userCssCodes[currentTask.id]
          : getStarterCss(currentTask);
      }
      codeEditor.focus();
    }

    document.querySelectorAll('.editor-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        switchEditorTab(btn.dataset.fileTab);
      });
    });`;

content = content.replace(oldSave, newSave);
console.log('✓ Updated saveCurrentCode & switchEditorTab');

// 3. Update selectTask(task)
const oldSelectTaskRegex = /function selectTask\(task\) \{[\s\S]*?updateProgress\(\);\s*\}/;
const newSelectTask = `function selectTask(task) {
      currentTask = task;
      currentModuleIdx = task.moduleIdx;
      const mod = MODULES.find(m => m.idx === task.moduleIdx);
      activeModuleTitle.textContent = mod ? mod.title : '';

      taskIdBadge.textContent = task.id;
      taskTitle.textContent = task.name + ' — ' + task.title;
      taskLevelBadge.textContent = task.level;
      taskGoal.textContent = task.goal;

      taskReqs.innerHTML = task.reqs.map(r => \`<li>\${r}</li>\`).join('');
      taskHintContent.innerHTML = task.hint;

      // Handle Editor File Tabs for DOM modules 8, 9, 10
      const editorFileTabs = document.getElementById('editorFileTabs');
      const editorFileIcon = document.getElementById('editorFileIcon');

      if (task.moduleIdx >= 8) {
        if (editorFileTabs) editorFileTabs.style.display = 'inline-flex';
      } else {
        if (editorFileTabs) editorFileTabs.style.display = 'none';
        currentEditorTab = 'js';
      }

      document.querySelectorAll('.editor-tab').forEach(b => {
        b.classList.toggle('active', b.dataset.fileTab === currentEditorTab);
      });

      // Load code buffer for currentEditorTab
      if (currentEditorTab === 'js') {
        editorFilename.textContent = \`src/\${mod ? mod.filename : 'task.js'}\`;
        if (editorFileIcon) editorFileIcon.textContent = '📄';
        if (userCodes[task.id]) {
          codeEditor.value = userCodes[task.id];
        } else {
          codeEditor.value = \`export function \${task.name}(\${task.starterParams}) {\\n  // TODO: напишіть вашу реалізацію тут\\n  \${task.starterBody}\\n}\`;
        }
      } else if (currentEditorTab === 'html') {
        editorFilename.textContent = 'index.html';
        if (editorFileIcon) editorFileIcon.textContent = '🌐';
        codeEditor.value = userHtmlCodes[task.id] !== undefined
          ? userHtmlCodes[task.id]
          : getStarterHtml(task);
      } else if (currentEditorTab === 'css') {
        editorFilename.textContent = 'style.css';
        if (editorFileIcon) editorFileIcon.textContent = '🎨';
        codeEditor.value = userCssCodes[task.id] !== undefined
          ? userCssCodes[task.id]
          : getStarterCss(task);
      }

      // Live DOM Component Preview for Modules 8, 9, 10
      const pvCard = document.getElementById('livePreviewCard');
      if (pvCard) {
        if (task.moduleIdx >= 8) {
          pvCard.style.display = 'block';
          renderFullLivePreview(task);
        } else {
          pvCard.style.display = 'none';
        }
      }

      consoleBody.innerHTML = '<div style="color:#6e7687;">Натисніть "Запустити тест" або комбінацію Ctrl + Enter для перевірки коду.</div>';
      testSummaryStatus.textContent = 'Очікує запуску';
      testSummaryStatus.style.color = '#9ba1b0';

      if (decryptedSolutionsCache && decryptedSolutionsCache[task.id]) {
        renderTeacherGuide(task.id);
      }

      renderQuickTaskPills();
      updateProgress();
    }`;

content = content.replace(oldSelectTaskRegex, newSelectTask);
console.log('✓ Updated selectTask');

// 4. Add renderFullLivePreview before runSingleTaskTest
const oldRunSingleTestHead = `    function runSingleTaskTest() {\n      const code = codeEditor.value;`;
const newRunSingleTestHead = `    function renderFullLivePreview(task, userFn = null, fallbackNode = null) {
      const pvMount = document.getElementById('domPreviewContainer');
      if (!pvMount) return;
      pvMount.innerHTML = '';

      // 1. Inject custom CSS from style.css
      const customCss = userCssCodes[task.id] || '';
      const styleEl = document.createElement('style');
      styleEl.id = 'studentCustomStyles';
      styleEl.textContent = customCss;
      pvMount.appendChild(styleEl);

      // 2. Inject custom HTML from index.html if user provided markup
      const rawHtml = userHtmlCodes[task.id] || '';
      const cleanedHtml = rawHtml.replace(/<!--[\\s\\S]*?-->/g, '').trim();
      if (cleanedHtml) {
        const htmlWrapper = document.createElement('div');
        htmlWrapper.className = 'student-custom-html-wrapper';
        htmlWrapper.style.cssText = 'margin-bottom:12px; padding:10px 14px; border:1px dashed var(--border-stone); border-radius:8px; background:rgba(0,0,0,0.02);';
        htmlWrapper.innerHTML = \`
          <div style="font-size:11px; text-transform:uppercase; font-weight:700; color:var(--smoke); margin-bottom:8px;">🌐 Розмітка index.html:</div>
          <div class="student-custom-html-mount">\${cleanedHtml}</div>
        \`;
        pvMount.appendChild(htmlWrapper);
      }

      // 3. Resolve user function if not provided
      let fn = userFn;
      if (!fn) {
        const jsCode = (currentEditorTab === 'js')
          ? codeEditor.value
          : (userCodes[task.id] || '');
        if (jsCode) {
          try {
            const cleanCode = jsCode.replace(/export\\s+default\\s+/g, '').replace(/export\\s+/g, '');
            const fnRunner = new Function(cleanCode + '\\nreturn ' + task.name + ';');
            fn = fnRunner();
          } catch (_) {}
        }
      }

      // 4. Generate component preview from JS
      if (typeof fn === 'function') {
        try {
          const pv = generateDomPreview(task, fn);
          if (pv instanceof Node) {
            const jsWrapper = document.createElement('div');
            jsWrapper.className = 'student-js-component-wrapper';
            jsWrapper.appendChild(pv);
            pvMount.appendChild(jsWrapper);
            return;
          }
        } catch (_) {}
      }

      if (fallbackNode instanceof Node) {
        const jsWrapper = document.createElement('div');
        jsWrapper.className = 'student-js-component-wrapper';
        jsWrapper.appendChild(fallbackNode.cloneNode(true));
        pvMount.appendChild(jsWrapper);
        return;
      }

      if (!cleanedHtml) {
        const placeholder = document.createElement('div');
        placeholder.style.cssText = 'color:var(--smoke); font-size:12.5px;';
        placeholder.textContent = 'Натисніть "Запустити тест", щоб згенерувати DOM-компонент наживо...';
        pvMount.appendChild(placeholder);
      }
    }

    function runSingleTaskTest() {
      const code = (currentEditorTab === 'js')
        ? codeEditor.value
        : (userCodes[currentTask.id] || \`export function \${currentTask.name}(\${currentTask.starterParams}) {\\n  \${currentTask.starterBody}\\n}\`);`;

content = content.replace(oldRunSingleTestHead, newRunSingleTestHead);
console.log('✓ Added renderFullLivePreview and updated runSingleTaskTest head');

// 5. Update preview mounting inside runSingleTaskTest
const oldMountBlockRegex = /\/\/ Mount Live DOM Component Preview for Modules 8, 9, 10[\s\S]*?if \(previewContainer\) \{[\s\S]*?\}\s*\}\s*\}/;
const newMountBlock = `// Mount Live DOM Component Preview for Modules 8, 9, 10
        if (currentTask.moduleIdx >= 8) {
          renderFullLivePreview(currentTask, userFn, lastActualResult);
        }
      }`;

content = content.replace(oldMountBlockRegex, newMountBlock);
console.log('✓ Updated live preview mounting inside runSingleTaskTest');

// 6. Update pasteTeacherSolution to handle tab switching
const oldPasteRegex = /function pasteTeacherSolution\(\) \{[\s\S]*?codeEditor\.value = `export function[\s\S]*?saveCurrentCode\(\);\s*showToast\('💡 Еталонне рішення вставлено \(Режим ментора\)\.'\);\s*\}/;
const newPaste = `function pasteTeacherSolution() {
      if (!decryptedSolutionsCache || !decryptedSolutionsCache[currentTask.id]) {
        showToast('Потрібна авторизація викладача');
        openTeacherModal();
        return;
      }
      const data = decryptedSolutionsCache[currentTask.id];
      const code = typeof data === 'object' && data.code ? data.code : data;
      if (confirm('Підставити еталонне рішення? Це замінить ваш поточний код.')) {
        if (currentEditorTab !== 'js') {
          switchEditorTab('js');
        }
        codeEditor.value = \`export function \${currentTask.name}(\${currentTask.starterParams}) {\\n  \${code}\\n}\`;
        saveCurrentCode();
        showToast('💡 Еталонне рішення вставлено (Режим ментора).');
        if (currentTask.moduleIdx >= 8) {
          renderFullLivePreview(currentTask);
        }
      }
    }`;

content = content.replace(oldPasteRegex, newPaste);
console.log('✓ Updated pasteTeacherSolution');

// 7. Update resetCurrentTaskBtn & resetAllBtn
const oldResetCurrent = `    // Reset current task
    document.getElementById('resetCurrentTaskBtn').addEventListener('click', () => {
      if (confirm('Скинути код цього завдання до початкового шаблону?')) {
        delete userCodes[currentTask.id];
        localStorage.setItem('js_loops_codes', JSON.stringify(userCodes));
        selectTask(currentTask);
        showToast('Код завдання скинуто.');
      }
    });

    // Reset all tasks
    document.getElementById('resetAllBtn').addEventListener('click', () => {
      if (confirm('Скинути весь прогрес і всі збережені розвʼязки?')) {
        localStorage.removeItem('js_loops_codes');
        localStorage.removeItem('js_loops_completed');
        location.reload();
      }
    });`;

const newResetCurrent = `    // Reset current task
    document.getElementById('resetCurrentTaskBtn').addEventListener('click', () => {
      if (currentEditorTab === 'js') {
        if (confirm('Скинути JavaScript-код цього завдання до початкового шаблону?')) {
          delete userCodes[currentTask.id];
          localStorage.setItem('js_loops_codes', JSON.stringify(userCodes));
          codeEditor.value = \`export function \${currentTask.name}(\${currentTask.starterParams}) {\\n  // TODO: напишіть вашу реалізацію тут\\n  \${currentTask.starterBody}\\n}\`;
          showToast('JS-код завдання скинуто.');
          if (currentTask.moduleIdx >= 8) renderFullLivePreview(currentTask);
        }
      } else if (currentEditorTab === 'html') {
        if (confirm('Скинути HTML-розмітку цього завдання до початкового шаблону?')) {
          delete userHtmlCodes[currentTask.id];
          localStorage.setItem('js_loops_html_codes', JSON.stringify(userHtmlCodes));
          codeEditor.value = getStarterHtml(currentTask);
          showToast('HTML-розмітку завдання скинуто.');
          if (currentTask.moduleIdx >= 8) renderFullLivePreview(currentTask);
        }
      } else if (currentEditorTab === 'css') {
        if (confirm('Скинути CSS-стилі цього завдання до початкового шаблону?')) {
          delete userCssCodes[currentTask.id];
          localStorage.setItem('js_loops_css_codes', JSON.stringify(userCssCodes));
          codeEditor.value = getStarterCss(currentTask);
          showToast('CSS-стилі завдання скинуто.');
          if (currentTask.moduleIdx >= 8) renderFullLivePreview(currentTask);
        }
      }
    });

    // Reset all tasks
    document.getElementById('resetAllBtn').addEventListener('click', () => {
      if (confirm('Скинути весь прогрес і всі збережені розвʼязки, HTML та CSS?')) {
        localStorage.removeItem('js_loops_codes');
        localStorage.removeItem('js_loops_html_codes');
        localStorage.removeItem('js_loops_css_codes');
        localStorage.removeItem('js_loops_completed');
        location.reload();
      }
    });`;

content = content.replace(oldResetCurrent, newResetCurrent);
console.log('✓ Updated resetCurrentTaskBtn and resetAllBtn');

fs.writeFileSync(filePath, content, 'utf8');
console.log('All logic successfully patched in index.html!');

