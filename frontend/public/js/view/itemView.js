export default class itemView {
  constructor(itemModel) {
    this.itemModel = itemModel;
  }

  toHtml() {
    return `<div class="all-container d-flex flex-row  align-items-center edit" id="${this.itemModel.id}">
    <div class="card-style edit-card w-75">
      <div class="card-content p-4">
        <h5 class="card-title">${this.itemModel.title}</h5>
        <p class="card-text">${this.itemModel.text}</p>
        <button class="btn btn-outline-dark">Add comment</button>
      </div>
    </div>
    <aside class="d-flex flex-column aside">
      <button class="btn btn-outline-dark mb-2" id="title">Change title</button>
      <button class="btn btn-outline-dark mb-2" id="text">Change text</button>
      <button class="btn btn-danger" id="delete">Delete</button>
    </aside>
  </div>`;
  }
}
