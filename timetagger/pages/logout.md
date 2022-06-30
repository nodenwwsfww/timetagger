# Logout

<script src='./app/tools.js'></script>
<script src='./app/locale.js'></script>

<script>

async function logout() {
    await tools.logout();

    let state = tools.url2dict(location.hash);
    location.replace(state.page || "./");
}

window.addEventListener('load', logout);
</script>

<p data-i18n-key="notify-logging-out">Logging out ...</p>
