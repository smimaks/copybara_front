import { controller } from './app.js';

const sendBtn = document.querySelector('.sendBtn');
sendBtn.addEventListener('click', async () => await controller.auth());
