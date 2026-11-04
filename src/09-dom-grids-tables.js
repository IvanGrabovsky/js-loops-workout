// Модуль 9: Створення складних сіток та таблиць через вкладені цикли та DOM API
// Побудова складних DOM-дерев через вкладені цикли: інтерактивні таблиці, сітки календарів, шахові дошки та теплові карти.

/**
 * Завдання 9.1: Створення інтерактивної таблиці через DOM API
 * Створити та повернути елемент таблиці `<table class="data-table">`. Створити `<thead>` з одним рядком заголовків `<th>` для кожної назви з `headers`. Створити `<tbody>` та у вкладених циклах пройтися по масиву об'єктів `rows`, додаючи `<tr>` та `<td>` зі значеннями `row[header]`. Якщо `headers` порожній — повернути `null`.
 */
export function renderDataTable(headers, rows) {
  // Створення таблиці даних через DOM API
  return null;
}

/**
 * Завдання 9.2: Створення календарної сітки місяця через DOM API
 * Створити та повернути DOM-контейнер `<div class="calendar-month">`. Додати заголовок `<h3 class="month-title">monthName</h3>` та контейнер сітки `<div class="calendar-grid">`. У циклі `for (let d = 1; d <= daysInMonth; d++)` створити для кожного дня `<span class="day-cell">String(d)</span>` та додати до сітки. Якщо `daysInMonth <= 0` — повернути `null`.
 */
export function renderCalendarMonth(daysInMonth, monthName) {
  // Створення календарної сітки через DOM API
  return null;
}

/**
 * Завдання 9.3: Створення шахівниці N×N через вкладені цикли та DOM API
 * Створити та повернути DOM-елемент `<div class="chess-board">`. У зовнішньому циклі `for (let r = 0; r < size; r++)` створити рядок `<div class="chess-row">`. У внутрішньому циклі `for (let c = 0; c < size; c++)` створити клітинку `<div class="chess-cell cell--white">` (якщо `(r + c) % 2 === 0`) або `cell--black`. Якщо `size <= 0` — повернути `null`.
 */
export function renderChessBoard(size) {
  // Створення шахівниці через DOM API
  return null;
}

/**
 * Завдання 9.4: Створення теплової карти активності (Heatmap)
 * Створити та повернути DOM-контейнер `<div class="heatmap-grid">`. У зовнішньому циклі по тижнях `w` від 0 до `weeksCount - 1` створити колонку `<div class="heatmap-col">`. У внутрішньому циклі по днях тижня `d` (від 0 до 6) дістати значення з матриці `dataMatrix[w][d]`, створити клітинку `<div class="heatmap-cell">`, встановити `data-level` (`0` для 0, `1` для 1-3, `2` для 4-6, `3` для > 6) та `title = "{val} дій"`. Якщо `weeksCount <= 0` — повернути `null`.
 */
export function renderActivityHeatmap(weeksCount, dataMatrix) {
  // Створення теплової карти через DOM API
  return null;
}

/**
 * Завдання 9.5: Створення сітки піксель-арту з інлайн-стилями кольорів
 * Створити та повернути `<div class="pixel-art-grid">`. Зовнішній цикл по висоті `height` створює рядок `<div class="pixel-row">`. Внутрішній цикл по ширині `width` створює піксель `<div class="pixel-cell">` і призначає інлайн-стиль `style.backgroundColor = colorMatrix[r][c]`. Якщо розміри `<= 0` — повернути `null`.
 */
export function renderPixelArtGrid(width, height, colorMatrix) {
  // Створення піксель-арт сітки через DOM API
  return null;
}

/**
 * Завдання 9.6: Створення таблиці множення з виділенням діагоналі
 * Створити та повернути `<table class="mult-table">`. У вкладених циклах від 1 до `size` сформувати рядки `<tr>` та клітинки `<td>`. Встановити `textContent = String(r * c)`. Якщо `r === c` (квадрат числа) — додати клас `cell--diagonal`. Якщо `size <= 0` — повернути `null`.
 */
