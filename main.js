document.getElementById('search-button').addEventListener('click', async () => {
    const username = document.getElementById('username-input').value.trim();
    if (!username) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('Usuário não encontrado');
        }
        const data = await response.json();

        document.querySelector('.profile-avatar').src = data.avatar_url;
        document.querySelector('.profile-name').textContent = data.name || data.login;
        document.querySelector('.profile-username').textContent = `@${data.login}`;
        document.getElementById('repos').textContent = data.public_repos;
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('following').textContent = data.following;
        document.getElementById('github-link').href = data.html_url;

        document.querySelector('.profile-info').classList.remove('hidden');
    } catch (error) {
        alert(error.message);
    }
});