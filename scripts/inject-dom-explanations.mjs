import fs from 'fs';

const filePath = '/Users/grabovsky/projects/js-loops-workout/scripts/build-dom-modules.mjs';
let content = fs.readFileSync(filePath, 'utf8');

// Map of detailed explanations for each DOM task
const EXPLANATIONS = {
  '8.1': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Динамічно створити картки товарів у циклі на основі вхідного масиву об'єктів та змонтувати їх у спільний контейнер.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо кореневий контейнер <code>&lt;div class="product-cards-container"&gt;</code>.</li>
    <li>Перевіряємо валідність вхідного масиву (<code>Array.isArray(products)</code>).</li>
    <li>У циклі <code>for (let i = 0; i &lt; products.length; i++)</code> для кожного товару створюємо картку <code>.product-card</code>.</li>
    <li>Додаємо заголовок <code>&lt;h4&gt;</code> з назвою та параграф <code>&lt;p&gt;</code> з ціною <code>\${price} ₴</code>.</li>
    <li>Вкладаємо картку в контейнер через <code>appendChild()</code> та повертаємо його.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Використовуйте <code>textContent</code> замість <code>innerHTML</code> для назв товарів, щоб запобігти XSS-вразливостям при роботі з користувацькими даними.</p>
</div>`,

  '8.2': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати зірковий рейтинг доступним способом за допомогою циклу від 1 до maxStars.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо контейнер зіркового рейтингу з атрибутами доступності <code>role="img"</code> та <code>aria-label</code>.</li>
    <li>Запускаємо цикл <code>for (let i = 1; i &lt;= maxStars; i++)</code>.</li>
    <li>Якщо <code>i &lt;= rating</code> — створюємо активну зірочку <code>★</code> з класом <code>star--filled</code> та золотистим кольором.</li>
    <li>Інакше створюємо порожню зірочку <code>☆</code> з класом <code>star--empty</code>.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Використання лічильника від 1 замість 0 робить умову <code>i &lt;= rating</code> максимально інтуїтивною.</p>
</div>`,

  '8.3': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати навігаційні хлібні крихти, чергуючи посилання та роздільники <code>/</code> через перевірку останнього елемента.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо навігаційний контейнер <code>&lt;nav class="breadcrumbs"&gt;</code>.</li>
    <li>Проходимося циклом <code>for</code> по масиву посилань.</li>
    <li>Для всіх пунктів, крім останнього, створюємо посилання <code>&lt;a&gt;</code> та текстовий роздільник <code>/</code>.</li>
    <li>Для останнього пункту створюємо неклікабельний <code>&lt;span class="breadcrumbs__current"&gt;</code>.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Умова <code>i === links.length - 1</code> є класичним патерном для обробки крайнього елемента списку.</p>
</div>`,

  '8.4': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити інформаційні статус-бейджі з динамічним вибором класу та кольору за статусом елемента.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо контейнер <code>.badge-container</code>.</li>
    <li>У циклі перевіряємо статус (<code>success</code>, <code>warning</code>, <code>danger</code> або дефолтний <code>neutral</code>).</li>
    <li>Призначаємо відповідний фоновий колір та клас <code>badge--status</code>.</li>
    <li>Встановлюємо білий текст та назву бейджа.</li>
  </ol>
</div>`,

  '8.5': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати стрічку повідомлень чату з вирівнюванням власних та чужих реплік через цикл.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо список <code>&lt;ul class="message-list"&gt;</code>.</li>
    <li>У циклі перевіряємо прапорець <code>m.isMine</code>.</li>
    <li>Для власних повідомлень встановлюємо клас <code>message--mine</code> та <code>alignSelf = 'flex-end'</code>.</li>
    <li>Для вхідних — <code>message--other</code> та вирівнювання за лівим краєм.</li>
  </ol>
</div>`,

  '8.6': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити хмару тегів зі змінним розміром шрифту залежно від популярності тега.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо <code>&lt;div class="tag-cloud"&gt;</code>.</li>
    <li>У циклі для кожного тега створюємо <code>&lt;span class="tag-chip"&gt;</code>.</li>
    <li>Записуємо кількість переглядів у <code>data-count</code>.</li>
    <li>Якщо <code>count &gt; 10</code> — встановлюємо <code>fontSize: 16px</code> та клас <code>tag-chip--popular</code>, інакше <code>12px</code>.</li>
  </ol>
</div>`,

  '8.7': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити горизонтальний прогрес-бар з покроковими мітками через цикл.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Розраховуємо ширину смуги прогресу у відсотках: <code>(activeIndex / (stepsCount - 1)) * 100%</code>.</li>
    <li>У циклі генеруємо кола кроків <code>.step-circle</code>.</li>
    <li>Для пройдених кроків додаємо клас <code>step--completed</code>.</li>
  </ol>
</div>`,

  '8.8': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати список із користувацькою нумерацією, починаючи з довільного номера <code>startNumber</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо список <code>&lt;ol class="numbered-list"&gt;</code>.</li>
    <li>У циклі для кожного елемента розраховуємо індекс як <code>startNumber + i</code>.</li>
    <li>Додаємо номер у спеціальний бейдж або маркер перед текстом.</li>
  </ol>
</div>`,

  '8.9': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Рендеринг стрічки повідомлень з акцентним підсвічуванням непрочитаних карток.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо контейнер <code>.notification-feed</code>.</li>
    <li>У циклі для кожної картки перевіряємо властивість <code>unread</code>.</li>
    <li>Для непрочитаних додаємо клас <code>notification--unread</code> та ліву кольорову рамку.</li>
  </ol>
</div>`,

  '8.10': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити доступну навігацію вкладками (Tabs) з атрибутами <code>role="tab"</code> та <code>aria-selected</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо контейнер <code>&lt;div class="tabs-nav" role="tablist"&gt;</code>.</li>
    <li>У циклі генеруємо кнопки таба.</li>
    <li>Активній вкладці призначаємо клас <code>tab--active</code> та <code>aria-selected="true"</code>, іншим — <code>false</code>.</li>
  </ol>
</div>`,

  '8.11': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати акордеон списку за допомогою семантичних тегів HTML5 <code>&lt;details&gt;</code> та <code>&lt;summary&gt;</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо обгортку <code>.accordion-container</code>.</li>
    <li>Для кожного пункту створюємо <code>&lt;details&gt;</code> і заголовок <code>&lt;summary&gt;</code>.</li>
    <li>Якщо пункт має прапорець <code>open: true</code>, додаємо атрибут <code>open</code>.</li>
  </ol>
</div>`,

  '8.12': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити стек аватарів з накладанням та лічильником залишку <code>+N</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Обчислюємо видиму кількість: <code>Math.min(users.length, maxVisible)</code>.</li>
    <li>У циклі створюємо круглі зображення аватарів з негативним відступом.</li>
    <li>Якщо користувачів більше, додаємо круглий бейдж <code>+\${users.length - maxVisible}</code>.</li>
  </ol>
</div>`,

  '9.1': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати повноцінну HTML-таблицю за допомогою вкладених циклів: зовнішній по рядках, внутрішній по клітинках.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо <code>&lt;table class="data-table"&gt;</code>, <code>&lt;thead&gt;</code> та <code>&lt;tbody&gt;</code>.</li>
    <li>У першому циклі формуємо рядок заголовків <code>&lt;th&gt;</code>.</li>
    <li>У вкладених циклах проходимося по рядках масиву та додаємо <code>&lt;td&gt;</code> для кожного стовпця.</li>
  </ol>
</div>`,

  '9.2': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати календарну сітку місяця через вкладені цикли по тижнях та 7 днях.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо сітку календаря з рядком днів тижня (Пн–Нд).</li>
    <li>У вкладеному циклі перебираємо клітинки з урахуванням зсуву першого дня місяця.</li>
    <li>Клітинки з числами від 1 до <code>daysInMonth</code> наповнюємо датами.</li>
  </ol>
</div>`,

  '9.3': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати шахівницю 8х8 через вкладені цикли з чергуванням кольорів.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Зовнішній цикл <code>r</code> (рядки 0..7), внутрішній <code>c</code> (колонки 0..7).</li>
    <li>Математична умова чергування кольорів: <code>(r + c) % 2 === 0</code> дає білу клітинку, інакше чорну.</li>
    <li>Додаємо класи <code>chess-cell--white</code> та <code>chess-cell--black</code>.</li>
  </ol>
</div>`,

  '9.4': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати матрицю активності (Activity Heatmap) як у GitHub через вкладені цикли.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Зовнішній цикл по тижнях, внутрішній по 7 днях тижня.</li>
    <li>Зчитуємо кількість комітів/дій: <code>matrix[w][d]</code>.</li>
    <li>Залежно від кількості дій призначаємо рівень інтенсивності фону зеленого кольору.</li>
  </ol>
</div>`,

  '9.5': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити піксельне полотно (Pixel Art Grid) з двовимірного масиву кольорів.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Налаштовуємо CSS Grid з відповідною кількістю колонок: <code>repeat(cols, 1fr)</code>.</li>
    <li>У вкладених циклах перебираємо кольори <code>pixels[r][c]</code>.</li>
    <li>Встановлюємо кожній клітинці відповідний <code>backgroundColor</code>.</li>
  </ol>
</div>`,

  '9.6': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати таблицю множення N x N та підсвітити головну діагональ.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо таблицю. Зовнішній цикл <code>r</code> від 1 до N, внутрішній <code>c</code> від 1 до N.</li>
    <li>Значення клітинки обчислюється як <code>r * c</code>.</li>
    <li>Якщо <code>r === c</code> — додаємо клас <code>cell--diagonal</code> для підсвічування квадратів чисел.</li>
  </ol>
</div>`,

  '9.7': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати деревоподібне багаторівневе меню списків із вкладеної структури категорій.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо кореневий <code>&lt;ul class="tree-menu"&gt;</code>.</li>
    <li>У циклі перебираємо категорії: створюємо <code>&lt;li&gt;</code> з назвою.</li>
    <li>Якщо є підкатегорії (<code>cat.children</code>), створюємо вкладений <code>&lt;ul&gt;</code> та наповнюємо його через внутрішній цикл.</li>
  </ol>
</div>`,

  '9.8': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити інтерактивну схему глядацьких місць із перевіркою заброньованих крісел.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Зовнішній цикл по рядах, внутрішній по місцях у ряді.</li>
    <li>Формуємо ідентифікатор місця: <code>\${row}-\${seat}</code>.</li>
    <li>Перевіряємо, чи є місце в списку заброньованих: додаємо клас <code>seat--reserved</code> або <code>seat--available</code>.</li>
  </ol>
</div>`,

  '9.9': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити палітру відтінків кольорів у вигляді матриці плиток через вкладені цикли.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Зовнішній цикл перебирає групи кольорів (наприклад, Emerald, Indigo, Amber).</li>
    <li>Внутрішній цикл проходить по масиву відтінків і створює плитки <code>.palette-swatch</code>.</li>
    <li>Встановлюємо <code>backgroundColor</code> і відображаємо HEX-код кольору.</li>
  </ol>
</div>`,

  '9.10': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати порівняльну таблицю характеристик товарів через матричний обхід.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо заголовки стовпців для кожного товару.</li>
    <li>У зовнішньому циклі перебираємо характеристики, а у внутрішньому перевіряємо їх наявність у кожному товарі.</li>
    <li>Виводимо позначки <code>✓</code> або <code>—</code>.</li>
  </ol>
</div>`,

  '9.11': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати матрицю літер для гри в пошук слів (Word Search Grid).</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Налаштовуємо CSS Grid розміром <code>rows x cols</code>.</li>
    <li>У вкладених циклах створюємо клітинки з літерами та записуємо координати <code>data-row</code> та <code>data-col</code>.</li>
  </ol>
</div>`,

  '9.12': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згенерувати стовпчикову діаграму з групуванням показників за періодами.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Зовнішній цикл по періодах створює групи колонок на осі X.</li>
    <li>Внутрішній цикл створює стовпчики, висота яких пропорційна значенню: <code>height = val * scale + 'px'</code>.</li>
    <li>Встановлюємо фірмові кольори показників (наприклад, План vs Факт).</li>
  </ol>
</div>`,

  '10.1': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Застосувати ефект «зебри» до рядків таблиці за допомогою залишку від ділення на 2 у циклі <code>for</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Знаходимо всі рядки таблиці за селектором <code>tableElement.querySelectorAll('tbody tr')</code>.</li>
    <li>Запускаємо цикл <code>for (let i = 0; i &lt; rows.length; i++)</code>.</li>
    <li>Якщо <code>i % 2 === 0</code> (парний рядок) — встановлюємо <code>row.style.backgroundColor = evenBg</code> та видаляємо клас смуги.</li>
    <li>Інакше (непарний рядок) — встановлюємо <code>oddBg</code> та додаємо клас <code>table-row--striped</code>.</li>
    <li>Повертаємо кількість оброблених рядків <code>rows.length</code>.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Використання оператора <code>% 2</code> — найпростіший і найнадійніший спосіб чергування будь-яких стилів у циклі.</p>
</div>`,

  '10.2': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Миттєво та безпечно очистити всі дочірні елементи контейнера через цикл <code>while</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Ініціалізуємо лічильник видалених елементів <code>deletedCount = 0</code>.</li>
    <li>Використовуємо цикл <code>while (container.firstChild)</code>: доки у контейнера є перший нащадок, видаляємо його через <code>container.removeChild(container.firstChild)</code>.</li>
    <li>Збільшуємо лічильник на кожній ітерації.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Очищення через <code>removeChild</code> у циклі працює швидше та безпечніше за <code>innerHTML = ''</code>, оскільки браузер коректно вивільняє ресурси обробників подій.</p>
</div>`,

  '10.3': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Побудувати багаторівневе дерево вкладених списків <code>&lt;ul&gt;</code> та <code>&lt;li&gt;</code> із рекурсивною або циклічною структурою.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Створюємо функцію рендерингу вузла <code>renderNode(node)</code>.</li>
    <li>Створюємо пункт списку <code>&lt;li class="tree-item"&gt;</code> з назвою.</li>
    <li>Якщо у вузла є діти, створюємо вкладений <code>&lt;ul class="tree-sublist"&gt;</code> і через цикл рекурсивно додаємо дочірні вузли.</li>
  </ol>
</div>`,

  '10.4': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Реалізувати віджет покрокового майстра (Step Wizard) з кольоровою індикацією активного кроку.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>У циклі <code>for (let i = 0; i &lt; steps.length; i++)</code> створюємо кроки з <code>data-step="i + 1"</code>.</li>
    <li>Порівнюємо <code>i</code> з <code>currentStepIndex</code>:
      <ul>
        <li><code>i &lt; currentStepIndex</code>: крок пройдено (зелена рамка, клас <code>wizard-step--done</code>).</li>
        <li><code>i === currentStepIndex</code>: активний крок (індиго, <code>wizard-step--active</code>).</li>
        <li><code>i &gt; currentStepIndex</code>: очікує (сірий, <code>wizard-step--pending</code>).</li>
      </ul>
    </li>
  </ol>
</div>`,

  '10.5': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Знайти та підсвітити ключові слова у списку DOM-елементів за допомогою вкладених циклів та методів <code>split</code> / <code>join</code> без складних регулярних виразів.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Ініціалізуємо лічильник збігів <code>totalMatches = 0</code>.</li>
    <li>Зовнішній цикл перебирає елементи <code>elementsList</code>.</li>
    <li>Внутрішній цикл проходить по кожному ключовому слову з <code>keywords</code>.</li>
    <li>Розбиваємо текст через <code>text.split(word)</code>: кількість знайдених входжень дорівнює <code>parts.length - 1</code>.</li>
    <li>Якщо слово знайдено, збираємо текст назад: <code>parts.join('&lt;mark class="kw-highlight"&gt;' + word + '&lt;/mark&gt;')</code>.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Патерн <code>split(word).join(replacement)</code> — це найчистіший спосіб замінити всі входження підрядка без вивчення складного синтаксису RegExp.</p>
</div>`,

  '10.6': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Фільтрувати видимість елементів за предикатною функцією через цикл.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>У циклі перевіряємо результат виклику <code>predicateFn(el)</code>.</li>
    <li>Якщо <code>true</code>: показуємо елемент (<code>display = ''</code>) та видаляємо атрибут <code>hidden</code>.</li>
    <li>Якщо <code>false</code>: приховуємо (<code>display = 'none'</code>) та додаємо <code>hidden="true"</code>.</li>
    <li>Рахуємо та повертаємо кількість видимих елементів.</li>
  </ol>
</div>`,

  '10.7': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Відсортувати DOM-вузли за числовим або рядковим атрибутом та повторно впорядкувати їх у контейнері.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Збираємо дочірні елементи <code>children</code> у звичайний масив через цикл <code>for</code>.</li>
    <li>Сортуємо масив елементів за значенням атрибута <code>getAttribute(attrName)</code>.</li>
    <li>У циклі викликаємо <code>parent.appendChild(item)</code>: оскільки елементи вже існують у DOM, <code>appendChild</code> автоматично переміщує їх на нові впорядковані позиції.</li>
  </ol>
</div>`,

  '10.8': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Реалізувати клієнтську пагінацію дочірніх елементів контейнера через обчислення діапазону індексів.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Розраховуємо межі показу: <code>startIdx = (activePage - 1) * pageSize</code>, <code>endIdx = startIdx + pageSize</code>.</li>
    <li>У циклі по дочірніх елементах перевіряємо умову: <code>i &gt;= startIdx && i &lt; endIdx</code>.</li>
    <li>Якщо умова виконується — залишаємо елемент видимим (<code>display = ''</code>), інакше приховуємо (<code>display = 'none'</code>).</li>
  </ol>
</div>`,

  '10.9': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Пакетно оновити CSS-стилі масиву елементів за допомогою вкладених циклів по масивах.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Зовнішній цикл перебирає елементи <code>elementsList</code>.</li>
    <li>Внутрішній цикл проходить по двовимірному масиву пар стилів <code>stylesList</code> (наприклад, <code>[['color', '#fff'], ['opacity', '0.8']]</code>).</li>
    <li>Деструктуруємо пару: <code>const [prop, val] = stylesList[j]</code> та призначаємо інлайн-стиль: <code>el.style[prop] = val</code>.</li>
    <li>Повертаємо початковий список елементів.</li>
  </ol>
  <p><b>💡 Порада ментора:</b> Використання масиву пар замість об'єктів дозволяє вирішити задачу виключно засобами роботи з масивами та циклами.</p>
</div>`,

  '10.10': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Зчитати дані з HTML-таблиці назад у структурований масив об'єктів за допомогою циклів.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Першим циклом по заголовках <code>thead th</code> зчитуємо ключі колонок у масив <code>headers</code>.</li>
    <li>У зовнішньому циклі по рядках <code>tbody tr</code> створюємо об'єкт для кожного рядка.</li>
    <li>У внутрішньому циклі по клітинках <code>td</code> записуємо <code>rowObj[headers[c]] = cell.textContent.trim()</code>.</li>
    <li>Додаємо об'єкт у результуючий масив.</li>
  </ol>
</div>`,

  '10.11': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Згрупувати сусідні елементи з однаковим тегом у спільні обгортки за допомогою циклу <code>while</code>.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>Проходимося по дочірніх вузлах через цикл <code>while</code>.</li>
    <li>Коли знаходимо елемент із шуканим тегом, створюємо обгортку <code>&lt;div class="group-wrap"&gt;</code>.</li>
    <li>Вставляємо обгортку перед першим елементом та переносимо в неї всі наступні сусідні елементи з цим же тегом.</li>
  </ol>
</div>`,

  '10.12': `<div class="teacher-expl-section">
  <p><b>🎯 Мета та ідея розв'язку:</b> Створити каскадну анімацію елементів (Stagger Animation) через затримку <code>animationDelay</code> у циклі.</p>
  <p><b>🔄 Покроковий алгоритм:</b></p>
  <ol>
    <li>У циклі <code>for (let i = 0; i &lt; elementsList.length; i++)</code> розраховуємо затримку: <code>i * stepDelayMs + 'ms'</code>.</li>
    <li>Призначаємо <code>el.style.animationDelay</code> та додаємо клас анімації.</li>
    <li>Повертаємо максимальну затримку або сумарний час анімації.</li>
  </ol>
</div>`
};

// Replace rawSolution in build-dom-modules.mjs to encrypt { code: t.solutionBody, explanation: ... }
const targetLoop = `  for (const t of allNewTasks) {
    const rawSolution = t.solutionBody || '';
    if (rawSolution) {
      const encrypted = encryptTextNode(rawSolution, nodeKey);
      updatedEncrypted[t.id] = encrypted;

      // Verify integrity
      const decrypted = await decryptWithKey(encrypted, webCryptoKey);
      if (decrypted !== rawSolution) {
        throw new Error(\`Integrity verification failed for task \${t.id}\`);
      }
    }
    const { solutionBody, ...cleaned } = t;
    sanitizedNewTasks.push(cleaned);
  }`;

const newLoop = `  // Explanations dictionary for DOM modules 8, 9, 10
  const DOM_EXPLANATIONS = ${JSON.stringify(EXPLANATIONS, null, 2)};

  for (const t of allNewTasks) {
    const expl = DOM_EXPLANATIONS[t.id] || \`<div class="teacher-expl-section"><p><b>🎯 Мета та ідея розв'язку:</b> \${t.goal}</p><p><b>💡 Порада ментора:</b> \${t.hint}</p></div>\`;
    const payload = JSON.stringify({
      code: t.solutionBody || '',
      explanation: expl
    });
    
    const encrypted = encryptTextNode(payload, nodeKey);
    updatedEncrypted[t.id] = encrypted;

    // Verify integrity
    const decrypted = await decryptWithKey(encrypted, webCryptoKey);
    if (decrypted !== payload) {
      throw new Error(\`Integrity verification failed for task \${t.id}\`);
    }

    const { solutionBody, ...cleaned } = t;
    sanitizedNewTasks.push(cleaned);
  }`;

if (content.includes(targetLoop)) {
  content = content.replace(targetLoop, newLoop);
  console.log('✓ Successfully injected DOM explanations and updated encryption loop in build-dom-modules.mjs');
  fs.writeFileSync(filePath, content, 'utf8');
} else {
  console.warn('Target loop not found, checking if already modified...');
}