export function renderMultiplicationTableDOM(size) {
  // Створення таблиці множення через DOM API
  return null;
}

/**
 * Завдання 9.7: Створення деревоподібного меню категорій
 * Створити та повернути `<ul class="tree-menu">`. Зовнішній цикл по `nodes` створює `<li>` з текстом `node.label`. Якщо у вузла є непорожній масив `children`, створити вкладений підсписок `<ul class="tree-submenu">`, наповнити його внутрішнім циклом і вкласти у батьківський `li`. Якщо масив порожній — повернути `null`.
 */
export function renderNestedTreeMenu(nodes) {
  // Створення деревоподібного меню
  return null;
}

/**
 * Завдання 9.8: Створення схеми глядацького залу з бронею
 * Створити та повернути `<div class="seat-map">`. Зовнішній цикл по рядах `r` (від 1 до `rowsCount`) створює `<div class="seat-row" data-row="{r}">`. Внутрішній цикл по місцях `s` (від 1 до `seatsPerRow`) створює кнопку `<button class="seat">`. Якщо рядок `"{r}-{s}"` присутній у масиві `reservedSeats` — призначити клас `seat--reserved` та `btn.disabled = true`, інакше `seat--available`. Повернути контейнер залу.
 */
export function renderSeatMap(rowsCount, seatsPerRow, reservedSeats) {
  // Створення схеми залу через DOM API
  return null;
}

/**
 * Завдання 9.9: Створення палітри відтінків за групами
 * Створити та повернути `<div class="palette-matrix">`. Зовнішній цикл по `paletteGroups` (`{ groupName, shades }`) створює блок групи `<div class="palette-group">` із заголовком `<h4 class="palette-group__title">groupName</h4>` та контейнером чіпів `<div class="palette-chips">`. Внутрішній цикл створює для кожного відтінку `<div class="color-chip">` зі стилем `style.backgroundColor = shade`. Повернути контейнер матриці.
 */
export function renderColorPaletteMatrix(paletteGroups) {
  // Створення матриці палітри кольорів
  return null;
}

/**
 * Завдання 9.10: Створення таблиці порівняння характеристик товарів
 * Створити та повернути `<table class="compare-table">`. У шапці `thead` створити `th` для «Характеристика» та для назви кожного товару з `productsList` (`item.name`). У `tbody` для кожної характеристики з `featuresList` створити рядок `<tr>`: перша комірка `td` — назва характеристики, наступні комірки — значення `item.features[feat] ? '✓' : '—'`. Повернути таблицю порівняння.
 */
export function renderProductComparisonGrid(featuresList, productsList) {
  // Створення таблиці порівняння
  return null;
}

/**
 * Завдання 9.11: Створення сітки гри пошуку слів (Word Search)
 * Створити та повернути `<div class="word-grid">`. У зовнішньому циклі по рядках `r` та внутрішньому по стовпцях `c` для кожної літери з 2D-масиву `lettersMatrix[r][c]` створити `<span class="word-cell" data-row="{r}" data-col="{c}">L</span>`. Повернути DOM-контейнер сітки.
 */
export function renderWordSearchGrid(lettersMatrix) {
  // Створення сітки слів через DOM API
  return null;
}

/**
 * Завдання 9.12: Створення групованої стовпчикової діаграми (Bar Chart)
 * Створити та повернути `<div class="grouped-chart">`. Для кожної категорії з `categories` (наприклад, місяця) створити блок `<div class="chart-group">` із міткою `<span class="group-label">cat</span>`. Всередині групи для кожної серії з `seriesList` (`{ name, color, data }`) створити стовпчик `<div class="chart-bar">`, встановити інлайн-стилі `style.height = "{val}%"` та `style.backgroundColor = color`. Повернути підсумкову діаграму.
 */
export function renderBarChartGrouped(categories, seriesList) {
  // Створення діаграми через DOM API
  return null;
}

