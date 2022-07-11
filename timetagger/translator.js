const translator = require('@parvineyvazov/json-translator');
/*
Let`s translate our deep object from English to Spanish
*/

const en_lang = {
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
}

/*
FOR JavaScript don`t use translator.translatedObject (No need to remark its type)
*/

const main = async () => {
    let es_lang = await translator.translateObject(
        en_lang,
        translator.languages.English,
        translator.languages.Turkish
    );

    const json = JSON.stringify(es_lang);
    console.log(json)
    const fs = require('fs')
    fs.writeFile('localized.json', json, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log('Lyric saved!');
    });
};
main()