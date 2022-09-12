<template>
  <div class="contained page-margin documentary-project-page">
    <div class="back-btn mb-24">
      <nuxt-link to="/documentary" class="btn-primary"
        ><span>&#8592; Back to all</span></nuxt-link
      >
    </div>
    <div class="text-wrapper">
      <h1 class="display-style">Italian Circus</h1>
      <div class="about">
        <div class="text-wrapper">
          <p>
            I was living in Treviso, Italy when the circus came to town.
            Overnight, it sprang to life from an empty yellow field alongside my
            daily commute. Tents, lights, an RV village and animals like
            elephants, tigers and zebras. I accompanied writer Caitlin Hu to
            photograph the Orfei Circus, one of Italy's remaining family
            circuses.
          </p>
        </div>
      </div>
      <div class="stills-gallery">
        <h2 class="title-style">Stills</h2>
        <div v-for="(item, index) in gallery" :key="index">
          <img :src="item.path" :alt="item.alt" />
        </div>
      </div>
      <div class="back-to-top">
        <button class="btn-primary" @click="backToTop()">
          <span>&#8593; Back to top</span>
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import commonMixin from "~/mixins/docPages.js";

export default {
  mixins: [commonMixin],
  data() {
    return {
      gallery: [
        {
          path: "/images/italiancircus/gallery/1.jpg",
          alt: "description",
        },
        {
          path: "/images/italiancircus/gallery/2.jpg",
          alt: "description",
        },
        {
          path: "/images/italiancircus/gallery/3.jpg",
          alt: "description",
        },
        {
          path: "/images/italiancircus/gallery/4.jpg",
          alt: "description",
        },
        {
          path: "/images/italiancircus/gallery/5.jpg",
          alt: "description",
        },
        {
          path: "/images/italiancircus/gallery/6.jpg",
          alt: "description",
        },
        {
          path: "/images/italiancircus/gallery/7.jpg",
          alt: "description",
        },
        {
          path: "/images/italiancircus/gallery/8.jpg",
          alt: "description",
        },
        {
          path: "/images/italiancircus/gallery/9.jpg",
          alt: "description",
        },
        {
          path: "/images/italiancircus/gallery/10.jpg",
          alt: "description",
        },
        {
          path: "/images/italiancircus/gallery/11.jpg",
          alt: "description",
        },
      ],
    };
  },
};
</script>