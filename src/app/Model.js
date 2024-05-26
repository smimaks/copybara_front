export class Model {
  constructor(api) {
    this.api = api;
  }

  async login({ username, password }) {
    return this.api.login({ username, password });
  }

  async logout(token) {
    return this.api.logout(token);
  }

  async saveRecord(item) {
    const savedItem = await this.api.saveServiceRecord(item);
    //  после сохранения в бд будет приходить реальная айдишка
    savedItem.id = Math.floor(Math.random() * (1000000 - 1) + 1);
    return savedItem;
  }

  async saveRecords(items) {
    return this.api.saveAllRecords(items);
  }

  async deleteRecord(id) {
    return this.api.deleteRecord(id);
  }
}
