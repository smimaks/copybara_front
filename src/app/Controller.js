export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async auth() {
    try {
      const data = this.#getAuthData();
      const result = await this.model.login(data);
      localStorage.setItem('session', result);
      this.view.login();
    } catch (e) {
      console.log(e);
    }
  }

  async setService() {
    try {
      const item = this.#getServiceRecordValues();
      const result = await this.model.saveRecord(item);
      this.view.buildServiceRecord(result);
      const element = document.querySelector('.element_wrapper');
      element.addEventListener('click', async event => {
        await this.deleteServiceFromList(event.target.id);
        event.target.parentElement.parentNode.innerText = '';
      });
    } catch (e) {
      console.log(e);
    }
  }

  async saveAllRecords() {
    try {
      const items = this.#getAllRecordsItems();
    } catch (e) {
      console.log(e);
    }
  }

  async deleteServiceFromList(id) {
    try {
      const result = await this.model.deleteRecord(id);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  #getAuthData() {
    const login = document.querySelector('.login').value;
    const password = document.querySelector('.password').value;
    if (!login || !password) throw new Error('FUCK UP!');
    return { login, password };
  }

  #getServiceRecordValues() {
    const element = document.querySelector('.goods');
    const amount = document.querySelector('.amount').value;
    const price = document.querySelector('.price').value;
    return { title: element.options[element.selectedIndex].text, amount, price };
  }

  #getAllRecordsItems() {
    const wrappers = document.querySelectorAll('.element_wrapper');
    const itemsToSave = [];
    wrappers.forEach(wrapper => {
      const id = wrapper.id;
      const title = wrapper.querySelector('.element_title').innerText;
      const count = +wrapper.querySelector('.element_count').innerText;
      const price = +wrapper.querySelector('.element_price').innerText;

      itemsToSave.push({
        id,
        title,
        count,
        price,
      });
    });
    return itemsToSave;
  }
}
