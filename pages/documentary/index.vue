<template>
  <main class="contained page-margin">
    <section class="page-intro">
      <div class="text-wrapper">
        <h1>Documentary projects</h1>
      </div>
    </section>
    <div class="doc-grid">
      <div v-for="(item, index) in projects" :key="index" class="grid-item">
        <nuxt-link :to="`/documentary/projects/${item.slug}`">
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
    <div class="back-to-top">
      <button class="btn-primary" @click="backToTop()">
        <span>&#8593; Back to top</span>
      </button>
    </div>
  </main>
</template>
  

<script>
import commonMixin from "~/mixins/docPages.js";

export default {
  head() {
    return {
      title: "Documentary Projects",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Documentary projects exploring histories and landscapes.",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.projects[0].img,
        },
        {
          hid: "og:image:alt",
          name: "og:image:alt",
          content: this.projects[0].img_alt,
        },
      ],
    };
  },
  mixins: [commonMixin],
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
        {
          title: "A Stench in the Nostrils of God",
          slug: "hogs",
          img: "/images/hogs/featured.jpg",
          img_alt:
            "gloomy moody landscape photo of a rural water tour that says Duplin County",
        },
        {
          title: "Italian Circus",
          slug: "circus",
          img: "/images/italiancircus/featured.jpg",
          img_alt:
            "a young male circus performer in his trailer, next to his circus costume",
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
  grid-row-gap: 30px;
  > *:first-child {
    grid-column: 1 / span 8;
    grid-row: 1 / 2;
  }
  > *:nth-child(2) {
    grid-column: 5 / span 6;
    grid-row: 2 / 3;
  }
  > *:nth-child(3) {
    grid-column: 1 / span 4;
    grid-row: 3 / 4;
  }
  > *:nth-child(4) {
    grid-column: 5 / span 6;
    grid-row: 4 / 5;
  }
}
</style>