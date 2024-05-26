import { controller } from './app.js';

const btn = document.querySelector('.record_save');
btn.addEventListener('click', async () => await controller.setService());

const approveButton = document.querySelector('.approve');
approveButton.addEventListener('click', async () => await controller.saveAllRecords());
