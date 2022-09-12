<template>
  <div class="contained page-margin documentary-project-page">
    <div class="back-btn mb-24">
      <nuxt-link to="/documentary" class="btn-primary"
        ><span>&#8592; Back to all</span></nuxt-link
      >
    </div>
    <div class="text-wrapper">
      <h1 class="display-style">
        you are not lost, you already drew yourself a map
      </h1>
      <div class="image-wrapper">
        <figure>
          <img src="/images/notlost/featured.jpg" />
        </figure>
      </div>
      <div class="about">
        <div class="text-wrapper">
          <p>
            Mining my highly-organized archive of iPhone videos from my early
            20s in New York City, this text-driven personal essay film explores
            the collisions between the compulsion to document life and
            reluctance to connect with other people.
          </p>
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
};
</script>