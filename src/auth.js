function getAuthData() {
  const login = document.querySelector('.login').value;
  const password = document.querySelector('.password').value;
  if (!login || !password) throw new Error('FUCK UP!');
  return { login, password };
}

async function sendAuthData({ login, password }) {
  const response = await fetch('http://localhost:3001/api/gateway/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login, password }),
  });
  if (response.ok) {
    const result = await response.json();
    localStorage.setItem('session', result.session);
    window.location.href = '../public/main.html';
  } else throw new Error('Api Error');
}

async function auth() {
  const authData = getAuthData();
  await sendAuthData(authData);
}

const sendBtn = document.querySelector('.sendBtn');
sendBtn.addEventListener('click', async () => await auth());
