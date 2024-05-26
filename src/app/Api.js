export class Api {
  constructor(host, port) {
    this.host = host;
    this.port = port;
  }

  #createBaseUrl() {
    return `http://${this.host}:${this.port}`;
  }
  #createHeaders() {
    return { 'Content-Type': 'application/json' };
  }

  async #responseHandler(res) {
    if (!res.ok) {
      console.error(res.message);
      throw new Error(`API ERROR: ${res.statusText}`);
    }
    return res.json();
  }

  async login({ username, password }) {
    // const response = await fetch(`${this.#createBaseUrl()}user/login`, {
    //   method: 'POST',
    //   headers: this.#createHeaders(),
    //   body: JSON.stringify({ username, password }),
    // })
    //
    // return this.#responseHandler(response);
    return `${username}:${password}`;
  }

  async logout(token) {
    // const response = await fetch(`${this.#createBaseUrl()}user/logout`, {
    //   method: 'POST',
    //   headers: this.#createHeaders(),
    //   body: JSON.stringify(token),
    // });
    //
    // return this.#responseHandler(response);
    return 'ok';
  }

  async saveServiceRecord(item) {
    // const response = await fetch(`${this.#createBaseUrl()}/service/record`, {
    //   method: 'POST',
    //   headers: this.#createHeaders(),
    //   body: JSON.stringify(item),
    // })
    // return this.#responseHandler(response);

    return item;
  }

  async saveAllServiceRecords(items) {
    //   const response = await fetch(`${this.#createBaseUrl()}/service/record/all`, {
    //     method: 'POST',
    //     headers: this.#createHeaders(),
    //     body: JSON.stringify(items),
    //   });
    //   return this.#responseHandler(response);

    return items;
  }

  async deleteRecord(id) {
    // const response = await fetch(`http://${this.#createBaseUrl()}/service/record/${id}`, {
    //   method: 'DELETE',
    //   headers: this.#createHeaders(),
    // });
    // return this.#responseHandler(response);
    return 'ok';
  }
}
