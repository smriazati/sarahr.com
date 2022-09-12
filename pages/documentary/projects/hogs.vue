<template>
  <div class="contained page-margin documentary-project-page">
    <div class="back-btn mb-24">
      <nuxt-link to="/documentary" class="btn-primary"
        ><span>&#8592; Back to all</span></nuxt-link
      >
    </div>
    <div class="text-wrapper">
      <h1 class="display-style">A Stench in the Nostrils of God</h1>
      <div class="about">
        <div class="text-wrapper">
          <p>
            You can smell the Smithfield pork processing plant in Tar Heel,
            North Carolina before you can see it.
            <a
              href="https://theoutline.com/post/8633/smithfield-pork-tar-heel-north-carolina-industrial-farms-lawsuits?utm_source=topic_recent&zd=1&zi=infl36fu"
            >
              Published in theoutline.com.</a
            >
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
          path: "/images/hogs/gallery/1.jpg",
          alt: "description",
        },
        {
          path: "/images/hogs/gallery/2.jpg",
          alt: "description",
        },
        {
          path: "/images/hogs/gallery/3.jpg",
          alt: "description",
        },
        {
          path: "/images/hogs/gallery/4.jpg",
          alt: "description",
        },
        {
          path: "/images/hogs/gallery/5.jpg",
          alt: "description",
        },
        {
          path: "/images/hogs/gallery/6.jpg",
          alt: "description",
        },
        {
          path: "/images/hogs/gallery/7.jpg",
          alt: "description",
        },
        {
          path: "/images/hogs/gallery/8.jpg",
          alt: "description",
        },
        {
          path: "/images/hogs/gallery/9.jpg",
          alt: "description",
        },
        {
          path: "/images/hogs/gallery/10.jpg",
          alt: "description",
        },
        {
          path: "/images/hogs/gallery/11.jpg",
          alt: "description",
        },
      ],
    };
  },
};
</script>