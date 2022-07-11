// The lang our app first shows
const localesData = {
  "ru": {
    "btn-submit": "Подтвердить",
    "btn-confirm": "Подтвердить",
    "btn-cancel": "Отмена",
    "btn-delete": "Удалить",
    "btn-resume": "Продолжить",
    "btn-apply": "Применить",
    "btn-rename": "Переименовать",
    "btn-refresh": "Обновить",
    "btn-login": "Авторизация",
    "btn-logout": "Выйти",
    "btn-logout-all": "Выход всех остальных устройств",
    "btn-register": "Регистрация",
    "btn-rest-api-token": "Сбросить токен API",
    "placeholder-username": "имя пользователя",
    "placeholder-password": "пароль",
    "menubar-home": "Главная",
    "menubar-account": "Аккаунт",
    "login-as-localhost": "Войдите в качестве пользователя по умолчанию (на Localhost)",
    "signed-in-as": "Авторизовался как",
    "header-login": "Авторизация",
    "header-account": "Аккаунт",
    "header-auth-status": "Статус аутентификации",
    "get-auth-status": "Получение статуса автоза ...",
    "header-api-token": "Токен API",
    "get-api-token": "Получение токена API ...",
    "web-token-summary": "Детали веб-токена",
    "web-token-details": "Аутентификация происходит с использованием веб-тока, который получается при входе в систему. \n     Токен действителен в течение 14 дней и обновляется при использовании приложения. \n     Рекомендуется выйти из устройств, которые у вас нет. В случае, если вы забудете, \n     или когда устройство потеряно/украдено, семена токена могут быть сброшены, что приводит к выходу из всех остальных сеансов.",
    "api-token-summary": "Детали веб-токена",
    "api-token-details": "Токен API обеспечивает доступ к серверу для трехмерных приложений (например, инструмент CLI). Жетоны API не истекают. \n     Сбросьте токен, чтобы отозвать доступ для всех приложений, используя текущий токен API.",
    "login-status": "не вошел",
    "about": "О",
    "nyan-cat-price": "Nyan Cat (официальный) nft: {цена}",
    "publish-date": "Опубликовано {publishdate}",
    "notify-login-success": "Обмен токенами успешно",
    "notify-login-failed": "Не мог получить токен:",
    "notify-logged-as": "Вошел в систему как <b>",
    "notify-not-available": "Нет в наличии.",
    "notify-reset-web-token": "Сброс сидов веб -токена ...",
    "notify-logging-out": "Выходим из аккаунта ...",
    "notify-logging-in": "Входим ...",
    "notify-import-done": "Импорт завершен",
    "you-are-logged-out": "Вы не авторизованы.",
    "external-pages": "Внешние страницы",
    "homepage": "Домашняя страница",
    "manage": "Управлять",
    "search-records": "Поиск записей и тегов",
    "import-records": "Импорт записей",
    "export-all-records": "Экспорт всех записей",
    "account": "Аккаунт",
    "user": "Пользователь",
    "settings": "Настройки",
    "login": "Авторизоваться",
    "logout": "Выйти",
    "install-this-app": "<b> Установите это приложение </b>",
    "timeline": "График",
    "login-as-default": "Быстрый вход как стандартный пользователь",
    "DAYS_SHORT": [
      "Воскр",
      "Пон",
      "Втор",
      "Сред",
      "Четв",
      "Пятн",
      "Суб",
    ],
    "DAYS_LONG": [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
    MONTHS_SHORT: [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сент",
      "Окт",
      "Нояб",
      "Дек",
    ],
    MONTHS_LONG: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    "overview": "Обзор",
    "total": "Суммарно",
    "action-start-tracking": "Кликните на ▶ кнопку для старта трэкинга!",
    "report": "Отчет",
    "action-show-report": "Показать отчет [r]",
    "record": "Записать",
    "action-start-recording": "Начать запись [s]",
    "action-stop-recording": "Завершить запись [x]",
    "today": "Сегодня",
    "action-snap": "Переключиться на сегодня [d]",
    "action-select-time-range": "Выбрать временной диапазон [t]",
    "action-zoom-out": "Уменьшить масштаб [←]",
    "action-zoom-in": "Увеличить масштаб [→]",
    "action-step-backward": "Шаг вперёд [↑/pageUp]",
    "action-step-forward": "Шаг назад [↓/pageDown]",
    "shortcuts": {
      "_dialogs": "<b>В диалоговых окнах</b>",
      "Enter": "Подтвердить окно",
      "Escape": "Закрыть окно",
      "_nav": "<b>Навигация</b>",
      "N/Home/End": "Переключиться на сейчас",
      "D": "Выбрать сегодня",
      "W": "Выбрать эту неделю",
      "M": "Выбрать этот месяц",
      "↑/PageUp": "Шаг назад во времени",
      "↓/PageDown": "Шаг вперёд во времени",
      "→": "Увеличить",
      "←": "Уменьшить",
      "_other": "<b>Другое</b>",
      "S": "Запустить таймер/добавить ранн. запись",
      "Shift+S": "Возобновить текущ./предыдущ. запись",
      "X": "Остановить таймер",
      "T": "Выбрать временной промежуток",
      "R": "Открыть диалоговое окно отчета",
    },
    "settings": "Настройки",
    "settings-for-device": "Настройки для этого девайса",
    "appearance": "Внешний вид",
    "light-dark": "Светлая / Темная",
    "auto-detect": "Авто определение",
    "light-mode": "Светлая тема",
    "dark-mode": "Тёмная тема",
    "auto-scale": "Автоматическая шкала",
    "max": "Макс",
    "max-small": "макс",
    "width": "Ширина",
    "full-width": "Полная ширина",
    "pomodoro": "Помодоро",
    "enable-pomodoro": "Включить помодоро (бета)",
    "misc": "Разное",
    "show-elapsed-time": "Показывать истекшее время под кнопкой запуска",
    "other-settings": "Другие настройки",
    "time-zone": "Временная зона",
    "keyboard-shortcuts": "Сокращения для клавиатуры",
    "export": "Экспорт",
    "export-span": "Таблица ниже содержит все ваши записи. Это может быть \n             полезно для резервных копий, обработки или для перемещения ваших данных \n             в другом месте.",
    "export-date-format": "Формат даты:",
    "copy": "Копия",
    "export-copy": "Скопируйте экспортируемую таблицу",
    "export-keys": [
      "ключ",
      "старт",
      "стоп",
      "теги",
      "описание"
    ],
    "import": "Импорт",
    "analyse": "Анализировать",
    "import-span": "Скопируйте данные вашей таблицы (например, из файла CSV, текстового файла или \n             прямо из Excel) и вставьте его в текстовое поле ниже. \n             Файлы CSV могут быть перетаскиваются в текстовое поле. \n             См. \n             Для деталей.",
    "export-consider-sandbox": "",
    "no-data": "Нет данных",
    "could-not-determine": "Не удалось определить разделитель (попробована вкладка, запятая, точка с запятой)",
    "looks-like-separator": "Похоже, сепаратор",
    "import-done": "Импорт выполнен",
    "analyse-ignore-some-headers": "Игнорируя некоторые заголовки:",
    "analyse-headers-recognized": "Все названия заголовков узнают",
    "analyse-miss-required-header-start": "Отсутствует необходимый заголовок для начала времени.",
    "analyse-miss-required-header-stop": "Отсутствует необходимый заголовок для времени остановки или продолжительности.",
    "search-records-span": "Этот инструмент позволяет искать записи с помощью тегов и простого текста. \n             Затем вы можете отредактировать записи в списке или управлять выбранными тегами. <br> <br>",
    "search": "Поиск",
    "manage-tags": "Управлять тегами",
    "search-placeholder": "Теги или текст для поиска ...",
    "manage": "Управлять",
    "tags-and": "теги и",
    "strings-small": "строки",
    "searching-records": "Поиск записей для",
    "edit": "Редактировать",
    "record-keys": "остановка",
    "description": "Описание",
    "presets": "Предустановка",
    "recent": "Недавний",
    "time": "Время",
    "record-confirm-deleting": "Подтвердите удаление этой записи",
    "record-start-placeholder": "Чем вы планируете заняться?",
    "record-new-placeholder": "Что вы наделали?",
    "record-stop-placeholder": "Что вы только что сделали?",
    "record-run-placeholder": "Что вы делаете?",
    "record-other-placeholder": "Что было сделано?",
    "record-small": "записывать",
    "start": "Начать",
    "stop": "Остановить",
    "create": "Создать",
    "edit-running": "Редактировать бег",
    "chars-small": "символы",
    "tags": "Теги",
    "tags-use-example": "Используйте, например, '&#35;встреча', чтобы добавить один или несколько тегов.",
    "tags-duplicate": "<br> Дублируемые теги:",
    "target-hours-per": "часов в",
    "target-day": "День",
    "target-week": "Неделя",
    "target-month": "Месяц",
    "target-year": "Год",
    "tag-combo": "Комбо тэги",
    "target": "Цель",
    "buttons-for-tags": "кнопки для тегов здесь",
    "target-goes": "Цели находятся здесь",
    "start-now": "Начать сейчас",
    "start-earlier": "Началось раньше",
    "already-done": "Уже сделано",
    "still-running": "Все еще запущено",
    "stopped": "Остановлено",
    "no-records-found": "Записи не найдены",
    "type-to-toggle-recents": "(Наберите '#' для недавних / предустановленных)",
    "tag-presets": "Предварительные установки тегов",
    "tag-span": "Используйте текстовое поле ниже для определения предустановок тегов, по одной на строку.\n" +
        "            Каждая строка может содержать один или несколько тегов.\n" +
        "            Вы также можете перетащить текстовый файл с предустановками.",
    "check-and-save": "Проверить и сохранить",
    "processing": "Обработка ...",
    "new-tags": "Новый тег(ы):",
    "prepare-renaming": "Подготовка к переименованию ...",
    "tag-small": "тег",
    "tags-small": "теги",
    "done": "Готово",
    "preset": "предустановленный",
    "select-date-html": "<a>Сегодня <span class='keyhint'>d</span></a>\n" +
        "                <a>Эта неделя <span class='keyhint'>w</span></a>\n" +
        "                <a>Этот месяц <span class='keyhint'>m</span></a>\n" +
        "                <a>этот квартал</a>\n" +
        "                <a>этот год</a>\n" +
        "                <a>Вчерашний<wbr> день</a>\n" +
        "                <a>на прошлой неделе</a>\n" +
        "                <a>последний месяц</a>\n" +
        "                <a>последний квартал</a>\n" +
        "                <a>последний год</a>",
    "from": "От",
    "to": "До",
    "report-select-tags-span": "(Выберите теги на гл.панеле для фильтра)",
    "report-copy-table": "Копия таблицы",
    "report-date-range": "Диапазон дат",
    "report-grouping": "группировка",
    "date-small": "дата",
    "tag-order": "Порядок тега",
    "format": "Формат",
    "details": "Подробности",
    "hide-secondary-tags": "Скрыть вторичные теги",
    "hours-in-decimals": "Часы в десятичных десятиках",
    "show-records": "Показать записи",
    "to-paste-in-spreadsheet": "вставить в электронную таблицу",
    "to-save-as-spreadsheet": "Сохранить как электронная таблица (подробно)",
    "to-archive-or-send": "Архивировать или отправить клиенту",
    "save-csv": "Сохранить CSV",
    "save-pdf": "Сохранить PDF"
  },

  "en": {
    "btn-submit": "Submit",
    "btn-confirm": "Confirm",
    "btn-cancel": "Cancel",
    "btn-delete": "Delete",
    "btn-resume": "Resume",
    "btn-apply": "Apply",
    "btn-rename": "Rename",
    "btn-refresh": "Refresh",
    "btn-login": "Log in",
    "btn-logout": "Log out",
    "btn-logout-all": "Logout all other devices",
    "btn-register": "Register",
    "btn-rest-api-token": "Reset API token",
    "placeholder-username": "username",
    "placeholder-password": "password",
    "menubar-home": "Home",
    "menubar-account": "Account",
    "login-as-localhost": "Login as default user (on localhost)",
    "signed-in-as": "Signed in as ",
    "header-login": "Login",
    "header-account": "Account",
    "header-auth-status": "Authentication status",
    "get-auth-status": "Getting auth status ...",
    "header-api-token": "API toke",
    "get-api-token": "Getting API token ...",
    "web-token-summary": "web-token details",
    "web-token-details": "Authentication occurs using a web-token that is obtained when logging in.\n" +
        "    The token is valid for 14 days, and is refreshed when you use the application.\n" +
        "    It is recommended to log out on devices that you do not own. In case you forget,\n" +
        "    or when a device is lost/stolen, the token seed can be reset, causing all other sessions to log out.",
    "api-token-summary": "web-token details",
    "api-token-details": "The API token enables access to the server for 3d party applications (e.g. the CLI tool). API tokens do not expire.\n" +
        "    Reset the token to revoke access for all applications using the current API token.",
    "login-status": "not-logged-in",
    "about": "About",
    "nyan-cat-price": "Nyan Cat (Official) NFT: {price}",
    "publish-date": "Published {publishDate}",
    "notify-login-success": "Token exchange succesful",
    "notify-login-failed": "Could not get token:",
    "notify-logged-as": "Logged in as <b>",
    "notify-not-available": "Not available.",
    "notify-reset-web-token": "Resetting web token seed ...",
    "notify-logging-out": "Logging out ...",
    "notify-logging-in": "Logging in ...",
    "notify-import-done": "Import done",
    "you-are-logged-out": "You are logged out.",
    "external-pages": "External pages",
    "homepage": "Homepage",
    "manage": "Manage",
    "search-records": "Search records and tags",
    "import-records": "Import records",
    "export-all-records": "Export all records",
    "account": "Account",
    "user": "User",
    "settings": "Settings",
    "login": "Login",
    "logout": "Logout",
    "install-this-app": "<b>Install this app</b>",
    "timeline": "Timeline",
    "login-as-default": "Just Login as default user",
    "DAYS_SHORT": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ],
    "DAYS_LONG": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    MONTHS_SHORT: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    MONTHS_LONG: [
      "Januari",
      "Februari",
      "March",
      "April",
      "May",
      "June",
      "Juli",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    "overview": "Overview",
    "total": "Total",
    "action-start-tracking": "Click the ▶ button to start tracking!",
    "report": "Report",
    "action-show-report": "Show report [r]",
    "record": "Record",
    "action-start-recording": "Start recording [s]",
    "action-stop-recording": "Stop recording [x]",
    "today": "Today",
    "action-snap": "Snap to now [d]",
    "action-select-time-range": "Select time range [t]",
    "action-zoom-out": "Zoom out [←]",
    "action-zoom-in": "Zoom in [→]",
    "action-step-backward": "Step backward [↑/pageUp]",
    "action-step-forward": "Step forward [↓/pageDown]",
    "shortcuts": {
      "_dialogs": "<b>In dialogs</b>",
      "Enter": "Submit dialog",
      "Escape": "Close dialog",
      "_nav": "<b>Navigation</b>",
      "N/Home/End": "Snap to now",
      "D": "Select today",
      "W": "Select this week",
      "M": "Select this month",
      "↑/PageUp": "Step back in time",
      "↓/PageDown": "Step forward in time",
      "→": "Zoom in",
      "←": "Zoom out",
      "_other": "<b>Other</b>",
      "S": "Start the timer or add an earlier record",
      "Shift+S": "Resume the current/previous record",
      "X": "Stop the timer",
      "T": "Select time range",
      "R": "Open report dialog",
    },
    "settings": "Settings",
    "settings-for-device": "Settings for this device",
    "appearance": "Appearance",
    "light-dark": "Light / dark",
    "auto-detect": "Auto detect",
    "light-mode": "Light mode",
    "dark-mode": "Dark mode",
    "auto-scale": "Auto scale",
    "max": "Max",
    "max-small": "max",
    "width": "Width",
    "full-width": "Full width",
    "pomodoro": "Pomodoro",
    "enable-pomodoro": "Enable pomodoro (experimental)",
    "misc": "Misc",
    "show-elapsed-time": "Show elapsed time below start-button",
    "other-settings": "Other settings",
    "time-zone": "Time zone",
    "keyboard-shortcuts": "Keyboard shortcuts",
    "export": "Export",
    "export-span": "The table below contains all your records. This can be\n" +
        "            useful for backups, processing, or to move your data\n" +
        "            elsewhere.",
    "export-date-format": "Date-time format:",
    "copy": "Copy",
    "export-copy": "Copy export-table",
    "export-keys": ["key", "start", "stop", "tags", "description"],
    "import": "Import",
    "analyse": "Analyse",
    "import-span": "Copy your table data (from e.g. a CSV file, a text file, or\n" +
        "            directly from Excel) and paste it in the text field below.\n" +
        "            CSV files can be dragged into the text field.\n" +
        "            See <a href='https://timetagger.app/articles/importing/'>this article</a>\n" +
        "            for details.",
    "export-consider-sandbox": "",
    "no-data": "No data",
    "could-not-determine": "Could not determine separator (tried tab, comma, semicolon)",
    "looks-like-separator": "Looks like the separator is ",
    "import-done": "Import done",
    "analyse-ignore-some-headers": "Ignoring some headers: ",
    "analyse-headers-recognized": "All headers names recognized",
    "analyse-miss-required-header-start": "Missing required header for start time.",
    "analyse-miss-required-header-stop": "Missing required header for stop time or duration.",
    "search-records-span": "This tool allows you to search records by tags and plain text.\n" +
        "            You can then edit the records in the list, or manage the selected tags.<br><br>",
    "search": "Search",
    "manage-tags": "Manage tags",
    "search-placeholder": "Tags or text to search for ...",
    "manage": "Manage",
    "tags-and": "tags and",
    "strings-small": "strings",
    "searching-records": "Searching records for",
    "edit": "Edit",
    "new": "New",
    "record-keys": ("start", "new", "edit", "stop"),
    "description": "Description",
    "presets": "Presets",
    "recent": "Recent",
    "time": "Time",
    "record-confirm-deleting": "Confirm deleting this record",
    "record-start-placeholder": "What are you going to do?",
    "record-new-placeholder": "What have you done?",
    "record-stop-placeholder": "What did you just do?",
    "record-run-placeholder": "What are you doing?",
    "record-other-placeholder": "What has been done?",
    "record-small": "record",
    "start": "Start",
    "stop": "Stop",
    "create": "Create",
    "edit-running": "Edit running",
    "chars-small": "chars",
    "tags": "Tags",
    "tags-use-example": "Use e.g. '&#35;meeting' to add one or more tags.",
    "tags-duplicate": "<br>Duplicate tags: ",
    "target-hours-per": "hours per",
    "target-day": "Day",
    "target-week": "Week",
    "target-month": "Month",
    "target-year": "Year",
    "tag-combo": "Tag combo",
    "target": "Target",
    "buttons-for-tags": "buttons for tags go here",
    "target-goes": "target goes here",
    "start-now": "Start now",
    "start-earlier": "Started earlier",
    "already-done": "Already done",
    "start-now": "Start now",
    "still-running": "Still running",
    "stopped": "Stopped",
    "no-records-found": "No records found",
    "type-to-toggle-recents": "(type '#' to toggle recents / presets)",
    "tag-presets": "Tag presets",
    "tag-span": "Use the text field below to define tag presets, one per line.\n" +
        "            Each line may contain one or more tags.\n" +
        "            You can also drag-and-drop a text file with presets.",
    "check-and-save": "Check & Save",
    "processing": "Processing ...",
    "new-tags": "New tag(s):",
    "prepare-renaming": "Prepare renaming ...",
    "tag-small": "tag",
    "tags-small": "tags",
    "done": "Done",
    "preset": "preset",
    "select-date-html": "\"<a>today <span class='keyhint'>d</span></a>\\n\" +\n" +
        "        \"                <a>this week <span class='keyhint'>w</span></a>\\n\" +\n" +
        "        \"                <a>this month <span class='keyhint'>m</span></a>\\n\" +\n" +
        "        \"                <a>this quarter</a>\\n\" +\n" +
        "        \"                <a>this year</a>\\n\" +\n" +
        "        \"                <a>yester<wbr>day</a>\\n\" +\n" +
        "        \"                <a>last week</a>\\n\" +\n" +
        "        \"                <a>last month</a>\\n\" +\n" +
        "        \"                <a>last quarter</a>\\n\" +\n" +
        "        \"                <a>last year</a>\"",
    "from": "From",
    "to": "To",
    "report-select-tags-span": "(select tags in the overview panel to filter by them)",
    "report-copy-table": "Copy table",
    "report-date-range": "Date range",
    "report-grouping": "grouping",
    "date-small": "date",
    "tag-order": "Tag order",
    "format": "Format",
    "details": "Details",
    "hide-secondary-tags": "Hide secondary tags",
    "hours-in-decimals": "Hours in decimals",
    "show-records": "Show records",
    "to-paste-in-spreadsheet": "to paste in a spreadsheet",
    "to-save-as-spreadsheet": "to save as spreadsheet (with more details)",
    "to-archive-or-send": "to archive or send to a client",
    "save-csv": "Save CSV",
    "save-pdf": "Save PDF"


  },
  "tr": {
    "btn-submit": "Göndermek",
    "btn-confirm": "Onaylamak",
    "btn-cancel": "İptal",
    "btn-delete": "Silmek",
    "btn-resume": "Sürdürmek",
    "btn-apply": "Uygulamak",
    "btn-rename": "Yeniden isimlendirmek",
    "btn-refresh": "Yenilemek",
    "btn-login": "Giriş yapmak",
    "btn-logout": "Çıkış Yap",
    "btn-logout-all": "Diğer tüm cihazları oturum açın",
    "btn-register": "Kayıt ol",
    "btn-rest-api-token": "API jetonunu sıfırla",
    "placeholder-username": "Kullanıcı adı",
    "placeholder-password": "şifre",
    "menubar-home": "Ev",
    "menubar-account": "Hesap",
    "login-as-localhost": "Varsayılan kullanıcı olarak giriş yapın (LocalHost'ta)",
    "signed-in-as": "Olarak giriş yapıldı",
    "header-login": "Giriş yapmak",
    "header-account": "Hesap",
    "header-auth-status": "Kimlik Doğrulama Durumu",
    "get-auth-status": "Auth Durum Almak ...",
    "header-api-token": "API jetonu",
    "get-api-token": "API jetonunu almak ...",
    "web-token-summary": "Web-Token Ayrıntıları",
    "web-token-details": "Kimlik doğrulama, giriş yaparken elde edilen bir web-token kullanılarak gerçekleşir. \n     Jeton 14 gün boyunca geçerlidir ve uygulamayı kullandığınızda yenilenir. \n     Sahip olmadığınız cihazlarda oturum açmanız önerilir. Unutursan \n     Veya bir cihaz kaybolduğunda/çalındığında, jeton tohumu sıfırlanabilir ve diğer tüm oturumların çıkış yapmasına neden olabilir.",
    "api-token-summary": "Web-Token Ayrıntıları",
    "api-token-details": "API jetonu, 3D taraf uygulamaları için sunucuya erişim sağlar (örn. CLI aracı). API jetonlarının süresi dolmaz. \n     Geçerli API jetonunu kullanarak tüm uygulamalar için erişimi iptal etmek için jeton sıfırlayın.",
    "login-status": "Giriş yapmadınız",
    "about": "Hakkında",
    "nyan-cat-price": "Nyan Cat (Resmi) NFT: {Price}",
    "publish-date": "Yayınlandı {publishdate}",
    "notify-login-success": "Token Borsası Başarılı",
    "notify-login-failed": "Jeton alamadım:",
    "notify-logged-as": "AS <b> olarak oturum açtı",
    "notify-not-available": "Müsait değil.",
    "notify-reset-web-token": "Web token tohumu sıfırlama ...",
    "notify-logging-out": "Oturum açma ...",
    "notify-logging-in": "Giriş ...",
    "notify-import-done": "İthalat bitti",
    "you-are-logged-out": "Oturum açtınız.",
    "external-pages": "Harici sayfalar",
    "homepage": "Ana sayfa",
    "manage": "Üstesinden gelmek",
    "search-records": "Arama Kayıtları ve Etiketler",
    "import-records": "İçe Aktarma Kayıtları",
    "export-all-records": "Tüm kayıtları dışa aktarın",
    "account": "Hesap",
    "user": "Kullanıcı",
    "settings": "Ayarlar",
    "login": "Giriş yapmak",
    "logout": "Çıkış Yap",
    "install-this-app": "<b> Bu uygulamayı yükleyin </b>",
    "timeline": "Zaman çizelgesi",
    "login-as-default": "Sadece varsayılan kullanıcı olarak giriş yapın",
    "DAYS_SHORT": [
      "Güneş",
      "Mon",
      "Salı",
      "evlenmek",
      "Thu",
      "Cum",
      "Oturdu"
    ],
    "DAYS_LONG": [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi"
    ],
    "MONTHS_SHORT": [
      "Ocak",
      "Şubat",
      "Martı",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz ayında",
      "Ağustos",
      "Sep",
      "Ekim",
      "Kasım",
      "Aralık"
    ],
    "MONTHS_LONG": [
      "Januari",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Juli",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık"
    ],
    "overview": "Genel bakış",
    "total": "Toplam",
    "action-start-tracking": "İzlemeye başlamak için ▶ düğmesini tıklayın!",
    "report": "Bildiri",
    "action-show-report": "Raporu Göster [R]",
    "record": "Kayıt",
    "action-start-recording": "Kayıt yapmaya başlayın [S]",
    "action-stop-recording": "Kayıt yapmayı bırak [x]",
    "today": "Bugün",
    "action-snap": "Şimdiye kadar [D]",
    "action-select-time-range": "Zaman aralığını seçin [t]",
    "action-zoom-out": "Yakınlaştırma [←]",
    "action-zoom-in": "Yakınlaştırma [→]",
    "action-step-backward": "Geriye doğru adım atın [↑/Pageup]",
    "action-step-forward": "İleri adım [↓/Pagedown]",
    "shortcuts": {
      "_dialogs": "<b> diyaloglarda </b>",
      "Enter": "İletişim kutusu",
      "Escape": "KAPATIR Diyalog",
      "_nav": "<b> Navigasyon </b>",
      "N/Home/End": "Şimdiye kadar Snap",
      "D": "Bugün Seçin",
      "W": "Bu haftayı seçin",
      "M": "Bu ay seçin",
      "↑/PageUp": "Zamanında geri adım at",
      "↓/PageDown": "Zamanında ileri adım at",
      "→": "Yakınlaştır",
      "←": "Uzaklaştır",
      "_other": "<b> Diğer </b>",
      "S": "Zamanlayıcıyı başlatın veya daha erken bir kayıt ekleyin",
      "Shift+S": "Mevcut/önceki kayda devam edin",
      "X": "Zamanlayıcıyı durdurun",
      "T": "Zaman Aralığı Seçin",
      "R": "Rapor iletişim kutusunu açın"
    },
    "settings-for-device": "Bu cihaz için ayarlar",
    "appearance": "Dış görünüş",
    "light-dark": "Açık / karanlık",
    "auto-detect": "Otomatik algılama",
    "light-mode": "Işık Modu",
    "dark-mode": "Karanlık mod",
    "auto-scale": "Oto-ölçekleme",
    "max": "Maksimum",
    "max-small": "maksimum",
    "width": "Genişlik",
    "full-width": "Tam genişlik",
    "pomodoro": "Pomodor",
    "enable-pomodoro": "Etkinleştir Pomodoro (deneysel)",
    "misc": "Yanlış",
    "show-elapsed-time": "Başlangıç düğmesinin altında geçen zamanı göster",
    "other-settings": "Diğer ayarlar",
    "time-zone": "Saat dilimi",
    "keyboard-shortcuts": "Klavye kısayolları",
    "export": "İhracat",
    "export-span": "Aşağıdaki tablo tüm kayıtlarınızı içerir. Bu olabilir \n             Yedeklemeler, işleme veya verilerinizi taşımak için kullanışlı \n             başka yerlerde.",
    "export-date-format": "Tarih zamanı formatı:",
    "copy": "Kopya",
    "export-copy": "Dışa aktarma tablosunu kopyala",
    "export-keys": [
      "anahtar",
      "Başlat",
      "Dur",
      "Etiketler",
      "tanım"
    ],
    "import": "İçe aktarmak",
    "analyse": "Analiz etmek",
    "import-span": "Tablo verilerinizi kopyalayın (örneğin bir CSV dosyası, bir metin dosyası veya \n             doğrudan Excel'den) ve aşağıdaki metin alanına yapıştırın. \n             CSV dosyaları metin alanına sürüklenebilir. \n             Bkz. \n             detaylar için.",
    "export-consider-sandbox": "-",
    "no-data": "Veri yok",
    "could-not-determine": "Ayırıcı belirleyemedi (denenmiş sekme, virgül, noktalı virgül)",
    "looks-like-separator": "Ayrılık gibi görünüyor",
    "import-done": "İthalat bitti",
    "analyse-ignore-some-headers": "Bazı başlıkları görmezden gelmek:",
    "analyse-headers-recognized": "Tüm başlık adları tanındı",
    "analyse-miss-required-header-start": "Başlangıç zamanı için gerekli başlık eksik.",
    "analyse-miss-required-header-stop": "Durma süresi veya süre için gerekli başlık eksik.",
    "search-records-span": "Bu araç, kayıtları etiketlere ve düz metinlere göre aramanıza olanak tanır. \n             Daha sonra listedeki kayıtları düzenleyebilir veya seçilen etiketleri yönetebilirsiniz. <br> <br>",
    "search": "Arama",
    "manage-tags": "Etiketleri Yönetin",
    "search-placeholder": "Aramak için etiketler veya metinler ...",
    "tags-and": "Etiketler ve",
    "strings-small": "Teller",
    "searching-records": "İçin kayıtlar arıyor",
    "edit": "Düzenlemek",
    "new": "Yeni",
    "record-keys": "Dur",
    "description": "Tanım",
    "presets": "Ön planlar",
    "recent": "Son",
    "time": "Zaman",
    "record-confirm-deleting": "Bu kaydı silmeyi onaylayın",
    "record-start-placeholder": "Ne yapacaksın?",
    "record-new-placeholder": "Sen ne yaptın?",
    "record-stop-placeholder": "Sen ne yaptın?",
    "record-run-placeholder": "Ne yapıyorsun?",
    "record-other-placeholder": "Ne yapıldı?",
    "record-small": "kayıt",
    "start": "Başlama",
    "stop": "Durmak",
    "create": "Oluşturmak",
    "edit-running": "Çalıştırmayı Düzenle",
    "chars-small": "chars",
    "tags": "Etiketler",
    "tags-use-example": "Örn. Bir veya daha fazla etiket eklemek için 'toplantı'.",
    "tags-duplicate": "<br> Yinelenen etiketler:",
    "target-hours-per": "saatlerce saat",
    "target-day": "Gün",
    "target-week": "Hafta",
    "target-month": "Ay",
    "target-year": "Yıl",
    "tag-combo": "Tag Combo",
    "target": "Hedef",
    "buttons-for-tags": "Etiketler için düğmeler buraya gidin",
    "target-goes": "Hedef buraya gidiyor",
    "start-now": "Şimdi başla",
    "start-earlier": "Daha önce başladı",
    "already-done": "Zaten bitti",
    "still-running": "Hala koşuyor",
    "stopped": "Durdu",
    "no-records-found": "kayıt bulunamadı",
    "type-to-toggle-recents": "(Recents / ön ayarları değiştirmek için '#' yazın)",
    "tag-presets": "Etiket Ön Ayarları",
    "tag-span": "Satır başına bir tane olmak üzere etiket ön ayarlarını tanımlamak için aşağıdaki metin alanını kullanın. \n             Her satır bir veya daha fazla etiket içerebilir. \n             Ayrıca ön ayarlarla bir metin dosyasını sürükleyip bırakabilirsiniz.",
    "check-and-save": "Kontrol et ve kaydet",
    "processing": "İşleme ...",
    "new-tags": "Yeni etiketler:",
    "prepare-renaming": "Yeniden adlandırma hazırlayın ...",
    "tag-small": "etiket",
    "tags-small": "Etiketler",
    "done": "Tamamlandı",
    "preset": "önceden belirlemek",
    "select-date-html": "\"<a> Bugün <span class = 'keyhint'> d </span> </a> \\ n\" + \n         \"<a> Bu hafta <span class = 'keyhint'> w </span> </a> \\ n\" + \n         \"<a> Bu ay <span class = 'keyhint'> m </span> </a> \\ n\" + \n         \"<a> Bu çeyrek </a> \\ n\" + \n         \"<a> Bu yıl </a> \\ n\" + \n         \"<a> dün <wbr> gün </a> \\ n\" + \n         \"<a> Geçen hafta </a> \\ n\" + \n         \"<a> Geçen ay </a> \\ n\" + \n         \"<a> Son çeyrek </a> \\ n\" + \n         \"<a> Geçen yıl </a>\"",
    "from": "İtibaren",
    "to": "İle",
    "report-select-tags-span": "(Onlar tarafından filtrelemek için Genel Bakış panelindeki etiketleri seçin)",
    "report-copy-table": "Kopyala Tablosu",
    "report-date-range": "Tarih aralığı",
    "report-grouping": "gruplandırma",
    "date-small": "tarih",
    "tag-order": "Etiket Siparişi",
    "format": "Biçim",
    "details": "Detaylar",
    "hide-secondary-tags": "İkincil Etiketleri Gizle",
    "hours-in-decimals": "Ondalık saatlerde saatler",
    "show-records": "Kayıtları Göster",
    "to-paste-in-spreadsheet": "bir e -tabloda yapıştırmak için",
    "to-save-as-spreadsheet": "E -tablo olarak kaydetmek için (daha fazla ayrıntıyla)",
    "to-archive-or-send": "arşivlemek veya bir müşteriye göndermek için",
    "save-csv": "CSV Kaydet",
    "save-pdf": "PDF Kaydet"
  }
};

window.localesData = localesData;

const defaultLocale = "en"
const supportedLocales = ["en", "ru", "tr"];

const fullyQualifiedLocaleDefaults = {
  en: "en-US",
  ru: "ru-RU",
  tr: "tr-TR"
};

// The active lang
let locale;

// Gets filled with active lang translations
let translations = {};

function tryTranslateAppCanvas() {
  console.log('test')
  if (!window.location.href.includes('app')) return;
  const canvas = document.getElementById('canvas')
  if (canvas) console.dir(canvas);

}

// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {

  let mayLanguage = (navigator.language || navigator.userLanguage).slice(0, 2);

  const initialLocale = supportedOrDefault(
    browserLocales(true),
  );

  if (!mayLanguage) mayLanguage = initialLocale;

  const curLocale = localStorage.getItem("locale");
  const finalLocale = curLocale ? curLocale : mayLanguage;

  setLocale(finalLocale);
  bindLocaleSwitcher(finalLocale);
  // Костыли (проганье на питоне и на js даёт о себе знать (удобства)
  tryTranslateAppCanvas();

});

