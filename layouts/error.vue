<template>
  <div class="layout-wrapper">
    <div class="text-wrapper contained page-margin">
      <h1 v-if="error.statusCode === 404">This page doesn't exist</h1>
      <h1 v-else>An unknown error occurred</h1>
      <p>
        Go <nuxt-link to="/">back to the home page</nuxt-link>, or
        <nuxt-link to="/about">say hi</nuxt-link>.
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