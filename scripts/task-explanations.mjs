// scripts/task-explanations.mjs
// Детальні менторські розбори українською мовою для завдань модулів 8, 9 та 10

export const TASK_EXPLANATIONS = {
  // === МОДУЛЬ 8: Генерація HTML-розмітки та UI-елементів через цикли ===
  '8.1': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Динамічно згенерувати HTML-розмітку вітрини товарів за допомогою конкатенації рядків у циклі <code>for</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Перевірити вхідний параметр <code>products</code>: якщо це не масив або він порожній — повернути порожній рядок <code>''</code>.</li>
    <li>Ініціалізувати акумулятор розмітки: <code>let html = '&lt;div class="product-cards-container"&gt;';</code>.</li>
    <li>Пройтися циклом <code>for (let i = 0; i &lt; products.length; i++)</code> по всіх товарах.</li>
    <li>На кожній ітерації сформувати картку з класом <code>product-card</code>, заголовком назви <code>product-card__title</code> та параграфом ціни <code>product-card__price</code> із суфіксом <code>₴</code>.</li>
    <li>Після завершення циклу додати закриваючий тег <code>&lt;/div&gt;</code> та повернути сформований рядок.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Використання шаблонних рядків (Template Literals) зі зворотними лапками значно спрощує інтерполяцію змінних у розмітку без захаращення коду плюсами. Детальніше на <a href="https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Template_literals" target="_blank" rel="noopener">MDN: Шаблонні рядки</a>.</p>
</div>`,

  '8.2': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати компонент зіркового рейтингу (★ / ☆) через циклічне порівняння поточного індексу з рейтингом.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Перевірити крайовий випадок: якщо <code>maxStars &lt;= 0</code>, повернути <code>''</code>.</li>
    <li>Створити контейнер із семантичними атрибутами доступності: <code>role="img"</code> та <code>aria-label="Рейтинг: \${rating} з \${maxStars}"</code>.</li>
    <li>Запустити цикл від <code>1</code> до <code>maxStars</code> включно: <code>for (let i = 1; i &lt;= maxStars; i++)</code>.</li>
    <li>Якщо <code>i &lt;= rating</code> — додати заповнену зірочку <code>&lt;span class="star star--filled"&gt;★&lt;/span&gt;</code>.</li>
    <li>Інакше — додати порожню зірочку <code>&lt;span class="star star--empty"&gt;☆&lt;/span&gt;</code>.</li>
    <li>Закрити контейнер та повернути підсумковий HTML-рядок.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Початок ітерації з 1 замість 0 спрощує перевірку: умова <code>i &lt;= rating</code> ідеально збігається з людським сприйняттям номерів зірок. Детальніше на <a href="https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Statements/for" target="_blank" rel="noopener">MDN: Цикл for</a>.</p>
</div>`,

  '8.3': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати навігаційні хлібні крихти, обробляючи останній активний пункт як звичайний текст, а всі попередні — як клікабельні посилання з роздільником <code>/</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Перевірити валідність масиву <code>links</code>: якщо він порожній або відсутній — повернути <code>''</code>.</li>
    <li>Відкрити контейнер <code>&lt;nav class="breadcrumbs"&gt;</code>.</li>
    <li>У циклі <code>for</code> перевіряти умову останнього елемента: <code>const isLast = (i === links.length - 1) || !item.url;</code>.</li>
    <li>Для останнього або неактивного елемента створити <code>&lt;span class="breadcrumbs__current"&gt;\${item.label}&lt;/span&gt;</code>.</li>
    <li>Для попередніх елементів створити <code>&lt;a href="\${item.url}" class="breadcrumbs__link"&gt;\${item.label}&lt;/a&gt;</code> і додати роздільник <code>&lt;span class="breadcrumbs__sep"&gt;/&lt;/span&gt;</code>.</li>
    <li>Закрити тег <code>&lt;/nav&gt;</code> та повернути результат.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Перевірка <code>i === links.length - 1</code> є класичним патерном у веб-розробці для виключення роздільників після останнього елемента списку.</p>
</div>`,

  '8.4': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Сформувати список бейджів зі статусами, валідуючи допустимі класи (<code>success</code>, <code>warning</code>, <code>danger</code>) у циклі.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Якщо вхідний масив порожній — повернути <code>''</code>.</li>
    <li>Створити обгортку <code>&lt;div class="badge-container"&gt;</code>.</li>
    <li>Скласти масив валідних статусів: <code>['success', 'warning', 'danger']</code>.</li>
    <li>У циклі перевірити: якщо <code>validStatuses.includes(item.status)</code>, застосувати його, інакше підставити безпечний дефолт <code>neutral</code>.</li>
    <li>Додати елемент <code>&lt;span class="badge badge--\${st}"&gt;\${item.label}&lt;/span&gt;</code>.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Метод <code>Array.prototype.includes()</code> — найпростіший та найефективніший спосіб перевірити входження значення у білий список валідних опцій. Читайте більше на <a href="https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" target="_blank" rel="noopener">MDN: Array.prototype.includes</a>.</p>
</div>`,

  '8.5': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити стрічку чату зі списком повідомлень <code>&lt;ul&gt;</code>, де повідомлення користувача та співрозмовника мають різні класи стилізації.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити список <code>&lt;ul class="message-list"&gt;</code>.</li>
    <li>У циклі <code>for</code> для кожного повідомлення перевірити булеве поле <code>m.isMine</code>.</li>
    <li>Визначити клас модифікатора: <code>m.isMine ? 'message-item--mine' : 'message-item--other'</code>.</li>
    <li>Сформувати структуру: <code>&lt;li class="message-item \${cls}"&gt;&lt;span class="message-item__author"&gt;\${m.author}:&lt;/span&gt; &lt;span class="message-item__text"&gt;\${m.text}&lt;/span&gt;&lt;/li&gt;</code>.</li>
    <li>Закрити тег <code>&lt;/ul&gt;</code>.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Тернарний оператор <code>умова ? вираз1 : вираз2</code> ідеально підходить для inline-підстановки модифікаторів класів у шаблонний рядок.</p>
</div>`,

  '8.6': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати хмару тегів, де популярні теги отримують додатковий CSS-клас та атрибут <code>data-count</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Перевірити наявність тегів у масиві.</li>
    <li>Відкрити контейнер <code>&lt;div class="tag-cloud"&gt;</code>.</li>
    <li>У циклі для кожного тега перевірити лічильник: <code>const cls = t.count &gt; 10 ? 'tag-chip tag-chip--popular' : 'tag-chip';</code>.</li>
    <li>Згенерувати елемент: <code>&lt;span class="\${cls}" data-count="\${t.count}"&gt;\${t.name}&lt;/span&gt;</code>.</li>
    <li>Закрити контейнер та повернути результат.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Використання data-атрибутів (<code>data-*</code>) дозволяє зберігати службові дані безпосередньо в розмітці для подальшого зчитування стилями чи JS. Читайте на <a href="https://developer.mozilla.org/uk/docs/Learn/HTML/Howto/Use_data_attributes" target="_blank" rel="noopener">MDN: Використання data-атрибутів</a>.</p>
</div>`,

  '8.7': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати розмітку покрокового індикатора процесу (Steps Indicator) з нумерацією кроків від 1.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити контейнер <code>&lt;div class="progress-steps" data-total="\${stepsCount}"&gt;</code>.</li>
    <li>Запустити цикл <code>for (let i = 0; i &lt; stepsCount; i++)</code>.</li>
    <li>Якщо <code>i &lt;= activeIndex</code> — призначити клас <code>step-indicator step-indicator--completed</code>.</li>
    <li>Інакше — звичайний <code>step-indicator</code>.</li>
    <li>Всередині кола вивести номер кроку: <code>\${i + 1}</code>.</li>
  </ol>
</div>`,

  '8.8': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати нумерований список <code>&lt;ol&gt;</code> із зазначенням стартового значення в атрибуті <code>start</code> та в <code>data-index</code> кожного пункту.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити тег <code>&lt;ol class="numbered-list" start="\${startNumber}"&gt;</code>.</li>
    <li>У циклі <code>for (let i = 0; i &lt; items.length; i++)</code> розрахувати індекс: <code>const currentIdx = startNumber + i;</code>.</li>
    <li>Додати <code>&lt;li class="numbered-list__item" data-index="\${currentIdx}"&gt;\${items[i]}&lt;/li&gt;</code>.</li>
    <li>Закрити тег <code>&lt;/ol&gt;</code>.</li>
  </ol>
</div>`,

  '8.9': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати стрічку карток сповіщень з акцентним класом для непрочитаних повідомлень.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити обгортку <code>&lt;div class="notification-feed"&gt;</code>.</li>
    <li>У циклі для кожного елемента визначити наявність класу: <code>n.unread ? 'notification-card notification-card--unread' : 'notification-card'</code>.</li>
    <li>Всередині сформувати заголовок <code>notification-card__title</code> та тіло <code>notification-card__body</code>.</li>
    <li>Закрити тег контейнера.</li>
  </ol>
</div>`,

  '8.10': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати панель вкладок (Tabs) із дотриманням стандартів WAI-ARIA (<code>role="tab"</code>, <code>aria-selected</code>).</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити навігаційний блок <code>&lt;div class="tabs-nav" role="tablist"&gt;</code>.</li>
    <li>У циклі порівняти <code>const isCur = (i === activeIndex);</code>.</li>
    <li>Сформувати кнопку: <code>&lt;button class="\${isCur ? 'tab-button tab-button--active' : 'tab-button'}" role="tab" aria-selected="\${isCur ? 'true' : 'false'}"&gt;\${title}&lt;/button&gt;</code>.</li>
    <li>Закрити контейнер.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Атрибути <code>role="tablist"</code> та <code>role="tab"</code> є критично важливими для користувачів скрінрідерів. Докладніше на <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role" target="_blank" rel="noopener">MDN: ARIA Tab Role</a>.</p>
</div>`,

  '8.11': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити акордеон на базі семантичних нативних тегів HTML5 <code>&lt;details&gt;</code> та <code>&lt;summary&gt;</code> без зайвого JS-коду взаємодії.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити контейнер <code>&lt;div class="accordion-list"&gt;</code>.</li>
    <li>У циклі перевірити властивість <code>it.open</code>.</li>
    <li>Якщо <code>open: true</code> — додати атрибут <code>open</code> до тегу <code>&lt;details class="accordion-item" open&gt;</code>, інакше без нього.</li>
    <li>Вкласти заголовок <code>&lt;summary class="accordion-header"&gt;\${it.title}&lt;/summary&gt;</code> та блок опису <code>&lt;div class="accordion-content"&gt;\${it.content}&lt;/div&gt;</code>.</li>
  </ol>
</div>`,

  '8.12': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Сформувати стек аватарок користувачів з обмеженням кількості та бейджем залишку <code>+N</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Визначити ліміт відображення: <code>Math.min(avatars.length, maxVisible)</code>.</li>
    <li>У циклі <code>for</code> до ліміту вивести зображення: <code>&lt;img src="\${avatars[i]}" class="avatar-img" alt="avatar" /&gt;</code>.</li>
    <li>Після циклу перевірити: якщо <code>avatars.length &gt; maxVisible</code>, додати бейдж: <code>&lt;span class="avatar-more"&gt;+\${avatars.length - maxVisible}&lt;/span&gt;</code>.</li>
    <li>Повернути рядок у контейнері <code>&lt;div class="avatar-stack"&gt;</code>.</li>
  </ol>
</div>`,

  // === МОДУЛЬ 9: Генерація складних структур та сіток через вкладені цикли ===
  '9.1': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати повноцінну HTML-таблицю <code>&lt;table&gt;</code> із заголовками <code>&lt;thead&gt;</code> та рядками даних <code>&lt;tbody&gt;</code> через вкладені цикли.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Сформувати заголовки <code>&lt;thead&gt;&lt;tr&gt;</code>, обійшовши масив <code>headers</code> у першому циклі та згенерувавши <code>&lt;th&gt;\${h}&lt;/th&gt;</code>.</li>
    <li>Відкрити <code>&lt;tbody&gt;</code>. У зовнішньому циклі проходимо по рядках об'єктів <code>rows</code>.</li>
    <li>У внутрішньому циклі проходимо по ключах <code>headers</code>, дістаємо значення <code>row[headerKey]</code> та огортаємо в <code>&lt;td&gt;</code>.</li>
    <li>Закрити теги <code>&lt;/tbody&gt;&lt;/table&gt;</code>.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Вкладені цикли — основа побудови будь-яких 2D-структур (матриць, таблиць, сіток). Зовнішній цикл відповідає за рядки (горизонталь), внутрішній — за стовпці (вертикаль).</p>
</div>`,

  '9.2': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати календарну сітку місяця з днями тижня та порожніми комірками для зміщення початку місяця.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити шапку календаря з днями тижня (Пн - Нд).</li>
    <li>У першому циклі додати порожні клітинки <code>&lt;td class="day-empty"&gt;&lt;/td&gt;</code> у кількості <code>startDayOfWeek</code>.</li>
    <li>У другому циклі від 1 до <code>daysInMonth</code> додавати <code>&lt;td class="day-cell"&gt;\${day}&lt;/td&gt;</code>.</li>
    <li>Контролювати розрив рядка: якщо поточна позиція кратна 7 — закрити <code>&lt;/tr&gt;</code> та почати новий рядок <code>&lt;tr&gt;</code>.</li>
  </ol>
</div>`,

  '9.3': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити шахівницю розміром N×N, чергуючи білі та чорні клітинки за правилом парності суми координат.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити контейнер <code>&lt;div class="chess-board" style="--size: \${size};"&gt;</code>.</li>
    <li>Зовнішній цикл <code>r</code> від 0 до <code>size - 1</code> створює рядок <code>&lt;div class="chess-row"&gt;</code>.</li>
    <li>Внутрішній цикл <code>c</code> від 0 до <code>size - 1</code> перевіряє умову шахового чергування: <code>const isWhite = (r + c) % 2 === 0;</code>.</li>
    <li>Додати клітинку з класом <code>chess-cell cell--white</code> або <code>cell--black</code>.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Формула <code>(r + c) % 2 === 0</code> — класичний математичний прийом для створення шахового чергування в матрицях будь-якого розміру.</p>
</div>`,

  '9.4': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати теплову карту активності (Heatmap) у стилі GitHub коммітів.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити обгортку <code>&lt;div class="heatmap-grid"&gt;</code>.</li>
    <li>Зовнішній цикл проходить по тижнях (стовпчиках) від 0 до <code>weeksCount - 1</code>.</li>
    <li>Внутрішній цикл проходить по днях тижня (7 днів) і читає рівень активності з матриці.</li>
    <li>Сформувати клітинку: <code>&lt;div class="heatmap-cell" data-level="\${level}" title="\${val} дій"&gt;&lt;/div&gt;</code>.</li>
  </ol>
</div>`,

  '9.5': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати сітку піксель-арту (Pixel Art) за наданою 2D матрицею кольорів.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Зовнішній цикл створює рядок <code>&lt;div class="pixel-row"&gt;</code>.</li>
    <li>Внутрішній цикл перебирає кольори стовпців у поточному рядку <code>colorMatrix[r][c]</code>.</li>
    <li>Кожному пікселю встановлюється інлайн-стиль: <code>style="background-color: \${color};"</code>.</li>
  </ol>
</div>`,

  '9.6': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати таблицю множення з виділенням головної діагоналі (квадратів чисел).</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Сформувати шапку стовпців від 1 до <code>size</code>.</li>
    <li>У вкладеному циклі розрахувати добуток: <code>const val = r * c;</code>.</li>
    <li>Якщо <code>r === c</code> — додати спеціальний клас діагоналі <code>mult-cell--diagonal</code>.</li>
  </ol>
</div>`,

  '9.7': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати деревоподібне дворівневе меню категорій та підкатегорій.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити список першого рівня <code>&lt;ul class="tree-menu"&gt;</code>.</li>
    <li>У зовнішньому циклі вивести назву кожної батьківської категорії.</li>
    <li>Якщо у категорії є масив <code>children</code>, запустити внутрішній цикл і сформувати підсписок <code>&lt;ul class="tree-submenu"&gt;</code>.</li>
  </ol>
</div>`,

  '9.8': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати схему глядацького залу зі статусами вільних та заброньованих місць.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Зовнішній цикл <code>r</code> формує ряди залу <code>&lt;div class="seat-row" data-row="\${r}"&gt;</code>.</li>
    <li>Внутрішній цикл <code>s</code> формує місця з унікальним ідентифікатором <code>id = \`\${r}-\${s}\`</code>.</li>
    <li>Перевірити наявність ідентифікатора у списку заброньованих: <code>reservedSeats.includes(id)</code>.</li>
    <li>Призначити клас <code>seat--reserved</code> та атрибут <code>disabled</code> для зайнятих місць.</li>
  </ol>
</div>`,

  '9.9': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати матрицю палітри кольорів із групами та списком відтінків у кожній групі.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Зовнішній цикл створює картку групи з заголовком <code>groupName</code>.</li>
    <li>Внутрішній цикл перебирає відтінки <code>shades</code> та генерує чіпи з інлайн-фоном кольору.</li>
  </ol>
</div>`,

  '9.10': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити таблицю порівняння продуктів, де рядками виступають характеристики, а стовпчиками — моделі товарів.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Шапка таблиці містить назву «Характеристика» та назви всіх порівнюваних товарів.</li>
    <li>Зовнішній цикл ітерується по характеристиках (featuresList).</li>
    <li>Внутрішній цикл перевіряє наявність характеристики в кожному товарі та виводить галочку <code>✓</code> або хрестик <code>—</code>.</li>
  </ol>
</div>`,

  '9.11': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати сітку гри «Пошук слів» (Філворд) з координатами комірок.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Зовнішній цикл ітерується по рядках матриці букв.</li>
    <li>Внутрішній цикл огортає кожну літеру в <code>&lt;span class="word-cell" data-row="\${r}" data-col="\${c}"&gt;</code>.</li>
  </ol>
</div>`,

  '9.12': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати груповану стовпчикову діаграму (Bar Chart) з розрахунком висоти стовпців у відсотках.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Зовнішній цикл створює групу для кожної категорії (наприклад, місяця).</li>
    <li>Внутрішній цикл ітерується по серіях даних (План/Факт), виставляючи <code>height: \${value}%</code> та фоновий колір серії.</li>
  </ol>
</div>`,

  // === МОДУЛЬ 10: Маніпуляція DOM, стилізація та очищення через цикли ===
  '10.1': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Реалізувати динамічне чергування кольорів («зебра») для рядків таблиці за допомогою циклу <code>for</code> та DOM API.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Знайти всі рядки тіла таблиці: <code>const rows = tableElement.querySelectorAll('tbody tr');</code>.</li>
    <li>Пройтися по них циклом <code>for (let i = 0; i &lt; rows.length; i++)</code>.</li>
    <li>Якщо індекс парний (<code>i % 2 === 0</code>) — встановити <code>rows[i].style.backgroundColor = evenBg</code> та видалити клас смугастості.</li>
    <li>Якщо непарний — встановити колір <code>oddBg</code> та додати клас <code>table-row--striped</code> через <code>classList.add()</code>.</li>
    <li>Повернути загальну кількість оброблених рядків <code>rows.length</code>.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Властивість <code>element.classList</code> надає зручні методи <code>add</code> та <code>remove</code> без ризику затерти інші існуючі класи елемента. Детальніше на <a href="https://developer.mozilla.org/uk/docs/Web/API/Element/classList" target="_blank" rel="noopener">MDN: Element.classList</a>.</p>
</div>`,

  '10.2': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Видалити всі дочірні елементи контейнера найшвидшим способом за допомогою циклу <code>while</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Перевірити наявність контейнера: <code>if (!containerElement) return 0;</code>.</li>
    <li>Ініціалізувати лічильник видалених елементів <code>let count = 0;</code>.</li>
    <li>Запустити цикл <code>while (containerElement.firstChild)</code>: поки у вузла є перший дочірній елемент.</li>
    <li>Викликати <code>containerElement.removeChild(containerElement.firstChild);</code> і збільшити лічильник.</li>
    <li>Повернути підсумкову кількість видалених елементів.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Патерн <code>while (node.firstChild) node.removeChild(node.firstChild)</code> історично є одним із найшвидших та найбезпечніших способів очищення DOM-вузлів, який коректно вивільняє пам'ять. Читайте більше на <a href="https://developer.mozilla.org/uk/docs/Web/API/Node/removeChild" target="_blank" rel="noopener">MDN: Node.removeChild</a>.</p>
</div>`,

  '10.3': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати вкладене DOM-дерево списків <code>&lt;ul&gt;</code> та <code>&lt;li&gt;</code> на основі деревоподібної структури даних.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити кореневий елемент списку <code>const ul = document.createElement('ul');</code>.</li>
    <li>У циклі для кожного вузла створити <code>&lt;li&gt;</code> та записати текст заголовка через <code>textContent</code>.</li>
    <li>Якщо у вузла є дочірні елементи <code>children</code> — рекурсивно або внутрішнім циклом згенерувати підсписок та додати його в <code>&lt;li&gt;</code>.</li>
    <li>Повернути створене дерево елементів.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Метод <code>document.createElement()</code> створює "живий" об'єкт DOM-елемента у пам'яті браузера, який потім монтується в дерево методом <code>appendChild()</code>. Докладніше на <a href="https://developer.mozilla.org/uk/docs/Web/API/Document/createElement" target="_blank" rel="noopener">MDN: Document.createElement</a>.</p>
</div>`,

  '10.4': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Змонтувати покроковий майстер (Wizard UI) з визначенням статусів: завершений, активний або очікує.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створити контейнер <code>document.createElement('div')</code> з класом <code>step-wizard</code>.</li>
    <li>У циклі <code>for (let i = 0; i &lt; steps.length; i++)</code> створити елемент кроку <code>.wizard-step</code>.</li>
    <li>Якщо <code>i &lt; currentStepIndex</code> — додати клас <code>step--completed</code>.</li>
    <li>Якщо <code>i === currentStepIndex</code> — додати клас <code>step--active</code>.</li>
    <li>Інакше — додати клас <code>step--pending</code>.</li>
    <li>Повернути підсумковий контейнер.</li>
  </ol>
</div>`,

  '10.5': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Знайти та підсвітити ключові слова в тексті DOM-елементів за допомогою тегу <code>&lt;mark&gt;</code>, використовуючи зрозумілі цикли без складних регулярних виразів.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Перевірити наявність елементів та ключових слів. Ініціалізувати лічильник знайдених збігів.</li>
    <li>Пройтися циклом по кожному елементу з <code>elementsList</code>.</li>
    <li>Для кожного елемента перебрати масив <code>keywords</code> у внутрішньому циклі.</li>
    <li>Підрахувати збіги та замінити слово на підсвічену розмітку: розбити текст методом <code>text.split(kw)</code> і з'єднати через <code>&lt;mark class="kw-highlight"&gt;\${kw}&lt;/mark&gt;</code>.</li>
    <li>Оновити <code>el.innerHTML</code> та повернути загальну кількість підсвічувань.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Комбінація <code>text.split(sub).join(replacement)</code> — простий та елегантний спосіб масової заміни підрядків без використання регулярних виразів. Детальніше на <a href="https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank" rel="noopener">MDN: String.prototype.split</a>.</p>
</div>`,

  '10.6': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Динамічно показувати або приховувати список DOM-елементів на основі функції-предиката в циклі.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>У циклі <code>for (const el of elementsList)</code> викликати <code>predicateFn(el)</code>.</li>
    <li>Якщо функція повертає <code>true</code> — показати елемент: <code>el.style.display = '';</code> та збільшити лічильник видимих.</li>
    <li>Якщо <code>false</code> — приховати: <code>el.style.display = 'none';</code>.</li>
    <li>Повернути кількість видимих елементів.</li>
  </ol>
</div>`,

  '10.7': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Відсортувати дочірні DOM-елементи списку за числовим значенням атрибута без перестворення вузлів.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Отримати масив дочірніх елементів: <code>Array.from(listElement.children)</code>.</li>
    <li>Відсортувати їх за зростанням атрибута: <code>Number(a.getAttribute(attributeName)) - Number(b.getAttribute(attributeName))</code>.</li>
    <li>У циклі <code>for (const el of items)</code> викликати <code>listElement.appendChild(el);</code>.</li>
    <li>Повернути відсортований контейнер.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Якщо елемент уже існує в DOM, виклик <code>appendChild()</code> автоматично переміщує його на нову позицію в кінець контейнера, а не створює дублікат. Детальніше на <a href="https://developer.mozilla.org/uk/docs/Web/API/Node/appendChild" target="_blank" rel="noopener">MDN: Node.appendChild</a>.</p>
</div>`,

  '10.8': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Реалізувати клієнтську пагінацію дочірніх елементів контейнера, показуючи лише елементи обраної сторінки.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Розрахувати діапазон індексів: <code>const start = (currentPage - 1) * pageSize;</code> та <code>const end = start + pageSize;</code>.</li>
    <li>Отримати список дочірніх елементів <code>containerElement.children</code>.</li>
    <li>У циклі <code>for (let i = 0; i &lt; items.length; i++)</code>: якщо <code>i &gt;= start &amp;&amp; i &lt; end</code> — встановити <code>display = ''</code>, інакше — <code>display = 'none'</code>.</li>
    <li>Повернути кількість видимих на поточній сторінці карток.</li>
  </ol>
</div>`,

  '10.9': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Застосувати пачку CSS-стилів до списку елементів за допомогою простих масивів пар властивість/значення.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Перевірити наявність масиву елементів та масиву стилів <code>stylesEntries</code>.</li>
    <li>Зовнішній цикл проходить по елементах з <code>elementsList</code>.</li>
    <li>Внутрішній цикл проходить по парах <code>[prop, val]</code> з масиву <code>stylesEntries</code>.</li>
    <li>Призначити стиль безпосередньо у DOM: <code>el.style[prop] = val;</code>.</li>
    <li>Повернути оновлений список елементів.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Використання масиву пар виду <code>[['color', 'red'], ['padding', '10px']]</code> дозволяє працювати виключно з базовими масивами та циклами без залучення складних методів об'єктів.</p>
</div>`,

  '10.10': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Зчитати текстові дані з таблиці та перетворити їх у структурований масив об'єктів за допомогою циклів.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Знайти назви колонок: <code>tableElement.querySelectorAll('thead th')</code> та зберегти їхній текст у масив <code>headers</code>.</li>
    <li>Знайти рядки: <code>tableElement.querySelectorAll('tbody tr')</code>.</li>
    <li>У циклі по рядках обійти всі комірки <code>tr.querySelectorAll('td')</code>.</li>
    <li>Сформувати для кожного рядка об'єкт: <code>rowObj[headers[c]] = td.textContent.trim();</code>.</li>
    <li>Додати сформований об'єкт у підсумковий масив та повернути його.</li>
  </ol>
</div>`,

  '10.11': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згрупувати підряд розташовані однакові елементи у спільний контейнер-обгортку за допомогою циклу <code>while</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Перевірити валідність <code>parentElement</code>. Перевести цільовий тег у верхній регістр.</li>
    <li>Почати з першого нащадка: <code>let current = parentElement.firstElementChild;</code>.</li>
    <li>У циклі: якщо <code>current.tagName === target</code> — створити обгортку <code>wrapper = document.createElement('div')</code> з потрібним класом.</li>
    <li>Вставити обгортку перед початковим елементом через <code>parentElement.insertBefore(wrapper, current)</code>.</li>
    <li>У внутрішньому циклі <code>while</code> переміщувати всі послідовні однакові елементи всередину обгортки через <code>wrapper.appendChild(current)</code>.</li>
    <li>Повернути батьківський елемент.</li>
  </ol>
</div>`,

  '10.12': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Реалізувати каскадну затримку анімації (Stagger Effect) для списку елементів через цикл <code>for</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Перевірити наявність елементів у <code>elementsList</code>.</li>
    <li>У циклі <code>for (let i = 0; i &lt; elementsList.length; i++)</code> розрахувати затримку в мілісекундах: <code>const delay = i * stepDelayMs;</code>.</li>
    <li>Встановити інлайн-стиль: <code>el.style.animationDelay = \`\${delay}ms\`;</code>.</li>
    <li>Додати клас анімації: <code>el.classList.add('animate-stagger');</code>.</li>
    <li>Повернути максимальну затримку (затримку останнього елемента).</li>
  </ol>
</div>`
};