// Load translations for the given lang and translate
// the page to this lang
async function setLocale(newLocale) {
  if (newLocale === locale) return;

  const newTranslations = localesData[newLocale];

  locale = newLocale;
  window.locale = locale;

  translations = newTranslations;
  document.documentElement.lang = newLocale;
  document.documentElement.dir = dir(newLocale);

  translatePage();
  console.log('saved', newLocale);
  localStorage.setItem("locale", newLocale);
}

// Retrieves translations JSON object for the given
// lang over the network
// async function fetchTranslationsFor(newLocale) {
//   const response = await fetch(`/lang/${newLocale}.json`);
//   return await response.json();
// }

// Replace the inner text of all elements with the
// data-i18n-key attribute to translations corresponding
// to their data-i18n-key
function translatePage() {
  document
    .querySelectorAll("[data-i18n-key]")
    .forEach((el) => translateElement(el));
}

// Replace the inner text of the given HTML element
// with the translation in the active lang,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");

  const options =
    JSON.parse(element.getAttribute("data-i18n-opt")) || {};

  element.innerText = translate(key, options);
  if (element.placeholder && !element.innerText) element.placeholder = translate(key, options);
}

function translate(key, interpolations = {}) {
  const message = translations[key];

  if (key.endsWith("-plural")) {
    return interpolate(
      pluralFormFor(message, interpolations.count),
      interpolations,
    );
  }

  return interpolate(message, interpolations);
}

