import itemModel from "./itemModel.js";
export default class Model {
  constructor() {
    this.items = [];
  }
  add(title, text) {
    const item = new itemModel(title, text);
    this.items.push(item);
    this.sendItemsOnServer();
    this.getItemsFromServer();
  }
  delete(itemId) {
    const itemIndex = this.items.findIndex((item) => item.id == itemId);
    this.items.splice(itemIndex, 1);
    this.sendItemsOnServer();
    this.getItemsFromServer();
  }
  edit(itemId, title, text) {
    const itemIndex = this.items.findIndex((item) => item.id == itemId);

    this.items[itemIndex].title = title;
    this.items[itemIndex].text = text;
    this.sendItemsOnServer();
    this.getItemsFromServer();
  }
  async getItemsFromServer() {
    await fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((res) => {
        let loadItems = [];
        res.items.forEach((item) => {
          const loadItem = new itemModel(item.title, item.text, item.id);
          loadItems.push(loadItem);
          // console.log(loadItems);
          this.items = loadItems;
        });
      });
  }
  async sendItemsOnServer() {
    await fetch("http://localhost:3000/set", {
      method: "POST",
      body: JSON.stringify({ items: this.items }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
