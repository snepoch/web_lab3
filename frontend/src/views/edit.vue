<template>
  <div class="container">
    <div class="rounded text-dark justify-content-center">
      <div
        class="rounded border border border-info bg-light border-3 text-center fw-bold"
        action="../index.html"
        id="createForm"
      >
        <h2 class="display-4 fw-bold" style="font-weight: 900">Edit Post</h2>
        <div class="form-outline mb-4 fs-3">
          <label
            class="form-label"
            for="name"
            style="font-weight: 900; font-size: 20px"
            >Title
          </label>
          <input
            v-model="title"
            required
            placeholder="Title"
            type="text"
            id="name"
            class="form-control"
          />
        </div>
        <div class="form-outline mb-3 fs-2">
          <label
            class="form-label"
            for="phone"
            style="font-weight: 900; font-size: 20px"
            >Text
          </label>
          <input
            v-model="text"
            required
            placeholder="Text"
            type="tel"
            id="phone"
            class="form-control"
          />
        </div>
        <div class="buttons-wrapper">
          <div class="buttons">
            <router-link
              to="/"
              @click="edit(id, title, text)"
              type="submit"
              class="btn btn-primary btn-block mb-2"
            >
              Edit post
            </router-link>
            <router-link
              to="/"
              type="submit"
              class="btn btn-primary btn-block mb-2"
            >
              Back
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    edit(id, title, text) {
      //   console.log(this.id);
      //   console.log(id, title, text);
      this.$store.dispatch("EDIT", { id, title, text });
    },
  },
};
</script>
<style scoped>
.buttons {
  width: 40%;
  text-align: center;
}
.buttons-wrapper {
  display: flex;
  justify-content: center;
}
.btn {
  color: white !important;
}
</style>