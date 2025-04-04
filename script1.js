function changeTheme() {
    const themeInput = document.getElementById('themeInput').value.trim().toLowerCase();
    const body = document.body;

    // Remove any previously set themes
    body.classList.remove('cyberpunk', 'nature', 'retro');

    // Check the input and apply the corresponding theme
    if (themeInput === 'cyberpunk') {
        body.classList.add('cyberpunk');
    } else if (themeInput === 'nature') {
        body.classList.add('nature');
    } else if (themeInput === 'retro') {
        body.classList.add('retro');
    } else {
        alert('Sorry, we don\'t have that theme. Try "Cyberpunk", "Nature", or "Retro".');
    }
}
