<template>
  <div class="contained page-margin documentary-project-page">
    <div class="back-btn mb-24">
      <nuxt-link to="/documentary" class="btn-primary"
        ><span>&#8592; Back to all</span></nuxt-link
      >
    </div>
    <div class="text-wrapper">
      <h1 class="display-style">alt-ai</h1>
      <div class="trailer">
        <h2 class="title-style">Trailer</h2>
        <div class="embed-container">
          <div style="padding: 56.25% 0 0 0; position: relative">
            <iframe
              src="https://player.vimeo.com/video/319396651?h=50c40aa37e&color=ffffff&title=0&portrait=0"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              "
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div class="about">
        <div class="text-wrapper">
          <p>TRT: 35 minutes</p>
          <p>
            <em>monumental</em> is an experimental documentary about toppled
            statues, Southern history, the legacy of names, the resilience of
            bricks, the power of poetry, the definition of patriotism, hidden
            family trees and segregated cemeteries. There is no static history.
            It lives on, layered in the landscape, painted on the brick mills.
            Through investigating the ripples of the words and deeds of local
            postbellum industrialist Julian Shakespeare Carr, paradoxically
            called “the most generous white supremacist,” and reenacting scenes
            from the childhood of Pauli Murray, an unsung civil and women’s
            rights activist, the film scratches away at surfaces of stories
            about Durham, North Carolina. Careful scrutiny of such surfaces may
            reveal effaced answers to the questions that history leaves us with
            today, regarding racial identity and segregation, industrialization
            and labor, and gentrification and community. As statues topple and
            new monuments rise, this documentary invites consideration of where
            have we been, where we are now, and where we are going.
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
          path: "/images/monumental/gallery/1.jpg",
          alt: "description",
        },
        {
          path: "/images/monumental/gallery/2.jpg",
          alt: "description",
        },
        {
          path: "/images/monumental/gallery/3.jpg",
          alt: "description",
        },
      ],
    };
  },
};
</script>