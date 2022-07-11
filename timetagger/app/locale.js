// The lang our app first shows
const localesData = {
  "ru": {
    "btn-submit": "Подтвердить",
    "btn-cancel": "Отмена",
    "btn-delete": "Удалить",
    "btn-resume": "Продолжить",
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
    "export-span": "The table below contains all your records. This can be\n" +
        "            useful for backups, processing, or to move your data\n" +
        "            elsewhere.",
    "export-date-format": "Формат даты:",
    "local": "Local",
    "unix": "Unix",
    "export-iso": "ISO 8601",
    "copy": "Copy",
    "export-copy": "Копировать export-table",
    "export-keys": ["key", "start", "stop", "tags", "description"],
    "import": "Импорт",
    "analyse": "Анализ",
    "import-span": "Copy your table data (from e.g. a CSV file, a text file, or\n" +
        "            directly from Excel) and paste it in the text field below.\n" +
        "            CSV files can be dragged into the text field.\n" +
        "            See <a href='https://timetagger.app/articles/importing/'>this article</a>\n" +
        "            for details.",
    "export-consider-sandbox": "Consider importing into the <a target='new' href='sandbox'>Sandbox</a> first.",
    "no-data": "Нет данных",
    "could-not-determine": "Could not determine separator (tried tab, comma, semicolon)",
    "looks-like-separator": "Looks like the separator is ",
    "import-done": "Import done",
    "analyse-ignore-some-headers": "Игнорирование некоторых заголовков: ",
    "analyse-headers-recognized": "Все headers names recognized",
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
    "tags-duplicate": "<br>Duplicate tags: "

  },

  "en": {
    "btn-submit": "Submit",
    "btn-cancel": "Cancel",
    "btn-delete": "Delete",
    "btn-resume": "Resume",
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
    "local": "Local",
    "unix": "Unix",
    "export-iso": "ISO 8601",
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
    "export-consider-sandbox": "Consider importing into the <a target='new' href='sandbox'>Sandbox</a> first.",
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
    "tags-duplicate": "<br>Duplicate tags: "

  },
  "tr": {
    "btn-submit": "Göndermek",
    "btn-refresh": "Yenilemek",
    "btn-login": "Giriş yapmak",
    "btn-logout": "Çıkış Yap",
    "btn-logout-all": "Diğer tüm cihazları oturum açın",
    "btn-register": "Kayıt Olun",
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
    "notify-logging-out": "Oturumu kapatma ...",
    "notify-logging-in": "Oturum açma ...",
    "notify-import-done": "Import done",
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
    "login-as-default": "Hızlı giriş",
    "DAYS_SHORT": [
      "Воскр",
      "Пон",
      "Втор",
      "Сред",
      "Четв",
      "Пятн",
      "Суб",
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
    }
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
