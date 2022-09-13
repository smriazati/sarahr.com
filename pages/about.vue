<template>
  <main class="contained page-margin">
    <section class="">
      <AboutBio />
    </section>
  </main>
</template>
<script>
export default {
  head() {
    return {
      title: "About & Contact",
      meta: [
        {
          hid: "og:image",
          name: "og:image",
          content: "/media/bio.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>