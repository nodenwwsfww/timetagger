const translator = require('@parvineyvazov/json-translator');
/*
Let`s translate our deep object from English to Spanish
*/

const en_lang = {
    "btn-submit": "Submit",
    "btn-refresh": "Refresh",
    "btn-login": "Log in",
    "btn-logout": "Log out",
    "btn-logout-all": "Logout all other devices",
    "btn-reset-api-token": "Reset API token",
    "placeholder-username": "username",
    "placeholder-password": "password",
    "menubar-home": "Home",
    "menubar-account": "Account",
    "login-as-localhost": "Login as default user (on localhost)",
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
    "article-plural": {
    "one": "{count} article and counting",
        "other": "{count} articles and counting"
    },
    "nyan-cat-price": "Nyan Cat (Official) NFT: {price}",
        "publish-date": "Published {publishDate}"
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