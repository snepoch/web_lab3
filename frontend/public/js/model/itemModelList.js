export default class itemModelList {
  constructor() {
    this.items = [];
    this.onChangeCallBack = null;
  }
  add(item) {
    item.onChangeCallBack = this.onChangeCallBack;
    this.items.push(item);
  }
  delete(itemId) {
    const itemIndex = this.items.findIndex((item) => item.id === itemId);
    this.items.splice(itemIndex, 1);
  }
  changeTitle(itemId, title) {
    const itemIndex = this.items.findIndex((item) => item.id === itemId);
    this.items[itemIndex].changeTitle(title);
  }
  changeText(itemId, text) {
    const itemIndex = this.items.findIndex((item) => item.id === itemId);
    this.items[itemIndex].changeText(text);
  }
  setOnChangeCallback(funcCallback) {
    this.onChangeCallBack = funcCallback;
  }
}
