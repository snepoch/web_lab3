<template>
  <div>
    <h1>Are you sure?</h1>
    <div class="buttons-wrapper">
      <div class="buttons">
        <router-link
          @click="deletePost()"
          to="/"
          type="submit"
          class="btn btn-primary btn-block mb-2"
        >
          Delete
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
</template>
<script>
export default {
  props: ["id"],
  methods: {
    deletePost() {
      console.log(this.id);
      this.$store.dispatch("DELETE", this.id);
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