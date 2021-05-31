export default class itemModel {
  constructor(title, text, id = Math.round(Math.random() * 10000)) {
    this.id = id;
    this.title = title;
    this.text = text;
  }
}
