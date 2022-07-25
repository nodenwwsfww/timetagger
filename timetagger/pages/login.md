<h1 data-i18n-key="header-login" id="login-header">Login</h1>

<script src='./app/tools.js'></script>
<script src='./app/locale.js'></script>
<script src="https://yandex.ru/games/sdk/v2"></script>
<script>
  YaGames.init({ adv: { onAdvClose: wasShown => { console.info('adv closed!'); }}}).then(ysdk => {
    console.log('Yandex SDK initialized');
    window.ysdk = ysdk;
    var isOpened = false;

    var callbacks = {
      onOpen: () => {
        isOpened = true;
      },
      onClose: () => {
        isOpened = false;
      },
      onError: (error) => {
        console.log('errored to show adv: ', error);
        isOpened = false;
      }
    };

    setLocale(ysdk.environment.i18n.lang);
    console.log('Set locale', ysdk.environment.i18n.lang);

    function showAD() {
      if (!isOpened) {
        ysdk.adv.showFullscreenAdv({
          callbacks: callbacks
        })
      }
    }

    window.showAD = showAD;

    showAD();
  });
</script>

<script>
async function login(payload) {
    // Reset status
    let el = document.getElementById("result");
    el.innerHTML = "Logging in ..."
    await tools.sleepms(100);

    // The body is obfuscated with base64, but not encrypted.
    let body = btoa(JSON.stringify(payload));

    // Do request   
    let url = tools.build_api_url("bootstrap_authentication");
    let init = {method: "POST", headers: {}, body: body};
    let res = await fetch(url, init);

    // Handle response
    if (res.status != 200) {
        let text = await res.text();
        el.setAttribute("data-i18n-key", "notify-login-failed");
        el.innerText = "Could not get token:";
        translateElement(el);
        el.innerText += ' ' + text;
    } else {
        let token = JSON.parse(await res.text()).token;
        tools.set_auth_info_from_token(token);
        el.setAttribute("data-i18n-key", "notify-login-success");
        el.innerText = "Token exchange succesful";
        translateElement(el);
        let state = tools.url2dict(location.hash);
        location.replace(state.page || "./app/");
    }
}

async function login_localhost() {
    await login({"method": "localhost"});
}


async function login_credentials(username) {
    let input_u = document.getElementById("input_u");
    console.log("try login");
    let usernameValue = username;

    if (!usernameValue) usernameValue = input_u.value;

    await login({"method": "username", "username": usernameValue});
}

async function login_yandex() {
    function initPlayer() {
      console.log(window.ysdk);
      return window.ysdk.getPlayer().then((_player) => {
        var player = _player;

        return player;
      });
    }

    initPlayer().then((_player) => {
      window.ysdk.auth.openAuthDialog().then(async () => {
        try {
            const username = _player.getUniqueID();
            console.log('success login yandex');
            login_credentials(username);
        } catch (e) {
            console.error('unknown error with yandex', e);
        }
      });
    });
}



async function load() {
    let buttonLogin = document.getElementById("submit_up");
    let but2 = document.getElementById("submit_localhost");

    buttonLogin.onclick = login_credentials;
    console.log("add onclick");

    login_yandex();

    if (location.hostname == "localhost" || location.hostname == "127.0.0.1") {
        if (but2) but2.style.display = "block";
    }
}

window.addEventListener('load', load);
</script>

<input id='input_u' type='text' data-i18n-key="placeholder-username" placeholder='username' style='margin:4px;'/><br />
<button id='submit_up' class='whitebutton' style='margin:4px;' data-i18n-key="btn-submit">
    Submit
</button>

<br />

<br/>

<select data-i18n-switcher class="locale-switcher">
    <option value="en">English</option>
    <option value="ru">Russian (Русский)</option>
    <option value="tr">Turkish (Türkçe)</option>
</select>

<p id='result'></p>

