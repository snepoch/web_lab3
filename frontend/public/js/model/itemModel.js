export default class itemModel {
  constructor() {
    this.id = Math.round(Math.random() * 10000).toString();
    this.title = "Lorem ipsum";
    this.text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    return this.onModelChange();
  }

  changeTitle(title) {
    this.title = title;
  }

  changeText(text) {
    this.text = text;
  }

  onModelChange() {
    let handler = {
      set: (obj, prop, val) => {
        obj[prop] = val;
        if (this.onChangeCallBack) this.onChangeCallBack();
        return true;
      },
    };
    return new Proxy(this, handler);
  }
}