// Convert a message like "Hello, {name}" to "Hello, Chad"
// where the given interpolations object is {name: "Chad"}
function interpolate(message, interpolations) {
  return Object.keys(interpolations).reduce(
    (interpolated, key) => {
      const value = formatDate(
        formatNumber(interpolations[key]),
      );

      return interpolated.replace(
        new RegExp(`{\s*${key}\s*}`, "g"),
        value,
      );
    },
    message,
  );
}

/*
  Given a value object like
  {
    "number" : 300000,
    "style": "currency",
    "currency": "EUR"
  } and that the current lang is en, returns "€300,000.00"
*/
function formatNumber(value) {
  if (typeof value === "object" && value.number) {
    const { number, ...options } = value;

    return new Intl.NumberFormat(
      fullyQualifiedLocaleDefaults[locale],
      options,
    ).format(number);
  } else {
    return value;
  }
}

/*
  Given a value object like
  {
    "date": "2021-12-05 15:29:00",
    "dateStyle": "long",
    "timeStyle": "short"
  } and that the current lang is en,
  returns "December 5, 2021 at 3:29 PM"
*/
function formatDate(value) {
  if (typeof value === "object" && value.date) {
    const { date, ...options } = value;

    const parsedDate =
      typeof date === "string" ? Date.parse(date) : date;

    return new Intl.DateTimeFormat(
      fullyQualifiedLocaleDefaults[locale],
      options,
    ).format(parsedDate);
  } else {
    return value;
  }
}

/*
  Given a forms object like
  {
    "zero": "No articles",
    "one": "One article",
    "other": "{count} articles"
  } and a count of 1, returns "One article"
*/
function pluralFormFor(forms, count) {
  const matchingForm = new Intl.PluralRules(locale).select(
    count,
  );

  return forms[matchingForm];
}

function isSupported(locale) {
  return supportedLocales.indexOf(locale) > -1;
}

// Retrieve the first lang we support from the given
// array, or return our default lang
function supportedOrDefault(locales) {
  return locales.find(isSupported) || defaultLocale;
}

function dir(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

function bindLocaleSwitcher(initialValue) {
  const switcher = document.querySelector(
    "[data-i18n-switcher]",
  );

  switcher.value = initialValue;

  switcher.onchange = (e) => {
    setLocale(e.target.value);
  };
}

/**
 * Retrieve user-preferred locales from browser
 *
 * @param {boolean} languageCodeOnly - when true, returns
 * ["en", "fr"] instead of ["en-US", "fr-FR"]
 * @returns array | undefined
 */
function browserLocales(languageCodeOnly = false) {
  return navigator.languages.map((locale) =>
    languageCodeOnly ? locale.split("-")[0] : locale,
  );
}
