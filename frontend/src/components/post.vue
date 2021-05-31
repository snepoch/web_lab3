<template>
  <div
    class="all-container d-flex flex-row align-items-center edit"
    id="${this.itemModel.id}"
  >
    <div class="card-style edit-card w-75">
      <div class="card-content p-4">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">{{ item.text }}</p>
      </div>
    </div>
    <aside class="d-flex flex-column aside">
      <router-link
        :to="{ name: 'edit', params: { id: item.id } }"
        class="btn btn-outline-dark mb-2"
        id="edit"
        >Edit</router-link
      >
      <router-link
        :to="{ name: 'delete', params: { id: item.id } }"
        class="btn btn-danger"
        id="delete"
        >Delete</router-link
      >
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  methods() {},
};
</script>

<style scoped>
.card-title {
  font-size: 25px;
  font-weight: 800;
  border-bottom: 1px black solid;
}
.card-text {
  text-align: start;
  font-size: 20px;
  font-weight: 600;
}
.btn:hover {
  color: white !important;
}
</style>
