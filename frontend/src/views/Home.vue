<template>
  <div>
    <div class="blog" v-if="$store.state.model.items.length">
      <post
        v-for="item in $store.state.model.items"
        v-bind:key="item"
        v-bind:item="item"
      />
    </div>
    <h1 v-else>Any Post</h1>
    <div class="all-container d-flex flex-row justify-content-center edit">
      <router-link to="/add" class="btn btn-outline-dark" id="add"
        >Add card</router-link
      >
    </div>
  </div>
</template>

<script>
import post from "@/components/post.vue";

export default {
  name: "Home",
  components: {
    post,
  },
  created() {
    this.$store.dispatch("LOAD");
  },
};
</script>
<style scoped>
.btn:hover {
  color: white !important;
}
</style>
