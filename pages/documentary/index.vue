<template>
  <main class="contained page-margin">
    <section class="page-intro">
      <div class="text-wrapper">
        <h1>Documentary projects</h1>
      </div>
    </section>
    <div class="doc-grid">
      <div v-for="(item, index) in projects" :key="index" class="grid-item">
        <nuxt-link :to="`/documentary/${item.slug}`">
          <div class="image-wrapper mb-8">
            <figure v-if="item.img">
              <img :src="item.img" :alt="item.img_alt" />
            </figure>
          </div>
          <div class="text-wrapper">
            <h2 v-if="item.title" class="large-text-style">{{ item.title }}</h2>
          </div>
        </nuxt-link>
      </div>
    </div>
  </main>
</template>
  

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "monumental",
          slug: "monumental",
          img: "/images/monumental/featured.jpg",
          img_alt: "black and white photo of a graveyard",
        },
        {
          title: "you are not lost, you already drew yourself a map",
          slug: "notlost",
          img: "/images/notlost/featured.jpg",
          img_alt: "close up of a hand about to light itself on fire",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.doc-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
  > *:first-child {
    grid-column: 1 / span 8;
    grid-row: 1 / 2;
  }
  > *:nth-child(2) {
    grid-column: 5 / span 6;
    grid-row: 2 / 3;
  }
}
</style>