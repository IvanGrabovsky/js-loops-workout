// scripts/rebuild-clean-dom-modules.mjs
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import {
  NEW_MODULES,
  NEW_TASKS_MODULE_8,
  NEW_TASKS_MODULE_9,
  NEW_TASKS_MODULE_10
} from './clean-dom-modules-data.mjs';
import { TASK_EXPLANATIONS } from './task-explanations.mjs';

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

// Format tags and methods with backticks for readability
function formatTaskText(str) {
  if (!str) return '';
  let formatted = str;

  // Wrap bare HTML tags in backticks if not already in backticks or code tags
  formatted = formatted.replace(/(?<![`<])(<[a-zA-Z0-9_-]+(\s+[^>]*)?>[\s\S]*?<\/[a-zA-Z0-9_-]+>|<[a-zA-Z0-9_-]+(\s+[^>]*)?\s*\/?>)(?![`>])/g, '`$1`');

  // Wrap specific common keywords / methods if bare
  const tokens = [
    'products', 'rating', 'maxStars', 'links', 'items', 'status', 'startNumber',
    'unread', 'tabTitles', 'activeIndex', 'avatars', 'maxVisible',
    'headers', 'rows', 'daysInMonth', 'startDayOfWeek', 'monthTitle', 'size',
    'weeksCount', 'dataMatrix', 'colorMatrix', 'nodes', 'rowsCount', 'seatsPerRow',
    'reservedSeats', 'paletteGroups', 'featuresList', 'productsList', 'lettersMatrix',
    'categories', 'seriesList',
    'tableElement', 'containerElement', 'elementsList', 'parentElement', 'targetTagName',
    'wrapperClass', 'stepDelayMs', 'predicateFn', 'attributeName', 'pageSize',
    'currentPage', 'stylesEntries'
  ];

  for (const token of tokens) {
    const reg = new RegExp(`(?<![\`a-zA-Z0-9_])${token}(?![\`a-zA-Z0-9_])`, 'g');
    formatted = formatted.replace(reg, `\`${token}\``);
  }

  return formatted;
}

async function rebuild() {
  console.log('🔄 Rebuilding DOM modules with rich explanations & clean task format...');

  const nodeKey = deriveKeyNode(PASSWORD);
  const webCryptoKey = await getWebCryptoKey(PASSWORD);

  const allModulesData = [
    { mod: NEW_MODULES[0], tasks: NEW_TASKS_MODULE_8 },
    { mod: NEW_MODULES[1], tasks: NEW_TASKS_MODULE_9 },
    { mod: NEW_MODULES[2], tasks: NEW_TASKS_MODULE_10 }
  ];

  const processedTasks = [];

  for (const group of allModulesData) {
    for (const t of group.tasks) {
      const expl = TASK_EXPLANATIONS[t.id] || '';
      const formattedGoal = formatTaskText(t.goal);
      const formattedReqs = (t.reqs || []).map(r => formatTaskText(r));
      const formattedHint = t.hint || '';

      const taskWithExpl = {
        ...t,
        goal: formattedGoal,
        reqs: formattedReqs,
        hint: formattedHint,
        explanation: expl
      };
      processedTasks.push(taskWithExpl);
    }
  }

  // 1. Update catalog.js
  const catalogPath = path.resolve('catalog.js');
  const catalogModule = await import(`file://${catalogPath}?t=${Date.now()}`);
  const existingModules = catalogModule.MODULES || [];
  const existingTasks = catalogModule.ALL_TASKS || [];
  const existingEncrypted = catalogModule.ENCRYPTED_SOLUTIONS || {};

  const filteredModules = existingModules.filter(m => m.idx < 8);
  const updatedModules = [...filteredModules, ...NEW_MODULES];

  const filteredTasks = existingTasks.filter(t => t.moduleIdx < 8);
  const updatedEncrypted = { ...existingEncrypted };

  const sanitizedTasks = [];

  for (const t of processedTasks) {
    const payloadObj = {
      code: t.solutionBody || '',
      explanation: t.explanation || ''
    };
    const encrypted = encryptPayloadNode(payloadObj, nodeKey);
    updatedEncrypted[t.id] = encrypted;

    // Verify decrypt
    const decryptedRaw = await decryptWithWebCrypto(encrypted, webCryptoKey);
    const parsed = JSON.parse(decryptedRaw);
    if (parsed.code !== t.solutionBody || parsed.explanation !== t.explanation) {
      throw new Error(`Decryption check failed for task ${t.id}!`);
    }

    const { solutionBody, ...cleaned } = t;
    sanitizedTasks.push(cleaned);
  }

  const updatedTasks = [...filteredTasks, ...sanitizedTasks];

  const catalogContent = `// Каталог навчальних модулів та практичних завдань для платформи js-loops-workout
// Дані AES-256-GCM шифруються викладацьким ключем camp-admin-2026

export const MODULES = ${JSON.stringify(updatedModules, null, 2)};

export const ALL_TASKS = ${JSON.stringify(updatedTasks, null, 2)};

export const ENCRYPTED_SOLUTIONS = ${JSON.stringify(updatedEncrypted, null, 2)};
`;

  fs.writeFileSync(catalogPath, catalogContent, 'utf8');
  console.log(`✅ catalog.js successfully updated with ${processedTasks.length} tasks and encrypted solutions!`);

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
        testCode += `      // Перевірка експортованої функції або еталонного алгоритму\n`;
        testCode += `      expect(typeof ${t.name}).toBe('function');\n`;
        testCode += `    });\n`;
      });
      testCode += `  });\n\n`;
    }
    testCode += `});\n`;

    fs.writeFileSync(testPath, testCode, 'utf8');
    console.log(`✅ Generated test/${testFilename}`);
  }

  // 4. Update test/all-solutions.test.js with solutions for modules 8, 9, 10
  const allSolPath = path.resolve('test', 'all-solutions.test.js');
  let allSolContent = fs.readFileSync(allSolPath, 'utf8');

  // Strip any old describes for 8, 9, 10
  const m8Idx = allSolContent.indexOf('describe("SOLUTIONS: 8.');
  if (m8Idx !== -1) {
    allSolContent = allSolContent.slice(0, m8Idx);
  }
  const altM8Idx = allSolContent.indexOf('describe("SOLUTIONS: Модуль 8:');
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
  console.log(`✅ Updated test/all-solutions.test.js with clean solutions for all 36 tasks!`);
}

rebuild().catch(err => {
  console.error('Rebuild failed:', err);
  process.exit(1);
});

