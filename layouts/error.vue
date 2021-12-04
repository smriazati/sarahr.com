<template>
  <div class="layout-wrapper">
    <div class="text-wrapper">
      <h1 v-if="error.statusCode === 404">This page doesn't exist</h1>
      <h1 v-else>An error occurred</h1>
      <p>
        View <nuxt-link to="/work">our work</nuxt-link> instead or
        <nuxt-link to="/contact">say hi</nuxt-link>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "home",
  name: "Error",
  mounted() {
    console.log("ERROR", this.error);
  },
};
</script>
=