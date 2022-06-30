<h1 data-i18n-key="header-login" id="login-header">Login</h1>

<script src='./app/tools.js'></script>
<script src='./app/locale.js'></script>
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

async function login_credentials() {
    let input_u = document.getElementById("input_u");
    let input_p = document.getElementById("input_p");
    await login({"method": "usernamepassword", "username": input_u.value, "password": input_p.value});
}

async function load() {
    let but1 = document.getElementById("submit_up");
    let but2 = document.getElementById("submit_localhost");
    let input_p = document.getElementById("input_p");

    but1.onclick = login_credentials;
    but2.onclick = login_localhost;
    input_p.onkeydown = function (e) { if (e.key == "Enter" || e.key == "Return") {login_credentials();} };

    if (location.hostname == "localhost" || location.hostname == "127.0.0.1") {
        but2.style.display = "block";
    }
}

window.addEventListener('load', load);
</script>

<input id='input_u' type='text' data-i18n-key="placeholder-username" placeholder='username' style='margin:4px;'/><br />
<input id='input_p' type='password' data-i18n-key="placeholder-password" placeholder='password' style='margin:4px;'/><br />
<button id='submit_up' class='whitebutton' style='margin:4px;' data-i18n-key="btn-submit">
    Submit
</button>

<br />
<button id='submit_localhost' class='whitebutton' style='margin:4px; display: none;' data-i18n-key="login-as-localhost" >Login as default user (on localhost)</button>

<br/>

<select data-i18n-switcher class="locale-switcher">
    <option value="en">English</option>
    <option value="ru">Russian (Русский)</option>
    <option value="tr">Turkish (Türkçe)</option>
</select>

<p id='result'></p>

