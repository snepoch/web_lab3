import itemView from "../view/itemView.js";

export default class itemViewList {
  constructor(itemModelList) {
    this.itemModelList = itemModelList;
    this.addController = null;
    this.delController = null;
    document.querySelector("#add").addEventListener("click", () => {
      this.addController();
    });
    document.querySelector(".blog").addEventListener("click", (e) => {
      if (e.target.parentNode.parentNode.classList.contains("edit")) {
        const id = e.target.parentNode.parentNode.id;

        if (e.target.id == "title") {
          const title = prompt("Input your title:");

          this.itemModelList.changeTitle(id, title);
        } else if (e.target.id == "text") {
          const text = prompt("Input your text:");

          this.itemModelList.changeText(id, text);
        } else if (e.target.id == "delete") {
          this.itemModelList.delete(id);
        }
      }
    });
  }

  setAddController(add) {
    this.addController = add;
  }
  setDelController(del) {
    this.delController = del;
  }

  toHtml() {
    const items = this.itemModelList.items
      .map((item) => {
        const ItemView = new itemView(item);
        return ItemView.toHtml();
      })
      .join("");
    document.querySelector(".blog").innerHTML = `${items}`;
  }
}
