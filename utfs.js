import fetch from "node-fetch";

// Telegram Bot API Link: https://core.telegram.org/bots/api#available-methods
// BotFather Guide: https://core.telegram.org/bots/features#botfather

// params are the parameters that you want to send to the API in the request body

export default class Utfs {
  constructor(token) {
    this.baseUrl = `https://api.telegram.org/bot${token}`;
  }

  // private method
  async #request(path, params) {
    let response = await fetch(`${this.baseUrl}${path}`, {
      method: params ? "POST" : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    let data = await response.json();
    return data;
  }

  async getMe() {
    return await this.#request("/getMe");
  }

  async sendMessage(params) {
    return await this.#request("/sendMessage", params);
  }

  async sendDocument(params) {
    return await this.#request("/sendPhoto", params);
  }

  async deleteMessage(params) {
    return await this.#request("/deleteMessage", params);
  }
}
